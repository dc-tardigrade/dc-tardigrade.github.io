<template>
  <div class="container">
    <div class="checkerboard">
      <div class="row align-items-center my-5">
        <div class="d-none d-sm-block col-sm-6">
          <img class="img-responsive" src="img/checkerboard-illustration-1.svg" alt="">
        </div>
        <div class="col-xs-12 offset-sm-1 col-sm-5">
          <img class="checkerboard__icon" src="icons/checkerboard-icon-1.svg"/>
          <h2 class="h2 checkerboard__title">Qui peut en bénéficier ?</h2>
          <p class="checkerboard__text">Les commerçants ou les artisans, avec ou sans point de vente,
            sédentaires ou itinérants (hors franchisés), inscrits au Registre du Commerce ou au Registre des
            Métiers:
          </p>
          <ul class="checkerboard__list">
            <li>Ayant leur établissement en Île-De-France</li>
            <li>Avec un effectif inférieur à 10 salariés, y compris les entreprises sans salariés</li>
          </ul>
        </div>
      </div>
      <div class="row align-items-center my-5">
        <div class="col-sm-5">
          <img class="checkerboard__icon" src="/icons/checkerboard-icon-2.svg"/>
          <h2 class="h2 checkerboard__title">Pour financer quoi ?</h2>
          <p class="checkerboard__text">Tout investissement engagé pour l'étude, la réalisation, l'acquisition
            ou le développement d'un site internet
          </p>
          <ul class="checkerboard__list">
            <li>Réservation du nom de domaine, frais d'hébergement</li>
            <li>
              Outils de vente en ligne (plateforme, marketplace, click and collect, etc.), frais de
              formation
            </li>
          </ul>
        </div>
        <div class="d-none d-sm-block col-sm-6">
          <img class="img-responsive" src="/img/checkerboard-illustration-2.svg" alt="">
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