<template>
  <section class="our-courses">
    <div class="container">
      <header class="our-courses__header has-text-centered">
        <h2 class="section-title">Des stages de <span>survie personnalisés</span></h2>
        <div class="section-subtitle">
          <span>Participe à nos stages dans des conditions dignes des plus grands survivalistes</span>
        </div>
      </header>
      <Courses class="our-courses__courses"></Courses>
      <div class="our-courses__btn-container">
        <a href="#" class="our-courses__btn btn btn-primary btn--lg">Tous nos bons plans</a>
      </div>
    </div>
  </section>
</template>

<script>
import Courses from '@/components/Courses/Courses'

export default {
  name: "OurCourses",
  components: {
    Courses
  }
}
</script>
