(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{596:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"iscsiadm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iscsiadm"}},[s._v("#")]),s._v(" iscsiadm")]),s._v(" "),t("p",[s._v("管理iSCSI连接")]),s._v(" "),t("h2",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),t("p",[t("strong",[s._v("iscsiadm命令")]),s._v(" 用于管理 iSCSI（Internet Small Computer System Interface）存储连接。iSCSI 是一种基于网络的存储协议，允许在计算机之间传输块级别的数据。iscsiadm 命令提供了与 iSCSI 存储设备进行连接、配置和管理的功能。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" iscsi-initiator-utils   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装iscsiadm")]),s._v("\n/etc/iscsi/initiatorname.iscsi      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#iscsi启动器名称配置文件位置")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" iscsi              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置服务开机启动")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" iscsid             \nsystemctl restart iscsi             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启iscsi服务")]),s._v("\nsystemctl restart iscsid           \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("iscsiadm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("命令"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("参数"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-m，--mode         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <模式> 指定工作模式，如discovery（发现模式）、node（管理节点）、session（管理会话）、discoverydb、host、iface（管理 iSCSI 网络接口）；")]),s._v("\n-t，--type         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定类型，如sendtargets (或st)、isns、fw，仅用于discovery模式；")]),s._v("\n-T，--targetname   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定目标名称，仅用于node模式；")]),s._v("\n-p，--portal       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <ip:port> 指定目标IP,不带端口默认使用3260，仅用于discovery、node模式；")]),s._v("\n-l，--login        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录一个iSCSI设备，仅用于discovery、node模式；")]),s._v("\n-u，--logout       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出一个iSCSI设备，仅用于node、session模式；")]),s._v("\n-I，--interface    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定用于iSCSI操作的网络接口；")]),s._v("\n-P，--print        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <0-4> 打印详细，用于discovery、node、session模式；")]),s._v("\n-s，--stats        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看会话状态")]),s._v("\n-h，--help         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示帮助；")]),s._v("\n-V，--version      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示版本信息。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("p",[s._v("发送iSCSI发现请求，并列出发现的iSCSI设备目标器：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Azroy-s1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# iscsiadm -m discovery -t st -p 10.10.10.10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".10.10:3260,1 iqn.2000-01.com.synology:NAS.default-target.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("登录到发现的iSCSI目标器：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Azroy-s1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# iscsiadm -m node -T iqn.2000-01.com.synology:NAS.target.1 -p 10.10.10.10 -l")]),s._v("\nLogging "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("iface: default, target: iqn.2000-01.com.synology:NAS.target.1, portal: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".10.10,3260"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multiple"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nLogin to "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("iface: default, target: iqn.2000-01.com.synology:NAS.target.1, portal: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".10.10,3260"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" successful.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("查看已登录的设备：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Azroy-s1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# iscsiadm -m session")]),s._v("\ntcp: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".10.10:3260,1 iqn.2000-01.com.synology:NAS.target.1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("non-flash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("退出已登录的设备：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Azroy-s1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# iscsiadm -m node -T iqn.2000-01.com.synology:NAS.target.1 -p 10.10.10.10 -u")]),s._v("\nLogging out of session "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sid: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(", target: iqn.2000-01.com.synology:NAS.target.1, portal: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".10.10,3260"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n或\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Azroy-s1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# iscsiadm -m session -u   #退出所有iscsi会话")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("使用lsblk或fdisk查看硬盘，对硬盘分区再格式化后可挂载目录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Azroy-s1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lsblk")]),s._v("\nNAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":0    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".8T  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" disk\n├─sda1            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":1    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    1G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" part /boot\n└─sda2            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":2    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".8T  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" part\n  ├─centos-root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253")]),s._v(":0    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".8T  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" lvm  /\n  └─centos-swap "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253")]),s._v(":1    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".9G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" lvm  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SWAP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsdb               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":32   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   10G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" disk\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Azroy-s1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lsblk -S /dev/sd*   #可以查看硬盘传输类型")]),s._v("\nNAME HCTL       TYPE VENDOR   MODEL             REV TRAN\nsda  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":1:0:0    disk HP       LOGICAL VOLUME   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.00")]),s._v(" sas\nsdb  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":0:0:1   disk SYNOLOGY Storage          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.0")]),s._v("  iscsi\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Azroy-s1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fdisk -l /dev/sdb")]),s._v("\n磁盘 /dev/sdb：10.7 GB, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10737418240")]),s._v(" 字节，20971520 个扇区\nUnits "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 扇区 of "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\n扇区大小"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("逻辑/物理"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：512 字节 / "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" 字节\nI/O 大小"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("最小/最佳"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：512 字节 / "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" 字节\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);