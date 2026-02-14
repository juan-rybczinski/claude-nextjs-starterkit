import Link from "next/link"
import { Plus } from "lucide-react"
import { PageHeader } from "@/components/composite/PageHeader"
import { DataTable } from "@/components/composite/DataTable"
import { Button } from "@/components/ui/button"
import { columns, type UserRow } from "./columns"

const users: UserRow[] = [
  { id: 1, name: "김민수", email: "minsu@example.com", role: "관리자", status: "활성" },
  { id: 2, name: "이지영", email: "jiyoung@example.com", role: "편집자", status: "활성" },
  { id: 3, name: "박준호", email: "junho@example.com", role: "뷰어", status: "활성" },
  { id: 4, name: "최수진", email: "sujin@example.com", role: "편집자", status: "비활성" },
  { id: 5, name: "정우성", email: "wooseong@example.com", role: "뷰어", status: "활성" },
  { id: 6, name: "한예슬", email: "yeseul@example.com", role: "편집자", status: "활성" },
  { id: 7, name: "오상훈", email: "sanghun@example.com", role: "뷰어", status: "비활성" },
  { id: 8, name: "윤아름", email: "areum@example.com", role: "관리자", status: "활성" },
  { id: 9, name: "장민호", email: "minho@example.com", role: "뷰어", status: "활성" },
  { id: 10, name: "서영희", email: "younghee@example.com", role: "편집자", status: "활성" },
  { id: 11, name: "이태민", email: "taemin@example.com", role: "뷰어", status: "비활성" },
  { id: 12, name: "김서연", email: "seoyeon@example.com", role: "편집자", status: "활성" },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="사용자" description="사용자 목록을 관리합니다.">
        <Button asChild>
          <Link href="/dashboard/users/new">
            <Plus className="mr-2 h-4 w-4" />
            사용자 추가
          </Link>
        </Button>
      </PageHeader>

      <DataTable
        columns={columns}
        data={users}
        searchKey="name"
        searchPlaceholder="이름으로 검색..."
      />
    </div>
  )
}
