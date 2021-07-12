<template>
  <div class="page-courses">
    <div class="courses-selector">
      <div v-for="item in selectorItems" :key="item.id" class="courses-selector__item" :ref="'item-' + item.id"
           @click="setCategory(item.id, item.category_id)">
        <img class="courses-selector__item-bg" :src="item.bg">
        <h2 class="courses-selector__item-title">{{ item.title }}</h2>
      </div>
    </div>
    <CourseLocations
        v-if="userHasLevel === true"
        :levelId="user.profile.level_id"
        :categoryId="selectedCategory"
        title="Nos offres selon ton niveau">
    </CourseLocations>
    <CourseLocations
        :hasTabs="false"
        :categoryId="selectedCategory"
        :gridLayout="true"
        title="Toutes les offres">
    </CourseLocations>
  </div>
</template>

<script>
import CourseLocations from '@/components/Courses/CourseLocations'
import {mapState} from 'vuex'

export default {
  name: "CoursesView",
  components: {
    CourseLocations
  },
  data() {
    return {
      selectedCategory: 0,
      selectorItems: [
        {
          id: 1,
          category_id: 1,
          bg: require(`@/assets/img/course-selector-1.jpg`),
          title: 'Forêt',
          isActive: false,
        },
        {
          id: 2,
          category_id: 2,
          bg: require(`@/assets/img/course-selector-2.jpg`),
          title: 'Montagne',
          isActive: false,
        },
        {
          id: 3,
          category_id: 3,
          bg: require(`@/assets/img/course-selector-3.jpg`),
          title: 'Lac',
          isActive: false,
        }
      ]
    }
  },
  computed: {
    ...mapState(['user']),
    userHasLevel() {
      return !!(this.user.profile && this.user.profile.level_id !== 'undefined')
    }
  },
  methods: {
    setCategory(item_id, category_id) {
      this.selectedCategory = this.selectedCategory === category_id ? null : category_id
      this.selectorItems.find(item => item.id === item_id).isActive = true

      let domItem = this.$refs['item-' + item_id][0]
      if (typeof domItem !== 'undefined') {
        domItem.classList.toggle('selected')
      }

      for (let i = 1; i < this.selectorItems.length + 1; i++) {
        if(i !== this.selectedCategory) {
          this.$refs['item-' + i][0].classList.remove('selected')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>