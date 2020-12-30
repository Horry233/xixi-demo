<template>
  <div class="x-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="x-slides-window" ref="window">
      <div class="x-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="x-slides-dots">
      <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex === n-1}"
        @click="select(n-1)">
        {{n-1}}
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
      return this.names.indexOf(this.selected) || 0
    },
    names() {
      return this.$children.map((vm) => vm.name)
    },
  },
  methods: {
    playAutomatically() {
      if(this.timerId) {return} // 如果有定时器，就不要继续添加定时器
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        if (newIndex === -1) {
          newIndex = this.names.length + 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.select(newIndex)
        this.timerId = setTimeout(run, 3000)
      }
      this.timerId = setTimeout(run, 3000)
      // 用 setTimeout 模拟 setInterval
    },
    onMouseEnter() {
      this.pause()
      this.timerId = undefined
    },
    onMouseLeave() {
      this.playAutomatically()
    },
    pause() {
      clearTimeout(this.timerId)
    },
    select(index) {
      this.lastSelectedIndex = this.selectedIndex
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
        if(this.lastSelectedIndex === this.$children.length-1 && this.selectedIndex ===0) {
          reverse = false
        }
        if(this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length-1) {
          reverse = true
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
  border: 1px solid black;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    > span {
      &.active {
        background: red;
      }
    }
  }
}
</style>
