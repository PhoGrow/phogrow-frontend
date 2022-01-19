import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueStatic from 'vue-static';
import Buefy from 'buefy';
import '@/scss/style.scss';

Vue.use(VueStatic);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
