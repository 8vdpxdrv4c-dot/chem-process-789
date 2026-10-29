import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: { host: '127.0.0.1', port: 5178 },
  preview: { host: '127.0.0.1', port: 4178 },
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});
