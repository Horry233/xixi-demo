---
title:快速上手
---

# 快速上手

### npm 安装

```bash
npm i --save xix-ui
```

### 开始使用

1. 添加 CSS 样式

使用本框架前，请确保整个项目的 CSS 开启了 border-box

```CSS
*,*::before,*::after{box-sizing: border-box;}
```

IE 8及以上浏览器都支持此样式

2. 引入 xix-ui

按需引入需要的组件，以达到减小项目体积的目的。

需要注意的是，样式文件要记得引入。

```js
import {Button,Icon} from 'xix-ui'
import 'xix-ui/dist/index.css'

export default {
  name: 'App',
  components: {
    'x-button':Button,
    'x-Icon':Icon
  }
}
```

**完整组件列表和引入方式**

```js
import Vue from 'vue'
import {
    Button,
    Icon,
    ButtonGroup,
    Input,
    Col,
    Row,
    Layout,
    Header,
    Footer,
    Sider,
    Content,
    Toast,
    plugin,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPane,
    Popover,
    Collapse,
    CollapseItem

} from ''xix-ui'

Vue.component('x-button', Button)
Vue.component('x-icon', Icon)
Vue.component('x-button-group', ButtonGroup)
Vue.component('x-input', Input)
Vue.component('x-row',Row)
Vue.component('x-col',Col)
Vue.component('x-layout',Layout)
Vue.component('x-header',Header)
Vue.component('x-sider',Sider)
Vue.component('x-content',Content)
Vue.component('x-footer',Footer)
Vue.use(plugin)                           // toast 组件的使用方法
Vue.component('x-tabs',Tabs)
Vue.component('x-tabs-head',TabsHead)
Vue.component('x-tabs-body',TabsBody)
Vue.component('x-tabs-item',TabsItem)
Vue.component('x-tabs-pane',TabsPane)
Vue.component('x-popover',Popover)
Vue.component('x-collapse',Collapse)
Vue.component('x-collapse-item',CollapseItem)
```