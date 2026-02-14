"use client"

import { use } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/composite/PageHeader"
import { userFormSchema, type UserFormValues } from "@/lib/validations/user"

const mockUsers: Record<string, UserFormValues> = {
  "1": { name: "김민수", email: "minsu@example.com", role: "관리자" },
  "2": { name: "이지영", email: "jiyoung@example.com", role: "편집자" },
  "3": { name: "박준호", email: "junho@example.com", role: "뷰어" },
}

export default function UserEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const isNew = id === "new"
  const user = mockUsers[id] ?? { name: "", email: "", role: "뷰어" as const }

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: user,
  })

  function onSubmit(data: UserFormValues) {
    toast.success(isNew ? "사용자가 등록되었습니다." : "사용자 정보가 업데이트되었습니다.")
    console.log(data)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={isNew ? "사용자 추가" : "사용자 편집"}
        description={isNew ? "새 사용자를 등록합니다." : `사용자 #${id}의 정보를 수정합니다.`}
      >
        <Button variant="outline" asChild>
          <Link href="/dashboard/users">
            <ArrowLeft className="mr-2 h-4 w-4" />
            목록으로
          </Link>
        </Button>
      </PageHeader>

      <Card>
        <CardHeader>
          <CardTitle>기본 정보</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input placeholder="이름을 입력하세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="이메일을 입력하세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>역할</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="역할을 선택하세요" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="관리자">관리자</SelectItem>
                        <SelectItem value="편집자">편집자</SelectItem>
                        <SelectItem value="뷰어">뷰어</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <Button type="submit">저장</Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/dashboard/users">취소</Link>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
