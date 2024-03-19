<template>
    <div>
        <Button @click="showModal"> 打开Modal </Button>
    </div>
</template>
  
<script setup lang="ts">
import { Button, openModal } from 'my-orange-ui'

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
  