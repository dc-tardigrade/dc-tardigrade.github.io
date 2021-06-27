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
  name: 'HeroSection',
  data() {
    return {
      videoId: '7Z0x-3UOw0E'
    }
  },
}
</script>

<style lang="scss" scoped>
.hero {
  background: url('../assets/img/HeroBG.jpg') center/cover no-repeat;

  &.is-medium &-body {
    padding: 0 1.5rem 12rem;
  }
}
</style>
