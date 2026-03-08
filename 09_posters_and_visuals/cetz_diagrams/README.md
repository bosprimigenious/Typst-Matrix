# CeTZ 矢量图与几何图

CeTZ 是底层绘图引擎，支持复杂几何、路径、图表。Fletcher 基于 CeTZ 实现流程图；此处可放纯 CeTZ 的架构图、ER 图、自定义矢量图。

导入示例：
```typst
#import "@preview/cetz:0.4.2"

#cetz.canvas({
  import cetz.draw: *
  rect((0, 0), (2, 1), fill: blue.lighten(80%))
  line((0, 0), (2, 1), stroke: 2pt + red)
})
```

安装：`typst add cetz`
