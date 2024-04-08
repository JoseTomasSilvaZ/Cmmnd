import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'
import {libInjectCss} from 'vite-plugin-lib-inject-css'
import tailwindcss from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  plugins: [react(), libInjectCss(), dts({include: ['lib']})],
  build: {
    copyPublicDir:false,
    lib : {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'cmmnd',
      fileName: 'cmmnd',
      formats: ['es', 'umd']
    },
    rollupOptions:{
      external: ['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'react'
        }
      }
    }
  }
})
