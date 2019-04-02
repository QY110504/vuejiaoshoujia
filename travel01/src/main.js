// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//点击触发时间延迟3S
import fastClick from 'fastclick'
//初始化时间
import '@/assets/styles/reset.css'
//1px边框,多倍屏幕
import 'styles/border.css'
//字体
import 'styles/iconfont.css'
//引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入轮播图的css
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

fastClick.attach(document.body);
//使用了轮播图
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
