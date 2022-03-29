import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/style.less"
import io from 'socket.io-client'

import Directives from './plugins/directives.js'

const socket = io.connect('http://localhost:8001/chat',{
    path:'/socket.io'
})
const app = createApp(App)
app.config.globalProperties.$socket = socket
app.use(Directives)

app.use(store)
app.use(router)
app.mount('#app')