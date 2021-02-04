<template>
  <div id="app">
    <!--    <a href="/">home</a>-->
    <!--    <a href="/about">about</a>-->
    <!-- <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/helloword">helloword</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App2',
}
</script>

<style lang='scss' scoped>
#app {
  height: 100vh;
  width: 100%;
}
</style>
