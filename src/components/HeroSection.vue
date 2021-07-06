<template>
  <section class="hero is-medium" :style="{ backgroundImage: `url('${bgUrl}')` }">
    <div class="container">
      <div class="hero-body has-text-centered">
        <h1 class="hero__title">Nomad</h1>
        <p class="hero__subtitle">Découvrez. Apprenez. Survivez.</p>
      </div>
      <div v-if="hasSearchBar" class="hero__searchbar">
        <Searchbar></Searchbar>
      </div>
    </div>
  </section>
</template>

<script>

import Searchbar from '@/components/Searchbar'

export default {
  name: 'HeroSection',
  components: {
    Searchbar
  },
  props: {
    bg: String,
    hasSearchBar: Boolean
  },
  data() {
    return {
      bgUrl: '/img/' + this.bg,

      videoId: '7Z0x-3UOw0E'
    }
  },
}
</script>