import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import './assets/Inter Web/inter.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
