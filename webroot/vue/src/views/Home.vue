<template>
  <div class="page page-home">
    <HomeHero></HomeHero>
    <AboutUs></AboutUs>
    <NosStages></NosStages>
    <Benefits></Benefits>
    <DifficultyLevels></DifficultyLevels>
    <Newsletter></Newsletter>
  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero'
import AboutUs from '@/components/AboutUs'
import NosStages from '@/components/NosStages'
import Newsletter from '@/components/Newsletter'
import Benefits from '@/components/Benefits'
import DifficultyLevels from '@/components/DifficultyLevels'

export default {
  name: 'Home',
  components: {
    HomeHero,
    AboutUs,
    NosStages,
    Benefits,
    DifficultyLevels,
    Newsletter,
  }
}
</script>

<style>

</style>
