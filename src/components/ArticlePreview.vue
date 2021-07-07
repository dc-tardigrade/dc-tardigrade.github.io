<template>
  <article class="article-preview">
    <div class="article-preview__thumbnail">
      <img :src="require(`@/assets/img/HeroBG.jpg`)" alt="Illustration de l'article">
    </div>
    <div class="article-preview__content">
      <h2 class="article-preview__title h3">
        <slot name="title"></slot>
      </h2>
      <div class="article-preview__excerpt">
        <slot name="excerpt"></slot>
      </div>
      <a :href="url" class="article-preview__link">Lire la suite</a>
    </div>
  </article>
</template>

<script>
export default {
  name: "ArticlePreview",
  props: {
    url: String
  },
}
</script>

<style scoped>

</style>