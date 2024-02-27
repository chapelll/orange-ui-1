<template>
    <button @click="toggle" class="orange-switch" :class="{ 'orange-checked': props.value }"> <span></span> </button>
</template>
  
<script setup lang="ts">
// import { ref } from 'vue'
const props = defineProps(['value'])
const emits = defineEmits(['update:value'])

const toggle = () => {
    emits('update:value', !props.value)
}

</script>
  
<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.orange-switch {
    cursor: pointer;
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
}

.orange-switch.orange-checked {
    background: #1890ff;
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
}

.orange-switch.orange-checked>span {
    left: calc(100% - #{$h2} - 2px);
}

.orange-switch:active {
    >span {
        width: $h2 + 4px;
    }
}

.orange-switch.orange-checked:active {
    >span {
        width: $h2 + 4px;
        margin-left: -4px;
    }
}

.orange-switch:focus {
    outline: none;
}
</style>
  