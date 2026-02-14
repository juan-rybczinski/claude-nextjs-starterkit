import Link from "next/link"
import { SidebarNav } from "./SidebarNav"
import { siteConfig } from "@/lib/constants"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r bg-card md:sticky md:top-0 md:flex md:flex-col">
      {/* 로고 */}
      <div className="flex h-14 items-center px-4">
        <Link href="/" className="text-lg font-bold">
          {siteConfig.name}
        </Link>
      </div>
      <Separator />

      {/* 네비게이션 */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <SidebarNav />
      </div>

      {/* 사용자 영역 */}
      <Separator />
      <div className="flex items-center gap-3 px-4 py-3">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="text-xs">U</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">사용자</span>
          <span className="text-xs text-muted-foreground">user@example.com</span>
        </div>
      </div>
    </aside>
  )
}
