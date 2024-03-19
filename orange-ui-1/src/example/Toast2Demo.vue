<template>
    <div>
        <Button @click="openToast">打开自定义提示</Button>
        <Toast v-model:visible="toastVisible" message="这是一条自定义提示,显示5秒自动关闭" :duration="5000"></Toast>
    </div>
</template>
  
<script setup lang="ts">
import { Toast, Button } from 'my-orange-ui'
import { ref } from 'vue';

const toastVisible = ref(false)
const openToast = () => {
    toastVisible.value = true
}
</script>