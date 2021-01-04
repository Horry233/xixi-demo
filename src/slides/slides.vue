<template>
  <div class="x-slides"
    @mouseenter="onMouseEnter" 
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd">
    <div class="x-slides-window" ref="window">
      <div class="x-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="x-slides-dots">
      <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex === n-1}"
        @click="select(n-1)" :data-index="n-1">
        <!-- {{n}} -->
      </span>
    </div>
    <div class="x-slides-left" @click="onClickPrev" v-if="buttonVisible" data-action="prev">
      <x-icon name="left"></x-icon>
    </div>
    <div class="x-slides-right" @click="onClickNext" v-if="buttonVisible" data-action="next">
      <x-icon name="right"></x-icon>
    </div>
  </div>
</template>

<script>
import XIcon from '.././icon'
export default {
  components:{XIcon},
  name: "XiSlides",
  props: {
    selected: {
      type: String,
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayDelay: {
      type: Number,
      default: 3000
    },
    buttonVisible: {
      type: Boolean,
      default: true
    }
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
    if(this.autoPlay) {
      this.playAutomatically()
    }
    this.childrenLength = this.items.length
  },
  updated() {
    this.updateChildren()
  },
  beforeDestroy () {
    this.pause()
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected)
      return index === -1? 0 : index 
    },
    names() {
      return this.items.map((vm) => vm.name)
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === 'XiSlidesItem')
    }
  },
  methods: {
    onClickPrev() {
      this.select(this.selectedIndex-1)
      //先随便给一个timeId,让他在点击是可以是无缝滚动，然后再取消掉，否则timerId会一直为1，不会自动轮播
      this.timerId = 1  
      this.$nextTick(()=> {
        this.timerId = undefined
      })
    },
    onClickNext() {
      this.select(this.selectedIndex+1)
      this.timerId = 1  
      this.$nextTick(()=> {
        this.timerId = undefined
      })
    },
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
    onTouchEnd(e) {
      let endTouchPoint = e.changedTouches[0].clientX
      let distance = this.startTouchPoint - endTouchPoint
      if(distance > 70) {
        this.select(this.selectedIndex + 1)
      } else if(distance <-70 ) {
        this.select(this.selectedIndex - 1)
      }
      this.$nextTick(()=> {
        this.timerId = undefined
        this.playAutomatically()  
      })
    },
    playAutomatically() {
      if(this.timerId) {return} // 如果有定时器，就不要继续添加定时器
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        this.select(newIndex)
        this.timerId = setTimeout(run, this.autoPlayDelay)
      }
      this.timerId = setTimeout(run, this.autoPlayDelay)
      // 用 setTimeout 模拟 setInterval
    },
    pause() {
      clearTimeout(this.timerId)
    },
    select(newIndex) {
      this.lastSelectedIndex = this.selectedIndex
      if (newIndex === -1) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
      this.$emit("update:selected", this.names[newIndex])
    },
    getSelected() {
      let first = this.items[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.items.forEach((vm) => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if(this.timerId) { // 只有在轮播状态才需要进行无缝切换
          if(this.lastSelectedIndex === this.items.length-1 && this.selectedIndex ===0) {
            reverse = false
          }
          if(this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length-1) {
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
  -webkit-tap-highlight-color:rgba(0,0,0,0); //取消点击有蓝色框
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
  &-left,&-right {
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    background-color: rgba(black,0.1);
    width: 20px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: rgba(black,0.3);
    cursor: pointer;
  }
  &-left:active {
    background-color: rgba(black,0.5);
  }
  &-right:active {
    background-color: rgba(black,0.5);
  }
  &-left {
    left: 0;
    border-top-right-radius: 40px;  
    border-bottom-right-radius: 40px;
  }
  &-right {
    right: 0;
    border-top-left-radius: 40px;  
    border-bottom-left-radius: 40px;
  }
}
</style>
