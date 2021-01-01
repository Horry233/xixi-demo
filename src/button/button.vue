<template>
  <button class="x-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
    <x-icon v-if="icon && !loading" :name="icon" class="icon"></x-icon>
    <x-icon class="loading icon" v-if="loading" name="loading"></x-icon>
    <div class="x-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'XiButton',
  props: { // 从index传入
    icon: {}, 
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) { // 验证传入的值是否正确 (属性检测器)
        return value !== 'left' && value !== 'right' ? false : true
      }
    },
    loading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      
    },
    components: {
      'x-icon': Icon
    }
}
</script>

<style scoped lang="scss">
@import "../../styles/var";

.x-button {
  font-size: $font-size; 
  height: $button-height; 
  padding: 0 1em;
  border-radius: $border-radius; 
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon { // 默认顺序icon => content
    order: 1;
    margin-right: .1em; 
  }
  > .x-button-content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0; // 清除上面的样式
      margin-left: .1em;
    }
    > .x-button-content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>