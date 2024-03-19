<template>
    <article class="markdown-body">
        <h1>介绍</h1>
        <p>Orange-UI 是一款基于 <span>Vue 3</span> 和 <span>typeScript</span> 的 UI 组件库。</p>
        <p>这款组件库其实是我为了总结自己这段时间学习vue3及typescript的感受而写的，全程亲手编写，没有采用任何第三方组件库，包括你现在看到的这个官网也几乎都是我自己写的。</p>
        <p>所以强烈不建议你将此 UI 库用于生产环境。但如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。源代码放在了我的<span
                @click="openPage('https://github.com/chapelll/orange-ui-1')" class="a">GitHub</span>上，历史提交信息非常规范，你可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例。</p>
        下一节：<a href="#/doc/install">安装</a>
    </article>
</template>

<script setup lang="ts">
const openPage = (url) => {
    window.open(url)
}
</script>

<style lang="scss" scoped>
p>span {
    color: #e39b67;
}

.a {
    color: #e39b67;
    text-decoration: underline;
    cursor: pointer;
    padding: 0 3px;
}
</style>