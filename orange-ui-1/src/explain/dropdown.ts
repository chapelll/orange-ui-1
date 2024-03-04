// button组件
const dropdowndemo1 = `<template>
<div>
    <Dropdown title="点击可以展开哦 ▼" @clickItem="clickItem">
        <DropdownItem>第一项</DropdownItem>
        <DropdownItem>第二项</DropdownItem>
        <DropdownItem>第三项</DropdownItem>
    </Dropdown>
</div>
</template>

<script setup lang="ts">
import Dropdown from '../lib/Dropdown.vue'
import DropdownItem from '../lib/DropdownItem.vue'

const clickItem = (e) => {
    alert('点击了第' + (e + 1) + '项')
}
</script>`

const dropdowndemo2 = `<template>
<div>
    <Dropdown title="点击可以展开哦 ▼" @clickItem="clickItem">
        <DropdownItem>第一项</DropdownItem>
        <DropdownItem>第二项</DropdownItem>
        <DropdownItem :disabled="true">第三项</DropdownItem>
    </Dropdown>
</div>
</template>

<script setup lang="ts">
import Dropdown from '../lib/Dropdown.vue'
import DropdownItem from '../lib/DropdownItem.vue'

const clickItem = (e) => {
    alert('点击了第' + (e + 1) + '项')
}
</script>`

const dropdowndemo3 = `<template>
<div>
    <Dropdown title="点击可以展开哦 ▼" @clickItem="clickItem" :closeAfterClick="true" :closeClickOutside="true">
        <DropdownItem>第一项</DropdownItem>
        <DropdownItem>第二项</DropdownItem>
        <DropdownItem>第三项</DropdownItem>
    </Dropdown>
</div>
</template>

<script setup lang="ts">
import Dropdown from '../lib/Dropdown.vue'
import DropdownItem from '../lib/DropdownItem.vue'

const clickItem = (e) => {
    console.log('点击了第' + (e + 1) + '项')
}
</script>`


export { dropdowndemo1, dropdowndemo2, dropdowndemo3 }