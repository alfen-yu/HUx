import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://alfen-yu.github.io/HUx/',
  plugins: [react()],
})
