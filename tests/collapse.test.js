import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
chai.use(sinonChai)


import {shallowMount, mount} from '@vue/test-utils'
import Collapse from '@/collapse.vue'
import CollapseItem from '@/collapse-item.vue'


describe('Collapse.vue', () => {
  it('存在.', () => {
    expect(Collapse).to.exist
  })

  it('接受 selected 属性.', () => {
    Vue.component('x-collapse-item', CollapseItem)
    Vue.component('x-collapse', Collapse)

    const Component = {
      template: `
        <x-collapse :selected="selected">
          <x-collapse-item title="标题1" name="1"><span id="content-1">1</span></x-collapse-item>
          <x-collapse-item title="标题2" name="2"><span id="content-2">2</span></x-collapse-item>
          <x-collapse-item title="标题3" name="3"><span id="content-3">3</span></x-collapse-item>
        </x-collapse>
        `,
        
    }
    const wrapper = mount(Component, {
      data() {
        return {
          selected:  ['1', '2']
        }
      }
    })

    console.log(wrapper.html());

    expect(wrapper.find('#content-1').exists()).to.be.true
    // expect(vm.$el.querySelector('#content-1')).to.exist
    // expect(vm.$el.querySelector('#content-2')).to.exist
    // expect(vm.$el.querySelector('#content-3')).to.not.exist
    // wrapper.find('button').trigger('click')
    // let classes = wrapper.find('.content-wrapper').classes()
    // expect(classes).to.include('position-bottom')
  })

  // it('接受 selected 属性', (done) => {
  //   Vue.component('x-collapse', Collapse)
  //   Vue.component('x-collapse-item', CollapseItem)
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //       <x-collapse :selected="xxx">
  //         <x-collapse-item title="标题1" name="1"><span id="content-1">1</span></x-collapse-item>
  //         <x-collapse-item title="标题2" name="2"><span id="content-2">2</span></x-collapse-item>
  //         <x-collapse-item title="标题3" name="3"><span id="content-3">3</span></x-collapse-item>
  //       </x-collapse>
  //   `
  //   const vm = new Vue({
  //     el: div,
  //     data: {
  //       xxx: ['1', '2']
  //     }
  //   })
  //   setTimeout(() => {
  //     expect(vm.$el.querySelector('#content-1')).to.exist
  //     expect(vm.$el.querySelector('#content-2')).to.exist
  //     expect(vm.$el.querySelector('#content-3')).to.not.exist
  //     done()
  //   })
  // })

  // it('接受 accordion 属性', (done) => {
  //   Vue.component('x-collapse', Collapse)
  //   Vue.component('x-collapse-item', CollapseItem)
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //       <x-collapse :selected.sync="xxx" accordion>
  //         <x-collapse-item title="标题1" name="1"><span id="content-1">1</span></x-collapse-item>
  //         <x-collapse-item title="标题2" name="2"><span id="content-2">2</span></x-collapse-item>
  //         <x-collapse-item title="标题3" name="3"><span id="content-3">3</span></x-collapse-item>
  //       </x-collapse>
  //   `
  //   const vm = new Vue({
  //     el: div,
  //     data: {
  //       xxx: ['1']
  //     }
  //   })
  //   setTimeout(() => {
  //     vm.$el.querySelector('[data-name="2"]').click()
  //     setTimeout(() => {
  //       expect(vm.$el.querySelector('#content-1')).to.not.exist
  //       expect(vm.$el.querySelector('#content-2')).to.exist
  //       done()
  //     })
  //   })
  // })

  // it('触发 update:selected 事件', (done) => {
  //   Vue.component('x-collapse', Collapse)
  //   Vue.component('x-collapse-item', CollapseItem)
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //       <x-collapse :selected="xxx" @update:selected="onSelect">
  //         <x-collapse-item title="标题1" name="1"><span id="content-1">1</span></x-collapse-item>
  //         <x-collapse-item title="标题2" name="2"><span id="content-2">2</span></x-collapse-item>
  //         <x-collapse-item title="标题3" name="3"><span id="content-3">3</span></x-collapse-item>
  //       </x-collapse>
  //   `
  //   const callback = sinon.fake();
  //   const vm = new Vue({
  //     el: div,
  //     data: {
  //       xxx: ['1']
  //     },
  //     methods: {
  //       onSelect: callback
  //     }
  //   })
  //   setTimeout(() => {
  //     vm.$el.querySelector('[data-name="2"]').click()
  //     setTimeout(() => {
  //       expect(callback).to.have.been.called
  //       done()
  //     })
  //   })
  // })
})