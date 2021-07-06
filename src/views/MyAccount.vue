<template>
  <div class="page my-account">
    <div class="container">
      <h1 class="h1 section-title">Mon Compte</h1>
      <div class="my-account__user-info">
        <img class="my-account__user-photo" :src="user.photoURL" :alt="user.displayName"/>
        <div class="my-account__user-main-data">
          <div class="my-account__user-name">{{ user.displayName }}</div>
          <div class="my-account__user-member-since">Inscrit depuis 2021</div>
          <div class="my-account__user-level">Niveau : amateur</div>
        </div>
      </div>
      <div>
        UserData : {{ user.data }}<br/><br/>
        UserProfile : {{ user.profile }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "MyAccount",
  computed: {
    ...mapState(['user'])
  }
}
</script>