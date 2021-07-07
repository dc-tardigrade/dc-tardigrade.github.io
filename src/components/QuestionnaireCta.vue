<template>
  <div class="container">
    <div class="home-section-header">
      <header class="home-section-header">
        <h2 class="home-section-header__title">Découvre ton niveau</h2>
        <p class="home-section-header__intro">Grâce à ce questionnaire, tu pourras connaître le niveau qui te
          convient le plus. Comment survivre en étant blessé ? Comment faire face au froid ? Comment se nourrir en
          pleine nature ? Confie-toi à nous et nous te proposerons la durée de stage idéale pour que tu deviennes un
          maître de la survie !</p>
      </header>
      <Banner class="banner" background="home-level-cta-bg.jpg">
        <template v-slot:title>Sportif du dimanche ou pro de la survie ?</template>
        <template v-slot:subtitle>A toi de jouer !</template>
        <template v-slot:button>
          <router-link class="btn btn-white btn--lg" to="/questionnaire">Lancer le questionnaire</router-link>
        </template>
      </Banner>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  name: "QuestionnaireCta",
  components: {
    Banner
  }
}
</script>
