import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { FooterSection } from "@/components/footer-section"

const CTAS = [
  { href: "https://nobodysms.cn/", label: "立即登录" },
  { href: "https://nobodysms.online/", label: "立即注册" },
  { href: "https://www.yuque.com/nobodysms/xlypsu", label: "使用教程" },
  { href: "https://qm.qq.com/q/RGUJvLdoce", label: "官方客服" },
] as const

export function SeoPageChrome({
  children,
  eyebrow,
}: {
  children: ReactNode
  eyebrow?: string
}) {
  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <header className="border-b border-primary/20 pl-6 md:pl-12 pr-6 md:pr-12 py-5 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative w-10 h-10 block">
              <Image
                src="/images/logo.jpg"
                alt="NobodySMS"
                fill
                className="object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground group-hover:text-primary transition-colors">
              NobodySMS
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-4 md:gap-6" aria-label="站内导航">
            <Link
              href="/jima"
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              接码说明
            </Link>
            <Link
              href="/faq"
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/guide"
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              教程
            </Link>
            <Link
              href="/"
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              首页
            </Link>
          </nav>
        </header>

        <article className="pl-6 md:pl-12 pr-6 md:pr-12 py-16 md:py-24 max-w-3xl">
          {eyebrow ? (
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
          ) : null}
          {children}

          <div className="mt-16 flex flex-wrap items-center gap-4 md:gap-6">
            {CTAS.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
              >
                {cta.label}
              </a>
            ))}
          </div>

          <p className="mt-10 font-mono text-[10px] text-muted-foreground tracking-wide">
            相关页面：
            <Link href="/jima" className="text-primary/80 hover:text-primary mx-1">
              接码平台
            </Link>
            ·
            <Link href="/faq" className="text-primary/80 hover:text-primary mx-1">
              常见问题
            </Link>
            ·
            <Link href="/guide" className="text-primary/80 hover:text-primary mx-1">
              使用教程
            </Link>
          </p>
        </article>

        <FooterSection />
      </div>
    </main>
  )
}
