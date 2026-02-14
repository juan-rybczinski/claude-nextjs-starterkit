import { Palette, Layout, Moon, Smartphone, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Layout,
    title: "대시보드 레이아웃",
    description: "사이드바 네비게이션과 반응형 레이아웃이 포함된 대시보드 템플릿",
  },
  {
    icon: Palette,
    title: "shadcn/ui 컴포넌트",
    description: "접근성과 커스터마이징을 고려한 모던 UI 컴포넌트 라이브러리",
  },
  {
    icon: Moon,
    title: "다크모드 지원",
    description: "next-themes 기반의 시스템 연동 다크모드 토글 기능",
  },
  {
    icon: Smartphone,
    title: "반응형 디자인",
    description: "모바일부터 데스크탑까지 모든 화면 크기에 최적화된 레이아웃",
  },
  {
    icon: Zap,
    title: "최적화된 성능",
    description: "서버 컴포넌트와 코드 스플리팅으로 최상의 성능 제공",
  },
  {
    icon: Shield,
    title: "TypeScript",
    description: "완전한 타입 안전성으로 안정적인 개발 경험 보장",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
          주요 기능
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          프로젝트에 필요한 핵심 기능을 모두 갖추고 있습니다
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-card p-6 transition-colors hover:bg-accent/50"
            >
              <feature.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
