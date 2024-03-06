<template>
    <article class="markdown-body">
        <h1>安装</h1>
        <p>打开终端运行下列命令：</p>
        <pre><code class="language-javaScript">npm install orange-ui</code></pre>
        <p>或</p>
        <pre><code class="language-javaScript">yarn install orange-ui</code></pre>

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