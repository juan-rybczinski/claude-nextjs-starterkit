# 테스트 러너/픽서 에이전트 메모리

## 테스트 환경 설정 (2026-02-15 초기 구성)

- **프레임워크**: Vitest v4 + @testing-library/react v16 + jsdom
- **설정 파일**: `/vitest.config.ts` (루트), `/src/test/setup.ts` (jest-dom import)
- **실행 명령어**: `npm test` (vitest run), `npm run test:watch` (vitest)
- **경로 별칭**: vitest.config.ts에서 `@` → `./src` 로 설정 필수

## 테스트 파일 위치 및 구조

```
src/
  lib/__tests__/
    utils.test.ts           # cn() 유틸리티
    validations.auth.test.ts # loginSchema, signupSchema
    validations.user.test.ts # userFormSchema, profileFormSchema, accountFormSchema
    constants.test.ts        # siteConfig, dashboardNavItems, settingsNavItems, breadcrumbLabels
  hooks/__tests__/
    useDebounce.test.ts     # vi.useFakeTimers() 사용
    useMounted.test.ts      # jsdom 환경에서 true 반환 확인
  test/
    setup.ts                # @testing-library/jest-dom import
```

## 주요 패턴

- **Zod safeParse 테스트**: `result.success`로 성공/실패 판별 후 `result.error.issues`로 오류 메시지 확인
- **useDebounce 테스트**: `vi.useFakeTimers()` + `vi.advanceTimersByTime()` + `act()` 조합 필수
- **useMounted 테스트**: jsdom 환경에서 클라이언트 snapshot(`() => true`)이 실행되어 `true` 반환

## 초기 상태 요약

- 프로젝트 최초 설정 시 테스트 파일 0개, 테스트 스크립트 없음
- Vitest 설치 및 46개 테스트 작성 → 전부 통과 (6파일)
- 자세한 내용: `patterns.md` 참고
