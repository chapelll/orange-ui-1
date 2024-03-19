<template>
    <div>
        <Button disabled>禁用按钮</Button>
        <Button :disabled="true" theme="link">禁用链接按钮</Button>
        <Button :disabled="true" theme="text">禁用文字按钮</Button>
    </div>
</template>
  
<script lang="ts" setup>
import { Button } from 'my-orange-ui'
</script>