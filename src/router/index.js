import Vue from 'vue'
import Router from 'vue-router'
import USmap from '@/views/usmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'usmap',
      component: USmap
    }
  ]
})
