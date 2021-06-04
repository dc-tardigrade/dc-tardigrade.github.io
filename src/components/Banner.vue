<template>
  <div class="banner py-5 align-items-stretch">
    <h2 class="h2 banner__title">Ça m'intéresse</h2>
    <div class="banner__content align-items-stretch">
      <div class="banner__subtitle">
        Rejoindre une communauté de survivalistes
      </div>
      <Button class="mt-3" type="white" href="/">S'inscrire</Button>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Button'
  export default {
    name: 'Banner',
    components: {
      Button
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