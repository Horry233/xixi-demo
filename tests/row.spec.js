import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import Vue from 'vue'
import {shallowMount, mount} from '@vue/test-utils'
import Row from '@/row.vue'
import Col from '@/col.vue'


describe('Row.vue', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })
  it('接收 gutter属性', () => {
    Vue.component('XCol', Col)
    const wrapper = mount(Row, {
      propsData: {
        gutter: 20
      },
      slots: {
        default: `
          <x-col span="12"></x-col>
          <x-col span="12"></x-col>`
      }
    })
    setTimeout(() => { 
      const row = wrapper.find('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      // const cols = wrapper.$el.findAll('.col')
      // expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      // expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
    })
  })



  // it('接收 align 属性', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Construtor = Vue.extend(Row)
  //   const vm = new Construtor({
  //     propsData: {
  //       align: 'right'
  //     }
  //   }).$mount(div)
  //   const element = vm.$el
  //   expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
  //   div.remove()
  //   vm.$destroy
  // })
})