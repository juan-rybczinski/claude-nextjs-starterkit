import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-4 py-24 text-center sm:py-32">
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          빠르게 시작하는
        </span>
        <br />
        모던 웹 프로젝트
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        Next.js, Tailwind CSS, shadcn/ui로 구성된 스타터킷으로
        프로덕션 수준의 웹 애플리케이션을 빠르게 구축하세요.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/dashboard">대시보드 시작</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#features">기능 살펴보기</Link>
        </Button>
      </div>
    </section>
  )
}
