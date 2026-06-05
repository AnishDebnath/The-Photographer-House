import { Request, Response } from 'express';
import { cloudinary } from '../config/cloudinaryConfig.js';
import { Readable } from 'stream';

export const uploadAsset = async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const subFolder = req.headers['x-upload-folder'] as string || '';
  const folderPath = subFolder ? `The Photographer House/${subFolder}` : 'The Photographer House';
  const quality = req.headers['x-upload-quality'] as string || 'original';
  const oldPublicId = req.headers['x-old-public-id'] as string;

  const transformation = quality === 'reduced' 
    ? { quality: 'auto:low', fetch_format: 'auto' }
    : undefined;

  const stream = Readable.from(req.file.buffer);

  const uploadStream = cloudinary.uploader.upload_stream(
    { 
      folder: folderPath, 
      transformation,
      resource_type: 'auto' // Crucial: 'auto' handles images/videos/raw files automatically
    },
    async (error, result) => {
      if (error) return res.status(500).json({ error: error.message });
      
      if (oldPublicId) {
        try {
          console.log('Attempting to destroy old asset with Public ID:', oldPublicId);
          const result = await cloudinary.uploader.destroy(oldPublicId);
          console.log('Destroy result:', result);
        } catch (destroyError) {
          console.error('Failed to destroy old asset:', destroyError);
        }
      }
      
      res.json({ url: result?.secure_url });
    }
  );

  stream.pipe(uploadStream);
};
