<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';

const clientWidth = document.documentElement.clientWidth
const asideVisible = ref(clientWidth <= 500 ? false : true)
provide('asideVisible', asideVisible)


</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
