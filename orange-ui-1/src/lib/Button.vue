<template>
    <div class="wrapper">
        <button v-bind="$attrs">
            <slot></slot>
        </button>
    </div>
</template>
  
<script lang="ts">
export default {
    inheritAttrs: false,
    setup(props, context) {
        console.log(props);
        console.log(context.attrs);
        const { size, ...rest } = context.attrs
        return { size, rest }
    }
}

</script>
  
<style lang="scss" scoped>
.wrapper {
    border: 1px solid red;
}
</style>
  