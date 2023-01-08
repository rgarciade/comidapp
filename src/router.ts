import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const routes: any = [{ path: '/hello', component: HelloWorld }]

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HelloWorld,
    } /* ,
      {
        path: '/about',
        component: () => import('@/views/About.vue'),
      }, */,
  ],
})
