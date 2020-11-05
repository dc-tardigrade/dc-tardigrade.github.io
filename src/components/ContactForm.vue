<template>
  <div class="container contactForm">
    <div class="contactForm__header text-center mt-5 mb-4">
      <h2 class="contactForm__title font-weight-bold">Besoin d'informations supplémentaires ?</h2>
      <div class="contactForm__subtitle">Contactez-nous ! Nous vous répondrons le plus rapidement possible.</div>
    </div>
    <div class="row">
      <div class="offset-sm-2 col-sm-8">
        <form action="/" method="post">
          <div class="form-row mb-2">
            <div class="col">
              <input type="text" class="form-control" placeholder="Prénom" name="first_name">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Nom" name="last_name">
            </div>
          </div>
          <input type="email" class="form-control mb-2" placeholder="Adresse e-mail" name="email"/>
          <input type="text" class="form-control mb-2" placeholder="L'objet de votre message" name="subject"/>
          <textarea name="message" class="form-control" rows="6" placeholder="Posez votre question !"></textarea>
          <button type="submit" class="btn btn-primary btn-block mb-2 font-weight-bold">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactForm'
  }
</script>

<style lang="scss">
.contactForm {
  &__title {
    font-size: 36px;
  }
  .form-control {
    border: none;
  }
}
</style>

