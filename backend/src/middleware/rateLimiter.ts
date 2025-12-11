import rateLimit from 'express-rate-limit';
import { logger } from '../utils/logger';

/**
 * Rate limiter middleware to prevent API abuse
 * This is in addition to Cloudflare's protection
 */
export const apiRateLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000'), // Default: 1 minute
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'), // Default: 100 requests per window
  message: {
    error: {
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many requests, please try again later'
    },
    timestamp: new Date().toISOString()
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res) => {
    logger.warn('Rate limit exceeded', {
      ip: req.ip,
      path: req.path,
      userAgent: req.get('user-agent')
    });

    res.status(429).json({
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'Too many requests, please try again later'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});
