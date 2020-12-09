<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue"

export default {
  name: "XiTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        // $children 指的是子组件，不是子元素
        console &&
          console.warn &&
          console.warn("tabs的子组件只能是tabs-head 或者tabs-body")
      }
    },
    selectTab() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === "XiTabsHead") {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === "XiTabsItem" &&
              childVm.name === this.selected) {
              this.eventBus.$emit("update:selected", this.selected, childVm)
            }
          })
        }
      })
    },
  },
  mounted() {
    this.checkChildren()
    this.selectTab()
  },
}
</script>

<style>
</style>
