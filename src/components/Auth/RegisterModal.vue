<template>
  <div class="modal-card auth-modal" style="max-height: 70vh;">
    <header class="modal-card-head">
      <p v-if="this.steps.activeStep===0" class="modal-card-title">Inscription</p>
      <p v-if="this.steps.activeStep===1" class="modal-card-title">Terminer mon inscription</p>
      <!--      <button type="button" class="delete" @click="closeModal()"/>-->
    </header>
    <section class="modal-card-body">
      <b-steps v-model="steps.activeStep" :has-navigation="steps.hasNavigation">
        <b-step-item :clickable="false" step="1" label="Inscription">
          <form action="" @submit.prevent="register">
            <p class="auth-modal__subtitle">Bienvenue chez Nomad</p>
            <div class="field">
              <label class="label">Adresse e-mail</label>
              <div class="control">
                <input class="input" v-model="profile.email" type="email" placeholder="Votre adresse e-mail" required/>
              </div>
            </div>
            <div class="field">
              <label class="label">Mot de passe</label>
              <div class="control">
                <input class="input" v-model="profile.password" type="password" placeholder="Votre mot de passe"
                       required/>
              </div>
            </div>
            <div class="field">
              <label class="label">Confirmez le mot de passe</label>
              <div class="control">
                <input class="input" v-model="profile.passwordConfirm" type="password"
                       placeholder="Le même mot de passe" required/>
              </div>
            </div>
            <p class="auth-modal__error">{{ registerError }}</p>
            <button class="btn btn-primary">Je m'inscris</button>
          </form>
        </b-step-item>
        <b-step-item step="2" label="Profil">
          <form @submit.prevent="updateProfile">
            <p class="auth-modal__small-subtitle">Assures-toi que les informations saisies ci-dessous correspondent à
              celles présentes sur ta carte d’identité.</p>
            <div class="field">
              <label class="label">Prénom</label>
              <div class="control">
                <input class="input" v-model="profile.firstname" type="text" placeholder="Votre prénom" required/>
              </div>
            </div>
            <div class="field">
              <label class="label">Nom</label>
              <div class="control">
                <input class="input" v-model="profile.lastname" type="text" placeholder="Votre nom de famille"
                       required/>
              </div>
            </div>
            <b-field label="Date de naissance">
              <b-datepicker
                  v-model="profile.birthdate"
                  :locale="locale"
                  placeholder="Cliquez pour sélectionner..."
                  trap-focus>
              </b-datepicker>
            </b-field>
            <div class="auth-modal__checkboxes">
              <b-field>
                <b-checkbox v-model="profile.hasAcceptedTerms">
                  J’accepte les Conditions générales de Nomad présentes dans les mentions légales.
                </b-checkbox>
              </b-field>
              <b-field>
                <b-checkbox v-model="profile.hasAcceptedEmails">
                  Je ne souhaite pas recevoir de messages promotionnels de Nomad.
                </b-checkbox>
              </b-field>
            </div>

            <p class="auth-modal__error">{{ updateProfileError }}</p>
            <button class="btn btn-primary" type="submit">Accepter et continuer</button>
          </form>
        </b-step-item>
      </b-steps>

    </section>
  </div>
</template>

<script>
import firebase from 'firebase'
import {mapState} from 'vuex'

export default {
  name: "RegisterModal",
  data() {
    return {
      profile: {
        email: '',
        password: '',
        passwordConfirm: '',
        firstname: '',
        lastname: '',
        birthdate: new Date(),
        hasAcceptedTerms: false,
        hasAcceptedEmails: false,
      },
      registerError: '',
      updateProfileError: '',
      locale: 'fr-FR',
      steps: {
        hasNavigation: false,
        activeStep: 0,
        clickable: false
      },
      firebaseErrors: {
        'auth/invalid-email': 'L\'adresse e-mail renseignée est invalide',
        'auth/email-already-in-use': 'Un compte avec cette adresse e-mail existe déjà',
        'auth/weak-password': 'Le mot de passe n\'est pas assez sécurisé, veuillez ajouter des chiffres ou caractères spéciaux'
      },
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async register() {
      if (!this.user.loggedIn) {
        await firebase.auth()
            .createUserWithEmailAndPassword(this.profile.email, this.profile.password)
            .then(async response => {
              console.log(JSON.stringify(response))
              if (response.user) {
                await firebase.firestore().collection("users")
                    .doc(response.user.uid)
                    .set({
                      email: this.profile.email,
                    }).then(() => {
                      this.steps.activeStep = 1
                      this.registerError = ''
                    }).catch(error => {
                      this.registerError = error.code;
                    })
              }
            }).catch(error => {
              let errorCode = error.code
              if (errorCode in this.firebaseErrors) {
                this.registerError = this.firebaseErrors[errorCode]
              } else {
                this.registerError = 'Erreur : inscription impossible. Veuillez réessayer plus tard.'
              }
              console.log('Auth error code : ' + errorCode)
            })
      }
    },
    updateProfile() {
      firebase.firestore().collection('users')
          .doc(this.user.data.uid)
          .onSnapshot((doc) => {
            if (doc.exists) {
              firebase.firestore().collection('users').doc(this.user.data.uid).set({
                displayName: this.profile.firstname + ' ' + this.profile.lastname,
                birthdate: this.profile.birthdate,
                hasAcceptedTerms: this.profile.hasAcceptedTerms,
                hasAcceptedEmails: this.profile.hasAcceptedEmails
              }).then(() => {
                this.closeModal()
              }).catch(error => {
                this.error = error
              })
            } else {
              console.log('User not found in db')
            }
          })
    },
    closeModal() {
      this.error = ''
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>