import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Product from '@/components/Product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product',
      component: HelloWorld
    },
    {
      path: '/gillian',
      name: 'gillian',
      component: Product
    }
  ]
})
