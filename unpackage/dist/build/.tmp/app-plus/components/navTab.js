(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/navTab"],{"13db":function(t,n,e){"use strict";var i=e("5dd1"),a=e.n(i);a.a},"47b6":function(t,n,e){"use strict";e.r(n);var i=e("c1ec"),a=e("eb47");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("13db");var c=e("2877"),s=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=s.exports},"5dd1":function(t,n,e){},8894:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"navTab",props:{tabTitle:{type:Array,default:[]}},data:function(){return{tabClick:0,isLeft:0,isWidth:0,tabLeft:0}},created:function(){var n=this;t.getSystemInfo({success:function(t){n.tabTitle.length<=5?n.isWidth=t.windowWidth/n.tabTitle.length:n.isWidth=t.windowWidth/5}})},methods:{longClick:function(t){if(this.tabTitle.length>5){var n=t-2;n=n<=0?0:n,this.tabLeft=(t-2)*this.isWidth}this.tabClick=t,this.isLeft=t*this.isWidth,this.$emit("changeTab",t)}}};n.default=e}).call(this,e("6e42")["default"])},c1ec:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},eb47:function(t,n,e){"use strict";e.r(n);var i=e("8894"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/navTab-create-component',
    {
        'components/navTab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("47b6"))
        })
    },
    [['components/navTab-create-component']]
]);
