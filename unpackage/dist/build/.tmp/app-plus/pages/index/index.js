(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"2cb4":function(t,e,n){"use strict";n.r(e);var o=n("7626"),a=n("9be4");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("9d87");var r=n("2877"),u=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},"509c":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/uni-swiper-dot/uni-swiper-dot").then(n.bind(null,"b280"))},i=function(){return n.e("components/zwy-tabBar/tabBar").then(n.bind(null,"c541"))},r={components:{uniSwiperDot:a,tabBar:i},data:function(){return{autoplay:!0,interval:2500,duration:500,currentPage:"index",address:"西乡塘区",longitude:"",latitude:"",info:[{content:"内容 A",adImage:"../../static/image/temp/banner_hyyx.png"},{content:"内容 B",adImage:"../../static/image/temp/banner1.png"},{content:"内容 C",adImage:"../../static/image/temp/banner_hyyx.png"}],current:0,mode:"dot",perfectGoodsList:[{id:1,name:"龙眼",defaultSourceImagePath:"../../static/image/temp/goods-demo.png",marketPrice:"263.00"},{id:1,name:"新水果",defaultSourceImagePath:"../../static/image/temp/good-demo.jpg",marketPrice:"250.00"},{id:1,name:"荔枝",defaultSourceImagePath:"../../static/image/temp/good-demo.png",marketPrice:"682.00"},{id:1,name:"牛肉",defaultSourceImagePath:"../../static/image/temp/goods-demo.jpg",marketPrice:"589.00"},{id:1,name:"龙虾",defaultSourceImagePath:"../../static/image/temp/good-demo.jpg",marketPrice:"289.00"}]}},onLoad:function(){var e=this;this.getLocationInfo(),this.getAdsList(),t.$on("LoginBack",function(){e.getAdsList()})},methods:{change:function(t){this.current=t.detail.current},getLocationInfo:function(){var e=this;t.getLocation({type:"wgs84",geocode:!0,success:function(t){e.longitude=t.latitude,e.latitude=t.latitude;var n=t.address.street+t.address.streetNum;e.address=n}})},getAdsList:function(){var t=this;this.$api.getAdsList().then(function(e){if(console.log(o(JSON.stringify(e)," at pages\\index\\index.vue:198")),console.log(o("data==="+JSON.stringify(e.list)," at pages\\index\\index.vue:199")),console.log(o(t.$config.imghosturl," at pages\\index\\index.vue:200")),null!=e.list){var n=e.list;n.forEach(function(e){return e.adImage=t.$config.imghosturl+e.adImage}),t.info=n}null!=e.list&&t.getPerfectGoodsList()})},getPerfectGoodsList:function(){var t=this;this.$api.perfectgoods().then(function(e){if(console.log(o(JSON.stringify(e)," at pages\\index\\index.vue:218")),console.log(o(t.$config.imghosturl," at pages\\index\\index.vue:219")),null!=e.list){var n=e.list;n.forEach(function(e){return e.defaultSourceImagePath=t.$config.imghosturl+e.defaultSourceImagePath}),t.perfectGoodsList=n}})},toGoogType:function(e){t.navigateTo({url:"/pages/goodtype/goodtype?goodsCategoryId="+e+"&lng="+this.longitude+"&lat="+this.latitude+"&nameKey="})},toGoodsDetail:function(e){t.navigateTo({url:"/pages/gooddetail/gooddetail?goodId="+e})},firstPage:function(){t.redirectTo({url:"/pages/index/index"})},shoplist:function(){t.redirectTo({url:"/pages/shoplist/shoplist"})},toCart:function(){t.redirectTo({url:"/pages/carts/carts"})},toMyCenter:function(){t.redirectTo({url:"/pages/mycenter/mycenter"})}}};e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},7626:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"9be4":function(t,e,n){"use strict";n.r(e);var o=n("509c"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},"9d87":function(t,e,n){"use strict";var o=n("ed14"),a=n.n(o);a.a},aac2:function(t,e,n){"use strict";(function(t){n("7656"),n("921b");o(n("66fd"));var e=o(n("2cb4"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ed14:function(t,e,n){}},[["aac2","common/runtime","common/vendor"]]]);