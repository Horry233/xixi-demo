# xix-ui 一个基于Vue的UI组件
[![Build Status](https://www.travis-ci.org/Horry233/xixi-demo.svg?branch=main)](https://www.travis-ci.org/Horry233/xixi-demo)

## 介绍
我在学习Vue的过程中做的一个UI框架，希望对你有帮助

## 开始使用

1. 添加 CSS 样式
使用本框架前，请在 css 中开启 border-box
```
*, *::before, *::after {box-sizing: border-box}
```
IE 8 及以上浏览器支持此样式
你还需要设置默认颜色(后续会改为 SCSS变量)
```
html {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #999;
      --border-color: #999;
      --button-color-hover: #666;
    }
```
IE 15 及以上浏览器支持此样式

2. 安装xix-ui
```
npm i --save xix-ui
```

3. 引入 xix-ui
```
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



## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码