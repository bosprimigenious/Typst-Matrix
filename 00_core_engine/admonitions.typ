// 自定义提示框 (Info, Warning, Danger)
// 使用：#import "00_core_engine/admonitions.typ"

#let admonition(kind, title, body) = {
  block(
    fill: if kind == "danger" { rgb("#ffebee") } else if kind == "warning" { rgb("#fff8e1") } else { rgb("#e3f2fd") },
    stroke: (left: 4pt + (if kind == "danger" { rgb("#c62828") } else if kind == "warning" { rgb("#f9a825") } else { rgb("#1565c0") })),
    inset: (left: 12pt, right: 12pt, top: 8pt, bottom: 8pt),
    radius: 4pt,
    width: 100%,
  )[
    #text(weight: "bold", size: 10pt)[#title]
    #v(0.4em)
    #body
  ]
}

#let info(title: "提示", body) = admonition("info", title, body)
#let warning(title: "注意", body) = admonition("warning", title, body)
#let danger(title: "警告", body) = admonition("danger", title, body)
