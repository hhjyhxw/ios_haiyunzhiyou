(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/HM-search/HM-search"],{"1e59":function(t,e,o){"use strict";o.r(e);var a=o("3ab9"),i=o("fdc6");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);o("4ab6");var r=o("2877"),n=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=n.exports},"3ab9":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return i})},"4ab6":function(t,e,o){"use strict";var a=o("4e16"),i=o.n(a);i.a},"4e16":function(t,e,o){},"61af":function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(o("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,o,a,i,s,r){try{var n=t[s](r),u=n.value}catch(c){return void o(c)}n.done?e(u):Promise.resolve(u).then(a,i)}function n(t){return function(){var e=this,o=arguments;return new Promise(function(a,i){var s=t.apply(e,o);function n(t){r(s,a,i,n,u,"next",t)}function u(t){r(s,a,i,n,u,"throw",t)}n(void 0)})}}var u=function(){return o.e("components/mehaotian-search-revision/mehaotian-search-revision").then(o.bind(null,"6d32"))},c=function(){return o.e("components/navTab").then(o.bind(null,"47b6"))},l=function(){return o.e("components/back-top/back-top").then(o.bind(null,"c33e"))},d={components:{mSearch:u,navTab:c,backTop:l},data:function(){return{defaultKeyword:"",keyword:"",oldKeywordList:[],hotKeywordList:[],keywordList:[],forbid:"",isShowKeywordList:!1,goodslistbox:!1,shSearchbox:!0,currentTab:0,tabTitle:["默认","热门","新品","促销","优选"],goodList:[],queryData:{pageNo:1,pageSize:10,totalPage:0,isHot:"",isNew:"",isDiscount:"",isSelect:"",keyword:""},backTop:{src:"../../static/back-top/top.png",scrollTop:0},scrollTop:0}},onLoad:function(t){this.init(),null!=t.keyword&&void 0!=t.keyword&&""!=t.keyword&&this.doSearch(t.keyword)},filters:{nullPriceFilter:function(t){if(null==t||"null"==t)return""}},methods:{init:function(){this.loadDefaultKeyword(),this.loadOldKeyword(),this.loadHotKeyword()},toGoodsDetail:function(e){t.navigateTo({url:"/pages/gooddetail/gooddetail?goodId="+e})},changeTab:function(t){this.currentTab=t,0==t&&(this.queryData.isHot="",this.queryData.isNew="",this.queryData.isDiscount="",this.queryData.isSelect=""),1==t&&(this.queryData.isHot=1,this.queryData.isNew="",this.queryData.isDiscount="",this.queryData.isSelect=""),2==t&&(this.queryData.isHot="",this.queryData.isNew=1,this.queryData.isDiscount="",this.queryData.isSelect=""),3==t&&(this.queryData.isHot="",this.queryData.isNew="",this.queryData.isDiscount=1,this.queryData.isSelect=""),4==t&&(this.queryData.isHot="",this.queryData.isNew="",this.queryData.isDiscount="",this.queryData.isSelect=1),this.queryData.pageNo=1,this.getGoodlistByKeyword(this.queryData,!0)},blur:function(){t.hideKeyboard()},loadDefaultKeyword:function(){this.defaultKeyword="默认关键字"},loadOldKeyword:function(){var e=this;t.getStorage({key:"OldKeys",success:function(t){var o=JSON.parse(t.data);e.oldKeywordList=o}})},loadHotKeyword:function(){this.hotKeywordList=["海韵玉香丝","芒果","九百万矿泉水","今世缘","香脆小吃","家政","牛肉","香蕉","草莓"]},inputChange:function(t){var e=t.detail?t.detail.value:t;if(!e)return this.keywordList=[],void(this.isShowKeywordList=!1);this.isShowKeywordList=!0,this.keywordList=[]},drawCorrelativeKeyword:function(t,e){for(var o=t.length,a=[],i=0;i<o;i++){var s=t[i],r=s[0].replace(e,"<span style='color: #9f9f9f;'>"+e+"</span>");r="<div>"+r+"</div>";var n={keyword:s[0],htmlStr:r};a.push(n)}return a},setkeyword:function(t){this.keyword=t.keyword},oldDelete:function(){var e=this;t.showModal({content:"确定清除历史搜索记录？",success:function(o){o.confirm?(console.log(a("用户点击确定"," at pages\\HM-search\\HM-search.vue:269")),e.oldKeywordList=[],t.removeStorage({key:"OldKeys"})):o.cancel&&console.log(a("用户点击取消"," at pages\\HM-search\\HM-search.vue:275"))}})},hotToggle:function(){this.forbid=this.forbid?"":"_forbid"},sboxblur:function(){this.goodslistbox=!1,this.shSearchbox=!0,this.forbid=""},doSearch:function(t){t=t||(this.keyword?this.keyword:this.defaultKeyword),this.keyword=t,this.saveKeyword(t),this.goodslistbox=!0,this.shSearchbox=!1,this.queryData.keyword=t,this.getGoodlistByKeyword(this.queryData,!0)},saveKeyword:function(e){var o=this;t.getStorage({key:"OldKeys",success:function(i){console.log(a(i.data," at pages\\HM-search\\HM-search.vue:318"));var s=JSON.parse(i.data),r=s.indexOf(e);-1==r?s.unshift(e):(s.splice(r,1),s.unshift(e)),s.length>10&&s.pop(),t.setStorage({key:"OldKeys",data:JSON.stringify(s)}),o.oldKeywordList=s},fail:function(a){var i=[e];t.setStorage({key:"OldKeys",data:JSON.stringify(i)}),o.oldKeywordList=i}})},getGoodlistByKeyword:function(){var t=n(i.default.mark(function t(e,o){var s,r,n=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(a(JSON.stringify(e)," at pages\\HM-search\\HM-search.vue:347")),t.next=3,this.$api.getGoodlistByKeyword(e);case 3:if(s=t.sent,console.log(a(JSON.stringify(s)," at pages\\HM-search\\HM-search.vue:349")),"0000"==s.code){t.next=7;break}return t.abrupt("return");case 7:this.queryData.totalPage=s.total,r=s.list,r.forEach(function(t){return t.defaultSourceImagePath=n.$config.imghosturl+t.defaultSourceImagePath}),this.goodList=o?r:this.goodList.concat(r);case 11:case"end":return t.stop()}},t,this)}));function e(e,o){return t.apply(this,arguments)}return e}()},onPageScroll:function(t){this.backTop.scrollTop=t.scrollTop},onPullDownRefresh:function(){this.queryData.pageNo=1,this.queryData.totalPage=0,this.getGoodlistByKeyword(this.queryData,!0),setTimeout(function(){t.stopPullDownRefresh()},500)},onReachBottom:function(){return!(this.queryData.pageNo>this.queryData.totalPage)&&(this.queryData.pageNo=this.queryData.pageNo+1,console.log(a("pageNo==="+this.queryData.pageNo," at pages\\HM-search\\HM-search.vue:382")),console.log(a("totalPage==="+this.queryData.totalPage," at pages\\HM-search\\HM-search.vue:383")),!(this.queryData.pageNo>this.queryData.totalPage)&&void this.getGoodlistByKeyword(this.queryData,!1))}};e.default=d}).call(this,o("6e42")["default"],o("0de9")["default"])},8923:function(t,e,o){"use strict";(function(t){o("7656"),o("921b");a(o("66fd"));var e=a(o("1e59"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},fdc6:function(t,e,o){"use strict";o.r(e);var a=o("61af"),i=o.n(a);for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);e["default"]=i.a}},[["8923","common/runtime","common/vendor"]]]);