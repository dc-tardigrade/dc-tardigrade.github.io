<template>
  <div class="page home">
    <HeroSection bg="home-hero-bg.jpg" :hasSearchBar=true></HeroSection>
    <div class="home-about">
      <div class="container">
        <div class="columns is-align-content-stretch">
          <div class="column is-half">
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
          <div class="column is-half">
            <figure class="home-about__image">
              <img :src="require('@/assets/img/home-about.jpg')" alt="">
            </figure>
          </div>
        </div>
      </div>
    </div>
    <QuestionnaireCta></QuestionnaireCta>
    <CourseLocations></CourseLocations>
    <div class="container my-5">
      <Banner class="banner" background="location_this_month.jpg"></Banner>
    </div>
    <Newsletter></Newsletter>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection";
import QuestionnaireCta from "@/components/QuestionnaireCta";
import Banner from "@/components/Banner";
import CourseLocations from "@/components/Courses/CourseLocations";
import Newsletter from "@/components/Newsletter";

export default {
  name: "Home",
  components: {
    HeroSection,
    QuestionnaireCta,
    Banner,
    CourseLocations,
    Newsletter
  },
}
</script>

<style scoped>

</style>