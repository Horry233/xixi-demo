<template>
  <div>
    <x-slides class="wrapper" width="300px" height="200px" :selected.sync="selected" :buttonVisible="false">
      <x-slides-item name="1">
        <div class="box">1</div>
      </x-slides-item>
      <x-slides-item name="2">
        <div class="box">2</div>
      </x-slides-item>
      <x-slides-item name="3">
        <div class="box">3</div>
      </x-slides-item>
    </x-slides>
  </div>
</template>
<script>
import Slides from "./slides/slides"
import SlidesItem from "./slides/slides-item"

export default {
  name: "demo",
  components: {
    "x-slides": Slides,
    "x-slides-item": SlidesItem,
  },
  data() {
    return {
      selected: "",
    }
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  margin: 40px;
}
.box {
  width: 100%;
  height: 350px;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
