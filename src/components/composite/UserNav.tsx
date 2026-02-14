"use client"

import Link from "next/link"
import { LogOut, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface UserNavProps {
  collapsed?: boolean
}

export function UserNav({ collapsed }: UserNavProps) {
  if (collapsed) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">U</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <UserNavContent />
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto w-full justify-start gap-3 px-3 py-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start text-left">
            <span className="text-sm font-medium">사용자</span>
            <span className="text-xs text-muted-foreground">user@example.com</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <UserNavContent />
    </DropdownMenu>
  )
}

function UserNavContent() {
  return (
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>내 계정</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link href="/dashboard/settings/profile">
          <User className="mr-2 h-4 w-4" />
          프로필
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/dashboard/settings">
          <Settings className="mr-2 h-4 w-4" />
          설정
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        로그아웃
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
