import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
