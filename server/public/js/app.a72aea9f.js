(function(e){function t(t){for(var n,o,i=t[0],c=t[1],s=t[2],p=0,l=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({login:"login",products:"products",register:"register"}[e]||e)+"."+{login:"86d7db00",products:"6ccaa0b6",register:"16ba209f"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={products:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({login:"login",products:"products",register:"register"}[e]||e)+"."+{login:"31d6cfe0",products:"eccad134",register:"31d6cfe0"}[e]+".css",a=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===n||p===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],p=s.getAttribute("data-href");if(p===n||p===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],f.parentNode.removeChild(f),r(u)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(e);var l=new Error;s=function(t){p.onerror=p.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=p;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=r("bc3a"),a=r.n(o),u=(r("96cf"),r("3b8d")),i=r("2f62");n["a"].use(i["a"]);var c=new i["a"].Store({state:{token:localStorage.getItem("token")?localStorage.getItem("token"):void 0},mutations:{setToken:function(e,t){t?localStorage.setItem("token",t):localStorage.removeItem("token"),e.token=t}},actions:{login:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,l.post("/api/login",r);case 3:o=e.sent,a=o.data,n("setToken",a);case 6:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n("setToken",void 0),location.reload(1);case 3:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,l.post("/api/register",r);case 3:o=e.sent,a=o.data,n("setToken",a);case 6:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),getProducts:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,l.get("/api/products",r);case 3:return n=e.sent,o=n.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),getProduct:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,l.get("/api/products/".concat(r));case 3:return n=e.sent,o=n.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),createProduct:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,l.post("/api/products",r);case 3:return n=e.sent,o=n.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),updateProduct:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,o=r.product,e.next=4,l.put("/api/products/".concat(n),o);case 4:return a=e.sent,u=a.data,e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),deleteProduct:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,l.delete("/api/products/".concat(r));case 3:return n=e.sent,o=n.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()}}),s={},p=a.a.create(s);p.interceptors.request.use((function(e){return c.state.token&&(e.headers["authorization"]="berarer "+c.state.token),e}),(function(e){return Promise.reject(e)})),p.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=p,window.axios=p,Object.defineProperties(e.prototype,{axios:{get:function(){return p}},$axios:{get:function(){return p}}})},n["a"].use(Plugin);var l=p,f=function(e,t){var r=t._c;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container"},[r("router-view")],1)])},d=[],m={},g=m,h=(r("034f"),r("2877")),v=Object(h["a"])(g,f,d,!0,null,null,null),b=v.exports,w=r("8c4f");n["a"].use(w["a"]);var y=function(e,t,r){c.state.token?r():r("/login")},k=function(e,t,r){c.state.token?r("/products"):r()},x=new w["a"]({mode:"history",base:"/",routes:[{path:"/login",component:function(){return r.e("login").then(r.bind(null,"a55b"))},beforeEnter:k},{path:"/register",component:function(){return r.e("register").then(r.bind(null,"73cf"))},beforeEnter:k},{path:"/products",component:function(){return r.e("products").then(r.bind(null,"6be2"))},beforeEnter:y},{path:"/products/new",component:function(){return r.e("products").then(r.bind(null,"d388"))},beforeEnter:y},{path:"/products/:id",component:function(){return r.e("products").then(r.bind(null,"d388"))},beforeEnter:y,props:!0},{path:"*",redirect:"/login"}]});n["a"].config.productionTip=!1,new n["a"]({router:x,store:c,render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.a72aea9f.js.map