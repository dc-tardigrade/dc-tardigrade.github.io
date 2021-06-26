<template>
  <div class="page page-register">
    <div class="container">
      <h1>Devenir Nomad</h1>
      <form @submit="checkForm">
        <div class="field">
          <label class="label">Nom d'utilisateur</label>
          <div class="control">
            <input v-model="username" type="text"/>
          </div>
        </div>
        <div class="field">
          <label class="label">Adresse e-mail</label>
          <div class="control">
            <input v-model="email" type="email"/>
          </div>
        </div>
        <div class="field">
          <label class="label">Mot de passe</label>
          <div class="control">
            <input v-model="password" type="password"/>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Envoyer</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault()
    }
  }
}
</script>
