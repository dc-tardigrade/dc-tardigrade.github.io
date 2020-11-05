<template>
  <div class="container">
    <div class="hero">
      <div class="row align-items-center">
        <div class="col-xs-12 col-sm-6">
          <h1 class="h1 hero__title">Bénéficiez d'une
            <span>aide de 1500€</span>
          </h1>
          <div class="hero__subtitle">Grâce au Chèque Numérique pour financer votre futur site web</div>
          <a class="btn btn-primary hero__btn" href="#">Tester mon éligibilité</a>
        </div>
        <div class="d-none d-sm-block col-sm-6">
          <img class="img-responsive" src="/img/hero-illustration.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.hero {
  padding: 10vh 0;
  background: center / 100% no-repeat url('/public/img/header-bg.png');

  &__title {
    font-size: 48px;

    span {
      display: block;
      font-weight: bold;
      color: var(--primary);
      text-transform: uppercase;

    }
  }

  &__subtitle {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 32.79px;
  }

  &__btn {
    color: #fff !important;
    box-shadow: 0 0 12px rgba(255, 85, 85, 0.4);
    font-weight: bold;
    font-size: 14px;
    background: var(--primary);

    &:hover {
      background: #fff;
      color: var(--primary) !important;
      border-color: transparent !important;
      filter: none;
    }
  }
}
</style>