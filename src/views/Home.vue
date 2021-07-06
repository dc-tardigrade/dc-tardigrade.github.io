<template>
  <div class="page home">
    <HeroSection bg="home-hero-bg.jpg" :hasSearchBar=true></HeroSection>
    <div class="home-about">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <h2 class="home-about__title">Salut à toi, jeune survivaliste ! Prêt à découvrir Nomad ?</h2>
          </div>
          <div class="column is-two-thirds">
            <p class="home-about__text">
              <strong>Nomad</strong> te propose de participer à des stages de survie uniques ! Des <strong>offres
              personnalisées</strong> en fonction du milieu
              naturel, de la durée et du niveau d’expertise te sont proposées. Le plus ? Tu es accompagné(e) par des
              <strong>survivalistes</strong> aux petits oignons sélectionnés <strong>par nos soins !</strong> Véritables
              professionnels de la survie, ils te
              transmettront leur savoir dans un milieu hostile et naturel pour que tu puisses survivre sans problème à
              la
              prochaine attaque de zombies.
            </p>
          </div>
        </div>
      </div>
    </div>
    <section class="home-level-cta">
      <div class="container">
        <header class="home-level-cta__header">
          <h2 class="home-level-cta__title">Découvre ton niveau</h2>
          <p class="home-level-cta__intro">Grâce à ce questionnaire, tu pourras connaître le niveau qui te convient le
            plus. Comment survivre en étant blessé ? Comment faire face au froid ? Comment se nourrir en pleine nature ?
            Confie-toi à nous et nous te proposerons la durée de stage idéale pour que tu deviennes un maître de la
            survie !</p>
        </header>
        <div class="home-level-cta__content">
          <div class="home-level-cta__content-overlay"></div>
          <h3 class="home-level-cta__content-title">
            A toi de jouer !<br/>Sportif du dimanche ou pro de la survie ?
          </h3>
          <router-link class="btn btn-primary btn--lg" to="/questionnaire">Lancer le questionnaire</router-link>
        </div>
      </div>
    </section>
    <CourseLocations></CourseLocations>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection";
import CourseLocations from "@/components/Courses/CourseLocations";

export default {
  name: "Home",
  components: {
    HeroSection,
    CourseLocations
  },
}
</script>

<style scoped>

</style>