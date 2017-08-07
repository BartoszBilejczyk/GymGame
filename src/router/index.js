import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Dashboard from '@/components/Dashboard'
import Leaderboard from '@/components/Dashboard/Points'
import Activity from '@/components/Dashboard/Activity'
import Achievements from '@/components/Dashboard/Achievements'
import Recipes from '@/components/Dashboard/Recipes'
import Auth from '@/components/Auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    },
    {
      path: '/achievements',
      name: 'Achievements',
      component: Achievements
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes
    }
  ]
})
