import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./views/main/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('./views/home/index.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () =>
          import(/* webpackChunkName: "about" */ './views/about/index.vue'),
      },
    ],
  },
]

export default routes
