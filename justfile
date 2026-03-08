# Typst-Matrix 任务入口，需在仓库根目录执行
root := justfile_directory()
output_dir := root + "/output"

default:
  @just --list --unsorted

# 双语简历：编译中英文 PDF 到 output/
build-cv:
  mkdir -p "{{output_dir}}"
  typst compile --root . 10_resume_and_portfolio/bilingual/build_cv_zh.typ "{{output_dir}}/Resume_ZH.pdf"
  typst compile --root . 10_resume_and_portfolio/bilingual/build_cv_en.typ "{{output_dir}}/Resume_EN.pdf"

# 热更新监听（开发简历时使用）
watch-cv:
  typst watch --root . 10_resume_and_portfolio/bilingual/build_cv_zh.typ

# 监听模式，改代码即出图
dev path="03_resume/resume_aero_minimal.typ":
  typst watch --root . "{{path}}"

# 单文件编译到 output/resume.pdf
build path="03_resume/resume_aero_minimal.typ":
  mkdir -p "{{output_dir}}"
  typst compile --root . "{{path}}" "{{output_dir}}/resume.pdf"

# 编译 03_resume 下主要模板到 output/
build-all:
  mkdir -p "{{output_dir}}"
  typst compile --root . 03_resume/resume_aero_minimal.typ "{{output_dir}}/resume_aero.pdf"
  typst compile --root . 03_resume/resume_golden_dual.typ "{{output_dir}}/resume_golden.pdf"
  typst compile --root . 03_resume/my_resume.typ "{{output_dir}}/my_resume.pdf"

# 北邮实验报告示例
build-bupt:
  mkdir -p "{{output_dir}}"
  typst compile --root . 02_cs_academics/bupt_lab_reports/os_lab.typ "{{output_dir}}/BUPT_OS_Lab.pdf"

# 格式化所有 .typ（PR 前建议执行）
fmt:
  typstyle format -i "{{root}}/**/*.typ"

format: fmt

# 清理构建产物
clean:
  rm -rf "{{output_dir}}"/*.pdf "{{root}}/assets/gallery"/*.png
