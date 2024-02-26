<template>
    <div class="topnav">
        <div class="logo">
            <svg class="icon">
                <use xlink:href="#i-020-orange"></use>
            </svg>
        </div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggle-aside" @click="toggleAside"></span>
    </div>
</template>
  
<script setup lang="ts">
import { inject, Ref } from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible')
const toggleAside = () => {
    asideVisible.value = !asideVisible.value
}

</script>
  
<style lang="scss" scoped>
$text-color: #007974;

.topnav {
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    color: $text-color;

    >.logo {
        max-width: 6em;
        margin-right: auto;

        >svg {
            width: 32px;
            height: 32px;
        }

    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggle-aside {
        width: 24px;
        height: 24px;
        background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }

    @media (max-width: 500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggle-aside {
            display: inline-block;
        }
    }
}
</style>
  