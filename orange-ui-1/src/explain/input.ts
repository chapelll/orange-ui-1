// input组件
const inputdemo1 = `<template>
<div>
    <Input v-model:modelValue="value" placeholder="支持双向绑定"></Input>
    <div>value：{{ value }}</div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../lib/Input.vue'

const value = ref('')
</script>`

const inputdemo2 = `<template>
<div>
    <Input placeholder="请输入密码" type="password" v-model:modelValue="password"></Input>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../lib/Input.vue'

const password = ref('')
</script>`

const inputdemo3 = `<template>
<div>
    <Button @click="openToast1" level="main">打开成功提示</Button>
    <Button @click="openToast2" level="danger">打开错误提示</Button>
    <Button @click="openToast3">打开默认提示</Button>
    <Toast v-model:visible="toastVisible_success" type="success" message="这是一条成功的提示！"></Toast>
    <Toast v-model:visible="toastVisible_danger" type="danger" message="这是一条错误的提示！"></Toast>
    <Toast v-model:visible="toastVisible_default" type="default" message="这是一条默认的提示！"></Toast>
</div>
</template>

<script setup lang="ts">
import Toast from '../lib/Toast.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue';
const toastVisible_success = ref(false)
const toastVisible_danger = ref(false)
const toastVisible_default = ref(false)
const openToast1 = () => {
    toastVisible_success.value = true
}
const openToast2 = () => {
    toastVisible_danger.value = true
}
const openToast3 = () => {
    toastVisible_default.value = true
}
</script>`

const inputdemo4 = `<template>
<div>
    <Button @click="showToast1" level="main">函数式打开提示</Button>
    <Button @click="showToast2" level="danger">函数式打开提示</Button>
</div>
</template>

<script setup lang="ts">
import Button from '../lib/Button.vue'
import { openToast } from '../lib/openToast'
const showToast1 = () => {
openToast({
   message: '这是使用函数的形式打开的提示',
   type: 'success',
})
}
const showToast2 = () => {
openToast({
   message: '函数式打开且1秒就关闭',
   type: 'danger',
   duration: 1000
})
}
</script>`


export { inputdemo1, inputdemo2, inputdemo3, inputdemo4 }