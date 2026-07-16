"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"

interface ParsedProject {
  id: string
  name: string
}

export function SearchClient() {
  const [keyword, setKeyword] = useState("")
  const [projects, setProjects] = useState<ParsedProject[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searched, setSearched] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const trimmed = keyword.trim()
    if (!trimmed || loading) return

    setLoading(true)
    setError(null)
    setSearched(true)

    try {
      const res = await fetch(`/api/search?keyword=${encodeURIComponent(trimmed)}`)
      const data = await res.json()

      if (!data.success) {
        setError(data.error || "查询失败，请稍后再试")
        setProjects([])
      } else {
        setProjects(data.projects || [])
      }
    } catch {
      setError("网络错误，请稍后再试")
      setProjects([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen pl-6 md:pl-28 pr-6 md:pr-12 py-16">
      <AnimatedNoise opacity={0.03} />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      {/* 左侧竖排标签 */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary -rotate-90 origin-left block whitespace-nowrap">
          SEARCH
        </span>
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* 返回首页 */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200 mb-12"
        >
          <BitmapChevron className="rotate-180" />
          返回首页
        </Link>

        <h1 className="font-[var(--font-bebas)] text-primary text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-wide">
          项目 ID 查询
        </h1>
        <p className="mt-4 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          输入短信前缀，查询对应的项目 ID。无需登录，直接查询。
        </p>

        {/* 搜索表单 */}
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="例如：韩小圈"
            aria-label="项目名关键词"
            className="flex-1 bg-input border-2 border-primary/40 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200"
          />
          <button
            type="submit"
            disabled={loading}
            className="pixel-button inline-flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "查询中..." : "查询 ID"}
            <BitmapChevron />
          </button>
        </form>

        {/* 结果区域 */}
        <div className="mt-12">
          {error && (
            <div className="border-2 border-destructive/60 bg-destructive/10 px-4 py-3 font-mono text-sm text-destructive">
              {error}
            </div>
          )}

          {!error && searched && !loading && projects.length === 0 && (
            <p className="font-mono text-sm text-muted-foreground">未找到匹配的项目，换个关键词试试。</p>
          )}

          {projects.length > 0 && (
            <div className="border-2 border-primary/30">
              {/* 表头 */}
              <div className="grid grid-cols-[1fr_auto] gap-4 border-b-2 border-primary/30 bg-secondary px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">项目名</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">项目 ID</span>
              </div>
              {/* 表体 */}
              <ul>
                {projects.map((p, i) => (
                  <li
                    key={`${p.id}-${i}`}
                    className="grid grid-cols-[1fr_auto] gap-4 items-center border-b border-border last:border-b-0 px-4 py-3 hover:bg-secondary/50 transition-colors duration-150"
                  >
                    <span className="font-mono text-sm text-foreground truncate">{p.name}</span>
                    <span className="font-[var(--font-bebas)] text-2xl text-primary tabular-nums">{p.id}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
