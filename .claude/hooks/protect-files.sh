#!/bin/bash
# protect-files.sh — 민감한 파일 수정 차단 훅

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# 파일 경로가 없으면 통과
if [[ -z "$FILE_PATH" ]]; then
  exit 0
fi

RELATIVE_PATH="${FILE_PATH#$CLAUDE_PROJECT_DIR/}"

# 보호할 파일 패턴 (정규식)
PROTECTED_PATTERNS=(
  "^\.env"            # .env, .env.local, .env.production 등
  "^.*-lock\.json$"   # package-lock.json
  "^.*-lock\.yaml$"   # pnpm-lock.yaml
  "^yarn\.lock$"      # yarn.lock
)

for pattern in "${PROTECTED_PATTERNS[@]}"; do
  if [[ "$RELATIVE_PATH" =~ $pattern ]]; then
    jq -n --arg path "$RELATIVE_PATH" '{
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: ("보호된 파일: " + $path + " — Claude Code가 수정할 수 없습니다. 직접 수정해주세요.")
      }
    }'
    exit 0
  fi
done

exit 0
