import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'


Vue.component('x-button',Button)
Vue.component('x-icon',Icon)
Vue.component('x-button-group',ButtonGroup)
Vue.component('x-input',Input)
Vue.component('x-row',Row)
Vue.component('x-col',Col)
Vue.component('x-layout',Layout)
Vue.component('x-header',Header)
Vue.component('x-content',Content)
Vue.component('x-sider',Sider)
Vue.component('x-footer',Footer)
Vue.component('x-toast',Toast)
Vue.use(plugin)


new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: '123'
  },
  created() {
    this.$toast('asasdasdasdd', {
      enableHtml: false,
      closeButton: {
        text: '完成',
        callback() {
          console.log('已经完成')
        }
      },
      autoClose: true,
      // autoCloseDelay: 3,
      position: 'middle'
    })
  },
  methods: {
    showToast() {
      
    }
  }
})

