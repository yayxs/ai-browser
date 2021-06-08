## 浏览器渲染引擎

#### (1). 主要模块

- 解析器
  - 解释 HTML 文档的解析器
  - 作用：将 HTML 文本解释成 DOM 树
- CSS 解析器

  - 它的作用是为 DOM 中的各个元素对象计算出样式信息
  - 为布局提供基础设施

- JavaScript 引擎
  - 使用 Javascript 代码可以修改网页的内容，也能修改 css 的信息
  - javascript 引擎能够解释 javascript 代码，并通过 DOM 接口和 CSS 树接口来修改网页内容和样式信息，从而改变渲染的结果
- 布局（layout）回流
  - 在 DOM 创建之后，Webkit 需要将其中的元素对象同样式信息结合起来
  - 计算他们的大小位置等布局信息
  - 形成一个能表达这所有信息的内部表示模型
- 绘图模块
  - 使用图形库将布局计算后的各个网页的节点绘制成图像结果

## 渲染引擎处理流程

[渲染树的构建、布局、及绘制中文](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=zh-cn)

![20200407223600](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200407223600.png)

1.  遇见 HTML 标记，调用 HTML 解析器解析为对应的 token （一个 token 就是一个标签文本的序列化）并构建 DOM 树（就是一块内存，保存着 tokens，建立它们之间的关系）
2.  遇见 `style/link`标记 调用解析器 处理 CSS 标记并构建 CSS 样式树，即 CSSOM
3.  遇见`script`标记 调用 `javascript`解析器 处理`script`标记，绑定事件、修改 DOM 树/CSS 树 等
4.  将 `DOM `树 与 `CSS`树 合并成一个渲染树（render 树:after :before 这样的伪元素会在这个环节被构建到 DOM 树中）
5.  根据渲染树来渲染，以计算每个节点的几何信息（这一过程需要依赖图形库）
6.  **页面绘制** ： 把每一个页面图层转换为像素，对媒体文件进行解码。将各个节点绘制到屏幕上。
