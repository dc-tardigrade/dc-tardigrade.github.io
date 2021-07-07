<template>
  <div class="page page-questionnaire">
    <header class="page-questionnaire__header">
      <h2 class="section-title">Découvre ton niveau</h2>
      <p class="section-subtitle">Grâce à ce questionnaire, tu pourras connaître le niveau qui te convient le plus.
        Confie-toi à nous et nous te proposerons la durée de stage idéale pour que tu deviennes un maître de la
        survie ! C’est parti !</p>
    </header>
    <div class="container">
      <main>
        <Questionnaire></Questionnaire>
      </main>
    </div>
  </div>
</template>

<script>
import Questionnaire from '@/components/Questionnaire'

export default {
  name: "QuestionnaireView",
  components: {
    Questionnaire
  }
}
</script>

<style scoped>

</style>