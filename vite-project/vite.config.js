import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    input: ['resources/css/app.css', 'resources/js/app.js'],
    refresh: true,
  })],
})
