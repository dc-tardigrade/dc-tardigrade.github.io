<template>
  <section class="hero is-medium">
    <div class="container">
      <div class="hero-body has-text-centered">
        <h1>Nomad</h1>
        <p class="section-subtitle">Découvrez. Apprenez. Survivez.</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomeHero',
  data() {
    return {
      posts: window.axios.get(this.$API_ROOT + '/api/posts'),
      videoId: '7Z0x-3UOw0E'
    }
  },

}
</script>

<style lang="scss" scoped>
.hero {
  background: url('/img/HeroBG.jpg') center/cover no-repeat;

  &.is-medium &-body {
    padding: 0 1.5rem 12rem;
  }
}
</style>
