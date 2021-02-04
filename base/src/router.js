import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: { name: 'main' },
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ './views/main/index.vue'),
    redirect:{name:'home'},
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ './views/home/index.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './views/about/index.vue'),
      },
    ],
  },

  // {
  //   path: '/main',
  //   name: 'main',
  //   component: () => import('./views/main/index.vue'),
  // },
]

const router = new Router({
  mode: 'history',
  routes: routes,
})

export default router
