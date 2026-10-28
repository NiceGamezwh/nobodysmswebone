import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nobodysms.com/sitemap.xml",
    host: "https://nobodysms.com",
  }
}
