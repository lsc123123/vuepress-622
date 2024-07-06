(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{749:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pv"}},[s._v("#")]),s._v(" pv")]),s._v(" "),a("p",[s._v("显示当前在命令行执行的命令的进度信息，管道查看器")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("pv命令")]),s._v("  Pipe Viewer 的简称，由Andrew Wood 开发。意思是通过管道显示数据处理进度的信息。这些信息包括已经耗费的时间，完成的百分比(通过进度条显示)，当前的速度，全部传输的数据，以及估计剩余的时间。")]),s._v(" "),a("h2",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Debian 系的操作系统，如 Ubuntu")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RedHat系的则这样：")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FILE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-p, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--progress")]),s._v("           显示进度条\n-t, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--timer")]),s._v("              显示已用时间\n-e, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--eta")]),s._v("                显示预计到达时间 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("完成"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-I, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--fineta")]),s._v("             显示绝对估计到达时间\n                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("完成"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-r, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rate")]),s._v("               显示数据传输速率计数器\n-a, --average-rate       显示数据传输平均速率计数器\n-b, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--bytes")]),s._v("              显示传输的字节数\n-T, --buffer-percent     显示正在使用的传输缓冲区百分比\n-A, --last-written NUM   显示上次写入的字节数\n-F, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--format")]),s._v(" FORMAT      将输出格式设置为FORMAT\n-n, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--numeric")]),s._v("            输出百分比\n-q, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--quiet")]),s._v("              不输出任何信息\n\n-W, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--wait")]),s._v("               在传输第一个字节之前不显示任何内容\n-D, --delay-start SEC    在SEC秒过去之前不显示任何内容\n-s, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--size")]),s._v(" SIZE          将估算的数据大小设置为SIZE字节\n-l, --line-mode          计算行数而不是字节数 \n-0, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--null")]),s._v("               行以零结尾\n-i, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--interval")]),s._v(" SEC       每SEC秒更新一次\n-w, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--width")]),s._v(" WIDTH        假设终端的宽度为WIDTH个字符 \n-H, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--height")]),s._v(" HEIGHT      假设终端高度为HEIGHT行\n-N, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" NAME          在可视信息前面加上名称\n-f, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v("              将标准错误输出到终端\n-c, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cursor")]),s._v("             使用光标定位转义序列\n\n-L, --rate-limit RATE    将传输限制为每秒RATE字节\n-B, --buffer-size BYTES  使用BYTES的缓冲区大小\n-C, --no-splice          从不使用splice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，始终使用读/写\n-E, --skip-errors        跳过输入中的读取错误\n-S, --stop-at-size       传输--size字节后停止\n-R, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--remote")]),s._v(" PID         更新过程PID的设置\n\n-P, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pidfile")]),s._v(" FILE       将进程ID保存在FILE中 \n\n-d, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watchfd")]),s._v(" PID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":FD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   监视进程PID,打开的文件FD\n\n-h, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("               显示帮助\n-V, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("            显示版本信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("我们（在 linux 上使用命令行的用户）的大多数使用场景都会用到的命令是从一个 USB 驱动器拷贝电影文件到你的电脑。如果你使用 cp 来完成上面的任务，你会什么情况都不清楚，直到整个复制过程结束或者出错。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制文件会有进度")]),s._v("\nlinux "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master●"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" ~/Downloads/CentOS-7-x86_64-Minimal-1511.iso "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/Desktop/CentOS-7-x86_64-Minimal-1511.iso\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面输入信息")]),s._v("\n552MiB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:02 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 212MiB/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("91")]),s._v("% ETA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -L 可以让你修改 pv 命令的传输速率。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 -L 选项来限制传输速率为2MB/s。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" 2m /media/himanshu/1AC2-A8E3/fNf.mkv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ./Desktop/fnf.mkv \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("复制文件时显示进度条（如果没有指定选项，默认使用 -p, -t, -e, -r 和 -b 选项）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" getiot.db "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" getiot.db.bak\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将 "),a("code",[s._v("/var/log/syslog")]),s._v(" 文件打包成 zip 压缩包，并显示进度")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" /var/log/syslog "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" syslog.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用 tar 命令解压缩时显示进度条")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" rootfs.tar.bz2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jxf")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" rootfs/\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(".3MiB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:02 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".15MiB/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                                     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("% ETA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:07\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("解压完成")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" rootfs.tar.bz2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jxf")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" rootfs/\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),s._v(".8MiB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:10 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".53MiB/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("字符一个个匀速在命令行中显示出来")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Tecmint[dot]com is a community of Linux Nerds and Geeks"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("压缩文件展示进度信息")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" /media/himanshu/1AC2-A8E3/fnf.mkv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ./Desktop/fnf.log.gz \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("用 dd 命令将 iso 写入磁盘，pv来实现进度条的显示")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" /Users/kacperwang/Downloads/CentOS-7-x86_64-Everything-1511.iso "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/disk2 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("4m\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 显示下面进度")]),s._v("\nsource:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".2GiB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(":11:41 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 503KiB/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("71")]),s._v("% ETA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":01:56\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("在linux上, 如果执行的一些命令或者一些脚本需要花费很长时间, 但又不能拿出更多的精力反复盯着有没有执行结束, 这时候可以用pv监听PID, 任务完成后通过网络通知到微信或者钉钉, 这样就可以腾出来精力做其他的事, 是不是很棒")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<脚本或命令的关键字>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("这里执行发通知脚本或者命令,脚本或命令需要提前调试好"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("ol",[a("li",[s._v('选项"-d, --watchfd PID[:FD]", 是在1.6.6版本中才有的参数,如果使用需要'),a("code",[s._v("pv")]),s._v("升级到大于等于1.6.6的版本")]),s._v(" "),a("li",[s._v("CentOS7的Yum仓库里"),a("code",[s._v("pv")]),s._v("最新的是1.4.6版本,1.6.6版本是发布在CentOS8里面的,如果需要,可以将CentOS8里的pv下载到本地电脑上或者本地的Yum私服里, 这个是"),a("a",{attrs:{href:"http://www.rpmfind.net/linux/rpm2html/search.php?query=pv&submit=Search+...&system=EPEL&arch=",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载地址"),a("OutboundLink")],1),s._v(", 可以根据自己不同的架构下载, 1.6.6的安装: "),a("code",[s._v("rpm -ivh pv-1.6.6-7.el8.x86_64.rpm -U")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);