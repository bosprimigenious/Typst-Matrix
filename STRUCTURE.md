# my-typst-workspace 完整项目目录结构

> 以下为当前仓库的完整文件树。`03_resume/` 与 `03_my_resume/` 已加入 .gitignore，不会提交；`*.pdf` 亦不提交。

```
my-typst-workspace/
├── .gitignore
├── typst.toml
├── README.md
├── STRUCTURE.md                    # 本文件：完整目录说明
├── .vscode/
│   └── settings.json
│
├── data_center/                    # 🌐 双语简历 TOML 数据池
│   ├── profile_zh.toml
│   └── profile_en.toml
│
├── cv_templates/                   # 🌐 双语简历引擎（lang 路由）
│   └── resume_engine.typ
│
├── templates/                      # 通用模板目录
│   └── README.md
│
├── 00_core_engine/                 # ⚙️ 核心引擎与全局宏包
│   ├── fonts.typ                   # 思源黑体/宋体、Fira Code 统一定义
│   ├── code_theme.typ               # 代码高亮（可接 Codly）
│   ├── admonitions.typ              # 提示框 Info / Warning / Danger
│   └── gentle_clues.typ             # Gentle-Clues Callout 使用说明
│
├── 01_basics/                      # 学习与测试
│   ├── test_fonts.typ
│   └── test_fonts.pdf
│
├── 02_cs_academics/                # 🎓 计科专业与学业（北邮定制）
│   ├── bupt_lab_reports/
│   │   ├── os_lab.typ
│   │   ├── os_lab.pdf
│   │   ├── network_lab.typ
│   │   └── ai_model_training.typ
│   ├── exam_cheatsheets/
│   │   └── README.md
│   ├── leetcode_notebook/
│   │   └── README.md
│   ├── math_modeling/
│   │   ├── README.md
│   │   └── mcm_ieee_template.typ    # Charged-IEEE 数模/学术模板
│   └── reading_groups/
│       └── README.md
│
├── 03_resume/                      # 🔒 简历目录（.gitignore，不提交）
│   └── （与 03_my_resume 二选一使用，内容不提交）
│
├── 03_my_resume/                   # 🔒 个人简历（.gitignore，不提交）
│   ├── my_resume.typ               # 双栏 SixtySecondsCV 风格
│   ├── my_resume.pdf
│   ├── resume_aero_minimal.typ     # 单栏极简 Aero-Minimalist
│   ├── resume_aero_minimal.pdf
│   ├── resume_golden_dual.typ      # 黄金比例双栏 Golden-Dual
│   ├── resume_golden_dual.pdf
│   ├── cv_bento.typ                # Bento Box 卡片流
│   ├── cv_bento.pdf
│   ├── cv_tufte.typ                # Tufte 学术旁注风
│   ├── cv_tufte.pdf
│   ├── cv_cli.typ                  # CLI/终端极客风
│   └── cv_cli.pdf
│
├── 04_software_engineering/        # 💻 全栈与工程化
│   ├── prd_docs/
│   │   └── README.md
│   ├── api_specs/
│   │   ├── README.md
│   │   └── gentle_clues_doc_example.typ
│   ├── architecture_design/
│   │   └── README.md
│   ├── database_schema/
│   │   └── README.md
│   ├── git_workflow_guide/
│   │   └── README.md
│   └── test_cases/
│       └── README.md
│
├── 05_reports/                     # 报告/论文
│   └── final_report.typ
│
├── 06_freelance_and_part_time/     # 💰 兼职接单与外包
│   ├── quotes_and_proposals/
│   │   └── README.md
│   ├── contract_templates/
│   │   └── README.md
│   ├── invoices/
│   │   └── README.md
│   ├── timesheets/
│   │   └── README.md
│   └── handovers/
│       └── README.md
│
├── 07_novels_and_publishing/       # 📖 小说与出版
│   ├── novel_manuscript/
│   │   └── README.md
│   ├── character_sheets/
│   │   └── README.md
│   ├── world_building/
│   │   └── README.md
│   ├── screenplay_format/
│   │   └── README.md
│   └── book_cover_design/
│       └── README.md
│
├── 08_presentations_and_pitch/      # 📊 幻灯片与路演（Touying）
│   ├── tech_sharing_slides/
│   │   └── README.md
│   ├── project_defense/
│   │   └── README.md
│   ├── academic_report/
│   │   └── README.md
│   └── startup_pitch_deck/
│       └── README.md
│
├── 09_posters_and_visuals/         # 🖼️ 海报与可视化
│   ├── academic_posters_a0/
│   │   └── README.md
│   ├── event_flyers/
│   │   └── README.md
│   ├── infographic_resumes/
│   │   └── README.md
│   ├── algorithm_flowcharts/
│   │   ├── README.md
│   │   └── fletcher_example.typ     # Fletcher 流程图示例
│   ├── cetz_diagrams/
│   │   ├── README.md
│   │   └── cetz_example.typ        # CeTZ 矢量图示例
│   └── neural_net_topology/
│       └── README.md
│
├── 10_resume_and_portfolio/        # 💼 简历变体与作品集（可提交）
│   ├── bilingual/                  # 🌐 中英双语一键输出
│   │   ├── build_cv_zh.typ
│   │   ├── build_cv_zh.pdf
│   │   ├── build_cv_en.typ
│   │   └── build_cv_en.pdf
│   ├── resume_templates/          # 可提交的占位模板（无隐私）
│   │   ├── README.md
│   │   ├── my_resume_template.typ  # 双栏简历模板（仅占位）
│   │   └── my_resume_template.pdf
│   ├── resume_variants/
│   │   └── README.md
│   ├── cover_letters/
│   │   └── README.md
│   ├── portfolio_book/
│   │   └── README.md
│   └── personal_business_card/
│       └── README.md
│
├── 11_personal_management/        # 📓 个人生活与效率
│   ├── bullet_journal/
│   │   └── README.md
│   ├── fitness_tracker/
│   │   └── README.md
│   ├── finance_reports/
│   │   └── README.md
│   ├── guitar_tabs/
│   │   └── README.md
│   └── blog_post_drafts/
│       └── README.md
│
├── brilliant_res/                  # Brilliant-CV 模板（typst init）
│   ├── cv.typ
│   ├── letter.typ
│   ├── metadata.toml
│   ├── src/
│   │   ├── avatar.png
│   │   ├── signature.png
│   │   ├── publications.bib
│   │   └── logos/
│   │       ├── abc_company.png
│   │       ├── pqr_corp.png
│   │       ├── ucla.png
│   │       └── xyz_corp.png
│   ├── modules_en/
│   │   ├── certificates.typ
│   │   ├── education.typ
│   │   ├── professional.typ
│   │   ├── projects.typ
│   │   ├── publications.typ
│   │   └── skills.typ
│   ├── modules_fr/
│   │   └── （同上 6 个 .typ）
│   └── modules_zh/
│       └── （同上 6 个 .typ）
│
└── modern_res/                     # Modern-CV 模板（typst init）
    ├── resume.typ
    ├── coverletter.typ
    ├── coverletter2.typ
    └── profile.png
```

