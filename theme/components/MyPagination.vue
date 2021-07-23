<template>
  <div class="pagination-container">
    <router-link
      v-if="$pagination.hasPrev"
      :class="[$pagination.hasPrev ? '' : 'disabled']"
      :to="$pagination.prevLink"
    >Prev</router-link>
    <button v-else class="disabled-left" disabled>Prev</button>
    <router-link
      v-if="$pagination.hasNext"
      :class="[$pagination.hasNext ? 'hack' : '']"
      :to="$pagination.nextLink"
    >Next</router-link>
    <button v-else class="disabled-right" disabled>Next</button>
  </div>
</template>

<script>
export default {
  name: 'MyPagination'
}
</script>

<style lang='stylus'>
@import '../styles/variables.styl';

.pagination-container
  display flex
  justify-content center
  margin-top 30px
  a
    text-align center
    background $bgColor
    padding 0 15px
    border 1px solid rgba(27,31,35,0.15)
    border-top-left-radius 5px
    border-bottom-left-radius 5px
    transition all .5s
    height 30px
    line-height 30px
    &:hover
      color #555
      border 1px solid $linkColor
      box-shadow 0 0 5px $linkColor
    &:last-child
      border-left-width 0
    &.hack
      border-top-right-radius 5px
      border-bottom-right-radius 5px
      border-top-left-radius 0
      border-bottom-left-radius 0

  button
    padding 0 18px
    border 1px solid rgba(27,31,35,0.15)
  button.disabled-left
    border-top-left-radius 5px
    border-bottom-left-radius 5px
  button.disabled-right
    border-top-right-radius 5px
    border-bottom-right-radius 5px
    border-left-width 0
</style>