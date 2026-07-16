import { type NextRequest, NextResponse } from "next/server"

// 豪猪原平台地址
const BASE_URL = "https://h5.haozhuma.com"

// ============================================================
// 【需要更新 Cookie 时，只改这里这一行】
// Cookie 失效后（查询报错时），把本地电脑生成的新 Cookie 粘贴到下面即可。
// ============================================================
const HAOZHUMA_COOKIE = "PHPSESSID=ficrma0v7d0oh4qo10m91561e5; sl-session=VPufepnrWGoU/oG+94OLpQ=="

export const dynamic = "force-dynamic"

interface HaozhumaItem {
  name: string
  sid: string
}

interface ParsedProject {
  // 项目 ID，例如【77756】中的 77756
  id: string
  // 项目名，例如 抖音百科
  name: string
}

/**
 * 从豪猪返回的 name 字段中解析项目 ID 与项目名。
 * 原始格式例如："【77756】抖音百科[限对接]        [ec552cf77e862aa0]"
 * 我们只需要 77756 和 抖音百科，sid 对我们无用。
 */
function parseProject(rawName: string): ParsedProject | null {
  if (!rawName) return null

  // 匹配【数字】后面的项目名（截止到第一个方括号或结束）
  const match = rawName.match(/【\s*(\d+)\s*】\s*([^[\]［］【】]+)/)
  if (!match) return null

  const id = match[1].trim()
  const name = match[2].trim()
  if (!id || !name) return null

  return { id, name }
}

export async function GET(request: NextRequest) {
  const keyword = request.nextUrl.searchParams.get("keyword")?.trim()

  if (!keyword) {
    return NextResponse.json({ success: false, error: "请输入项目名关键词" }, { status: 400 })
  }

  const cookie = HAOZHUMA_COOKIE

  try {
    const url = `${BASE_URL}/api.php?type=30&gjc=${encodeURIComponent(keyword)}`
    const res = await fetch(url, {
      headers: {
        Cookie: cookie,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      cache: "no-store",
    })

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: `豪猪接口请求失败：${res.status}` },
        { status: 502 },
      )
    }

    const data = await res.json()

    // code !== 1 代表接口返回异常（比如 Cookie 失效）
    if (data.code !== 1) {
      return NextResponse.json({
        success: false,
        error: data.msg || "查询失败，Cookie 可能已失效，请更新 HAOZHUMA_COOKIE",
      })
    }

    const rawList: HaozhumaItem[] = Array.isArray(data.data) ? data.data : []

    // 只保留项目名 + ID，去掉 sid 等无用信息
    const projects: ParsedProject[] = rawList
      .map((item) => parseProject(item.name))
      .filter((p): p is ParsedProject => p !== null)

    return NextResponse.json({ success: true, keyword, projects })
  } catch (e) {
    const message = e instanceof Error ? e.message : "未知错误"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
