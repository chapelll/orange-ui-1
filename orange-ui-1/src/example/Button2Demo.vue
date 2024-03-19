<template>
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
import { Button } from 'my-orange-ui'
</script>