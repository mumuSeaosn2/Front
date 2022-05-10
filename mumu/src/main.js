import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/style.less"
import axios from 'axios'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000',{
    cors:{origin:'*'}
})
const app = createApp(App)
axios.defaults.withCredentials = true;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$socket = socket


app.use(store)
app.use(router)
app.mount('#app')