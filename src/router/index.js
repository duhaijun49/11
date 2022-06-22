import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import container from '@/components/container'
import nextTick from '@/components/nextTick'
import storePage from '@/components/storePage'
import HomePage from '@/components/HomePage'
import Vuex from '@/components/Vuex/Vuex'
import routerVuex from '@/components/Vuex/routerVuex'
import es6 from '@/components/Es6/Es6'
import var1 from '@/components/Es6/var'
import class1 from '@/components/Es6/class'
import classPage from '@/components/Es6/classPage'
import function1 from '@/components/Es6/function'
import array1 from '@/components/Es6/array'
import export1 from '@/components/Es6/export1'
import promise1 from '@/components/Es6/promise'
import async1 from '@/components/Es6/async'
import new1 from '@/components/Es6/new'
import GJJS from '@/components/GJJS/GJJS'
import prototype1 from '@/components/GJJS/prototype'
import echarts from '@/components/echarts'

// 导入全局的样式表
import '../assets/css/base.css'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HomePage',
      component: HomePage,
      redirect: '/HelloWorld',
      children: [{
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        }, {
          path: '/Vuex',
          name: 'Vuex',
          component: Vuex
        }, {
          path: '/routerVuex',
          name: 'routerVuex',
          component: routerVuex
        }, {
          path: '/container',
          name: 'container',
          component: container
        }, {
          path: '/nextTick',
          name: 'nextTick',
          component: nextTick
        }, {
          path: '/storePage',
          name: 'storePage',
          component: storePage
        }, {
          path: '/es6',
          name: 'es6',
          component: es6,
          redirect: '/var1',
          children: [{
            path: '/var1',
            name: 'var1',
            component: var1
          }, {
            path: '/class1',
            name: 'class1',
            component: class1,
            children: [{
              path: '/classPage',
              name: 'classPage',
              component: classPage
            }, ]
          }, {
            path: '/function1',
            name: 'function1',
            component: function1
          }, {
            path: '/array1',
            name: 'array1',
            component: array1
          }, {
            path: '/export1',
            name: 'export1',
            component: export1
          }, {
            path: '/promise1',
            name: 'promise1',
            component: promise1
          }, {
            path: '/async1',
            name: 'async1',
            component: async1
          }, {
            path: '/new1',
            name: 'new1',
            component: new1
          }, ]
        },
        {
          path: '/GJJS',
          name: 'GJJS',
          component: GJJS,
          redirect: '/prototype1',
          children: [{
            path: '/prototype1',
            name: 'prototype1',
            component: prototype1
          }, ]
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: echarts,
        }
      ]
    },

  ]
})
