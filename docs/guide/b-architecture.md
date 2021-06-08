## Chrom 最新浏览器架构

- 1 个浏览器主进程
  - 界面的显示
  - 用户的交互
  - 子进程管理
  - 提供存储
- 1 个 GPU 进程
  - 3D CSS 渲染
- 1 个网路进程
  - 网络资源的加载
  - 面向渲染进程和浏览器进程 等提供网络下载
- 多个渲染进程
  - HTML+CSS+JS 转换为可交互的网页
  - 排版引擎 Blink
  - JS V8
- 多个插件进程
  - 主要负责插件的运行

![20200407221502](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200407221502.png)
