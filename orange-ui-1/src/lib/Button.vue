<template>
    <button v-bind="$attrs">
        <slot></slot>
    </button>
</template>
  
<script lang="ts" setup>


</script>
  
<style lang="scss" scoped>
.wrapper {
    border: 1px solid red;
}
</style>
  