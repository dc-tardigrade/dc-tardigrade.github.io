(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["article"],{2532:function(t,r,n){"use strict";var e=n("23e7"),i=n("5a34"),c=n("1d80"),a=n("ab13");e({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(c(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"3ad6":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"page page-article"},[n("h1",[t._v("Article")]),t._v(" "+t._s(t.article)+" "+t._s(t.articles)+" ")])},i=[],c=n("5530"),a=(n("caad"),n("2532"),n("9911"),n("2f62")),o={name:"Article",props:{slug:String},data:function(){return{article:null}},computed:Object(c["a"])({},Object(a["c"])(["articles"])),mounted:function(){var t=this;this.article=this.articles.every((function(r){if(console.log(r),r.link.includes(t.slug))return r}))}},u=o,s=n("2877"),l=Object(s["a"])(u,e,i,!1,null,"2fdaa38d",null);r["default"]=l.exports},"44e7":function(t,r,n){var e=n("861d"),i=n("c6b6"),c=n("b622"),a=c("match");t.exports=function(t){var r;return e(t)&&(void 0!==(r=t[a])?!!r:"RegExp"==i(t))}},"5a34":function(t,r,n){var e=n("44e7");t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},"857a":function(t,r,n){var e=n("1d80"),i=/"/g;t.exports=function(t,r,n,c){var a=String(e(t)),o="<"+r;return""!==n&&(o+=" "+n+'="'+String(c).replace(i,"&quot;")+'"'),o+">"+a+"</"+r+">"}},9911:function(t,r,n){"use strict";var e=n("23e7"),i=n("857a"),c=n("af03");e({target:"String",proto:!0,forced:c("link")},{link:function(t){return i(this,"a","href",t)}})},ab13:function(t,r,n){var e=n("b622"),i=e("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(n){try{return r[i]=!1,"/./"[t](r)}catch(e){}}return!1}},af03:function(t,r,n){var e=n("d039");t.exports=function(t){return e((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},caad:function(t,r,n){"use strict";var e=n("23e7"),i=n("4d64").includes,c=n("44d2");e({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")}}]);
//# sourceMappingURL=article.2d802435.js.map