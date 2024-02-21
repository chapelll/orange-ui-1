<template>
    <div>
        <Switch :value="y" @input="toggle"></Switch>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'

const y = ref(false)
const toggle = (e) => {
    y.value = e
}
</script>

  
<style lang="scss" scoped></style>
  