<template>
    <div>
        <h1>Switch 组件示例 </h1>
        <div class="demo">
            <h2>常规用法</h2>
            <div class="demo-component">
                <Switch1demo></Switch1demo>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre><code class="language-html">{{ switchdemo1 }}</code></pre>
            </div>
        </div>
        <div class="demo">
            <h2>支持 disabled </h2>
            <div class="demo-component">
                <Switch2demo></Switch2demo>
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <pre><code class="language-html">{{ switchdemo2 }}</code></pre>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import Prism from "prismjs";
import { onMounted, onUpdated } from "vue";
import Button from '../lib/Button.vue'
// import Switch from '../lib/Switch.vue'
import Switch1demo from './Switch1Demo.vue'
import Switch2demo from './Switch2Demo.vue'
import "prismjs/themes/prism.css"

import { switchdemo1,switchdemo2 } from '../explain/switch'

onUpdated(() => {
    Prism.highlightAll(); //修改内容后重新渲染
});
onMounted(() => {
    Prism.highlightAll(); //切换菜单重新渲染
})
</script>

  
<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>
  