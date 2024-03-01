<template>
    <div>
        <h1>Tabs 组件示例 </h1>

        <demo title="基本使用" :codes="tabsdemo1" describe="支持设置默认选中项">
            <Tabs1Demo></Tabs1Demo>
        </demo>

        <demo title="支持disabled" :codes="tabsdemo2">
            <Tabs2Demo></Tabs2Demo>
        </demo>
    </div>
</template>
  
<script setup lang="ts">
import demo from './demo.vue'
import Tabs1Demo from '../example/Tabs1Demo.vue'
import Tabs2Demo from '../example/Tabs2Demo.vue'
import { tabsdemo1, tabsdemo2 } from '../explain/tabs'
</script>
  
<style lang="scss" scoped></style>
  