// import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';

import "./assets/style/reset.css"
import "./assets/style/common.scss"
import "element-ui/lib/theme-chalk/index.css"; // element样式 cdn不用引入


/* element 全部映入 */
import ElementUI from "element-ui";
Vue.use(ElementUI, {
  size: "small",
  zIndex: 3000
});



Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    base: '/app2',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// webpack打包公共文件路径
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


// 生命周期
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  // storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}