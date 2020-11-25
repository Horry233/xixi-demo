<template>
  <div class="col" :class="colClass"
  :style="colStyle">
  <!-- <div style="border: 1px solid green;height: 100px"> -->
    <slot></slot>
  <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "XiCol",
  props: {
    span: {
      type: [Number,String]
    },
    offset: {
      type: [Number,String]
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    /* 
    因为gutter是从row传过来的，他是在mounted之后才会传过来，放在data里面的话是created的时候被读取，
    读取之后便不会再改变，所以得不到正确的gutter
    */
    colStyle() { 
      return {
        paddingLeft: this.gutter/2 + 'px', 
        paddingRight: this.gutter/2 + 'px'
      }
    },
    colClass() {
      let {span,offset} = this
      return [span && `col-${span}`, offset && `offset-${offset}`]
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  // height: 100px;
  // background-color: skyblue;  
  // width: 50%;
  // border: 1px solid red;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>

