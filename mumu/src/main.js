import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/style.less"

 



import Directives from './plugins/directives.js'


import io from 'socket.io-client';
//const socket = io('http://localhost:8001');
const socket = io.connect('http://localhost:8001/chat', {
      path: '/socket.io',
    });





const app = createApp(App)

app.config.globalProperties.$socket = socket; 
//Vue.use(VueMaterial) 
app.use(Directives)




app.use(store)
app.use(router)
app.mount('#app')