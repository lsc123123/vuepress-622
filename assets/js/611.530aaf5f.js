(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{936:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"who"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#who"}},[s._v("#")]),s._v(" who")]),s._v(" "),a("p",[s._v("显示当前所有登陆用户的信息。")]),s._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[s._v("#")]),s._v(" 概要")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("who")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("am i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"主要用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要用途"}},[s._v("#")]),s._v(" 主要用途")]),s._v(" "),a("ul",[a("li",[s._v("当没有给出非选项参数时，按以下字段顺序为每个当前用户打印信息：登录用户名称，终端信息，登录时间，远程主机或X display。")]),s._v(" "),a("li",[s._v("当用户执行 "),a("code",[s._v("who am i")]),s._v(" 时，只显示运行该命令的用户的信息。")])]),s._v(" "),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-a, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--all")]),s._v("                                等价于调用 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-b -d --login -p -r -t -T -u'")]),s._v("。\n-b, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--boot")]),s._v("                               上次系统启动的时间。\n-d, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dead")]),s._v("                               打印 dead 状态的进程。\n-H, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--heading")]),s._v("                            打印列标题行。\n-l, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--login")]),s._v("                              打印系统登录进程。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lookup")]),s._v("                                 尝试通过 DNS 规范主机名。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v("                                       仅显示和标准输入关联的主机名和用户。\n-p, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--process")]),s._v("                            打印由 init 生成的活动进程。\n-q, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--count")]),s._v("                              列出所有已登录的用户的名称和数量。\n-r, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--runlevel")]),s._v("                           打印当前运行级别。\n-s, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--short")]),s._v("                              仅打印名称、行和时间（默认）。\n-t, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--time")]),s._v("                               打印上次系统时钟更改。\n-T, -w, --mesg, --message, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--writable")]),s._v("    将 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+、-、?'")]),s._v(" 中的一个作为用户的消息状态添加到用户名称后面。\n-u, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--users")]),s._v("                              列出登录的用户。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                                   显示帮助信息并退出。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("                                显示版本信息并退出。\n\n关于 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" 选项的 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+、-、?'")]),s._v("：\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+'")]),s._v("  允许写入信息\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-'")]),s._v("  禁止写入信息\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'?'")]),s._v("  不能查找到终端设备\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("file（可选）：指定 "),a("code",[s._v("file")]),s._v(" 代替默认的 "),a("code",[s._v("/var/run/utmp")]),s._v(" 、"),a("code",[s._v("/etc/utmp")]),s._v(" ；通常使用 "),a("code",[s._v("/var/log/wtmp")]),s._v(" 作为参数用于查看过去登陆系统的用户。")]),s._v(" "),a("h2",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[s._v("#")]),s._v(" 返回值")]),s._v(" "),a("p",[s._v("返回0表示成功，返回非0值表示失败。")]),s._v(" "),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# who")]),s._v("\nroot     pts/0        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2013")]),s._v("-08-19 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":04 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.134"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nroot     pts/1        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2013")]),s._v("-12-20 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":37 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.111")]),s._v(".155.40"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# who -q")]),s._v("\nroot root\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# users=2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# who -H")]),s._v("\nNAME     LINE         "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v("             COMMENT\nroot     pts/0        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2013")]),s._v("-08-19 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":04 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.134"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nroot     pts/1        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2013")]),s._v("-12-20 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":37 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.111")]),s._v(".155.40"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# who -w")]),s._v("\nroot     + pts/0        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2013")]),s._v("-08-19 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":04 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.134"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nroot     + pts/1        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2013")]),s._v("-12-20 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":37 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180.111")]),s._v(".155.40"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("ol",[a("li",[s._v("该命令是"),a("code",[s._v("GNU coreutils")]),s._v("包中的命令，相关的帮助信息请查看"),a("code",[s._v("man -s 1 who")]),s._v("，"),a("code",[s._v("info coreutils 'who invocation'")]),s._v("。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);