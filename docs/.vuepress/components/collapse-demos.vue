<template>
  <div class="wrapper">
    <div>
      <x-collapse :selected.sync="selectedTab" accordion>
        <x-collapse-item title="少而好学" name="1">如日出之阳</x-collapse-item>
        <x-collapse-item title="壮而好学" name="2">如日中之光</x-collapse-item>
        <x-collapse-item title="老而好学" name="3">如炳烛之光</x-collapse-item>
      </x-collapse>
    </div>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse/collapse'
import CollapseItem from '../../../src/collapse/collapse-item'

export default {
  data() {
    return {
      selectedTab: ['1']
    }
  },
  components: {
    'x-collapse': Collapse,
    'x-collapse-item': CollapseItem
  }
}
</script>
<style scoped>
.wrapper{
  margin-top: 10px;
  height: 180px;
}
</style>