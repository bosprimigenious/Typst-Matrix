// Tufte 学术旁注风格简历模板（03_resume 占位版，无个人隐私，可提交）
#set page(paper: "a4", margin: (left: 1cm, right: 2cm, top: 1.5cm, bottom: 1.5cm))
#set text(font: ("Inter", "Source Han Sans SC", "New Computer Modern", "Microsoft YaHei"), size: 10.5pt, fill: rgb("#222222"))
#set par(justify: true, leading: 0.7em)

#let tufte-entry(margin-text, title, subtitle, body) = {
  grid(
    columns: (22%, 78%),
    gutter: 2%,
    align(right)[
      #text(size: 9pt, fill: rgb("#666666"), weight: "bold")[#margin-text]
    ],
    block[
      #text(size: 11pt, weight: "bold")[#title]
      #v(-0.2em)
      #text(size: 10pt, style: "italic", fill: rgb("#444444"))[#subtitle]
      #v(0.3em)
      #body
    ],
  )
  v(1.2em)
}

#let section(title) = {
  v(0.5em)
  grid(columns: (22%, 78%), gutter: 2%, [], [
    #text(size: 14pt, weight: "bold", fill: rgb("#8c1515"))[#title]
    #v(-0.4em)
    #line(length: 100%, stroke: 0.5pt + rgb("#cccccc"))
  ])
  v(0.5em)
}

#align(right)[
  #text(size: 28pt, weight: "bold")[您的姓名]
  #v(0.2em)
  您的手机号 \  |  \ your\@example.com \  |  \ github.com/username
]
#v(2em)

#section("Education")
#tufte-entry(
  "YYYY.MM - YYYY.MM \ 城市",
  "学校名称",
  "专业 · 学历",
  [
    - *综合成绩*：排名、奖学金等。
    - *核心课程*：与岗位相关的课程。
  ]
)

#section("Experience")
#tufte-entry(
  "YYYY.MM - YYYY.MM \ 职位方向",
  "公司/单位名称",
  "职位名称",
  [
    工作内容与成果简要描述。
  ]
)

#section("Selected Projects")
#tufte-entry(
  "YYYY.MM - Present \ 技术方向",
  "项目名称 A",
  "您的角色",
  [
    项目描述与您的贡献、技术栈与成果。
  ]
)
#tufte-entry(
  "YYYY.MM - Present \ 技术方向",
  "项目名称 B",
  "您的角色",
  [
    项目描述与亮点。
  ]
)

#section("Honors")
- 奖项或认证一
- 奖项或认证二
- 奖项或认证三
