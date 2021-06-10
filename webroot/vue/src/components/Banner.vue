<template>
<!--  <div class="banner py-5 align-items-stretch">-->
<!--    <h2 class="h2 banner__title">Je veux en savoir plus</h2>-->
<!--    <div class="banner__content align-items-stretch">-->
<!--      <div class="banner__subtitle">-->
<!--        Vous souhaitez être au courant des prochaines dates de stages disponibles ? Inscrivez-vous à notre newsletter !-->
<!--      </div>-->
      <iframe width="100%" height="600px" src="https://eea23d31.sibforms.com/serve/MUIEAFLwUfLJYnWCP3RzWYYaomH-swBU_nDwRre7rvhQTuxC4tIA-a6BHrgtryiBngZifIu2vIV4bUGEPkCKVs-iDDU74Et6Di77X54nFmQvkae9k_g8qUY8oo054w_USHzaGWbb4LiH6vFxHT46Y9TdikXPLeC5KATpQyhAkpxMPWFISLW782PhGsELygzZZ82sG-LBqHaG9M6m" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
<!--      <Button class="mt-3" type="white" href="/">S'inscrire</Button>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
  // import Button from '@/components/Button'
  export default {
    name: 'Banner',
    components: {
      // Button
    }
  }
</script>

<style lang="scss">
.banner {
  background: var(--primary);
  color: #fff;
  text-align: center;

  &__title {
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 10px;
  }
}
</style>
