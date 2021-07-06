<template>
  <div class="page page-article">
    <h1>Article</h1>
    {{ article }}
    {{articles}}
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Article",
  props: {
    slug: String
  },
  data() {
    return {
      article: null
    }
  },
  computed: {
    ...mapState(['articles'])
  },
  mounted() {
    this.article = this.articles.every(article => {
      console.log(article)
      if(article.link.includes(this.slug)) {
        return article
      }
    })
  }
}
</script>

<style scoped>

</style>