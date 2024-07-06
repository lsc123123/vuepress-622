(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{702:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nl"}},[s._v("#")]),s._v(" nl")]),s._v(" "),a("p",[s._v("为每一个文件添加行号。")]),s._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[s._v("#")]),s._v(" 概要")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FILE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"主要用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要用途"}},[s._v("#")]),s._v(" 主要用途")]),s._v(" "),a("ul",[a("li",[s._v("将每一个输入的文件添加行号后发送到标准输出。")]),s._v(" "),a("li",[s._v("当没有文件或文件为"),a("code",[s._v("-")]),s._v("时，读取标准输入")]),s._v(" "),a("li",[s._v("处理逻辑页（logical page）。")])]),s._v(" "),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-b, --body-numbering"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("STYLE           使用STYLE 为body部分的行附加行号。\n-d, --section-delimiter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CC           使用CC作为logical page的分隔符。\n-f, --footer-numbering"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("STYLE         使用STYLE 为footer部分的行附加行号。\n-h, --header-numbering"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("STYLE         使用STYLE 为header部分的行附加行号。\n-i, --line-increment"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NUMBER          行号递增间隔为NUMBER。\n-l, --join-blank-lines"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NUMBER        连续NUMBER行的空行作为一行处理。\n-n, --number-format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FORMAT           根据FORMAT插入行号。\n-p, --no-renumber                    不要在每个部分重置行号。\n-s, --number-separator"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("STRING        在行号后添加字符串STRING。\n-v, --starting-line-number"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NUMBER    每部分的起始行号。\n-w, --number-width"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NUMBER            行号宽度为NUMBER。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                               显示帮助信息并退出。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("                            显示版本信息并退出。\n\n\n默认选项为：-bt -d"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\:'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-hn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-nrn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sTAB")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w6")]),s._v("\n\nCC是由两个字符组成的，默认为"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(": ,第二个字符如果缺失则默认为:\n\nSTYLE可以为下列可用值之一：\n\na       所有行标记行号。\nt       仅为非空行标记行号。\nn       不标记行号。\npBRE    符合基础正则表达式（BRE）的行会标记行号。\n\nFORMAT可以为下列可用值之一：\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v("    左对齐，不会在开始部分补充0以满足宽度。\nrn    右对齐，不会在开始部分补充0以满足宽度。\nrz    右对齐，会在开始部分补充0以满足宽度。\n\nlogical page\n三部分组成（header， body， footer）\n起始标记（header "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":， body "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":， footer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("FILE（可选）：要处理的文件，可以为一或多个。")]),s._v(" "),a("h2",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[s._v("#")]),s._v(" 返回值")]),s._v(" "),a("p",[s._v("返回0表示成功，返回非0值表示失败。")]),s._v(" "),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("nl_logicalpage.txt：该文件用于说明nl命令处理逻辑页，内容如下：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":\nheader_1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":\nbody_1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":\nfooter_1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":\nheader_2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":\nbody_2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(":\nfooter_2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" nl_logicalpage.txt\n\n       header_1\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\tbody_1\n\n       footer_1\n\n       header_2\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\tbody_2\n\n       footer_2\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fa")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ha")]),s._v(" nl_logicalpage.txt\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\theader_1\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\tbody_1\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\tfooter_1\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\theader_2\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\tbody_2\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\tfooter_2\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fa")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ha")]),s._v(" nl_logicalpage.txt\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\theader_1\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\tbody_1\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\tfooter_1\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\theader_2\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\tbody_2\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\tfooter_2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("nl_normal.txt：该文件用于说明nl命令处理普通文件，内容如下：\nZhuangZhu-74\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-11-21\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" nl_normal.txt\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\tZhuangZhu-74\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-11-21\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1$'")]),s._v(" nl_normal.txt\n       ZhuangZhu-74\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-11-21\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^[A-Z]'")]),s._v(" nl_normal.txt\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\tZhuangZhu-74\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-11-21\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("ol",[a("li",[s._v("该命令是"),a("code",[s._v("GNU coreutils")]),s._v("包中的命令，相关的帮助信息请查看"),a("code",[s._v("man -s 1 nl")]),s._v("，"),a("code",[s._v("info coreutils 'nl invocation'")]),s._v("。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);