(function(A){function e(e){for(var o,i,r=e[0],g=e[1],s=e[2],c=0,d=[];c<r.length;c++)i=r[c],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&d.push(t[i][0]),t[i]=0;for(o in g)Object.prototype.hasOwnProperty.call(g,o)&&(A[o]=g[o]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var A,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var g=n[i];0!==t[g]&&(o=!1)}o&&(a.splice(e--,1),A=r(r.s=n[0]))}return A}var o={},t={index:0},a=[];function i(A){return r.p+"static/js/"+({"pages-cart-cart":"pages-cart-cart","pages-contact-contact":"pages-contact-contact","pages-goods-detail-goods-detail":"pages-goods-detail-goods-detail","pages-goods-goods~pages-index-index":"pages-goods-goods~pages-index-index","pages-goods-goods":"pages-goods-goods","pages-index-index":"pages-index-index","pages-member-member":"pages-member-member","pages-news-detail-news-detail":"pages-news-detail-news-detail","pages-news-news":"pages-news-news","pages-pics-pics":"pages-pics-pics","pages-videos-videos":"pages-videos-videos"}[A]||A)+"."+{"pages-cart-cart":"23a61c9b","pages-contact-contact":"d18cf742","pages-goods-detail-goods-detail":"a620be24","pages-goods-goods~pages-index-index":"a202309d","pages-goods-goods":"c179cbde","pages-index-index":"dd9684a8","pages-member-member":"a9b72d76","pages-news-detail-news-detail":"b2da4f6f","pages-news-news":"d89705ca","pages-pics-pics":"a5bc8c6d","pages-videos-videos":"aed6efd4"}[A]+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return A[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(A){var e=[],n=t[A];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=t[A]=[e,o]}));e.push(n[2]=o);var a,g=document.createElement("script");g.charset="utf-8",g.timeout=120,r.nc&&g.setAttribute("nonce",r.nc),g.src=i(A);var s=new Error;a=function(e){g.onerror=g.onload=null,clearTimeout(c);var n=t[A];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+A+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}t[A]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:g})}),12e4);g.onerror=g.onload=a,document.head.appendChild(g)}return Promise.all(e)},r.m=A,r.c=o,r.d=function(A,e,n){r.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:n})},r.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},r.t=function(A,e){if(1&e&&(A=r(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var o in A)r.d(n,o,function(e){return A[e]}.bind(null,o));return n},r.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return r.d(e,"a",e),e},r.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},r.p="./",r.oe=function(A){throw console.error(A),A};var g=window["webpackJsonp"]=window["webpackJsonp"]||[],s=g.push.bind(g);g.push=e,g=g.slice();for(var c=0;c<g.length;c++)e(g[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(A,e,n){A.exports=n("376f")},"1cad":function(A,e,n){"use strict";var o=n("fe83"),t=n.n(o);t.a},"20b9":function(A,e,n){"use strict";(function(A){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){A.log("App Launch")},onShow:function(){A.log("App Show")},onHide:function(){A.log("App Hide")}};e.default=n}).call(this,n("5a52")["default"])},"376f":function(A,e,n){"use strict";var o=n("4ea4");n("4de4"),n("d3b7"),n("25f0"),n("4d90");var t=o(n("5530"));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("8326"),n("06b9");var a=o(n("e143")),i=o(n("c214")),r=n("4713");a.default.prototype.$myRequest=r.myRequest,a.default.config.productionTip=!1,a.default.filter("formatDate",(function(A){var e=new Date(A),n=e.getFullYear(),o=e.getMonth().toString().padStart(2,0),t=e.getDay().toString().padStart(2,0);return n+"-"+o+"-"+t})),i.default.mpType="app";var g=new a.default((0,t.default)({},i.default));g.$mount()},"41b1":function(A,e,n){var o=n("24fb"),t=n("1de5"),a=n("b6dd"),i=n("551e"),r=n("8b4d"),g=n("e18f");e=o(!1);var s=t(a),c=t(a,{hash:"#iefix"}),u=t(i),d=t(r),B=t(g,{hash:"#iconfont"});e.push([A.i,"@font-face{font-family:iconfont;src:url("+s+"); /* IE9 */src:url("+c+') format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVMAAsAAAAAChwAAAT9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKAqHQIYhATYCJAMUCwwABCAFhG0HUBurCFGUTk6f7Edh3LaEI5xY7HYeoWNK7zwLfd/7ZDz8/37f9rny/h3XpE711SdNQq1REh4bhEQoLLJn8v/facvNLUze6duSsZbv+GnTlb7095Zi+lMOtlEU4UA4hIXh39Neujkz1HYC0ju3M1Ac9Uf+ce/0z/PA5qOyXP5orGFznpcFmGBAY2xsawEOyhL0FvEsLiQTuJ7AoFUtsVtbBxckq4BugXjNDYVkbRYlhBOavvMZW7ZjpmrpbfpEfFY/H/8MIktSM+h78XRTJys/2///CaSPuC0jpPm5cJtExh6iEM99PQ8l9NiehMFPZtIVRMNXEj+zb0beXPT/M1lbNI395ZEVieiAZpiR1+KFn1lRTOZnifXTnlARyZg1+Tgxt7EMYgmJIyQ+AMNyCeqKWeO9ZOlV6Y7jtTFeKQ8tRm5qIlYcXy1Oyh9fVuuJ2tZ0WWdWhKmbl3MZu/sBgAGj+GXDAAynUbHQsuY1Dsowei8GE4agxGp8LQRRQbg6AndIDcIVej0Mm8c2vQ46ZEObfY4iStdK1oEgH8wh0cirf1tGHWjmFZSXw4Zt2pNGH1AssUPk+XIpFCyZjCESvUgkNAQRBpB+/CBuCIaSjsmCTRSFWSIXVzWoOeKt6wNErxaK51q3r1fPWtfq7nL7SgSFApHfYIivvEiv0cyEvqZGntCM6OxoqkToIdUN3Gg6mJUAqBFGFjxEg0tgwvcDFDIAM9f+WFS4weC6ob6egYZ6rhYSgSJa29jWNzPQ0s81TiSSNXpHI5jwtbi6eBNqkGrdc99fbMfQL+iYTR2oapkiByLYs93k3fbd5NwOxF9mAwy7HK58wdfBl+66BEADufaQOdvl2CPZJU7RbEv0wAzQL7Oh+dqs2fBRb9OgvjwoANaSyP+OIkUtxdT2/+sOGgpaCg6mGwDnsoN8fi5XyfIDVG5suj4+Wyg4oRIcmX6AAKfWSfHOS/m4NOO8XH5k+R2VQ1y+jbobtzlAYyAzQskq82saBgPMgBl9GDMAjnmOlY4Uj5SOuQGIffIeFR6dJps6HYW4RPbdpn6ypgHJMwmlMmTWBPBKrUlpRVBZrqfp21Wmy+v6P7OwsZ4Iob4vJnZfUlJTK/V9U/VkftSxuvWZbpn658+yjBSnJdacFWDXa2k6qDLvZgWQk8gTocUryiH3Y+6vPMc8KiXuu13obDbdSKNYV79vro61UN9/WHR+JpWlwfQNDrDNB6SVgC5daU02/IT7CSz3kQX4CPo9+Sub/UPsukQZ4Uhctmlu59ts8OXe2ML/Bhfwvfljk8rjW9m+pB/phmgqUQjyp/jKwVrLWy3UnASibDH6qsslHUkYxCB9AIFJP/kYZpZvIjQzJiQ9K5A1a2gh96Aacgad5ioM2rU9ecgUKSHKAHY8EAjjHiEZ9RWycRFayG+oZv1CZzwSMOgyGnMO2QieX5egIOhUnVCuCY8JdsxrxWdghI4irXKVewUy4EHa7/ScyW3wQOYxIBgaA0RGmRQu3SKbgeMI6kthgYYdE9Gf63aZ35k6mnBJ3k0SUCCgo1QTFKcRPEyujvKu958BhpBDIUNKfiSvACnAa6f6Onox0G2NF6tkXRoHhgwDCDHeiZEEF7VFXcDBmED5/q0sQIM6zBQR35wuq8Tiajrl69xpLD0VysKcNVLkKFGj070xuc+9NIZyWPEKRig1moQj4YKXnvKJzUwIAAAA") format("woff2"),url('+u+') format("woff"),url('+d+') format("truetype"),url('+B+') format("svg") /* iOS 4.1- */}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-shipin:before{content:"\\f0024"}.icon-tupian:before{content:"\\e650"}.icon-guanyuwomen:before{content:"\\e608"}.icon-ziyuan:before{content:"\\e60d"}',""]),A.exports=e},4713:function(A,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.myRequest=void 0;var o="http://localhost:8082",t=function(A){return new Promise((function(e,n){uni.request({url:o+A.url,method:A.method||"GET",data:A.data||{},success:function(A){if(0!==A.data.status)return uni.showToast({title:"數據數據失敗"});e(A)},fail:function(A){uni.showToast({title:"請求接口失敗"}),n(A)}})}))};e.myRequest=t},"551e":function(A,e){A.exports="data:font/woff;base64,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"},"686c":function(A,e,n){"use strict";var o;n.d(e,"b",(function(){return t})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var t=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("App",{attrs:{keepAliveInclude:A.keepAliveInclude}})},a=[]},"7fe7":function(A,e,n){"use strict";n.r(e);var o=n("20b9"),t=n.n(o);for(var a in o)"default"!==a&&function(A){n.d(e,A,(function(){return o[A]}))}(a);e["default"]=t.a},8326:function(A,e,n){"use strict";(function(A){var e=n("4ea4"),o=e(n("e143"));A["____41B8B1A____"]=!0,delete A["____41B8B1A____"],A.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"EMALL",navigationBarBackgroundColor:"#b50e03",backgroundColor:"#F8F8F8"},tabBar:{selectedColor:"#b50e03",color:"#ccc",list:[{text:"首页",pagePath:"pages/index/index",iconPath:"/static/icon/home.png",selectedIconPath:"/static/icon/home-active.png",redDot:!1,badge:""},{text:"资讯",pagePath:"pages/news/news",iconPath:"static/icon/news.png",selectedIconPath:"static/icon/news-active.png",redDot:!1,badge:""},{text:"购物车",pagePath:"pages/cart/cart",iconPath:"static/icon/cart.png",selectedIconPath:"static/icon/cart-active.png",redDot:!1,badge:""},{text:"会员",pagePath:"pages/member/member",iconPath:"static/icon/member.png",selectedIconPath:"static/icon/member-active.png",redDot:!1,badge:""}],backgroundColor:"",borderStyle:"black"}},A.__uniConfig.compilerVersion="3.0.7",A.__uniConfig.router={mode:"hash",base:"./"},A.__uniConfig.publicPath="./",A.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},A.__uniConfig.debug=!1,A.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},A.__uniConfig.sdkConfigs={},A.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",A.__uniConfig.nvue={"flex-direction":"column"},A.__uniConfig.__webpack_chunk_load__=n.e,o.default.component("pages-index-index",(function(A){var e={component:Promise.all([n.e("pages-goods-goods~pages-index-index"),n.e("pages-index-index")]).then(function(){return A(n("e7b5"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-cart-cart",(function(A){var e={component:n.e("pages-cart-cart").then(function(){return A(n("ade9"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-member-member",(function(A){var e={component:n.e("pages-member-member").then(function(){return A(n("9482"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-news-news",(function(A){var e={component:n.e("pages-news-news").then(function(){return A(n("f29b"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-goods-goods",(function(A){var e={component:Promise.all([n.e("pages-goods-goods~pages-index-index"),n.e("pages-goods-goods")]).then(function(){return A(n("78e5"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-contact-contact",(function(A){var e={component:n.e("pages-contact-contact").then(function(){return A(n("f7dd"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-pics-pics",(function(A){var e={component:n.e("pages-pics-pics").then(function(){return A(n("5ee5"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-videos-videos",(function(A){var e={component:n.e("pages-videos-videos").then(function(){return A(n("b282"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-news-detail-news-detail",(function(A){var e={component:n.e("pages-news-detail-news-detail").then(function(){return A(n("d33e"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-goods-detail-goods-detail",(function(A){var e={component:n.e("pages-goods-detail-goods-detail").then(function(){return A(n("2a46"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e})),A.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(A){return A("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"EMALL"})},[A("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/cart/cart",component:{render:function(A){return A("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{})},[A("pages-cart-cart",{slot:"page"})])}},meta:{id:2,name:"pages-cart-cart",isNVue:!1,maxWidth:0,pagePath:"pages/cart/cart",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/member/member",component:{render:function(A){return A("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{})},[A("pages-member-member",{slot:"page"})])}},meta:{id:3,name:"pages-member-member",isNVue:!1,maxWidth:0,pagePath:"pages/member/member",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/news/news",component:{render:function(A){return A("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{})},[A("pages-news-news",{slot:"page"})])}},meta:{id:4,name:"pages-news-news",isNVue:!1,maxWidth:0,pagePath:"pages/news/news",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/goods/goods",component:{render:function(A){return A("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"列表",enablePullDownRefresh:!0})},[A("pages-goods-goods",{slot:"page"})])}},meta:{name:"pages-goods-goods",isNVue:!1,maxWidth:0,pagePath:"pages/goods/goods",windowTop:44}},{path:"/pages/contact/contact",component:{render:function(A){return A("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[A("pages-contact-contact",{slot:"page"})])}},meta:{name:"pages-contact-contact",isNVue:!1,maxWidth:0,pagePath:"pages/contact/contact",windowTop:44}},{path:"/pages/pics/pics",component:{render:function(A){return A("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"PIC"})},[A("pages-pics-pics",{slot:"page"})])}},meta:{name:"pages-pics-pics",isNVue:!1,maxWidth:0,pagePath:"pages/pics/pics",windowTop:44}},{path:"/pages/videos/videos",component:{render:function(A){return A("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[A("pages-videos-videos",{slot:"page"})])}},meta:{name:"pages-videos-videos",isNVue:!1,maxWidth:0,pagePath:"pages/videos/videos",windowTop:44}},{path:"/pages/news-detail/news-detail",component:{render:function(A){return A("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[A("pages-news-detail-news-detail",{slot:"page"})])}},meta:{name:"pages-news-detail-news-detail",isNVue:!1,maxWidth:0,pagePath:"pages/news-detail/news-detail",windowTop:44}},{path:"/pages/goods-detail/goods-detail",component:{render:function(A){return A("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[A("pages-goods-detail-goods-detail",{slot:"page"})])}},meta:{name:"pages-goods-detail-goods-detail",isNVue:!1,maxWidth:0,pagePath:"pages/goods-detail/goods-detail",windowTop:44}},{path:"/preview-image",component:{render:function(A){return A("Page",{props:{navigationStyle:"custom"}},[A("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(A){return A("Page",{props:{navigationStyle:"custom"}},[A("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(A){return A("Page",{props:{navigationStyle:"custom"}},[A("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],A.UniApp&&new A.UniApp}).call(this,n("c8ba"))},"8b4d":function(A,e){A.exports="data:font/ttf;base64,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"},b6dd:function(A,e){A.exports="data:application/vnd.ms-fontobject;base64,xAoAABwKAAABAAIAAAAAAAIABQMAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAtiOQ3QAAAAAAAAAAAAAAAAAAAAAAABAAaQBjAG8AbgBmAG8AbgB0AAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAQAGkAYwBvAG4AZgBvAG4AdAAAAAAAAAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzI8fmIaAAABfAAAAFZjbWFws8UbsgAAAegAAAGoZ2x5ZqJ5S7MAAAOcAAADwGhlYWQYMP2BAAAA4AAAADZoaGVhCKsEUQAAALwAAAAkaG10eBTO//4AAAHUAAAAFGxvY2EB9gLaAAADkAAAAAxtYXhwARsAYgAAARgAAAAgbmFtZT5U/n0AAAdcAAACbXBvc3QFjYO1AAAJzAAAAFAAAQAAA4D/gABcBM3////+BM0AAQAAAAAAAAAAAAAAAAAAAAUAAQAAAAEAAN2QI7ZfDzz1AAsEAAAAAADaItzCAAAAANoi3ML///+ABM0DgAAAAAgAAgAAAAAAAAABAAAABQBWAAwAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQQpAZAABQAIAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5gj//wOA/4AAXAOAAIAAAAABAAAAAAAABAAAAAQAAAAEzf//BAD//wQAAAAAAAAFAAAAAwAAACwAAAAEAAABaAABAAAAAABiAAMAAQAAACwAAwAKAAABaAAEADYAAAAIAAgAAgAA5gjmDeZQ//8AAOYI5g3mUP//AAAAAAAAAAEACAAIAAgAAAADAAQAAgAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAQAAAAAAAAAAEAADmCAAA5ggAAAADAADmDQAA5g0AAAAEAADmUAAA5lAAAAACAA8AJAAPACQAAAABAAAAAACCAPoBdAHgAAwAAP+lA84DQAAPABYAGgAeACUAKgAxADUAOQBAAFAAVQAABSEuAScRPgE3IR4BFxEOAQEjDgEdATMVIxUzFSMVMxUjFR4BOwEBESERIRMuAScjFTMVIxUzFSMVMxUjFTMyNjUlBiImNTERMTQ2MhcFFhQHJRUjFTcDff0GIi0BAS0iAvoiLQEBLf0MKBEXUFBQUFBQARYRKAKC/aYCWngBFhEoUFBQUFBQKBEX/d0GEAwMEAYBGQUF/u8C21oBLSIC+iItAQEtIv0GIi0DcQEWEXgpyCjJKHgRFwGRAbn8tgMiERYBoCnIKMkooBcRzwYMCAFACA0GoAYQBogF9H4AAAAABf///4AEzQOAABIAIgAxAD8ASgAAASEOARURFBYXIT4BNxEuASc5ARMnJgYPAQ4BLwEmBg8BEyUTITc+AR8BFjY/AT4BHwElPgE3LgEnDgEHHgEXMTUyFhQGIiY0NjMxBFL8ASsoKCsD/y1LAwNLLRRLOHspvRE4F3U5eSduAQP/AfwzjQ8zF3Q4eym9ETUXffzrQlYCAlZCQVcBAVdBFh0dKx0dFQOAAkAr/MwrMwEBMysDNCtAAv5DKh0VLtsTCws6Gx0xkwLMAfzMxhQKDD4cGjHpFAsMRxUBV0FBVwICV0FBVwHMHSwcHCwdAAAABf///4AEAgOAABkAGgAjADYARwAAJQYmNz4BJyYGDwEGFRY2Nz4BFQYHFjY3NgYDBxY+AS4BDgEWAT4BNSYAJwYABxYAFyEyPgEmJyUuASc+ATceARcUBgcGFh8BAms/AwcIKBwngQcLCQ48BAETHQoKXjMsEzUEHSgEJTooAyQBXUNGBf7f2tr+3wUFASHaAd4LEQgFCf4MvfoFBfq9vfoFSUQLAwxR3zBlGRRzFQhPBwgIBA8gAwIKDHN3Jhg1MAUBZkQBJDopAyU6KP4fR7Jh2gEhBQX+39ra/t8FDBQVBwgF+r29+gUF+r1dp0ALHwlFAAUAAP+ABAADgAAAAAwAHAA6AEYAABEzITIVERQjISI1ETQFISIGFREUFjMhMjY1ETQmBT4CHgIGBx4BMjY3LgE+AR4CBgcOAiYnLgEBISImNDYzITIWFAbNAmbNzf2azQLl/jYVHh0WAcoVHh7+OwUVHBoRAwoKDUJXQw0OCA4dIxgEERARXn1eEhQRAY/+iAsODgsBeAsODgOAzf2azc0CZs3YHhX+CxYdHhUB9RUefw4RBQsWHBgJKTIyKQwgIRAFGCMdBzxIAUg7CCj+ag8VDw8VDwAAAAAAEgDeAAEAAAAAAAAAFQAAAAEAAAAAAAEACAAVAAEAAAAAAAIABwAdAAEAAAAAAAMACAAkAAEAAAAAAAQACAAsAAEAAAAAAAUACwA0AAEAAAAAAAYACAA/AAEAAAAAAAoAKwBHAAEAAAAAAAsAEwByAAMAAQQJAAAAKgCFAAMAAQQJAAEAEACvAAMAAQQJAAIADgC/AAMAAQQJAAMAEADNAAMAAQQJAAQAEADdAAMAAQQJAAUAFgDtAAMAAQQJAAYAEAEDAAMAAQQJAAoAVgETAAMAAQQJAAsAJgFpCkNyZWF0ZWQgYnkgaWNvbmZvbnQKaWNvbmZvbnRSZWd1bGFyaWNvbmZvbnRpY29uZm9udFZlcnNpb24gMS4waWNvbmZvbnRHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQAKAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQACgBpAGMAbwBuAGYAbwBuAHQAUgBlAGcAdQBsAGEAcgBpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQECAQMBBAEFAQYABnNoaXBpbgZ0dXBpYW4LZ3Vhbnl1d29tZW4Geml5dWFuAAA="},c214:function(A,e,n){"use strict";n.r(e);var o=n("686c"),t=n("7fe7");for(var a in t)"default"!==a&&function(A){n.d(e,A,(function(){return t[A]}))}(a);n("1cad");var i,r=n("f0c5"),g=Object(r["a"])(t["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=g.exports},e18f:function(A,e,n){A.exports=n.p+"static/img/iconfont.dae2936b.svg"},fe83:function(A,e,n){var o=n("41b1");"string"===typeof o&&(o=[[A.i,o,""]]),o.locals&&(A.exports=o.locals);var t=n("4f06").default;t("a16826ee",o,!0,{sourceMap:!1,shadowMode:!1})}});