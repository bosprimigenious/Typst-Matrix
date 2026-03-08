// 双语简历引擎：一套模板，通过 lang 与 data 输出中/英 PDF
// 使用：#resume(data, lang: "zh") 或 #resume(data, lang: "en")

#let resume(data, lang: "zh") = {
  // 1. 语言与排版
  set text(
    lang: lang,
    region: if lang == "zh" { "cn" } else { "us" },
    font: ("Inter", "Source Han Sans SC", "New Computer Modern", "Microsoft YaHei"),
    size: 10.5pt,
    fill: luma(30),
  )
  set par(
    justify: true,
    leading: if lang == "zh" { 0.75em } else { 0.55em },
  )

  // 2. 颜色
  let accent = rgb("#113b5e")
  let gray = luma(50)

  // 3. 区块标题
  let section-title(title) = {
    v(0.5em)
    text(size: 14pt, weight: "bold", fill: accent)[#title]
    v(-0.4em)
    line(length: 100%, stroke: 0.8pt + rgb("#e0e0e0"))
    v(0.4em)
  }

  // 4. 页面
  set page(paper: "a4", margin: (x: 1.8cm, y: 1.5cm))

  // 5. 渲染：头部
  align(center)[
    #text(size: 24pt, weight: "bold", fill: accent)[#data.name]
    #v(0.2em)
    #text(size: 12pt, fill: gray)[#data.title]
    #v(0.5em)
    #text(size: 9pt)[
      #data.contact.phone \  |  \ #data.contact.email \  |  \ #data.contact.website \  |  \ #data.contact.github
    ]
  ]
  v(1.5em)

  // 6. 教育
  section-title(data.education.section_title)
  grid(
    columns: (1fr, auto),
    row-gutter: 0.3em,
    text(weight: "bold", size: 11pt)[#data.education.school],
    text(fill: accent, size: 9pt)[#data.education.date],
    text(style: "italic", fill: gray)[#data.education.major],
    text(fill: gray, size: 9pt)[#data.education.location],
  )
  v(0.5em)
  for item in data.education.highlights [
    - #item
  ]
  v(1em)

  // 7. 技能
  section-title(data.skills.section_title)
  grid(
    columns: (15%, 1fr),
    gutter: 0.5em,
    text(weight: "bold", fill: accent)[*Languages*],
    text(size: 9pt)[#data.skills.languages],
    text(weight: "bold", fill: accent)[*Frontend*],
    text(size: 9pt)[#data.skills.frontend],
    text(weight: "bold", fill: accent)[*Backend*],
    text(size: 9pt)[#data.skills.backend],
    text(weight: "bold", fill: accent)[*Tools*],
    text(size: 9pt)[#data.skills.tools],
  )
  v(1em)

  // 8. 荣誉
  section-title(data.honors.section_title)
  for item in data.honors.items [
    - #item
  ]
}
