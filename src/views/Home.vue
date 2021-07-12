<template>
  <div class="page home">
    <HeroSection bg="home-hero-bg.jpg" :hasSearchBar=true></HeroSection>
    <HomeAbout></HomeAbout>
    <QuestionnaireCta></QuestionnaireCta>
    <CourseLocations :hasTabs="true" :hasSwiper="true" title="Catalogue des stages" :hasButton="true"></CourseLocations>
    <div class="container">
      <Banner class="banner" background="location_this_month.jpg">
        <template v-slot:title>La destination du mois</template>
        <template v-slot:subtitle>Les Pyrénées</template>
      </Banner>
    </div>
    <div class="container">
      <header class="home-section-header">
        <h2 class="home-section-header__title">Nos articles</h2>
        <p class="home-section-header__intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur
          sollicitudin tincidunt. Aliquam erat volutpat. Integer volutpat, ligula ac tris.</p>
      </header>
      <div v-if="articles.length === 0">
        <b-skeleton width="80%" :animated="true"></b-skeleton>
        <b-skeleton width="60%" :animated="true"></b-skeleton>
        <b-skeleton width="40%" :animated="true"></b-skeleton>
        <b-skeleton width="50%" :animated="true"></b-skeleton>
        <b-skeleton width="70%" :animated="true"></b-skeleton>
        <b-skeleton width="90%" :animated="true"></b-skeleton>
      </div>
      <div class="columns">
        <div v-for="article in articles" v-bind:key="article.guid"
             class="column is-full-mobile is-one-third-tablet is-one-third-desktop">
          <ArticlePreview :url="article.guid" :thumbnail="article.thumbnail">
            <template v-slot:title>{{ article.title }}</template>
            <template v-slot:excerpt><p v-html="article.description.substr(0, 100)"></p></template>
          </ArticlePreview>
        </div>
      </div>
      <div class="home-section-btn-container">
        <router-link :to="{name: 'blog'}" class="btn btn-primary btn--lg">Consulter nos articles</router-link>
      </div>
    </div>
    <div class="container">
      <header class="home-section-header">
        <h2 class="home-section-header__title">Galerie photos</h2>
        <p class="home-section-header__intro">Ici, tu pourras observer des photos prises par d’autres stagiaires durant
          leurs stages. Tu pourras toi aussi partager tes propres photos une fois que tu auras sauté le pas. Prépares
          tes plus beaux clichés !</p>
      </header>
      <Gallery></Gallery>
    </div>

  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection"
import HomeAbout from "@/components/Home/HomeAbout"
import QuestionnaireCta from "@/components/QuestionnaireCta"
import Banner from "@/components/Banner"
import CourseLocations from "@/components/Courses/CourseLocations"
import Gallery from "@/components/Gallery"
import ArticlePreview from "@/components/ArticlePreview"
import {mapState, mapActions} from 'vuex'

export default {
  name: "Home",
  components: {
    HeroSection,
    HomeAbout,
    QuestionnaireCta,
    Banner,
    CourseLocations,
    ArticlePreview,
    Gallery,
  },
  computed: {
    ...mapState(['articles'])
  },
  methods: {
    ...mapActions(['fetchArticles'])
  },
  mounted() {
    this.fetchArticles()
  }
}
</script>
