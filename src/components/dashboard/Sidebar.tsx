import Link from "next/link"
import { SidebarNav } from "./SidebarNav"
import { UserNav } from "@/components/composite/UserNav"
import { siteConfig } from "@/lib/constants"
import { Separator } from "@/components/ui/separator"

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r bg-card md:sticky md:top-0 md:flex md:flex-col">
      <div className="flex h-14 items-center px-4">
        <Link href="/" className="text-lg font-bold">
          {siteConfig.name}
        </Link>
      </div>
      <Separator />

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <SidebarNav />
      </div>

      <Separator />
      <div className="px-1 py-1">
        <UserNav />
      </div>
    </aside>
  )
}
