import { createRouter, createWebHistory } from 'vue-router'
import Index from './components/Index.vue'
import Projects from './components/Projects.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/projects', component: Projects },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
