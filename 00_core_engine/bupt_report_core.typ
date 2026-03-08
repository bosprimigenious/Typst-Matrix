// BUPT 实验报告底层引擎：封面、信息表、标题与代码块样式
// 使用：#show: bupt-report.with(course: "...", exp-name: "...", author: "...", student-id: "...")

#let bupt-report(
  course: "",
  exp-name: "",
  author: "",
  student-id: "",
  date: datetime.today().display("[year]-[month]-[day]"),
  body
) = {
  set page(paper: "a4", margin: (x: 2.5cm, y: 3cm))
  set text(font: ("Times New Roman", "Source Han Sans SC", "SimSun"), size: 12pt)
  set par(justify: true, leading: 1em)

  align(center)[
    #v(2cm)
    #text(size: 24pt, weight: "bold")[北京邮电大学计算机学院]
    #v(1cm)
    #text(size: 20pt, weight: "bold")[实验报告]
    #v(3cm)
  ]

  align(center)[
    #grid(
      columns: (auto, 200pt),
      row-gutter: 1.5em,
      align: (right, center),
      text(weight: "bold")[课程名称：], line(length: 100%, stroke: 0.5pt)[#course],
      text(weight: "bold")[实验名称：], line(length: 100%, stroke: 0.5pt)[#exp-name],
      text(weight: "bold")[学生姓名：], line(length: 100%, stroke: 0.5pt)[#author],
      text(weight: "bold")[学号：], line(length: 100%, stroke: 0.5pt)[#student-id],
      text(weight: "bold")[日期：], line(length: 100%, stroke: 0.5pt)[#date]
    )
  ]

  pagebreak()

  show heading.where(level: 1): it => [
    #v(1em)
    #text(size: 14pt, weight: "bold")[#it.body]
    #v(0.5em)
  ]

  show raw.where(block: true): it => block(
    fill: luma(245),
    width: 100%,
    inset: 1em,
    radius: 4pt,
    stroke: 0.5pt + luma(200),
    text(font: ("Fira Code", "Consolas", "Microsoft YaHei"), size: 10pt)[#it.body]
  )

  body
}
