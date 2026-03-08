// 字体与排版测试
#set page(paper: "a4", margin: 1.5cm)
#set text(font: "New Computer Modern", size: 11pt)
#set par(justify: true, leading: 0.65em)

#align(center)[
  #text(size: 18pt, weight: "bold")[Typst 字体测试]
  #v(0.5em)
  中文、English、123、标点：，。！？
]

#v(1em)
#align(center)[
  #text(font: "New Computer Modern")[New Computer Modern]
  #linebreak()
  #text(font: "Times New Roman")[Times New Roman]
  #linebreak()
  #text(font: "Microsoft YaHei")[微软雅黑]
]

#pagebreak()
#align(center)[
  #text(size: 14pt)[更多字体与排版可在本文件中继续测试。]
]
