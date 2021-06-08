module.exports = {
  title: '浏览器工作原理',
  description: '洋小洋同学',

  themeConfig: {
    docsDir: 'docs',

    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },

      {
        text: 'Git Repo',
        link: 'https://github.com/yayxs/browser-learn',
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar(),
    },
  },
}

function getGuideSidebar() {
  return [
    { text: 'Welcome', link: '/' },
    {
      text: '了解浏览器工作原理的重要性',
      children: [],
    },
    {
      text: '站在宏观的角度看浏览器',
      children: [],
    },
    {
      text: 'JavaScript在浏览器中表现',
      children: [],
    },
    {
      text: 'V8引擎的原理',
      children: [],
    },
    {
      text: '浏览器中循环系统 EventLoop',
      children: [],
    },
    {
      text: '浏览器中的页面',
      children: [],
    },
    {
      text: '浏览器中的网络',
      children: [],
    },
    {
      text: '浏览器中的安全',
      children: [],
    },
    {
      text: '浏览器中的优化',
      children: [],
    },
  ]
}
