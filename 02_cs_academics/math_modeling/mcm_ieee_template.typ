// 数模 / IEEE 风格双栏论文模板（Charged-IEEE）
// 适用于数模国赛、美赛及 IEEE 会议/期刊排版
// 安装：typst add charged-ieee

#import "@preview/charged-ieee:0.1.4": ieee

#show: ieee.with(
  title: [基于 XXX 的 YYY 模型研究],
  abstract: [
    本文针对 XXX 问题，建立了 YYY 模型。首先……其次……最后……实验表明，该模型能够有效……（请替换为你的摘要。）
  ],
  authors: (
    (name: "队员一", department: [学院], organization: [北京邮电大学], location: [北京], email: "xxx@bupt.edu.cn"),
    (name: "队员二", department: [学院], organization: [北京邮电大学], location: [北京], email: "xxx@bupt.edu.cn"),
    (name: "队员三", department: [学院], organization: [北京邮电大学], location: [北京], email: "xxx@bupt.edu.cn"),
  ),
  index-terms: ("数学建模", "优化", "XXX", "YYY"),
  bibliography: none,  // 若有 refs.bib：bibliography("refs.bib")
)

= 问题重述
（请在此填写问题背景与重述。）

= 模型假设与符号说明
（假设列表、符号表。）

= 模型的建立与求解
（模型推导、算法、求解过程。）

= 结果分析与灵敏度
（数值结果、图表、讨论。）

= 结论与改进方向
（总结与展望。）

// 若有参考文献：
// = 参考文献
// #bibliography("refs.bib")
