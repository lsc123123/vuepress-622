(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{470:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"dos2unix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dos2unix"}},[s._v("#")]),s._v(" dos2unix")]),s._v(" "),a("p",[s._v("将DOS格式文本文件转换成Unix格式")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("dos2unix命令")]),s._v(" 用来将DOS格式的文本文件转换成UNIX格式的（DOS/MAC to UNIX text file format converter）。DOS下的文本文件是以"),a("code",[s._v("\\r\\n")]),s._v("作为断行标志的，表示成十六进制就是0D 0A。而Unix下的文本文件是以\\n作为断行标志的，表示成十六进制就是0A。DOS格式的文本文件在Linux底下，用较低版本的vi打开时行尾会显示"),a("code",[s._v("^M")]),s._v("，而且很多命令都无法很好的处理这种格式的文件，如果是个shell脚本，。而Unix格式的文本文件在Windows下用Notepad打开时会拼在一起显示。因此产生了两种格式文件相互转换的需求，对应的将UNIX格式文本文件转成成DOS格式的是unix2dos命令。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("dos2unix "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-hkqV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-c convmode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-o "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-n infile outfile "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-k：保持输出文件的日期不变\n-q：安静模式，不提示任何警告信息。\n-V：查看版本\n-c：转换模式，模式有：ASCII, 7bit, ISO, Mac, 默认是：ASCII。\n-o：写入到源文件\n-n：写入到新文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("参数：需要转换到文件。")]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("最简单的用法就是dos2unix直接跟上文件名：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("dos2unix "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果一次转换多个文件，把这些文件名直接跟在dos2unix之后。（注：也可以加上"),a("code",[s._v("-o")]),s._v("参数，也可以不加，效果一样）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("dos2unix file1 file2 file3\ndos2unix "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" file1 file2 file3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面在转换时，都会直接在原来的文件上修改，如果想把转换的结果保存在别的文件，而源文件不变，则可以使用"),a("code",[s._v("-n")]),s._v("参数。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("dos2unix oldfile newfile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果要保持文件时间戳不变，加上"),a("code",[s._v("-k")]),s._v("参数。所以上面几条命令都是可以加上"),a("code",[s._v("-k")]),s._v("参数来保持文件时间戳的。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("dos2unix "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\ndos2unix "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" file1 file2 file3\ndos2unix "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" file1 file2 file3\ndos2unix "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" oldfile newfile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("转换当前目录下所有文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-type")]),s._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" dos2unix\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);