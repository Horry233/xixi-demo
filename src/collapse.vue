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
      type: String  
    }
  },
  provide() {
    // if(this.accordion) {
      return {
        eventBus: this.eventBus
      }
    // }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
      this.eventBus && this.eventBus.$on('update:selected', (name)=> {
        this.$emit('update:selected', name)
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