import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProductOptionSelector from '@/components/ProductOptionSelector'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Toggle',
      component: ProductOptionSelector
    },
    {
      path: '/gillian',
      name: 'gillian',
      component: HelloWorld
    }
  ]
})
