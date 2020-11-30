import Toast from "./toast"


let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if(currentToast) {
        currentToast.close()
      }
      currentToast = createToast({Vue,message, propsData: toastOptions})
    }
  },
}



/* helpers*/
function createToast({Vue,message,propsData}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount() // 手动挂载元素到dom上，否则取不到$el
  document.body.appendChild(toast.$el)
  return toast
}