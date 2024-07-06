(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{911:function(s,a,e){"use strict";e.r(a);var t=e(4),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"usermod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usermod"}},[s._v("#")]),s._v(" usermod")]),s._v(" "),a("p",[s._v("用于修改用户的基本信息")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("usermod命令")]),s._v(" 用于修改用户的基本信息。usermod 命令不允许你改变正在线上的使用者帐号名称。当 usermod 命令用来改变user id，必须确认这名user没在电脑上执行任何程序。你需手动更改使用者的 crontab 档。也需手动更改使用者的 at 工作档。采用 NIS server 须在server上更动相关的NIS设定。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("usermod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("备注"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：修改用户帐号的备注文字；\n-d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("登入目录"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：修改用户登入时的目录，只是修改/etc/passwd中用户的家目录配置信息，不会自动创建新的家目录，通常和-m一起使用；\n-m"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("移动用户家目录"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":移动用户家目录到新的位置，不能单独使用，一般与-d一起使用。\n-e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("有效期限"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：修改帐号的有效期限；\n-f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("缓冲天数"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：修改在密码过期后多少天即关闭该帐号；\n-g"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("群组"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：修改用户所属的群组；\n-G"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("群组"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("；修改用户所属的附加群组；\n-l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("帐号名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：修改用户帐号名称；\n-L：锁定用户密码，使密码无效；\n-s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：修改用户登入后所使用的shell；\n-u"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("：修改用户ID；\n-U:解除密码锁定。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("登录名：指定要修改信息的用户登录名。")]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("将 newuser2 添加到组 staff 中：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-G")]),s._v(" staff newuser2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改newuser的用户名为newuser1：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" newuser1 newuser\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("锁定账号newuser1：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" newuser1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解除对newuser1的锁定：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v(" newuser1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("增加用户到用户组中:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("apk "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" shadow "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 shadow 包, usermod 命令包含在 usermod 中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aG")]),s._v(" group user "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加用户到用户组中")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("-a")]),s._v(" 参数表示附加，只和 "),a("code",[s._v("-G")]),s._v(" 参数一同使用，表示将用户增加到组中。")]),s._v(" "),a("p",[s._v("修改用户家目录：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@node-1 ~]# useradd lutixiaya\n[root@node-1 ~]# ls /home\nlutixiaya\n[root@node-1 ~]# usermod -md /data/new_home lutixiaya\n[root@node-1 ~]# ls /home/\n[root@node-1 ~]# ls /data/\nnew_home\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);