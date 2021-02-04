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
  setDefaultMountApp,
  runAfterFirstMounted,
  loadMicroApp, //手动加载
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
      name: 'vue-app1',
      entry: 'http://localhost:7101',
      container: '#app1',
      activeRule: '/app1',
      props: {
        msg: '你是子应用-app1',
      },
    },
    {
      name: 'vue-app2',
      entry: 'http://localhost:7102',
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
    afterUnmount: [
      (app) => {
        console.log('after unload')
      },
    ],
  }
)

// 启动默认应用
// setDefaultMountApp('/')

// 第一个子应用加载完毕回调
// runAfterFirstMounted();

// 开启服务
start()
