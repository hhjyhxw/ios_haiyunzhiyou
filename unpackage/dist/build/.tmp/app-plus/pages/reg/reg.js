(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{"0abc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"51af":function(t,e,n){"use strict";(function(t){n("7656"),n("921b");a(n("66fd"));var e=a(n("bd9a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6c0a":function(t,e,n){"use strict";n.r(e);var a=n("c9be"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},b0df:function(t,e,n){"use strict";var a=n("ef52"),o=n.n(a);o.a},bd9a:function(t,e,n){"use strict";n.r(e);var a=n("0abc"),o=n("6c0a");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("b0df");var i=n("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},c9be:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("0a76"));function o(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/m-input").then(n.bind(null,"a477"))},i={components:{mInput:u},data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{var e={account:this.account,password:this.password,email:this.email};a.default.addUser(e),t.showToast({title:"注册成功"}),t.navigateBack({delta:1})}}}};e.default=i}).call(this,n("6e42")["default"])},ef52:function(t,e,n){}},[["51af","common/runtime","common/vendor"]]]);