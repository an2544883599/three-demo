<template>
  <main
    class="container"
    :class="theme ? 'dark': 'light'"
  >
    <!-- 头部 -->
    <header
      class="header"
    >
      <home-header @switchTheme="switchTheme" />
    </header>
    <section class="content">
      <!-- 导航栏 -->
      <aside class="content__aside">
        <home-aside />
      </aside>
      <!-- 内容部分 -->
      <article class="content__section">
        <router-view />
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
// import { NLayout } from 'naive-ui';
import { ref } from 'vue';
import HomeHeader from './components/home-header.vue';
import homeAside from './components/home-aside.vue';

// 根据头部子组件传过来的值控制主题颜色 (默认false是浅色， true是深色)
const theme = ref(false);
const switchTheme = (val: boolean) => {
  theme.value = val;
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
}

.container {
  position: relative;
  width: 100%;
}

.content {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  // margin-top: 80px;
  padding: 0 70px;

  &__aside {
    position: sticky;
    top: 100px;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 0 0 200px;
    height: calc(100vh - 100px);
    // margin-top: 170px;
  }

  &__section {
    flex: 1;
    padding-top: 80px;
    border: 1px solid red;
  }
}
</style>
