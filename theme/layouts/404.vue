<template>
  <div class="notfound">
    <p>404</p>
    <router-link to="/">Take me home</router-link>
  </div>
</template>

<script>
</script>

<style lang='stylus'>
@import '../styles/variables.styl';

.notfound
  a
    color $linkColor
</style>