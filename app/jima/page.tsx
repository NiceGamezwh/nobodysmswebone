import type { Metadata } from "next"
import { SeoPageChrome } from "@/components/seo-page-chrome"

export const metadata: Metadata = {
  title: "接码平台低价 ¥0.36/条 - 便宜接码网站",
  description:
    "NobodySMS 接码平台主推低价接码：普通仅 ¥0.36/条，卡密充值更便宜。无需个人信息，覆盖全平台短信验证码接收。",
  alternates: {
    canonical: "/jima",
  },
  openGraph: {
    title: "接码平台低价 ¥0.36/条 | NobodySMS",
    description:
      "便宜接码网站：¥0.36/条起，买卡密充值更优惠。匿名安全，即时接收短信验证码。",
    url: "https://nobodysms.com/jima",
    locale: "zh_CN",
    type: "website",
  },
}

export default function JimaPage() {
  return (
    <SeoPageChrome eyebrow="接码平台 / 低价说明">
      <h1 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight text-foreground">
        便宜接码平台：¥0.36/条起
      </h1>

      <p className="mt-8 font-mono text-sm text-muted-foreground leading-relaxed">
        正在找<strong className="text-foreground">接码</strong>、<strong className="text-foreground">接码平台</strong>
        或<strong className="text-foreground">接码网站</strong>？NobodySMS
        专注低价短信验证码接收：普通用户仅需{" "}
        <strong className="text-primary">¥0.36/条</strong>
        ，买卡密充值还能拿到更低单价。无需提交个人信息，号码覆盖全平台，适合日常注册与验证场景。
      </p>

      <h2 className="mt-14 font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-primary">
        为什么选择低价接码？
      </h2>
      <p className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed">
        很多接码网站报价偏高，或强制绑定实名信息。NobodySMS
        把价格压到亲民区间：标价{" "}
        <strong className="text-foreground">¥0.36/条</strong>
        ，卡密充值可享约 8–9 折，折合大约{" "}
        <strong className="text-foreground">¥0.2–0.3/条</strong>
        。你只为实际收到的验证码付费，流程简单、成本可控。
      </p>

      <h2 className="mt-14 font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-primary">
        核心卖点一览
      </h2>
      <ul className="mt-4 space-y-3 font-mono text-sm text-muted-foreground leading-relaxed list-disc pl-5">
        <li>
          <strong className="text-foreground">超低价格</strong>：¥0.36/条，卡密充值更优惠。
        </li>
        <li>
          <strong className="text-foreground">无需个人信息</strong>：匿名使用，降低隐私风险。
        </li>
        <li>
          <strong className="text-foreground">覆盖全平台</strong>：社交、电商、游戏等常见验证场景。
        </li>
        <li>
          <strong className="text-foreground">即时送达</strong>：验证码实时推送到控制台。
        </li>
      </ul>

      <h2 className="mt-14 font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-primary">
        怎么开始用？
      </h2>
      <ol className="mt-4 space-y-3 font-mono text-sm text-muted-foreground leading-relaxed list-decimal pl-5">
        <li>
          前往卡密站注册并购买卡密（更划算）：
          <a
            href="https://nobodysms.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-1"
          >
            nobodysms.online
          </a>
        </li>
        <li>
          登录接码控制台取号收码：
          <a
            href="https://nobodysms.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-1"
          >
            nobodysms.cn
          </a>
        </li>
        <li>
          遇到问题可看教程或联系客服。完整步骤见
          <a href="/guide" className="text-primary hover:underline mx-1">
            使用教程
          </a>
          与
          <a href="/faq" className="text-primary hover:underline ml-1">
            FAQ
          </a>
          。
        </li>
      </ol>

      <div className="mt-12 border border-primary/40 bg-background/60 p-6">
        <p className="font-[var(--font-bebas)] text-3xl md:text-4xl text-primary">¥0.36 / 条</p>
        <p className="mt-2 font-mono text-xs text-muted-foreground tracking-wide">
          普通价 · 卡密充值更便宜 · 无需个人信息 · 全平台接码
        </p>
      </div>
    </SeoPageChrome>
  )
}
