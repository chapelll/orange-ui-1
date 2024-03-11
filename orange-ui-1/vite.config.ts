import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { prismjsPlugin } from 'vite-plugin-prismjs'
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    prismjsPlugin({
      languages: 'all', // 语言
      plugins: ['line-numbers', 'show-language', 'copy-to-clipboard', 'inline-color'],
      theme: 'okaidia',// 主题
      css: true,
    })
  ]
})
