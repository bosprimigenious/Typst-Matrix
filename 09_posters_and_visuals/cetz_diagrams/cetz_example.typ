// CeTZ 底层绘图示例：几何与矢量
// 安装：typst add cetz

#import "@preview/cetz:0.4.2"

#align(center)[
  #text(size: 14pt, weight: "bold")[CeTZ 绘图示例]
]
#v(0.5em)

#cetz.canvas({
  import cetz.draw: *
  // 矩形与线条
  rect((0, 0), (2, 1), fill: blue.lighten(80%), stroke: 1pt)
  line((0, 0), (2, 1), stroke: 1.5pt + blue)
  line((2, 0), (0, 1), stroke: 1.5pt + blue)
  // 圆
  circle((1, 0.5), 0.3, fill: orange.lighten(60%), stroke: 1pt)
})
