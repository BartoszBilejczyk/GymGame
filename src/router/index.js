import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Add from '@/components/Add'
import Standings from '@/components/Standings'
import History from '@/components/History'
import Budget from '@/components/Budget'
import AdditionalFeatures from '@/components/AdditionalFeatures'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
  // routes: [
  //   {
  //     path: '/',
  //     name: 'Dashboard',
  //     component: Dashboard
  //   },
  //   {
  //     path: '/add',
  //     name: 'Add',
  //     component: Add
  //   },
  //   {
  //     path: '/standings',
  //     name: 'Standings',
  //     component: Standings
  //   },
  //   {
  //     path: '/history',
  //     name: 'History',
  //     component: History
  //   },
  //   {
  //     path: '/budget',
  //     name: 'Budget',
  //     component: Budget
  //   },
  //   {
  //     path: '/additional-features',
  //     name: 'AdditionalFeatures',
  //     component: AdditionalFeatures
  //   }
  // ]
})
