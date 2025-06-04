import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // no change here

// 👇 this import is necessary for TS typing
import type { PluginOption } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: 'src/assets/**/*.svg',
    }) as PluginOption, // ✅ fix the error here with type assertion
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:math';
          @use '@/scss/_shared.scss' as *;
        `,
      },
    },
  },
});
