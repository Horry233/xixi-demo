<template>
  <div class="x-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XiNavItem',
  inject: ['root'],
  props: {
    name: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      selected: false
    }
  },
  created() {
    this.root.addItem(this)
  },
  methods: {
    onClick() {
      this.$emit('add:selected',this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.x-nav-item {
  padding: 10px 20px;
  &.selected {
    background-color: red;
  }
}

</style>