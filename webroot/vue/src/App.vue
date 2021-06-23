<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
</style>
