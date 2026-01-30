import { Router, Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { eventBus } from '../services/eventBus';
import { authService } from '../services/authService';
import { logger } from '../utils/logger';

const router = Router();

/**
 * GET /api/v1/sync/events
 * Server-Sent Events endpoint for real-time sync notifications.
 * Accepts auth via Authorization header OR ?token= query param
 * (browser EventSource API doesn't support custom headers).
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  // Extract token from header or query param
  let token: string | undefined;

  const authHeader = req.headers.authorization;
  if (authHeader) {
    const parts = authHeader.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1];
    }
  }

  if (!token && typeof req.query.token === 'string') {
    token = req.query.token;
  }

  if (!token) {
    res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Token required' } });
    return;
  }

  const result = await authService.validateToken(token);
  if (!result.valid) {
    res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Invalid token' } });
    return;
  }

  const clientId = randomUUID();

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no',
  });

  // Send initial connection event
  res.write(`data: ${JSON.stringify({ type: 'connected', timestamp: new Date().toISOString() })}\n\n`);

  eventBus.addClient(clientId, res);

  req.on('close', () => {
    eventBus.removeClient(clientId);
  });
});

export default router;
