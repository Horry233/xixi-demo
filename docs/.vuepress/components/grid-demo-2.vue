<template>
  <div style="padding-top: 16px;">
    <x-row class="demoRow" gutter="10">
      <x-col span="8">
        <div class="demoCol">8</div>
      </x-col>
      <x-col span="8">
        <div class="demoCol">8</div>
      </x-col>
      <x-col span="8">
        <div class="demoCol">8</div>
      </x-col>
    </x-row>
    <x-row class="demoRow" gutter="10">
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
    </x-row>

  </div>
</template>

<script>
import Row from '../../../src/grid/row'
import Col from '../../../src/grid/col'

export default {
  components: {
    'x-row':Row,
    'x-col':Col
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>