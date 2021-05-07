import { createApp } from 'vue'
import Top from './components/pages/Top.vue'
import Styleguide from './components/pages/Styleguide.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Top },
    { path: '/styleguide', component: Styleguide },
  ],
})

import App from './App.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')
