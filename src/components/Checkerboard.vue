<template>
  <section class="section checkerboard py-6">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <img class="checkerboard__image" src="img/about.png" alt="">
        </div>
        <div class="column">
          <h2 class="title">Pourquoi et pour qui ?</h2>
          <p>La plateforme dediée à l’entraide survivaliste vous aide à trouver une
            communauté de survivalisme solidaire et vous permets de partager vos astuces et conseils po
          </p>
        </div>
      </div>
      <div class="columns is-vcentered mt-sm-5">
        <div class="column">
          <h2 class="title">Qui sont les survivalistes ?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet aut
            corporis doloremque enim, laudantium nobis nulla provident quasi qui quo, sint sit, voluptas voluptates
            voluptatum. Accusantium id in recusandae.a
          </p>
        </div>
        <div class="column">
          <img class="checkerboard__image" src="/img/whositfor.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Checkerboard'
}
</script>

<style lang="scss">
  .checkerboard {
    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @include until($tablet) {
      .columns:nth-child(2n) {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column-reverse;
      }
      .column {
        width: 100%;
      }
    }

  }
</style>
