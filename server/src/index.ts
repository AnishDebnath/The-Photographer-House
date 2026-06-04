import express, { Request, Response } from 'express';
import authRoutes from './routes/auth';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
