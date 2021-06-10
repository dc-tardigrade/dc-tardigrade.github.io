import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueYoutube from 'vue-youtube'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)
Vue.use(VueYoutube)

window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false

Vue.prototype.$API_ROOT = 'http://localhost:8765'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
