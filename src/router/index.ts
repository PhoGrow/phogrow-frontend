import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
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
      path: '/aboutus',
      name: 'AboutUs',
      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/roadmap',
      name: 'RoadMap',
      component: () => import('../views/RoadMap.vue'),
    },
    {
      path: '/blog',
      name: 'BlogView',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/blog/:year-month-title',
      name: 'BlogEntry',
      component: () => import('../views/BlogEntry.vue'),
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

export default router;
