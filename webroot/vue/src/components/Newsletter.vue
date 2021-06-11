<template>
  <section class="section has-text-centered has-background-primary">
    <header>
      <h2 class="title is-2 has-text-white">Restez informé</h2>
      <p class="subtitle has-text-white mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
    </header>

    <form action="https://gmail.us6.list-manage.com/subscribe/post?u=cd84f9cb568c203486a6a0aee&amp;id=dd5fa74acd"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
          target="_blank"
          novalidate>
      <div id="mc_embed_signup_scroll">
        <b-field class="email-input">
          <b-input type="email" name="EMAIL" placeholder="Adresse e-mail"></b-input>
        </b-field>
        <!--      <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Adresse e-mail" required>-->

        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_cd84f9cb568c203486a6a0aee_dd5fa74acd" tabindex="-1" value=""></div>
        <div class="clear">
          <input type="submit" value="Je m'inscris" name="subscribe" id="mc-embedded-subscribe"
                 class="button is-light">
        </div>
      </div>
    </form>
  </section>

</template>

<script>

export default {
  name: 'Newsletter',
  components: {}
}
</script>

<style lang="scss">
  .email-input {
    width: 50%;
    margin: 0 auto;
  }
</style>
