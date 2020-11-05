import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    }
  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      default: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
