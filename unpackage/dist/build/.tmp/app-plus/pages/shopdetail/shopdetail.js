(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopdetail/shopdetail"],{"0345":function(t,e,a){"use strict";(function(t){a("7656"),a("921b");o(a("66fd"));var e=o(a("4a99"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"33f9":function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("a34a"));function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e,a,o,i,n,s){try{var r=t[n](s),u=r.value}catch(c){return void a(c)}r.done?e(u):Promise.resolve(u).then(o,i)}function r(t){return function(){var e=this,a=arguments;return new Promise(function(o,i){var n=t.apply(e,a);function r(t){s(n,o,i,r,u,"next",t)}function u(t){s(n,o,i,r,u,"throw",t)}r(void 0)})}}var u=function(){return a.e("components/uni-swiper-dot/uni-swiper-dot").then(a.bind(null,"b280"))},c={components:{uniSwiperDot:u},data:function(){return{info:[{content:"内容 A",imageUrl:"../../static/image/temp/banner_hyyx.png"},{content:"内容 B",imageUrl:"../../static/image/temp/banner1.png"},{content:"内容 C",imageUrl:"../../static/image/temp/banner_hyyx.png"}],current:0,mode:"dot",supplier:{companyName:"家政服务",businessHours:"09:00-18:00",contactPhone:"15077144027"},typeList:[{id:1,name:"热门促销",isAacitve:!0},{id:2,name:"酒水饮料",isAacitve:!1},{id:3,name:"生鲜肉类",isAacitve:!1}],goodList:[{defaultSourceImagePath:"../../static/image/temp/good-demo.png",name:"耐斯乐波轮洗衣机深度清洗养护（拆洗）",marketPrice:265,originalPrice:305},{defaultSourceImagePath:"../../static/image/temp/good-demo.jpg",name:"耐斯乐波轮洗衣机深度清洗养护（拆洗）",marketPrice:265,originalPrice:305},{defaultSourceImagePath:"../../static/image/temp/goods-demo.png",name:"耐斯乐波轮洗衣机深度清洗养护（拆洗）",marketPrice:265,originalPrice:305},{defaultSourceImagePath:"../../static/image/temp/goods-demo.png",name:"耐斯乐波轮洗衣机深度清洗养护（拆洗）",marketPrice:265,originalPrice:305},{defaultSourceImagePath:"../../static/image/temp/goods-demo.png",name:"耐斯乐波轮洗衣机深度清洗养护（拆洗）",marketPrice:265,originalPrice:305},{defaultSourceImagePath:"../../static/image/temp/goods-demo.png",name:"耐斯乐波轮洗衣机深度清洗养护（拆洗）",marketPrice:265,originalPrice:305},{defaultSourceImagePath:"../../static/image/temp/goods-demo.png",name:"耐斯乐波轮洗衣机深度清洗养护（拆洗）",marketPrice:265,originalPrice:305},{defaultSourceImagePath:"../../static/image/temp/goods-demo.png",name:"耐斯乐波轮洗衣机深度清洗养护（拆洗）",marketPrice:265,originalPrice:305}],cartNum:0,queryData:{pageNo:1,totalPage:0,sid:-1,goodsCategoryId:-1}}},onLoad:function(e){console.log(t(e.shopId," at pages\\shopdetail\\shopdetail.vue:185"));var a={sid:e.shopId};this.shopdetail(a)},onShow:function(){"undefined"!=o.getStorageSync("accessToken")&&null!=o.getStorageSync("accessToken")&&""!=o.getStorageSync("accessToken")&&this.getCartNum()},methods:{change:function(t){this.current=t.detail.current},shopdetail:function(e){var a=this;this.$api.shopdetail(e).then(function(e){if(console.log(t(JSON.stringify(e)," at pages\\shopdetail\\shopdetail.vue:205")),console.log(t(a.$config.imghosturl," at pages\\shopdetail\\shopdetail.vue:206")),"0000"==e.code){a.supplier=e.supplier,a.typeList=e.typeList;var o=e.adlist;o.forEach(function(t){return t.imageUrl=a.$config.imghosturl+t.imageUrl}),a.info=o;var i={sid:e.supplier.id,goodsCategoryId:a.typeList[0].id,pageNo:1,pageSize:20};a.queryData=i,a.typeList[0].isAacitve=!0,a.getGoodsList(i,!0)}})},getGoodsList:function(){var e=r(i.default.mark(function e(a,o){var n,s=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.goodslistBySidAndCatoid(a);case 2:if(n=e.sent,console.log(t(JSON.stringify(n)," at pages\\shopdetail\\shopdetail.vue:241")),"0000"==n.code){e.next=6;break}return e.abrupt("return");case 6:this.queryData.totalPage=n.total,n.list.forEach(function(t){return t.defaultSourceImagePath=s.$config.imghosturl+t.defaultSourceImagePath}),this.goodList=o?n.list:this.goodList.concat(n.list);case 9:case"end":return e.stop()}},e,this)}));function a(t,a){return e.apply(this,arguments)}return a}(),getCartNum:function(){var t=this;this.$api.getCartNum().then(function(e){"0000"==e.code&&(t.cartNum=e.cartNum)})},chooseType:function(e){this.typeList.forEach(function(t,a){t.isAacitve=a==e}),console.log(t("index=="+e," at pages\\shopdetail\\shopdetail.vue:270")),console.log(t("this.typeList[index].id=="+this.typeList[e].id," at pages\\shopdetail\\shopdetail.vue:271")),this.queryData.goodsCategoryId=this.typeList[e].id,this.queryData.pageNo=1,this.getGoodsList(this.queryData,!0)},addToCaret:function(e){var a=this,i={pid:e};console.log(t("data==="+JSON.stringify(i)," at pages\\shopdetail\\shopdetail.vue:279")),this.$api.ajaxAdd(i).then(function(e){console.log(t(JSON.stringify(e)," at pages\\shopdetail\\shopdetail.vue:282")),"0000"==e.code?(a.cartNum=a.cartNum+1,o.showToast({title:"添加成功",duration:2e3})):"0001"==e.code?o.showToast({title:e.message,duration:2e3}):o.showToast({title:"添加失败",duration:2e3})})},toGoodsDetail:function(t){o.navigateTo({url:"/pages/gooddetail/gooddetail?goodId="+t})},toCart:function(){o.switchTab({url:"/pages/carts/carts"})}},onUnload:function(){o.$off("LoginBack")},onPullDownRefresh:function(){},onReachBottom:function(){return!(this.queryData.pageNo>this.queryData.totalPage)&&(this.queryData.pageNo=this.queryData.pageNo+1,console.log(t("pageNo==="+this.queryData.pageNo," at pages\\shopdetail\\shopdetail.vue:330")),console.log(t("totalPage==="+this.queryData.totalPage," at pages\\shopdetail\\shopdetail.vue:331")),!(this.queryData.pageNo>this.queryData.totalPage)&&void this.getGoodsList(this.queryData,!1))}};e.default=c}).call(this,a("0de9")["default"],a("6e42")["default"])},"4a99":function(t,e,a){"use strict";a.r(e);var o=a("68ef"),i=a("f8de");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("7830");var s=a("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"68ef":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i})},7061:function(t,e,a){},7830:function(t,e,a){"use strict";var o=a("7061"),i=a.n(o);i.a},f8de:function(t,e,a){"use strict";a.r(e);var o=a("33f9"),i=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);e["default"]=i.a}},[["0345","common/runtime","common/vendor"]]]);