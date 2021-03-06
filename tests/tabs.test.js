const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('x-tabs',Tabs)
Vue.component('x-tabs-head',TabsHead)
Vue.component('x-tabs-body',TabsBody)
Vue.component('x-tabs-item',TabsItem)
Vue.component('x-tabs-pane',TabsPane)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('Tabs存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', (done)=> {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <x-tabs selected="football">
      <x-tabs-head >
        <x-tabs-item name="football">足球</x-tabs-item>
        <x-tabs-item name="basketball">篮球</x-tabs-item>
        <x-tabs-item name="tennis">网球</x-tabs-item>
      </x-tabs-head>

      <x-tabs-body>
      <x-tabs-pane name="football">足球相关</x-tabs-pane>
      <x-tabs-pane name="basketball">篮球相关</x-tabs-pane>
      <x-tabs-pane name="tennis">网球相关</x-tabs-pane>
      </x-tabs-body>
    </x-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      let x = vm.$el.querySelector(`.tabs-item[data-name="football"]`)
      expect(x.classList.contains('active')).to.be.true
      done() 
    })
    
  })

  it('接收 direction 属性', () => {

  })
})