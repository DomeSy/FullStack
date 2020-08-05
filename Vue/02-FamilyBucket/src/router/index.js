import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'

// 1>use一下，VueRouter是一个插件
Vue.use(Router)

// 创建Router
export default new Router({

  // 2>生成一个路由表
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
