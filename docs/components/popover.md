---
title: Popover - 弹出框
---
# 弹出框

**使用方法**

### 支持 HTML

#### 预览

<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 示例代码
::: details 点击查看源码
```vue
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
```
:::
### 支持 hover 触发

#### 预览

<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 示例代码
::: details 点击查看源码
```vue
<x-popover position="left" trigger="hover">
  <x-button>左边弹出</x-button>
  <template slot="content">
    弹出内容
  </template>
</x-popover>
<x-popover trigger="hover">
  <x-button>上方弹出</x-button>
  <template slot="content">
    弹出内容
  </template>
</x-popover>
<x-popover position="bottom" trigger="hover">
  <x-button>下方弹出</x-button>
  <template slot="content">
    弹出内容
  </template>
</x-popover>
<x-popover position="right" trigger="hover">
  <x-button>右边弹出</x-button>
  <template slot="content">
    弹出内容
  </template>
</x-popover>
```
:::
# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|position| 设置弹出框相对触发区域的位置 | String |left、right、top、bottom| top
|trigger| 设置触发模式 | String |click、hover|click