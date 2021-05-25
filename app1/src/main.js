import './public-path';
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'

import './assets/style/reset.css'
import './assets/style/common.scss'
// import "element-ui/lib/theme-chalk/index.css"; //由于应用微服务，导致打包后字体图标404，暂时没有其他解决方案，采用下面的方式映入 
import "@/assets/style/element-variables.scss"; //主题修改  使用了自定义主题，不用再单独引入element样式

/* element 全部映入 */
import ElementUI from 'element-ui'
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000,
})

Vue.config.productionTip = false

let router = null
let instance = null

function render(props = {}) {
  const { container } = props
  router = new VueRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    base: '/app1',
    mode: 'history',
    routes,
  })

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}


// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 生命周期 中获取通信方法
export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  console.log('[vue] props from main framework', props)
  // storeTest(props);

  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev)
  })
  props.setGlobalState({name:'hong',age:10});//按一级属性设置全局状态，微应用中只能修改已存在的一级属性

  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
