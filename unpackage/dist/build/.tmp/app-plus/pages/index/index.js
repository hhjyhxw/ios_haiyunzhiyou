(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"2cb4":function(t,e,n){"use strict";n.r(e);var a=n("e49e"),o=n("9be4");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("9d87");var r=n("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"509c":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,o,i,r){try{var s=t[i](r),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(a,o)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var i=t.apply(e,n);function s(t){r(i,a,o,s,u,"next",t)}function u(t){r(i,a,o,s,u,"throw",t)}s(void 0)})}}var u=function(){return n.e("components/uni-swiper-dot/uni-swiper-dot").then(n.bind(null,"b280"))},c=function(){return n.e("components/back-top/back-top").then(n.bind(null,"c33e"))},d=function(){return n.e("components/navTabIndex").then(n.bind(null,"df07"))},l={components:{uniSwiperDot:u,backTop:c,navTab:d},data:function(){return{currentTab:0,tabTitle:["真龙","牛肉","柴米","油盐","衣服","蔬果","生鲜","芒果","牙膏","饮料"],autoplay:!0,interval:2500,duration:500,backTop:{src:"../../static/back-top/top.png",scrollTop:0},scrollTop:0,currentPage:"index",address:"西乡塘区",longitude:"",latitude:"",info:[{content:"内容 A",adImage:"../../static/image/temp/banner_hyyx.png"},{content:"内容 B",adImage:"../../static/image/temp/banner1.png"},{content:"内容 C",adImage:"../../static/image/temp/banner_hyyx.png"}],current:0,mode:"dot",perfectGoodsList:[{id:1,name:"龙眼",defaultSourceImagePath:"../../static/image/temp/goods-demo.png",marketPrice:"263.00"},{id:1,name:"新水果",defaultSourceImagePath:"../../static/image/temp/good-demo.jpg",marketPrice:"250.00"},{id:1,name:"荔枝",defaultSourceImagePath:"../../static/image/temp/good-demo.png",marketPrice:"682.00"},{id:1,name:"牛肉",defaultSourceImagePath:"../../static/image/temp/goods-demo.jpg",marketPrice:"589.00"},{id:1,name:"龙虾",defaultSourceImagePath:"../../static/image/temp/good-demo.jpg",marketPrice:"289.00"}],productList:[],queryData:{pageNo:1,pageSize:10,totalPage:0}}},onLoad:function(){this.init()},methods:{init:function(){this.getLocationInfo(),this.getAdsList(),this.getproductlist(),this.getPerfectGoodsList(this.queryData,!0),this.getAdsList()},changeTab:function(e){this.currentTab=e;var n=this.tabTitle[e];t.navigateTo({url:"/pages/HM-search/HM-search?keyword="+n})},change:function(t){this.current=t.detail.current},getLocationInfo:function(){var e=this;t.getLocation({type:"wgs84",geocode:!0,success:function(t){e.longitude=t.latitude,e.latitude=t.latitude;var n=t.address.street;e.address=n}})},getAdsList:function(){var t=this;this.$api.getAdsList().then(function(e){if(console.log(a(JSON.stringify(e)," at pages\\index\\index.vue:252")),console.log(a("data==="+JSON.stringify(e.list)," at pages\\index\\index.vue:253")),console.log(a(t.$config.imghosturl," at pages\\index\\index.vue:254")),null!=e.list){var n=e.list;n.forEach(function(e){return e.adImage=t.$config.imghosturl+e.adImage}),t.info=n}})},getPerfectGoodsList:function(){var t=s(o.default.mark(function t(e,n){var i,r,s=this;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(a(JSON.stringify(e)," at pages\\index\\index.vue:284")),t.next=3,this.$api.perfectgoods(e);case 3:if(i=t.sent,console.log(a(JSON.stringify(i)," at pages\\index\\index.vue:286")),"0000"==i.code){t.next=7;break}return t.abrupt("return");case 7:this.queryData.totalPage=i.total,r=i.list,r.forEach(function(t){return t.defaultSourceImagePath=s.$config.imghosturl+t.defaultSourceImagePath}),this.perfectGoodsList=n?r:this.perfectGoodsList.concat(r);case 11:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),getproductlist:function(){var t=this;this.$api.productlist().then(function(e){if(console.log(a(JSON.stringify(e)," at pages\\index\\index.vue:303")),null!=e.list){var n=e.list;n.forEach(function(e){return e.imgUrl=t.$config.imghosturl+e.imgUrl}),t.productList=n}})},toGoogType:function(e){t.navigateTo({url:"/pages/goodtype/goodtype?goodsCategoryId="+e+"&lng="+this.longitude+"&lat="+this.latitude+"&nameKey="})},toGoodsDetail:function(e){t.navigateTo({url:"/pages/gooddetail/gooddetail?goodId="+e})},toproductList:function(e,n){var o=n.split("=");console.log(a(JSON.stringify("arry==="+o)," at pages\\index\\index.vue:326")),this.$api.getZhuantDetail({pid:o[1]}).then(function(e){if(console.log(a(JSON.stringify(e)," at pages\\index\\index.vue:329")),null!=e.zhuanti){var n=e.zhuanti;t.navigateTo({url:"/pages/productlist/productlist?pid="+n.id+"&themeType="+n.themeType})}})},gotsearch:function(){t.navigateTo({url:"/pages/HM-search/HM-search"})},firstPage:function(){t.redirectTo({url:"/pages/index/index"})},shoplist:function(){t.redirectTo({url:"/pages/shoplist/shoplist"})},toCart:function(){t.redirectTo({url:"/pages/carts/carts"})},toMyCenter:function(){t.redirectTo({url:"/pages/mycenter/mycenter"})}},onPageScroll:function(t){this.backTop.scrollTop=t.scrollTop},onPullDownRefresh:function(){this.queryData.pageNo=1,this.queryData.totalPage=0,this.getPerfectGoodsList(this.queryData,!0),t.stopPullDownRefresh()},onReachBottom:function(){return!(this.queryData.pageNo>this.queryData.totalPage)&&(this.queryData.pageNo=this.queryData.pageNo+1,console.log(a("pageNo==="+this.queryData.pageNo," at pages\\index\\index.vue:381")),console.log(a("totalPage==="+this.queryData.totalPage," at pages\\index\\index.vue:382")),!(this.queryData.pageNo>this.queryData.totalPage)&&void this.getPerfectGoodsList(this.queryData,!1))}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},"9be4":function(t,e,n){"use strict";n.r(e);var a=n("509c"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},"9d87":function(t,e,n){"use strict";var a=n("ed14"),o=n.n(a);o.a},aac2:function(t,e,n){"use strict";(function(t){n("7656"),n("921b");a(n("66fd"));var e=a(n("2cb4"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e49e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},ed14:function(t,e,n){}},[["aac2","common/runtime","common/vendor"]]]);