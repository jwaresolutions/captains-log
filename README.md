# Captain's Log - Boat Tracking System

A comprehensive dual-platform application for boat operators to track vessel usage, maintain captain's logs for licensing purposes, manage maintenance schedules, and record detailed trip information including GPS tracking.

## Features

- **Trip Management** - GPS tracking, offline recording, trip statistics, stop detection, photo attachments
- **Captain's License Progress** - Sea time tracking (4+ hours = 1 day), 360-day requirement tracking, progress reports
- **Maintenance Management** - Template-based scheduling, recurrence, cost tracking, photo documentation
- **Notes and To-Do Lists** - General, boat-specific, and trip-specific notes with tags and search
- **Maps and Navigation** - Interactive maps, marked locations (fishing spots, marinas, hazards), route visualization
- **Real-Time Sync** - Server-Sent Events for live updates across all clients
- **Offline-First Mobile** - Full functionality without internet, automatic reconciliation when back online
- **Sensor Integration** - Arduino/Bluetooth support for fuel, battery, and bilge monitoring

## Architecture

| Component | Technology | Deployment |
|-----------|-----------|------------|
| **Backend API** | Node.js 20 / Express / Prisma | Docker container (ghcr.io) |
| **Database** | PostgreSQL 16 | Docker container |
| **Web App** | React 18 / TypeScript / Vite / LCARS UI | Docker container (ghcr.io, Nginx) |
| **Android App** | Kotlin / Jetpack Compose | Native APK (not containerized) |

The web app uses the LCARS design system (Star Trek TNG/Voyager aesthetic) with an orange, purple, and blue color palette on a black background.

---

## Prerequisites

- **Docker Engine** 20.10+ and **Docker Compose** v2+
- **Git** for cloning the repository
- **Android Studio** (only if building the Android app)

## Quick Start (Production)

### 1. Create the Compose File

