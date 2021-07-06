<template>
  <div class="questionnaire">
    <div class="questionnaire__question">{{ questions[currQuestion].text }}</div>
    <div class="questionnaire__answers">
      <div class="questionnaire__answer"
           v-for="answer in questions[currQuestion].answers"
           :key="answer.id"
           @click="nextQuestion(answer.id)">
        {{ answer.text }}
      </div>
    </div>
    <div>
      <b-progress type="is-primary" :value="(userAnswers.length / questions.length)*100" size="is-large" class="questionnaire__progress"></b-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questionnaire",
  methods: {
    nextQuestion(answer_id) {
      this.userAnswers.push(answer_id)
      this.currQuestion = this.currQuestion < this.questions.length - 1 ? this.currQuestion + 1 : 0
    }
  },
  data() {
    return {
      showClickedAnswer: true,
      userAnswers: [],
      currQuestion: 0,
      questions: [
        {
          id: 0,
          text: 'Es-tu un pro de l\'organisation ?',
          answers: [
            {
              id: 0,
              text: 'Absolument, Excel n’a plus de secret pour moi.',
            },
            {
              id: 1,
              text: 'L’organisation + moi = 2'
            },
            {
              id: 2,
              text: 'Bof mais je sais où se trouve mes caleçons.'
            },
            {
              id: 3,
              text: 'Lorem ipsum dolor sit amet'
            },
          ]
        },
        {
          id: 1,
          text: 'Question 2',
          answers: [
            {
              id: 0,
              text: 'Absolument, Excel n’a plus de secret pour moi.',
            },
            {
              id: 1,
              text: 'L’organisation + moi = 2'
            },
            {
              id: 2,
              text: 'Bof mais je sais où se trouve mes caleçons.'
            },
            {
              id: 3,
              text: 'Lorem ipsum dolor sit amet'
            },
          ]
        },
        {
          id: 2,
          text: 'Question 3',
          answers: [
            {
              id: 0,
              text: 'Absolument, Excel n’a plus de secret pour moi.',
            },
            {
              id: 1,
              text: 'L’organisation + moi = 2'
            },
            {
              id: 2,
              text: 'Bof mais je sais où se trouve mes caleçons.'
            },
            {
              id: 3,
              text: 'Lorem ipsum dolor sit amet'
            },
          ]
        },
        {
          id: 3,
          text: 'Question 4',
          answers: [
            {
              id: 0,
              text: 'Absolument, Excel n’a plus de secret pour moi.',
            },
            {
              id: 1,
              text: 'L’organisation + moi = 2'
            },
            {
              id: 3,
              text: 'Bof mais je sais où se trouve mes caleçons.'
            },
            {
              id: 4,
              text: 'Lorem ipsum dolor sit amet'
            },
          ]
        },
        {
          id: 4,
          text: 'Question 5',
          answers: [
            {
              id: 0,
              text: 'Absolument, Excel n’a plus de secret pour moi.',
            },
            {
              id: 1,
              text: 'L’organisation + moi = 2'
            },
            {
              id: 2,
              text: 'Bof mais je sais où se trouve mes caleçons.'
            },
            {
              id: 3,
              text: 'Lorem ipsum dolor sit amet'
            },
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>