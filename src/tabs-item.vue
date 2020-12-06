<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XiTabsItem',
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created(){
    this.eventBus.$on('update:selected', (name)=> {
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
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-item {
  // flex-grow: 1;
  flex-shrink: 0;
  padding: 0 1em;
  &.active {
    background-color: red;
  }
}


</style>