import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import ChatView from '../views/ChatView.vue'
import FriendView from '../views/FriendView.vue'


const routes = [
  {
    path: '/login',
    name: 'home',
    component: HomeView
  },
  {
    path:'/register',
    name:'register',
    component: RegisterView
  },
  {
    path:'/chat',
    name:'chat',
    component: ChatView
  },
  {
    path:'/friend',
    name:'friend',
    component: FriendView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
