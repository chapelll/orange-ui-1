<template>
    <div>
        <Input placeholder="请输入密码" type="password" v-model:modelValue="password"></Input>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'my-orange-ui'

const password = ref('')
</script>