import { createApp } from 'vue'
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import Top from './components/pages/Top.vue'
import Styleguide from './components/pages/Styleguide.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Top },
  { path: '/styleguide', component: Styleguide },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

import App from './App.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')