On your production server, create a `docker-compose.yml` using the [Standalone Server Deployment](#standalone-server-deployment) example below. Edit the placeholder values:

- `CHANGE_ME_STRONG_DB_PASSWORD` - a strong database password (use `openssl rand -base64 24`)
- `CHANGE_ME_RANDOM_32_PLUS_CHARACTERS` - JWT signing secret (use `openssl rand -base64 32`)
- `https://your-domain.com` - your actual domain for CORS
- Optionally uncomment `INITIAL_USER` and `INITIAL_PASSWORD` for auto-creating the first admin

### 2. Start the Server

```bash
docker compose up -d

# Check that all containers are healthy
docker compose ps
```

### 3. Create Your First User

Either uncomment `INITIAL_USER`/`INITIAL_PASSWORD` in the compose file (user is created on startup), or:

```bash
docker compose exec backend npm run create-user -- --username admin --password yourpassword
```

### 4. Access the Application

- **Web App**: http://localhost:3000 (or configure your reverse proxy)
- **API Health**: http://localhost:8585/health
- **API Info**: http://localhost:8585/api/v1

---

## Docker Compose Reference

### File Structure

| File | Purpose |
|------|---------|
| `docker-compose.yml` | Base configuration for all services |
| `docker-compose.prod.yml` | Production overrides (performance tuning, restart policies, logging limits) |
| `docker-compose.dev.yml` | Development overrides (debug logging, relaxed limits, exposed DB port) |

### Services

**postgres** - PostgreSQL 16 (Alpine)
- Internal networking only (port not exposed to host in production)
- Persistent volume for data
- Health check via `pg_isready`
- Production: tuned with `shared_buffers=256MB`, `max_connections=100`, WAL optimization

**backend** - Node.js API server
- Port 8585
- Runs Prisma migrations on startup
- Persistent volumes for photo uploads, backups, and logs
- Waits for postgres health check before starting
- Non-root container user
- Graceful shutdown on SIGTERM/SIGINT

**web** - React app served via Nginx
- Port 3000 (configurable via `WEB_PORT`)
- Proxies `/api/` requests to the backend container
- SSE support for real-time sync (`/api/v1/sync/events`)
- Static asset caching (30 days)
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- Non-root container user
- SPA fallback routing

### Production Deployment

```bash
# Pull and start all services (uses GHCR images)
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Or build locally
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

# View logs
docker compose logs -f

# View logs for a specific service
docker compose logs -f backend

# Restart a service
docker compose restart backend

# Stop all services
docker compose down

# Stop and remove volumes (DESTROYS DATA)
docker compose down -v
```

### Development Deployment

```bash
# Start with dev overrides (exposes PostgreSQL port, debug logging)
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

# Access database directly (dev only)
psql -h localhost -p 5432 -U boat_user -d boat_tracking

# Seed development data
docker compose exec backend npm run seed-dev
```

### Docker Compose Examples

#### Pushing Images to GHCR

##### One-Time Setup

1. Create a GitHub Personal Access Token (PAT) with `write:packages` permission:
   - Go to https://github.com/settings/tokens
   - Generate new token (classic)
   - Select scope: `write:packages`
   - Copy the token

2. Login to GHCR from your development machine:

```bash
echo YOUR_TOKEN | docker login ghcr.io -u jwaresolutions --password-stdin
```

##### Build and Push

Run from the repository root:

```bash
# Build and push the backend image
docker build -t ghcr.io/jwaresolutions/captains-log-backend:latest ./backend
docker push ghcr.io/jwaresolutions/captains-log-backend:latest

# Build and push the web image
docker build -t ghcr.io/jwaresolutions/captains-log-web:latest --build-arg VITE_API_BASE_URL=/api/v1 ./web
docker push ghcr.io/jwaresolutions/captains-log-web:latest
```

##### Package Visibility

By default, GHCR packages are **private**. To allow your server to pull without authentication, make them public:

- Go to https://github.com/orgs/jwaresolutions/packages
- Click each package, then Package settings, then Change visibility to Public

If you keep them private, you must also run `docker login ghcr.io` on your production server before `docker compose up -d`.

##### Deploying Updates

When you make code changes and want to deploy a new version:

```bash
# Rebuild and push (from your dev machine)
docker build -t ghcr.io/jwaresolutions/captains-log-backend:latest ./backend
docker push ghcr.io/jwaresolutions/captains-log-backend:latest

docker build -t ghcr.io/jwaresolutions/captains-log-web:latest --build-arg VITE_API_BASE_URL=/api/v1 ./web
docker push ghcr.io/jwaresolutions/captains-log-web:latest
```

Then on your production server:

```bash
docker compose pull
docker compose up -d
```

#### Standalone Server Deployment

Create this single `docker-compose.yml` on your production server. No repo clone needed - just this file and `docker compose up -d`.

```yaml
services:
  postgres:
    image: postgres:16-alpine
    container_name: boat-tracking-db
    environment:
      POSTGRES_DB: boat_tracking
      POSTGRES_USER: boat_user
      POSTGRES_PASSWORD: CHANGE_ME_STRONG_DB_PASSWORD
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - boat-tracking-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U boat_user -d boat_tracking"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 30s
    restart: always
    deploy:
      resources:
        limits:
          memory: 1G

  backend:
    image: ghcr.io/jwaresolutions/captains-log-backend:latest
    container_name: boat-tracking-api
    ports:
      - "8585:8585"
    environment:
      DATABASE_URL: postgresql://boat_user:CHANGE_ME_STRONG_DB_PASSWORD@postgres:5432/boat_tracking
      JWT_SECRET: CHANGE_ME_RANDOM_32_PLUS_CHARACTERS
      JWT_EXPIRATION: 30d
      NODE_ENV: production
      PORT: 8585
      ALLOWED_ORIGINS: https://your-domain.com
      RATE_LIMIT_WINDOW_MS: "60000"
      RATE_LIMIT_MAX_REQUESTS: "100"
      PHOTO_STORAGE_PATH: /app/uploads
      MAX_PHOTO_SIZE_MB: "50"
      BACKUP_PATH: /app/backups
      AUTO_BACKUP_ENABLED: "true"
      AUTO_BACKUP_SCHEDULE: "0 2 * * *"
      LOG_LEVEL: warn
      # Uncomment to auto-create first user on startup (remove after first login)
      # INITIAL_USER: admin
      # INITIAL_PASSWORD: CHANGE_ME_ADMIN_PASSWORD
    volumes:
      - photo_storage:/app/uploads
      - backup_storage:/app/backups
      - log_storage:/app/logs
    depends_on:
      postgres:
        condition: service_healthy
    networks:
      - boat-tracking-network
    restart: always
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://localhost:8585/health"]
      interval: 10s
      timeout: 5s
      start_period: 30s
      retries: 3
    command: >
      sh -c "npx prisma migrate deploy && exec node dist/index.js"
    deploy:
      resources:
        limits:
          memory: 1G

  web:
    image: ghcr.io/jwaresolutions/captains-log-web:latest
    container_name: boat-tracking-web
    ports:
      - "3000:80"
    depends_on:
      - backend
    networks:
      - boat-tracking-network
    restart: always
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://localhost:80/"]
      interval: 30s
      timeout: 5s
      retries: 3
    deploy:
      resources:
        limits:
          memory: 256M

volumes:
  postgres_data:
  photo_storage:
  backup_storage:
  log_storage:

networks:
  boat-tracking-network:
    driver: bridge
```

Before deploying, replace these placeholder values:
- `CHANGE_ME_STRONG_DB_PASSWORD` (appears twice - in postgres and backend DATABASE_URL)
- `CHANGE_ME_RANDOM_32_PLUS_CHARACTERS` (JWT secret)
- `https://your-domain.com` (your actual domain for CORS)

#### With Reverse Proxy (Cloudflare Tunnel)

If you're using Cloudflare Tunnel for HTTPS, point the tunnel to `http://web:80` on the Docker network, or `http://localhost:3000` on the host. The web container's Nginx handles API proxying to the backend.

```bash
# Example: Cloudflare tunnel pointing to the web container
cloudflared tunnel --url http://localhost:3000
```

---

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_NAME` | `boat_tracking` | PostgreSQL database name |
| `DB_USER` | `boat_user` | PostgreSQL username |
| `DB_PASSWORD` | *required* | PostgreSQL password |
| `JWT_SECRET` | *required* | Secret key for JWT tokens (32+ characters) |
| `JWT_EXPIRATION` | `30d` | JWT token expiration period |
| `INITIAL_USER` | - | Username for auto-created first user |
| `INITIAL_PASSWORD` | - | Password for auto-created first user |
| `NODE_ENV` | `production` | Environment mode |
| `ALLOWED_ORIGINS` | `http://localhost:3000` | Comma-separated allowed CORS origins |
| `RATE_LIMIT_WINDOW_MS` | `60000` | Rate limit window (ms) |
| `RATE_LIMIT_MAX_REQUESTS` | `100` | Max requests per rate limit window |
| `MAX_PHOTO_SIZE_MB` | `50` | Maximum photo upload size |
| `AUTO_BACKUP_ENABLED` | `false` | Enable automatic database backups |
| `AUTO_BACKUP_SCHEDULE` | `0 2 * * *` | Backup cron schedule |
| `LOG_LEVEL` | `info` | Logging level (error/warn/info/debug) |
| `WEB_PORT` | `3000` | Host port for web application |
| `DEFAULT_SERVER_URL` | - | Default server URL for client apps |

---

## Database Management

### User Management

```bash
# Create a user
docker compose exec backend npm run create-user -- --username john --password secret

# List all users
docker compose exec backend npm run list-users

# Change password
docker compose exec backend npm run change-password -- --username john --old-password secret --new-password newsecret
```

### Backup and Restore

```bash
# Create a SQL dump
docker compose exec postgres pg_dump -U boat_user boat_tracking > backup_$(date +%Y%m%d).sql

# Restore from a dump
docker compose exec -T postgres psql -U boat_user boat_tracking < backup_20240101.sql

# The backend also has built-in backup support
# Enable via AUTO_BACKUP_ENABLED=true in .env
```

### Database Migrations

Migrations run automatically on container startup via `npx prisma migrate deploy`. To run manually:

```bash
docker compose exec backend npx prisma migrate deploy
```

### Reset Database (Development Only)

```bash
docker compose exec backend npm run reset-db -- --username admin --password secret
```

---

## Android App

The Android app is **not containerized** -- it runs natively on Android devices.

### Requirements

- Android 8.0+ (API 26)
- Android Studio for building
- Kotlin 2.0.21

### Building

```bash
cd android

# Debug build
./gradlew assembleDebug

# Release build
./gradlew assembleRelease
```

### Configuration

The Android app reads `DEFAULT_SERVER_URL` from the root `.env` file at build time. It supports:

- **Dual connection mode**: Local network priority with remote fallback
- **Certificate pinning**: SHA-256 pinning for TLS security
- **Offline mode**: Full functionality without internet via Room database
- **Background sync**: WorkManager for automatic data sync
- **GPS tracking**: Foreground service with 5-second intervals

---

## API Endpoints

All endpoints except `/health` and `/api/v1/auth/login` require a Bearer token.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api/v1` | API version and endpoint list |
| POST | `/api/v1/auth/login` | Login |
| POST | `/api/v1/auth/change-password` | Change password |
| GET/POST | `/api/v1/boats` | Vessel management |
| GET/POST | `/api/v1/trips` | Trip logging with GPS |
| GET | `/api/v1/captain-log` | License progress tracking |
| GET/POST | `/api/v1/notes` | Notes with tags |
| GET/POST | `/api/v1/todos` | To-do lists |
| GET/POST | `/api/v1/maintenance/templates` | Maintenance templates |
| GET/POST | `/api/v1/maintenance/events` | Maintenance events |
| GET/POST | `/api/v1/locations` | Marked locations |
| POST | `/api/v1/photos` | Photo upload |
| GET | `/api/v1/sync/events` | SSE real-time sync |
| POST | `/api/v1/offline-sync` | Offline change reconciliation |
| GET/POST | `/api/v1/backups` | Backup management |
| GET/POST | `/api/v1/sensors` | Sensor data |
| GET | `/api/v1/notifications` | Notifications |

---

## Production Checklist

Before deploying to production, verify:

- [ ] `.env` file has strong, unique `DB_PASSWORD` and `JWT_SECRET`
- [ ] `ALLOWED_ORIGINS` is set to your actual domain
- [ ] `INITIAL_USER`/`INITIAL_PASSWORD` removed from `.env` after first user created
- [ ] `AUTO_BACKUP_ENABLED=true` for automatic database backups
- [ ] Reverse proxy or tunnel configured for HTTPS (e.g., Cloudflare Tunnel)
- [ ] DNS configured to point to your server
- [ ] Android app certificate pins updated if using custom domain
- [ ] `LOG_LEVEL=warn` in production (set via docker-compose.prod.yml)
- [ ] Test that `docker compose ps` shows all containers as healthy
- [ ] Test login from both web app and Android app
- [ ] Verify photo upload works end-to-end
- [ ] Verify GPS tracking and trip creation from Android app

## Troubleshooting

### Containers not starting

```bash
# Check container status and health
docker compose ps

# View logs for a specific service
docker compose logs backend
docker compose logs postgres

# Rebuild from scratch
docker compose down
docker compose -f docker-compose.yml -f docker-compose.prod.yml pull
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### Database connection issues

```bash
# Check if postgres is healthy
docker compose exec postgres pg_isready

# Check database logs
docker compose logs postgres

# Connect to database directly (dev only - requires dev compose)
docker compose exec postgres psql -U boat_user -d boat_tracking
```

### CORS errors in browser

Verify `ALLOWED_ORIGINS` in `.env` matches your domain exactly (including `https://`). Multiple origins can be comma-separated:

```bash
ALLOWED_ORIGINS=https://boat.jware.dev,https://www.boat.jware.dev
```

### Photo uploads failing

```bash
# Check upload volume is mounted
docker compose exec backend ls -la /app/uploads

# Check disk space
docker compose exec backend df -h /app/uploads
```

### Android app can't connect

1. Verify the server URL is correct in app settings
2. Check that the API is accessible from the device's network
3. If using certificate pinning, ensure the pins match your server's certificate
4. Check backend logs for connection attempts: `docker compose logs -f backend`

---

## Development

### Backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev        # Start dev server
npm test           # Run tests
```

### Web

```bash
cd web
npm install
npm run dev        # Start Vite dev server
npm run build      # Production build
```

### Property-Based Testing

```bash
# Run all property tests (55+ tests)
./run-property-tests.sh

# Run specific test suite
./run-property-tests.sh --tests auth
```

---

## License

MIT License - see [LICENSE](LICENSE) for details.
