<template>
  <div class="wrapper">
    <x-button>默认按钮</x-button>
    <x-button icon="settings">默认按钮</x-button>
    <x-button :loading=loading  @click="loading=!loading">默认按钮</x-button>
    <x-button disabled>默认按钮</x-button>
  </div>

</template>

<script>
import Button from '../../../src/button/button'
export default {
  components: {
    'x-button': Button
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style>
.wrapper {
  margin-top: 10px;
}
</style>