<template>
    <div class="dropdown-item" :class="{ 'dropdown-item-disabled': props.disabled }">
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>
  
<style lang="scss" scoped>
.dropdown-item {
    cursor: pointer;
    padding: 6px 12px;
    padding-left: 36px;

    &:hover {
        background-color: #f8f9fa;
    }
}

.dropdown-item-disabled {
    color: #ccc;
    opacity: 0.8;
    cursor: not-allowed;
}
</style>
  