import express, { Request, Response } from 'express';
import serverless from 'serverless-http';
import authRoutes from './routes/auth.js';
import meRoutes from './routes/me.js';
import uploadRoutes from './routes/upload.js';
import bannerRoutes from './routes/banners.js';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/auth', meRoutes);
app.use('/api', uploadRoutes);
app.use('/api/banners', bannerRoutes);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

export const handler = serverless(app);
