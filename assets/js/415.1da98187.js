(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{742:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"prtstat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prtstat"}},[s._v("#")]),s._v(" prtstat")]),s._v(" "),t("p",[s._v("显示进程信息")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("prtstat命令")]),s._v("打印指定进程的统计信息。这个信息来自/proc/PID/stat文件。")]),s._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("prtstat "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--raw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" pid\nprtstat -V"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef|grep nginx ")]),s._v("\nroot       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4022")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("250867")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":39 pts/1    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--color")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto nginx\nroot     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224312")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月26 ?       00:00:00 nginx: master process /var/openresty/nginx/sbin/nginx\nnobody   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224313")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224312")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月26 ?       00:00:00 nginx: worker process\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# prtstat -r 224312")]),s._v("\n         pid: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224312")]),s._v("                              comm: nginx\n       state: S                                   ppid: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        pgrp: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224312")]),s._v("                           session: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224312")]),s._v("\n      tty_nr: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                                  tpgid: "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-1")]),s._v("\n       flags: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("402040")]),s._v("                            minflt: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\n     cminflt: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                                 majflt: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n     cmajflt: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                                  utime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n       stime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                                 cutime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n      cstime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                               priority: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n        nice: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                            num_threads: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n itrealvalue: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                              starttime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6271470")]),s._v("\n       vsize: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56369152")]),s._v("                             rss: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("413")]),s._v("\n      rsslim: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18446744073709551615")]),s._v("                   startcode: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4194304")]),s._v("\n     endcode: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5772276")]),s._v("                       startstack: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("140722783765648")]),s._v("\n     kstkesp: 7FFC9389BFB8                     kstkeip: 7F25CD42F6C6\n       wchan: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18446744071885754297")]),s._v("                       nswap: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n      cnswap: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18446744071885754297")]),s._v("                 exit_signal: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("\n   processor: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                            rt_priority: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n      policy: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                  delayaccr_blkio_ticks: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  guest_time: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                            cguest_time: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h3",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("prtstat")]),s._v("命令来自于psmisc包。此包来自于base源仓库。")]),s._v(" "),t("li",[s._v("psmisc.x86_64 : 用于管理系统上进程的实用程序")])])])}),[],!1,null,null,null);t.default=r.exports}}]);