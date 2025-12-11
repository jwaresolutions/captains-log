# Quick Reference - Boat Tracking System

## 🔑 User Management Commands

### Create New User
```bash
docker-compose exec backend npm run create-user -- --username admin --password yourpassword
```

### List All Users
```bash
docker-compose exec backend npm run list-users
```

### Change User Password
```bash
docker-compose exec backend npm run change-password -- --username admin --password newpassword
```

### Login via API
```bash
curl -X POST http://localhost:8585/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"yourpassword"}'
```

## 🗑️ Reset Commands

### Clear Android App Data Only
```bash
adb shell pm clear com.boattracking
```

### Reset Backend Database Only
```bash
docker-compose down
docker volume rm captians-log_postgres_data
docker-compose up -d
```

### Complete Fresh Start (Nuclear Option)
```bash
# Stop everything
docker-compose down

# Remove database
docker volume rm captians-log_postgres_data

# Clear Android app
adb shell pm clear com.boattracking

# Start backend fresh
docker-compose up -d

# Wait for startup
sleep 10

# Create first user
docker-compose exec backend npm run create-user -- --username admin --password yourpassword

# Reinstall Android app
cd android && ./gradlew clean installDebug
```

## 📱 Android Commands

### Build and Install
```bash
cd android
./gradlew clean assembleDebug
./gradlew installDebug
```

### View Logs
```bash
adb logcat | grep -i boattracking
```

### Clear App Data
```bash
adb shell pm clear com.boattracking
```

### Uninstall App
```bash
adb uninstall com.boattracking
```

## 🐳 Docker Commands

### Start Services
```bash
docker-compose up -d
```

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f backend
docker-compose logs -f postgres
```

### Restart Backend
```bash
docker-compose restart backend
```

### Rebuild and Restart
```bash
docker-compose up -d --build
```

### Check Running Containers
```bash
docker-compose ps
```

## 🔍 Debugging

### Check Backend Health
```bash
curl http://localhost:8585/health
```

### Check API Info
```bash
curl http://localhost:8585/api/v1
```

### Test API with Key
```bash
curl http://localhost:8585/api/v1/boats \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### View Database
```bash
docker-compose exec postgres psql -U boat_user boat_tracking
```

### Run Migrations
```bash
docker-compose exec backend npx prisma migrate deploy
```

### View Prisma Studio
```bash
cd backend
npm run prisma:studio
```

## 📊 Testing

### Run All Tests
```bash
cd backend
npm test
```

### Run Property Tests
```bash
cd backend
npm run test:property
```

### Run Android Tests
```bash
cd android
./gradlew test
```

## 🔧 Common Issues

### Port 8585 Already in Use
```bash
# Find process
lsof -i :8585

# Kill it
kill -9 <PID>
```

### Android App Won't Connect
1. Check backend is running: `docker-compose ps`
2. Verify user exists: `docker-compose exec backend npm run list-users`
3. Try logging in again with correct username/password
4. Check JWT token hasn't expired (30 days default)
5. Restart app

### Database Connection Failed
```bash
# Check postgres is running
docker-compose ps

# View postgres logs
docker-compose logs postgres

# Restart postgres
docker-compose restart postgres
```

## 📝 File Locations

- **Backend Code**: `backend/src/`
- **Android Code**: `android/app/src/main/java/com/boattracking/`
- **Database Schema**: `backend/prisma/schema.prisma`
- **Docker Config**: `docker-compose.yml`
- **Environment**: `.env`
- **User Management Scripts**: `backend/src/scripts/create-user-cli.ts`, `backend/src/scripts/change-password-cli.ts`

## 🎯 Quick Workflows

### After Code Changes (Backend)
```bash
docker-compose restart backend
```

### After Code Changes (Android)
```bash
cd android
./gradlew installDebug
```

### Fresh Development Session
```bash
# Start backend
docker-compose up -d

# Create first user
docker-compose exec backend npm run create-user -- --username admin --password yourpassword

# Install Android app
cd android && ./gradlew installDebug
```

### End of Day Cleanup
```bash
# Stop services (keeps data)
docker-compose down

# Or stop and remove everything
docker-compose down -v
```
