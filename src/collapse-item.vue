<template>
  <div class="collapse-item" @click="toggle">
    <div class="title">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XiCollapseItem",
  data() {
    return {
      open: false
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
        this.open = false
      }else {
        this.eventBus && this.eventBus.$emit('update:selected', this.name)
      }
    },
    close() {
      this.open = false
    },
    show() {
      this.open = true
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (name)=> {
      if(name !== this.name) {
        this.close()
      }else {
        this.show()
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