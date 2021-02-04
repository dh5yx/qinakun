<template>
  <el-menu id="menu-list" :default-active="$route.name" class="el-menu-vertical-demo" router
           background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
           @select="select">
    <MenuTree :menuData="menu"></MenuTree>
  </el-menu>
</template>

<script>
export default {
  components: { MenuTree: () => import('./components/menu_tree.vue') },
  data() {
    return {
      menu: [
        {
          index: "home",
          name: "子应用一首页",
          icon: "el-icon-s-home",
          children: [],
        },
        {
          index: "about",
          name: "子应用一关于",
          icon: "el-icon-s-home",
          children: [],
        },
      ]
    }
  },
  methods: {
    select(val) {
        console.log(val);
     }
  }
}
</script>

<style lang="scss" scoped>
</style>