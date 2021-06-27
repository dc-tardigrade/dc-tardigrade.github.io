<template>
  <div class="page page-home">
    <HeroSection></HeroSection>
    <AboutUs></AboutUs>
    <NosStages></NosStages>
    <Benefits></Benefits>
    <DifficultyLevels></DifficultyLevels>
    <Newsletter></Newsletter>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection'
import AboutUs from '@/components/AboutUs'
import NosStages from '@/components/NosStages'
import Newsletter from '@/components/Newsletter'
import Benefits from '@/components/Benefits'
import DifficultyLevels from '@/components/DifficultyLevels'

export default {
  name: 'Home',
  components: {
    HeroSection,
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
