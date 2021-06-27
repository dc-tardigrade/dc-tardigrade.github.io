<template>
  <div id="app">
    <Navbar></Navbar>
    <main>
      <router-view/>
    </main>
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
@import "@/assets/scss/_main.scss";
</style>
