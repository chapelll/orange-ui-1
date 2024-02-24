<template>
    <div class="orange-tabs">
        <div class="orange-tabs-nav">
            <div class="orange-tabs-nav-item" :ref="el => { if (el) navItems[index] = el }" @click="toggleItem(t)"
                :class="{ 'selected': t === props.selected }" v-for="(t, index) in  titles " :key="index">{{ t }}</div>
            <div ref="indicator" class="orange-tabs-nav-indicator"></div>
        </div>
        <div class="orange-tabs-content">
            <component :class="{ 'selected': selected === c.props.title }" class="orange-tabs-content-item"
                v-for="( c, index ) in  defaults " :is="c" :key="index" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { nextTick, onMounted, ref, useSlots, watch } from 'vue'
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
const navItems = ref([])
const indicator = ref(null)
onMounted(() => {
    toggle()
})
watch(() => props.selected, (newValue) => {
    if (newValue) {
        toggle()
    }
})
const toggle = () => {
    nextTick(() => {
        const divs = navItems.value
        const selectedItem = divs.filter((item) => {
            return item.classList.contains('selected')
        })[0]
        const width = selectedItem.getBoundingClientRect().width
        indicator.value.style.width = width + 'px'
        console.log(width);
    })
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
        position: relative;

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
  