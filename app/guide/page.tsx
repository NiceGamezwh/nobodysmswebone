import type { Metadata } from "next"
import Link from "next/link"
import { SeoPageChrome } from "@/components/seo-page-chrome"

export const metadata: Metadata = {
  title: "接码使用教程 - 低价 ¥0.36/条上手指南",
  description:
    "NobodySMS 接码教程概要：注册买卡密、登录取号、接收验证码。标价 ¥0.36/条，卡密充值更便宜。完整图文见语雀文档。",
  alternates: {
    canonical: "/guide",
  },
  openGraph: {
    title: "接码使用教程 | NobodySMS",
    description:
      "三步上手便宜接码：买卡密 → 登录 → 收验证码。¥0.36/条起，详细步骤链到语雀。",
    url: "https://nobodysms.com/guide",
    locale: "zh_CN",
    type: "website",
  },
}

export default function GuidePage() {
  return (
    <SeoPageChrome eyebrow="使用教程 / 快速上手">
      <h1 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight text-foreground">
        接码使用教程概要
      </h1>

      <p className="mt-8 font-mono text-sm text-muted-foreground leading-relaxed">
        本页是 NobodySMS{" "}
        <strong className="text-foreground">接码网站</strong>{" "}
        的上手概要，帮助你快速完成注册、充值与收码。普通价格仅{" "}
        <strong className="text-primary">¥0.36/条</strong>
        ，通过卡密充值可进一步降低成本。完整截图与排错说明请阅读语雀文档。
      </p>

      <div className="mt-8 border border-primary/30 px-4 py-3 font-mono text-xs text-foreground/90">
        完整教程（推荐）：
        <a
          href="https://www.yuque.com/nobodysms/xlypsu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline ml-2 break-all"
        >
          https://www.yuque.com/nobodysms/xlypsu
        </a>
      </div>

      <h2 className="mt-14 font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-primary">
        第一步：注册并购买卡密（更优惠）
      </h2>
      <p className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed">
        打开卡密站{" "}
        <a
          href="https://nobodysms.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          nobodysms.online
        </a>{" "}
        完成注册，选择合适面额购买卡密。卡密充值通常有 8–9
        折，折合单价大约 ¥0.2–0.3/条，比按条直接消费更便宜，适合经常需要接码的用户。
      </p>

      <h2 className="mt-14 font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-primary">
        第二步：登录接码控制台
      </h2>
      <p className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed">
        访问{" "}
        <a
          href="https://nobodysms.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          nobodysms.cn
        </a>{" "}
        登录。将卡密充值到账户后，即可在控制台选择项目、取号并等待短信。无需填写个人信息，全程匿名。
      </p>

      <h2 className="mt-14 font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-primary">
        第三步：取号并接收验证码
      </h2>
      <p className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed">
        在平台搜索目标项目（或使用站内项目 ID 查询），取号后到对应 App / 网站填写该号码发起验证。验证码会实时出现在控制台；成功接收后按{" "}
        <strong className="text-foreground">¥0.36/条</strong>{" "}
        （或你的折扣价）扣费。若超时未达，可按教程指引换号重试。
      </p>

      <h2 className="mt-14 font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-primary">
        使用提示
      </h2>
      <ul className="mt-4 space-y-3 font-mono text-sm text-muted-foreground leading-relaxed list-disc pl-5">
        <li>优先用卡密充值，单价更低，长期接码更省钱。</li>
        <li>选对项目 ID，可减少空号与失败次数。</li>
        <li>
          价格与登录疑问见{" "}
          <Link href="/faq" className="text-primary hover:underline">
            FAQ
          </Link>
          ；平台卖点见{" "}
          <Link href="/jima" className="text-primary hover:underline">
            接码说明
          </Link>
          。
        </li>
        <li>
          人工协助：
          <a
            href="https://qm.qq.com/q/RGUJvLdoce"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-1"
          >
            官方客服 QQ
          </a>
          。
        </li>
      </ul>
    </SeoPageChrome>
  )
}
