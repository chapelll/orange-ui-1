<template>
    <div>
        <div>Modal示例</div>
        <div>
            <h1>示例1</h1>
            <div>
                <Button @click="toggle">切换</Button>
                <Modal title="我的标题" v-model:visible="visible" :closeOnClickOverlay="true" :confirm="confirm"
                    :cancel="cancel">
                    <template v-slot:title>我的标题</template>
                    <template v-slot:content>自定义内容</template>
                </Modal>
            </div>
        </div>

        <div>
            <h1>示例2</h1>
            <div>
                <Button @click="showModal">show</Button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import Modal from '../lib/Modal.vue'
import Button from '../lib/Button.vue'
import { openModal } from '../lib/openModal'
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

const showModal = () => {
    openModal({
        title: '标题',
        content: '你好',
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
  
<style lang="scss" scoped></style>
  