import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: resolve => require(['../views/index.vue'], resolve)
    },
    {
      path: '/table01',
      name: '充值记录',
      component: resolve => require(['../views/table01.vue'], resolve)
    },
    {
      path: '/table02',
      name: '套餐列表',
      component: resolve => require(['../views/table02.vue'], resolve)
    },
    {
      path: '/table03',
      name: '积分记录',
      component: resolve => require(['../views/table03.vue'], resolve)
    },
    {
      path: '/table04',
      name: '分享',
      component: resolve => require(['../views/table04.vue'], resolve)
    },
    {
      path: '/table05',
      name: '分享',
      component: resolve => require(['../views/table05.vue'], resolve)
    }
  ]
})
