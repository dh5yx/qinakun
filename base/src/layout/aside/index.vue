<template>
  <div class="menu-nav-box ">
    <el-menu class="menu-children-list" :default-active="$route.name" background-color="#161822"
             router text-color="#C1C6C8" active-text-color="#fff">
      <p class="menu_children_title">主应用</p>
      <MenuTree :menuData="menu"></MenuTree>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: { MenuTree: () => import('./components/menu_tree.vue') },
  data() {
    return {
      menu: [
        {
          index: "home",
          name: '首页',
          icon: "el-icon-s-home",
          children: [],
        },
        {
          index: "about",
          name: "关于",
          icon: "el-icon-s-home",
          children: [],
        },

      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
/* 左侧菜单栏 */
.menu-nav-box {
  width: 100%;
  height: calc(100%);
  float: left;
  color: #fff;
  position: relative;
  background: #161822;
  .menu-children-list {
    width: 194px;
    border-right: none;
    .menu_children_title {
      line-height: 50px;
      padding-left: 20px;
      color: #c1c6c8;
    }
  }
}
</style>