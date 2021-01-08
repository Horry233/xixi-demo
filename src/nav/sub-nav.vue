<template>
  <div class="x-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="x-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XiSubNav',
  data() {
    return {
      open: false
    } 
  },
  methods: {
    onClick() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
.x-sub-nav {
  position: relative;
  > span {
    padding: 10px 20px;
    display: inline-block;
    vertical-align: top;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
    white-space: nowrap;
  }
}
.x-sub-nav .x-sub-nav .x-sub-nav-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
}
</style>