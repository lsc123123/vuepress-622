(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{625:function(a,s,t){"use strict";t.r(s);var e=t(4),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"locate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locate"}},[a._v("#")]),a._v(" locate")]),a._v(" "),s("p",[a._v("比 find 好用的文件查找工具")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[a._v("locate 让使用者可以很快速的搜寻档案系统内是否有指定的档案。其方法是先建立一个包括系统内所有档案名称及路径的数据库，之后当寻找时就只需查询这个数据库，而不必实际深入档案系统之中了。在一般的 distribution 之中，数据库的建立都被放在 crontab 中自动执行。")]),a._v(" "),s("p",[a._v("locate命令可以在搜寻数据库时快速找到档案，数据库由updatedb程序来更新，updatedb是由cron daemon周期性建立的，locate命令在搜寻数据库时比由整个由硬盘资料来搜寻资料来得快，但较差劲的是locate所找到的档案若是最近才建立或 刚更名的，可能会找不到，在内定值中，updatedb每天会跑一次，可以由修改crontab来更新设定值。(etc/crontab)")]),a._v(" "),s("p",[a._v("locate指定用在搜寻符合条件的档案，它会去储存档案与目录名称的数据库内，寻找合乎范本样式条件的档案或目录录，可以使用特殊字元（如”"),s("em",[a._v("” 或”?”等）来指定范本样式，如指定范本为kcpa")]),a._v("ner, locate 会找出所有起始字串为kcpa且结尾为ner的档案或目录，如名称为kcpartner若目录录名称为kcpa_ner则会列出该目录下包括 子目录在内的所有档案。")]),a._v(" "),s("p",[a._v("locate指令和find找寻档案的功能类似，但locate是透过update程序将硬盘中的所有档案和目录资料先建立一个索引数据库，在 执行loacte时直接找该索引，查询速度会较快，索引数据库一般是由操作系统管理，但也可以直接下达update强迫系统立即修改索引数据库。")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-d  path "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--database")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-e "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" --"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("non-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("existing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n       --ignore-case"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" --null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-c "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" --count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-w "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  --wholename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-b  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n       --basename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-l  N  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--limit")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-S "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" --statistics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-r "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--regex")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--regextype R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--max-database-age D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-P "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  --nofollow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-L  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n       --follow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" --all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-p "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" --print"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-b, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--basename")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 仅匹配路径名的基本名称")]),a._v("\n-c, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--count")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 只输出找到的数量")]),a._v("\n-d, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--database")]),a._v(" DBPATH "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用DBPATH指定的数据库，而不是默认数据库 /var/lib/mlocate/mlocate.db")]),a._v("\n-e, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--existing")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 仅打印当前现有文件的条目")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果 是 1．则启动安全模式。在安全模式下，使用者不会看到权限无法看到 的档案。这会始速度减慢，因为 locate 必须至实际的档案系统中取得档案的  权限资料。")]),a._v("\n-0, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--null")]),a._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在输出上带有NUL的单独条目")]),a._v("\n-S, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--statistics")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 不搜索条目，打印有关每个数据库的统计信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安静模式，不会显示任何错误讯息。")]),a._v("\n-P, --nofollow, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查文件存在时不要遵循尾随的符号链接")]),a._v("\n-l, --limit, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" LIMIT "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将输出（或计数）限制为LIMIT个条目")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 至多显示 n个输出。")]),a._v("\n-m, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--mmap")]),a._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 被忽略，为了向后兼容")]),a._v("\n-r, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--regexp")]),a._v(" REGEXP   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用基本正则表达式")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--regex")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用扩展正则表达式")]),a._v("\n-q, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--quiet")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安静模式，不会显示任何错误讯息")]),a._v("\n-s, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--stdio")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 被忽略，为了向后兼容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定资料库存的名称。")]),a._v("\n-h, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示帮助")]),a._v("\n-i, --ignore-case     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 忽略大小写")]),a._v("\n-V, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示版本信息")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[a._v("实例1：查找和 "),s("code",[a._v("pwd")]),a._v(" 相关的所有文件")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("root ~ "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# locate pwd")]),a._v("\n/bin/pwd\n/etc/.pwd.lock\n/sbin/unix_chkpwd\n/usr/bin/pwdx\n/usr/include/pwd.h\n/usr/lib/python2.7/dist-packages/twisted/python/fakepwd.py\n/usr/lib/python2.7/dist-packages/twisted/python/fakepwd.pyc\n/usr/lib/python2.7/dist-packages/twisted/python/test/test_fakepwd.py\n/usr/lib/python2.7/dist-packages/twisted/python/test/test_fakepwd.pyc\n/usr/lib/syslinux/pwd.c32\n/usr/share/help/C/empathy/irc-join-pwd.page\n/usr/share/help/ca/empathy/irc-join-pwd.page\n/usr/share/help/cs/empathy/irc-join-pwd.page\n/usr/share/help/de/empathy/irc-join-pwd.page\n/usr/share/help/el/empathy/irc-join-pwd.page\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])]),s("p",[a._v("实例2： 搜索 etc 目录下所有以 sh 开头的文件")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("root ~ "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# locate /etc/sh")]),a._v("\n/etc/shadow\n/etc/shadow-\n/etc/shells\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("实例3：搜索etc目录下，所有以m开头的文件")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("root ~ "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# locate /etc/m")]),a._v("\n/etc/magic\n/etc/magic.mime\n/etc/mailcap\n/etc/mailcap.order\n/etc/manpath.config\n/etc/mate-settings-daemon\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("忽略大小写搜索当前用户目录下所有以 "),s("code",[a._v("r")]),a._v(" 开头的文件 ：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" ~/r\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);