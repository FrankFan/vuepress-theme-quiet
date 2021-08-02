<template>
  <div class="theme-tags">
    <div class="theme-tags_container">
      <router-link
        class="theme-tag"
        v-for="tag in $tag.list"
        :key="tag.name"
        :to="tag.path"
      >{{ tag.name }} ({{ tag.pages.length }})</router-link>
    </div>
    <ul v-if="showList" class="list-wrapper">
      <PostLinkItem v-for="post in postList" :post="post" />
    </ul>
  </div>
</template>

<script>
import PostLinkItem from '../components/PostLinkItem';
import MyPagination from '../components/MyPagination';

export default {
  name: 'Tag',
  components: {
    PostLinkItem,
    MyPagination,
  },
  computed: {
    postList() {
      let list = [];
      this.$site.pages.forEach(item => {
        if (item.frontmatter.tags || item.frontmatter.tag) {
          const date = new Date(item.frontmatter.date);
          list.push({
            title: item.title,
            path: encodeURI(item.path),
            date: `${date.toLocaleDateString()}`
          })
        }
      });
      return list;
    },
    showList() {
      const currentPath = this.$route.path;
      const inItemPage = currentPath.split('/').length > 3;
      if (inItemPage) {
        return false;
      }
      return true;
    },
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl';


.theme-tags
  &_container
    .theme-tag
      display inline-block
      color $textColor
      border 1px solid $textColor
      padding 4px 10px
      margin 0 20px 10px 0
      border-radius 5px
      &:last-child
        margin-right 0
      &:hover
        color $linkColor
        border 1px solid $linkColor
        box-shadow 0 0 5px $linkColor

  .list-wrapper
    padding-top 10px
</style>