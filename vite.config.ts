import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'github-pages-spa-fallback',
        closeBundle() {
          try {
            const distHtml = path.resolve(__dirname, 'dist/index.html');
            const dist404 = path.resolve(__dirname, 'dist/404.html');
            if (fs.existsSync(distHtml)) {
              fs.copyFileSync(distHtml, dist404);
            }
          } catch (e) {
            console.error('Failed to copy 404.html for GitHub Pages:', e);
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
