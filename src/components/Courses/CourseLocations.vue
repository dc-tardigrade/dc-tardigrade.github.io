<template>
  <div class="course-locations">
    <div class="container">
      <h2 class="course-locations__title">Catalogue des stages</h2>
      <b-tabs v-model="activeTab">
        <b-tab-item v-for="category in categories" :label="category.name" :key="category.id">
          <div class="columns">
            <div v-for="location in locations" :key="location.id"
                 class="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <LocationThumbnail :background="location.thumbnail">
                <template v-slot:rating>{{ location.rating }}</template>
                <template v-slot:price>{{ location.price }}</template>
                <template v-slot:name>{{ location.name }}</template>
                <template v-slot:description>{{ location.description }}</template>
              </LocationThumbnail>
            </div>
          </div>
        </b-tab-item>
      </b-tabs>
      <div class="home-section-btn-container">
        <router-link :to="{name: 'courses'}" class="btn btn-primary btn--lg">Toutes les offres</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LocationThumbnail from '@/components/Courses/LocationThumbnail'

export default {
  name: "CourseLocations",
  components: {
    LocationThumbnail
  },

  computed: {
    sorted_locations() {
      return this.locations.find(loc => {
        return loc.category_id === this.activeTab
      })
    }
  },
  data() {
    return {
      activeTab: 0,
      currCatId: 0,
      categories: [
        {
          id: 0,
          name: 'Forêt'
        },
        {
          id: 1,
          name: 'Montagne'
        },
        {
          id: 2,
          name: 'Lac'
        }
      ],
      locations: [
        {
          id: 0,
          name: 'Forêt de Fontainebleau',
          thumbnail: 'location-1.jpg',
          description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
          rating: '4.7',
          price: '129',
          category_id: '0',
        },
        {
          id: 1,
          name: 'Forêt de Fontainebleau',
          thumbnail: 'location-1.jpg',
          description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
          rating: '4.7',
          price: '129',
          category_id: '0',
        },
        {
          id: 2,
          name: 'Forêt de Fontainebleau',
          thumbnail: 'location-1.jpg',
          description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
          rating: '4.7',
          price: '129',
          category_id: '0',
        },
        {
          id: 3,
          name: 'Forêt de Fontainebleau',
          thumbnail: 'location-1.jpg',
          description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
          rating: '4.7',
          price: '129',
          category_id: '0',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>