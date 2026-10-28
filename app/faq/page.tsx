import type { Metadata } from "next"
import { SeoPageChrome } from "@/components/seo-page-chrome"

export const metadata: Metadata = {
  title: "接码 FAQ：价格 ¥0.36、买卡密、怎么登录",
  description:
    "NobodySMS 接码常见问题：短信多少钱？¥0.36/条怎么算？怎么买卡密更便宜？如何登录控制台？含客服与教程入口。",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "接码 FAQ | 便宜价格与使用说明",
    description:
      "解答接码价格、卡密充值、登录方式等问题。低价 ¥0.36/条，买卡密更优惠。",
    url: "https://nobodysms.com/faq",
    locale: "zh_CN",
    type: "website",
  },
}

const faqs = [
  {
    q: "接码多少钱一条？真的便宜吗？",
    a: "普通用户标价为 ¥0.36/条。若通过卡密站购买卡密再充值，可享约 8–9 折，折合大约 ¥0.2–0.3/条，比直接按条付更划算。我们主打低价接码，不做虚高标价。",
  },
  {
    q: "怎么买卡密更优惠？",
    a: "打开卡密站 nobodysms.online 选择面额下单，支付后获得卡密，再在接码平台充值即可。卡密充值通常带折扣，适合经常接码的用户。",
  },
  {
    q: "怎么登录接码平台？",
    a: "访问 nobodysms.cn 进入控制台登录。若尚未有账号，请先到 nobodysms.online 注册并完成卡密充值，再回到控制台取号收码。",
  },
  {
    q: "需要填写个人信息或实名吗？",
    a: "不需要。NobodySMS 强调匿名使用：无需提交个人隐私信息即可完成接码流程，降低泄露风险。",
  },
  {
    q: "支持哪些平台的短信验证码？",
    a: "号码资源覆盖社交、电商、游戏等常见验证场景。具体项目可在控制台搜索；也可使用站内「项目 ID 查询」辅助查找。",
  },
  {
    q: "收不到验证码怎么办？",
    a: "请确认项目选择正确、余额充足，并稍等几秒刷新。仍失败可换号重试，或通过客服 QQ 反馈。详细排错步骤见语雀教程。",
  },
  {
    q: "教程和客服在哪里？",
    a: "完整图文教程：语雀文档。人工客服：QQ 链接。本站也有使用教程概要页，便于快速上手。",
  },
]

export default function FaqPage() {
  return (
    <SeoPageChrome eyebrow="FAQ / 常见问题">
      <h1 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight text-foreground">
        接码常见问题：价格、卡密、登录
      </h1>

      <p className="mt-8 font-mono text-sm text-muted-foreground leading-relaxed">
        下面汇总用户最常问的接码问题，重点说明{" "}
        <strong className="text-primary">¥0.36/条</strong>{" "}
        的低价结构、如何买卡密更便宜，以及如何登录使用。若仍有疑问，可直接联系官方客服。
      </p>

      <div className="mt-12 space-y-10">
        {faqs.map((item) => (
          <section key={item.q}>
            <h2 className="font-[var(--font-bebas)] text-xl md:text-2xl tracking-tight text-primary">
              {item.q}
            </h2>
            <p className="mt-3 font-mono text-sm text-muted-foreground leading-relaxed">{item.a}</p>
          </section>
        ))}
      </div>

      <h2 className="mt-14 font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-primary">
        快速入口
      </h2>
      <ul className="mt-4 space-y-2 font-mono text-sm text-muted-foreground leading-relaxed list-disc pl-5">
        <li>
          登录控制台：
          <a
            href="https://nobodysms.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-1"
          >
            https://nobodysms.cn/
          </a>
        </li>
        <li>
          注册 / 买卡密：
          <a
            href="https://nobodysms.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-1"
          >
            https://nobodysms.online/
          </a>
        </li>
        <li>
          语雀教程：
          <a
            href="https://www.yuque.com/nobodysms/xlypsu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-1"
          >
            https://www.yuque.com/nobodysms/xlypsu
          </a>
        </li>
        <li>
          客服 QQ：
          <a
            href="https://qm.qq.com/q/RGUJvLdoce"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-1"
          >
            点击联系
          </a>
        </li>
      </ul>
    </SeoPageChrome>
  )
}
