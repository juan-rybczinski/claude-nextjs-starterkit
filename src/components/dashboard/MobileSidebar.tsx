"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "./SidebarNav"
import { UserNav } from "@/components/composite/UserNav"
import { siteConfig } from "@/lib/constants"

export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="px-4 py-3">
          <SheetTitle>
            <Link href="/" onClick={() => setOpen(false)}>
              {siteConfig.name}
            </Link>
          </SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="flex-1 px-3 py-4">
          <SidebarNav onNavigate={() => setOpen(false)} />
        </div>
        <Separator />
        <div className="px-1 py-1">
          <UserNav />
        </div>
      </SheetContent>
    </Sheet>
  )
}
