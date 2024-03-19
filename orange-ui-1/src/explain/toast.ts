// toast组件
const toastdemo1 = `<template>
<div>
    <Button @click="openToast">打开默认提示</Button>
    <Toast v-model:visible="toastVisible"></Toast>
</div>
</template>

<script setup lang="ts">
import { Toast, Button } from 'my-orange-ui'

import { ref } from 'vue';
const toastVisible = ref(false)
const openToast = () => {
    toastVisible.value = true
}
</script>`

const toastdemo2 = `<template>
<div>
    <Button @click="openToast">打开自定义提示</Button>
    <Toast v-model:visible="toastVisible" message="这是一条自定义提示,显示5秒自动关闭" :duration="5000"></Toast>
</div>
</template>

<script setup lang="ts">
import { Toast, Button } from 'my-orange-ui'

import { ref } from 'vue';
const toastVisible = ref(false)
const openToast = () => {
    toastVisible.value = true
}
</script>`

const toastdemo3 = `<template>
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
import { Toast, Button } from 'my-orange-ui'

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

const toastdemo4 = `<template>
<div>
    <Button @click="showToast1" level="main">函数式打开提示</Button>
    <Button @click="showToast2" level="danger">函数式打开提示</Button>
</div>
</template>

<script setup lang="ts">
import { openToast, Button } from 'my-orange-ui'

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


export { toastdemo1, toastdemo2, toastdemo3, toastdemo4 }