<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XiTabsPane',
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String|Number,
      default: true
    },
  },
   created(){
    this.eventBus.$on('update:selected', (name)=> {
      // name === this.name ? this.active = true : this.active = false
      this.active = (name === this.name)
    })
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.tabs-pane {
  padding: 1em;

}

</style>