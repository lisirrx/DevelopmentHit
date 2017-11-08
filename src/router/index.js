import Vue from 'vue'
import Router from 'vue-router'
import Github from '@/components/github'
import Resource from 'vue-resource'
import Zhihu from '@/components/zhihu'
import Detail from '@/components/detail'
import V2ex from '@/components/v2ex'
import Gankio from '@/components/gankio'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Github',
      component: Github
    },
    {
      path: '/zhihu',
      name: 'Zhihu',
      component: Zhihu
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/v2ex',
      name: 'V2ex',
      component: V2ex
    },
    {
      path: '/gankio',
      name: 'Gankio',
      component: Gankio
    }
  ]
})
