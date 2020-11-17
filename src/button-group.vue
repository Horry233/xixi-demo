<template>
  <div class="x-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.x-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .x-button {
    border-radius: 0;
    margin-left: -1px; // 使边框重叠
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover { // 重叠的边框浮起显示
      position: relative;
      z-index: 1;
    }
  }
}

</style>