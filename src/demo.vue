<template>
  <div>
    <x-nav :selected.sync="selected">
      <x-nav-item name="home">首页</x-nav-item>
      <x-sub-nav>
        <template slot="title">关于</template>
        <x-nav-item name="culture">企业文化</x-nav-item>
        <x-nav-item name="developers">开发团队</x-nav-item>
        <x-sub-nav>
          <template slot="title">联系方式</template>
          <x-nav-item name="wechat">微信</x-nav-item>
          <x-nav-item name="qq">QQ</x-nav-item>
          <x-sub-nav>
            <template slot="title">手机</template>
            <x-nav-item name="cm">移动</x-nav-item>
            <x-nav-item name="cu">联通</x-nav-item>
            <x-nav-item name="cn">电信</x-nav-item>
          </x-sub-nav>
        </x-sub-nav>

      </x-sub-nav>
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
      selected: ['culture'],
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
