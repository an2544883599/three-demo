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
      {
        path: '/five',
        name: 'five',
        component: () => import('@/views/demo/five.vue'),
      },
      {
        path: '/six',
        name: 'six',
        component: () => import('@/views/demo/six.vue'),
      },
      {
        path: '/seven',
        name: 'seven',
        component: () => import('@/views/demo/seven.vue'),
      },
      {
        path: '/eight',
        name: 'eight',
        component: () => import('@/views/demo/eight.vue'),
      },
      {
        path: '/nine',
        name: 'nine',
        component: () => import('@/views/demo/nine.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;