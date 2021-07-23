<template>
  <li class="post-item">
    <router-link class="post-link" :to="post.path">{{ post.title }}</router-link>
    <span class="post-date">{{ post.date }}</span>
  </li>
</template>

<script>
export default {
  props: {
    post: Object,
  }
}
</script>

<style lang='stylus'>
@import '../styles/variables.styl';

.post-item
  list-style none
  display flex
  font-size 15px

  .post-link
    color $textColor
    padding-right 100px
    transition: 0.3s color ease;
    &:hover
      color $linkColor
  .post-date
    color $greyColor2
    font-size .8em
    flex 1
    text-align right
    margin-right 30px
</style>