import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import middleware from '@/middleware';

Vue.config.productionTip = false;

middleware();

new Vue({
  render: (h) => h(App),
}).$mount('#app');
