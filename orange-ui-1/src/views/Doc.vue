<template>
  <div class="layout">
    <Topnav class="nav" :toggleAsideShow="true" />
    <div class="content">
      <aside v-if="asideVisible">
        <div class="h2">文档</div>
        <div class="ol">
          <div class="li">
            <router-link to="/doc/intro">介绍</router-link>
          </div>
          <div class="li">
            <router-link to="/doc/install">安装</router-link>
          </div>
          <div class="li">
            <router-link to="/doc/get-started">开始使用</router-link>
          </div>
        </div>
        <div class="h2">组件列表</div>
        <div class="ol">
          <div class="li">
            <router-link to="/doc/switch">Switch 组件</router-link>
          </div>
          <div class="li">
            <router-link to="/doc/button">Button 组件</router-link>
          </div>
          <div class="li">
            <router-link to="/doc/modal">Modal 组件</router-link>
          </div>
          <div class="li">
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </div>
          <div class="li">
            <router-link to="/doc/dropdown">Dropdown 组件</router-link>
          </div>
          <div class="li">
            <router-link to="/doc/toast">Toast 组件</router-link>
          </div>
          <div class="li">
            <router-link to="/doc/input">Input 组件</router-link>
          </div>
        </div>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

import Topnav from "../components/Topnav.vue";

const asideVisible = inject('asideVisible')
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  background: lightblue;
  width: 160px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 10;

  >.h2 {
    margin-bottom: 4px;
    padding: 4px 16px;
  }

  >.ol {
    >.li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }

      .router-link-active {
        background: white;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
