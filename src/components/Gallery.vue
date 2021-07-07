<template>
  <div class="gallery tile is-ancestor">
    <div class="tile">
      <div class="tile is-3">
        <div class="tile is-parent is-vertical">
          <div class="tile is-child">
            <img :src="require(`@/assets/img/gallery/gallery-1.jpg`)">
          </div>
          <div class="tile is-child">
            <img :src="require(`@/assets/img/gallery/gallery-2.jpg`)">
          </div>
        </div>
      </div>
      <div class="tile is-3 is-parent">
        <div class="tile is-child">
          <img :src="require(`@/assets/img/gallery/gallery-3.jpg`)">
        </div>
      </div>
      <div class="tile is-3 is-parent is-vertical">
        <div class="tile is-child gallery__quarter-item">
          <img :src="require(`@/assets/img/gallery/gallery-4.jpg`)">
        </div>
        <div class="tile is-child">
          <img :src="require(`@/assets/img/gallery/gallery-5.jpg`)">
        </div>
      </div>
      <div class="tile is-3 is-parent">
        <div class="tile is-child">
          <img :src="require(`@/assets/img/gallery/gallery-6.jpg`)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery"
}
</script>