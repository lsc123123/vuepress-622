(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{916:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vgcreate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vgcreate"}},[s._v("#")]),s._v(" vgcreate")]),s._v(" "),a("p",[s._v("用于创建LVM卷组")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("vgcreate命令")]),s._v(" 用于创建LVM卷组。卷组（Volume Group）将多个物理卷组织成一个整体，屏蔽了底层物理卷细节。在卷组上创建逻辑卷时不用考虑具体的物理卷信息。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vgcreate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-l：卷组上允许创建的最大逻辑卷数；\n-p：卷组中允许添加的最大物理卷数；\n-s：卷组上的物理卷的PE大小。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("ul",[a("li",[s._v("卷组名：要创建的卷组名称；")]),s._v(" "),a("li",[s._v("物理卷列表：要加入到卷组中的物理卷列表。")])]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v('使用vgcreate命令创建卷组 "vg1000"，并且将物理卷'),a("code",[s._v("/dev/sdb1")]),s._v("和"),a("code",[s._v("/dev/sdb2")]),s._v("添加到卷组中。在命令行中输入下面的命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# vgcreate vg1000 /dev/sdb1 /dev/sdb2  #创建卷组"vg1000"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出信息如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Volume group "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vg1000"')]),s._v(" successfully created\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);