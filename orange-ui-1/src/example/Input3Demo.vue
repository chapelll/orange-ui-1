<template>
    <div>
        <Input placeholder="请输入邮箱" type="password" v-model:modelValue="email"></Input>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../lib/Input.vue'

// 创建校验规则
// const emailRules = [{
//     type: 'required',
//     message: '电子邮箱不能为空',
// }, {
//     type: 'email',
//     message: '电子邮箱输入不正确',
// },]

const email = ref('')
</script>