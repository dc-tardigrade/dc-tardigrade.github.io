(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page page-login"},[a("div",{staticClass:"container"},[a("h1",[e._v("Connexion")]),a("form",{staticClass:"login-form",on:{submit:e.login}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Adresse e-mail")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Mot de passe")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"btn btn-red"},[e._v("Envoyer")]),a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/devenir-nomad"}},[e._v("Inscription")])],1)]),e.error?a("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])])])},r=[],n=a("1da1"),i=(a("96cf"),a("2591")),o={name:"Login",data:function(){return{email:"",password:"",error:""}},methods:{login:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.preventDefault(),a.prev=1,a.next=4,i["a"].auth().signInWithEmailAndPassword(t.email,t.password).then((function(e){localStorage.setItem("user",JSON.stringify(e.user))})).then((function(){t.$router.push("/")}));case 4:a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](1),t.error=a.t0;case 9:case"end":return a.stop()}}),a,null,[[1,6]])})))()}}},l=o,c=a("2877"),u=Object(c["a"])(l,s,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=login.6dccbcae.js.map