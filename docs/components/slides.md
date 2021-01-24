---
title: Slides 轮播图
---
# 轮播图

**使用方法**

#### 预览

<ClientOnly>
<slides-demos></slides-demos>
</ClientOnly>

#### 示例代码：
::: details 点击查看源码
```vue
<div>
  <x-slides width="300px" height="200px" :selected.sync="selected">
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
```
:::
# Attributes
### Slides 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| selected | 初始图片序号 |  String | -- | --
|autoPlay|是否自动播放|Boolean|true、false|true
| autoPlayDelay      | 自动播放的延时 |  Number | --| 3000
| buttonVisible      | 左右按键的显示  |  Boolean |true、false| true

### SlidesItem 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| name | 图片序号，必填 |  String | -- | --
