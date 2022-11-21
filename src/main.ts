import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

import App from '@/App.vue';
import router from '@/router';

import Oruga from '@oruga-ui/oruga';
import { bulmaConfig } from '@oruga-ui/theme-bulma';
import '@/assets/style.scss';

Vue.use(PiniaVuePlugin);
Vue.use(Oruga, bulmaConfig);

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount('#app');
