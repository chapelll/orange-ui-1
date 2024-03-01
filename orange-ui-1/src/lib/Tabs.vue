<template>
    <div class="orange-tabs">
        <div class="orange-tabs-nav" ref="container">
            <div class="orange-tabs-nav-item" :ref="el => { if (t === props.selected) selectedItem = el }"
                @click="toggleItem(t)" :class="{ 'selected': t === props.selected, 'disabled': disableds.includes(t) }"
                v-for="(t, index) in  titles " :key="index">{{ t }}</div>
            <div ref="indicator" class="orange-tabs-nav-indicator"></div>
        </div>
        <div class="orange-tabs-content">
            <component :is="current" :key="current.props.title" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, useSlots, watchEffect, onMounted, computed } from 'vue'
import Tab from '../lib/Tab.vue'

const props = defineProps({
    selected: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false
    },
})
const emits = defineEmits(['update:selected'])

const defaults = useSlots().default()
defaults.forEach((item, index) => {
    if (item.type !== Tab) {
        throw new Error(`Tabs下的第${index + 1}个子组件不是Tab!`)
    }
})
const titles = defaults.map((item) => {
    return item.props.title
})
const disableds = []
defaults.forEach((item) => {
    if (item.props.disabled) {
        disableds.push(item.props.title)
    }
})

const current = computed(() => {
    return defaults.find((item) => {
        return item.props.title === props.selected
    })
})

const toggleItem = (t) => {
    if (disableds.includes(t)) {
        return
    }
    emits('update:selected', t)
}
const selectedItem = ref(null)
const indicator = ref(null)
const container = ref(null)

const toggle = () => {
    const width = selectedItem.value.getBoundingClientRect().width
    indicator.value.style.width = width + 'px'
    const left1 = container.value.getBoundingClientRect().left
    const left2 = selectedItem.value.getBoundingClientRect().left
    indicator.value.style.left = left2 - left1 + 'px'
}

onMounted(() => {
    watchEffect(() => {
        toggle()
    })
})

</script>
  
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.orange-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        >.disabled {
            color: #ccc;
            opacity: 0.8;
            cursor: not-allowed;
        }

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }

        &-indicator {
            position: absolute;
            height: 3px;
            background-color: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 350ms;
        }
    }

    &-content {
        padding: 8px 0;

        &-item {
            display: none;



            &.selected {
                display: block;
            }
        }
    }
}
</style>
  