<template>
  <div class="stages">
    <header class="stages__categories">
      <router-link to="#" class="stages__category active has-text-weight-bold">
        Forêt
      </router-link>
      <router-link to="#" class="stages__category">
        Montagne
      </router-link>
      <router-link to="#" class="stages__category">
        Lac
      </router-link>
    </header>
    <main class="stages__list">
      <div class="columns">
        <div class="column">
          <StageThumbnail background="HeroBG.jpg"></StageThumbnail>
        </div>
        <div class="column">
          <StageThumbnail background="HeroBG.jpg"></StageThumbnail>
        </div>
        <div class="column">
          <StageThumbnail background="HeroBG.jpg"></StageThumbnail>
        </div>
        <div class="column">
          <StageThumbnail background="HeroBG.jpg"></StageThumbnail>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import StageThumbnail from '@/components/StageThumbnail'

export default {
  name: "Stages",
  components: {
    StageThumbnail
  }
}
</script>

<style lang="scss" scoped>
.stages {
  &__categories {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    margin-bottom: 2rem;
  }
  &__category {
    color: $grey-light;
    font-size: 24px;

    &.active {
      color: $primary;
    }
  }
}
</style>
