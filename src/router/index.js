import Vue from 'vue'
import VueRouter from "vue-router"
import firebase from 'firebase'

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
    path: '/decouvrir',
    name: 'landing',
    components: {
      default: () => import(/* webpackChunkName: "home" */ '../views/Landing.vue'),
    }

  },
  {
    path: '/contact',
    name: 'contact',
    components: {
      default: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    }
  },
  {
    path: '/devenir-nomad',
    name: 'register',
    components: {
      default: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    }
  },
  {
    path: '/connexion',
    name: 'login',
    components: {
      default: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    }
  },
  {
    path: '/mon-compte',
    name: 'my-account',
    components: {
      default: () => import(/* webpackChunkName: "my-account" */ '../views/MyAccount.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/blog',
    name: 'blog',
    components: {
      default: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
    }
  },
  {
    path: '/article/:id',
    name: 'article',
    components: {
      default: () => import(/* webpackChunkName: "article" */ '../views/Article.vue')
    }
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    components: {
      default: () => import(/* webpackChunkName: "questionnaire" */ '../views/QuestionnaireView.vue')
    }
  },
  {
    path: '/mentions-legales',
    name: 'legal',
    components: {
      default: () => import(/* webpackChunkName: "questionnaire" */ '../views/MentionsLegales.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router;
