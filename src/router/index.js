import Vue from 'vue'
import Router from 'vue-router'
import LiveCenter from '@/components/LiveCenter'
import Standings from '@/components/standings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'livecenter',
      component: LiveCenter
    },
    {
      path: '/standings',
      name: 'Standings',
      component: Standings
    }
  ]
})
