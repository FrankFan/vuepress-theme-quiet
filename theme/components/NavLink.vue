<template>
  <a v-if="isExternal" :href="item.link" class="nav-link external" :target="target" :rel="rel">
    {{ item.text }}
    <OutboundLink v-if="isBlankTarget" />
  </a>
  <router-link v-else class="nav-link" :to="item.link" exact>{{ item.text }}</router-link>
</template>
<script>
import { isExternal } from '../utils/'

export default {
  name: 'NavLink',
  props: {
    item: {
      required: true,
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.item.link);
    },
    isBlankTarget() {
      return this.target === '_blank';
    },
    target() {
      if (this.item.target) {
        return this.item.target;
      }
      return isExternal(this.item.link) ? '_blank' : '';
    },
    rel() {
      if (this.item.rel) {
        return this.item.rel;
      }
      return this.isBlankTarget ? 'noopener noreferrer' : null;
    }
  }
}
</script>
<style lang='stylus'>
</style>