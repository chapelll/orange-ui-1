<template>
    <div>
        <Switch :value="bool" @toggle="toggle"></Switch>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'

const bool = ref(false)
const toggle = (e) => {
    bool.value = e
}
</script>

  
<style lang="scss" scoped></style>
  