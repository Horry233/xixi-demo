<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left" ref="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)" :key="item.name">
        <span class="name">
          {{item.name}}
        </span>

        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <icon class="loading" name="loading"></icon>
          </template>
          <template v-else>
            <icon class="next" v-if="rightArrowVisible(item)" name="right"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-items :items="rightItems" :height="height" :level="level+1"
      :loading-item="loadingItem" :load-data="loadData" 
      :selected="selected" @update:selected="onUpdateSelected"></cascader-items>
    </div>
  </div>
</template>

<script>
  import Icon from '.././icon'
  export default {
    name: "cascaderItems",
    components: {Icon},
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      },
      selected: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 0
      },
      loadData: {
        type: Function
      },
       loadingItem: {
        type: Object,
        default: () => ({})
      },
    },
    computed: {
      // 计算属性依赖不改变，不会更新 
      rightItems () {
        if(this.selected[this.level]) {
          let selected = this.items.filter((item) => item.name === this.selected[this.level].name) 
          //filter 返回值是一个数组
          if (selected && selected[0].children && selected[0].children.length > 0) {
            return selected[0].children
          }
        }
      },
    },
    methods: {
      rightArrowVisible(item) {
        return this.loadData ? !item.isLeaf : item.children
        //如果是动态数据就判断是否是叶子节点，静态就判断是否有children
      },
      onClickLabel(item) {
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1)
        this.$emit('update:selected', copy)
      },
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      }
    }
  }
</script>

<style scoped lang="scss">
@import "../../styles/var";
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
    .left {
      overflow: auto;
      height: 100%;
      padding: .3em 0;
    }
    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: .5em 1em;
      display: flex;
      align-items: center;
      white-space: nowrap;
      cursor: pointer;
      &:hover {
        background-color: $grey;
      }
      > .name {
        margin-right: 1em;
        user-select: none;
      }
      .icons {
        margin-left: auto;
        .next {
        transform: scale(0.5);
        }
        .loading {
          animation: spin 2s infinite linear;
        }
      }
    }
  }
</style> 