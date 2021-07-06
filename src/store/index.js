import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
      profile: null
    },
    articles: []
  },
  mutations: {
    SET_USER(state, payload) {
      return state.user.data = payload
    },
    SET_USER_PROFILE(state, payload) {
      return state.user.profile = payload
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value
    },
    SET_ARTICLES(state, payload) {
      return state.articles = payload
    }
  },
  actions: {
    setUser(context, user) {
      if(user && Object.keys(user).length > 0) {
         firebase.firestore().collection('users')
           .doc(user.uid)
           .onSnapshot((doc) => {
             if (doc.exists) {
                 context.commit('SET_USER_PROFILE', doc)
             }
           })

        context.commit('SET_USER', user)
        context.commit('SET_LOGGED_IN', true)
      } else {
        context.commit('SET_LOGGED_IN', false)
      }
      context.commit('SET_LOGGED_IN', true)
      context.commit("SET_USER", user)
      console.log(user)
    },
    fetchUser(context) {
      // Check for auth
      const user = firebase.auth().currentUser
      if(user) {
        firebase.firestore().collection('users')
          .doc(user.uid)
          .onSnapshot((doc) => {
            if (doc.exists) {
                context.commit('SET_USER_PROFILE', doc.data())
            }
          })
        context.commit('SET_USER', user)
        context.commit('SET_LOGGED_IN', true)
      } else {
        context.commit('SET_LOGGED_IN', false)
      }
    },
    setUserProfile(context, userProfile) {
      context.commit('SET_USER_PROFILE', userProfile)
    },
    updateArticles(context, articlesObject) {
      context.commit('SET_ARTICLES', articlesObject)
    },
  },
  getters: {
    user(state) {
      return state.user
    }
  },

})

export default store
