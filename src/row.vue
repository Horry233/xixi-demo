<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XiRow',
  props: {
    gutter: {
      type: [Number,String]
    }
  },
  mounted() { // created的时候，还没有children
    this.$children.forEach( (vm)=>{
      vm.gutter = this.gutter
    })
  },
  computed: {
    rowStyle() {
      return {
        marginLeft:-this.gutter/2 + 'px', 
        marginRight:-this.gutter/2 + 'px'
      }
    } 
  }

};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>

