<template>
  <div class="popover" @click.stop="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
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
      visible: false,
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {width,height,top,left,} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px"
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px"     
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
  mounted() {},
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
  transform: translateY(-100%);
  margin-top: -10px;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  background-color: white;
  &::before,&::after {
    position: absolute;
    left: 10px;
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
  }
  &::before {
    top: 100%;
    border-top-color: #333;
  }
  &::after {
    top: calc(100% - 1px);
    border-top-color: white;
  }
}
</style>
