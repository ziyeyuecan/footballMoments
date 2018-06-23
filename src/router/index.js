import Vue from 'vue'
import Router from 'vue-router'
import tarbarPage from '../pages/tarbarPage'
import homePage from '../pages/homePage'
import pay from '../pages/pay'
import settle from '../pages/settle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tarbarPage',
      component: tarbarPage,
      children: [
        {
          path: 'homePage',
          name: 'homePage',
          component: homePage
        }, {
          path: 'pay',
          name: 'pay',
          component: pay
        }, {
          path: 'settle',
          name: 'settle',
          component: settle
        }
      ]
    }
  ]
})
