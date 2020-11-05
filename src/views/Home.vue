<template>
  <div class="page page-home">
    <div class="container">


      <Hero></Hero>
      <Checkerboard></Checkerboard>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import Checkerboard from '@/components/Checkerboard';

export default {
  name: 'Home',
  components: {
    Hero,
    Checkerboard
  }
}
</script>

<style>

</style>