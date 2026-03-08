// CLI / 终端代码极客风格简历模板（03_resume 占位版，无个人隐私，可提交）
#set page(paper: "a4", margin: 1.5cm, fill: rgb("#1e1e1e"))
#set text(font: ("Fira Code", "Consolas", "Microsoft YaHei"), size: 10.5pt, fill: rgb("#d4d4d4"))
#set par(leading: 0.8em)

#let key(s) = text(fill: rgb("#9cdcfe"))["#s"]
#let str(s) = text(fill: rgb("#ce9178"))["#s"]
#let bool(s) = text(fill: rgb("#569cd6"))[#s]

{
  #key("name") : #str("您的姓名"),
  #key("alias") : #str("您的昵称或英文名"),
  #key("status") : #str("Seeking 您的求职方向"),

  #key("contact") : {
    #key("phone")  : #str("您的手机号"),
    #key("email")  : #str("your@example.com"),
    #key("web")    : #str("您的主页"),
    #key("github") : #str("github.com/username")
  },

  #key("education") : [
    {
      #key("university") : #str("学校名称"),
      #key("major")      : #str("专业名称"),
      #key("timeline")   : #str("YYYY.MM - YYYY.MM"),
      #key("rank")       : #str("排名或荣誉")
    }
  ],

  #key("skills") : {
    #key("frontend") : [#str("技能一"), #str("技能二")],
    #key("backend")  : [#str("技能三"), #str("技能四")],
    #key("domain")   : [#str("领域/工具一"), #str("领域/工具二")]
  },

  #key("experience") : [
    {
      #key("company")  : #str("公司/单位名称"),
      #key("role")     : #str("职位名称"),
      #key("period")   : #str("YYYY.MM - YYYY.MM"),
      #key("achievements") : [
        #str("成果描述一"),
        #str("成果描述二")
      ]
    }
  ],

  #key("projects") : [
    {
      #key("name") : #str("项目名称 A"),
      #key("type") : #str("技术方向"),
      #key("desc") : #str("项目描述与成果")
    },
    {
      #key("name") : #str("项目名称 B"),
      #key("type") : #str("技术方向"),
      #key("desc") : #str("项目描述与成果")
    }
  ],

  #key("honors") : [
    #str("奖项或认证一"),
    #str("奖项或认证二")
  ],

  #key("is_ready_to_work") : #bool("true")
}
