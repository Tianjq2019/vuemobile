import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index'
import Home   from '../components/index/Home'
import User   from '../components/index/User'
import Dongtai   from '../components/index/Dongtai'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
          {
            path: '',
            name: 'Home',
            component: Home
          },
          {
            path: '/dongtai',
            name: 'Dongtai',
            component: Dongtai
          },
          {
            path: '/user',
            name: 'User',
            component: User
          }
      ]
    }
  ]
})
