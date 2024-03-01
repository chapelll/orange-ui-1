<template>
    <h1>Button 组件示例 </h1>
    <div>
        <demo title="常规使用" :codes="buttondemo1">
            <Button1demo></Button1demo>
        </demo>
    </div>

    <div>
        <demo title="支持size" :codes="buttondemo2">
            <Button2demo></Button2demo>
        </demo>
    </div>

    <div>
        <demo title="支持level" :codes="buttondemo3">
            <Button3demo></Button3demo>
        </demo>
    </div>

    <div>
        <demo title="支持disabled" :codes="buttondemo4">
            <Button4demo></Button4demo>
        </demo>
    </div>

    <div>
        <demo title="支持loading" :codes="buttondemo5">
            <Button5demo></Button5demo>
        </demo>
    </div>
</template>
  
<script setup lang="ts">
import demo from './demo.vue'
import Button1demo from '../example/Button1demo.vue'
import Button2demo from '../example/Button2demo.vue'
import Button3demo from '../example/Button3demo.vue'
import Button4demo from '../example/Button4demo.vue'
import Button5demo from '../example/Button5demo.vue'

import { buttondemo1, buttondemo2, buttondemo3, buttondemo4, buttondemo5 } from '../explain/button'

</script>
  
<style lang="scss" scoped></style>
  