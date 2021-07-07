<template>
  <div class="container">
    <div class="home-questionnaire-cta">
      <header class="home-questionnaire-cta__header">
        <h2 class="home-questionnaire-cta__title">Découvre ton niveau</h2>
        <p class="home-questionnaire-cta__intro">Grâce à ce questionnaire, tu pourras connaître le niveau qui te
          convient le
          plus. Comment survivre en étant blessé ? Comment faire face au froid ? Comment se nourrir en pleine nature ?
          Confie-toi à nous et nous te proposerons la durée de stage idéale pour que tu deviennes un maître de la
          survie !</p>
      </header>
      <Banner class="banner" size="large" background="home-level-cta-bg.jpg"></Banner>
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
