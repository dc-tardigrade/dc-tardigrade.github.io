<template>
  <div class="page page-home">
    <Hero></Hero>
    <Checkerboard></Checkerboard>
    <Banner></Banner>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import Checkerboard from '@/components/Checkerboard';
import Banner from '@/components/Banner';
import ContactForm from '@/components/ContactForm';

export default {
  name: 'Home',
  components: {
    Hero,
    Checkerboard,
    Banner,
    ContactForm
  }
}
</script>

<style>

</style>