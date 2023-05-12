import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import iconComp from './components/iconComp.vue'

const status = createPinia()

const app = createApp(App)

//uses
app.use(status)
app.use(router)
//components
app.component('IconComp', iconComp)

//mount
app.mount('#app')
