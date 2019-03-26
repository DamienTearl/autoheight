import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage/homePage'
import TabModel1 from '@/components/TabModel/TabModel_1'
import TabModel2 from '@/components/TabModel/TabModel_2'
import TabModel3 from '@/components/TabModel/TabModel_3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HomePage/TabModel1'
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '/HomePage/TabModel1',
          name: 'TabModel1',
          component: TabModel1
        },
        {
          path: '/HomePage/TabModel2',
          name: 'TabModel2',
          component: TabModel2
        },
        {
          path: '/HomePage/TabModel3',
          name: 'TabModel3',
          component: TabModel3
        }
      ]
    }
  ]
})
