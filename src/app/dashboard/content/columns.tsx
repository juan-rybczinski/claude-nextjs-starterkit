"use client"

import { useState } from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { buttonVariants } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/composite/DataTableColumnHeader"

export interface ContentRow {
  id: number
  title: string
  author: string
  status: "게시됨" | "초안" | "보관됨"
  category: string
  date: string
}

const statusVariant: Record<ContentRow["status"], "default" | "secondary" | "outline"> = {
  "게시됨": "default",
  "초안": "secondary",
  "보관됨": "outline",
}

function ContentRowActions({ content }: { content: ContentRow }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">액션 메뉴</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>수정</DropdownMenuItem>
          <DropdownMenuItem>복제</DropdownMenuItem>
          <DropdownMenuItem
            className="text-destructive"
            onSelect={() => setShowDeleteDialog(true)}
          >
            삭제
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>콘텐츠 삭제</AlertDialogTitle>
            <AlertDialogDescription>
              &quot;{content.title}&quot; 콘텐츠를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => toast.success(`"${content.title}" 콘텐츠가 삭제되었습니다.`)}
              className={buttonVariants({ variant: "destructive" })}
            >
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export const columns: ColumnDef<ContentRow>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="제목" />
    ),
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("title")}</span>
    ),
  },
  {
    accessorKey: "author",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="작성자" />
    ),
  },
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => {
      const status = row.getValue("status") as ContentRow["status"]
      return <Badge variant={statusVariant[status]}>{status}</Badge>
    },
  },
  {
    accessorKey: "category",
    header: "카테고리",
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="날짜" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <ContentRowActions content={row.original} />,
  },
]
