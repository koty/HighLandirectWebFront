import Vue from 'vue'
import Router from 'vue-router'
import CustomerList from '@/components/CustomerList'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/customers/',
      name: 'CustomerList',
      component: CustomerList
    },
    {
      path: '/orders/:order_no',
      name: 'OrderList',
      component: Order
    }
  ]
})
