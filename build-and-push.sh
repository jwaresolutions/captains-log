#!/bin/bash
set -e

REPO="ghcr.io/jwaresolutions"
BACKEND_IMAGE="$REPO/captains-log-backend"
WEB_IMAGE="$REPO/captains-log-web"
TAG="${1:-latest}"

echo "=== Building and pushing Captain's Log images (tag: $TAG) ==="
echo ""

# Ensure logged into GHCR
if ! docker manifest inspect "$BACKEND_IMAGE:$TAG" > /dev/null 2>&1; then
  echo "Note: If push fails, login first with:"
  echo "  gh auth token | docker login ghcr.io -u \$(gh api user -q .login) --password-stdin"
  echo ""
fi

# Build backend for both platforms
echo "=== Building backend ==="
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t "$BACKEND_IMAGE:$TAG" \
  --push \
  ./backend

echo ""
echo "=== Building web ==="
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t "$WEB_IMAGE:$TAG" \
  --build-arg VITE_API_BASE_URL=/api/v1 \
  --push \
  ./web

echo ""
echo "=== Done ==="
echo "Images pushed:"
echo "  $BACKEND_IMAGE:$TAG"
echo "  $WEB_IMAGE:$TAG"
echo ""
echo "On your server, run:"
echo "  docker compose pull && docker compose up -d"
