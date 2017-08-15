import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CustomerList from '@/components/CustomerList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/customers/',
      name: 'CustomerList',
      component: CustomerList
    }
  ]
})
