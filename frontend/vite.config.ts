import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/frontend/',
  server: {
    port: 8001,
    host: '0.0.0.0'
  },
  plugins: [vue()],
})
