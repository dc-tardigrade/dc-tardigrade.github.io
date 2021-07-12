<template>
  <form @submit.prevent="login">
    <div class="modal-card auth-modal">
      <header class="modal-card-head">
        <p class="modal-card-title">Connexion</p>
        <button type="button" class="delete" @click="closeModal()"/>
      </header>
      <section class="modal-card-body">
        <p class="auth-modal__subtitle">Bienvenue chez Nomad</p>

        <div class="field">
          <label class="label">Adresse e-mail</label>
          <div class="control">
            <input class="input" v-model="email" type="email" placeholder="Votre adresse e-mail" required/>
          </div>
        </div>
        <div class="field">
          <label class="label">Mot de passe</label>
          <div class="control">
            <input class="input" v-model="password" type="password" placeholder="Votre mot de passe" required/>
          </div>
        </div>
        <p class="auth-modal__error">{{error}}</p>
        <button class="btn btn-primary" type="submit">Connexion</button>
      </section>
    </div>
  </form>
</template>

<script>
import firebase from "firebase"
import {mapActions} from 'vuex'

export default {
  name: "LoginModal",
  data() {
    return {
      email: '',
      password: '',
      firebaseErrors: {
        'auth/user-not-found': 'Aucun utilisateur ne correspond à cette adresse e-mail',
        'auth/invalid-email': 'L\'adresse e-mail renseignée est invalide',
        'auth/invalid-password': 'Le mot de passe est invalide',
        'auth/wrong-password': 'Le mot de passe est erroné',
        'auth/too-many-requests': 'Trop de tentatives de connexion à la suite ont été détectées. Veuillez réessayer plus tard.'
      },
      error: ''
    }

  },
  methods: {
    ...mapActions(['fetchUser']),
    async login() {
      await firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(response => {
        if (response.user) {
          this.closeModal()
        }
      }).catch((error) => {
        let errorCode = error.code
        if(errorCode in this.firebaseErrors) {
          this.error = this.firebaseErrors[errorCode]
        } else {
          this.error = 'Erreur : connexion impossible. Veuillez réessayer plus tard.'
        }
        console.log('Auth error code : ' + errorCode)
      })
    },
    closeModal() {
      this.error = ''
      this.$emit('close')
    }
  },
}
</script>
