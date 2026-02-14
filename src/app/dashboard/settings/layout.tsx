import { PageHeader } from "@/components/composite/PageHeader"
import { SettingsLayout } from "@/components/layout/SettingsLayout"

export default function SettingsPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <PageHeader title="설정" description="계정 및 애플리케이션 설정을 관리합니다." />
      <SettingsLayout>{children}</SettingsLayout>
    </div>
  )
}
