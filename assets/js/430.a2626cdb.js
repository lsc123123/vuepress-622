(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{756:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pwconv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwconv"}},[s._v("#")]),s._v(" pwconv")]),s._v(" "),a("p",[s._v("用来开启用户的投影密码")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("pwconv命令")]),s._v(" 用来开启用户的投影密码。Linux系统里的用户和群组密码，分别存放在名称为passwd和group的文件中， 这两个文件位于"),a("code",[s._v("/etc")]),s._v("目录下。因系统运作所需，任何人都得以读取它们，造成安全上的破绽。投影密码将文件内的密码改存在"),a("code",[s._v("/etc")]),s._v('目录下的shadow和gshadow文件内，只允许系统管理者读取，同时把原密码置换为"x"字符，有效的强化了系统的安全性。')]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pwconv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ntest:x:3001:3001::/home/test:/bin/sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("此时可以发现密码段是x")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shadow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ntest:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$6")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nYOEWamm")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bz07nlv")]),s._v("/.RgJufb3FAqJJeULfwybzgxmrWqbk7O4vI0KsT6N.ujrh6dDIUcAJdfjksyuyAFDPIngZeD3cgcf.0:15022:0:99999:7:::\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);