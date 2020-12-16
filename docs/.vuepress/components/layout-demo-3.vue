<template>
  <div style="padding-top: 16px;">

    <x-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <x-sider style=" background:#00946C; width:200px;">
        sider
      </x-sider>
      <x-layout>
        <x-header style="height: 50px; background:#01988F;">
          header
        </x-header>
        <x-content style="height: 100px; background:#00786F;">
          content
        </x-content>
        <x-footer style="height: 50px; background:#01988F;">
          footer
        </x-footer>
      </x-layout>
    </x-layout>
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Footer from '../../../src/footer'
import Content from '../../../src/content'
import Sider from '../../../src/sider'

export default {
  components: {
    'x-layout': Layout, 
    'x-header': Header, 
    'x-footer': Footer, 
    'x-content': Content, 
    'x-sider': Sider
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>