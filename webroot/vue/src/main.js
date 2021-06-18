import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import axios from 'axios'
import VueYoutube from 'vue-youtube'
import router from './router'
import VueGtm from 'vue-gtm';

Vue.use(Buefy)
Vue.use(VueGtm, {
  id: 'GTM-M84SHFZ',
  debug: true,
  vueRouter: router
})
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
