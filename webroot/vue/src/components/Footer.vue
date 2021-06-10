<template>
  <footer class="footer py-4 mt-5">
    Copyright © 2021 <a href="https://redcat-studio.fr">Tardigrade</a>

  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss">
.footer {
  text-align: center;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  background: var(--primary);

  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>