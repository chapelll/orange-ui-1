<template>
    <div>
        <Button @click="openToast1" level="main">打开成功提示</Button>
        <Button @click="openToast2" level="danger">打开错误提示</Button>
        <Button @click="openToast3">打开默认提示</Button>
        <Toast v-model:visible="toastVisible_success" type="success" message="这是一条成功的提示！"></Toast>
        <Toast v-model:visible="toastVisible_danger" type="danger" message="这是一条错误的提示！"></Toast>
        <Toast v-model:visible="toastVisible_default" type="default" message="这是一条默认的提示！"></Toast>
    </div>
</template>
  
<script setup lang="ts">
import { Toast, Button } from 'my-orange-ui'
import { ref } from 'vue';

const toastVisible_success = ref(false)
const toastVisible_danger = ref(false)
const toastVisible_default = ref(false)
const openToast1 = () => {
    toastVisible_success.value = true
}
const openToast2 = () => {
    toastVisible_danger.value = true
}
const openToast3 = () => {
    toastVisible_default.value = true
}
</script>