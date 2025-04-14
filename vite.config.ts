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
    host: true, // Accept connections from your IP (e.g., 192.168.x.x)
    port: 1413, // Or any port you prefer
  },
  
});
