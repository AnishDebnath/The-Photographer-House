import { Router, Request, Response } from 'express';

const router = Router();

router.get('/config', (req: Request, res: Response) => {
  // Only expose non-sensitive config
  res.json({
    // VITE_API_URL: process.env.VITE_API_URL, // Example
  });
});

export default router;
