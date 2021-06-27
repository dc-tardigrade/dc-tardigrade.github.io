<template>
  <section class="our-courses has-background-light">
    <div class="container">
      <header class="our-courses__header has-text-centered">
        <h2 class="section-title">Nos <span>stages</span></h2>
        <p class="our-courses__intro">
          <strong>Participe à nos stages dans des conditions dignes des plus grands survivalistes</strong>
          En forêt pour tomber nez-à-nez avec un ours, en montagne si tu as peur de tomber dans le vide ou au bord d'un
          lac pour nager aux côtés de votre futur repas
        </p>
      </header>
      <Stages class="mt-6 our-courses__stages"></Stages>
      <div class="our-courses__btn-container">
        <a href="#" class="our-courses__btn btn btn-primary">Tous nos bons plans</a>
      </div>
    </div>
  </section>
</template>

<script>
import Stages from '@/components/Stages'

export default {
  name: "NosStages",
  components: {
    Stages
  }
}
</script>

<style lang="scss">
.our-courses {

  &__intro {
    max-width: 80%;
    margin: 0 auto 20px;

    strong {
      display: block;
      margin-bottom: 5px;
    }
  }

  ul {
    list-style-type: disc;
  }

  &__btn-container {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
