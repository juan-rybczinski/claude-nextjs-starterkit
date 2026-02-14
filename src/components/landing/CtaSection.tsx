import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-muted px-4 py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          지금 바로 시작하세요
        </h2>
        <p className="text-muted-foreground">
          스타터킷을 기반으로 여러분만의 프로젝트를 빌드하세요.
          필요한 모든 것이 준비되어 있습니다.
        </p>
        <Button asChild size="lg">
          <Link href="/dashboard">대시보드로 이동</Link>
        </Button>
      </div>
    </section>
  )
}
