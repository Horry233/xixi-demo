const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', () => {

    it('接收 autoClose 属性', (done) => {
      const div = document.createElement('div') 
      document.body.appendChild(div)
      const Construtor = Vue.extend(Toast)
      const vm = new Construtor({
        propsData: {
          autoClose: false
        }
      }).$mount(div)
      setTimeout(()=>{
        expect(document.body.contains(vm.$el)).to.eq(true)
        done()
      })
      div.remove()
      vm.$destroy
    })

    it('接收 closeButton 属性', () => {
      const callback = sinon.fake()
      const Construtor = Vue.extend(Toast)
      const vm = new Construtor({
        propsData: {
          closeButton: {
            text: '关闭',
            callback,
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭')
      closeButton.click()
      expect(callback).to.have.been.called
    })

    it('接收 enableHtml 属性', () => {
      const Construtor = Vue.extend(Toast)
      const vm = new Construtor({
        propsData: {
          enableHtml: true 
        }
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector("#test")
      expect(strong).to.exist
    })
    

    it('接收 enableHtml 属性', () => {
      const Construtor = Vue.extend(Toast)
      const vm = new Construtor({
        propsData: {
          position: 'bottom' 
        }
      }).$mount()
     
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
      
    })


  })
})