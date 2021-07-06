<template>
  <div class="page page-register">
    <div class="container">
      <h1>Devenir Nomad</h1>
      <form @submit="register" class="register-form">
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
            <button class="btn btn-red">Envoyer</button>
            <router-link class="btn btn-primary" to="/connexion">J'ai déjà un compte</router-link>
          </div>
        </div>
        <div v-if="error" class="error">{{ error.message }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "Register",
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async register(e) {
      e.preventDefault()

      // Form validation

      // Auth request

      await firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace({name: 'home'})
        }).catch(error => {
          this.error = error
        })

    }
  }
}
</script>
