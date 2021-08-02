<template>
  <div class="post">
    <TOC class="toc" :include-level="[2, 3]" />
    <div class="title-wrapper">
      <p class="title">{{ $page.title }}</p>
    </div>
    <p class="date" v-if="$frontmatter.date">{{ new Date($frontmatter.date).toLocaleDateString() }}</p>
    <Content class="post-content" />
    <PostNav />
    <!-- <Comment /> -->
  </div>
</template>

<script>
// import { Comment } from '@vuepress/plugin-blog/lib/client/components'
import PostNav from '../components/PostNav';

export default {
  name: 'Post',
  components: {
    PostNav,
    // Comment,
  }
}
</script>

<style lang='stylus'>
@import '../styles/variables.styl';

.post
  font-size 15px

  .toc
    position fixed
    width 250px
    right 60px
    top 100px
    background-color #eee
    border-radius 5px
    a
      color $textColor
      &:hover
        color $linkColor
    > ul
      list-style none
      padding 10px
      li
        line-height 1.8em
        ul
          list-style none
          margin-left 1.5em

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