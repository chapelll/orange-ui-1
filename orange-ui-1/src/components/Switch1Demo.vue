<template>
    <Switch v-model:value="bool" />
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
const bool = ref(false)
</script>