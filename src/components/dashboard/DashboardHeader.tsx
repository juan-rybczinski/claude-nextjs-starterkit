"use client"

import { Search } from "lucide-react"
import { MobileSidebar } from "./MobileSidebar"
import { DashboardBreadcrumb } from "@/components/composite/DashboardBreadcrumb"
import { ThemeToggle } from "@/components/ThemeToggle"
import { UserNav } from "@/components/composite/UserNav"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <MobileSidebar />
      <DashboardBreadcrumb />
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <CommandPaletteTrigger />
        <ThemeToggle />
        <div className="hidden md:block">
          <UserNav collapsed />
        </div>
      </div>
    </header>
  )
}

function CommandPaletteTrigger() {
  return (
    <Button
      variant="outline"
      className="hidden h-9 w-60 justify-start text-sm text-muted-foreground sm:flex"
      onClick={() => {
        document.dispatchEvent(
          new KeyboardEvent("keydown", { key: "k", metaKey: true })
        )
      }}
    >
      <Search className="mr-2 h-4 w-4" />
      검색...
      <kbd className="ml-auto rounded border bg-muted px-1.5 py-0.5 text-xs">⌘K</kbd>
    </Button>
  )
}
