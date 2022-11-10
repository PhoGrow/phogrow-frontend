import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

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
      name: 'Home',
      component: Home,
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/roadmap',
      name: 'Roadmap',
      component: () => import('../views/Roadmap.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

export default router;
