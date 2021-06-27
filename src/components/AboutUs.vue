<template>
  <section class="about-us">
    <div class="container">
      <h2 class="section-title">Une <span>expérience</span> unique</h2>
      <p class="about-us__text">
        <strong>Nomad</strong> vous propose de participer à des stages de survie uniques ! Des <strong>offres
        personnalisées</strong> en fonction du milieu naturel, de la durée et du niveau d’expertise vous sont proposées
        par <strong>Nomad</strong>. Le plus ? Vous êtes accompagnés par des survivalistes !
        Véritables professionnels de la survie, ils vous transmettront leur savoir au beau milieu d’un milieu hostile
        et naturel.
      </p>
      <div class="about-us__video">
        <youtube :video-id="videoId"
                 style="/*position: absolute; top: 0; left: 0;*/ width: 100%; max-width:650px;height: 365.625px; border-radius:8px;"
                 ref="youtube" :resize=true :fitParent=true>
        </youtube>
      </div>
      <div class="has-text-centered">
        <a href="#" class="btn btn-primary btn--lg">Découvrez Nomad</a>
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

<style lang="scss" scoped>
.about-us {
  &__text {
    margin: 0 auto 30px;
    max-width: 80%;
    text-align: center;
  }

  &__video {
    max-width: 650px;
    max-height: 365.625px;
    width: 100%;
    position: relative;
    margin: 2rem auto 3rem;
    border-radius: 8px;
  }
}
</style>
