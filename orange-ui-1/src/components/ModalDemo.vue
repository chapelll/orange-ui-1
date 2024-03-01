<template>
    <div>
        <h1>Modal 组件示例 </h1>
        <demo title="基本使用" :codes="modaldemo1" describe="支持自定义标题和内容">
            <Modal1Demo></Modal1Demo>
        </demo>

        <demo title="支持closeOnClickOverlay" :codes="modaldemo2" describe="点击遮罩层就可以关闭">
            <Modal2Demo></Modal2Demo>
        </demo>

        <demo title="支持传入事件" :codes="modaldemo3" describe="支持传入confirm事件和cancel事件,当传入的事件return为true时才会关闭">
            <Modal3Demo></Modal3Demo>
        </demo>

        <demo title="一键打开Modal" :codes="modaldemo4" describe="支持传入confirm事件和cancel事件,当传入的事件return为true时才会关闭">
            <Modal4Demo></Modal4Demo>
        </demo>

        <!-- <div>
            <h1>示例2</h1>
            <div>
                <Button @click="showModal">show</Button>
            </div>
        </div> -->
    </div>
</template>
  
<script setup lang="ts">
import demo from './demo.vue'
import Modal1Demo from '../example/Modal1Demo.vue'
import Modal2Demo from '../example/Modal2Demo.vue'
import Modal3Demo from '../example/Modal3Demo.vue'
import Modal4Demo from '../example/Modal4Demo.vue'
import { modaldemo1, modaldemo2, modaldemo3, modaldemo4 } from '../explain/modal'



</script>
  
<style lang="scss" scoped></style>
  