import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import axios from 'axios'
import VueYoutube from 'vue-youtube'
import router from './router'
import store from './store'
import VueGtm from 'vue-gtm';
import firebase from 'firebase/app';

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

const firebaseConfig = {
  apiKey: "AIzaSyC4x3-Mt3WGQ6LO0guOTpQXNHVvwOELomM",
  authDomain: "nomad-316318.firebaseapp.com",
  databaseURL: "https://nomad-316318-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nomad-316318",
  storageBucket: "nomad-316318.appspot.com",
  messagingSenderId: "310352052623",
  appId: "1:310352052623:web:7ced6ac3b0d0a074fd4bfa",
  measurementId: "G-L6DBRBW80T"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
})


