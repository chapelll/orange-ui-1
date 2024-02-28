<template>
    <div>
        <h1>Switch 组件示例 </h1>
        <demo title="基本使用" :codes="switchdemo1">
            <Switch1demo></Switch1demo>
        </demo>
        <demo title="支持disabled" :codes="switchdemo2">
            <Switch2demo></Switch2demo>
        </demo>
    </div>
</template>
  
<script lang="ts" setup>
import demo from './demo.vue'
import Switch1demo from './Switch1Demo.vue'
import Switch2demo from './Switch2Demo.vue'
import { switchdemo1,switchdemo2 } from '../explain/switch'

</script>

  
<style lang="scss" scoped>
</style>
  