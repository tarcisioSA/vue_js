import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/photos',
    name: 'photos',
    
    component: () => import( '../views/Photos.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
