<template>
  <div class="location-thumbnail">
    <div class="location-thumbnail__image">
      <img :src="require(`@/assets/img/${background}`)" alt="Stage">
    </div>
    <b-taglist class="location-thumbnail__meta">
      <b-tag type="is-white" size="is-large" class="data-tag data-tag--white">
        <slot name="rating"></slot>
        <b-icon class="location-thumbnail__rating-icon" icon="star"></b-icon>
      </b-tag>
      <b-tag type="is-primary" size="is-large" class="tag location-thumbnail__price">
        <slot name="price"></slot>
        €
      </b-tag>
    </b-taglist>
    <div class="location-thumbnail__content">
      <h3 class="location-thumbnail__location">
        <slot name="name"></slot>
      </h3>
      <p class="location-thumbnail__description">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationThumbnail",
  props: {
    background: String,
  }
}
</script>

<style scoped>

</style>