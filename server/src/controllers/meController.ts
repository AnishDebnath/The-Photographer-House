import { Request, Response } from 'express';
import { supabaseAdmin } from '../config/supabaseAdmin.js';

export const getMe = async (req: Request, res: Response) => {
  const { username } = req.query;
  
  if (!username) {
    return res.status(400).json({ error: 'Username required' });
  }

  const { data: user, error } = await supabaseAdmin
    .from('auth')
    .select('full_name, username')
    .eq('username', username)
    .single();

  if (error || !user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};
