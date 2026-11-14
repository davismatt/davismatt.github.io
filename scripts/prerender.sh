#!/usr/bin/env bash
# After `npm run build`, load the built site in headless Chrome and:
#   1. replace docs/index.html with the fully rendered HTML, so crawlers,
#      link previews and ATS parsers see the resume without running JS
#   2. print the page to docs/Matthew-Davis-Resume.pdf for the download button
set -euo pipefail

OUT_DIR="${1:-docs}"
PORT="${PORT:-8080}"
CHROME="${CHROME:-google-chrome}"
URL="http://localhost:${PORT}/"
CHROME_FLAGS=(--headless=new --no-sandbox --disable-gpu --hide-scrollbars --virtual-time-budget=10000)

python3 -m http.server "$PORT" --directory "$OUT_DIR" >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill $SERVER_PID 2>/dev/null || true' EXIT

for _ in $(seq 1 20); do
  curl -sf "$URL" >/dev/null && break
  sleep 0.25
done

RENDERED="$(mktemp)"
"$CHROME" "${CHROME_FLAGS[@]}" --dump-dom "$URL" > "$RENDERED"

# Fail the deploy rather than ship an empty page.
if ! grep -q 'Matthew Davis</h1>' "$RENDERED" || ! grep -q 'exp_section' "$RENDERED"; then
  echo "Prerender failed: rendered HTML is missing resume content" >&2
  exit 1
fi

{ echo '<!DOCTYPE html>'; cat "$RENDERED"; } > "$OUT_DIR/index.html"

"$CHROME" "${CHROME_FLAGS[@]}" --no-pdf-header-footer \
  --print-to-pdf="$OUT_DIR/Matthew-Davis-Resume.pdf" "$URL"

# Link-preview image for LinkedIn/Slack/iMessage, then drop the template page.
"$CHROME" "${CHROME_FLAGS[@]}" --window-size=1200,630 \
  --screenshot="$OUT_DIR/og-image.png" "${URL}og.html"
rm -f "$OUT_DIR/og.html"

echo "Prerendered $OUT_DIR/index.html, $OUT_DIR/Matthew-Davis-Resume.pdf and $OUT_DIR/og-image.png"
