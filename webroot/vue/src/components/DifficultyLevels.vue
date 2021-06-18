<template>
  <section class="home-levels py-5">
    <div class="container is-fluid">
      <h2 class="section-title">Des <span>niveaux</span> pour <span>tous</span></h2>
      <div class="columns">
        <div class="column">
          <DifficultyLevel>
            <template v-slot:thumbnail>
              <img src="/img/level-1.jpg" alt="Noob">
            </template>
            <template v-slot:title>
              Noob : sans nous, t'es mort
            </template>
          </DifficultyLevel>
        </div>
        <div class="column">
          <DifficultyLevel>
            <template v-slot:thumbnail>
              <img src="/img/level-2.jpg" alt="Noob">
            </template>
            <template v-slot:title>
              Tu pourrais survivre. Par accident.
            </template>
          </DifficultyLevel>
        </div>
        <div class="column">
          <DifficultyLevel>
            <template v-slot:thumbnail>
              <img src="/img/level-3.jpg" alt="Noob">
            </template>
            <template v-slot:title>
              Difficile. Badass.
            </template>
          </DifficultyLevel>
        </div>
        <div class="column">
          <DifficultyLevel>
            <template v-slot:thumbnail>
              <img src="/img/level-4.jpg" alt="Noob">
            </template>
            <template v-slot:title>
              Extrême. T'as cassé le game.
            </template>
          </DifficultyLevel>
        </div>
      </div>
      <DifficultyLevel class="py-6">
        <template v-slot:thumbnail>
          <img src="/img/pack-famille.jpg" alt="Noob">
        </template>
        <template v-slot:title>
          Pack Famille :<br/>l'aventure petits et grands
        </template>
      </DifficultyLevel>
    </div>
  </section>
</template>

<script>
import DifficultyLevel from '@/components/DifficultyLevel'

export default {
  name: "Levels",
  components: {
    DifficultyLevel
  }
}
</script>

<style lang="scss" scoped>
</style>
