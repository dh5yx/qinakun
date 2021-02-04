<template>
  <!-- <router-view></router-view> -->
  <el-container class="vue-base-box">
    <el-aside width="200px">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header class="bd">主应用Header</el-header>
      <el-main class="bd">
        <router-view></router-view>
      </el-main>
      <el-footer class="bd">主应用Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>

export default {
  components: { Aside: () => import('../../layout/aside/index') }
}
</script>

<style lang="scss" scoped>
.vue-base-box {
  height: 100%;
  width: 100%;
}
</style>