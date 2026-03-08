// 一键生成英文简历 PDF
// 在仓库根目录执行：typst compile --root . 10_resume_and_portfolio/bilingual/build_cv_en.typ

#import "../../cv_templates/resume_engine.typ": resume
#let my-data = toml("../../data_center/profile_en.toml")

#resume(my-data, lang: "en")
