import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
  User,
  Shield,
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

export const settingsNavItems = [
  { label: "프로필", href: "/dashboard/settings/profile", icon: User },
  { label: "계정", href: "/dashboard/settings/account", icon: Shield },
  { label: "알림", href: "/dashboard/settings/notifications", icon: Bell },
] as const

export const breadcrumbLabels: Record<string, string> = {
  dashboard: "대시보드",
  analytics: "분석",
  users: "사용자",
  content: "콘텐츠",
  notifications: "알림",
  settings: "설정",
  profile: "프로필",
  account: "계정",
  new: "추가",
} as const
