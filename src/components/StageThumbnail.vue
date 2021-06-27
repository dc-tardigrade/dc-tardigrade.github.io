<template>
  <div class="stage-thumbnail">
    <div class="stage-thumbnail__image">
      <img :src="require(`@/assets/img/${background}`)" alt="Stage">
    </div>
    <div class="stage-thumbnail__content">
      <h3 class="stage-thumbnail__title">
        <slot name="title">Fontainebleau</slot></h3>
      <p class="stage-thumbnail__location">
        <slot name="location">France</slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StageThumbnail",
  props: {
    background: String
  }
}
</script>

<style lang="scss" scoped>
.stage-thumbnail {

  &__image {
    img {
      border-radius: 8px 8px 0 0;
      display: block;
      width: 100%;
      height: 100%;
      min-height: 200px;
      object-fit: cover;
    }
  }

  &__content {
    background: #fff;
    color: #000;
    padding: 20px;
    border-radius: 0 0 8px 8px;
  }

  &__title {
    font-size: 16px;
    font-weight: bold;
  }

  &__location {
    font-size: 14px;
  }
}
</style>
