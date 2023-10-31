import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
  {
    path: '/button',
    name: 'button',
    component: () => import("../views/button.vue")
  },
  {
    path: '/button-group',
    name: 'button-group',
    component: () => import("../views/button-group.vue")
  },
  {
    path: '/row-col',
    name: 'row-col',
    component: () => import("../views/row-col.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
