<template>
  <div class="post-list-container">
    <ul class="post-list-container__children">
      <PostLinkItem v-for="post in postList" :post="post" />
    </ul>
    <MyPagination v-if="$pagination.length > 1" />
  </div>
</template>

<script>
import MyPagination from '../components/MyPagination';
import PostLinkItem from '../components/PostLinkItem';

export default {
  components: {
    MyPagination,
    PostLinkItem
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
        });
      });
      return list;
    }
  }
}
</script>

<style lang='stylus'>
.post-list-container
  &__children
    padding-left 40px
    .post-item
      /* padding-bottom 30px */
</style>