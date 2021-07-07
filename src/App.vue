<template>
  <div id="app">
    <Navbar :page="$route.name"></Navbar>
    <main>
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import {mapActions} from 'vuex'
import firebase from "firebase";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  methods: {
    ...mapActions(['fetchUser'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged(() => {
      this.fetchUser()
    })
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_main.scss";
</style>
