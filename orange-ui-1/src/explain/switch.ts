// switch组件
const switchdemo1 = `<template>
<Switch v-model:value="bool" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
const bool = ref(false)
</script>`

const switchdemo2 = `<template>
<Switch v-model:value="bool" disabled/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
const bool = ref(false)
</script>`

export { switchdemo1, switchdemo2 }