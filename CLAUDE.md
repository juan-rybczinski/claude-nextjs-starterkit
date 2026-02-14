# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어

```bash
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
npm start        # 프로덕션 서버
```

## 기술 스택

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS v4** (OKLch 색상, CSS 변수 기반 테마)
- **shadcn/ui** (UI 컴포넌트, `src/components/ui/`)
- **React Hook Form + Zod** (폼 처리 및 검증)
- **TanStack React Table** (데이터 테이블)
- **next-themes** (다크 모드), **Sonner** (토스트), **cmdk** (커맨드 팔레트)

## 아키텍처

### 라우트 구조

```
src/app/
├── (auth)/              # 인증 그룹 라우트 (login, signup)
├── dashboard/           # 대시보드 (layout.tsx로 Sidebar+Header 공유)
│   ├── analytics/
│   ├── users/           # 사용자 CRUD (DataTable + [id] 동적 라우트)
│   ├── content/         # 콘텐츠 관리 (DataTable)
│   ├── notifications/
│   └── settings/        # 설정 (SettingsLayout으로 사이드 네비게이션)
│       ├── profile/
│       ├── account/
│       └── notifications/
└── page.tsx             # 랜딩 페이지
```

### 컴포넌트 계층

- **`components/ui/`** — shadcn/ui 기본 컴포넌트 (직접 수정 지양)
- **`components/composite/`** — 비즈니스 로직이 포함된 재사용 컴포넌트 (DataTable, PageHeader, ConfirmDialog, CommandPalette 등)
- **`components/dashboard/`** — 대시보드 전용 레이아웃 컴포넌트 (Sidebar, DashboardHeader, MobileSidebar)
- **`components/layout/`** — 공유 레이아웃 (AuthLayout, SettingsLayout)
- **`components/landing/`** — 랜딩 페이지 섹션

### 주요 패턴

**네비게이션 & 브레드크럼**: `src/lib/constants.ts`에 `dashboardNavItems`, `settingsNavItems`, `breadcrumbLabels` 등 모든 네비게이션 설정 중앙화. 새 페이지 추가 시 여기에 항목 추가.

**데이터 테이블**: 각 페이지에서 `columns.tsx`로 컬럼 정의, `page.tsx`에서 `DataTable` 컴포넌트에 데이터와 컬럼 전달. 액션 메뉴는 상태 기반 `AlertDialog`로 처리 (드롭다운 닫힘 이슈 때문에 `useState` + `open`/`onOpenChange` 패턴 사용).

**폼 검증**: `src/lib/validations/`에 Zod 스키마 정의 → `useForm` + `zodResolver` 조합.

**경로 별칭**: `@/*` → `./src/*` (tsconfig.json)

**스타일 유틸**: `cn()` 함수 (`src/lib/utils.ts`) — clsx + tailwind-merge 조합으로 Tailwind 클래스 충돌 해결.

### 현재 상태

- 모든 데이터는 mock (실제 API/DB 미연결)
- 인증은 데모 상태 (폼 제출 시 토스트만 표시)
- UI 언어: 한국어
