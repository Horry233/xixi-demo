<template>
  <button class="x-button" :class="{[`icon-${iconPosition}`]: true}">
    <x-icon v-if="icon" :name="icon"></x-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: { // 从index传入
    icon: {}, 
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) { // 验证传入的值是否正确 (属性检测器)
        return value !== 'left' && value !== 'right' ? false : true
      }
    }
    }
}
</script>

<style scoped lang="scss">
.x-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--button-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon { // 默认顺序icon => content
    order: 1;
    margin-right: .1em; 
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0; // 清除上面的样式
      margin-left: .1em;
    }
    > .content {
      order: 1;
    }
  }
}
</style>