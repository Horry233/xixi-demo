<template>
  <div>
    <div class="easy">
      <x-input placeholder="请输入内容"></x-input>
      <x-input value="默认内容"></x-input>
      <x-input disabled value="默认内容"></x-input>
    </div>
    <div class="error">
      <x-input error="用户名不低于两个字"></x-input>
    </div>
    <div class="bindDate">
      <x-input v-model="value"></x-input>
      <p>value: {{value}}</p>
    </div>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components:{'x-input':Input},
  data(){
    return{
      value:'默认内容'
    }
  }
}
</script>
<style lang="scss">
div.easy{
  margin-top: 10px;
  margin-bottom: 8px;
  > input{
    margin-top: 8px;
  }
}

div.bindDate{
  margin-top: 8px;
  height: 64px;
}
</style>