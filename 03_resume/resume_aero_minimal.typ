// Aero-Minimalist 单栏简历，依赖 00_core_engine/theme.typ

#import "../00_core_engine/theme.typ": colors

#set page(
  paper: "a4",
  margin: (x: 1.8cm, y: 1.5cm),
)

// 10.5pt 配合 Inter 在 A4 打印下的可读性；0.65em 行距兼顾中英混排
#set text(
  font: ("Inter", "Source Han Sans SC", "New Computer Modern", "Microsoft YaHei"),
  size: 10.5pt,
  fill: colors.text-main,
  weight: "regular",
)
#set par(justify: true, leading: 0.65em)

#let cv-header(name, title, contacts) = {
  align(center)[
    #text(size: 26pt, weight: "bold", fill: colors.primary)[#name]
    #v(0.2em)
    #text(size: 11pt, weight: "medium", fill: colors.text-muted)[#title]
    #v(0.6em)
    #text(size: 9pt)[#contacts.join("  |  ")]
  ]
  v(1.5em)
}

#let cv-section(title) = {
  v(0.5em)
  text(size: 13pt, weight: "bold", fill: colors.primary)[#title]
  v(-0.4em)
  line(length: 100%, stroke: 0.8pt + colors.border)
  v(0.4em)
}

#let cv-entry(title, subtitle, date, location, body) = {
  grid(
    columns: (1fr, auto),
    row-gutter: 0.4em,
    text(weight: "bold", size: 10.5pt)[#title],
    text(fill: colors.primary, weight: "medium")[#date],
    text(style: "italic", fill: colors.text-muted)[#subtitle],
    text(fill: colors.text-muted)[#location],
  )
  v(0.4em)
  body
  v(1em)
}

#let cv-skill(category, items) = {
  grid(
    columns: (15%, 1fr),
    gutter: 1em,
    text(weight: "bold", fill: colors.primary)[#category],
    text()[#items],
  )
  v(0.5em)
}

#cv-header(
  "您的姓名",
  "学校 · 专业 / 求职方向",
  (
    "您的手机号",
    "your@example.com",
    "您的主页或博客",
    "github.com/username",
  )
)

#cv-section("教育背景")
#cv-entry(
  "学校名称 (英文缩写可选)",
  "学历 · 专业名称",
  "YYYY.MM - YYYY.MM",
  "城市",
  [
    - *学业表现*：排名、奖学金、荣誉等简要描述。
    - *核心课程*：列出与岗位相关的核心课程。
  ]
)

#cv-section("实习经历")
#cv-entry(
  "公司/单位名称",
  "职位名称",
  "YYYY.MM - YYYY.MM",
  "城市或远程",
  [
    - 简要描述工作内容与成果（可多条）。
    - 突出技术栈与量化结果。
  ]
)

#cv-section("核心项目经历")
#cv-entry(
  "项目名称 A",
  "角色 | 技术栈关键词",
  "YYYY.MM - 至今",
  "项目类型（如：独立开发/团队）",
  [
    - 项目背景与您的职责。
    - 技术亮点与成果。
  ]
)

#cv-entry(
  "项目名称 B",
  "角色 | 技术栈",
  "YYYY.MM - 至今",
  "项目类型",
  [
    - 简要描述与成果。
  ]
)

#cv-section("荣誉奖项")
#cv-entry(
  "奖项类别概括",
  "竞赛/认证等",
  "YYYY - YYYY",
  "",
  [
    - *国家级/省部级*：奖项名称与角色。
    - *校级/其他*：荣誉与认证。
  ]
)

#cv-section("专业技能")
#cv-skill("编程语言", "如：Python, C++, TypeScript")
#cv-skill("前端/后端", "如：Vue, React, Node.js")
#cv-skill("工具与领域", "如：Linux, Docker, 算法/建模")
