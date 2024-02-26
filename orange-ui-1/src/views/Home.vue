<template>
  <div>
    <div class="topnav-banner">
      <Topnav />
      <div class="banner">
        <h1>橘子UI</h1>
        <h2>一个用于学习的 UI 框架</h2>
        <p class="actions">
          <a href="123">GitHub</a>
          <router-link to="doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#i-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#i-typeScript"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#i--dengpao"></use>
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$text-color: #007974;

.topnav-banner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}

.banner {
  color: $text-color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: #fff;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.features {
  >svg {
    width: 64px;
    height: 64px;
  }
}
</style>