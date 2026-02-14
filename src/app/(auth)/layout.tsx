import { AuthLayout } from "@/components/layout/AuthLayout"

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthLayout>{children}</AuthLayout>
}
