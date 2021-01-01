<template>
  <div style="padding-top: 16px;">
    <div>
      <x-button @click="onClickButton">上方弹出</x-button>
    </div>
  </div>
</template>

<script>
import plugin from '../../../src/plugin'
import Button from '../../../src/button/button'
import Vue from 'vue'

Vue.use(plugin)

export default {
    components: {
    'x-button': Button
    },
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>


<style>
.x-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>