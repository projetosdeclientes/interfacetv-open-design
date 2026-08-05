import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      threshold: 10240,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      threshold: 10240,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})