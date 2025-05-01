import { createRouter, createWebHistory } from 'vue-router'
import PaymentPage from '../views/PaymentPage.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: PaymentPage
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
