<template>
  <div class="x-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XiNav',
  provide() {
    return {
      root: this
    }
  },
  props: {
    selected: {
      type: Array,
      default: ()=> []
    },
    mutilple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.updateChildren()
    this.listenToChildren()
  },
  updated() {
    this.updateChildren()
  },
  computed: {
    
  },
  methods: {
    addItem(vm) {
      this.items.push(vm)
    },
    updateChildren() {
      this.items.forEach(vm => {
        if(this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on('add:selected', (name)=> {
          if(this.mutilple) {
            if(this.selected.indexOf(name) < 0) {
              let copy = JSON.parse(JSON.stringify(this.selected))
              copy.push(name)
              this.$emit('update:selected', copy)
            }
          }else {
            this.$emit('update:selected', [name])
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.x-nav {
  display: flex;
  border: 1px solid red;
}

</style>