<template>
    <div>
        <h1>Input 组件示例 </h1>

        <demo title="基本使用" :codes="inputdemo1">
            <Input1Demo></Input1Demo>
        </demo>

        <demo title="支持password模式" :codes="inputdemo2">
            <Input2Demo></Input2Demo>
        </demo>
    </div>
</template>

<script setup lang="ts">
import demo from './demo.vue'
import Input1Demo from '../example/Input1Demo.vue'
import Input2Demo from '../example/Input2Demo.vue'
import { inputdemo1, inputdemo2 } from '../explain/input'
</script>

<style lang="scss" scoped></style>