<template>
  <div class="container">
    <div class="hero">
      <div class="row align-items-center">
        <div class="col-xs-12 col-sm-6">
          <h1 class="h1 hero__title">Découvrez le survivalisme comme jamais auparavant</h1>
          <div class="hero__subtitle">la plateforme dediée à l’entraide survivaliste</div>
          <Button type="primary" href="/"></Button>
        </div>
        <div class="d-none d-sm-block col-sm-6">
          <img class="img-responsive" src="/img/welcome.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Button';

  export default {
    name: 'Hero',
    components: {
      Button
    }
  }
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