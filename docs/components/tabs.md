---
title: Tabs - 标签
---
# 标签

**使用方法**

#### 基本用法

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 示例代码
::: details 点击查看源码
```vue
<x-tabs :selected="selected">
  <x-tabs-head>
    <x-tabs-item name="1">标题一</x-tabs-item>
    <x-tabs-item name="2">标题二</x-tabs-item>
    <x-tabs-item name="3">标题三</x-tabs-item>
    <x-tabs-item disabled name="4">标题四</x-tabs-item>
  </x-tabs-head>
  <x-tabs-body>
    <x-tabs-pane name="1">内容1</x-tabs-pane>
    <x-tabs-pane name="2">内容2</x-tabs-pane>
    <x-tabs-pane name="3">内容3</x-tabs-pane>
    <x-tabs-pane name="4">内容4</x-tabs-pane>
  </x-tabs-body>
</x-tabs>

<script>
export default {
  data() {
    return {
      selected: '1',
    }
  }
}
</script>
```
:::
# Attributes

### Tabs

|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|selected| 当前选中 | String |name| --

### TabsHeadItem 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String |--|-- 
|disabled|设置是否禁用|Boolean|true、false|false

### TabsBodyPane
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String |--|-- 