<template>
  <svg class="x-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'

export default {
  props: ['name']
};
</script>

<style lang="scss">
.x-icon {
      width: 1em;
      height: 1em;
      vertical-align: middle;
    }
</style>