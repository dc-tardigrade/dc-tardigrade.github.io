<template>
  <section class="nos-stages has-background-light">
    <div class="container">
      <header class="nos-stages__header has-text-centered">
        <h2 class="nos-stages__title title is-2">Nos Stages</h2>
        <p class="nos-stages__intro is-size-6 has-text-weight-bold mt-3 mb-3">
          Participe à nos stages dans des conditions digne des plus grands survivalistes
        </p>
        <ul class="has-text-centered content">
          <li>En forêt pour tomber nez à nez avec un ours</li>
          <li>En montagne si vous avez peur de tomber dans le vide</li>
          <li>Ou au bord d’un lac pour nager aux côtés de votre futur repas</li>
        </ul>
      </header>
      <Stages class="mt-6 nos-stages__stages"></Stages>
      <div class="mt-5 has-text-centered">
        <a href="#" class="button is-primary is-rounded">Tous nos bons plans</a>
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

<style lang="scss" scoped>
.nos-stages {
  padding: 4rem 0;

  ul {
    list-style-type: disc;
  }
}
</style>
