import type { Metadata } from "next"
import { SearchClient } from "@/components/search-client"

export const metadata: Metadata = {
  title: "项目 ID 查询 - nobodysms",
  description: "输入项目名关键词，查询对应的项目 ID。无需登录，直接查询。",
}

export default function SearchPage() {
  return <SearchClient />
}
