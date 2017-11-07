import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Github from '@/components/github'
import Resource from 'vue-resource'
import Zhihu from '@/components/zhihu'
import Detail from '@/components/detail'


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
    }
  ]
})
