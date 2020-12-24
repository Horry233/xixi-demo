const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })

  it('接收 gutter属性', (done) => { // 如果没有done，会认为代码全部为同步代码
    Vue.component('x-row', Row)
    Vue.component('x-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <x-row gutter="20">
      <x-col span="12"></x-col>
      <x-col span="12"></x-col>
    </x-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => { //异步代码，所以前要加done做参数
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
      done() // 表示全部代码结束
      vm.$el.remove()
      vm.$destroy()
    })

  })

  it('接收 alig 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Construtor = Vue.extend(Row)
    const vm = new Construtor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
    div.remove()
    vm.$destroy
  })
})