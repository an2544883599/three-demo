<template>
  <main class="agency">
    <!-- 头部标题 -->
    <header class="agency__header">
      <h1 class="agency__header_title">
        Responsive {{ title }} Website Templates
      </h1>
      <section class="agency__header_content">
        {{ section }}
      </section>
    </header>
    <section class="agency__content">
      <div
        v-for="item in list"
        :key="item.name"
        class="agency__content_item"
      >
        <img
          :src="item.img"
          alt=""
        >
        <article class="agency__content_item_title">
          <div>{{ item.name }}</div>
          <div>{{ item.price }}</div>
        </article>
        <article class="agency__content_item_author">
          by <div>{{ item.author }}</div>
        </article>
        <article class="agency__content_item_type">
          <img
            src="https://assets-global.website-files.com/5e593fb060cf87bbaf75dd20/5e5fd9be02ca7c310afec3d7_cms-icon.svg"
            alt=""
          >{{ item.type }}
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, ComputedRef, reactive } from 'vue';
import { sections, lists } from './agency';

const route = useRoute();
// TODO: 根据url中name的参数来切换数据
const title:ComputedRef<string> = computed(() => route.query?.name as string);

// 根据url中name来替换特定文案
const section:ComputedRef<string> = computed(() => sections.replaceAll('Agency', route.query?.name as string));
// 列表数据
const list = reactive([...lists]);
</script>

<style lang="scss" scoped>
.agency {
  width: 100%;
  padding-left: 10%;

  &__header {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 650px;

    &_title {
      font-weight: normal;
      font-size: 40px;
      line-height: 55px;
      text-align: center;
    }

    &_content {
      line-height: 30px;
      text-align: center;
    }
  }

  &__content {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;

    &_item {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      width: 24%;
      min-width: 180px;
      margin-bottom: 40px;
      padding: 0 12px;

      img {
        width: 100%;
      }

      &_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
        font-weight: 500;
        font-size: 15px;

        div {
          &:last-child {
            color: $header-content-color;
          }
        }
      }

      &_author {
        display: flex;
        font-size: 14px;

        div {
          color: $header-btn-color;
        }
      }

      &_type {
        color: $header-content-color;

        img {
          width: 10px;
          height: 12px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
