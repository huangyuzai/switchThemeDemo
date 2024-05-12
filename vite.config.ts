import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
        }),
        postCssPxToRem({
          // 自适应 px转rem
          rootValue({ file }) {
            // 75表示750设计稿，即 设计稿/10
            // 因为 vant-ui 是37.5 的设计稿，所以这里需要适配
            return file.indexOf('vant') !== -1 ? 37.5 : 75;
          },
          propList: ['*'], // 需要转换的属性，这里选择全部转换
          unitPrecision: 6 // 转换成rem单位的小数点后的保留位数
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/style/theme.scss";
        @import "@/assets/default.css";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 4200
  }
})
