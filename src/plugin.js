import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor
      toast.$slots.default = [message]
      toast.$mount() // 手动挂载元素到dom上，否则取不到$el
      document.body.appendChild(toast.$el)
    }
  }
}