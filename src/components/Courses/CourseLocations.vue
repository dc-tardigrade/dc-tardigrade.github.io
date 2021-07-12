<template>
  <div class="course-locations">
    <div class="container">
      <h2 v-if="title" class="course-locations__title">{{ title }}</h2>
      <div v-if="sorted_locations.length > 0">
      <b-tabs v-if="hasTabs" v-model="activeTab">
        <b-tab-item v-for="category in categories" :label="category.name"
                    :key="category.id">
          <b-carousel-list
              drag
              arrow
              autoplay
              icon-pack="fa"
              :arrow-hover="false"
              v-model="carouselList"
              :data="sorted_locations"
              :items-to-show="itemsToShow"
          >
            <template #item="location">
              <LocationThumbnail :background="location.thumbnail">
                <template v-slot:rating>{{ location.rating }}</template>
                <template v-slot:price>{{ location.price }}</template>
                <template v-slot:name>{{ location.name }}</template>
                <template v-slot:place>{{location.place}}</template>
                <template v-slot:description>{{ location.description }}</template>
              </LocationThumbnail>
            </template>
          </b-carousel-list>
        </b-tab-item>
      </b-tabs>
      <div v-if="!hasTabs && !gridLayout" class="carousel-wrapper">
        <b-carousel-list
            v-model="carousel"
            drag
            arrow
            autoplay
            icon-pack="fa"
            :arrow-hover="false"
            :data="sorted_locations"
            :items-to-show="itemsToShow">
          <template #item="location">
            <LocationThumbnail :background="location.thumbnail">
              <template v-slot:rating>{{ location.rating }}</template>
              <template v-slot:price>{{ location.price }}</template>
              <template v-slot:name>{{ location.name }}</template>
              <template v-slot:place>{{location.place}}</template>
              <template v-slot:description>{{ location.description }}</template>
            </LocationThumbnail>
          </template>
        </b-carousel-list>
      </div>
      <div v-if="gridLayout">
        <div class="columns">
          <div class="column is-one-quarter" v-for="location in sorted_locations" :key="location.id">
            <LocationThumbnail :background="location.thumbnail">
              <template v-slot:rating>{{ location.rating }}</template>
              <template v-slot:price>{{ location.price }}</template>
              <template v-slot:name>{{ location.name }}</template>
              <template v-slot:place>{{location.place}}</template>
              <template v-slot:description>{{ location.description }}</template>
            </LocationThumbnail>
          </div>
        </div>
      </div>
      </div>
      <div v-else>
        Aucune offre ne correspond à ces critères de recherche
      </div>
      <div v-if="hasButton" class="home-section-btn-container">
        <router-link :to="{name: 'courses'}" class="btn btn-primary btn--lg">Toutes les offres</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import LocationThumbnail from '@/components/Courses/LocationThumbnail'

export default {
  name: "CourseLocations",
  components: {
    LocationThumbnail
  },
  props: {
    hasTabs: Boolean,
    title: String,
    hasButton: Boolean,
    hasSwiper: Boolean,
    levelId: Number,
    categoryId: Number,
    gridLayout: Boolean
  },
  computed: {
    ...mapState(['locations', 'levels', 'categories']),
    // currCatId() {
    //   return this.activeTab < this.categories.length ? this.activeTab + 1 : 1
    // },
    currCatId() {
      if(this.hasTabs) {
        return this.activeTab
      }
      if(this.categoryId) return this.categoryId

      return 1;
    },
    sorted_locations() {
      let locations = this.locations;

      // Check level id prop existence in levels list
      let level;
      if (typeof this.levelId !== 'undefined') {
        level = this.levels.find(lvl => {
          return lvl.id === this.levelId
        })
      }

      if (level) {
        locations = locations.filter(loc => loc.level_id === level.id)
      }

      // Check category prop id existence in categories list
      let category;
      if (typeof this.categoryId !== 'undefined') {
        category = this.categories.find(cat => {
          return cat.id === this.categoryId
        })
      }

      if (category && category.id !== 0) {
        locations = locations.filter(loc => loc.category_id === category.id)
      }

      if (this.hasTabs) {
        if(this.currCatId !== 0) {
          locations = locations.filter(loc => loc.category_id === this.currCatId)

        }
      }

      return locations;
    },
  },
  data() {
    return {
      activeTab: 0,
      carousel: 0,
      carouselList: 0,
      itemsToShow: 4,
    }
  },
  mounted() {
    const isMobile = window.matchMedia(`(max-width: 768px)`);
    const isTablet = window.matchMedia(`(min-width : 769px) and (max-width: 1024px)`);
    const isDesktop = window.matchMedia(`(min-width : 1024px) and (max-width: 1216px)`);
    const isWidescreen = window.matchMedia(`(min-width : 1216px) and (max-width: 1408px)`);
    const aboveFullHd = window.matchMedia(`(min-width : 1408px)`);

    this.itemsToShow = 4.5;

    if (isMobile.matches) {
      this.itemsToShow = 1.5;
    } else if (isTablet.matches) {
      this.itemsToShow = 2.5;
    } else if (isDesktop.matches) {
      this.itemsToShow = 3.5;
    } else if (isWidescreen.matches) {
      this.itemsToShow = 4.5;
    } else {
      this.itemsToShow = 4.5;
    }

    isMobile.onchange = () => {
      if (isMobile.matches) {
        this.itemsToShow = 1.5;
      }
    };
    isTablet.onchange = () => {
      if (isTablet.matches) {
        this.itemsToShow = 2.5;
      }
    };
    isDesktop.onchange = () => {
      if (isDesktop.matches) {
        this.itemsToShow = 3.5;
      }
    };
    isWidescreen.onchange = () => {
      if (isWidescreen.matches) {
        this.itemsToShow = 4.5;
      }
    };
    aboveFullHd.onchange = () => {
      if (aboveFullHd.matches) {
        this.itemsToShow = 4.5;
      }
    };
  }
}
</script>