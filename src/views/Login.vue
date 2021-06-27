<template>
  <div class="page page-login">
    <div class="container">
      <h1>Connexion</h1>
      <form @submit="checkForm" class="login-form">
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
            <router-link class="btn btn-primary" to="/devenir-nomad">Inscription</router-link>
          </div>
        </div>
        <div v-if="error" class="error">{{ error.message }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async checkForm(e) {
      e.preventDefault()

      // Form validation

      // Auth request

      const user = await firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log(user)
          this.$router.replace({name: 'home'})
        }).catch(error => {
          this.error = error
        })
    }
  }

}
</script>

<style scoped>

</style>
