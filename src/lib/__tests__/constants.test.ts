import { describe, it, expect } from "vitest"
import {
  siteConfig,
  dashboardNavItems,
  settingsNavItems,
  breadcrumbLabels,
} from "@/lib/constants"

describe("siteConfig", () => {
  it("사이트 이름이 정의되어 있다", () => {
    expect(siteConfig.name).toBe("StarterKit")
  })

  it("네비게이션 링크가 2개 이상 있다", () => {
    expect(siteConfig.navLinks.length).toBeGreaterThanOrEqual(2)
  })

  it("모든 네비게이션 링크에 label과 href가 있다", () => {
    siteConfig.navLinks.forEach((link) => {
      expect(link.label).toBeTruthy()
      expect(link.href).toBeTruthy()
    })
  })
})

describe("dashboardNavItems", () => {
  it("대시보드 네비게이션 항목이 6개 있다", () => {
    expect(dashboardNavItems.length).toBe(6)
  })

  it("첫 번째 항목이 대시보드 홈이다", () => {
    expect(dashboardNavItems[0].href).toBe("/dashboard")
    expect(dashboardNavItems[0].label).toBe("대시보드")
  })

  it("모든 항목에 label, href, icon이 있다", () => {
    dashboardNavItems.forEach((item) => {
      expect(item.label).toBeTruthy()
      expect(item.href).toBeTruthy()
      expect(item.icon).toBeDefined()
    })
  })

  it("설정 메뉴 항목이 포함되어 있다", () => {
    const settingsItem = dashboardNavItems.find(
      (item) => item.href === "/dashboard/settings"
    )
    expect(settingsItem).toBeDefined()
  })
})

describe("settingsNavItems", () => {
  it("설정 서브 네비게이션 항목이 3개 있다", () => {
    expect(settingsNavItems.length).toBe(3)
  })

  it("프로필, 계정, 알림 항목이 모두 포함된다", () => {
    const hrefs = settingsNavItems.map((item) => item.href)
    expect(hrefs).toContain("/dashboard/settings/profile")
    expect(hrefs).toContain("/dashboard/settings/account")
    expect(hrefs).toContain("/dashboard/settings/notifications")
  })
})

describe("breadcrumbLabels", () => {
  it("주요 경로에 대한 한국어 레이블이 정의되어 있다", () => {
    expect(breadcrumbLabels["dashboard"]).toBe("대시보드")
    expect(breadcrumbLabels["analytics"]).toBe("분석")
    expect(breadcrumbLabels["users"]).toBe("사용자")
    expect(breadcrumbLabels["content"]).toBe("콘텐츠")
    expect(breadcrumbLabels["notifications"]).toBe("알림")
    expect(breadcrumbLabels["settings"]).toBe("설정")
    expect(breadcrumbLabels["profile"]).toBe("프로필")
    expect(breadcrumbLabels["account"]).toBe("계정")
  })

  it("'new' 경로에 대한 레이블이 있다", () => {
    expect(breadcrumbLabels["new"]).toBe("추가")
  })
})
