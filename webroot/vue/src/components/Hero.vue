<template>
  <section class="hero is-medium">
    <div class="container">
      <div class="hero-body has-text-centered">
        <h1 class="title is-size-2-mobile is-size-2-tablet is-size-1-desktop is-black">Nomad</h1>
        <p class="subtitle is-black mb-6">Découvrez. Apprenez. Survivez.</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Hero',
  components: {},
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
}
</style>
