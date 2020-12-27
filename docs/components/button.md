---
title: Button 按钮
---
# 按钮

**使用方法**

#### 基本用法：

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 示例代码：
::: details 点击查看源码
```vue
<x-button>默认按钮</x-button>
<x-button icon="settings">默认按钮</x-button>
<x-button :loading=loading  @click="loading=!loading">默认按钮</x-button>
<x-button disabled>默认按钮</x-button>
```
:::
# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| icon | 设置内置的icon |    String | settings，info，left，right，down, download，loading，like，error | -- 
|iconPosition|图标位置|String|left、right|left
| loading      | 加载状态      |  Boolean |true、false| false
| disabled      | 禁用      |  Boolean |true、false| false