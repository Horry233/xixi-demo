---
title: Layout - 布局
---
# 布局

**使用方法**

### 布局一

#### 预览

<ClientOnly>  
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 示例代码
::: details 点击查看源码
```vue
<x-layout style="color: white; margin-bottom:50px;">
  <x-header style="height: 50px; background:#01988F;">
    header
  </x-header>
  <x-content style="height: 100px; background:#00786F;">
    content
  </x-content>
  <x-footer style="height: 50px; background:#01988F;">
    footer
  </x-footer>
</x-layout>
```
:::
### 布局二

#### 预览

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 示例代码
::: details 点击查看源码
```vue
<x-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <x-header style="height: 50px; background:#01988F;">
    header
  </x-header>
  <x-layout>
    <x-sider style="height: 100px; background:#00946C; width:200px;">
      sider
    </x-sider>
    <x-content style="height: 100px; background:#00786F;">
      content
    </x-content>
  </x-layout>
  <x-footer style="height: 50px; background:#01988F;">
    footer
  </x-footer>
</x-layout>
```
:::
### 布局三

#### 预览

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 示例代码
::: details 点击查看源码
```vue
<x-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <x-sider style=" background:#00946C; width:200px;">
    sider
  </x-sider>
  <x-layout>
    <x-header style="height: 50px; background:#01988F;">
      header
    </x-header>
    <x-content style="height: 100px; background:#00786F;">
      content
    </x-content>
    <x-footer style="height: 50px; background:#01988F;">
      footer
    </x-footer>
  </x-layout>
</x-layout>
```
:::