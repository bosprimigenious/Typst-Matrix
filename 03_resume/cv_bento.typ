// Bento Box 卡片流简历模板（03_resume 占位版，无个人隐私，可提交）
#set page(paper: "a4", margin: 1.5cm, fill: rgb("#f4f4f5"))
#set text(font: ("Inter", "Source Han Sans SC", "New Computer Modern", "Microsoft YaHei"), fill: rgb("#18181b"), size: 10pt)
#set par(justify: true, leading: 0.6em)

#let card(body, fill: white) = {
  block(
    width: 100%,
    height: 100%,
    fill: fill,
    radius: 12pt,
    stroke: 1pt + rgb("#e4e4e7"),
    inset: 1.5em,
  )[#body]
}

#let tag(text-content, color: rgb("#f3f4f6")) = {
  box(fill: color, inset: (x: 6pt, y: 4pt), radius: 6pt)[#text(size: 9pt, weight: "medium")[#text-content]]
}

#grid(
  columns: (1fr, 1fr, 1fr),
  gutter: 15pt,

  grid.cell(colspan: 2)[
    #card[
      #text(size: 24pt, weight: "bold")[您的姓名]
      #v(0.3em)
      #text(size: 11pt, fill: rgb("#52525b"))[学校 · 专业]
      #v(1em)
      #text(size: 9.5pt)[
        您的手机号 \  |  \ your\@example.com \
        您的主页 \  |  \ github.com/username
      ]
    ]
  ],
  grid.cell(colspan: 1)[
    #card[
      #text(weight: "bold", size: 11pt)[核心技术栈]
      #v(0.8em)
      #tag("技能一") #tag("技能二") #tag("技能三")
      #v(0.4em)
      #tag("技能四") #tag("技能五") #tag("技能六")
    ]
  ],

  grid.cell(colspan: 1)[
    #card[
      #text(weight: "bold", size: 12pt)[荣誉与学业]
      #v(0.8em)
      *学业表现*：排名、奖学金等简要描述。
      #v(1em)
      *核心荣誉*：
      - 奖项或认证一
      - 奖项或认证二
      - 奖项或认证三
    ]
  ],
  grid.cell(colspan: 2)[
    #card[
      #text(weight: "bold", size: 12pt)[核心实习：职位名称]
      #text(size: 9pt, fill: rgb("#71717a"))[公司/单位名称 | YYYY.MM - YYYY.MM]
      #v(0.8em)
      - 工作内容与成果描述一。
      - 工作内容与成果描述二。
      - 工作内容与成果描述三。
    ]
  ],

  grid.cell(colspan: 3)[
    #card[
      #text(weight: "bold", size: 12pt)[项目经历]
      #v(0.8em)
      *项目名称 A* \
      项目描述：技术栈、职责与成果。
      #v(0.8em)
      *项目名称 B* \
      项目描述与亮点。
      #v(0.8em)
      *项目名称 C* \
      项目描述与成果。
    ]
  ],
)
