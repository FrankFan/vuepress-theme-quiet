<template>
  <div class="post">
    <!-- TODO -->
    <!-- <TOC class="toc" :include-level="[2, 3]" /> -->
    <div class="title-wrapper">
      <!-- <BackIcon /> -->
      <p class="title">{{ $page.title }}</p>
    </div>
    <p class="date" v-if="$frontmatter.date">{{ new Date($frontmatter.date).toLocaleDateString() }}</p>
    <Content class="post-content" />
    <PostNav />
  </div>
</template>

<script>
import PostNav from '../components/PostNav';

export default {
  name: 'Post',
  components: {
    PostNav,
  }
}
</script>

<style lang='stylus'>
@import '../styles/variables.styl';

.post
  font-size 15px

  .toc
    position fixed
    right 220px
    /* border 1px solid red */
    ul
      li
        ul
          margin-left 2em

  p
    margin-bottom 20px

  .title-wrapper
    display flex
    align-items center
    .title
      margin 0
      font-size 2.3em
      font-weight 500
      line-height 1.5

  .date
    margin-bottom 2em
    color $greyColor
    font-size .9em
</style>