import { describe, it, expect } from "vitest"
import { renderHook } from "@testing-library/react"
import { useMounted } from "@/hooks/useMounted"

describe("useMounted 훅", () => {
  it("클라이언트 환경에서 true를 반환한다", () => {
    // jsdom 환경(클라이언트 측)에서 실행하면 getSnapshot이 true를 반환
    const { result } = renderHook(() => useMounted())
    expect(result.current).toBe(true)
  })
})
