import express, { Request, Response } from 'express';
import authRoutes from './routes/auth';
import meRoutes from './routes/me';
import uploadRoutes from './routes/upload';
import bannerRoutes from './routes/banners';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/auth', meRoutes);
app.use('/api', uploadRoutes);
app.use('/api/banners', bannerRoutes);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
