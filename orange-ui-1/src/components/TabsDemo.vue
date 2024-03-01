<template>
    <div>Tabs示例</div>
    <div>
        <h1>示例1</h1>
        <div>
            <Tabs v-model:selected="selectedTab">
                <Tab title="导航一">选项一</Tab>
                <Tab title="导航二二二二">选项二</Tab>
            </Tabs>
        </div>
    </div>

    <div>
        <h1>示例1</h1>
        <div>
            <Tabs v-model:selected="selectedTab2">
                <Tab title="导航一">选项一</Tab>
                <Tab title="导航二">选项二</Tab>
                <Tab title="导航三" :disabled="true">选项三</Tab>
            </Tabs>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue';

// 默认选择导航
const selectedTab = ref('导航一')
const selectedTab2 = ref('导航一')
</script>
  
<style lang="scss" scoped></style>
  