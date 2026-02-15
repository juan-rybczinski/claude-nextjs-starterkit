import { describe, it, expect } from "vitest"
import {
  userFormSchema,
  profileFormSchema,
  accountFormSchema,
} from "@/lib/validations/user"

describe("userFormSchema 검증", () => {
  it("올바른 데이터로 파싱에 성공한다", () => {
    const result = userFormSchema.safeParse({
      name: "홍길동",
      email: "user@example.com",
      role: "관리자",
    })
    expect(result.success).toBe(true)
  })

  it("이름이 2자 미만이면 실패한다", () => {
    const result = userFormSchema.safeParse({
      name: "홍",
      email: "user@example.com",
      role: "편집자",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("이름은 2자 이상이어야 합니다")
    }
  })

  it("허용되지 않은 역할 값이면 실패한다", () => {
    const result = userFormSchema.safeParse({
      name: "홍길동",
      email: "user@example.com",
      role: "슈퍼관리자",
    })
    expect(result.success).toBe(false)
  })

  it("역할에 뷰어를 사용할 수 있다", () => {
    const result = userFormSchema.safeParse({
      name: "홍길동",
      email: "user@example.com",
      role: "뷰어",
    })
    expect(result.success).toBe(true)
  })
})

describe("profileFormSchema 검증", () => {
  it("bio 없이도 파싱에 성공한다 (optional 필드)", () => {
    const result = profileFormSchema.safeParse({
      name: "홍길동",
      email: "user@example.com",
    })
    expect(result.success).toBe(true)
  })

  it("bio와 함께 파싱에 성공한다", () => {
    const result = profileFormSchema.safeParse({
      name: "홍길동",
      email: "user@example.com",
      bio: "안녕하세요.",
    })
    expect(result.success).toBe(true)
  })

  it("bio가 200자를 초과하면 실패한다", () => {
    const result = profileFormSchema.safeParse({
      name: "홍길동",
      email: "user@example.com",
      bio: "a".repeat(201),
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("자기소개는 200자 이하로 입력하세요")
    }
  })

  it("bio가 정확히 200자이면 파싱에 성공한다", () => {
    const result = profileFormSchema.safeParse({
      name: "홍길동",
      email: "user@example.com",
      bio: "a".repeat(200),
    })
    expect(result.success).toBe(true)
  })
})

describe("accountFormSchema 검증", () => {
  it("올바른 데이터로 파싱에 성공한다", () => {
    const result = accountFormSchema.safeParse({
      currentPassword: "currentPass",
      newPassword: "newPassword123",
      confirmPassword: "newPassword123",
    })
    expect(result.success).toBe(true)
  })

  it("새 비밀번호가 8자 미만이면 실패한다", () => {
    const result = accountFormSchema.safeParse({
      currentPassword: "currentPass",
      newPassword: "short",
      confirmPassword: "short",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const passwordError = result.error.issues.find(
        (issue) => issue.path[0] === "newPassword"
      )
      expect(passwordError?.message).toBe("비밀번호는 8자 이상이어야 합니다")
    }
  })

  it("새 비밀번호와 확인 비밀번호가 다르면 실패한다", () => {
    const result = accountFormSchema.safeParse({
      currentPassword: "currentPass",
      newPassword: "newPassword123",
      confirmPassword: "differentPassword",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const confirmError = result.error.issues.find(
        (issue) => issue.path[0] === "confirmPassword"
      )
      expect(confirmError?.message).toBe("비밀번호가 일치하지 않습니다")
    }
  })

  it("현재 비밀번호가 빈 문자열이면 실패한다", () => {
    const result = accountFormSchema.safeParse({
      currentPassword: "",
      newPassword: "newPassword123",
      confirmPassword: "newPassword123",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const currentError = result.error.issues.find(
        (issue) => issue.path[0] === "currentPassword"
      )
      expect(currentError?.message).toBe("현재 비밀번호를 입력하세요")
    }
  })
})
