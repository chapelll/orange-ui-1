<template>
    <div>
        <Button @click="toggle"> 打开Modal </Button>
        <Modal title="我的标题" v-model:visible="visible" :confirm="confirm" :cancel="cancel">
            <template v-slot:title>支持传入事件</template>
            <template v-slot:content>传入的confirm事件return为false,因此点击确定不会关闭;
                传入的cancel事件return为true,因此点击取消会关闭</template>
        </Modal>
    </div>
</template>
  
<script setup lang="ts">
import { Button, Modal } from 'my-orange-ui'
import { ref } from 'vue';

const visible = ref(false)
const toggle = () => {
    visible.value = !visible.value
}
const confirm = () => {
    console.log('点击确定')
    return false
}
const cancel = () => {
    console.log('点击取消')
}
</script>