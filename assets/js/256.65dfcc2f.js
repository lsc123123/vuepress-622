(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{580:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[s._v("#")]),s._v(" ip")]),s._v(" "),t("p",[s._v("网络配置工具")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("ip命令")]),s._v(" 用来显示或操纵Linux主机的路由、网络设备、策略路由和隧道，是Linux下较新的功能强大的网络配置工具。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("对象"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nUsage: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" OPTIONS "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" OBJECT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" COMMAND "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-force")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-batch")]),s._v(" filename\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[s._v("#")]),s._v(" 对象")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("OBJECT :"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" address "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" addrlabel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" route "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" rule "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" neigh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ntable "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n       tunnel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" tuntap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" maddress "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mroute "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mrule "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" monitor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" xfrm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n       netns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" l2tp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" macsec "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" tcp_metrics "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" token "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       \n-V：显示指令版本信息；\n-s：输出更详细的信息；\n-f：强制使用指定的协议族；\n-4：指定使用的网络层协议是IPv4协议；\n-6：指定使用的网络层协议是IPv6协议；\n-0：输出信息每条记录输出一行，即使内容较多也不换行显示；\n-r：显示主机时，不使用IP地址，而使用主机的域名。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("OPTIONS :"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" -V"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tatistics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("etails"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("esolve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        -h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("uman-readable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-iec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        -f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("amily"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" inet "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" inet6 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ipx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" dnet "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" bridge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-B")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        -l"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("oops"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" maximum-addr-flush-attempts "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        -o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("neline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("imestamp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -ts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hort"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("atch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        -rc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("vbuf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("size"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("etns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n网络对象：指定要管理的网络对象；\n具体操作：对指定的网络对象完成具体操作；\nhelp：显示网络对象支持的操作命令的帮助信息。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" show                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示网络接口信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" eth0 up             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启网卡")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" eth0 down            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭网卡")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" eth0 promisc on      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启网卡的混合模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" eth0 promisc offi    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭网卡的混合模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" eth0 txqueuelen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1200")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置网卡队列长度")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" eth0 mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1400")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置网卡最大传输单元")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr show     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示网卡IP信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.1/24 dev eth0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为eth0网卡添加一个新的IP地址192.168.0.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr del "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.1/24 dev eth0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为eth0网卡删除一个IP地址192.168.0.1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route show "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示系统路由")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" default via "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.254   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置系统默认路由")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route list                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看路由信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".4.0/24  via  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.254 dev eth0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置192.168.4.0网段的网关为192.168.0.254,数据走eth0接口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" default via  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.254  dev eth0        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置默认网关为192.168.0.254")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route del "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".4.0/24   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除192.168.4.0网段的网关")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route del default          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除默认路由")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route delete "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/24 dev eth0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除路由")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[t("strong",[s._v("用ip命令显示网络设备的运行状态")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip link list")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16436")]),s._v(" qdisc noqueue\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": eth0: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc pfifo_fast qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:16:3e:00:1e:51 brd ff:ff:ff:ff:ff:ff\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": eth1: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc pfifo_fast qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:16:3e:00:1e:52 brd ff:ff:ff:ff:ff:ff\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("显示更加详细的设备信息")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip -s link list")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16436")]),s._v(" qdisc noqueue\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    RX: bytes  packets  errors  dropped overrun mcast   \n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5082831")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56145")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      \n    TX: bytes  packets  errors  dropped carrier collsns\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5082831")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56145")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": eth0: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc pfifo_fast qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:16:3e:00:1e:51 brd ff:ff:ff:ff:ff:ff\n    RX: bytes  packets  errors  dropped overrun mcast   \n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3641655380")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("62027099")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      \n    TX: bytes  packets  errors  dropped carrier collsns\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6155236")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("89160")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": eth1: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc pfifo_fast qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:16:3e:00:1e:52 brd ff:ff:ff:ff:ff:ff\n    RX: bytes  packets  errors  dropped overrun mcast   \n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2562136822")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("488237847")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      \n    TX: bytes  packets  errors  dropped carrier collsns\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3486617396")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9691081")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[t("strong",[s._v("显示核心路由表")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip route list ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("112.124")]),s._v(".12.0/22 dev eth1  proto kernel  scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("  src "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("112.124")]),s._v(".15.130\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.160")]),s._v(".0.0/20 dev eth0  proto kernel  scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("  src "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.160")]),s._v(".7.81\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/16 via "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.160")]),s._v(".15.247 dev eth0\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".0.0/12 via "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.160")]),s._v(".15.247 dev eth0\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.0/8 via "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.160")]),s._v(".15.247 dev eth0\ndefault via "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("112.124")]),s._v(".15.247 dev eth1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("显示邻居表")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip neigh list")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("112.124")]),s._v(".15.247 dev eth1 lladdr 00:00:0c:9f:f3:88 REACHABLE\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.160")]),s._v(".15.247 dev eth0 lladdr 00:00:0c:9f:f2:c0 STALE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("获取主机所有网络接口")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-E")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^[0-9]'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);