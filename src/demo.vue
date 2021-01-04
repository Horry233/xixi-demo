<template>
  <div>
    <x-nav :selected.sync="selected">
      <x-nav-item name="home">首页</x-nav-item>
      <x-nav-item name="about">关于</x-nav-item>
      <x-nav-item name="hire">招聘</x-nav-item>
    </x-nav>
  </div>
</template>
<script>
import XNav from './nav/nav'
import XNavItem from './nav/nav-item'
import XSubNav from './nav/sub-nav'


export default {
  name: "demo",
  components: {
    XNav,XNavItem,XSubNav
  },
  data() {
    return {
      selected: ['home'],
    }
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
