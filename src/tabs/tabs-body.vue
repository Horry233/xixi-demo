<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XiTabsBody',
  inject: ['eventBus']

}
</script>

<style>

</style>