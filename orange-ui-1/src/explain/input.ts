// input组件
const inputdemo1 = `<template>
<div>
    <Input v-model:modelValue="value" placeholder="支持双向绑定"></Input>
    <div>value：{{ value }}</div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'my-orange-ui'

const value = ref('')
</script>`

const inputdemo2 = `<template>
<div>
    <Input placeholder="请输入密码" type="password" v-model:modelValue="password"></Input>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'my-orange-ui'

const password = ref('')
</script>`

const inputdemo3 = `<template>
<div>
    <Input placeholder="支持disabled" disabled v-model:modelValue="val1"></Input>
    <Input placeholder="支持readonly" readonly v-model:modelValue="val2"></Input>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'my-orange-ui'

const val1 = ref('')
const val2 = ref('')
</script>`

const inputdemo4 = `<template>
<div>
    <Input v-model:modelValue="val1" placeholder="电子邮箱的校验" :rules="emailRules"></Input>
    <Input v-model:modelValue="val2" placeholder="手机号码的校验" :rules="phoneRules"></Input>
    <Input v-model:modelValue="val3" placeholder="身份证号码的校验" :rules="idCardRules"></Input>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'my-orange-ui'

// 创建校验规则
const emailRules = [{
    type: 'required',
    message: '电子邮箱不能为空',
}, {
    type: 'email',
    message: '电子邮箱输入不正确',
},]

const phoneRules = [{
    type: 'required',
    message: '手机号码不能为空',
}, {
    type: 'phone',
    message: '手机号码输入不正确',
},]

const idCardRules = [{
    type: 'required',
    message: '身份证号码不能为空',
}, {
    type: 'idCard',
    message: '身份证号码输入不正确',
},]

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
</script>`

export { inputdemo1, inputdemo2, inputdemo3, inputdemo4 }