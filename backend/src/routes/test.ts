import { Router, Request, Response } from 'express';

const router = Router();

/**
 * GET /api/v1/test/protected
 * A protected endpoint to test authentication
 */
router.get('/protected', (_req: Request, res: Response) => {
  res.json({
    message: 'Authentication successful! You have access to protected resources.',
    timestamp: new Date().toISOString()
  });
});

export default router;
