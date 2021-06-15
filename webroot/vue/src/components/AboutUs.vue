<template>
  <section class="about-us py-6">
    <div class="container">
      <p class="about-us__text has-text-centered">
        <strong>Nomad</strong> vous propose de participer à des stages de survie uniques ! Des <strong>offres
        personnalisées</strong> en fonction du
        milieu naturel, de la durée et du niveau d’expertise vous sont proposées par <strong>Nomad</strong>.
        Le plus ? Vous êtes accompagnés par des survivalistes !
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
        <a href="#" class="about-us__button button is-primary is-rounded">Découvrez Nomad</a>
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
    margin: 0 auto;
    max-width: 80%;
  }

  &__video {
    max-width: 650px;
    max-height: 365.625px;
    width: 100%;
    position: relative;
    //padding-top: 56.25%;
    margin: 2rem auto 2rem;
    border-radius: 8px;

    //@include from($tablet) {
    //  padding-top: 30%;
    //}
  }
}
</style>
