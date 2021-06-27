<template>
  <div class="page page-my-account">
    <h1>Mon Compte</h1>
    <div>
      currentUser : {{ user }}
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

<style scoped>

</style>
