import { z } from "zod"

export const userFormSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다"),
  email: z.string().email("올바른 이메일 주소를 입력하세요"),
  role: z.enum(["관리자", "편집자", "뷰어"]),
})

export type UserFormValues = z.infer<typeof userFormSchema>

export const profileFormSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다"),
  email: z.string().email("올바른 이메일 주소를 입력하세요"),
  bio: z.string().max(200, "자기소개는 200자 이하로 입력하세요").optional(),
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>

export const accountFormSchema = z.object({
  currentPassword: z.string().min(1, "현재 비밀번호를 입력하세요"),
  newPassword: z.string().min(8, "비밀번호는 8자 이상이어야 합니다"),
  confirmPassword: z.string().min(1, "비밀번호 확인을 입력하세요"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "비밀번호가 일치하지 않습니다",
  path: ["confirmPassword"],
})

export type AccountFormValues = z.infer<typeof accountFormSchema>
