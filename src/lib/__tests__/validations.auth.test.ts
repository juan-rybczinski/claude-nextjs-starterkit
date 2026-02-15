import { describe, it, expect } from "vitest"
import { loginSchema, signupSchema } from "@/lib/validations/auth"

describe("loginSchema 검증", () => {
  it("올바른 이메일과 비밀번호로 파싱에 성공한다", () => {
    const result = loginSchema.safeParse({
      email: "user@example.com",
      password: "password123",
    })
    expect(result.success).toBe(true)
  })

  it("이메일 형식이 잘못되면 실패한다", () => {
    const result = loginSchema.safeParse({
      email: "invalid-email",
      password: "password123",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("올바른 이메일 주소를 입력하세요")
    }
  })

  it("비밀번호가 빈 문자열이면 실패한다", () => {
    const result = loginSchema.safeParse({
      email: "user@example.com",
      password: "",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("비밀번호를 입력하세요")
    }
  })

  it("이메일이 없으면 실패한다", () => {
    const result = loginSchema.safeParse({
      email: "",
      password: "password123",
    })
    expect(result.success).toBe(false)
  })
})

describe("signupSchema 검증", () => {
  it("올바른 데이터로 파싱에 성공한다", () => {
    const result = signupSchema.safeParse({
      name: "홍길동",
      email: "user@example.com",
      password: "password123",
      confirmPassword: "password123",
    })
    expect(result.success).toBe(true)
  })

  it("이름이 2자 미만이면 실패한다", () => {
    const result = signupSchema.safeParse({
      name: "홍",
      email: "user@example.com",
      password: "password123",
      confirmPassword: "password123",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("이름은 2자 이상이어야 합니다")
    }
  })

  it("비밀번호가 8자 미만이면 실패한다", () => {
    const result = signupSchema.safeParse({
      name: "홍길동",
      email: "user@example.com",
      password: "pass",
      confirmPassword: "pass",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const passwordError = result.error.issues.find(
        (issue) => issue.path[0] === "password"
      )
      expect(passwordError?.message).toBe("비밀번호는 8자 이상이어야 합니다")
    }
  })

  it("비밀번호와 확인 비밀번호가 다르면 실패한다", () => {
    const result = signupSchema.safeParse({
      name: "홍길동",
      email: "user@example.com",
      password: "password123",
      confirmPassword: "different123",
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const confirmError = result.error.issues.find(
        (issue) => issue.path[0] === "confirmPassword"
      )
      expect(confirmError?.message).toBe("비밀번호가 일치하지 않습니다")
    }
  })

  it("이메일 형식이 잘못되면 실패한다", () => {
    const result = signupSchema.safeParse({
      name: "홍길동",
      email: "not-an-email",
      password: "password123",
      confirmPassword: "password123",
    })
    expect(result.success).toBe(false)
  })
})
