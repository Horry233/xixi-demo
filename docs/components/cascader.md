---
title: Cascader 级联选择器
---
# 级联选择器

**使用方法**

#### 基本用法：

<ClientOnly>
<cascader-demos></cascader-demos>
</ClientOnly>

#### 示例代码：
::: details 点击查看源码
```vue
<template>
  <div style="margin:20px">
    <div style="padding: 20px;">
      <x-cascader :source.sync="source" popover-height="200px"
        @update:source="onUpdateSource"
        @update:selected="onUpdateSelected"
        :selected.sync="selected" :load-data="loadData"></x-cascader>
    </div>
  </div>
</template>

<script>
  import Button from "../../../src/button/button"
  import Cascader from "../../../src/cascader/cascader"
  import db from '../../../tests/fixtures/db'
  
  function ajax (parentId = 0) {
      return new Promise((success, fail) => {
      setTimeout(() => {
        let result = db.filter((item) => item.parent_id == parentId)
        
        result.forEach(node => {
          if(db.filter(item => item.parent_id === node.id).length > 0) {
            node.isLeaf = false
          }else {
            node.isLeaf = true
          }
        })
        success(result)
      }, 300)
    })
  }
  export default {
    name: "demo",
    components: {
      "x-button": Button,
      "x-cascader": Cascader
    },
    data () {
      return {
        selected: [],
        source: []
      };
    },
        created () {
      ajax(0).then(result => {
        this.source = result
      })
    },
    methods: {
      loadData ({id}, updateSource) {
        ajax(id).then(result => {
          updateSource(result)
        })
      },
      xxx () {
        ajax(this.selected[0].id).then(result => {
          let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
          this.$set(lastLevelSelected, 'children', result)
          console.log(1);
        })
      },
       onUpdateSource () {
      },
      onUpdateSelected () {
      }
    }
  }
</script>
```
:::
# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| source | 级联选择器的数据源，格式较严格，用 .sync 绑定 |    Array | -- | -- 
|selected|当前选中的数据 value 值的集合，按层级次序排序，用 .sync 绑定|Array|--|--
