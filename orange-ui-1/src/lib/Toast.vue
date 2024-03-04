<template>
    <teleport to="#toast">
        <div class="orange-toast-wrapper" :class="classes" v-if="props.visible">
            <div>{{ props.message }}</div>
            <div class="close-icon" @click="close"></div>
        </div>
    </teleport>
</template>
  
<script setup lang="ts">
import { PropType, onUnmounted, computed, watchEffect } from 'vue';
// 创建挂载的传送门
const node = document.createElement('div')
node.id = 'toast'
document.body.appendChild(node)
onUnmounted(() => {
    document.body.removeChild(node)
})

type toastType = 'default' | 'success' | 'danger'

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    type: {
        type: String as PropType<toastType>,
        default: 'default'
    },
    message: {
        type: String,
        default: '这是一条默认信息'
    },
    duration: {
        type: Number,
        default: 2000
    }
})

const classes = computed(() => {
    return {
        [`orange-toast-${props.type}`]: props.type
    }
})

const emits = defineEmits(['update:visible'])

let timerTimeout = null
const close = () => {
    emits('update:visible', false)
    if (timerTimeout) {
        clearTimeout(timerTimeout)
    }
}

watchEffect(() => {
    if (props.duration && props.visible) {
        timerTimeout = setTimeout(() => {
            close()
        }, props.duration);
    }
})
</script>
  
<style lang="scss">
.orange-toast-wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 2%;
    background-color: #f2f2f2;
    width: 60%;
    min-height: 48px;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    border-radius: 4px;

    &.orange-toast-success {
        color: #19be6b;
        background-color: #dbf1e1;
    }

    &.orange-toast-danger {
        color: #fa3534;
        background-color: #fef0f0;
    }

    .close-icon {
        width: 20px;
        height: 20px;
        position: relative;
        cursor: pointer;
    }

    .close-icon:hover::before,
    .close-icon:hover::after {
        background-color: #333;
    }

    .close-icon::before,
    .close-icon::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 2px;
        background-color: #999;
    }

    .close-icon::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    .close-icon::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
}
</style>
  