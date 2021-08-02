<template>
  <div class="tag-item">
    <Tag />
    <ul class="list-wrapper">
      <PostLinkItem v-for="post in postList" :post="post" />
    </ul>
    <MyPagination v-if="$pagination.length > 1" />
  </div>
</template>
<script>
import PostLinkItem from '../components/PostLinkItem';
import MyPagination from '../components/MyPagination';
import Tag from './Tag'

export default {
  name: 'TagItem',
  components: {
    PostLinkItem,
    MyPagination,
    Tag,
  },
  computed: {
    postList() {
      let list = [];
      this.$pagination.pages.map(item => {
        const date = new Date(item.frontmatter.date);
        list.push({
          title: item.title,
          path: encodeURI(item.path),
          date: `${date.toLocaleDateString()}`
        })
      });
      return list;
    }
  }
}
</script>
<style lang="stylus">
.tag-item
  .list-wrapper
    padding-top 30px
</style>