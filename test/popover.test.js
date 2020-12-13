const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('可以设置position.', (done) => {
    Vue.component('x-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <x-popover position="bottom" ref="popover">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </x-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.popover.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })


  it('支持 trigger 事件', (done) => {
    Vue.component('x-popover', Popover);
    const div = document.createElement('div');
    document.body.appendChild(div);

    div.innerHTML = `
      <x-popover ref='popover' position='bottom' trigger='hover'>
        <p slot='content'>点击展开</p>
        <button>点我</button>
      </x-popover>
    `;

    const vm = new Vue({
      el: div,
    }).$mount();

    const popoverEl = vm.$refs.popover.$el;

    let event = new Event('mouseenter');
    popoverEl.dispatchEvent(event);

    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.popover.$refs;
      expect(contentWrapper).to.be.exist;
      done();
    })
  })
}) 