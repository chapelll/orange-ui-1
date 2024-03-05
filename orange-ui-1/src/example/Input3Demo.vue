<template>
    <div>
        <Input placeholder="支持disabled" disabled v-model:modelValue="val1"></Input>
        <Input placeholder="支持readonly" readonly v-model:modelValue="val2"></Input>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../lib/Input.vue'

const val1 = ref('')
const val2 = ref('')
</script>