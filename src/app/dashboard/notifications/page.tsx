"use client"

import { useState } from "react"
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Info,
  UserPlus,
  FileText,
  Settings,
  Shield,
  MessageSquare,
  type LucideIcon,
} from "lucide-react"
import { PageHeader } from "@/components/composite/PageHeader"
import { EmptyState } from "@/components/composite/EmptyState"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Notification {
  id: number
  icon: LucideIcon
  title: string
  description: string
  time: string
  read: boolean
}

const initialNotifications: Notification[] = [
  { id: 1, icon: UserPlus, title: "새 사용자 가입", description: "김민수 님이 새로 가입했습니다.", time: "5분 전", read: false },
  { id: 2, icon: AlertTriangle, title: "서버 경고", description: "CPU 사용률이 85%를 초과했습니다.", time: "15분 전", read: false },
  { id: 3, icon: FileText, title: "콘텐츠 게시 완료", description: "'Next.js 15 새로운 기능 소개' 게시가 완료되었습니다.", time: "1시간 전", read: false },
  { id: 4, icon: MessageSquare, title: "새 댓글", description: "'디자인 시스템 구축 사례' 글에 새 댓글이 달렸습니다.", time: "2시간 전", read: true },
  { id: 5, icon: Shield, title: "보안 알림", description: "새로운 기기에서 로그인이 감지되었습니다.", time: "3시간 전", read: false },
  { id: 6, icon: CheckCircle2, title: "배포 완료", description: "v2.4.1 배포가 성공적으로 완료되었습니다.", time: "5시간 전", read: true },
  { id: 7, icon: Settings, title: "설정 변경", description: "알림 설정이 업데이트되었습니다.", time: "어제", read: true },
  { id: 8, icon: Info, title: "시스템 점검 안내", description: "2월 15일 02:00~04:00 정기 점검이 예정되어 있습니다.", time: "어제", read: true },
  { id: 9, icon: UserPlus, title: "팀원 초대 수락", description: "이지영 님이 팀 초대를 수락했습니다.", time: "2일 전", read: true },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications)

  const unread = notifications.filter((n) => !n.read)
  const read = notifications.filter((n) => n.read)

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  return (
    <div className="space-y-6">
      <PageHeader title="알림" description="시스템 알림과 활동 내역을 확인합니다.">
        <Button variant="outline" onClick={markAllAsRead} disabled={unread.length === 0}>
          모두 읽음
        </Button>
      </PageHeader>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">전체 ({notifications.length})</TabsTrigger>
          <TabsTrigger value="unread">읽지 않음 ({unread.length})</TabsTrigger>
          <TabsTrigger value="read">읽음 ({read.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <NotificationList items={notifications} onRead={markAsRead} />
        </TabsContent>
        <TabsContent value="unread">
          {unread.length > 0 ? (
            <NotificationList items={unread} onRead={markAsRead} />
          ) : (
            <EmptyState
              icon={Bell}
              title="읽지 않은 알림이 없습니다"
              description="모든 알림을 확인했습니다."
            />
          )}
        </TabsContent>
        <TabsContent value="read">
          {read.length > 0 ? (
            <NotificationList items={read} onRead={markAsRead} />
          ) : (
            <EmptyState
              icon={Bell}
              title="읽은 알림이 없습니다"
              description="아직 확인한 알림이 없습니다."
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NotificationList({
  items,
  onRead,
}: {
  items: Notification[]
  onRead: (id: number) => void
}) {
  return (
    <div className="mt-4 space-y-3">
      {items.map((notification) => {
        const Icon = notification.icon
        return (
          <Card
            key={notification.id}
            className={cn(
              "cursor-pointer transition-colors hover:bg-muted/50",
              !notification.read && "border-l-4 border-l-primary"
            )}
            onClick={() => !notification.read && onRead(notification.id)}
          >
            <CardContent className="flex items-start gap-4 p-4">
              <div className="rounded-full bg-muted p-2">
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className={cn("text-sm", !notification.read && "font-semibold")}>
                    {notification.title}
                  </p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
