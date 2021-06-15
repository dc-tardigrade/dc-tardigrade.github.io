<template>
  <div class="container mt-5">
    <section class="section has-text-centered newsletter">
      <header>
        <h2 class="title is-2 has-text-white mb-3">Inscrivez-vous à notre Newsletter !</h2>
      </header>
      <div id="mc_embed_signup">
        <form action="https://gmail.us6.list-manage.com/subscribe/post?u=cd84f9cb568c203486a6a0aee&amp;id=dd5fa74acd"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
              target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <div class="field">
              <div class="control">
                <input type="email" value="" name="EMAIL" class="email email-input input" id="mce-EMAIL"
                       placeholder="Adresse e-mail" required>
              </div>
            </div>
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_cd84f9cb568c203486a6a0aee_dd5fa74acd" tabindex="-1" value="">
            </div>
            <div class="clear">
              <input type="submit" value="Je m'inscris" name="subscribe" id="mc-embedded-subscribe"
                     class="button is-primary is-rounded">
            </div>
          </div>
        </form>
      </div>
      <!--End mc_embed_signup-->
    </section>
  </div>
</template>

<script>

export default {
  name: 'Newsletter',
  components: {}
}
</script>

<style lang="scss">
.newsletter {
  background-color: #8ABDAD;
  border-radius: 8px;
}
.email-input {
  margin: 0 auto;

  &::placeholder {
    color: #555;
  }

  @include from($tablet) {
    width: 50%;
  }
}
</style>
