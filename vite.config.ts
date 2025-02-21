import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default defineConfig({
  plugins: [
    react(),
    nodeResolve()
  ],
  base: '/registro/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
