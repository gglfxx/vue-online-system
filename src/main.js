import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Cookies from 'js-cookie'
import Element from 'element-ui'
import VueTouch from 'vue-touch'
import VueLazyload from 'vue-lazyload'
import './styles/element-variables.scss'
import '@/styles/font.scss';

Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离
}
// options 为可选参数，无则不传
Vue.use(VueLazyload);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})