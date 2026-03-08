// 一键生成中文简历 PDF
// 在仓库根目录执行：typst compile --root . 10_resume_and_portfolio/bilingual/build_cv_zh.typ

#import "../../cv_templates/resume_engine.typ": resume
#let my-data = toml("../../data_center/profile_zh.toml")

#resume(my-data, lang: "zh")
