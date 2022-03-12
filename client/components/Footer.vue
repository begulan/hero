<template>
  <footer class="footer text-center">
      <logo />
      <span>Copytight Balanchaevtukuncho</span>
      <nuxt-link to="/">Privacy policy</nuxt-link>
      <nuxt-link to="/">Terms of use</nuxt-link>
      <nuxt-link to="/">Contact</nuxt-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .footer {
        .logo {
            margin-top: 50px;
            img{
                width: 100%;
                max-height: 45px;
            }
        }
    }
</style>