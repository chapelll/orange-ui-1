import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { prismjsPlugin } from 'vite-plugin-prismjs'
import path from "path";
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
  ],
  // build: {
  //   outDir: "orange-ui", //输出文件名称
  //   lib: {
  //     entry: path.resolve(__dirname, "./src/lib/index.ts"), //指定组件编译入口文件
  //     name: "orange-ui",
  //     fileName: "orange-ui",
  //   }, //库编译模式配置
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: ["vue"],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         vue: "Vue",
  //       },
  //     },
  //   }, // rollup打包配置
  // },
})
