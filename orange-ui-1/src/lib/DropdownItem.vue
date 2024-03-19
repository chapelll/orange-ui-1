<template>
    <div class="orange-dropdown-item" :class="{ 'orange-dropdown-item-disabled': props.disabled }">
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
.orange-dropdown-item {
    display: block;
    cursor: pointer;
    padding: 6px 12px;
    padding-left: 36px;

    &:hover {
        background-color: #f8f9fa;
    }
}

.orange-dropdown-item-disabled {
    color: #ccc;
    opacity: 0.8;
    cursor: not-allowed;
}
</style>