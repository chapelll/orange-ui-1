<template>
    <button @click="toggle" :class="{ 'checked': props.value }"> <span></span> </button>
</template>
  
<script setup lang="ts">
// import { ref } from 'vue'
const props = defineProps(['value'])
const emits = defineEmits(['toggle'])

const toggle = () => {
    emits('toggle', !props.value)
}

</script>
  
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
}

button.checked {
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

button.checked>span {
    left: calc(100% - #{$h2} - 2px);
}

button:active {
    >span {
        width: $h2 + 4px;
    }
}

button.checked:active {
    >span {
        width: $h2 + 4px;
        margin-left: -4px;
    }
}

button:focus {
    outline: none;
}
</style>
  