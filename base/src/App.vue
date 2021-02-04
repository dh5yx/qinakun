<template>
  <div id="app" class="base-vue">
    <!-- <a href="/">base</a>
    <a href="/app1">vue</a>
    <a href="/app2">vue</a> -->
    <ul class="menu-parent-list">
      <li v-for="item in menu" :key="item.name" @click="checkMenu(item)">
        <span class="iconfont" :class="item.icon"></span>
        <span>{{item.name}}</span>
      </li>
    </ul>
    <!-- 主应用挂载此处-->
    <router-view></router-view>

    <!-- 子应用分别挂载盒子 -->
    <div id="app1"></div>
    <div id="app2"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menu: [
        {
          index: "/",
          name: "主应用",
          icon: "el-icon-s-home",
          children: [],
        },
        {
          index: "/app1",
          name: "子应用一",
          icon: "el-icon-s-home",
          children: [],
        },
        {
          index: "/app2",
          name: "子应用二",
          icon: "el-icon-s-home",
          children: [],
        },
      ]
    }
  },
  methods: {
    // 点击父级菜单
    checkMenu(menuItem) {
      this.$router.push(menuItem.index).catch(() => { })
    }
  }
}
</script>

<style lang='scss' scoped>
#app {
  height: 100vh;
  width: 100vw;
  .menu-parent-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20000;
    width: 40px;
    overflow-x: hidden;
    transition: width 0.3s;
    white-space: nowrap;
    height: 100%;
    border-right: 1px solid #ccc;
    background: teal;
    padding-top: 4px;
    cursor: pointer;
    &:hover {
      width: 240px;
    }
    li {
      line-height: 40px;
      height: 40px;
      &:hover {
        background: #283143;
      }
    }
    .iconfont {
      padding: 0 12px;
      display: inline-block;
      font-size: 14px;
    }
  }
}
.base-vue {
  padding-left: 40px;
}
</style>
