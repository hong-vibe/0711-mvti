import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/0711-mvti/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true // 개발 서버 실행 시 브라우저 자동 오픈
  }
});
