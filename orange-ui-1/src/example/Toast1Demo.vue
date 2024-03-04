<template>
    <div>
        <Button @click="openToast">打开默认提示</Button>
        <Toast v-model:visible="toastVisible"></Toast>
    </div>
</template>
  
<script setup lang="ts">
import Toast from '../lib/Toast.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue';
const toastVisible = ref(false)
const openToast = () => {
    toastVisible.value = true
}
</script>