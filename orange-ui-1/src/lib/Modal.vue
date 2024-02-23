<template>
    <template v-if="props.visible">
        <teleport to="body">
            <div class="orange-modal-overlay" @click="handleOverlay"></div>
            <div class="orange-modal-wrapper">
                <div class="orange-modal">
                    <header>
                        <slot name="title"></slot>
                        <span class="orange-modal-close" @click="close"></span>
                    </header>
                    <main>
                        <slot name="content"></slot>
                    </main>
                    <footer>
                        <Button level="main" @click="handleConfrim">确定</Button>
                        <Button @click="handleCancel">取消</Button>
                    </footer>
                </div>
            </div>
        </teleport>
    </template>
</template>
    
<script lang="ts" setup>
import Button from "./Button.vue";

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    closeOnClickOverlay: {
        type: Boolean,
        default: false
    },
    confirm: {
        type: Function,
    },
    cancel: {
        type: Function,
    },
})

const emits = defineEmits(['update:visible'])
const close = () => {
    emits('update:visible', false)
}
const handleOverlay = () => {
    if (props.closeOnClickOverlay) {
        close()
    }
}
const handleConfrim = () => {
    if (props.confirm && props.confirm() !== false) {
        //判断传入的confirm是否有阻塞执行
        close()
    }
}
const handleCancel = () => {
    if (props.confirm && props.cancel() !== false) {
        //判断传入的cancel是否有阻塞执行
        close()
    }
}

</script>
    
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.orange-modal {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    >header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    >main {
        padding: 12px 16px;
    }

    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }

    }
}
</style>