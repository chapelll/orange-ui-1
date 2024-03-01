<template>
    <div>
        <Button @click="showModal"> 打开Modal </Button>
    </div>
</template>
  
<script setup lang="ts">
import Button from '../lib/Button.vue'
import { openModal } from '../lib/openModal'

const showModal = () => {
    openModal({
        title: '标题',
        content: '一键打开Modal',
        closeOnClickOverlay: true,
        confirm() {
            console.log('confirm');
            return false
        },
        cancel() {
            console.log('cancel');
        },
    })
}
</script>
  