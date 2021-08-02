<template>
  <div class="post-nav">
    <router-link v-if="prevPost" class="post-nav__prev" :to="prevPost.path">{{ prevPost.title }}</router-link>
    <router-link v-if="nextPost" class="post-nav__next" :to="nextPost.path">{{ nextPost.title }}</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    /**
     * @description 【页面实例属性】下一篇文章
     * @returns { Post }
     */
    nextPost() {
      let list = this.getArticleList();
      const index = list.findIndex(item => {
        return item.path === this.$page.path;
      })
      if (index === -1) {
        return;
      }
      return list[index + 1];
    },
    /**
     * @description 【页面实例属性】上一篇文章
     * @returns { Post }
     */
    prevPost() {
      let list = this.getArticleList();
      const index = list.findIndex(item => {
        return item.path === this.$page.path;
      })
      if (index === -1) {
        return;
      }
      return list[index - 1];
    }
  },
  methods: {
    /**
     * @description 【页面实例方法】根据pid获取文章列表
     * @param { string } pid
     * @returns { article list }
     */
    getArticleList() {
      const pid = this.$page.pid;
      let list = this.$site.pages.filter(item => {
        return item.pid === pid;
      });
      list = list.sort((a, b) => {
        let time1 = new Date(a.frontmatter.date);
        let time2 = new Date(b.frontmatter.date);
        return time1 - time2;
      })
      return list;
    }
  }
}

</script>

<style lang='stylus'>
@import '../styles/variables.styl';

.post-nav
  display flex
  border-top 1px solid #e0e0e0
  padding-top 1em
  align-items: center;
  a
    line-height 1.3em
    transition: 0.3s color ease;
    position relative
    &:hover
      color $linkColor
  &__prev
    flex 1
    text-align left
    padding-left: 1em;
    &::before
      content '<'
      display inline-block
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left 0
  &__next
    flex 1
    text-align right
    padding-right 1em
    &::after
      content '>'
      display inline-block
      position absolute
      top 50%
      right 0
      transform translateY(-50%);
</style>