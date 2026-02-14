import { Users, Eye, Clock, MousePointerClick } from "lucide-react"
import { PageHeader } from "@/components/composite/PageHeader"
import { StatCard } from "@/components/composite/StatCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const trafficSources = [
  { name: "직접 접속", value: 4230, percent: 38 },
  { name: "검색 엔진", value: 3150, percent: 28 },
  { name: "소셜 미디어", value: 2100, percent: 19 },
  { name: "추천 링크", value: 1050, percent: 9 },
  { name: "이메일", value: 670, percent: 6 },
]

const popularPages = [
  { rank: 1, path: "/dashboard", views: 2840 },
  { rank: 2, path: "/blog/nextjs-15", views: 1920 },
  { rank: 3, path: "/products", views: 1450 },
  { rank: 4, path: "/about", views: 980 },
  { rank: 5, path: "/contact", views: 720 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="분석"
        description="트래픽 및 사용자 행동 데이터를 확인합니다."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="방문자 수"
          value="11,200"
          icon={Users}
          change="+12.5%"
          trend="up"
        />
        <StatCard
          label="페이지 뷰"
          value="34,800"
          icon={Eye}
          change="+8.2%"
          trend="up"
        />
        <StatCard
          label="평균 체류 시간"
          value="3분 24초"
          icon={Clock}
          change="-2.1%"
          trend="down"
        />
        <StatCard
          label="이탈률"
          value="42.3%"
          icon={MousePointerClick}
          change="-5.4%"
          trend="up"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>채널별 유입</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>{source.name}</span>
                    <span className="text-muted-foreground">
                      {source.value.toLocaleString()} ({source.percent}%)
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${source.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>인기 페이지 TOP 5</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {popularPages.map((page) => (
                <div
                  key={page.rank}
                  className="flex items-center justify-between rounded-lg border px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-sm font-medium">
                      {page.rank}
                    </span>
                    <span className="text-sm font-medium">{page.path}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {page.views.toLocaleString()} views
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
