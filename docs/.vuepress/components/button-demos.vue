<template>
  <div>
    <x-button>默认按钮</x-button>
    <x-button icon="settings">默认按钮</x-button>
    <x-button :loading="true">默认按钮</x-button>
    <x-button disabled>默认按钮</x-button>

    <pre>
      <code>
        {{content}}
      </code>
    </pre>
  </div>

</template>

<script>
import Button from '../../../src/button'
export default {
  components: {
    'x-button': Button
  },
  data() {
    return {
      content: `
      <x-button>默认按钮</x-button>
      <x-button icon="settings">默认按钮</x-button>
      <x-button :loading="true">默认按钮</x-button>
      <x-button disabled>默认按钮</x-button>
      `
    }
    
  }
}
</script>

<style>

</style>