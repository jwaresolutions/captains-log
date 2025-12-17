import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { logger } from './utils/logger';
import { apiRateLimiter } from './middleware/rateLimiter';
import { authenticateToken } from './middleware/auth';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { sanitizeResponse } from './middleware/validation';
import authRoutes from './routes/auth';
import testRoutes from './routes/test';
import boatRoutes from './routes/boats';
import tripRoutes from './routes/trips';
import captainLogRoutes from './routes/captainLog';
import noteRoutes from './routes/notes';
import todoRoutes from './routes/todos';
import maintenanceRoutes from './routes/maintenance-simple';
import maintenanceTemplateRoutes from './routes/maintenance-templates';
import maintenanceEventRoutes from './routes/maintenance-events';
import offlineSyncRoutes from './routes/offline-sync';
import notificationRoutes from './routes/notifications';
import locationRoutes from './routes/locations';
import photoRoutes from './routes/photos';
import backupRoutes from './routes/backups';
import sensorRoutes from './routes/sensors';
import { checkAndCreateInitialUser } from './utils/initialSetup';
import { schedulerService } from './services/schedulerService';

// Load environment variables
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8585;

// Security headers with helmet.js
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false, // Allow embedding for development
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// CORS configuration
const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // In development, allow all origins
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    
    // In production, you should configure specific allowed origins
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      logger.warn('CORS blocked origin', { origin });
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  exposedHeaders: ['RateLimit-Limit', 'RateLimit-Remaining', 'RateLimit-Reset']
};

app.use(cors(corsOptions));

// Middleware - increase limits for trip data with GPS points
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Rate limiting (apply to all routes)
app.use(apiRateLimiter);

// Response sanitization (apply to all routes)
app.use(sanitizeResponse);

// Request logging middleware
app.use((req: Request, _res: Response, next) => {
  logger.info(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('user-agent')
  });
  next();
});

// Health check endpoint (no auth required)
app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Test CORS endpoint
app.get('/test-cors', (req: Request, res: Response) => {
  logger.info('Test CORS endpoint hit', { origin: req.headers.origin });
  res.json({ message: 'CORS test successful', origin: req.headers.origin });
});

// Test date serialization endpoint (no auth required)
app.get('/test-dates', (_req: Request, res: Response) => {
  console.log('=== TEST DATES ENDPOINT HIT ===');
  
  const testDate = new Date();
  const testObject = {
    id: 'test-123',
    name: 'Test Object',
    createdAt: testDate,
    updatedAt: testDate
  };
  
  console.log('testDate:', testDate);
  console.log('testDate type:', typeof testDate);
  console.log('testDate constructor:', testDate.constructor.name);
  console.log('testObject:', testObject);
  console.log('JSON.stringify(testObject):', JSON.stringify(testObject));
  
  const response = {
    message: 'Date serialization test',
    testObject: testObject,
    directDate: testDate,
    isoString: testDate.toISOString(),
    timestamp: new Date().toISOString()
  };
  
  console.log('Response object:', response);
  console.log('JSON.stringify(response):', JSON.stringify(response));
  console.log('===============================');
  
  res.json(response);
});

app.options('/test-cors', (req: Request, res: Response) => {
  logger.info('Test CORS OPTIONS hit', { origin: req.headers.origin });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.status(200).end();
});

// API version endpoint (no auth required)
app.get('/api/v1', (_req: Request, res: Response) => {
  res.json({
    version: '1.0.0',
    name: 'Boat Tracking API',
    endpoints: {
      health: '/health',
      auth: '/api/v1/auth',
      boats: '/api/v1/boats',
      trips: '/api/v1/trips',
      captainLog: '/api/v1/captain-log',
      notes: '/api/v1/notes',
      todos: '/api/v1/todos',
      maintenance: '/api/v1/maintenance',
      maintenanceTemplates: '/api/v1/maintenance/templates',
      maintenanceEvents: '/api/v1/maintenance/events',
      offlineSync: '/api/v1/offline-sync',
      notifications: '/api/v1/notifications',
      locations: '/api/v1/locations',
      photos: '/api/v1/photos',
      backups: '/api/v1/backups',
      sensors: '/api/v1/sensors'
    }
  });
});

// Auth routes (for key generation/regeneration - no auth required)
app.use('/api/v1/auth', authRoutes);

// Protected test routes (requires authentication)
app.use('/api/v1/test', authenticateToken, testRoutes);

// Boat routes (requires authentication)
app.use('/api/v1/boats', authenticateToken, boatRoutes);

// Trip routes (requires authentication)
app.use('/api/v1/trips', authenticateToken, tripRoutes);

// Captain's log routes (requires authentication)
app.use('/api/v1/captain-log', authenticateToken, captainLogRoutes);

// Notes routes (requires authentication)
app.use('/api/v1/notes', authenticateToken, noteRoutes);

// Todo routes (requires authentication)
app.use('/api/v1/todos', authenticateToken, todoRoutes);

// Maintenance routes (requires authentication)
app.use('/api/v1/maintenance', authenticateToken, maintenanceRoutes);

// Maintenance template routes (requires authentication)
app.use('/api/v1/maintenance/templates', authenticateToken, maintenanceTemplateRoutes);

// Maintenance event routes (requires authentication)
app.use('/api/v1/maintenance/events', authenticateToken, maintenanceEventRoutes);

// Offline sync routes (requires authentication)
app.use('/api/v1/offline-sync', authenticateToken, offlineSyncRoutes);

// Notification routes (requires authentication)
app.use('/api/v1/notifications', authenticateToken, notificationRoutes);

// Location routes (requires authentication)
app.use('/api/v1/locations', authenticateToken, locationRoutes);

// Photo routes (requires authentication)
app.use('/api/v1/photos', authenticateToken, photoRoutes);

// Backup routes (requires authentication)
app.use('/api/v1/backups', authenticateToken, backupRoutes);

// Sensor routes (requires authentication)
app.use('/api/v1/sensors', authenticateToken, sensorRoutes);

// 404 handler for unmatched routes
app.use(notFoundHandler);

// Global error handler (must be last)
app.use(errorHandler);

// Start server
app.listen(port, async () => {
  logger.info(`Server is running on port ${port}`);
  logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
  
  // Check for initial setup on startup
  await checkAndCreateInitialUser();
  
  // Start scheduled jobs
  schedulerService.start();
});

export default app;
