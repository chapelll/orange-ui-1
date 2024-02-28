<template>
    <div class="topnav">
        <router-link to="/" class="logo">
            <svg class="icon">
                <use xlink:href="#i-020-orange"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <svg class="icon toggle-aside" v-if="props.toggleAsideShow" @click="toggleAside">
            <use xlink:href="#i-menu-p"></use>
        </svg>
    </div>
</template>
  
<script setup lang="ts">
import { inject, Ref } from 'vue';
const props = defineProps({
    toggleAsideShow: {
        type: Boolean,
        default: false
    }
})
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    color: $text-color;

    >.logo {
        margin: 0 auto;

        >svg {
            width: 32px;
            height: 32px;
        }

    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 24px;

        >li {
            margin: 0 1em;
        }
    }

    >.toggle-aside {
        width: 24px;
        height: 24px;
        position: absolute;
        background-color: fade-out(black, 0.9);
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
        border-radius: 8px;

        >svg {
            width: 36px;
            height: 36px;
        }
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
  