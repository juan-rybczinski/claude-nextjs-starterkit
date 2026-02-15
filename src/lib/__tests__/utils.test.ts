import { describe, it, expect } from "vitest"
import { cn } from "@/lib/utils"

describe("cn 유틸리티 함수", () => {
  it("단일 클래스명을 반환한다", () => {
    expect(cn("text-red-500")).toBe("text-red-500")
  })

  it("여러 클래스명을 공백으로 합쳐 반환한다", () => {
    expect(cn("text-red-500", "bg-blue-100")).toBe("text-red-500 bg-blue-100")
  })

  it("Tailwind 충돌 클래스는 마지막 값이 우선 적용된다", () => {
    // tailwind-merge가 충돌 클래스 중 마지막 값만 남김
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
  })

  it("falsy 값(undefined, false, null)은 무시된다", () => {
    expect(cn("text-red-500", undefined, false, null)).toBe("text-red-500")
  })

  it("조건부 클래스를 올바르게 처리한다", () => {
    const isActive = true
    const isDisabled = false
    expect(cn("base", isActive && "active", isDisabled && "disabled")).toBe(
      "base active"
    )
  })

  it("빈 문자열 인자는 무시된다", () => {
    expect(cn("", "text-red-500", "")).toBe("text-red-500")
  })

  it("인자가 없으면 빈 문자열을 반환한다", () => {
    expect(cn()).toBe("")
  })
})
