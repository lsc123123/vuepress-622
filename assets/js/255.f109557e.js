(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{581:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"iotop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotop"}},[s._v("#")]),s._v(" iotop")]),s._v(" "),t("p",[s._v("用来监视磁盘I/O使用状况的工具")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("iotop命令")]),s._v(" 是一个用来监视磁盘I/O使用状况的top类工具。iotop具有与top相似的UI，其中包括PID、用户、I/O、进程等相关信息。Linux下的IO统计工具如iostat，nmon等大多数是只能统计到per设备的读写情况，如果你想知道每个进程是如何使用IO的就比较麻烦，使用iotop命令可以很方便的查看。")]),s._v(" "),t("p",[s._v("iotop使用Python语言编写而成，要求Python2.5（及以上版本）和Linux kernel2.6.20（及以上版本）。iotop提供有源代码及rpm包，可从其官方主页下载。")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[t("strong",[s._v("Ubuntu")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" iotop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("CentOS")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" iotop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("编译安装")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://guichaz.free.fr/iotop/files/iotop-0.4.4.tar.gz    \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxf iotop-0.4.4.tar.gz    \npython setup.py build    \npython setup.py "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("iotop（选项）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-o：只显示有io操作的进程\n-b：批量显示，无交互，主要用作记录到文件。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" NUM：显示NUM次，主要用于非交互式模式。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" SEC：间隔SEC秒显示一次。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" PID：监控的进程pid。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("：监控的进程用户。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("iotop常用快捷键：")])]),s._v(" "),t("ol",[t("li",[s._v("左右箭头：改变排序方式，默认是按IO排序。")]),s._v(" "),t("li",[s._v("r：改变排序顺序。")]),s._v(" "),t("li",[s._v("o：只显示有IO输出的进程。")]),s._v(" "),t("li",[s._v("p：进程/线程的显示方式的切换。")]),s._v(" "),t("li",[s._v("a：显示累积使用量。")]),s._v(" "),t("li",[s._v("q：退出。")])]),s._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("p",[s._v("直接执行iotop就可以看到效果了：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Total DISK read:       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Total DISK write:       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s\n  TID  PRIO  "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("     DISK READ  DISK WRITE  SWAPIN     IO"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" be/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % init "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" be/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kthreadd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" rt/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("migration/0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" be/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ksoftirqd/0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" rt/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("watchdog/0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" rt/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("migration/1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" be/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ksoftirqd/1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" rt/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("watchdog/1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" be/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("events/0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" be/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("events/1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" be/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("khelper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2572")]),s._v(" be/4 root        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bluetooth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);