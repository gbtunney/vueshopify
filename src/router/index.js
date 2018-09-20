import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Toggle',
      component: HelloWorld2
    },
    {
      path: '/gillian',
      name: 'gillian',
      component: HelloWorld
    }
  ]
})
