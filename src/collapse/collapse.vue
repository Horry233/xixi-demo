<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "XiCollapse",
  data() {
    return {
      eventBus: new Vue()
    }
  },
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array  
    }
  },
  provide() {
      return {
        eventBus: this.eventBus
      }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected) // 传给eventBus

    this.eventBus && this.eventBus.$on('update:addSelected', (name)=> {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if(this.accordion) {
        selectedCopy = [name]
      }else {
        selectedCopy.push(name)
      }
      this.$emit('update:selected', selectedCopy) // 传到上一级
      this.eventBus.$emit('update:selected', selectedCopy) // 传给eventBus
    })
    this.eventBus && this.eventBus.$on('update:removeSelected', (name)=> {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index,1)
      this.$emit('update:selected', selectedCopy)
      this.eventBus.$emit('update:selected', selectedCopy)

    })
    // 遍历让所有item都接收accordion
    this.$children.forEach( (vm)=> {
      vm.accordion = this.accordion
    })
  }

}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}


</style>