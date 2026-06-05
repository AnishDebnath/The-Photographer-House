import { Router } from 'express';
import { supabaseAdmin } from '../config/supabaseAdmin.js';

const router = Router();

// Save or Update banner
router.post('/save', async (req, res) => {
  const { name, asset_url, asset_type } = req.body;
  
  const { data, error } = await supabaseAdmin
    .from('banners')
    .upsert({ name, asset_url, asset_type }, { onConflict: 'name' });

  if (error) {
    console.error('Supabase banner upsert error:', error);
    return res.status(500).json({ error: error.message });
  }
  res.json({ success: true });
});

// Fetch banner
router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const { data, error } = await supabaseAdmin
    .from('banners')
    .select('*')
    .eq('name', name)
    .single();

  if (error) return res.status(404).json({ error: 'Banner not found' });
  res.json(data);
});

export default router;
