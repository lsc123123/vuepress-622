(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{871:function(e,s,a){"use strict";a.r(s);var t=a(4),r=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"tempfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tempfile"}},[e._v("#")]),e._v(" tempfile")]),e._v(" "),s("p",[e._v("shell中给临时文件命名")]),e._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[e._v("#")]),e._v(" 补充说明")]),e._v(" "),s("p",[e._v("有时候在写Shell脚本的时候需要一些临时存储数据的才做，最适合存储临时文件数据的位置就是"),s("code",[e._v("/tmp")]),e._v("，因为该目录中所有的内容在系统重启后就会被清空。下面是两种方法为临时数据生成标准的文件名。")]),e._v(" "),s("h3",{attrs:{id:"tempfile命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tempfile命令"}},[e._v("#")]),e._v(" tempfile命令")]),e._v(" "),s("p",[s("code",[e._v("tempfile命令")]),e._v("只有在基于Debian的发行版中才默认自带，比如Ubuntu，其他发行版没有这个命令。")]),e._v(" "),s("p",[e._v("用tempfile命令为一个临时文件命名：")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("temp_file_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("tempfile"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("用一个加带了随机数的文件名作为临时文件命名：")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("temp_file_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/tmp/file_'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$RANDOM")]),e._v('"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("$RANDOM是一个返回随机数的环境变量。")]),e._v(" "),s("h3",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[e._v("#")]),e._v(" $$变量")]),e._v(" "),s("p",[e._v("如果没有tempfile命令的Linux发行版，也可以使用自己的临时文件名：")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("temp_file_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/tmp/file.$"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("code",[e._v("$$")]),e._v("是系统预定义变量，显示当前所在进程的进程号，用"),s("code",[e._v(".$$")]),e._v("作为添加的后缀会被扩展成当前运行脚本的进程id。")])])}),[],!1,null,null,null);s.default=r.exports}}]);