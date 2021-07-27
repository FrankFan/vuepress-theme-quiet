<template>
  <header class="site-header">
    <router-link class="logo" to="/">
      <img src="../assets/imgs/vue.png" alt />
      <h1>logo</h1>
    </router-link>
    <nav v-if="navList">
      <NavLink v-for="nav in navList" :item="nav" />
    </nav>
  </header>
</template>

<script>
import NavLink from './NavLink'

export default {
  components: {
    NavLink,
  },
  computed: {
    navList() {
      return this.$themeConfig.nav && this.$themeConfig.nav.map(item => {
        return {
          text: item.text,
          link: item.link,
        }
      })
    }
  }
}
</script>

<style lang='stylus'>
.site-header
  display flex
  align-items center
  margin-bottom 40px
  padding-top 30px
  .logo
    flex: initial
    display flex
    align-items center

    img
      width 30px
      height 30px
    h1
      font-size 0
  nav
    flex: 1
    justify-content flex-end
    text-align: right
    a
      display inline-block
      margin-right 30px
      text-decoration none
      color #555
      transition: 0.3s color ease;
      &:last-child
        margin-right 0
      &:hover
        color #0bb304
      &.router-link-active
        color #0bb304
</style>