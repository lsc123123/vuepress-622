(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{713:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"parted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parted"}},[s._v("#")]),s._v(" parted")]),s._v(" "),a("p",[s._v("磁盘分区和分区大小调整工具")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("parted命令")]),s._v(" 是由GNU组织开发的一款功能强大的磁盘分区和分区大小调整工具，与fdisk不同，它支持调整分区的大小。作为一种设计用于Linux的工具，它没有构建成处理与fdisk关联的多种分区类型，但是，它可以处理最常见的分区格式，包括：ext2、ext3、fat16、fat32、NTFS、ReiserFS、JFS、XFS、UFS、HFS以及Linux交换分区。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("parted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-h：显示帮助信息；\n-i：交互式模式；\n-s：脚本模式，不提示用户；\n-v：显示版本号。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("ul",[a("li",[s._v("设备：指定要分区的硬盘所对应的设备文件；")]),s._v(" "),a("li",[s._v("命令：要执行的parted命令。")])]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("从串行技术出现以来，越来越多用户选择使用大容量的SATA硬盘创建磁盘阵列；特别是MD1000/MD3000，很轻易就突破2T的LUN，故在此给大家一些指引。")]),s._v(" "),a("p",[s._v("红帽企业 Linux 4 Update 4供对大于 2 terabytes（TB）的磁盘设备的支持。")]),s._v(" "),a("p",[s._v("请参考以下操作步骤：")]),s._v(" "),a("p",[s._v("注：")]),s._v(" "),a("ul",[a("li",[s._v("绿色代表你需要使用的命令。")]),s._v(" "),a("li",[s._v("红色代表你需要注意到的输出信息，在后续需要使用。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fdisk -l")]),s._v("\nDisk /dev/sda: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35.8")]),s._v(" GB, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35862976512")]),s._v(" bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v(" heads, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v(" sectors/track, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4360")]),s._v(" cylinders\nUnits "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cylinders of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16065")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8225280")]),s._v(" bytes\n   Device Boot      Start         End      Blocks   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("  System\n/dev/sda1   *           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104391")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\n/dev/sda2              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("144")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1052257")]),s._v("+  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("82")]),s._v("  Linux swap\n/dev/sda3             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("145")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4360")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33865020")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\nDisk /dev/sdb: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2147")]),s._v(" MB, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2147483648")]),s._v(" bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v(" heads, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v(" sectors/track, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("261")]),s._v(" cylinders\nUnits "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cylinders of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16065")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8225280")]),s._v(" bytes\nDisk /dev/sdb doesn't contain a valid partition table\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# parted /dev/sdb")]),s._v("\nGNU Parted Copyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1998")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2004")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" Software Foundation, Inc.\nThis program is "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" software, covered by the GNU General Public License.\nThis program is distributed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the hope that it will be useful, but WITHOUT ANY\nWARRANTY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" without even the implied warranty of MERCHANTABILITY or FITNESS FOR A\nPARTICULAR PURPOSE.  See the GNU General Public License "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" details.\n使用/dev/sdb\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("mklabel gpt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("print\n/dev/sdb的磁盘几何结构：0.000-2048.000兆字节\n磁盘标签类型：gpt\nMinor   起始点       终止点 文件系统   名称                 标志\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("mkpart primary "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("-----上面print显示的数字\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("print\n/dev/sdb的磁盘几何结构：0.000-2048.000兆字节\n磁盘标签类型：gpt\nMinor   起始点       终止点 文件系统   名称                 标志\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.017")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2047.983")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("quit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("如果必要，不要忘记更新"),a("code",[s._v("/etc/fstab")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fdisk -l")]),s._v("\nDisk /dev/sda: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35.8")]),s._v(" GB, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35862976512")]),s._v(" bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v(" heads, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v(" sectors/track, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4360")]),s._v(" cylinders\nUnits "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cylinders of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16065")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8225280")]),s._v(" bytes\n   Device Boot      Start         End      Blocks   Id  System\n/dev/sda1   *           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104391")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\n/dev/sda2              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("144")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1052257")]),s._v("+  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("82")]),s._v("  Linux swap\n/dev/sda3             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("145")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4360")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33865020")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\nWARNING: GPT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GUID Partition Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" detected on "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/dev/sdb'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" The util "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" doesn't support GPT. Use GNU Parted.\n\nDisk /dev/sdb: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2147")]),s._v(" MB, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2147483648")]),s._v(" bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v(" heads, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v(" sectors/track, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("261")]),s._v(" cylinders\nUnits "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cylinders of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16065")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8225280")]),s._v(" bytes\n   Device Boot      Start         End      Blocks   Id  System\n/dev/sdb1               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("262")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2097151")]),s._v("+  ee  EFI GPT\nPartition "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" has different physical/logical beginnings "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("non-Linux?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("phys")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("logical")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPartition "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" has different physical/logical endings:\n     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("phys")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1023")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("254")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("logical")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("261")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkfs.ext3 /dev/sdb1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mke2fs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.35")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("-Feb-2004"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nFilesystem "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("label")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nOS type: Linux\nBlock "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nFragment "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v(" inodes, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("524279")]),s._v(" blocks\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("26213")]),s._v(" blocks "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.00")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" reserved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the super user\nFirst data "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("block")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nMaximum filesystem "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("blocks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("536870912")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" block "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(" blocks per group, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(" fragments per group\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16384")]),s._v(" inodes per group\nSuperblock backups stored on blocks:\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("98304")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163840")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("229376")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("294912")]),s._v("\nWriting inode tables: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating journal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8192")]),s._v(" blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nWriting superblocks and filesystem accounting information: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nThis filesystem will be automatically checked every "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" mounts or\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180")]),s._v(" days, whichever comes first.  Use tune2fs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" or "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" to override.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount /dev/sdb1 /mnt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h")]),s._v("\nFilesystem            容量  已用 可用 已用% 挂载点\n/dev/sda3              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?xml:namespace prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" st1 /"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("32G  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".6G   28G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("% /\n/dev/sda1              99M   12M   82M  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("% /boot\nnone                  252M     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  252M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\n/dev/sdb1             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".0G   36M  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".9G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("% /mnt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);