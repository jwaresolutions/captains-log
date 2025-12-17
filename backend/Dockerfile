# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies in a single layer
RUN apk add --no-cache openssl libc6-compat

# Copy package files first for better layer caching
COPY package*.json ./
COPY prisma ./prisma

# Install all dependencies (including dev dependencies for build)
RUN npm ci --frozen-lockfile

# Copy source code
COPY . .

# Generate Prisma client and build in single layer
RUN npx prisma generate && \
    npm run build && \
    npm prune --production

# Production stage
FROM node:20-alpine AS production

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S backend -u 1001

WORKDIR /app

# Install runtime dependencies in a single layer
RUN apk add --no-cache openssl libc6-compat && \
    rm -rf /var/cache/apk/*

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --frozen-lockfile --only=production && \
    npm cache clean --force

# Copy built application from builder stage
COPY --from=builder --chown=backend:nodejs /app/dist ./dist
COPY --from=builder --chown=backend:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=backend:nodejs /app/prisma ./prisma

# Create application directories with proper ownership
RUN mkdir -p /app/uploads /app/backups /app/logs && \
    chown -R backend:nodejs /app

# Switch to non-root user
USER backend

# Expose port
EXPOSE 8585

# Optimized health check with shorter intervals for faster startup detection
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s --retries=3 \
  CMD node -e "const http=require('http');const req=http.get('http://localhost:8585/health',(r)=>{process.exit(r.statusCode===200?0:1)});req.on('error',()=>process.exit(1));req.setTimeout(3000,()=>process.exit(1))"

# Start the application
CMD ["node", "dist/index.js"]
