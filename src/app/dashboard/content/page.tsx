import { Plus } from "lucide-react"
import { PageHeader } from "@/components/composite/PageHeader"
import { DataTable } from "@/components/composite/DataTable"
import { Button } from "@/components/ui/button"
import { columns, type ContentRow } from "./columns"

const contents: ContentRow[] = [
  { id: 1, title: "Next.js 15 새로운 기능 소개", author: "김민수", status: "게시됨", category: "기술", date: "2026-02-10" },
  { id: 2, title: "Tailwind CSS v4 마이그레이션 가이드", author: "이지영", status: "게시됨", category: "기술", date: "2026-02-08" },
  { id: 3, title: "디자인 시스템 구축 사례", author: "박준호", status: "초안", category: "디자인", date: "2026-02-07" },
  { id: 4, title: "2026년 마케팅 전략 보고서", author: "최수진", status: "게시됨", category: "마케팅", date: "2026-02-05" },
  { id: 5, title: "사내 공지: 보안 정책 변경 안내", author: "정우성", status: "게시됨", category: "공지사항", date: "2026-02-03" },
  { id: 6, title: "React Server Components 심층 분석", author: "한예슬", status: "초안", category: "기술", date: "2026-02-01" },
  { id: 7, title: "브랜드 리뉴얼 프로젝트 회고", author: "오상훈", status: "보관됨", category: "디자인", date: "2026-01-28" },
  { id: 8, title: "SNS 광고 성과 분석 리포트", author: "윤아름", status: "게시됨", category: "마케팅", date: "2026-01-25" },
  { id: 9, title: "TypeScript 5.8 업데이트 정리", author: "장민호", status: "게시됨", category: "기술", date: "2026-01-22" },
  { id: 10, title: "사내 공지: 연간 일정 안내", author: "서영희", status: "보관됨", category: "공지사항", date: "2026-01-20" },
  { id: 11, title: "접근성 개선 체크리스트", author: "이태민", status: "초안", category: "디자인", date: "2026-01-18" },
  { id: 12, title: "콘텐츠 마케팅 ROI 측정 방법", author: "김서연", status: "게시됨", category: "마케팅", date: "2026-01-15" },
]

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="콘텐츠" description="콘텐츠를 관리하고 게시합니다.">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          새 콘텐츠
        </Button>
      </PageHeader>

      <DataTable
        columns={columns}
        data={contents}
        searchKey="title"
        searchPlaceholder="제목으로 검색..."
      />
    </div>
  )
}
