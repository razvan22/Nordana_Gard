import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Booking from '../views/Booking.vue'
import Gallery from '../views/Gallery.vue'
import About from '../views/About.vue'
import BookingInfo from '../views/BookingInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bookinginfo',
    name: 'BookingInfo',
    component: BookingInfo
  },
  {
    path: '/about',
    name : 'About',
    component: About

  },
  {
    path: '/booking',
    name : 'Booking',
    component: Booking

  },
  {
    path: '/gallery',
    name : 'Gallery',
    component: Gallery
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
