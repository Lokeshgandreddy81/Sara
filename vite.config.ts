import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import obfuscator from 'vite-plugin-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, 
    port: 1413, 
  },
  
});
