// 统一的代码高亮主题（可引入 Codly 库）
// 使用：#import "00_core_engine/code_theme.typ"
// 在文档中先 #import "@preview/codly:0.3.0": codly 后，在此统一设置 codly.theme

// 若已通过 typst.toml 或 typst add 安装 codly，可在此集中配置，例如：
// #let code-theme = codly.theme("github-dark")  // 或 "nord", "dracula" 等
// 在需要代码块的文档中：codly.themed-block(code-theme)[#raw("fn main() {}")]

// 未安装 Codly 时使用 Typst 原生 raw 块
#let simple-code(body) = block(
  fill: rgb("#f5f5f5"),
  inset: 10pt,
  radius: 4pt,
  width: 100%,
)[
  #set text(font: ("Fira Code", "Consolas", "Microsoft YaHei"))
  #raw(body, lang: "text")
]
