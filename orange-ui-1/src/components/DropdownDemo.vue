<template>
    <h1>Dropdown 组件示例 </h1>
    <div>
        <demo title="常规使用" :codes="dropdowndemo1" describe="支持传入clickItem事件以获取所点击项">
            <Dropdown1Demo></Dropdown1Demo>
        </demo>
    </div>

    <div>
        <demo title="支持disabled" :codes="dropdowndemo2">
            <Dropdown2Demo></Dropdown2Demo>
        </demo>
    </div>

    <div>
        <demo title="支持closeAfterClick和closeClickOutside" :codes="dropdowndemo3"
            describe="设置closeAfterClick为true,在点击某一项后会关闭dropdown；设置closeClickOutside为true,在点击屏幕其他地方后会关闭dropdown;">
            <Dropdown3Demo></Dropdown3Demo>
        </demo>
    </div>
</template>
  
<script setup lang="ts">
import demo from './demo.vue'
import Dropdown1Demo from '../example/Dropdown1Demo.vue'
import Dropdown2Demo from '../example/Dropdown2Demo.vue'
import Dropdown3Demo from '../example/Dropdown3Demo.vue'
import { dropdowndemo1, dropdowndemo2, dropdowndemo3 } from '../explain/dropdown'
</script>
  
<style lang="scss" scoped></style>