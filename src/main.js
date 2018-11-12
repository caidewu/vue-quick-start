import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element';

import './theme.scss';

Vue.config.productionTip = false;

console.log('BASE_URL:', process.env.BASE_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
