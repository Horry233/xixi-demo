import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('x-button',Button)
Vue.component('x-icon',Icon)
Vue.component('x-button-group',ButtonGroup)


new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
// --------------------测试是否能显示图标
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let herf = useElement.getAttribute('xlink:href')
  // console.log(useElement);
  expect(herf).to.eq('#x-setting')
  
  vm.$el.remove()
  vm.$destroy()
}
// ------------------测试loading和其他图标同时出现
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let herf = useElement.getAttribute('xlink:href')
  expect(herf).to.eq('#x-loading')
  
  vm.$el.remove()
  vm.$destroy()
}
// -------------------------测试图标位置
{
  const div = document.createElement('div')
  document.body.append(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg) //解构赋值拿order出来
  expect(order).to.eq('1') //css里面的数字都是字符串
  
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.append(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  
  vm.$el.remove()
  vm.$destroy()
}
// ----------------------测试click事件
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let spy  = chai.spy(function(){})
  vm.$on('click', spy) // 希望这个函数被执行 用spy代替
  let button = vm.$el
  button.click() // 这里调用了spy
  expect(spy).to.have.been.called() // 检测spy是否被调用
  
  vm.$el.remove()
  vm.$destroy()
}