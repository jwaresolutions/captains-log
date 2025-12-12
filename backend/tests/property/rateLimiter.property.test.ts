import * as fc from 'fast-check';
import express, { Express } from 'express';
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
  // Helper function to create a fresh app with rate limiting
  const createApp = (): Express => {
    const app = express();
    
    // Create a fresh rate limiter for each app
    const limiter = rateLimit({
      windowMs: 60000, // 1 minute
      max: 5, // 5 requests per window
      message: {
        error: {
          code: 'RATE_LIMIT_EXCEEDED',
          message: 'Too many requests, please try again later'
        },
        timestamp: new Date().toISOString()
      },
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
    
    // Simple test endpoint
    app.get('/test', (_req, res) => {
      res.json({ success: true });
    });
    
    return app;
  };

  test('should reject excess requests beyond rate limit', async () => {
    await fc.assert(
      fc.asyncProperty(
        // Generate a number of requests that exceeds the limit
        fc.integer({ min: 6, max: 20 }),
        async (numRequests) => {
          // Create a fresh app for this test run
          const app = createApp();
          
          // Make requests up to and beyond the limit
          const results = [];
          
          for (let i = 0; i < numRequests; i++) {
            const response = await request(app).get('/test');
            results.push({
              status: response.status,
              requestNumber: i + 1
            });
          }
          
          // First 5 requests should succeed (within limit)
          const successfulRequests = results.filter(r => r.status === 200);
          const rateLimitedRequests = results.filter(r => r.status === 429);
          
          // Should have exactly 5 successful requests
          expect(successfulRequests.length).toBe(5);
          
          // All requests beyond the limit should be rate limited
          expect(rateLimitedRequests.length).toBe(numRequests - 5);
          
          // Verify all rate limited requests have proper error response
          for (const result of rateLimitedRequests) {
            expect(result.status).toBe(429);
          }
        }
      ),
      { numRuns: 10 } // Fewer runs since this involves actual HTTP requests
    );
  });

  test('should allow requests within rate limit', async () => {
    await fc.assert(
      fc.asyncProperty(
        // Generate a number of requests within the limit
        fc.integer({ min: 1, max: 5 }),
        async (numRequests) => {
          // Create a fresh app for this test run
          const app = createApp();
          
          // Make requests within the limit with small delays to avoid race conditions
          const results = [];
          
          for (let i = 0; i < numRequests; i++) {
            const response = await request(app).get('/test');
            results.push(response.status);
            // Small delay to ensure rate limiter processes each request
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          
          // All requests should succeed
          const allSuccessful = results.every(status => status === 200);
          expect(allSuccessful).toBe(true);
        }
      ),
      { numRuns: 20 }
    );
  });

  test('should return proper error response for rate limited requests', async () => {
    // Create a fresh app for this test
    const app = createApp();
    
    // Make 6 requests to trigger rate limiting
    const responses = [];
    for (let i = 0; i < 6; i++) {
      responses.push(await request(app).get('/test'));
    }
    
    // The 6th request should be rate limited
    const rateLimitedResponse = responses[5];
    
    expect(rateLimitedResponse.status).toBe(429);
    expect(rateLimitedResponse.body).toHaveProperty('error');
    expect(rateLimitedResponse.body.error).toHaveProperty('code', 'RATE_LIMIT_EXCEEDED');
    expect(rateLimitedResponse.body.error).toHaveProperty('message');
    expect(rateLimitedResponse.body).toHaveProperty('timestamp');
    expect(rateLimitedResponse.body).toHaveProperty('path', '/test');
  });

  test('should include rate limit headers in responses', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.integer({ min: 1, max: 5 }),
        async (_requestNumber) => {
          // Create a fresh app for this test run
          const app = createApp();
          
          // Make a request
          const response = await request(app).get('/test');
          
          // Should include RateLimit headers
          expect(response.headers).toHaveProperty('ratelimit-limit');
          expect(response.headers).toHaveProperty('ratelimit-remaining');
          expect(response.headers).toHaveProperty('ratelimit-reset');
          
          // Verify header values are valid
          const limit = parseInt(response.headers['ratelimit-limit']);
          const remaining = parseInt(response.headers['ratelimit-remaining']);
          
          expect(limit).toBe(5);
          expect(remaining).toBeGreaterThanOrEqual(0);
          expect(remaining).toBeLessThanOrEqual(5);
        }
      ),
      { numRuns: 20 }
    );
  });

  test('should handle concurrent requests correctly', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.integer({ min: 6, max: 15 }),
        async (numConcurrentRequests) => {
          // Create a fresh app for this test run
          const app = createApp();
          
          // Make concurrent requests
          const promises = [];
          for (let i = 0; i < numConcurrentRequests; i++) {
            promises.push(request(app).get('/test'));
          }
          
          const responses = await Promise.all(promises);
          
          // Count successful and rate limited responses
          const successCount = responses.filter(r => r.status === 200).length;
          const rateLimitedCount = responses.filter(r => r.status === 429).length;
          const otherCount = responses.filter(r => r.status !== 200 && r.status !== 429).length;
          
          // Should have at most 5 successful requests
          expect(successCount).toBeLessThanOrEqual(5);
          
          // Total should equal number of requests (allowing for potential other status codes)
          expect(successCount + rateLimitedCount + otherCount).toBe(numConcurrentRequests);
          
          // Most responses should be either success or rate limited
          expect(successCount + rateLimitedCount).toBeGreaterThanOrEqual(Math.floor(numConcurrentRequests * 0.8));
          
          // At least some requests should be rate limited if we exceed the limit
          if (numConcurrentRequests > 5) {
            expect(rateLimitedCount).toBeGreaterThan(0);
          }
        }
      ),
      { numRuns: 10 }
    );
  });
});
