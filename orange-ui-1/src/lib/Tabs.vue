<template>
    <div class="orange-tabs">
        <div class="orange-tabs-nav">
            <div class="orange-tabs-nav-item" @click="toggleItem(t)" :class="{ 'selected': t === props.selected }"
                v-for="(t, index) in titles" :key="index">{{ t }}</div>
        </div>
        <div class="orange-tabs-content">
            <component :class="{ 'selected': selected === c.props.title }" class="orange-tabs-content-item"
                v-for="(c, index) in defaults" :is="c" :key="index" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useSlots } from 'vue'
import Tab from '../lib/Tab.vue'

const props = defineProps({
    selected: {
        type: String,
    }
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
const toggleItem = (t) => {
    emits('update:selected', t)
}



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
  