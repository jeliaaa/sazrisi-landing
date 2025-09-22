import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  host: true,
  port: 5174,
  allowedHosts: ['sazrisi.ge', 'localhost', '127.0.0.1'],
})
