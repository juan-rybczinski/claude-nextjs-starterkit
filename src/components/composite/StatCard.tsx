import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  label: string
  value: string
  icon: LucideIcon
  change?: string
  trend?: "up" | "down" | "neutral"
}

export function StatCard({ label, value, icon: Icon, change, trend = "up" }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{label}</span>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="mt-2 text-2xl font-bold">{value}</div>
        {change && (
          <p className="mt-1 text-xs text-muted-foreground">
            <span
              className={cn(
                trend === "up" && "text-emerald-500",
                trend === "down" && "text-red-500"
              )}
            >
              {change}
            </span>{" "}
            지난 달 대비
          </p>
        )}
      </CardContent>
    </Card>
  )
}
