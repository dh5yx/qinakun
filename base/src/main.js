import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import './assets/style/common.scss'
import 'element-ui/lib/theme-chalk/index.css' // element样式 cdn不用引入

/* element 全部映入 */
import ElementUI from 'element-ui'
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000,
})

// 导入qiankun.js
import {
  registerMicroApps,
  start,
  setDefaultMountApp, //设置主应用启动后默认进入的微应用。
  runAfterFirstMounted,
  loadMicroApp, //手动加载 适用于需要手动 加载/卸载 一个微应用的场景。
  initGlobalState, //定义全局状态，并返回通信方法,建议在主应用使用，微应用通过 props 获取通信方法。
} from 'qiankun'
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')

// 注册子应用
registerMicroApps(
  [
    {
      name: 'vue-app-cli3', //必选 微应用的名称，
      entry:  process.env.NODE_ENV === "production" ?'/child/vue-cli3/':'http://localhost:1234', //必选 微应用的入口。
      container: '#vue-cli3', //必选，微应用的容器节点的选择器或者 Element 实例
      activeRule: '/vue-cli3', //必选 微应用的激活规则 支持配置一个 active function 函数或一组 active function。函数会传入当前 location 作为参数，函数返回 true 时表明当前微应用会被激活。如 location => location.pathname.startsWith('/app1')。
      loader() {}, //可选 loading 状态发生变化时会调用的方法。
      props: {
        //可选，主应用需要传递给微应用的数据。
        msg: '你是子应用-vue-cli3',
      },
    },
    {
      name: 'vue-app1', //必选 微应用的名称，
      entry: process.env.NODE_ENV === "production" ?'/child/app1/': 'http://localhost:7101', //必选 微应用的入口。
      container: '#app1', //必选，微应用的容器节点的选择器或者 Element 实例
      activeRule: '/app1', //必选 微应用的激活规则 支持配置一个 active function 函数或一组 active function。函数会传入当前 location 作为参数，函数返回 true 时表明当前微应用会被激活。如 location => location.pathname.startsWith('/app1')。
      loader() {}, //可选 loading 状态发生变化时会调用的方法。
      props: {
        //可选，主应用需要传递给微应用的数据。
        msg: '你是子应用-app1',
      },
    },
    {
      name: 'vue-app2',
      entry:  process.env.NODE_ENV === "production" ?'/child/app2/':'http://localhost:7102',
      container: '#app2',
      activeRule: '/app2',
      props: {
        msg: '你是子应用-app2',
      },
    },
  ],
  {
    beforeLoad: [
      (app) => {
        console.log('before load')
      },
    ],
    beforeMount: [
      (app) => {
        console.log('before mount')
      },
    ],
    afterMount: [(app) => {}],
    beforeUnmount: [(app) => {}],
    afterUnmount: [
      (app) => {
        console.log('after unload')
      },
    ],
  }
)

// 启动默认应用  貌似不能再主应用设置重定向
// setDefaultMountApp('/app2')

//第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
runAfterFirstMounted(() => {
  console.log('第一个微应用开启')
})

// 初始化通讯 state
let state = { name: 'deng', age: 20 }
const actions = initGlobalState(state)
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev)
})
// actions.setGlobalState(state)//修改状态
actions.offGlobalStateChange() //移除当前应用的状态监听，微应用 umount 时会默认调用

// 开启服务
start({ prefetch: 'all' }) //主程序加载完开始加载所有微应用
