<template>
  <div class="navbar">
    <div class="navbar__brand">
      Chèque Numérique
    </div>
    <div class="navbar__nav">
      <router-link class="navbar__link" to="/"></router-link>
      <router-link class="navbar__btn" to="/contact">Contact</router-link>
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
  background: #FF5555;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  &__brand {
    font-size: 24px;
    font-weight: bold;
  }

  &__link {
    color: #fff;
  }

  &__btn {
    color: #FF5555;
    background: #fff;
    padding: 10px 15px;
  }
}

</style>