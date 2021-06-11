<template>
  <div class="page page-home">
    <Hero></Hero>
    <Checkerboard></Checkerboard>
    <Newsletter></Newsletter>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import Checkerboard from '@/components/Checkerboard';
import Newsletter from '@/components/Newsletter';

export default {
  name: 'Home',
  components: {
    Hero,
    Checkerboard,
    Newsletter,
  }
}
</script>

<style>

</style>
