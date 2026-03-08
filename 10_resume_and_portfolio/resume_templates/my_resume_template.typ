// SixtySecondsCV 风格 · 双栏简历模板（可提交，仅占位内容，无个人隐私）
// 与 03_resume 中 my_resume 版式一致，请替换占位为您的信息后本地使用

#set page(
  paper: "a4",
  margin: 0pt,
  header: none,
  footer: none,
)
#set text(
  font: "New Computer Modern",
  size: 9.5pt,
  fill: rgb("#333333"),
)
#set par(leading: 0.6em, justify: false)

#let maincolor = rgb("#0E5484")
#let sidecolor = rgb("#E7E7E7")
#let sectioncolor = rgb("#0395DE")
#let subsectioncolor = rgb("#4D4D4D")
#let iconcolor = maincolor
#let itemtextcolor = rgb("#333333")

#let sidebarwidth = 36%
#let gutter = 8pt
#let topbottom = 12pt
#let leftright = 10pt

#let cv-section(title) = {
  block(above: 1.2em, below: 0.6em)[
    #set text(sectioncolor, size: 11pt, weight: "bold")
    #title
    #v(0.25em)
    #line(length: 100%, stroke: (paint: sectioncolor, thickness: 1.5pt))
  ]
}

#let cv-subsection(title) = {
  set text(subsectioncolor, size: 10pt, weight: "bold")
  block(below: 0.35em)[#title]
}

#let cv-item(date, title, location, body) = {
  grid(
    columns: (0.2fr, 1fr),
    column-gutter: 1em,
    row-gutter: 0.25em,
    align(right)[
      #block[
        #set text(size: 8.5pt, fill: subsectioncolor)
        #date
      ]
    ],
    block[
      #text(weight: "bold", fill: itemtextcolor)[#title]
      #h(1fr)
      #text(size: 8.5pt, fill: subsectioncolor)[#location]
      #v(0.35em)
      #set text(size: 9pt, fill: itemtextcolor)
      #body
    ],
  )
  v(0.7em)
}

#let cv-pub(title, authors, journal, year) = {
  grid(
    columns: (0.2fr, 1fr),
    column-gutter: 1em,
    row-gutter: 0.2em,
    align(right)[#block[#text(size: 8.5pt, fill: subsectioncolor)[#year]]],
    block[
      #text(weight: "bold")[#title]
      #linebreak()
      #text(style: "italic")[#authors]
      #linebreak()
      #text(size: 8.5pt)[#journal]
    ],
  )
  v(0.5em)
}

#let personal(icon, content) = {
  block(below: 0.35em)[
    #grid(columns: (1.8em, 1fr), column-gutter: 0.5em, align: left)[
      #text(fill: iconcolor, size: 9pt)[#icon],
      #block(inset: 0pt)[#text(size: 8.5pt)[#content]]
    ]
  ]
}

#let personal-line(content) = block(below: 0.35em)[#text(size: 8.5pt)[#content]]

#let skill-points(icon, name, level, max: 5) = {
  grid(columns: (1.5em, 1fr, auto), column-gutter: 0.4em, align: left)[
    #text(fill: iconcolor)[#icon],
    #text(size: 8.5pt)[#name],
    #grid(columns: max, column-gutter: 0.15em, ..range(max).map(i => circle(radius: 0.2em, fill: if i < level { iconcolor } else { rgb("#ddd") })))
  ]
  v(0.4em)
}

#let skill-bar(name, level-percent) = {
  block(width: 100%, below: 0.4em)[
    #text(size: 8.5pt)[#name]
    #v(0.2em)
    #block(width: 100%, height: 0.5em, fill: rgb("#ddd"), radius: 0.25em, clip: true)[
      #block(width: level-percent * 1%, height: 100%, fill: iconcolor, radius: 0.25em)[]
    ]
  ]
}

#let sidebar-body(content) = {
  block(width: 100%, fill: sidecolor, inset: (left: leftright, right: leftright, top: topbottom, bottom: topbottom))[#content]
}

#let profile-pic(path, size: 2.2em, radius: 0.4em) = {
  align(center)[
    #block(below: 0.8em)[
      #box(clip: true, radius: radius, stroke: (paint: iconcolor, thickness: 2pt), width: size, height: size, image(path, width: size, height: size))
    ]
  ]
}

// ========== 以下为占位内容，无个人隐私，可提交 ==========
#block(fill: white, width: 100%, inset: (top: topbottom, bottom: topbottom, left: leftright, right: leftright))[
  #grid(columns: (sidebarwidth, gutter, 1fr), rows: (auto,), align: left + top, gutter: 0pt,
    sidebar-body[
      #align(center)[
        #block(below: 0.5em)[
          #text(size: 16pt, weight: "bold", fill: maincolor)[您的姓名]
          #v(0.15em)
          #text(size: 10pt, fill: subsectioncolor)[您的职位 / 方向]
        ]
      ]
      #v(0.8em)
      #cv-subsection[联系方式]
      #personal("✉", link("mailto:your@example.com")[您的邮箱])
      #personal("📞", "您的手机号")
      #personal("🔗", link("https://example.com")[您的主页])
      #personal-line("您的地址（可选）")
      #v(0.6em)
      #cv-subsection[技能]
      #skill-bar([技能名称 1], 90)
      #skill-bar([技能名称 2], 85)
      #skill-bar([技能名称 3], 75)
      #v(0.8em)
      #cv-subsection[语言]
      #skill-points("🌐", [语言与水平], 4)
    ],
    [],
    block(inset: (left: 1em, right: 0pt))[
      #cv-section[工作经历]
      #cv-item("YYYY — 今", [公司名 · 职位], [城市], [简要描述工作内容与成果。])
      #cv-item("YYYY — YYYY", [公司名 · 职位], [城市], [描述。])
      #cv-section[教育背景]
      #cv-item("YYYY — YYYY", [学校 · 专业 · 学历], [城市], [主修/荣誉等。])
      #cv-section[技能概览]
      #block(below: 0.5em)[
        #set text(size: 9pt, fill: itemtextcolor)
        #text(weight: "bold")[方向一]：具体技能、工具
        #linebreak()
        #text(weight: "bold")[方向二]：具体技能、工具
      ]
      #cv-section[发表 / 项目]
      #cv-pub([论文或项目标题], [作者], [期刊/会议/项目说明], "年份")
      #v(1em)
      #line(length: 100%, stroke: 0.5pt + maincolor)
      #v(0.4em)
      #text(size: 8pt, fill: subsectioncolor)[#datetime.today().display("[year]-[month]-[day]") \  ·  \ 您的姓名]
    ],
  )
]
