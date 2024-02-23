<template>
    <div>Tabs示例</div>
    <div>
        <h1>示例1</h1>
        <div>
            <Tabs selected="导航一">
                <Tab title="导航一">选项一</Tab>
                <Tab title="导航二">选项二</Tab>
            </Tabs>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
</script>
  
<style lang="scss" scoped></style>
  