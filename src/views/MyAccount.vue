<template>
  <div class="page my-account">
    <div class="container">
      <h1 class="h1 section-title">Mon Compte</h1>
      <div class="my-account__user-info">
        <div class="my-account__user-card my-account__user-main-data">
          <div class="my-account__user-photo">
            <img :src="require(`@/assets/img/neutral-profile.svg`)" :alt="'Photo de ' + user.profile.displayName"/>
          </div>
          <div>
            <div class="my-account__user-name">{{ user.profile.displayName }}</div>
            <div class="my-account__user-member-since"><strong>Membre depuis : </strong> 2021</div>
            <div class="my-account__user-level"><strong>Niveau :</strong>
              {{ userLevel.name ? userLevel.name : 'Faites le questionnaire pour déterminer votre niveau' }}
            </div>
            <div class="my-account__user-btn">
              <router-link :to="{name: 'updateProfile'}" class="btn btn-primary">Modifier le profil</router-link>
            </div>
          </div>
        </div>
        <div class="my-account__user-card my-account__user-aside-data">
          <div>
            <div class="my-account__user-payment-method"><strong>Moyen de paiement favori : </strong>Non renseigné</div>
            <div class="my-account__user-address"><strong>Adresse de facturation : </strong>Non renseignée</div>
          </div>
          <div class="my-account__user-btn">
            <router-link :to="{name: 'updateProfile'}" class="btn btn-primary">Modifier les informations</router-link>
          </div>
        </div>
      </div>

      <div>

        <!--        UserData : {{ user.data }}<br/><br/>-->
        <!--        UserProfile : {{ user.profile }}-->
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "MyAccount",
  computed: {
    ...mapState(['user', 'levels']),
    userLevel: function () {
      if (this.user.profile.level_id) {
        return this.levels.find(level => level.id === this.user.profile.level_id)
      } else {
        return {}
      }
    },
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.user.profile)
  }
}
</script>