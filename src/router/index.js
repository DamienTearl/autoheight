import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage/homePage'
import TabModel from '@/components/TabModel/TabModel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HomePage/TabModel/first'
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '/HomePage/TabModel/:show',
          name: 'TabModel',
          component: TabModel
        }
      ]
    }
  ]
})
