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
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| icon | 设置内置的icon |    String | settings，info，left，right，down, download，loading，like，error | -- 
|iconPosition|图标位置|String|left、right|left
| loading      | 加载状态      |  Boolean |true、false| false
| disabled      | 禁用      |  Boolean |true、false| false