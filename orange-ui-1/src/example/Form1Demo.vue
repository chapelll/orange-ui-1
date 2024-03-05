<template>
    <div>
        <label class="form-label">邮箱地址</label>
        <ValidateInput :rules="emailRules" v-model:modelValue="email"></ValidateInput>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ValidateInput from '../lib/ValidateInput.vue'

// 创建校验规则
const emailRules = [{
    type: 'required',
    message: '电子邮箱不能为空',
}, {
    type: 'email',
    message: '电子邮箱输入不正确',
},]

const email = ref('')
</script>