<template>
  <div class="page blog">
    <div class="container">
      <header class="blog__header">
        <h1 class="h2 blog__title">Nos articles</h1>
        <p class="blog__description">Duis consectetur sollicitudin tincidunt. Aliquam erat volutpat. Integer volutpat,
          ligula ac tristique cursus,
          ipsum massa varius ligula, et gravida libero mi sit amet magna, aliquam erat volutpat.</p>
      </header>
      <div v-if="articles.length === 0" class="blog__skeleton">
        <b-skeleton width="80%" :animated="true"></b-skeleton>
        <b-skeleton width="60%" :animated="true"></b-skeleton>
        <b-skeleton width="40%" :animated="true"></b-skeleton>
        <b-skeleton width="50%" :animated="true"></b-skeleton>
        <b-skeleton width="70%" :animated="true"></b-skeleton>
        <b-skeleton width="90%" :animated="true"></b-skeleton>
      </div>
      <div class="columns">
        <div class="blog__articles" v-for="article in articles" v-bind:key="article.guid">
          <div class="column is-half-tablet">
            <ArticlePreview :url="article.guid">
              <template v-slot:title>{{ article.title }}</template>
              <template v-slot:excerpt><p v-html="article.description.substr(0, 100)"></p></template>
            </ArticlePreview>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview'
import {mapActions, mapState} from 'vuex'

export default {
  name: "Blog",
  components: {
    ArticlePreview
  },
  data() {
    return {
      articlesList: [],
    }
  },
  computed: {
    ...mapState(['articles'])
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    ...mapActions(['updateArticles']),
    async getArticles() {
      await window.axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nomad-survie', {}).then(response => {
        this.articlesList = response.data.items
        this.updateArticles(this.articlesList)
        this.skeletonOn = false
      })
    }
  },
}
</script>

<style scoped>

</style>