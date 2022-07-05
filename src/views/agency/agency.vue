<template>
  <main class="agency">
    <!-- 头部标题 -->
    <header class="agency__header">
    </header>
    <section class="agency__content">

    </section>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, ComputedRef, reactive } from 'vue';
const route = useRoute();
// TODO: 根据url中name的参数来切换数据
const title:ComputedRef<string> = computed(() => route.query?.name as string);

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
