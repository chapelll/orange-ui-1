<template>
    <article class="markdown-body">
        <h1>安装</h1>
        <p>打开终端运行下列命令安装orange-ui：</p>
        <pre><code class="language-javaScript">npm install my-orange-ui</code></pre>
        <p>或</p>
        <pre><code class="language-javaScript">yarn install my-orange-ui</code></pre>

        <br>

        <p>某些组件使用了bootstrap的预置样式，因此你还需要安装bootstrap来获得更佳的体验(需要是v5.0.0以上版本): </p>
        <pre><code class="language-javaScript">npm install bootstrap</code></pre>
        <p>或</p>
        <pre><code class="language-javaScript">yarn install bootstrap</code></pre>
    
        <p>
            下一节：<a href="#/doc/get-started">开始使用</a>
        </p>
    </article>
</template>

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';
import Prism from "prismjs";
import "prismjs/themes/prism.css"

onUpdated(() => {
    Prism.highlightAll();
});
onMounted(() => {
    Prism.highlightAll();
})
</script>

<style lang="scss" scoped></style>