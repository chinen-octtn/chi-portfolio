import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import Top from './components/pages/Top.vue'
import Styleguide from './components/pages/Styleguide.vue'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Top },
  { path: '/styleguide/', component: Styleguide },
]

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes }
)
