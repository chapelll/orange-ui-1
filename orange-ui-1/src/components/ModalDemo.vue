<template>
    <div>
        <div>Modal示例</div>
        <div>
            <h1>示例1</h1>
            <div>
                <Button @click="toggle">切换</Button>
                <Modal :visible="visible"></Modal>
            </div>
        </div>
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
  
<style lang="scss" scoped></style>
  