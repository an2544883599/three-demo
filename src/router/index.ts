import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    children: [
      {
        path: '/one',
        name: 'one',
        component: () => import('@/views/demo/one.vue'),
      },
      {
        path: '/two',
        name: 'two',
        component: () => import('@/views/demo/two.vue'),
      },
      {
        path: '/three',
        name: 'three',
        component: () => import('@/views/demo/three.vue'),
      },
      {
        path: '/four',
        name: 'four',
        component: () => import('@/views/demo/four.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;