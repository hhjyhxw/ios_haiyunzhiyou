(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodtype/goodtype"],{"0b97":function(t,e,o){"use strict";o.r(e);var a=o("3854"),n=o("b8b6");for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);o("30ad");var s=o("2877"),u=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"30ad":function(t,e,o){"use strict";var a=o("6697"),n=o.n(a);n.a},3854:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},5099:function(t,e,o){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{queryData:{},supplierList:[{companyName:"吉之沐",goodsList:[{supplier:null,marketPrice:39,store:2,salesCount:2,freezeStore:2,introduction:"<p>壮家鸭王健康美味，特色小吃，有鸭王的生活，更有滋味</p>",defaultSourceImagePath:"/upload/image/goods/20180912/HYZY_C8A0EC1D5A12/d701a483bdc743eda974a19b1da72c70.jpg",promoteMessage:"无",originalPrice:58,promotionInfo:"无",producingArea:"广西南宁",pid:35176,monthSalesCount:0,maiwan:!0,name:"壮家鸭王礼盒套装12个/盒",id:29334}],contactPhone:"18078117467",businessHours:"07:30~22:00",supplierImg:"http://res.haiyunzy.com/mall/upload/image/supplier/20180904/null/1d53fa083c4940c7a2f934238fc72b59.png",address:"南宁市青秀区凤岭南",id:610}],cartNum:0}},onLoad:function(t){this.queryData={lng:t.lng,lat:t.lat,nameKey:"",goodsCategoryId:t.goodsCategoryId},this.getShopAndGoodsLiSt(this.queryData)},onShow:function(){"undefined"!=t.getStorageSync("accessToken")&&null!=t.getStorageSync("accessToken")&&""!=t.getStorageSync("accessToken")&&this.getCartNum()},methods:{addCart:function(e){var a=this;if("undefined"==t.getStorageSync("accessToken")||null==t.getStorageSync("accessToken")||""==t.getStorageSync("accessToken"))t.navigateTo({url:"/pages/login/login"});else{var n={pid:e};console.log(o("data==="+JSON.stringify(n)," at pages\\goodtype\\goodtype.vue:101")),this.$api.ajaxAdd(n).then(function(e){console.log(o(JSON.stringify(e)," at pages\\goodtype\\goodtype.vue:104")),"0000"==e.code?(a.options[0].info++,t.showToast({title:"添加成功",duration:2e3})):"0001"==e.code?t.showToast({title:e.message,duration:2e3}):t.showToast({title:"添加失败",duration:2e3})})}},getShopAndGoodsLiSt:function(t){var e=this;this.$api.goodtypelist(t).then(function(t){if(console.log(o(JSON.stringify(t)," at pages\\goodtype\\goodtype.vue:130")),console.log(o(e.$config.imghosturl," at pages\\goodtype\\goodtype.vue:131")),null!=t.supplierList&&t.supplierList.length>0){var a=t.supplierList;a.forEach(function(t){t.goodsList.forEach(function(t){t.defaultSourceImagePath=e.$config.imghosturl+t.defaultSourceImagePath})}),e.supplierList=a}})},getCartNum:function(){var t=this;this.$api.getCartNum().then(function(e){"0000"==e.code&&(t.cartNum=e.cartNum)})},toShopDetail:function(e){t.navigateTo({url:"/pages/shopdetail/shopdetail?shopId="+e})},toGoodsDetail:function(e){t.navigateTo({url:"/pages/gooddetail/gooddetail?goodId="+e})},toCart:function(){t.switchTab({url:"/pages/carts/carts"})}}};e.default=a}).call(this,o("6e42")["default"],o("0de9")["default"])},6697:function(t,e,o){},b8b6:function(t,e,o){"use strict";o.r(e);var a=o("5099"),n=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},db98:function(t,e,o){"use strict";(function(t){o("7656"),o("921b");a(o("66fd"));var e=a(o("0b97"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])}},[["db98","common/runtime","common/vendor"]]]);