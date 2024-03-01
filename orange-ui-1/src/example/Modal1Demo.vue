<template>
    <div>
        <Button @click="toggle"> 打开Modal </Button>
        <Modal title="我的标题" v-model:visible="visible">
            <template v-slot:title>自定义标题</template>
            <template v-slot:content>自定义内容</template>
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
  