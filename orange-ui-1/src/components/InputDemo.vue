<template>
    <div>
        <h1>Input 组件示例 </h1>

        <demo title="基本使用" :codes="inputdemo1">
            <Input1Demo></Input1Demo>
        </demo>

        <demo title="支持password模式" :codes="inputdemo2">
            <Input2Demo></Input2Demo>
        </demo>

        <demo title="支持disabled和readonly" :codes="inputdemo3">
            <Input3Demo></Input3Demo>
        </demo>

        <demo title="内置校验规则和校验错误样式" :codes="inputdemo4"
            describe="目前内置判空(required)校验、邮箱格式(email)校验、手机号(phone)校验、身份证(idCard)校验等，通过传入rules数组(对象的值分别为type类型和message错误提示信息)来使用，以后会增加更多内置校验规则及用户自定义校验模式">
            <Input4Demo></Input4Demo>
        </demo>
    </div>
</template>

<script setup lang="ts">
import demo from './demo.vue'
import Input1Demo from '../example/Input1Demo.vue'
import Input2Demo from '../example/Input2Demo.vue'
import Input3Demo from '../example/Input3Demo.vue'
import Input4Demo from '../example/Input4Demo.vue'
import { inputdemo1, inputdemo2, inputdemo3, inputdemo4 } from '../explain/input'
</script>

<style lang="scss" scoped></style>