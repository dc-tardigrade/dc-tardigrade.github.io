<template>
  <div class="questionnaire">
    <div v-if="!isQuestionnaireDone" class="questionnaire__content">
      <div class="questionnaire__question">{{ questionnaire.questions[currQuestion].text }}</div>
      <div class="questionnaire__answers">
        <div class="questionnaire__answer"
             v-for="answer in questionnaire.questions[currQuestion].answers"
             :key="answer.id"
             @click="nextQuestion(answer)">
          {{ answer.text }}
        </div>
      </div>
      <div>
        <b-progress type="is-primary"
                    :value="(userAnswers.length / questionnaire.questions.length)*100"
                    size="is-large"
                    class="questionnaire__progress">
        </b-progress>
      </div>
    </div>
    <div v-else class="questionnaire__result">
      <div class="questionnaire__result-icon">
        <img :src="require(`@/assets/icons/${userLevel.icon}.svg`)" />
      </div>
      <h2 class="questionnaire__result-title">{{ userLevel.name }}</h2>
      <div class="questionnaire__result-subtitle">34% des participants ont le meme niveau que toi !</div>
      <p class="questionnaire__result-text">{{ userLevel.text }}</p>
      <div>
        <router-link :to="{name: 'courses'}" class="btn btn-primary btn--lg">Découvrir les offres</router-link>

      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import {mapState} from 'vuex'

export default {
  name: "Questionnaire",
  computed: {
    ...mapState(['user', 'questionnaire', 'levels'])
  },
  methods: {
    nextQuestion(answer) {
      this.userAnswers.push(answer)
      if (this.currQuestion < this.questionnaire.questions.length - 1) {
        this.currQuestion++
      } else {
        this.showResult()
      }
    },
    showResult() {
      this.isQuestionnaireDone = true
      let userAnswerLevelCounts = []
      this.levels.forEach(level => {
        userAnswerLevelCounts.push({
          id: level.id,
          count: this.userAnswers.filter((answer) => answer.level === level.id).length
        })
      })
      let maxAnswerLevelCount = Math.max.apply(Math, userAnswerLevelCounts.map(function (level) {
        return level.count;
      }))
      let answerLevel = userAnswerLevelCounts.find(function (level) {
        return level.count === maxAnswerLevelCount;
      })
      this.userLevel = this.levels.find(level => level.id === answerLevel.id)
      this.saveUserLevel()
    },
    saveUserLevel() {
      if(this.user.loggedIn) {
        firebase.firestore().collection('users')
            .doc(this.user.data.uid)
            .onSnapshot((doc) => {
              if (doc.exists) {
                firebase.firestore().collection('users').doc(this.user.data.uid).update({
                  level_id: this.userLevel.id
                }).catch(error => {
                  this.error = error
                })
              } else {
                console.log('User not found in db')
              }
            })
      }
    }
  },
  data() {
    return {
      showClickedAnswer: true,
      isQuestionnaireDone: false,
      userAnswers: [],
      userLevel: {},
      currQuestion: 0,
    }
  }
}
</script>

<style scoped>

</style>