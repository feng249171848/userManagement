import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers'
import About from '@/components/About'
import CustomersAdd from '@/components/CustomersAdd'
import CustomerDetails from '@/components/CustomerDetails'
import CustomerEdit from '@/components/CustomerEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Customers},
    {path: '/about', component: About},
    {path: '/add', component: CustomersAdd},
    {path: '/customer/:id', component: CustomerDetails},
    {path: '/edit/:id', component: CustomerEdit}
  ],
  mode:"history",
  base:"users"
})
