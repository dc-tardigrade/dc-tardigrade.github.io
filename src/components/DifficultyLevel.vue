<template>
  <a href="#" class="difficulty-level">
    <div class="difficulty-level__thumbnail">
        <slot name="thumbnail"></slot>
    </div>
    <div class="difficulty-level__overlay"></div>
    <p class="difficulty-level__title">
      <slot name="title"></slot>
    </p>
  </a>
</template>

<script>
export default {
  name: "DifficultyLevel"
}
</script>

<style lang="scss" scoped>

</style>
