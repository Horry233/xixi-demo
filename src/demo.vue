<template>
  <div style="margin:100px">
    <p>11111</p>
    <x-cascader :source="source" popover-height="200px"
      :selected.sync="selected"></x-cascader>
    <p>22222</p>
  </div>
</template>
<script>
  import Button from "./button";
  import Cascader from "./cascader";
  import db from './db'
  
  function ajax (parentId = 0) {
    return db.filter((item) => item.parent_id == parentId)
  }
  console.log(ajax())
  export default {
    name: "demo",
    components: {
      "x-button": Button,
      "x-cascader": Cascader
    },
    data () {
      return {
        selected: [],
        source: ajax()
      };
    }
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  img {max-width: 100%;}
  html {
    --font-size: 14px;
  }
  body {
    font-size: var(--font-size);
  }
</style> 