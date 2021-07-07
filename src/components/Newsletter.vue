<template>
  <div class="container is-fluid">
    <article class="newsletter">
      <h2 class="newsletter__title">Inscrivez-vous à notre Newsletter !</h2>
      <div id="mc_embed_signup">
        <form action="https://gmail.us6.list-manage.com/subscribe/post?u=cd84f9cb568c203486a6a0aee&amp;id=dd5fa74acd"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
              class="validate newsletter__form"
              target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <div class="field">
              <div :class="inputContainerClass">
                <input @blur="unfocusInput" @keyup="checkEmail" v-model="email" type="email" value="" name="EMAIL"
                       class="email email-input input" id="mce-EMAIL"
                       placeholder="Adresse e-mail" required>
                <input type="submit" value="Je m'inscris" name="subscribe" id="mc-embedded-subscribe"
                       class="btn btn-primary">
              </div>
            </div>
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_cd84f9cb568c203486a6a0aee_dd5fa74acd" tabindex="-1" value="">
            </div>
            <div class="clear"></div>
          </div>
        </form>
      </div>
      <!--End mc_embed_signup-->
    </article>
  </div>
</template>

<script>

export default {
  name: 'Newsletter',
  components: {},

  data() {
    return {
      errors: [],
      email: null,
      inputContainerClass: 'control'
    }
  },

  methods: {
    checkEmail: function () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(re.test(String(this.email).toLowerCase())) {
        this.inputContainerClass = 'control is-valid'
      } else {
        this.inputContainerClass = 'control is-invalid'
      }
    },
    unfocusInput: function() {
      this.inputContainerClass = 'control'
    }

  }
}
</script>
