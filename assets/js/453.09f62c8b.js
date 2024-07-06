(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{777:function(a,s,t){"use strict";t.r(s);var e=t(4),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"rev"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rev"}},[a._v("#")]),a._v(" rev")]),a._v(" "),s("p",[a._v("将文件内容以字符为单位反序输出")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("rev命令")]),a._v(" 将文件中的每行内容以字符为单位反序输出，即第一个字符最后输出，最后一个字符最先输出，依次类推。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("rev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("p",[a._v("文件：指定要反序显示内容的文件。")]),a._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat iptables.bak")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Generated by iptables-save v1.3.5 on Thu Dec 26 21:25:15 2013")]),a._v("\n*filter\n:INPUT DROP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("48113")]),a._v(":2690676"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n:FORWARD accept "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n:OUTPUT ACCEPT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3381959")]),a._v(":1818595115"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" lo "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" RELATED,ESTABLISHED "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" icmp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" OUTPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" lo "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\nCOMMIT\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Completed on Thu Dec 26 21:25:15 2013")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# rev iptables.bak ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3102")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("51")]),a._v(":52:12 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("62")]),a._v(" ceD uhT no "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.3")]),a._v(".1v evas-selbatpi yb detareneG "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\nretlif*\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6760962")]),a._v(":31184"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" PORD TUPNI:\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" TPECCA DRAWROF:\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5115958181")]),a._v(":9591833"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" TPECCA TUPTUO:\n TPECCA j- ol i- TUPNI A-\n TPECCA j- "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" tropd-- pct m- pct p- TUPNI A-\n TPECCA j- 08 tropd-- pct m- pct p- TUPNI A-\n TPECCA j- DEHSILBATSE,DETALER etats-- etats m- TUPNI A-\n TPECCA j- pmci p- TUPNI A-\n TPECCA j- ol o- TUPTUO A-\nTIMMOC\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3102")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("51")]),a._v(":52:12 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("62")]),a._v(" ceD uhT no detelpmoC "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);