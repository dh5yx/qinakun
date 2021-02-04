<template >
  <div class="menutree">
    <label v-for="menu in menuData" :key="menu.index">
      <el-submenu :index="menu.index" v-if="menu.children&&menu.children.length>0">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{menu.name}}</span>
        </template>
        <menutree :menuData="menu.children"></menutree>
      </el-submenu>
      <el-menu-item v-else :index="menu.index">
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
    </label>
  </div>
</template>

<script>
export default {
  name: "menutree",
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    // console.log(this.menuData);
  },
};
</script>

<style lang='scss'>
</style>
