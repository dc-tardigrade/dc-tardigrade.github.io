<template>
  <div class="course-thumbnail">
    <div class="course-thumbnail__image">
      <img :src="require(`@/assets/img/${background}`)" alt="Stage">
    </div>
    <div class="course-thumbnail__overlay"></div>
    <div class="course-thumbnail__content">
      <div class="course-thumbnail__content-inner">
        <h3 class="course-thumbnail__title">
          <slot name="title"></slot>
        </h3>
        <div class="course-thumbnail__location">
          <slot name="location"></slot>
        </div>
      </div>
      <p class="course-thumbnail__description">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseThumbnail",
  props: {
    background: String
  }
}
</script>

<style lang="scss" scoped>

</style>
