(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shoplist/shoplist"],{"1c6c":function(t,e,n){"use strict";n.r(e);var o=n("33a1"),s=n("2be6");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("f470");var a=n("2877"),r=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"26e3":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,s,i,a){try{var r=t[i](a),u=r.value}catch(c){return void n(c)}r.done?e(u):Promise.resolve(u).then(o,s)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(o,s){var i=t.apply(e,n);function r(t){a(i,o,s,r,u,"next",t)}function u(t){a(i,o,s,r,u,"throw",t)}r(void 0)})}}var u=function(){return n.e("components/back-top/back-top").then(n.bind(null,"c33e"))},c={components:{backTop:u},data:function(){return{address:"西乡塘区",longitude:"",latitude:"",supplierList:[{id:1,storeName:"旗舰店",supplierImg:"../../static/image/ic_sy_jsyl.png",businessHours:"09:00-18:00",address:"南宁市西乡塘北湖路28号",contactPhone:"15077144027",disatance:230},{id:2,storeName:"家政服务",supplierImg:"../../static/image/ic_sy_jjry.png",businessHours:"09:00-18:00",address:"南宁市西乡塘北湖路50号",contactPhone:"15077144027",disatance:299},{id:3,storeName:"家政服务",supplierImg:"../../static/image/ic_sy_jjry.png",businessHours:"09:00-18:00",address:"南宁市西乡塘北湖路50号",contactPhone:"15077144027",distances:299}],backTop:{src:"../../static/back-top/top.png",scrollTop:0},scrollTop:0}},onLoad:function(){var e=this;this.getLocationInfo(),t.$on("LoginBack",function(){var t={lng:that.longitude,lat:that.latitude};e.getshopList(t)})},methods:{getLocationInfo:function(){var e=r(s.default.mark(function e(){var n;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this,e.next=3,t.getLocation({type:"wgs84",geocode:!0,success:function(e){console.log(o("当前位置的经度："+JSON.stringify(e)," at pages\\shoplist\\shoplist.vue:144")),n.longitude=e.longitude,n.latitude=e.latitude;var s=e.address.street;n.address=s,t.hideLoading();var i={lng:n.longitude,lat:n.latitude};n.getshopList(i)},fail:function(){t.hideLoading()},complete:function(){t.hideLoading()}});case 3:e.sent,{lng:n.longitude,lat:n.latitude};case 5:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getshopList:function(t){var e=this;console.log(o("data==="+JSON.stringify(t)," at pages\\shoplist\\shoplist.vue:174")),this.$api.shoplist(t).then(function(t){if(console.log(o(JSON.stringify(t)," at pages\\shoplist\\shoplist.vue:177")),console.log(o("data==="+JSON.stringify(t.list)," at pages\\shoplist\\shoplist.vue:178")),console.log(o(e.$config.imghosturl," at pages\\shoplist\\shoplist.vue:179")),null!=t.list){var n=t.list;e.supplierList=n}})},toShopDetail:function(e){t.navigateTo({url:"/pages/shopdetail/shopdetail?shopId="+e})},firstPage:function(){t.redirectTo({url:"/pages/index/index"})},shoplist:function(){t.redirectTo({url:"/pages/shoplist/shoplist"})},toCart:function(){t.redirectTo({url:"/pages/carts/carts"})},toMyCenter:function(){t.redirectTo({url:"/pages/mycenter/mycenter"})}},onPageScroll:function(t){this.backTop.scrollTop=t.scrollTop},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},500);var e={lng:that.longitude,lat:that.latitude};this.getshopList(e)}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},"2be6":function(t,e,n){"use strict";n.r(e);var o=n("26e3"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=s.a},"33a1":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},"51d6":function(t,e,n){"use strict";(function(t){n("7656"),n("921b");o(n("66fd"));var e=o(n("1c6c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9e97":function(t,e,n){},f470:function(t,e,n){"use strict";var o=n("9e97"),s=n.n(o);s.a}},[["51d6","common/runtime","common/vendor"]]]);