<template>
  <div class="page page-home">
    <Hero></Hero>
    <Checkerboard></Checkerboard>
    <Banner></Banner>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import Checkerboard from '@/components/Checkerboard';
import Banner from '@/components/Banner';

export default {
  name: 'Home',
  components: {
    Hero,
    Checkerboard,
    Banner
  }
}
</script>

<style>

</style>