<template>
    <div>
        <Button @click="onClick" @mouseover="onClick" size="big">
            你好
        </Button>
    </div>
</template>
  
<script setup lang="ts">
import Button from '../lib/Button.vue'

const onClick = () => {
    console.log('hi');
}

</script>
  
<style lang="scss" scoped></style>
  