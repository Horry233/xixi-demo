---
title: Collapse - 折叠面板
---
# 折叠面板

**使用方法**

### 基本用法

<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

#### 示例代码
::: details 点击查看源码
```vue
<x-collapse :selected.sync="selectedTab" accordion>
  <x-collapse-item title="少而好学" name="1">如日出之阳</x-collapse-item>
  <x-collapse-item title="壮而好学" name="2">如日中之光</x-collapse-item>
  <x-collapse-item title="老而好学" name="3">如炳烛之光</x-collapse-item>
</x-collapse>

<script>
export default {
  data() {
    return {
      selectedTab: ['1']
    }
  },
}
</script>
```
:::
# Attributes

### Collapse 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|selected| 选中项 | Array |--|[]
| accordion | 手风琴模式 |    boolean | true、false|false

### CollapseItem
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|title| 标题 | String |--|--
| name | 唯一标识，必填 |    String |-- |--