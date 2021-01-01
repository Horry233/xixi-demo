<template>
  <div style="padding-top: 16px;">

    <x-popover position="left">
      <x-button>左边弹出</x-button>
      <template slot="content">
        <strong style="color: #F1453D">加粗的提示</strong>
      </template>
    </x-popover>
    <x-popover>
      <x-button>上方弹出</x-button>
      <template slot="content">
        <a href="http://www.baidu.com">这是个a链接</a>
      </template>
    </x-popover>
    <x-popover position="bottom">
      <x-button>下方弹出</x-button>
      <template slot="content">
        普通文本内容
      </template>
    </x-popover>
    <x-popover position="right">
      <x-button>右边弹出</x-button>
      <template slot="content">
        普通文本内容
      </template>
    </x-popover>

  </div>
</template>

<script>
import Button from '../../../src/button/button'
import Popover from '../../../src/popover'
export default {
  components: {
    'x-button': Button, 
    'x-popover': Popover},
}
</script>
<style>
.ice-popover{
  z-index: 30;
}
</style>