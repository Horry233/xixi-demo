import Toast from "./toast"

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          // 如果之前的toast关闭了，不需要多次关闭
          currentToast = null
        },
      })
    }
  },
}

/* helpers*/
function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount() // 手动挂载元素到dom上，否则取不到$el
  toast.$on("close", onClose)
  document.body.appendChild(toast.$el)
  return toast
}
