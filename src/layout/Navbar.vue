<template>
  <header>
    <div class="container">
      <b-navbar class="py-2">
        <template #brand>
          <b-navbar-item tag="router-link" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="logo" fill="none" viewBox="0 0 160 143">
              <path fill="#477164"
                    d="M38.58 33.07l9.29 8.26 27.87-24.8 27.87 24.8 9.3-8.26-27.88-24.8L75.74 0l-9.29 8.27-27.87 24.8z"/>
              <path fill="#477164"
                    d="M26.37 44.89l8.26-8.26 24.89 24.91a23.26 23.26 0 0032.83 0l24.92-24.91 8.27 8.26-26.02 26.1a33.32 33.32 0 01-47 0l-26.15-26.1z"/>
              <path fill="#477164" d="M67.8 54.73a11.54 11.54 0 100-16.32 11.55 11.55 0 000 16.32z"/>
              <path fill="#000"
                    d="M26.302 93.726v35.364h-5.305L7.256 107.215v21.875H.284V93.726h5.304l13.792 21.825V93.726h6.922zm18.264 36.071c-2.459 0-4.715-.589-6.77-1.768a13.126 13.126 0 01-4.799-4.799c-1.179-2.055-1.768-4.311-1.768-6.77 0-2.459.59-4.698 1.768-6.719 1.179-2.055 2.779-3.671 4.8-4.85 2.054-1.179 4.31-1.768 6.77-1.768 2.458 0 4.697.589 6.718 1.768a12.892 12.892 0 014.85 4.85c1.213 2.021 1.819 4.26 1.819 6.719 0 2.459-.606 4.715-1.819 6.77-1.179 2.02-2.795 3.62-4.85 4.799-2.02 1.179-4.26 1.768-6.719 1.768zm0-6.365c1.954 0 3.587-.657 4.9-1.971 1.314-1.313 1.97-2.98 1.97-5.001 0-2.021-.656-3.688-1.97-5.002-1.313-1.313-2.946-1.97-4.9-1.97-1.953 0-3.587.657-4.9 1.97-1.28 1.314-1.92 2.981-1.92 5.002s.64 3.688 1.92 5.001c1.313 1.314 2.947 1.971 4.9 1.971zm43.586-20.309c2.425 0 4.328.774 5.71 2.324 1.414 1.549 2.12 3.755 2.12 6.618v17.025h-6.516v-16.52c0-1.179-.303-2.038-.91-2.577-.572-.538-1.33-.808-2.273-.808-1.044 0-1.936.337-2.677 1.01-.708.64-1.061 1.718-1.061 3.234v15.661h-6.517v-16.52c0-1.179-.304-2.038-.91-2.577-.606-.538-1.38-.808-2.324-.808-1.044 0-1.936.337-2.677 1.01-.708.64-1.061 1.718-1.061 3.234v15.661h-6.517v-25.26h6.517v2.475c.673-1.044 1.532-1.835 2.576-2.374 1.044-.539 2.206-.808 3.486-.808 1.28 0 2.442.286 3.486.859a6.492 6.492 0 012.576 2.475c1.786-2.223 4.11-3.334 6.972-3.334zm23.219 0c1.92 0 3.655.387 5.204 1.162a8.537 8.537 0 013.738 3.334c.91 1.482 1.364 3.284 1.364 5.406v16.065h-6.365v-2.172c-1.583 1.919-3.873 2.879-6.871 2.879-2.391 0-4.412-.69-6.062-2.071-1.617-1.415-2.425-3.385-2.425-5.911s.808-4.479 2.425-5.86c1.65-1.381 3.671-2.072 6.062-2.072 2.863 0 5.153.741 6.871 2.223v-2.677c0-2.829-1.314-4.244-3.941-4.244-1.178 0-2.121.303-2.829.909-.707.573-1.061 1.348-1.061 2.324h-6.365c0-1.919.454-3.57 1.364-4.951a9.162 9.162 0 013.738-3.233c1.55-.741 3.267-1.111 5.153-1.111zm-.707 21.824c1.415 0 2.543-.286 3.385-.859.842-.606 1.263-1.364 1.263-2.273 0-.977-.421-1.734-1.263-2.273-.808-.573-1.937-.859-3.385-.859-1.381 0-2.425.286-3.132.859-.707.572-1.061 1.33-1.061 2.273 0 .943.354 1.701 1.061 2.273.707.573 1.751.859 3.132.859zm42.022-31.221v35.364h-6.517v-2.981c-1.953 2.459-4.698 3.688-8.235 3.688-2.223 0-4.277-.589-6.163-1.768-1.853-1.179-3.335-2.779-4.446-4.799-1.111-2.055-1.667-4.311-1.667-6.77 0-2.459.556-4.698 1.667-6.719 1.111-2.055 2.593-3.671 4.446-4.85a11.405 11.405 0 016.163-1.768c3.537 0 6.282 1.229 8.235 3.688V93.726h6.517zm-13.539 29.857c2.054 0 3.738-.656 5.052-1.97 1.313-1.347 1.97-3.065 1.97-5.153 0-2.122-.657-3.84-1.97-5.153-1.314-1.314-2.998-1.97-5.052-1.97-2.021 0-3.688.673-5.002 2.02-1.313 1.314-1.97 3.015-1.97 5.103 0 2.088.657 3.806 1.97 5.153 1.314 1.314 2.981 1.97 5.002 1.97z"/>
            </svg>
          </b-navbar-item>
        </template>
        <template #end>
          <b-navbar-item tag="router-link" to="/">
            Nos stages
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/blog">
            Articles
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/">
            Galerie
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/">
            À propos
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/">
            Contact
          </b-navbar-item>
          <b-navbar-dropdown v-if="user.loggedIn" label="Mon Compte">
            <b-navbar-item v-if="user.loggedIn" tag="router-link" to="/mon-compte">
              Profil
            </b-navbar-item>
            <b-navbar-item v-if="user.loggedIn" @click="signOut">
              Déconnexion
            </b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-dropdown v-if="!user.loggedIn" label="Connexion">
            <b-navbar-item @click="isLoginModalActive = true">
              Connexion
            </b-navbar-item>
            <b-navbar-item @click="isRegisterModalActive = true">
              Inscription
            </b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-item class="btn btn-red" tag="router-link" to="/questionnaire">
            Découvrir mon niveau
          </b-navbar-item>
          <b-modal
              v-model="isLoginModalActive"
              has-modal-card
              trap-focus
              :destroy-on-hide="false"
              aria-role="dialog"
              aria-label="Connexion"
              aria-modal>
            <template #default="props">
              <LoginModal @close="props.close"></LoginModal>
            </template>
          </b-modal>
          <b-modal
              v-model="isRegisterModalActive"
              has-modal-card
              trap-focus
              :destroy-on-hide="false"
              aria-role="dialog"
              aria-label="Inscription"
              aria-modal>
            <template #default="props">
              <RegisterModal @close="props.close"></RegisterModal>
            </template>
          </b-modal>
        </template>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase'
import {mapState, mapActions} from 'vuex'
import LoginModal from '@/components/Auth/LoginModal'
import RegisterModal from '@/components/Auth/RegisterModal'

export default {
  name: 'Navbar',
  components: {
    LoginModal,
    RegisterModal,
  },
  props: {
    page: String
  },
  data() {
    return {
      isLoginModalActive: false,
      isRegisterModalActive: false,
    }
  },
  methods: {
    ...mapActions(['setUser', 'fetchUser']),
    async signOut() {
      firebase.auth().signOut()
          .then(() => {
            localStorage.setItem('user', null)
            if (this.$route.name !== 'home')
              this.$router.push('/')
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  computed: {
    ...mapState(['user']),
  }

}
</script>