## 不提交项（.gitignore）

| 路径 / 模式 | 说明 |
|-------------|------|
| `03_resume/` | 简历目录（含个人隐私时不提交） |
| `03_my_resume/` | 个人简历目录（同上） |
| `*.pdf` | 所有编译生成的 PDF |
| `# data_center/` | 可选：若 TOML 含真实联系方式可取消注释 |

## 根目录无编号目录说明

| 目录 | 用途 |
|------|------|
| `data_center/` | 中/英简历 TOML 数据，供 `10_resume_and_portfolio/bilingual/` 使用 |
| `cv_templates/` | 双语简历引擎 `resume_engine.typ` |
| `templates/` | 通用 .typ 模板存放处 |
| `brilliant_res/` | Brilliant-CV 包（多语言模块 + 示例） |
| `modern_res/` | Modern-CV 包（简历 + 求职信） |

## 常用编译命令（仓库根目录执行）

```powershell
# 北邮实验报告（需 --root 以解析 00_core_engine）
typst compile --root . 02_cs_academics/bupt_lab_reports/os_lab.typ

# 双语简历
typst compile --root . 10_resume_and_portfolio/bilingual/build_cv_zh.typ
typst compile --root . 10_resume_and_portfolio/bilingual/build_cv_en.typ

# 可提交的简历模板
typst compile 10_resume_and_portfolio/resume_templates/my_resume_template.typ

# 报告
typst compile 05_reports/final_report.typ

# Fletcher / CeTZ 示例
typst compile --root . 09_posters_and_visuals/algorithm_flowcharts/fletcher_example.typ
typst compile --root . 09_posters_and_visuals/cetz_diagrams/cetz_example.typ
```
