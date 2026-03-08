// 接口文档示例：结合 Gentle-Clues 写说明与注意事项
// 安装：typst add gentle-clues

#import "@preview/gentle-clues:1.3.0": *

#set page(paper: "a4", margin: 2cm)
#set text(size: 11pt)
#heading(level: 1)[用户登录 API]

#info[
  本接口需在请求头中携带 `Authorization: Bearer <token>`。Token 通过登录接口获取。
]

#tip(title: "推荐")[
  生产环境请使用 HTTPS，并设置合理的超时时间。
]

#table(
  columns: (1fr, 2fr, 1fr),
  [方法], [路径], [说明],
  [POST], [/api/v1/auth/login], [用户登录],
)

#warning[
  同一 IP 在 1 分钟内超过 10 次失败请求将被临时封禁。
]
