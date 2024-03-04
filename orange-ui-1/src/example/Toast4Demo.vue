<template>
    <div>
        <Button @click="showToast1" level="main">函数式打开提示</Button>
        <Button @click="showToast2" level="danger">函数式打开提示</Button>
    </div>
</template>
  
<script setup lang="ts">
import Button from '../lib/Button.vue'
import { openToast } from '../lib/openToast'
const showToast1 = () => {
    openToast({
       message: '这是使用函数的形式打开的提示',
       type: 'success',
    })
}
const showToast2 = () => {
    openToast({
       message: '函数式打开且1秒就关闭',
       type: 'danger',
       duration: 1000
    })
}
</script>