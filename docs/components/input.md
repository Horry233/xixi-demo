---
title: Input - 输入框
---
# 输入框

**使用方法**

#### 基本用法：

<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

<br>

#### 示例代码：
::: details 点击查看源码
```vue
<x-input placeholder="请输入内容"></x-input>
<x-input value="默认内容"></x-input>
<x-input disabled value="默认内容"></x-input>
<x-input error="用户名不低于两个字"></x-input>

<!--可支持数据绑定-->
<x-input v-model="value"></x-input>
<p>value: {{value}}</p>
```
:::
# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|value| 设置默认内容 | String |--|-- 
|disabled| 是否禁用状态 | Boolean |true, false|false
|readonly| 是否只读状态 | Boolean |true, false|false
|placeholder| 提示信息 | String |--|-- 
|error| 错误信息 | String |--|-- 
