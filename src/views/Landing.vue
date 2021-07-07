<template>
  <div class="page page-home">
    <HeroSection bg="hero-bg.jpg" bgMobile="hero-bg-mobile.jpg"></HeroSection>
    <AboutUs></AboutUs>
    <OurCourses></OurCourses>
    <Benefits></Benefits>
    <Newsletter></Newsletter>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection'
import AboutUs from '@/components/Landing/AboutUs'
import Benefits from '@/components/Landing/Benefits'
import OurCourses from '@/components/Courses/OurCourses'
import Newsletter from '@/components/Newsletter'

export default {
  name: 'Home',
  components: {
    HeroSection,
    AboutUs,
    OurCourses,
    Benefits,
    Newsletter,
  }
}
</script>

<style>

</style>
