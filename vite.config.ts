import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { splitVendorChunkPlugin } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';
// const publicPath = isProduction ? 'https://static-lessismore.oss-cn-shanghai.aliyuncs.com' : '/';

export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin()],
  // base: publicPath,
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const arr = id.toString().split('node_modules/')[1].split('/');
            switch(arr[0]) {
              case '@vue':
              case 'vue':
                return 'vue';
              case 'element-plus':
              case '@element-plus':
                return 'elementPlus';
              default:
                return 'vendor';
            }
          }
        }
      }
    }
  }
})
