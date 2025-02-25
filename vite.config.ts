import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip', // ou 'brotliCompress' para usar Brotli
      ext: '.gz', // extensão do arquivo comprimido
    }),
  ],
});