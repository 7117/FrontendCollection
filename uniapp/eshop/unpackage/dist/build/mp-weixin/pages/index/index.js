(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"29bc":function(n,t,e){"use strict";e.r(t);var o=e("83b2"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a},3370:function(n,t,e){"use strict";(function(n){e("8326");o(e("66fd"));var t=o(e("e7b5"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"429f":function(n,t,e){"use strict";var o=e("c9c0"),i=e.n(o);i.a},"83b2":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(e("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,o,i,a,u){try{var c=n[a](u),r=c.value}catch(s){return void e(s)}c.done?t(r):Promise.resolve(r).then(o,i)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var u=n.apply(t,e);function c(n){a(u,o,i,c,r,"next",n)}function r(n){a(u,o,i,c,r,"throw",n)}c(void 0)}))}}var c=function(){e.e("components/goods-list/goods-list").then(function(){return resolve(e("e2a0"))}.bind(null,e)).catch(e.oe)},r={data:function(){return{swipers:[],goods:[],navs:[{icon:"iconfont icon-ziyuan",title:"黑玛超市",path:"/pages/goods/goods"},{icon:"iconfont icon-ziyuan",title:"黑玛超市",path:"/pages/contact/contact"},{icon:"iconfont icon-ziyuan",title:"黑玛超市",path:"/pages/pics/pics"},{icon:"iconfont icon-ziyuan",title:"黑玛超市",path:"/pages/videos/videos"}]}},onLoad:function(){this.getSwipers(),this.getHotGoods()},components:{"goods-list":c},methods:{getSwipers:function(){var n=this;return u(o.default.mark((function t(){var e;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$myRequest({url:"/api/getlunbo"});case 2:e=t.sent,n.swipers=e.data.message,console.log(n.swipers);case 5:case"end":return t.stop()}}),t)})))()},getHotGoods:function(){var n=this;return u(o.default.mark((function t(){var e;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$myRequest({url:"/api/getgoods?pageindex=1"});case 2:e=t.sent,console.log(e),n.goods=e.data.message;case 5:case"end":return t.stop()}}),t)})))()},navClick:function(t){n.navigateTo({url:t})},goDetail:function(t){n.navigateTo({url:"/pages/goods-detail/goods-detail?id="+t})}}};t.default=r}).call(this,e("543d")["default"])},c9c0:function(n,t,e){},e7b5:function(n,t,e){"use strict";e.r(t);var o=e("fb99"),i=e("29bc");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("429f");var u,c=e("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=r.exports},fb99:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var o={goodsList:function(){return e.e("components/goods-list/goods-list").then(e.bind(null,"e2a0"))}},i=function(){var n=this,t=n.$createElement;n._self._c},a=[]}},[["3370","common/runtime","common/vendor"]]]);