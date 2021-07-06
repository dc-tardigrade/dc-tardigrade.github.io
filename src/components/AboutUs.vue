<template>
  <section class="about-us">
    <div class="container">
      <header class="about-us__header">
        <h2 class="section-title">Une expérience <span>unique</span></h2>
        <p class="section-subtitle"><span>Nomad</span> vous propose de participer à des stages de survie uniques !</p>
      </header>
      <div class="about-us__video">
        <youtube :video-id="videoId"
                 style="width: 100%; max-width: 650px; max-height: 365.625px; border-radius:8px;"
                 ref="youtube" :resize=true :fitParent=true>
        </youtube>
      </div>
    </div>
    <div class="about-us__key-figures">
      <div class="container">
        <div class="about-us__key-figure">
          <div class="about-us__key-number" style="margin-left: -1rem;">
            +25
          </div>
          <div class="about-us__key-text">
            stages personnalisés, pour tous les niveaux et tous les budgets
          </div>
        </div>
        <div class="about-us__key-figure">
          <div class="about-us__key-number">
            30
          </div>
          <div class="about-us__key-text">
            survivalistes aguerris pour vous accompagner et vous apprendre les techniques
          </div>
        </div>
        <div class="about-us__key-figure">
          <div class="about-us__key-number">
            10
          </div>
          <div class="about-us__key-text">
            Nos survivalistes ont plus de 10 ans d'expérience dans la survie
          </div>
        </div>
        <div class="about-us__key-figure">
          <div class="about-us__key-number">
            1
          </div>
          <div class="about-us__key-text">
            expérience inoubliable pour devenir la meilleur version de vous-même
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      videoId: 'tyQ8aIqDe9I'
    }
  }
}
</script>
