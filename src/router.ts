import { createRouter, createWebHistory } from 'vue-router'
import recipeView from './components/recipeView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: recipeView,
    } /* ,
      {
        path: '/about',
        component: () => import('@/views/About.vue'),
      }, */,
  ],
})
