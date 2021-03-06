import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "main3" */ './views/main/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "home2" */ './views/home/index.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () =>
          import(/* webpackChunkName: "about3" */ './views/about/index.vue'),
      },
    ],
  },
]

export default routes
