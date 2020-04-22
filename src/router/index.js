import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/ProFile/ProFile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopLatings from '../pages/Shop/ShopLatings/ShopLatings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '/shop/latings',
          component: ShopLatings
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
