<template>
    <div>
        <Input placeholder="请输入密码" type="password" v-model:modelValue="password"></Input>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../lib/Input.vue'

const password = ref('')
</script>