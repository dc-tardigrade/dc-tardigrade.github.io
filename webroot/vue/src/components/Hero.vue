<template>
  <section class="hero is-medium is-light">
    <div class="container">
      <div class="hero-body has-text-centered">
          <h1 class="title is-size-2-mobile is-size-2-tablet is-size-1-desktop">Découvrez le survivalisme comme jamais auparavant</h1>
          <p class="subtitle mt-2 mb-6">La plateforme dédiée à l’entraide survivaliste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque explicabo labore laboriosam necessitatibus nemo nihil placeat quas rem saepe, tempora?</p>
          <youtube class="is-16by9" :video-id="videoId" ref="youtube"></youtube>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Hero',
  components: {

  },
  data() {
    return {
      posts: window.axios.get(this.$API_ROOT + '/api/posts'),
      videoId: '7Z0x-3UOw0E'
    }
  },

}
</script>

<style lang="scss" scoped>

</style>
