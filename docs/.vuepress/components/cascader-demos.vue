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
          updateSource(result) // 回调:把别人传给我的函数调用一下
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

<style>

</style>