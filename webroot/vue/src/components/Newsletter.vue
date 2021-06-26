<template>
  <div class="container is-fluid mt-5">
    <section class="newsletter">
      <h2 class="section-title">Inscrivez-vous à notre Newsletter !</h2>
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
    </section>
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

<style lang="scss" scoped>
.newsletter {
  background-color: #8ABDAD;
  border-radius: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  padding: 4rem 2rem;

  .section-title {
    color: $white;
    text-align: left;
    max-width: 30%;
    font-weight: bold;

    @include until($desktop) {
      max-width: 100%;
      text-align: center;
    }
  }

  .btn {
    border: 0;
    padding: 10px 20px;
  }

  .email-input {
    margin: 0 auto;
    font-size: 1.6rem;
    border-radius: 14px;
    border: 0;
    box-shadow: none;

    &::placeholder {
      color: #555;
    }

    &:focus {
      box-shadow: none;
      border: none;
    }

    @include from($tablet) {
      min-width: 30rem;
      width: 50%;
    }
  }

  .control {
    padding: .8rem;
    background: $white;
    border-radius: 14px;
    display: flex;
    align-items: center;
  }

  .is-invalid {
    outline: $danger solid 2px;
  }

  .is-valid {
    outline: $success solid 2px;
  }

  @include until($desktop) {
    flex-direction: column;
  }


}


</style>
