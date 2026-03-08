# Typst-Matrix 宣发大纲（高信噪比技术布道）

供 V2EX / 知乎 / 掘金 / 校园论坛 等分层投放时直接套用或改写。文末附仓库链接与 Star 引导。

---

## 一、垂直极客社区（V2EX / 掘金 / GitHub 讨论区）

**拟定标题：**  
《苦 LaTeX 久矣：用 Typst + GitHub Actions 搭了一套自动化排版流水线》

**叙事逻辑：** 技术分享，突出架构与工程化，不卖惨不标题党。

**建议结构：**

1. **痛点（2–3 句）**  
   传统排版工具数据与视图强耦合：改内容要动样式，换模板等于重排一整份文档；本地 LaTeX 环境又极易报错。

2. **思路**  
   把前端的「数据与视图分离」搬到排版：用 TOML 维护姓名、经历、技能等数据，Typst 只负责渲染；再通过 GitHub Actions 在云端编译，Fork 者无需装任何环境。

3. **实现要点**  
   - 数据层：`data_center/profile.toml` 单文件配置  
   - 视图层：多套简历/报告模板，同一份数据多风格输出  
   - 流水线：Push 触发编译，PDF 自动进 Releases，可选预览图写回仓库

4. **现状与开源**  
   目前内置多风格简历模板（极简单栏、双栏、Bento、CLI 风等）、统一 Design System（Slate & Navy 色板），全部开源，可 Fork 直接用或二次开发。

5. **链接与引导**  
   仓库：`https://github.com/bosprimigenious/Typst-Matrix`  
   若对这类「配置即文档 + CI 出图」的架构感兴趣，欢迎 Star 或提 Issue/PR。

---

## 二、校园与算法竞赛基本盘（北邮人论坛 / 知乎数模 / 期末季）

**拟定标题：**  
《还在被 Word 格式折磨？北邮向 Typst 实验报告/简历框架（Fork 即用）》

**叙事逻辑：** 直击毕业/期末痛点，强调「不配环境、网页改表就能出 PDF」。

**建议结构：**

1. **场景**  
   期末实验报告、毕论格式、求职简历：Word 三线表/引用崩、LaTeX 本地装不动，很多人被格式拖到最后一刻。

2. **方案**  
   把常用格式做成 Typst 模板，数据单独放在 TOML 里；你只需 Fork 仓库，在网页里改 `profile.toml`（姓名、学校、经历等），保存后等几十秒，到 Releases 下 PDF 即可。无需装 Typst、无需懂语法。

3. **适合谁**  
   要交实验报告、做毕设、投简历的同学；想统一「一份数据多份样式」的也可以直接用。

4. **致谢与引导**  
   欢迎校友/同好 Fork 使用，若觉得省事，点个 Star 当收藏，后续会持续加模板（如毕论、数模等）。

5. **链接**  
   同上，仓库地址 + 简短「Fork → 改 Settings 里 Actions 权限 → 改 profile.toml → Releases 下载」。

---

## 三、知乎长尾 / SEO（回答问题时植入）

**目标问题示例：**  
- 「2026 年还有必要学 LaTeX 吗？」  
- 「如何写一份优秀的计科/算法工程师简历？」  
- 「有什么冷门但很强的开源工具？」

**作答结构（通用）：**

1. **先答主问题**  
   客观分析现状（LaTeX 优点与配置成本、简历排版痛点、工具选择等）。

2. **再给替代/补充方案**  
   引出「数据与视图分离 + 云端编译」：用 Typst 替代或补充 LaTeX，用 TOML 管内容、CI 出 PDF，避免本地环境问题。

3. **证据与截图**  
   放 1–2 张清晰 PDF 效果图或 Releases 页截图，证明「Fork 改配置就能出这样的结果」。

4. **附链接与一句引导**  
   附 GitHub 链接，加一句：若你也在找「不折腾环境就能出简历/报告」的方案，可以试试 Typst-Matrix，觉得有用不妨 Star。

---

## 四、投放与生态 checklist

- [ ] **Awesome 榜单**：向 [awesome-typst](https://github.com/qjcg/awesome-typst) 提 PR，归类到 Templates 或 Workflows。
- [ ] **科技爱好者周刊**：在周刊 GitHub Issues 自荐，用一句概括：「基于数据与视图分离的 Typst 全自动排版框架，Fork 改 TOML 即出 PDF」。
- [ ] **Hacker News**：若 README 有清晰英文版，可发 Show HN，标题示例：`Show HN: Typst-Matrix – Data-driven typesetting with CI/CD, no local install`。
- [ ] **所有帖子**：首段或末段必带仓库链接；结尾可统一加「若对你有帮助，欢迎 Star」。

---

## 五、话术金句（可直接摘抄）

- 「你不需要懂 Typst，只要会填表。」
- 「Fork → 改 profile.toml → Push → Releases 下 PDF，全程零环境。」
- 「数据与视图分离，换模板不重排内容。」
- 「若觉得这套架构对你有用，欢迎 Star 收藏，便于后续复用与二次开发。」
