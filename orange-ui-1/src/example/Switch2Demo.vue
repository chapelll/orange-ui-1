<template>
    <Switch v-model:value="bool" disabled/>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import { Switch } from 'my-orange-ui'
const bool = ref(false)
</script>
  