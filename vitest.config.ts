import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    // jsdom 환경 사용 (브라우저 API 시뮬레이션)
    environment: "jsdom",
    // 각 테스트 파일 실행 전 설정 파일 로드
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      // @/* → ./src/* 경로 별칭 설정
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
