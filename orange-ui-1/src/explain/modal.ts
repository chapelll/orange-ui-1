// modal组件
const modaldemo1 = `<template>
<div>
    <Button @click="toggle"> 打开Modal </Button>
    <Modal title="我的标题" v-model:visible="visible" :closeOnClickOverlay="true">
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
`

const modaldemo2 = `<template>
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
</script>`

const modaldemo3 = `<template>
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
import Modal from '../lib/Modal.vue'
import Button from '../lib/Button.vue'
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
</script>`

const modaldemo4 = `<template>
<div>
    <Button @click="showModal"> 一键打开Modal </Button>
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
`

export { modaldemo1, modaldemo2, modaldemo3, modaldemo4 }