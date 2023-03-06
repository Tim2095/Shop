import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProductPage from '../pages/ProductPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import ShoppingCart from '../pages/ShoppingCart.vue'
import ProductDetails from '../pages/ProductDetails.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductPage,
    },
    {
      path: '/products/:productId',
      component: ProductDetails,
      props: true
    },
    {
      path: '/about', 
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/shoppingCart',
      name: 'cart',
      component: ShoppingCart,
    }
  ]
})

export default router
