---
description: '커밋 전 코드 변경사항을 프로젝트 컨벤션에 맞춰 자동으로 리뷰합니다'
allowed-tools:
  [
    'Bash(git diff:*)',
    'Bash(git status:*)',
    'Bash(git log:*)',
  ]
---

# Claude 명령어: Review

커밋 전 코드 변경사항을 분석하여 프로젝트 컨벤션 (TypeScript, Next.js, 한국어 주석 등) 기준으로 피드백을 제공합니다.

## 사용법

```
/review
```

## 프로세스

1. `git status`로 변경 파일 목록 파악
2. `git diff` (unstaged) + `git diff --staged` (staged)로 실제 변경 코드 확인
3. `git log --oneline -5`로 최근 커밋 맥락 파악
4. 아래 체크리스트에 따라 분석 후 결과 출력

## 리뷰 체크리스트

### 🔴 Critical (필수 수정)

- `any` 타입 사용 여부 — 금지 (`unknown`, 구체적 타입으로 대체)
- 보안 취약점: SQL Injection, XSS, 하드코딩된 시크릿/API 키
- 문법 오류 또는 명백한 타입 에러 가능성

### 🟡 Warning (권장 수정)

- 컨벤션 위반: camelCase/PascalCase 네이밍, 들여쓰기 2칸
- 반응형 미적용 — Tailwind 모바일 클래스(`sm:`, `md:` 등) 누락
- 에러 핸들링 누락 — API 경계, 사용자 입력 처리 시
- 컴포넌트 과도한 결합 — props drilling, 재사용성 저하
- 비즈니스 로직 주석이 영어로 작성된 경우 (한국어 주석 컨벤션 위반)

### 🔵 Info (선택적 개선)

- 성능 개선 제안 (불필요한 리렌더링, 메모이제이션 기회 등)
- 가독성 향상 제안
- 리팩토링 기회 (중복 코드, 추상화 가능한 패턴)
- 불필요한 코드/임포트

## 출력 포맷

아래 형식으로 결과를 출력하세요:

```
## 📋 변경 요약
- 변경 파일 N개, +X줄 / -Y줄
- 주요 변경 내용 한 줄 요약

## 🔴 Critical (N건)
- [파일명:라인] 문제 설명 및 수정 방법

## 🟡 Warning (N건)
- [파일명:라인] 문제 설명 및 수정 방법

## 🔵 Info (N건)
- [파일명:라인] 제안 내용

## ✅ 커밋 준비 여부
- READY / NOT READY (이유)
```

## 참고사항

- **읽기 전용** — 파일 수정, 커밋 등 쓰기 작업은 수행하지 않음
- Critical 항목이 1건 이상이면 `NOT READY`로 판정
- 변경사항이 없으면 "리뷰할 변경사항이 없습니다" 출력
- staged와 unstaged 변경사항을 모두 리뷰 대상에 포함
