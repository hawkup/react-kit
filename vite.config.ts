import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react-swc'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vanillaExtractPlugin(),
    react(),
  ],
})
