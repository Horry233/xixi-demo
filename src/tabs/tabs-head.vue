<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XiTabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item,vm)=> {
      let {width,height,top,left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      // this.$refs.line.style.left = `${left}px`
      this.$refs.line.style.left = `${vm.$el.offsetLeft}px`
      
    })
  }
}
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
$green: rgb(67, 137, 218);
$green: #01988F;
$border-color: #ddd;
.tabs-head {
  position: relative;
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $green;
    transition: all 0.2s linear;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
}
</style>