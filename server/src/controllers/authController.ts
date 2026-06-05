import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { supabaseAdmin } from '../config/supabaseAdmin.js';

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    
    const { data: user, error } = await supabaseAdmin
      .from('auth')
      .select('*')
      .eq('username', username)
      .single();

    if (error) {
      console.error('Supabase query error:', error);
      return res.status(401).json({ error: 'Auth failed' });
    }

    if (!user) {
      console.log('User not found:', username);
      return res.status(401).json({ error: 'Auth failed' });
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    
    if (!valid) {
      console.log('Invalid password for user:', username);
      return res.status(401).json({ error: 'Auth failed' });
    }

    res.json({ message: 'Success', user: { username: user.username, name: user.full_name } });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
