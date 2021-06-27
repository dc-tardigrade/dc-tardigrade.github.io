import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      password: '',
      uid: '',
    }
  },
  mutations: {
    SET_USER (state, payload) {
      return state.user = payload.user
    },
    UPDATE_USER_NAME (state, payload) {
      return state.user.name = payload.name
    },
    UPDATE_USER_EMAIL (state, payload) {
      return state.user.email = payload.email
    },
    UPDATE_USER_PASSWORD (state, payload) {
      return state.user.password = payload.password
    },
    UPDATE_USER_UID (state, payload) {
      return state.user.uid = payload.uid
    }
  },
  actions: {
    updateCurrentUser(context, userObject) {
      context.commit('UPDATE_USER_NAME', userObject)
      context.commit('UPDATE_USER_EMAIL', userObject)
      context.commit('UPDATE_USER_UID', userObject)
      // context.commit('UPDATE_CURRENT_USER_PASSWORD', userObject)
    }
  }
})

export default store
