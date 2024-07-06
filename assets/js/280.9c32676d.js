(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{607:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kill"}},[s._v("#")]),s._v(" kill")]),s._v(" "),a("p",[s._v("发送信号到进程。")]),s._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%86%85%E5%BB%BA%E5%91%BD%E4%BB%A4"}},[s._v("bash内建命令")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%A4%96%E9%83%A8%E5%91%BD%E4%BB%A4"}},[s._v("GNU coreutils中的命令")])])]),s._v(" "),a("h2",{attrs:{id:"内建命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内建命令"}},[s._v("#")]),s._v(" 内建命令")]),s._v(" "),a("h3",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[s._v("#")]),s._v(" 概要")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-s sigspec "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" signum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -sigspec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jobspec "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sigspec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"主要用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要用途"}},[s._v("#")]),s._v(" 主要用途")]),s._v(" "),a("ul",[a("li",[s._v("发送信号到作业或进程（可以为多个）。")]),s._v(" "),a("li",[s._v("列出信号。")])]),s._v(" "),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" sig    信号名称。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" sig    信号名称对应的数字。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("        列出信号名称。如果在该选项后提供了数字那么假设它是信号名称对应的数字。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v("        等价于-l选项。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("pid：进程ID")]),s._v(" "),a("p",[s._v("jobspec：作业标识符")]),s._v(" "),a("h3",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[s._v("#")]),s._v(" 返回值")]),s._v(" "),a("p",[s._v("返回状态为成功除非给出了非法选项、执行出现错误。")]),s._v(" "),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\nKILL\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有信号名称：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGHUP       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGINT       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGQUIT      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGILL\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGTRAP      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGABRT      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGBUS       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGFPE\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGKILL     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGUSR1     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGSEGV     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGUSR2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGPIPE     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGALRM     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGTERM     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGSTKFLT\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGCHLD     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGCONT     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGSTOP     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGTSTP\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGTTIN     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGTTOU     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGURG      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGXCPU\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGXFSZ     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGVTALRM   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGPROF     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGWINCH\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGIO       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGPWR      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGSYS      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+1  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+2  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+3  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+4\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+5  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+6  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+7  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+8\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+9  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+10 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+11 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+12\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+13 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+14 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+15 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-14\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-13 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-12 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-11 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-10\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-9  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-8  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-7  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("58")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-6\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-5  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-4  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("61")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-3  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("62")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-1  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面是常用的信号。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只有第9种信号(SIGKILL)才可以无条件终止进程，其他信号进程都有权利忽略。")]),s._v("\n\nHUP     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    终端挂断\nINT     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    中断（同 Ctrl + C）\nQUIT    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("    退出（同 Ctrl + "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("）\nKILL    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("    强制终止\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("    终止\nCONT   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("    继续（与STOP相反，fg/bg命令）\nSTOP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("    暂停（同 Ctrl + Z）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下发送KILL信号的形式等价。当然还有更多的等价形式，在此不一一列举了。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" SIGKILL PID\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" KILL PID\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" PID\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" PID\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("178420")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 终止作业标识符为1的作业。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" %1\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("178420")]),s._v(" KILLED                  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.4\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("181357")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发送停止信号。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" STOP "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("181357")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("181537")]),s._v(" Stopped "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("signal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发送继续信号。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" CONT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("181357")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user2@pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("181537")]),s._v(" Running                 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("bash")]),s._v("的作业控制命令包括"),a("code",[s._v("bg fg kill wait disown suspend")]),s._v("。")]),s._v(" "),a("li",[s._v("该命令是bash内建命令，相关的帮助信息请查看"),a("code",[s._v("help")]),s._v("命令。")])]),s._v(" "),a("h2",{attrs:{id:"外部命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部命令"}},[s._v("#")]),s._v(" 外部命令")]),s._v(" "),a("h3",{attrs:{id:"概要-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要-2"}},[s._v("#")]),s._v(" 概要")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-signal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-s signal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-q value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" pid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"主要用途-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要用途-2"}},[s._v("#")]),s._v(" 主要用途")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("发送信号到进程（可以为多个）。")])]),s._v(" "),a("li",[a("p",[s._v("列出信号。")])])]),s._v(" "),a("h3",{attrs:{id:"选项-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项-2"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-s, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--signal")]),s._v(" signal    要发送的信号，可能是信号名称或信号对应的数字。\n-l, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    打印信号名称或转换给定数字到信号名称。信号名称可参考文件（/usr/include/linux/signal.h）。\n-L, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--table")]),s._v("            和"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-l'")]),s._v("选项类似，但是输出信号名称以及信号对应的数字。\n-a, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--all")]),s._v("              不要限制“命令名到pid”的转换为具有与当前进程相同的"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")]),s._v("的进程。\n-p, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pid")]),s._v("              打印目标进程的PID而不发送信号。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("              打印信号以及接收信号的PID。\n-q, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--queue")]),s._v(" value      使用sigqueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("而不是kill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。参数value是信号对应的数字。\n                           如果接收进程已为此信号安装了处理程序将SA_SIGINFO标记为sigaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，则可以获取\n                           该数据通过siginfo_t结构的si_sigval字段。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                 显示帮助信息并退出。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("              显示版本信息并退出。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"参数-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-2"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("接收信号的进程列表可以是PID以及name的混合组成。")]),s._v(" "),a("p",[s._v("PID：每一个PID可以是以下四种情况之一：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[s._v("状态")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("n")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("当n大于0时，PID为n的进程接收信号。")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("0")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("当前进程组中的所有进程均接收信号。")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-1")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("PID大于1的所有进程均接收信号。")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("-n")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("当n大于1时，进程组n中的所有进程接收信号。当给出了一个参数的形式为“-n”，想要让它表示一个进程组，那么必须首先指定一个信号，或参数前必须有一个“--”选项，否则它将被视为发送的信号。")])])])]),s._v(" "),a("p",[s._v("name：使用此名称调用的所有进程将接收信号。")]),s._v(" "),a("h3",{attrs:{id:"例子-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-2"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出对应的PID。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23021")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"返回值-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值-2"}},[s._v("#")]),s._v(" 返回值")]),s._v(" "),a("ul",[a("li",[s._v("0 成功。")]),s._v(" "),a("li",[s._v("1 失败。")]),s._v(" "),a("li",[s._v("64 部分成功（当指定了多个进程时）。")])]),s._v(" "),a("h3",{attrs:{id:"注意-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-2"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("ol",[a("li",[s._v("该命令是"),a("code",[s._v("GNU coreutils")]),s._v("包中的命令，相关的帮助信息请查看"),a("code",[s._v("man -s 1 kill")]),s._v("或"),a("code",[s._v("info coreutils 'kill invocation'")]),s._v("。")]),s._v(" "),a("li",[s._v("启动或关闭内建命令请查看"),a("code",[s._v("enable")]),s._v("命令，关于同名优先级的问题请查看"),a("code",[s._v("builtin")]),s._v("命令的例子部分的相关讨论。")]),s._v(" "),a("li",[s._v("与"),a("code",[s._v("kill")]),s._v("命令类似的有"),a("code",[s._v("xkill")]),s._v("，"),a("code",[s._v("pkill")]),s._v(","),a("code",[s._v("killall")]),s._v("等，用于不同的目的和场景。")])]),s._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://bash.cyberciti.biz/guide/Sending_signal_to_Processes",target:"_blank",rel:"noopener noreferrer"}},[s._v("发送信号到进程"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);