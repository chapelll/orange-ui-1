<template>
    <div>
        <Button @click="openToast">打开默认提示</Button>
        <Toast v-model:visible="toastVisible"></Toast>
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