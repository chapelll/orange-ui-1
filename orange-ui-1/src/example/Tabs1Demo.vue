<template>
    <div>
        <Tabs v-model:selected="selectedTab">
            <Tab title="导航一">选项一的内容</Tab>
            <Tab title="导航二">选项二的内容</Tab>
        </Tabs>
    </div>
</template>
  
<script setup lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue';
const selectedTab = ref('导航一')
</script>