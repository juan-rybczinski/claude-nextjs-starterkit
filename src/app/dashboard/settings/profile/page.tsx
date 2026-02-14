"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profileFormSchema, type ProfileFormValues } from "@/lib/validations/user"

const defaultValues: ProfileFormValues = {
  name: "사용자",
  email: "user@example.com",
  bio: "",
}

export default function ProfileSettingsPage() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  })

  function onSubmit(data: ProfileFormValues) {
    toast.success("프로필이 업데이트되었습니다.")
    console.log(data)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>프로필</CardTitle>
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
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>자기소개</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="간단한 자기소개를 입력하세요"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>최대 200자까지 입력할 수 있습니다.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">저장</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
