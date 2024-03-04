<template>
    <h1>Toast 组件示例 </h1>
    <div>
        <demo title="常规使用" :codes="toastdemo1">
            <Toast1Demo></Toast1Demo>
        </demo>
    </div>

    <div>
        <demo title="支持自定义内容和自定义显示时间" :codes="toastdemo2">
            <Toast2Demo></Toast2Demo>
        </demo>
    </div>

    <div>
        <demo title="支持type(成功、失败和默认三种样式)" :codes="toastdemo3">
            <Toast3Demo></Toast3Demo>
        </demo>
    </div>

    <div>
        <demo title="支持一句话打开Toast" :codes="toastdemo4" describe="推荐使用函数openToast的方式打开提示,代码更加简洁易懂">
            <Toast4Demo></Toast4Demo>
        </demo>
    </div>
</template>
  
<script setup lang="ts">
import demo from './demo.vue'
import Toast1Demo from '../example/Toast1Demo.vue'
import Toast2Demo from '../example/Toast2Demo.vue'
import Toast3Demo from '../example/Toast3Demo.vue'
import Toast4Demo from '../example/Toast4Demo.vue'
import { toastdemo1, toastdemo2, toastdemo3, toastdemo4 } from '../explain/toast'
</script>
  
<style lang="scss" scoped></style>