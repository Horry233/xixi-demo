<template>
  <div>
    <x-slides width="300px" height="200px" :selected.sync="selected">
      <x-slides-item name="1">
        <div class="box" style="background: #00946c;">1</div>
      </x-slides-item>
      <x-slides-item name="2">
        <div class="box" style="background: #00786f;">2</div>
      </x-slides-item>
      <x-slides-item name="3">
        <div class="box" style="background: #01988f;">3</div>
      </x-slides-item>
    </x-slides>
  </div>
</template>

<script>
import Slides from '../../../src/slides/slides'
import SlidesItem from '../../../src/slides/slides-item'

export default {
  components: {
    'x-slides': Slides,
    'x-slides-item': SlidesItem
    },
    data() {
      return {
        selected: '1'
      }
    }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 350px;
  background: #ddd;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>