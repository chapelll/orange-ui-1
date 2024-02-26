<template>
  <div>
    <div class="topnav-banner">
      <Topnav />
      <div class="banner">
        <h1>橘子UI</h1>
        <h2>一个用于学习的 UI 框架</h2>
        <p class="actions">
        <div class="link" href="123">GitHub</div>
        <div class="link" @click="toPage('/doc')">开始</div>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#i-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue3 Composition API 及 setup语法</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#i-typeScript"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#i--dengpao"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Topnav from "../components/Topnav.vue";
import { useRouter } from "vue-router";
const router = useRouter()
const toPage = (url) => {
  router.push(url)
}
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$text-color: #007974;

.topnav-banner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
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

    .link {
      cursor: pointer;
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
  margin: 64px auto;
  width: 400px;

  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}
</style>