(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"内置插件介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置插件介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 内置插件介绍")]),s("p",[a._v("内置插件为Monibuca提供了许多基础功能，当然你完全可以不采用内置插件，而改用自己开发的插件，也丝毫不会影响您使用Monibuca。")]),s("h2",{attrs:{id:"jessica插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jessica插件","aria-hidden":"true"}},[a._v("#")]),a._v(" Jessica插件")]),s("blockquote",[s("p",[a._v("该插件源码位于plugins/jessica下")])]),s("p",[a._v("该插件为基于WebSocket协议传输音视频的订阅者，音视频数据以裸数据的形式进行传输，我们需要Jessibuca播放器来进行播放\nJessibua播放器已内置于源码中，该播放器通过js解码H264/H265并用canvas进行渲染，可以运行在几乎所有的终端浏览器上面。\n在Monibuca的Web界面中预览功能就是使用的Jessibuca播放器。")]),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),s("p",[a._v("目前仅有的配置是监听的端口号")]),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("Plugins.Jessica")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("ListenAddr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('":8080"')]),a._v("\n")])])]),s("h3",{attrs:{id:"flv格式支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flv格式支持","aria-hidden":"true"}},[a._v("#")]),a._v(" Flv格式支持")]),s("p",[a._v("Jessica以及Jessibuca也支持采用WebSocket中传输Flv格式的方式进行通讯，目前有部分CDN厂商已经支持这种方式进行传输。")]),s("blockquote",[s("p",[a._v("私有协议以及Flv格式的判断是通过URL后缀是否带有.flv来进行判断")])]),s("h2",{attrs:{id:"rtmp插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rtmp插件","aria-hidden":"true"}},[a._v("#")]),a._v(" Rtmp插件")]),s("blockquote",[s("p",[a._v("该插件源码位于plugins/rtmp下")])]),s("p",[a._v("实现了基本的rtmp传输协议，包括接收来自OBS、ffmpeg等软件的推流，以及来在Flash Player播放器的拉流。")]),s("h3",{attrs:{id:"配置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),s("p",[a._v("目前仅有的配置是监听的端口号")]),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("Plugins.RTMP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("ListenAddr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('":1935"')]),a._v("\n")])])]),s("h2",{attrs:{id:"recordflv插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recordflv插件","aria-hidden":"true"}},[a._v("#")]),a._v(" RecordFlv插件")]),s("blockquote",[s("p",[a._v("该插件源码位于plugins/record下")])]),s("p",[a._v("实现了录制Flv文件的功能，并且支持再次使用录制好的Flv文件作为发布者进行发布。在Monibuca的web界面的控制台中提供了对房间进行录制的操作按钮，以及列出所有已经录制的文件的界面。")]),s("h3",{attrs:{id:"配置-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),s("p",[a._v("配置中的Path 表示要保存的Flv文件的根路径，可以使用相对路径或者绝对路径")]),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("Plugins.RecordFlv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("Path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./resource"')]),a._v("\n")])])]),s("h2",{attrs:{id:"http-flv插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-flv插件","aria-hidden":"true"}},[a._v("#")]),a._v(" Http-Flv插件")]),s("blockquote",[s("p",[a._v("该插件位于plugins/HDL下")])]),s("p",[a._v("实现了http-flv格式的拉流功能，方便对接CDN厂商")]),s("h3",{attrs:{id:"配置-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),s("p",[a._v("目前仅有的配置是监听的端口号")]),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("Plugins.HDL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("ListenAddr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('":2020"')]),a._v("\n")])])]),s("h2",{attrs:{id:"cluster插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cluster插件","aria-hidden":"true"}},[a._v("#")]),a._v(" Cluster插件")]),s("blockquote",[s("p",[a._v("该插件源码位于plugins/cluster下")])]),s("p",[a._v("实现了基本的集群功能，里面包含一对发布者和订阅者，分别在主从服务器中启用，进行连接。\n起基本原理就是，在主服务器启动端口监听，从服务器收到播放请求时，如果从服务器没有对应的发布者，则向主服务器发起请求，主服务器收到来自从服务器的请求时，将该请求作为一个订阅者。从服务器则把tcp连接作为发布者，实现视频流的传递过程。")]),s("h3",{attrs:{id:"配置-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),s("p",[a._v("主服务器的配置是ListenAddr，用来监听从服务器的请求。\n从服务器的配置是Master,表示主服务器的地址。\n当然服务器可以既是主也是从，即充当中转站。")]),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("Plugins.Cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("Master")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"localhost:2019"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("ListenAddr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('":2019"')]),a._v("\n")])])]),s("h2",{attrs:{id:"hls插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hls插件","aria-hidden":"true"}},[a._v("#")]),a._v(" HLS插件")]),s("blockquote",[s("p",[a._v("该插件源码位于plugins/HLS下")])]),s("p",[a._v("该插件的作用是请求M3u8文件进行解码，最终将TS视频流转码成裸的视频流进行发布。\n注意：该插件目前并没有实现生成HLS的功能。")]),s("h2",{attrs:{id:"网关插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网关插件","aria-hidden":"true"}},[a._v("#")]),a._v(" 网关插件")]),s("blockquote",[s("p",[a._v("该插件位于plugins/gateway下")])]),s("p",[a._v("该插件是为web控制台界面提供api，用来采集服务器的信息。")]),s("h3",{attrs:{id:"配置-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),s("p",[a._v("目前仅有的配置是监听的端口号")]),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("Plugins.GateWay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("ListenAddr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('":80"')]),a._v("\n")])])]),s("p",[a._v("如果80端口有其他用途，可以换成别的端口，比如有nginx反向代理。")]),s("h2",{attrs:{id:"校验插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#校验插件","aria-hidden":"true"}},[a._v("#")]),a._v(" 校验插件")]),s("blockquote",[s("p",[a._v("该插件位于plugins/auth下")])]),s("p",[a._v("该插件提供了基本的验证功能，其原理是\n订阅流提供一个签名，签名只可以使用一次，把签名进行AES CBC 解密，如果得到的解密字符串的前面部分就是和Key相同则通过验证。")]),s("h3",{attrs:{id:"配置-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),s("p",[a._v("Key代表用来加密的Key")]),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("Plugins.Auth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[a._v("Key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"www.monibuca.com"')]),a._v("\n")])])])])}],!1,null,null,null);t.default=r.exports}}]);