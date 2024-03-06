<template>
    <div>
        <Input v-model:modelValue="val1" placeholder="电子邮箱的校验" :rules="emailRules"></Input>
        <Input v-model:modelValue="val2" placeholder="手机号码的校验" :rules="phoneRules"></Input>
        <Input v-model:modelValue="val3" placeholder="身份证号码的校验" :rules="idCardRules"></Input>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../lib/Input.vue'

// 创建校验规则
const emailRules = [{
    type: 'required',
    message: '电子邮箱不能为空',
}, {
    type: 'email',
    message: '电子邮箱输入不正确',
},]

const phoneRules = [{
    type: 'required',
    message: '手机号码不能为空',
}, {
    type: 'phone',
    message: '手机号码输入不正确',
},]

const idCardRules = [{
    type: 'required',
    message: '身份证号码不能为空',
}, {
    type: 'idCard',
    message: '身份证号码输入不正确',
},]

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
</script>