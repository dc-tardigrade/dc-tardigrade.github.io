<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">

// Vars
:root {
  --primary: #FF5555 !important;
}

// Root and containers styles
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  background-color: #FFF5F5 !important;
}

h1, .h1, .h1 span, h2, .h2, h3, .h3 {
  font-family: "Dosis", sans-serif;
}

p, div, span, li, a {
  font-family: "Open Sans", sans-serif;
}
</style>
