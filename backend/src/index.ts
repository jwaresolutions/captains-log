import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { logger } from './utils/logger';
import { apiRateLimiter } from './middleware/rateLimiter';
import { authenticateToken } from './middleware/auth';
import authRoutes from './routes/auth';
import testRoutes from './routes/test';
import boatRoutes from './routes/boats';
import tripRoutes from './routes/trips';
import captainLogRoutes from './routes/captainLog';
import noteRoutes from './routes/notes';
import todoRoutes from './routes/todos';
import maintenanceRoutes from './routes/maintenance';
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

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting (apply to all routes)
app.use(apiRateLimiter);

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

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: {
      code: 'NOT_FOUND',
      message: 'The requested resource was not found',
      path: req.path
    },
    timestamp: new Date().toISOString()
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, _next: any) => {
  logger.error('Unhandled error', {
    error: err.message,
    stack: err.stack,
    path: req.path
  });

  res.status(500).json({
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred'
    },
    timestamp: new Date().toISOString(),
    path: req.path
  });
});

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
