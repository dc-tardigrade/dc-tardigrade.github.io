<template>
  <div class="container">
    <div class="checkerboard">
      <div class="row align-items-center my-5">
        <div class="d-none d-sm-block col-sm-6">
          <img class="img-fluid" src="img/about.png" alt="">
        </div>
        <div class="col-xs-12 col-sm-6">
          <!--          <img class="checkerboard__icon" src="icons/checkerboard-icon-1.svg"/>-->
          <h2 class="h2 checkerboard__title">Pourquoi et pour qui ?</h2>
          <p class="checkerboard__text">La plateforme dediée à l’entraide survivaliste vous aide à trouver une
            communauté de survivalisme solidaire et vous permets de partager vos astuces et conseils po
          </p>
        </div>
      </div>
      <div class="row align-items-center my-5">
        <div class="col-sm-6">
          <!--          <img class="checkerboard__icon" src="/icons/checkerboard-icon-2.svg"/>-->
          <h2 class="h2 checkerboard__title">Qui sont les survivalistes ?</h2>
          <p class="checkerboard__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet aut
            corporis doloremque enim, laudantium nobis nulla provident quasi qui quo, sint sit, voluptas voluptates
            voluptatum. Accusantium id in recusandae.a
          </p>
<!--          <ul class="checkerboard__list">-->
<!--            <li>Réservation du nom de domaine, frais d'hébergement</li>-->
<!--            <li>-->
<!--              Outils de vente en ligne (plateforme, marketplace, click and collect, etc.), frais de-->
<!--              formation-->
<!--            </li>-->
<!--          </ul>-->
        </div>
        <div class="d-none d-sm-block col-sm-6">
          <img class="img-fluid" src="/img/whositfor.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkerboard'
}
</script>

<style lang="scss">

.checkerboard {
  &__icon {
    width: 60px;
    height: 60px;
    box-shadow: 0 0 12px rgba(255, 85, 85, 0.4);
    border-radius: 8px;
  }

  &__title {
    font-size: 36px;
    font-weight: bold;
    color: var(--primary);
    margin: 20px 0;
  }

  &__list {
    list-style-type: decimal;
    padding-left: 18px;
  }

  &__text {
    font-size: 18px;
    line-height: 32.79px;
  }
}

</style>