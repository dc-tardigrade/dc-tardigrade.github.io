<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar__brand">
        Chèque Numérique
      </div>
      <div class="navbar__nav">
        <router-link class="navbar__link" to="/">Accueil</router-link>
        <router-link class="navbar__btn" to="/contact">Contact</router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Navbar'
}
</script>
<style lang="scss" scoped>

.navbar {
  background: var(--primary);
  color: #fff;
  padding: 20px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__brand {
    font-size: 18px;
    font-weight: bold;
  }

  &__link {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    margin-right: 8px;
  }

  &__btn {
    color: var(--primary);
    background: #fff;
    padding: 10px 15px;
    text-decoration: none;
  }
}

</style>