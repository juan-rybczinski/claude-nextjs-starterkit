import { Users, BarChart3, FileText, TrendingUp } from "lucide-react"

const stats = [
  { label: "총 사용자", value: "1,234", icon: Users, change: "+12%" },
  { label: "페이지 뷰", value: "56.7K", icon: BarChart3, change: "+8.2%" },
  { label: "콘텐츠", value: "342", icon: FileText, change: "+3.1%" },
  { label: "전환율", value: "2.4%", icon: TrendingUp, change: "+0.5%" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          환영합니다!
        </h2>
        <p className="text-muted-foreground">
          대시보드 개요를 확인하세요.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border bg-card p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 text-2xl font-bold">{stat.value}</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-emerald-500">{stat.change}</span> 지난 달 대비
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
