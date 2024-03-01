<template>
    <div>
        <Button @click="toggle"> 打开Modal </Button>
        <Modal title="我的标题" v-model:visible="visible" :closeOnClickOverlay="true">
            <template v-slot:title>标题</template>
            <template v-slot:content>点击遮罩层就可以关闭</template>
        </Modal>
    </div>
</template>
  
<script setup lang="ts">
import Modal from '../lib/Modal.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue';

const visible = ref(false)
const toggle = () => {
    visible.value = !visible.value
}
</script>