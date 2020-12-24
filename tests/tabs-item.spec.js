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

describe('TabsItem', () => {

  it('TabsItem存在.', () => {
    expect(TabsItem).to.exist
  })

  it('接收 name 属性', ()=> {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx'
      }
    }).$mount() 
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })  

  
  it('接收 disabled 属性', ()=> {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount() 
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback) 
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })  
  

})