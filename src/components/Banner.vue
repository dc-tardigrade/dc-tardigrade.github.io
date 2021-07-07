<template>
  <article :class="'banner' + sizeClass" :style="{ backgroundImage: `url('/img/${background}')` }">
    <div class="banner__overlay"></div>
    <h3 class="banner__title">
      A toi de jouer !<br/>Sportif du dimanche ou pro de la survie ?
    </h3>
    <router-link class="btn btn-primary btn--lg" to="/questionnaire">Lancer le questionnaire</router-link>
  </article>
</template>

<script>
export default {
  name: "Banner",
  props: {
    background: String,
    size: String,
  },
  data() {
    return {
      sizeClass: this.size === 'large' ? ' banner--lg' : ''
    }
  }
}
</script>

<style scoped>

</style>