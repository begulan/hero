<template>
  <div class="top-menu">
    <div class="d-flex justify-content-center align-items-center">
      <nuxt-link to="/">Starters</nuxt-link>
      <span class="dot"><i class="bi bi-circle-fill"></i></span>
      <nuxt-link to="/lunch">Lunch</nuxt-link>
      <span class="dot"><i class="bi bi-circle-fill"></i></span>
      <nuxt-link to="/deserts">Deserts</nuxt-link>
      <span class="dot"><i class="bi bi-circle-fill"></i></span>
      <nuxt-link to="/youorder">You Order <i class="bi bi-bag"></i> (0)</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.top-menu {
  margin: 20px auto;
  a {
    color: #333;
    border-bottom: 1px solid transparent;
    text-transform: uppercase;
    font-size: 20px;
    text-decoration: none;
    &.nuxt-link-exact-active {
      border-bottom: 1px solid #333;
    }&:hover {
      border-bottom: 1px solid #333;
    }
  }
  .dot {
    color: #333;
    font-size: 8px;
    line-height: 0;
    display: inline-block;
    padding: 0 15px
  }
}
</style>