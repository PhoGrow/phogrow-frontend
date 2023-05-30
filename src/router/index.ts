import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    document?.querySelector('#app')?.scrollIntoView();
  },
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: () => import('@/views/AboutUs.vue'),
    },
    {
      path: '/roadmap',
      name: 'RoadMap',
      component: () => import('@/views/RoadMap.vue'),
    },
    {
      path: '/blog',
      name: 'BlogView',
      component: () => import('@/views/BlogView.vue'),
    },
    {
      path: '/blog/:year_month_title',
      name: 'BlogEntry',
      component: () => import('@/views/BlogEntry.vue'),
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/joinus',
      name: 'JoinUs',
      component: () => import('@/views/JoinUs.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;
