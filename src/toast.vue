<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>

    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{
      closeButton.text
    }}</span>
  </div>
</template>

<script>
export default {
  name: "XiToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 50,
    },
    closeButton: {
      type: Object,
      // default如果值为复杂类型，要用函数返回值的形式返回
      // 这是一个浅拷贝，如果有两个相同的组件，他们的数据会相互影响，所以要return
      default() {
        return {
          text: "关闭",
          callback: undefined,
        }
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top','bottom','middle'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this) // this 指的是整个toast实例
      }
    },
    log() {
      console.log("test")
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        // 在plugin里面写的是先mount，再add到body上，所以要延时获取wrapper的高度
        this.$refs.line.style.height =
          this.$refs.wrapper.getBoundingClientRect().height + "px"
      })
    },
  },
  computed: {
    toastClasses() {
      return {
          [`position-${this.position}`]: true
        }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);

.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0 16px;
  .message {
    padding: 5px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>
