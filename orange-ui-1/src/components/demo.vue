<template>
    <pre><code class="language-python line-numbers">print("Hello world")</code></pre>
</template>
<script setup lang="ts">
import { onMounted, onUpdated } from "vue";
import Prism from "prismjs";
onUpdated(() => {
    Prism.highlightAll(); //修改内容后重新渲染
});
onMounted(() => {
    Prism.highlightAll(); //切换菜单重新渲染
})
</script>
   