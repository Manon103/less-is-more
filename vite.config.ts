import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const isProduction = process.env.NODE_ENV === 'production';
const publicPath = isProduction ? 'https://static-lessismore.oss-cn-shanghai.aliyuncs.com/assets' : '/';

export default defineConfig({
  plugins: [vue()],
  base: publicPath,
})
