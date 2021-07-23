<template>
  <div class="theme-container">
    <TheHeader />
    <component class="theme-main" :is="layout" />
    <TheFooter :layout="layout" />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader';
import TheFooter from '../components/TheFooter';

// see https://v1.vuepress.vuejs.org/zh/theme/option-api.html#globallayout

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>

<style lang="styl">
@import '../styles/variables.styl';

.theme-main
  padding 50px 40px 20px 40px
  box-shadow 0 2px 10px $shadowColor
  border-radius 5px
  box-sizing border-box
</style>