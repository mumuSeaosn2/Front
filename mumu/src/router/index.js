/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import RoomView from '../views/RoomView.vue'
import FriendView from '../views/FriendView.vue'
import store from '../store/index.js'
import ChatView from '../views/ChatView.vue'

const reject = (to,from,next) => {
  if(!(store.state.isLogin)){
    alert('로그인 부탁드립니다.');
    next("/login");
  }
  else{
    next();
  }
}

const auth = (to,from,next) => {
  console.log(store.state.isLogin);
  if(store.state.isLogin){
    alert('이미 로그인 되었습니다.');
    next("/");
  }
  else{
    next();
  }
}

const routes = [
  {
    path:'/room',
    name:'room',
    //beforeEnter: reject,
    component:RoomView,
  },
  {
    path: '/login',
    name: 'login',
    //beforeEnter: auth,
    component: LoginView
  },
  {
    path:'/register',
    name:'register',
    component: RegisterView
  },
  {
    path:'/friend',
    name: 'friend',
    component: FriendView,
  },
  {
    path:'/chat',
    name:'chat',
    component: ChatView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
