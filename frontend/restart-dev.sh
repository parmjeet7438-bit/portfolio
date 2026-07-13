#!/bin/zsh
# Fix hung localhost: kill zombie Next.js processes and restart cleanly.
set -e
cd "$(dirname "$0")"

echo "Stopping Next.js processes..."
pkill -f "next dev" 2>/dev/null || true
pkill -f "next-server" 2>/dev/null || true
sleep 1
for p in 3000 3001 3002 3003 3010; do
  lsof -tiTCP:$p -sTCP:LISTEN | xargs kill -9 2>/dev/null || true
done
sleep 1

echo "Raising file limit..."
ulimit -n 10240

echo "Clearing .next cache..."
rm -rf .next

echo "Starting http://localhost:3000 ..."
npm run dev -- -H 127.0.0.1 -p 3000
