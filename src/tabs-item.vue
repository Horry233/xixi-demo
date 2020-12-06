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
      this.eventBus.$emit('update:selected', this.name,this)
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: blue;
.tabs-item {
  // flex-grow: 1;
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
  }
}


</style>