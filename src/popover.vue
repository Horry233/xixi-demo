<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" 
    :class="{[`position-${position}`] : true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "XiPopover",
  data() {
    return {
      visible: false
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top','bottom','left','right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click','hover'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    openEvent() {
      if(this.trigger === 'click') {
        return 'click'
      }else {
        return 'mouseenter'
      }
    },
    closeEvent() {
      if(this.trigger === 'click') {
        return 'click'
      }else {
        return 'mouseleave'
      }
    }
  },
  mounted() {
    if(this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    }else {
      this.$refs.popover.addEventListener('mouseenter', this.open) 
      this.$refs.popover.addEventListener('mouseleave', this.close) 
    }
  },
  beforeDestroy() {
     if(this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    }else {
      this.$refs.popover.removeEventListener('mouseenter', this.open) 
      this.$refs.popover.removeEventListener('mouseleave', this.close) 
    }
  },
  methods: {
    positionContent() {
      const {contentWrapper,triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const {width,height,top,left,} = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect()
      let x = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height-height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height-height2) / 2,
          left: left + width + window.scrollX
        }
      }
      contentWrapper.style.top =  x[this.position].top + 'px'
      contentWrapper.style.left =  x[this.position].left + 'px'
    },
    onClickDocument(e) {
        //点击的是popover或者popover里面
        if (this.$refs.popover && 
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
          return
        }else if(this.$refs.contentWrapper.contains(e.target)) {
          return
        }else {
          this.close()
        }
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        //visible == false时，取不到$refs
        this.positionContent()
        document.addEventListener("click", this.onClickDocument)
      })
    },
    close() {
      this.visible = false 
      document.removeEventListener("click", this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        }else {
          this.open()
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px rgba(88, 78, 78, 0.5));
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  background-color: white;
  &::before,&::after {
    position: absolute;
    content: '';
    display: block;
    border: 10px solid transparent; 
    width: 0;
    height: 0;
   }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,&::after {
      left: 10px;
    }
    &::before {
      top: 100%;
      border-top-color: #333;
      border-bottom: none;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: white;
      border-bottom: none;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,&::after {
      left: 10px;
    }
    &::before {
      bottom: 100%;
      border-bottom-color: #333;
      border-top: none;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: white;
      border-top: none;
    }
  }
  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before,&::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      left: 100%;
      border-left-color: #333;
      border-right: none;
    }
    &::after {
      left: calc(100% - 1px);
      border-left-color: white;
      border-right: none;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,&::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      right: 100%;
      border-right-color: #333;
      border-left: none;
    }
    &::after {
      right: calc(100% - 1px);
      border-right-color: white;
      border-left: none;
    }
  }
}
</style>
