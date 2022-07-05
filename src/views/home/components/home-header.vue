<template>
  <main class="head-nav">
    <nav class="head-nav__logo">
      <img
        src="https://assets-global.website-files.com/583347ca8f6c7ee058111b3b/58b853dcfde5fda107f5affb_webflow-black-tight.svg"
        width="150"
        class="head-nav__logo-logo"
      >
      <div class="head-nav__logo_templates">
        Templates
      </div>
    </nav>
    <nav class="head-nav__menu">
      <div
        v-for="item in menuList"
        :key="item.label"
        class="head-nav__menu_item"
      >
        {{ item.label }}
        <img
          v-if="item.children"
          src="https://assets-global.website-files.com/5e593fb060cf87bbaf75dd20/5ea309fab75b753b45e24d07_carrot%20down.svg"
          alt=""
        >
        <section
          v-if="item.children"
          class="head-nav__menu_item_second"
        >
          <div
            v-for="sitem in item.children"
            :key="sitem.label"
            class="head-nav__menu_item_second_item"
          >
            {{ sitem.label }}
          </div>
        </section>
      </div>
    </nav>
    <div
      class="head-nav__switchTheme"
      @click="switchTheme"
    >
      {{ selectTheme }}
    </div>
    <nav class="head-nav__login">
      Log in
    </nav>
    <nav class="head-nav__other">
      Get started — it's free
    </nav>
  </main>
</template>

<script setup lang="ts">
import {
  reactive, ref, defineEmits, computed,
} from 'vue';
import { MenuList, menuLists } from './home-header';

const menuList: MenuList[] = reactive([]);
menuList.push(...menuLists);

const emit = defineEmits(['switchTheme']);

const theme = ref(false);
const switchTheme = (): void => {
  theme.value = !theme.value;
  emit('switchTheme', theme.value);
};
const selectTheme = computed(() => (theme.value ? '开灯' : '关灯'));

</script>

<style lang="scss" scoped>
.head-nav {
  position: fixed;
  top: 0;
  z-index: 9;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 1080px;
  height: 80px;
  padding: 0 80px;
  background: var(--header-btn-color);

  &__logo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-logo {
      display: block;
      width: 84px;
      cursor: pointer;
    }

    &_templates {
      margin-left: 6px;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  &__menu {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin-left: 2%;

    &_item {
      padding: 5px 10px 3px;
      line-height: 36px;
      opacity: 0.7;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        opacity: 1;

        .head-nav__menu_item_second {
          z-index: 6;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          height: auto;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);

          &_item {
            width: 48%;
            line-break: 20px;
          }
        }
      }

      &_second {
        position: absolute;
        top: 10;
        display: none;
        width: 400px;
        height: 0;
        padding: 30px 20px;
        background: #FFF;
        // max-height: 1000px;
        transition: height 0.38s;
      }
    }
  }

  &__switchTheme {
    color: var(--header-select-theme-color);
    cursor: pointer;
  }

  &__login {
    margin-right: 8px;
    padding: 16px 18px;
    color: $header-btn-color;
    cursor: pointer;
  }

  &__other {
    padding: 16px 18px;
    background-color: $header-btn-back-color;
    color: $header-btn-color;
    cursor: pointer;

    &:hover {
      background-color: $header-btn-back-active-color;
    }
  }
}
</style>
