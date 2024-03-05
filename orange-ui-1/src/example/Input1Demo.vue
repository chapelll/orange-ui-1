<template>
    <div>
        <Input v-model:modelValue="value" placeholder="支持双向绑定"></Input>
        <div>value：{{ value }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../lib/Input.vue'

const value = ref('')
</script>