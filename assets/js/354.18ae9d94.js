(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{684:function(a,s,t){"use strict";t.r(s);var e=t(4),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mount"}},[a._v("#")]),a._v(" mount")]),a._v(" "),s("p",[a._v("用于挂载Linux系统外的文件")]),a._v(" "),s("h2",{attrs:{id:"补充说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[a._v("#")]),a._v(" 补充说明")]),a._v(" "),s("p",[s("strong",[a._v("mount命令")]),a._v(" Linux mount命令是经常会使用到的命令，它用于挂载Linux系统外的文件。")]),a._v(" "),s("p",[a._v("如果通过webdav协议挂载网络磁盘，需要运行指令"),s("code",[a._v("apt install davfs2")]),a._v("安装必要的组件")]),a._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-hV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-fFnrsvw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-t vfstype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-fnrsvw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-o options "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" device "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-fnrsvw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-t vfstype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-o options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" device "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-V：显示程序版本\n-h：显示辅助讯息\n-v：显示较讯息，通常和 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" 用来除错。\n-a：将 /etc/fstab 中定义的所有档案系统挂上。\n-F：这个命令通常和 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" 一起使用，它会为每一个 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" 的动作产生一个行程负责执行。在系统需要挂上大量 NFS 档案系统时可以加快挂上的动作。\n-f：通常用在除错的用途。它会使 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" 并不执行实际挂上的动作，而是模拟整个挂上的过程。通常会和 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" 一起使用。\n-n：一般而言，mount 在挂上后会在 /etc/mtab 中写入一笔资料。但在系统中没有可写入档案系统存在的情况下可以用这个选项取消这个动作。\n-s-r：等于 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ro\n-w：等于 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" rw\n-L：将含有特定标签的硬盘分割挂上。\n-U：将档案分割序号为 的档案系统挂下。-L 和 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-U")]),a._v(" 必须在/proc/partition 这种档案存在时才有意义。\n-t：指定档案系统的型态，通常不必指定。mount 会自动选择正确的型态。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" async：打开非同步模式，所有的档案读写动作都会用非同步模式执行。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" sync：在同步模式下执行。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" atime、-o noatime：当 atime 打开时，系统会在每次读取档案时更新档案的『上一次调用时间』。当我们使用 flash 档案系统时可能会选项把这个选项关闭以减少写入的次数。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" auto、-o noauto：打开/关闭自动挂上模式。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" defaults:使用预设的选项 rw, suid, dev, exec, auto, nouser, and async.\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" dev、-o nodev-o exec、-o noexec允许执行档被执行。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" suid、-o nosuid：允许执行档在 root 权限下执行。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" user、-o nouser：使用者可以执行 mount/umount 的动作。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" remount：将一个已经挂下的档案系统重新用不同的方式挂上。例如原先是唯读的系统，现在用可读写的模式重新挂上。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ro：用唯读模式挂上。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" rw：用可读写模式挂上。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("loop")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("：使用 loop 模式用来将一个档案当成硬盘分割挂上系统。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])]),s("h3",{attrs:{id:"实例1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例1"}},[a._v("#")]),a._v(" 实例1")]),a._v(" "),s("p",[a._v("将 "),s("code",[a._v("/dev/hda1")]),a._v(" 挂在 "),s("code",[a._v("/mnt")]),a._v(" 之下。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" /dev/hda1 /mnt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("将 "),s("code",[a._v("/dev/hda1")]),a._v(" 用唯读模式挂在 "),s("code",[a._v("/mnt")]),a._v(" 之下。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ro /dev/hda1 /mnt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("将 "),s("code",[a._v("/tmp/image.iso")]),a._v(" 这个光碟的 "),s("code",[a._v("image")]),a._v(" 档使用 "),s("code",[a._v("loop")]),a._v(" 模式挂在 "),s("code",[a._v("/mnt/cdrom")]),a._v(" 之下。用这种方法可以将一般网络上可以找到的 "),s("code",[a._v("Linux")]),a._v(" 光碟 ISO 档在不烧录成光碟的情况下检视其内容。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" loop /tmp/image.iso /mnt/cdrom\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"实例2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例2"}},[a._v("#")]),a._v(" 实例2")]),a._v(" "),s("p",[a._v("通过 webdav 协议挂载网络硬盘")]),a._v(" "),s("p",[a._v("将"),s("code",[a._v("https://your.webdav.link.here")]),a._v("的网络存储以网络磁盘的形式挂载到系统路径"),s("code",[a._v("/path/to/mount")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" davfs https://your.webdav.link.here /path/to/mount\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"实例3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例3"}},[a._v("#")]),a._v(" 实例3")]),a._v(" "),s("p",[a._v("挂载 Android 系统 system 分区到 "),s("code",[a._v("/dev/loopX")]),a._v("，在知道文件格式的情况下，可以用 -t 来指定文件格式，比如 ext4。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" ext4 /dev/loopX /mnt/system\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);