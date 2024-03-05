<template>
    <div>
        <div class="demo">
            <h2>
                {{ props.title }}
                <div class="describe" v-if="props.describe">{{ props.describe }}</div>
            </h2>
            <div class="demo-component">
                <slot></slot>
            </div>
            <div class="demo-actions">
                <Button @click="toggle">查看代码</Button>
            </div>
            <div class="demo-code" v-if="codesVisible">
                <pre><code class="language-html">{{ props.codes }}</code></pre>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, onMounted, onUpdated } from 'vue';
import Button from '../lib/Button.vue'
import Prism from "prismjs";
import "prismjs/themes/prism.css"

const props = defineProps({
    title: {
        type: String,
    },
    codes: {
        type: String,
    },
    describe: {
        type: String,
    }
})
const codesVisible = ref(false)
const toggle = () => {
    codesVisible.value = !codesVisible.value
}

onUpdated(() => {
    Prism.highlightAll(); //修改内容后重新渲染
});
onMounted(() => {
    Prism.highlightAll(); //切换菜单重新渲染
})
</script>

  
<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;

        >.describe {
            color: #999;
            font-size: 16px;
            padding-top: 12px;
            line-height: 24px;
        }
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>
  