import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets/*',
            dest: 'assets'
          }
        ]
      }),
      // Custom plugin to serve src/assets as /assets during dev
      {
        name: 'serve-src-assets',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url?.startsWith('/assets/')) {
              const decodedUrl = decodeURIComponent(req.url);
              const assetPath = path.resolve(__dirname, 'src', decodedUrl.slice(1));
              if (fs.existsSync(assetPath)) {
                res.setHeader('Content-Type', getMimeType(assetPath));
                res.end(fs.readFileSync(assetPath));
                return;
              }
            }
            next();
          });
        }
      }
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '/assets': path.resolve(__dirname, './src/assets'),
      }
    }
  };
});

function getMimeType(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  const mimes: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm'
  };
  return mimes[ext] || 'application/octet-stream';
}
