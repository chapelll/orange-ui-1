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
                <pre>&lt;Switch v-model:value="bool" disabled /&gt;</pre>
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
                <pre class="language-html" v-html="Prism.highlight(string1, Prism.languages.html, 'html')"></pre>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import Button from '../lib/Button.vue'
// import Switch from '../lib/Switch.vue'
import Switch1demo from './Switch1Demo.vue'
import Switch2demo from './Switch2Demo.vue'
import "prismjs"
import "prismjs/themes/prism.css"
const Prism = (window as any).Prism
console.log(Prism);

const string1 = `<&lt;Switch v-model:value="bool" disabled /&gt;>`
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
  