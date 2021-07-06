<template>
  <div class="courses">
    <div class="courses__list">
      <div class="columns">
        <div v-for="course in courses" :key="course.id" class="column is-half-tablet is-one-quarter-desktop">
          <CourseThumbnail :background="course.background">
            <template v-slot:title>{{ course.title }}</template>
            <template v-slot:location>{{ course.location }}</template>
            <template v-slot:description>{{ course.description }}</template>
          </CourseThumbnail>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseThumbnail from '@/components/Courses/CourseThumbnail'

export default {
  name: "Courses",
  data() {
    return {
      courses: [
        {
          id: 0,
          background: 'lp-stage-1.jpg',
          title: 'Survivre à l’apocalypse en forêt',
          location: 'Fontainebleau, France',
          description: 'Choisissez votre durée et partez pour des stages de survie en forêt dans l’ambiance Walking Dead',
        },
        {
          id: 1,
          background: 'lp-stage-2.jpg',
          title: 'Survie hard en milieu hostile et montagnard',
          location: 'Jura, France',
          description: 'Un weekend ou une semaine, tentez la survie dans un milieu froid et hostile. Pas pour les noobs !',
        },
        {
          id: 2,
          background: 'lp-stage-3.jpg',
          title: 'On se la joue Koh Lanta au bord d’une rivière',
          location: 'Cheran, France',
          description: 'Tel des aventuriers d’ile déserte, apprenez la survie au bord de l’eau. Pêche et abris improvisés !',
        },
        {
          id: 3,
          background: 'lp-stage-4.jpg',
          title: 'Plongeon et survie dans un lac',
          location: 'Cheran, France',
          description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        },
      ]
    }
  },
  components: {
    CourseThumbnail
  }
}
</script>
