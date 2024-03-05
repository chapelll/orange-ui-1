<template>
    <div>
        <h1>Form 组件示例 </h1>

        <demo title="基本使用" :codes="tabsdemo1" >
            <Form1Demo></Form1Demo>
        </demo>
    </div>
</template>

<script setup lang="ts">
import demo from './demo.vue'
import Form1Demo from '../example/Form1Demo.vue'
import { tabsdemo1 } from '../explain/tabs'
</script>

<style lang="scss" scoped></style>