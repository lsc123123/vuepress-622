(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{357:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_7z"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7z"}},[s._v("#")]),s._v(" 7z")]),s._v(" "),a("p",[s._v("拥有极高压缩比的开源压缩软件。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("在 Linux 中输入以下命令安装 7-Zip。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Ubuntu 系统")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" p7zip-full "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS    参考：https://linuxconfig.org/how-to-install-p7zip-on-redhat-8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" p7zip p7zip-plugins\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("介绍几个常用场景：解压、压缩、查看（压缩包内容）。")]),s._v(" "),a("p",[s._v("1、将压缩文件 text.7z 在当前目录下解压缩。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("7z x text.7z\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、将压缩文件 text.7z 在指定目录(/home/text)下解压缩。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意 -o 用来指定解压缩文件存放目录，-o 后是没有空格的，直接接目录")]),s._v("\n7z x text.7z "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" -o/home/text\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("3、将压缩文件 text.7z 中的 "),a("code",[s._v("dir1/dir2")]),s._v(" 和 "),a("code",[s._v("dir1/file1")]),s._v(" 提取到在指定目录(/home/text)下（保持原有路径结构）。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意 dir1/dir2，dir1/file1 为压缩包中文件或文件夹路径")]),s._v("\n7z x text.7z dir1/dir2 dir1/file1 -o/home/text\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("4、将文件 /home/text 压缩成 text.7z。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("7z a text.7z "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" /home/text\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5、查看压缩包 text.7z 内容，但不解压。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("7z l text.7z\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"help-信息翻译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help-信息翻译"}},[s._v("#")]),s._v(" help 信息翻译")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("使用方法： 7z "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("命令"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("开关"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("archive_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file_names"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".］\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("命令"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  a "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 添加文件到压缩包\n  b "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 基准测试\n  d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 从压缩包中删除文件\n  e "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 从压缩包中提取文件（不使用目录名）。\n  h "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 计算文件的哈希值\n  i "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 显示支持的格式信息\n  l "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 列出压缩包的内容\n  rn "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 重命名压缩包中的文件\n  t "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 测试压缩包的完整性\n  u "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 更新压缩包中的文件\n  x "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 提取完整路径的文件\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("开关"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  -- "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 停止对 - 开头的开关和 @ 开头的文件列表的解析，为了允许 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("-Zip 使用以 - 和 @ 开头的文件名。\n  -ai"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("@listfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("wildcard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 包括指定压缩包文件\n  -ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("@listfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("wildcard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 排除指定压缩包文件\n  -ao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置覆写模式\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aoa")]),s._v(" 覆盖所有现有文件，无提示。\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aos")]),s._v(" 跳过提取现有文件。\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aou")]),s._v(" 自动重命名提取的文件（例如，name.txt 将重命名为 name_1.txt）。\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aot")]),s._v(" 自动重命名现有文件（例如，name.txt 将重命名为 name_1.txt）。\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-an")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 禁用压缩包名称字段解析，必须与 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ai")]),s._v(" 开关一起使用。\n  -bb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置输出日志级别\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bb0")]),s._v(" 禁用日志（默认）。\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bb1")]),s._v(" 或 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bb")]),s._v(" 在日志中显示已处理文件的名称。\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bb2")]),s._v(" 显示在压缩包文件中跳过的文件名称（对于 “提取” 操作）和重新打包的文件名称（对于 “添加” / “更新” 操作）\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bb3")]),s._v(" 显示 “添加” / “更新” 操作的其他操作（分析、复制）信息。\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 禁用进度指示器\n  -bs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置输出/错误/进度行的输出流\n    o 标准输出信息\n    e 错误信息\n    p 进度信息\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 禁用流\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 重定向到标准输出流\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 重定向到标准错误流\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 显示执行时间统计\n  -i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("@listfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("wildcard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 包括文件名\n  -m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Parameters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置压缩方法\n    -mmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置 CPU 线程的数量\n    -mx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置压缩级别: "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-mx1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("最快"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-mx9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("超强"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，-mx0（不压缩）\n  -o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置输出目录\n  -p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置密码\n  -r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 重新搜索子目录\n  -sa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置压缩包名称模式\n  -scc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("WIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("DOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置控制台输入/输出的字符集。\n  -scs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("UTF-16LE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("UTF-16BE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("WIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("DOS"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置列表文件的字符集。\n  -scrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("CRC32"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("CRC64"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("SHA1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("SHA256"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 为x、e、h命令设置哈希函数。\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sdel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 压缩后删除文件\n  -seml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 通过电子邮件发送压缩包\n  -sfx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 创建 SFX 压缩包\n  -si"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 从标准输入读取数据\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-slp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置大型页面模式\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-slt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 显示l（List）命令的技术信息\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-snh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 将硬链接存储为链接\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-snl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 将符号链接存储为链接\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sni")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 存储 NT 安全信息\n  -sns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 存储 NTFS 备用流\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-so")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 向标准输出写数据\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-spd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 禁用文件名的通配符匹配\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-spe")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 消除提取命令中根文件夹的重复。\n  -spf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 使用完全合格的文件路径\n  -ssc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置敏感的大小写模式\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 如果无法打开某些输入文件，则停止创建压缩包\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ssp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 压缩包时不更改源文件的最后访问时间\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ssw")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 压缩共享文件\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-stl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 从最近修改的文件设置压缩包时间戳\n  -stm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("HexMask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置 CPU 线程亲和力掩码（十六进制数字）。\n  -stx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 排除压缩包类型\n  -t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 设置压缩包的类型\n  -u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#][q#][r#][x#][y#][z#] [!newArchiveName] : 更新选项")]),s._v("\n  -v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 创建卷\n  -w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 指定工作目录。空的路径意味着一个临时目录\n  -x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("@listfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("wildcard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 排除文件名。\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 假设所有的查询都是肯定的\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br")])]),a("h2",{attrs:{id:"官网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官网"}},[s._v("#")]),s._v(" 官网")]),s._v(" "),a("p",[s._v("更多安装使用方法可以访问官网学习："),a("a",{attrs:{href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.7-zip.org/"),a("OutboundLink")],1),s._v("\n或者可以访问简体中文网站："),a("a",{attrs:{href:"https://sparanoid.com/lab/7z/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://sparanoid.com/lab/7z/"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);