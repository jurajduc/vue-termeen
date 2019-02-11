import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Settings from './views/Settings.vue'
import Calendar from './views/Calendar.vue'
import Patients from './views/Patients.vue'
import Help from './views/Help.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/calendar/appointment/:appointmentId',
      name: 'CalendarAppointment',
      component: Calendar
    },
    {
      path: '/patients',
      name: 'Patients',
      component: Patients
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
