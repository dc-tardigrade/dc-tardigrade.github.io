<template>
  <div class="banner py-5 align-items-stretch">
    <h2 class="h2 banner__title">Mon entreprise est-elle éligible?</h2>
    <div class="banner__content align-items-stretch">
      <div class="banner__subtitle">
        Remplissez ce formulaire pour tester vote éligibilité au Chèque Numérique
      </div>
      <a class="btn banner__btn" href="#">Tester mon éligibilité</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner'
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

  &__btn {
    margin-top: 15px;
    background: #fff;
    color: var(--primary);
    font-weight: bold;
    filter: drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.4));
    border: 2px solid #fff;

    &:hover {
      background: var(--primary);
      border: 2px solid #fff;
      color: #fff;
    }
  }
}
</style>