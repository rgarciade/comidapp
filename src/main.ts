import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import iconComp from './components/iconComp.vue'
import infoComp from './components/infoComp.vue'

const status = createPinia()

const app = createApp(App)

//uses
app.use(status)
app.use(router)
//components
app.component('IconComp', iconComp)
app.component('infoComp', infoComp)

//mount
app.mount('#app')
