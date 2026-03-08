// 思源黑体/宋体、Fira Code 编程字体统一定义
// 在文档中 #import "00_core_engine/fonts.typ"

#let sans-serif = ("Source Han Sans SC", "Noto Sans SC", "Microsoft YaHei")
#let serif = ("Source Han Serif SC", "Noto Serif SC", "SimSun", "SimSun")
#let mono = ("Fira Code", "JetBrains Mono", "Consolas", "Microsoft YaHei")

// 正文：无衬线
#let set-body-font() = {
  set text(font: sans-serif)
}

// 正文：衬线（报告、论文）
#let set-serif-font() = {
  set text(font: serif)
}

// 代码与等宽
#let set-mono-font() = {
  set text(font: mono)
}
