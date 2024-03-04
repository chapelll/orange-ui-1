<template>
    <div class="dropdown-wrapper" ref="dropdownRef">
        <Button level="main" @click="toggle">{{ props.title }}</Button>
        <div class="dropdown" v-if="dropdownVisible">
            <component @click="handleItem(item, index)" v-for="(item, index) of defaults" :is="item" :key="index" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { onMounted, onUnmounted, ref, useSlots } from 'vue';
import Button from './Button.vue'
const props = defineProps({
    title: {
        type: String,
        default: '默认标题'
    },
    closeAfterClick: {
        type: Boolean,
        default: false
    },
    closeClickOutside: {
        type: Boolean,
        default: false
    },
})
const emits = defineEmits(['clickItem'])
const dropdownVisible = ref(false)
const toggle = () => {
    dropdownVisible.value = !dropdownVisible.value
}
const defaults = useSlots().default()

const handleItem = (item, index) => {
    if (item.props?.disabled) {
        return
    }
    if (props.closeAfterClick) {
        dropdownVisible.value = !dropdownVisible.value
    }
    emits('clickItem', index)
}

const dropdownRef = ref(null)
const handler = (e: MouseEvent) => {
    if (dropdownRef.value) {
        // 如果dropdownRef包含e的点击元素
        if (props.closeClickOutside && !dropdownRef.value.contains(e.target) && dropdownVisible.value) {
            dropdownVisible.value = false
        }
    }
}
onMounted(() => {
    document.addEventListener('click', handler)
    if (dropdownRef.value) {
        console.log(dropdownRef);
    }
})
onUnmounted(() => {
    document.removeEventListener('click', handler)
})

</script>
  
<style lang="scss" scoped>
.dropdown-wrapper {
    position: relative;
    display: inline-block;
}

.dropdown {
    position: absolute;
    // width: 100%;
    top: 40px;
    left: 0;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    display: inline-block;
    min-width: 180px;
    padding: 6px 0;
    z-index: 999;
    background-color: #fff;

    >.dropdown-item {
        cursor: pointer;
        padding: 6px 12px;

        &:hover {
            background-color: #f8f9fa;
        }
    }
}
</style>
  