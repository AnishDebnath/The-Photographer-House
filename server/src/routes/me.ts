import { Router } from 'express';
import { getMe } from '../controllers/meController';

const router = Router();

router.get('/me', getMe);

export default router;
