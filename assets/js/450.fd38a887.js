(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{773:function(s,a,e){"use strict";e.r(a);var r=e(4),t=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore"}},[s._v("#")]),s._v(" restore")]),s._v(" "),a("p",[s._v("所进行的操作和dump指令相反")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("restore命令")]),s._v(" 是dump命令的逆过程，用于还原dump命令生成的备份文件。倾倒操作可用来备份文件，而还原操作则是写回这些已备份的文件。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("restore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("区块大小"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：设置区块大小，单位为Byte；\n-c：不检查倾倒操作的备份格式，仅准许读取使用旧格式的备份文件；\n-C：使用对比模式，将备份的文件与现行的文件相互对比；\n-D"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件系统"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：允许用户指定文件系统的名称；\n-f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("备份文件"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：从指定的文件中读取备份数据，进行还原操作；\n-h：仅解除目录而不包括与该目录相关的所有文件；\n-i：使用互动模式，在进行还原操作时，restore指令将依序询问用户；\n-m：解开符合指定的inode编号的文件或目录而非用文件名称指定；\n-r：进行还原操作；\n-R：全面还原文件系统时，检查应从何处开始进行；\n-s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件编号"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：当备份数据超过一卷磁带时，用户可以指定备份文件的编号；\n-t：指定文件名称，若该文件已存在备份文件中，则列出它们的名称；\n-v：显示指令执行过程；\n-x：设置文件名称，且从指定的存储媒体里读入它们，若该文件已存在在备份文件中，则将其还原到文件系统内；\n-y：不询问任何问题，一律以同意回答并继续执行指令。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("dump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /dev/hda3 /home/frank/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("用restore命令来恢复备份：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("restore rf /dev/hda3 /home/frank\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("用restore命令来查看备份文件里的文件列表：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("restore ft /dev/hda3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);