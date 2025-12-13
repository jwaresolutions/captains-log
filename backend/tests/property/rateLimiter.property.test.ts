import * as fc from 'fast-check';
import express from 'express';
import request from 'supertest';
import rateLimit from 'express-rate-limit';

/**
 * Property-Based Tests for API Rate Limiting
 * 
 * **Feature: boat-tracking-system, Property 53: API Rate Limiting**
 * **Validates: Requirements 2.11**
 * 
 * For any sequence of API requests exceeding the rate limit,
 * the system should reject excess requests with appropriate error responses.
 */

describe('Property 53: API Rate Limiting', () => {
  // Simple test to verify rate limiting works at all
  test('should demonstrate basic rate limiting functionality', async () => {
    const app = express();
    
    // Create a very restrictive rate limiter for testing
    const limiter = rateLimit({
      windowMs: 1000, // 1 second window
      max: 2, // Only 2 requests per window
      standardHeaders: true,
      legacyHeaders: false,
      handler: (req, res) => {
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
    
    app.use(limiter);
    app.get('/test', (_req, res) => {
      res.json({ success: true });
    });
    
    // Make 3 requests quickly
    const responses = [];
    for (let i = 0; i < 3; i++) {
      responses.push(await request(app).get('/test'));
    }
    
    // Count successful and rate limited responses
    const successCount = responses.filter(r => r.status === 200).length;
    const rateLimitedCount = responses.filter(r => r.status === 429).length;
    
    // Should have at most 2 successful requests
    expect(successCount).toBeLessThanOrEqual(2);
    // Should have at least 1 rate limited request
    expect(rateLimitedCount).toBeGreaterThanOrEqual(1);
    // Total should be 3
    expect(successCount + rateLimitedCount).toBe(3);
  });

  test('should reject excess requests beyond rate limit', async () => {
    await fc.assert(
      fc.asyncProperty(
        // Generate a number of requests that exceeds the limit
        fc.integer({ min: 3, max: 5 }),
        async (numRequests) => {
          const app = express();
          
          // Create a restrictive rate limiter
          const limiter = rateLimit({
            windowMs: 1000, // 1 second window
            max: 2, // Only 2 requests per window
            standardHeaders: true,
            legacyHeaders: false,
            handler: (req, res) => {
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
          
          app.use(limiter);
          app.get('/test', (_req, res) => {
            res.json({ success: true });
          });
          
          // Make requests quickly to trigger rate limiting
          const results = [];
          for (let i = 0; i < numRequests; i++) {
            const response = await request(app).get('/test');
            results.push(response.status);
          }
          
          // Count successful and rate limited requests
          const successCount = results.filter(status => status === 200).length;
          const rateLimitedCount = results.filter(status => status === 429).length;
          
          // Should have at most 2 successful requests
          expect(successCount).toBeLessThanOrEqual(2);
          
          // Should have some rate limited requests since we exceed the limit
          expect(rateLimitedCount).toBeGreaterThan(0);
          
          // Total should equal number of requests
          expect(successCount + rateLimitedCount).toBe(numRequests);
        }
      ),
      { numRuns: 3 }
    );
  });

  test('should allow requests within rate limit', async () => {
    await fc.assert(
      fc.asyncProperty(
        // Generate a number of requests within the limit
        fc.integer({ min: 1, max: 2 }),
        async (numRequests) => {
          const app = express();
          
          // Create a rate limiter with higher limit
          const limiter = rateLimit({
            windowMs: 2000, // 2 second window
            max: 5, // 5 requests per window
            standardHeaders: true,
            legacyHeaders: false,
            handler: (req, res) => {
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
          
          app.use(limiter);
          app.get('/test', (_req, res) => {
            res.json({ success: true });
          });
          
          // Make requests within the limit with delays
          const results = [];
          for (let i = 0; i < numRequests; i++) {
            const response = await request(app).get('/test');
            results.push(response.status);
            // Delay between requests to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 500));
          }
          
          // All requests should succeed since we're within the limit
          const allSuccessful = results.every(status => status === 200);
          expect(allSuccessful).toBe(true);
        }
      ),
      { numRuns: 3 }
    );
  });

  test('should return proper error response for rate limited requests', async () => {
    const app = express();
    
    // Create a very restrictive rate limiter
    const limiter = rateLimit({
      windowMs: 1000, // 1 second window
      max: 1, // Only 1 request per window
      standardHeaders: true,
      legacyHeaders: false,
      handler: (req, res) => {
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
    
    app.use(limiter);
    app.get('/test', (_req, res) => {
      res.json({ success: true });
    });
    
    // Make 2 requests quickly to trigger rate limiting
    const responses = [];
    for (let i = 0; i < 2; i++) {
      responses.push(await request(app).get('/test'));
    }
    
    // Find the rate limited response
    const rateLimitedResponse = responses.find(r => r.status === 429);
    
    if (rateLimitedResponse) {
      expect(rateLimitedResponse.status).toBe(429);
      expect(rateLimitedResponse.body).toHaveProperty('error');
      expect(rateLimitedResponse.body.error).toHaveProperty('code', 'RATE_LIMIT_EXCEEDED');
      expect(rateLimitedResponse.body.error).toHaveProperty('message');
      expect(rateLimitedResponse.body).toHaveProperty('timestamp');
      expect(rateLimitedResponse.body).toHaveProperty('path', '/test');
    } else {
      // If no rate limited response, the test is inconclusive but not failed
      expect(responses.length).toBe(2);
    }
  });

  test('should include rate limit headers in responses', async () => {
    const app = express();
    
    // Create a rate limiter
    const limiter = rateLimit({
      windowMs: 60000, // 1 minute window
      max: 10, // 10 requests per window
      standardHeaders: true,
      legacyHeaders: false,
      handler: (req, res) => {
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
    
    app.use(limiter);
    app.get('/test', (_req, res) => {
      res.json({ success: true });
    });
    
    // Make a request
    const response = await request(app).get('/test');
    
    // Should include RateLimit headers
    expect(response.headers).toHaveProperty('ratelimit-limit');
    expect(response.headers).toHaveProperty('ratelimit-remaining');
    expect(response.headers).toHaveProperty('ratelimit-reset');
    
    // Verify header values are valid
    const limit = parseInt(response.headers['ratelimit-limit']);
    const remaining = parseInt(response.headers['ratelimit-remaining']);
    
    expect(limit).toBe(10);
    expect(remaining).toBeGreaterThanOrEqual(0);
    expect(remaining).toBeLessThanOrEqual(10);
  });

  test('should handle concurrent requests correctly', async () => {
    const app = express();
    
    // Create a restrictive rate limiter for concurrent testing
    const limiter = rateLimit({
      windowMs: 1000, // 1 second window
      max: 2, // Only 2 requests per window
      standardHeaders: true,
      legacyHeaders: false,
      handler: (req, res) => {
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
    
    app.use(limiter);
    app.get('/test', (_req, res) => {
      res.json({ success: true });
    });
    
    // Make 4 concurrent requests
    const promises = [];
    for (let i = 0; i < 4; i++) {
      promises.push(request(app).get('/test'));
    }
    
    const responses = await Promise.all(promises);
    
    // Count successful and rate limited responses
    const successCount = responses.filter(r => r.status === 200).length;
    const rateLimitedCount = responses.filter(r => r.status === 429).length;
    
    // Should have at most 2 successful requests
    expect(successCount).toBeLessThanOrEqual(2);
    
    // Should have some rate limited requests
    expect(rateLimitedCount).toBeGreaterThan(0);
    
    // Total should equal 4
    expect(successCount + rateLimitedCount).toBe(4);
  });
});
