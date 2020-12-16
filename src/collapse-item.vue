<template>
  <div class="collapse-item">
    <div class="title" @click="toggle" :data-name="name">
      {{title}}
    </div>
    <div class="content" ref="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XiCollapseItem",
  data() {
    return {
      open: false,
    }
  },
  props: {
    title: {
      type: String,
      required:  true
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ['eventBus'],
  methods: {
    toggle() {
      if(this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      }else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    },
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (names)=> {
      if(names.indexOf(this.name) >= 0) {
        this.open = true
      }else {
        this.open = false
      }
    })
  }
  
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $grey;
    margin: -1px -1px 0px -1px;
    min-height: 32px;
    display: flex;     
    align-items: center;
    padding: 0 8px;
    background: lighten($grey, 8%); 
    cursor: pointer;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      margin-bottom: -1px;
    }
  }
  > .content {
    padding: 8px;
  }
}


</style>