<template>
  <article :class="'banner' + sizeClass" :style="{ backgroundImage: `url('/img/${background}')` }">
    <div class="banner__overlay"></div>
    <div class="banner__header">
      <div class="banner__content">
        <h3 class="banner__title">
          <slot name="title"></slot>
        </h3>
        <p class="banner__subtitle">
          <slot name="subtitle"></slot>
        </p>
      </div>
    </div>
    <slot name="button"></slot>
  </article>
</template>

<script>
export default {
  name: "Banner",
  props: {
    background: String,
    size: String,
  },
  data() {
    return {
      sizeClass: this.size === 'large' ? ' banner--lg' : ''
    }
  }
}
</script>

<style scoped>

</style>