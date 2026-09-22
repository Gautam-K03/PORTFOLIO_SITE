import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';

// Deployed to GitHub Pages under /me/.
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: process.env.VERCEL ? '/' : (command === 'build' ? '/me/' : '/'),
  server: { port: 5173 },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          motion: ['gsap', 'gsap/ScrollTrigger', 'gsap/SplitText', 'lenis'],
        },
      },
    },
  },
}));
