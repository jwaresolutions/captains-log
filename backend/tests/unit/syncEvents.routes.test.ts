/**
 * Unit tests for sync-events SSE route
 * Tests authentication and SSE connection establishment.
 */

import request from 'supertest';
import http from 'http';
import express, { Express } from 'express';

// Mock dependencies before importing the route
jest.mock('../../src/utils/logger', () => ({
  logger: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    debug: jest.fn(),
  },
}));

jest.mock('../../src/services/authService', () => ({
  authService: {
    validateToken: jest.fn(),
  },
}));

jest.mock('../../src/services/eventBus', () => ({
  eventBus: {
    addClient: jest.fn(),
    removeClient: jest.fn(),
  },
}));

import { authService } from '../../src/services/authService';
import { eventBus } from '../../src/services/eventBus';

describe('Sync Events Route', () => {
  let app: Express;
  let server: http.Server;
  let baseUrl: string;

  beforeAll((done) => {
    const syncEventsRoute = require('../../src/routes/sync-events').default;
    app = express();
    app.use(express.json());
    app.use('/api/v1/sync/events', syncEventsRoute);

    server = app.listen(0, () => {
      const addr = server.address() as any;
      baseUrl = `http://127.0.0.1:${addr.port}`;
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/v1/sync/events - auth rejection', () => {
    it('should return 401 without any token', async () => {
      const response = await request(app)
        .get('/api/v1/sync/events')
        .expect(401);

      expect(response.body.error.code).toBe('UNAUTHORIZED');
      expect(response.body.error.message).toBe('Token required');
    });

    it('should return 401 with invalid Bearer token', async () => {
      (authService.validateToken as jest.Mock).mockResolvedValue({ valid: false });

      const response = await request(app)
        .get('/api/v1/sync/events')
        .set('Authorization', 'Bearer invalid-token')
        .expect(401);

      expect(response.body.error.code).toBe('UNAUTHORIZED');
      expect(response.body.error.message).toBe('Invalid token');
      expect(authService.validateToken).toHaveBeenCalledWith('invalid-token');
    });

    it('should return 401 with malformed Authorization header', async () => {
      const response = await request(app)
        .get('/api/v1/sync/events')
        .set('Authorization', 'NotBearer token')
        .expect(401);

      expect(response.body.error.code).toBe('UNAUTHORIZED');
      expect(response.body.error.message).toBe('Token required');
    });

    it('should return 401 with invalid query token', async () => {
      (authService.validateToken as jest.Mock).mockResolvedValue({ valid: false });

      const response = await request(app)
        .get('/api/v1/sync/events?token=bad-token')
        .expect(401);

      expect(response.body.error.code).toBe('UNAUTHORIZED');
      expect(response.body.error.message).toBe('Invalid token');
      expect(authService.validateToken).toHaveBeenCalledWith('bad-token');
    });
  });

  describe('GET /api/v1/sync/events - SSE connection', () => {
    // Helper: make a raw HTTP request that collects the first chunk then aborts
    function sseRequest(path: string, headers: Record<string, string> = {}): Promise<{
      statusCode: number;
      headers: http.IncomingHttpHeaders;
      firstChunk: string;
    }> {
      return new Promise((resolve, reject) => {
        const url = new URL(path, baseUrl);
        const req = http.get(url.toString(), { headers }, (res) => {
          let data = '';
          res.on('data', (chunk) => {
            data += chunk.toString();
            // Got initial data, destroy to close connection
            req.destroy();
            resolve({
              statusCode: res.statusCode!,
              headers: res.headers,
              firstChunk: data,
            });
          });
          // If response ends before data (e.g. 401), handle it
          res.on('end', () => {
            resolve({
              statusCode: res.statusCode!,
              headers: res.headers,
              firstChunk: data,
            });
          });
        });
        req.on('error', (err: any) => {
          // ECONNRESET is expected when we destroy
          if (err.code === 'ECONNRESET') return;
          reject(err);
        });
        // Safety timeout
        req.setTimeout(5000, () => {
          req.destroy();
          reject(new Error('Request timed out'));
        });
      });
    }

    it('should establish SSE connection with valid Bearer token and send connected event', async () => {
      (authService.validateToken as jest.Mock).mockResolvedValue({ valid: true, userId: 'user-1' });

      const result = await sseRequest('/api/v1/sync/events', {
        Authorization: 'Bearer valid-token',
      });

      expect(result.statusCode).toBe(200);
      expect(result.headers['content-type']).toBe('text/event-stream');
      expect(result.headers['cache-control']).toBe('no-cache');
      expect(result.headers['connection']).toBe('keep-alive');

      // Parse the initial connected event
      const dataLine = result.firstChunk.split('\n').find(l => l.startsWith('data: '));
      expect(dataLine).toBeDefined();
      const eventData = JSON.parse(dataLine!.replace('data: ', ''));
      expect(eventData.type).toBe('connected');
      expect(eventData.timestamp).toBeDefined();

      expect(authService.validateToken).toHaveBeenCalledWith('valid-token');
    });

    it('should accept token from query parameter', async () => {
      (authService.validateToken as jest.Mock).mockResolvedValue({ valid: true, userId: 'user-1' });

      const result = await sseRequest('/api/v1/sync/events?token=query-token');

      expect(result.statusCode).toBe(200);
      expect(result.headers['content-type']).toBe('text/event-stream');
      expect(authService.validateToken).toHaveBeenCalledWith('query-token');
    });

    it('should register client with eventBus on valid connection', async () => {
      (authService.validateToken as jest.Mock).mockResolvedValue({ valid: true, userId: 'user-1' });

      await sseRequest('/api/v1/sync/events', {
        Authorization: 'Bearer valid-token',
      });

      expect(eventBus.addClient).toHaveBeenCalledTimes(1);
      const callArgs = (eventBus.addClient as jest.Mock).mock.calls[0];
      expect(typeof callArgs[0]).toBe('string');
      expect(callArgs[0]).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    });

    it('should prefer Bearer token over query token', async () => {
      (authService.validateToken as jest.Mock).mockResolvedValue({ valid: true, userId: 'user-1' });

      await sseRequest('/api/v1/sync/events?token=query-token', {
        Authorization: 'Bearer header-token',
      });

      expect(authService.validateToken).toHaveBeenCalledWith('header-token');
    });
  });
});
