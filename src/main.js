// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './vuex/store'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import 'bootstrap/dist/css/bootstrap.css'

// 注册两个插件
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {
    path: '/time-entries',
    component: TimeEntries,
    children: [{
      // 当 /time-entries/log-time 匹配成功，./components/LogTime组件会被渲染在TimeEntries的<router-view>中
      path: 'log-time',
      // 懒加载(异步加载)
      component: resolve => require(['./components/LogTime'], resolve)
    }]
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  store, /* 通过在根实例中注册store选项，该store实例会注入到根组件下的所有组件中 */
  router,
  ...App /*... es6扩展运算符*/
}).$mount('#app')
