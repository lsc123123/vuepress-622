(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{890:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"tty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tty"}},[s._v("#")]),s._v(" tty")]),s._v(" "),a("p",[s._v("显示连接到当前标准输入的终端设备文件名")]),s._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[s._v("#")]),s._v(" 概要")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tty")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"主要用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要用途"}},[s._v("#")]),s._v(" 主要用途")]),s._v(" "),a("ul",[a("li",[s._v('显示连接到当前标准输入的终端设备文件名，当标准输入不是终端时打印 "not a tty"。')])]),s._v(" "),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-s, --silent, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--quiet")]),s._v("    不打印任何信息，只返回退出状态。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                   显示帮助信息并退出。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("                显示版本信息并退出。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[s._v("#")]),s._v(" 返回值")]),s._v(" "),a("p",[s._v("当使用 "),a("code",[s._v("-s, --silent, --quiet")]),s._v(" 时，返回码为 0 表示标准输入是终端，返回码为 1 表示标准输入不是终端，返回码为 2 表示选项错误，返回码为 3 表示有写错误发生。")]),s._v(" "),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("p",[s._v("显示连接到当前标准输入的终端设备文件名。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tty")]),s._v("\n/dev/pts/2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查找终端关联的进程（假设是 pts/2）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意是筛选 TTY 列。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pts/2 "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("ol",[a("li",[s._v("该命令是"),a("code",[s._v("GNU coreutils")]),s._v("包中的命令，相关的帮助信息请查看"),a("code",[s._v("man -s 1 tty")]),s._v("，"),a("code",[s._v("info coreutils 'tty invocation'")]),s._v("。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);