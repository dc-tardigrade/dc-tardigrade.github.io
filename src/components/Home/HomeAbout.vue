<template>
  <div class="home-about">
    <div class="container">
      <div class="columns is-align-content-stretch">
        <div class="column is-half home-about__left">
          <h2 class="home-about__title">Salut à toi, jeune survivaliste !<br/>Prêt à découvrir Nomad ?</h2>
          <p class="home-about__text">
            <strong>Nomad</strong> te propose de participer à des stages de survie uniques ! Des <strong>offres
            personnalisées</strong> en fonction du milieu naturel, de la durée et du niveau d’expertise te sont
            proposées. Le plus ? Tu es accompagné(e) par des<strong>survivalistes</strong> aux petits oignons
            sélectionnés <strong>par nos soins !</strong> Véritables professionnels de la survie, ils te transmettront
            leur savoir dans un milieu hostile et naturel pour que tu puisses survivre sans problème à la prochaine
            attaque de zombies.
          </p>
          <router-link class="home-about__link" :to="{name: 'about'}">Qui sommes-nous &#129042;</router-link>
        </div>
        <div class="column is-half home-about__right">
          <figure class="home-about__image">
            <img :src="require('@/assets/img/home-about.jpg')" alt="">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAbout"
}
</script>