import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
