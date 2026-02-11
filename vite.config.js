import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 加入這一行，確保打包後的資源路徑指向你的 GitHub 倉庫名稱
  base: '/react-daily-task-router-vite/',
  plugins: [react()],
})