<template>
  <div class="x-slides" 
  @mouseenter="onMouseEnter" 
  @mouseleave="onMouseLeave"
  @touchstart="onTouchStart"
  @touchmove="onTouchMove"
  @touchend="onTouchEnd"
  >
    <div class="x-slides-window" ref="window">
      <div class="x-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="x-slides-dots">
      <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex === n-1}"
        @click="select(n-1)">
        <!-- {{n}} -->
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "XiSlides",
  props: {
    selected: {
      type: String,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouchPoint: undefined
    }
  },
  mounted() {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length
  },
  updated() {
    this.updateChildren()
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected)
      return index === -1? 0 : index 
    },
    names() {
      return this.$children.map((vm) => vm.name)
    },
  },
  methods: {
    onMouseEnter() {
      this.pause()
      this.timerId = undefined
    },
    onMouseLeave() {
      this.playAutomatically()
    },
    onTouchStart(e) {
      this.pause()
      this.startTouchPoint = e.touches[0].clientX
    },
    onTouchMove(e) {

    },
    onTouchEnd(e) {
      let endTouchPoint = e.changedTouches[0].clientX
      let distance = this.startTouchPoint - endTouchPoint
      if(distance > 100) {
        console.log('往右滑');
        this.select(this.selectedIndex + 1)
      } else if(distance <-100 ) {
        console.log('往左滑');
        this.select(this.selectedIndex - 1)
      }
      this.playAutomatically()  
    },
    playAutomatically() {
      if(this.timerId) {return} // 如果有定时器，就不要继续添加定时器
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        
        this.select(newIndex)
        this.timerId = setTimeout(run, 3000)
      }
      this.timerId = setTimeout(run, 3000)
      // 用 setTimeout 模拟 setInterval
    },
    pause() {
      clearTimeout(this.timerId)
    },
    select(index) {
      this.lastSelectedIndex = this.selectedIndex
      if (index === -1) {
          index = this.names.length - 1
        }
        if (index === this.names.length) {
          index = 0
        }
      this.$emit("update:selected", this.names[index])
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach((vm) => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if(this.timerId) { // 只有在轮播状态才需要进行无缝切换
          if(this.lastSelectedIndex === this.$children.length-1 && this.selectedIndex ===0) {
            reverse = false
          }
          if(this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length-1) {
            reverse = true
          }
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = selected
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.x-slides {
  position: relative;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    > span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      margin: 0 0.1em;
      background-color: rgba(black,0.1);
      cursor: pointer;
      &.active {
        background-color: rgba(black,0.5);
      }
    }
  }
}
</style>
