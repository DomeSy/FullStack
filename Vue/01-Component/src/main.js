// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './assets/css/common.css'
import "lib-flexible"
import Vconsole from "vconsole" //调试工具
import "./assets/js/iView.js"
import "./assets/js/vue.js"

const FastClick = require('fastclick')

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// const vConsole = new Vconsole();

FastClick.attach(document.body) //去掉点击延迟300毫秒

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


// Vue.use(vConsole);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
