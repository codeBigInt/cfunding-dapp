import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  cacheDir: './.vite',
  build: {
    target: 'esnext',
    minify: false,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  define: {},
})
