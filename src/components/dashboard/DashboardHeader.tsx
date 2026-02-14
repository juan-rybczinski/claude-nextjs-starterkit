import { MobileSidebar } from "./MobileSidebar"
import { ThemeToggle } from "@/components/ThemeToggle"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <MobileSidebar />
      <h1 className="text-lg font-semibold">대시보드</h1>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  )
}
