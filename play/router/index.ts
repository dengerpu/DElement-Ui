import {createRouter, createWebHashHistory} from "vue-router"
import { computed } from 'vue';

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
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import("../views/checkbox.vue")
  },
  {
    path: '/checkbox-group',
    name: 'checkbox-group',
    component: () => import("../views/checkbox-group.vue")
  },
  {
    path: '/transfer',
    name: 'transfer',
    component: () => import("../views/transfer.vue")
  },
  {
    path: '/message',
    name: 'message',
    component: () => import("../views/message.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
