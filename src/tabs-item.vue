<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XiTabsItem',
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String|Number,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created(){
    if(this.eventBus) {
      this.eventBus.$on('update:selected', (name)=> {
        this.active = (name === this.name)
      })
    }

  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  methods: {
    onClick() {
      if(this.disabled) {
        return
      }
      this.eventBus && this.eventBus.$emit('update:selected', this.name,this)
      this.$emit('click', this)
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: rgb(67, 137, 218); 
$green: #01988F;
$disabled-text-color: grey; 
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $green;
  }
  &.disabled {
    color: $disabled-text-color;
  }
}


</style>