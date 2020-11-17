import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('x-button',Button)
Vue.component('x-icon',Icon)
Vue.component('x-button-group',ButtonGroup)


new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})