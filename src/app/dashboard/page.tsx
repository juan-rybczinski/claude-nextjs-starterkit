import { Users, BarChart3, FileText, TrendingUp } from "lucide-react"
import { PageHeader } from "@/components/composite/PageHeader"
import { StatCard } from "@/components/composite/StatCard"

const stats = [
  { label: "총 사용자", value: "1,234", icon: Users, change: "+12%", trend: "up" as const },
  { label: "페이지 뷰", value: "56.7K", icon: BarChart3, change: "+8.2%", trend: "up" as const },
  { label: "콘텐츠", value: "342", icon: FileText, change: "+3.1%", trend: "up" as const },
  { label: "전환율", value: "2.4%", icon: TrendingUp, change: "+0.5%", trend: "up" as const },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="환영합니다!"
        description="대시보드 개요를 확인하세요."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  )
}
