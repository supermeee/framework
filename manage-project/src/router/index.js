import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/templates/Home'
import Page01 from '@/templates/Page01'
import Page02 from '@/templates/Page02'
import Page03 from '@/templates/Page03'
import Tasks from '@/templates/Tasks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/page01',
      name: 'Page01',
      component: Page01
    },
    {
      path: '/tasks/create',
      name: 'task-create',
      component: Page02
    },
    {
      path: '/page03',
      name: 'Page03',
      component: Page03
    }
  ]
})
