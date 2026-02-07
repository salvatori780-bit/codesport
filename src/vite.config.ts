import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { figmaAssetPlugin } from './plugins/figmaAssetPlugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    figmaAssetPlugin() // Handle figma:asset imports
  ],
  build: {
    outDir: 'build',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 600, // Suppress warning for chunks < 600kb
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['motion'],
          'lucide': ['lucide-react'],
          'html2canvas': ['html2canvas'],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
});