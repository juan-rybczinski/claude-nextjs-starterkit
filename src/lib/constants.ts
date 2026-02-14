import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
} from "lucide-react"

export const siteConfig = {
  name: "StarterKit",
  description: "Next.js 모던 웹 스타터킷",
  navLinks: [
    { label: "기능", href: "#features" },
    { label: "대시보드", href: "/dashboard" },
  ],
} as const

export const dashboardNavItems = [
  { label: "대시보드", href: "/dashboard", icon: LayoutDashboard },
  { label: "분석", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "사용자", href: "/dashboard/users", icon: Users },
  { label: "콘텐츠", href: "/dashboard/content", icon: FileText },
  { label: "알림", href: "/dashboard/notifications", icon: Bell },
  { label: "설정", href: "/dashboard/settings", icon: Settings },
] as const
