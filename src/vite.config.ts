import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// Removed figmaAssetPlugin - not needed with GitHub URLs

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    // figmaAssetPlugin removed - using direct GitHub URLs now
  ],
  build: {
    outDir: 'dist', // Changed to 'dist' for Vercel compatibility
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000, // Increased to 1000kb to suppress warnings
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['motion/react'],
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