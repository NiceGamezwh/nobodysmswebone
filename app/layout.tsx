import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  metadataBase: new URL("https://nobodysms.com"),
  title: {
    default: "NobodySMS 接码平台 - 短信验证码接收",
    template: "%s | NobodySMS",
  },
  description:
    "NobodySMS 接码平台：即时接收短信验证码，号码覆盖全平台。无需个人信息，匿名安全，仅需 ¥0.36/条。",
  keywords: [
    "接码",
    "接码平台",
    "短信验证码",
    "虚拟号码",
    "SMS verification",
    "NobodySMS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NobodySMS 接码平台 - 短信验证码接收",
    description:
      "即时接收短信验证码，号码覆盖全平台。无需个人信息，仅需 ¥0.36/条。",
    url: "https://nobodysms.com",
    siteName: "NobodySMS",
    locale: "zh_CN",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="dark bg-background">
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
