// Fletcher 流程图示例：纯代码绘图，连线自动避让
// 安装：typst add fletcher  （会同时拉取 CeTZ）
// 文档：https://typst.app/universe/package/fletcher

#import "@preview/fletcher:0.5.8": diagram, node, edge

#set text(size: 10pt)
#align(center)[
  #text(size: 14pt, weight: "bold")[Fletcher 流程图示例]
  #v(0.5em)
]

#v(1em)
#diagram(
  cell-size: 12mm,
  node-stroke: 1pt,
  node((0, 0), [开始], corner-radius: 2pt),
  edge("r", "-|>"),
  node((1, 0), [输入]),
  edge("r", "-|>"),
  node((2, 0), [处理]),
  edge("r", "-|>"),
  node((3, 0), [输出], corner-radius: 2pt),
)

#v(1.5em)
// 带标签的边与多节点
#diagram(
  cell-size: 14mm,
  node-stroke: 0.8pt,
  node((0, 0), [客户端]),
  edge("r", "-|>", [请求], label-pos: 0.5),
  node((1, 0), [服务端]),
  edge("r", "-|>", [响应], label-pos: 0.5),
  node((2, 0), [数据库]),
)
