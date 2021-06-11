<template>
  <b-navbar class="is-white py-2">
      <template #brand>
        <b-navbar-item tag="router-link" to="/">
          Nomad
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" to="/">
          Accueil
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/">
          Nos stages
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/">
          Contact
        </b-navbar-item>
      </template>
      <template #end>
        <div class="buttons">
          <b-navbar-item class="button" tag="router-link" to="/">
            Connexion
          </b-navbar-item>
          <b-navbar-item class="button is-primary" tag="router-link" to="/">
            Inscription
          </b-navbar-item>
        </div>
      </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
<style lang="scss" scoped>

</style>
