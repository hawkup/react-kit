import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginFonts({
      google: {
        families: ['IBM Plex Sans'],
      },
    }),
    vanillaExtractPlugin(),
    react(),
  ],
})
