<template>
  <div id="app" class="base-vue">

    <!-- 切换子应用和主应用菜单列表 -->
    <ul class="menu-parent-list">
      <li class="menu-item" :class="{active:acitveClass(item.index)}" v-for="item in menu"
          :key="item.name" @click="checkMenu(item)">
        <span class="iconfont" :class="item.icon"></span>
        <span>{{item.name}}</span>
      </li>
    </ul>

    <!-- 主应用挂载此处-->
    <router-view></router-view>

    <!-- 子应用分别挂载盒子 -->
    <div id="vue-cli3"></div>
    <div id="app1"></div>
    <div id="app2"></div>

  </div>
</template>

<script>
const appList = ['/app1', 'app2', 'vue-cli3']//微服务路由根目录
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
          index: "/vue-cli3",
          name: "vue-cli3",
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
  },
  computed: {
    acitveClass() {
      return (url) => {
        if (url.length > 1) {
          return this.$route.path.startsWith(url)
        } else {
          return !appList.some(v => this.$route.path.includes(v))
        }
      }
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
    .menu-item {
      color: #fff;
      line-height: 40px;
      height: 40px;
      &:hover {
        background: #283143;
      }
      &.active {
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
