import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output directory is correct
  },
})
