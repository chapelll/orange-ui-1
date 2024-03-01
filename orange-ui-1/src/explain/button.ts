// button组件
const buttondemo1 = `<template>
<Button>你好</Button>
<Button theme="link">你好</Button>
<Button theme="text">你好</Button>
</template>

<script lang="ts" setup>
import Button from '../lib/Button.vue'
</script>`

const buttondemo2 = `<template>
<div>
    <Button size="big">大大大</Button>
    <Button>普通按钮</Button>
    <Button size="small">小小小</Button>
</div>
<div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普通按钮</Button>
    <Button size="small" theme="link">小小小</Button>
</div>
<div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普通按钮</Button>
    <Button size="small" theme="text">小小小</Button>
</div>
</template>

<script lang="ts" setup>
import Button from '../lib/Button.vue'
</script>`

const buttondemo3 = `<template>
<div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="warning">警告按钮</Button>
    <Button level="danger">危险按钮</Button>
</div>
<div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="warning">警告链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
</div>
<div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="warning">警告文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
</div>
</template>

<script lang="ts" setup>
import Button from '../lib/Button.vue'
</script>`

const buttondemo4 = `<template>
<div>
    <Button disabled>禁用按钮</Button>
    <Button :disabled="true" theme="link">禁用链接按钮</Button>
    <Button :disabled="true" theme="text">禁用文字按钮</Button>
</div>
</template>

<script lang="ts" setup>
import Button from '../lib/Button.vue'
</script>`

const buttondemo5 = `<template>
<div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
</div>
</template>

<script lang="ts" setup>
import Button from '../lib/Button.vue'
</script>`

export { buttondemo1, buttondemo2, buttondemo3, buttondemo4, buttondemo5 }