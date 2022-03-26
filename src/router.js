import { createRouter, createWebHashHistory } from 'vue-router';
import TopPage from '@/components/TopPage'
import SubPage01 from '@/components/SubPage01'

const routes = [
  { path: '/', component: TopPage },
  { path: '/page01', component: SubPage01 },
  { path: '/home', redirect: '/' },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
