module.exports = {
  base: '/xixi-demo/',
  title: '西西UI',
  description: '一个好用的UI框架',
  head: [['link', { rel: 'icon', href: '/xigua.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/get-started/'},
      {text: 'Github', link: 'https://github.com/Horry233/xixi-demo'},
    ],
    sidebar: [
      {
        title: '入门',
        // collapsable: false,
        children: [
          '/introduce/',
          '/get-started/',
         ],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/cascader',
          '/components/collapse',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/slides',
          '/components/tabs',
          '/components/toast',
        ]
      }

    ]
  }
}