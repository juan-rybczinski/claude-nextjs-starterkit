"use client"

import { usePathname } from "next/navigation"
import { Fragment } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { breadcrumbLabels } from "@/lib/constants"

export function DashboardBreadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length <= 1) return null

  // 동적 세그먼트([id])는 숫자인 경우 "상세"로 표시
  const items = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const label = /^\d+$/.test(segment)
      ? "상세"
      : breadcrumbLabels[segment] ?? segment
    const isLast = index === segments.length - 1

    return { href, label, isLast }
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={item.href}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
