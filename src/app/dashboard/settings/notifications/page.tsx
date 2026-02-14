"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const emailNotifications = [
  { id: "marketing", label: "마케팅 이메일", description: "신규 기능 및 프로모션 안내" },
  { id: "security", label: "보안 알림", description: "로그인 시도 및 보안 관련 알림" },
  { id: "updates", label: "제품 업데이트", description: "새로운 기능 및 개선 사항 안내" },
]

export default function NotificationsSettingsPage() {
  const [pushEnabled, setPushEnabled] = useState(true)
  const [emailEnabled, setEmailEnabled] = useState(true)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    marketing: false,
    security: true,
    updates: true,
  })

  function handleSave() {
    toast.success("알림 설정이 저장되었습니다.")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>푸시 알림</CardTitle>
          <CardDescription>브라우저 푸시 알림을 설정합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">푸시 알림 활성화</Label>
            <Switch
              id="push-notifications"
              checked={pushEnabled}
              onCheckedChange={setPushEnabled}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>이메일 알림</CardTitle>
          <CardDescription>수신할 이메일 알림을 선택합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">이메일 알림 활성화</Label>
            <Switch
              id="email-notifications"
              checked={emailEnabled}
              onCheckedChange={setEmailEnabled}
            />
          </div>

          {emailEnabled && (
            <div className="space-y-4">
              {emailNotifications.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <Checkbox
                    id={item.id}
                    checked={checkedItems[item.id]}
                    onCheckedChange={(checked) =>
                      setCheckedItems((prev) => ({ ...prev, [item.id]: checked === true }))
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor={item.id} className="font-medium">
                      {item.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Button onClick={handleSave}>저장</Button>
    </div>
  )
}
