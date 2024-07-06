(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{750:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pvcreate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pvcreate"}},[s._v("#")]),s._v(" pvcreate")]),s._v(" "),a("p",[s._v("将物理硬盘分区初始化为物理卷")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("pvcreate命令")]),s._v(" 用于将物理硬盘分区初始化为物理卷，以便LVM使用。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pvcreate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-f：强制创建物理卷，不需要用户确认；\n-u：指定设备的UUID；\n-y：所有的问题都回答“yes”；\n-Z：是否利用前4个扇区。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("物理卷：指定要创建的物理卷对应的设备文件名。")]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("查看磁盘信息：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fdisk -l")]),s._v("\nDisk /dev/hda: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41.1")]),s._v(" GB, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41174138880")]),s._v(" bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v(" heads, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v(" sectors/track, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5005")]),s._v(" cylinders\nUnits "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cylinders of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16065")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8225280")]),s._v(" bytes\n\n   Device Boot      Start         End      Blocks   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("  System\n/dev/hda1   *           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104391")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\n/dev/hda2              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1288")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10241437")]),s._v("+  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\n/dev/hda3            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1289")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1925")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5116702")]),s._v("+  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\n/dev/hda4            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1926")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5005")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24740100")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  Extended\n/dev/hda5            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1926")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2052")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1020096")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("82")]),s._v("  Linux swap / Solaris\n/dev/hda6            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2053")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2235")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1469916")]),s._v("   8e  Linux LVM\n/dev/hda7            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2236")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2418")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1469916")]),s._v("   8e  Linux LVM\n/dev/hda8            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2419")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2601")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1469916")]),s._v("   8e  Linux LVM\n/dev/hda9            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2602")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2784")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1469916")]),s._v("   8e  Linux LVM\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("检查有无 PV 在系统上，然后将"),a("code",[s._v("/dev/hda6")]),s._v("到"),a("code",[s._v("/dev/hda9")]),s._v("建立成为PV格式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pvscan")]),s._v("\nNo matching physical volumes found    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#找不到任何的 PV 存在！")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("将6-9分区转成pv，注意大括号的用途：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pvcreate /dev/hda{6,7,8,9}")]),s._v("\n  Physical volume "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/hda6"')]),s._v(" successfully created\n  Physical volume "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/hda7"')]),s._v(" successfully created\n  Physical volume "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/hda8"')]),s._v(" successfully created\n  Physical volume "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/hda9"')]),s._v(" successfully created\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这就分別表示每个 PV 的信息与系统所有 PV 的信息：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pvscan")]),s._v("\n  PV /dev/hda6         lvm2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.40")]),s._v(" GB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  PV /dev/hda7         lvm2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.40")]),s._v(" GB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  PV /dev/hda8         lvm2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.40")]),s._v(" GB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  PV /dev/hda9         lvm2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.40")]),s._v(" GB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  Total: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.61")]),s._v(" GB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" use: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" no VG: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.61")]),s._v(" GB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("更详细的列示出系统上面每个 PV 信息：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pvdisplay")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/hda6"')]),s._v(" is a new physical volume of "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.40 GB"')]),s._v("\n  --- NEW Physical volume ---\n  PV Name               /dev/hda6  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实际的 partition 分区名称")]),s._v("\n  VG Name                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#因为尚未分配出去，所以空白！")]),s._v("\n  PV Size               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.40")]),s._v(" GB    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#就是容量说明")]),s._v("\n  Allocatable           NO         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否已被分配，结果是 NO")]),s._v("\n  PE Size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KByte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在此 PV 內的 PE 大小")]),s._v("\n  Total PE              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#共分割出几个 PE")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" PE               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#沒被 LV 用掉的 PE")]),s._v("\n  Allocated PE          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#尚可分配出去的 PE 数量")]),s._v("\n  PV UUID               Z13Jk5-RCls-UJ8B-HzDa-Gesn-atku-rf2biN\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("底下省略"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("删除物理卷：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pvremove /dev/sdb2")]),s._v("\nLabels on physical volume "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/sdb2"')]),s._v(" successfully wiped\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("修改物理卷属性：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pvchange -x n /dev/sdb1    #禁止分配指定物理卷上的PE")]),s._v("\nPhysical volume "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/sdb1"')]),s._v(" changed  \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" physical volume changed / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" physical volumes not changed \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);