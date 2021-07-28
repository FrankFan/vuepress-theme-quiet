<template>
  <footer class="site-footer">
    <span>{{ $themeConfig.copyright }}</span>
    <!-- <p>layout: {{ layout }}</p> -->
  </footer>
</template>

<script>
export default {
  props: {
    layout: String,
  },
  data() {
    return {
      thisYear: new Date().getFullYear(),
    }
  }
}
</script>

<style lang='stylus'>
.site-footer {
  line-height: 1.5rem
  font-size: .75rem
  text-align center
  position absolute
  bottom 0
  width 100%
  padding-bottom 20px
}
</style>