<template>
    <div class="markdown-body">
        <h1>
            开始使用
        </h1>
        <p>请先<a href="#/doc/install">安装</a>本组件库。</p>
        <p>然后在你的代码中写入下面的代码(样式文件可以在main或App文件中全局引用)</p>
        <pre><code class="language-javaScript">{{ getStarteddemo1 }}</code></pre>
        就可以使用我提供的组件了。

        <h2>Vue 单文件组件</h2>
        <p>代码示例：</p>
        <pre><code class="language-html">{{ getStarteddemo2 }}</code></pre>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';
import Prism from "prismjs";
import "prismjs/themes/prism.css"
import { getStarteddemo1, getStarteddemo2, } from '../explain/getStarted'

onUpdated(() => {
    Prism.highlightAll();
});
onMounted(() => {
    Prism.highlightAll();
})
</script>

<style lang="scss" scoped></style>