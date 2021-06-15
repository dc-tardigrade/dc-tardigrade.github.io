<template>
  <div class="page page-home">
    <Hero></Hero>
    <AboutUs></AboutUs>
    <NosStages></NosStages>
    <Benefits></Benefits>
    <Newsletter></Newsletter>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import NosStages from '@/components/NosStages'
import Newsletter from '@/components/Newsletter'
import Benefits from '@/components/Benefits'

export default {
  name: 'Home',
  components: {
    Hero,
    AboutUs,
    NosStages,
    Benefits,
    Newsletter,
  }
}
</script>

<style>

</style>
