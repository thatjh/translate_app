import Vue from 'vue'
import Router from 'vue-router'
import TransContainer from '@/components/TransContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TransContainer',
      component: TransContainer
    }
  ]
})
