<template>
  <main class="aside">
    <el-menu
      :default-active="selectItem"
      class="el-menu-vertical-demo"
      router
    >
      <el-sub-menu
        v-for="item in routeList"
        :key="item.label"
        :index="item.label"
      >
        <template #title>
          <span>{{ item.label }}</span>
        </template>
        <template v-if="item.children&&item.children.length>0">
          <!-- TODO: 暂时先写死跳转路径，靠query传参来实现页面切换 -->
          <el-menu-item
            v-for="sitem in item.children"
            :key="sitem.label"
            :index="sitem.name"
            :route="{path:sitem.href, query:{name:sitem.name}}"
          >
            {{ sitem.label }}
          </el-menu-item>
        </template>
      </el-sub-menu>
    </el-menu>
  </main>
</template>

<script setup lang="ts">

import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { RouteList, ListJson } from './home-aside';
import { routeLists } from '@/assets/static-route/route';

const route = useRoute();
// 根据路由控制导航默认选中
const selectItem = computed(() => route.query?.name as string);

const routeList: Array<RouteList> = reactive([...routeLists]);

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-item {
  line-height: 20px;
  white-space: break-spaces;
  word-break: break-all;
}

// 对应子级，父级的样式
.is-active {
  color: $header-btn-color;
}
// 当子菜单选中时同时设置父级高亮
::v-deep .is-active .el-sub-menu__title {
  color: $header-btn-color;
}

.aside {
  display: flex;
  font-size: 18px;
}
</style>
