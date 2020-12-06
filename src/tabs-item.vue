<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XiTabsItem',
  inject: ['eventBus'],
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
      console.log(name)
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style>

</style>