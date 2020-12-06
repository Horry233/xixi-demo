<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XiTabsHead',
  inject: ['eventBus']
}
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid pink;
  .actions-wrapper {
    margin-left: auto;
  }
}
</style>