import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import path from "node:path";
import tailwindcss from "tailwindcss";


// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "cmmnd",
      formats: ["es", "umd"],
      fileName: "cmmnd",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
    },
  },
  plugins: [react(), dts({ include: ["lib"], insertTypesEntry: true })],
})
