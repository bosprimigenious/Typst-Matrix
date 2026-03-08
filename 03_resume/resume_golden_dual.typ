// Golden-Dual 双栏 32% / 68%，依赖 00_core_engine/theme.typ

#import "../00_core_engine/theme.typ": colors

#set page(
  paper: "a4",
  margin: 0pt,
)

#set text(
  font: ("Inter", "Source Han Sans SC", "New Computer Modern", "Microsoft YaHei"),
  size: 10pt,
  fill: colors.text-main,
)
#set par(justify: true, leading: 0.65em)

#let side-heading(title) = {
  v(1em)
  text(size: 12pt, weight: "bold", fill: colors.primary)[#title]
  v(-0.4em)
  line(length: 100%, stroke: 0.8pt + colors.border)
  v(0.4em)
}

#let skill-bar(name, level) = {
  block(width: 100%, height: 1.2em)[
    #grid(
      columns: (1fr, 3fr),
      column-gutter: 0.5em,
      align: left + horizon,
      text(size: 9pt, weight: "medium")[#name],
      block(width: 100%, height: 4pt, fill: colors.border, radius: 2pt, clip: true)[
        #block(width: level, height: 100%, fill: colors.primary, radius: 2pt)[]
      ],
    )
  ]
  v(0.35em)
}

#let contact-item(icon, info) = {
  grid(columns: (1.5em, 1fr), column-gutter: 0.3em, align: left)[
    #text(fill: colors.primary, weight: "bold", size: 9pt)[#icon],
    #text(size: 9pt)[#info],
  ]
  v(0.3em)
}

#let main-heading(title) = {
  v(0.5em)
  text(size: 14pt, weight: "bold", fill: colors.primary)[#title]
  v(-0.4em)
  line(length: 100%, stroke: 0.8pt + colors.border)
  v(0.4em)
}

#let cv-item(title, subtitle, date, location, body) = {
  grid(
    columns: (1fr, auto),
    column-gutter: 1em,
    text(weight: "bold", size: 11pt)[#title],
    text(fill: colors.primary, weight: "bold", size: 9pt)[#date],
  )
  v(-0.3em)
  grid(
    columns: (1fr, auto),
    column-gutter: 1em,
    text(style: "italic", fill: colors.text-muted, size: 9pt)[#subtitle],
    text(fill: colors.text-muted, size: 9pt)[#location],
  )
  v(0.4em)
  block(width: 100%)[#body]
  v(1em)
}

#grid(
  columns: (32%, 68%),
  rows: (1fr),
  gutter: 0pt,

  block(width: 100%, height: 100%, fill: colors.bg-canvas, inset: (top: 2cm, bottom: 2cm, left: 1.5cm, right: 1cm))[
    #text(size: 22pt, weight: "bold", fill: colors.primary)[您的姓名]
    #v(0.3em)
    #text(size: 11pt, weight: "medium", fill: colors.text-muted)[您的职位 / 方向]
    #v(1.5em)

    #side-heading("联系方式")
    #contact-item("TEL", "您的手机号")
    #contact-item("MAIL", "your@example.com")
    #contact-item("WEB", "您的主页")
    #contact-item("GIT", "github.com/username")

    #side-heading("开发技能")
    #skill-bar("技能一", 90%)
    #skill-bar("技能二", 85%)
    #skill-bar("技能三", 80%)
    #skill-bar("技能四", 75%)

    #side-heading("其他能力")
    - 领域/工具描述一
    - 领域/工具描述二
    - 语言与水平

    #side-heading("语言能力")
    - 中文（母语/水平）
    - 英语（等级/用途）
  ],

  block(width: 100%, height: 100%, inset: (top: 2cm, bottom: 2cm, left: 1cm, right: 1.5cm))[
    #main-heading("教育背景")
    #cv-item(
      "学校名称",
      "学历 · 专业",
      "YYYY.MM - YYYY.MM",
      "城市",
      [
        - *学业表现*：排名、奖学金等。
        - *核心课程*：与岗位相关的课程。
      ]
    )

    #main-heading("核心实习与项目经历")
    #cv-item(
      "公司/单位名称",
      "职位",
      "YYYY.MM - YYYY.MM",
      "城市",
      [
        - 工作内容与成果描述。
      ]
    )

    #cv-item(
      "项目名称 A",
      "角色 | 技术栈",
      "YYYY.MM - 至今",
      "",
      [
        - 项目描述与您的贡献。
      ]
    )

    #cv-item(
      "项目名称 B",
      "角色 | 技术栈",
      "YYYY.MM - 至今",
      "",
      [
        - 项目描述与成果。
      ]
    )

    #main-heading("竞赛荣誉")
    #cv-item(
      "奖项类别",
      "竞赛/认证",
      "YYYY - YYYY",
      "",
      [
        - *国家级/省部级*：奖项与角色。
        - *校级/其他*：荣誉与认证。
      ]
    )
  ],
)
