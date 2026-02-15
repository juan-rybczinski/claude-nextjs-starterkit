import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useDebounce } from "@/hooks/useDebounce"

describe("useDebounce 훅", () => {
  beforeEach(() => {
    // 가짜 타이머 사용으로 setTimeout 제어
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("초기 값을 즉시 반환한다", () => {
    const { result } = renderHook(() => useDebounce("초기값", 300))
    expect(result.current).toBe("초기값")
  })

  it("딜레이 시간 이전에는 이전 값을 유지한다", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: "초기값" } }
    )

    rerender({ value: "변경된값" })

    // 딜레이 전에는 이전 값 유지
    expect(result.current).toBe("초기값")
  })

  it("딜레이 시간 이후에 새 값으로 업데이트된다", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: "초기값" } }
    )

    rerender({ value: "변경된값" })

    // 300ms 경과 후 새 값으로 업데이트
    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(result.current).toBe("변경된값")
  })

  it("연속 변경 시 마지막 값만 반영된다", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: "첫번째" } }
    )

    rerender({ value: "두번째" })
    rerender({ value: "세번째" })
    rerender({ value: "네번째" })

    // 딜레이 전에는 아직 초기값
    expect(result.current).toBe("첫번째")

    act(() => {
      vi.advanceTimersByTime(300)
    })

    // 딜레이 후에는 마지막 값만 반영
    expect(result.current).toBe("네번째")
  })

  it("기본 딜레이는 300ms이다", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value),
      { initialProps: { value: "초기값" } }
    )

    rerender({ value: "변경된값" })

    act(() => {
      vi.advanceTimersByTime(299)
    })
    expect(result.current).toBe("초기값")

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current).toBe("변경된값")
  })

  it("숫자 타입에도 동작한다", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 200),
      { initialProps: { value: 0 } }
    )

    rerender({ value: 42 })

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(result.current).toBe(42)
  })
})
