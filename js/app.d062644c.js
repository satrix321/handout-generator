(function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],d=0,s=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(s.length)s.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({handout:"handout"}[e]||e)+"."+{handout:"13f8b147"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={handout:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({handout:"handout"}[e]||e)+"."+{handout:"bc7b5af9"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){l=s[c],d=l.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var s=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/handout-generator/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1192:function(e,t,n){},"213d":function(e,t,n){e.exports=n.p+"img/old-newspaper-article.10aa25c5.jpg"},2676:function(e,t,n){},"299f":function(e,t,n){e.exports=n.p+"img/old-handwritten-letter.1f8c3bf8.jpg"},"2e09":function(e,t,n){"use strict";n("2676")},3706:function(e,t,n){e.exports=n.p+"img/newspaper-article.1e380684.jpg"},"3ce0":function(e,t,n){e.exports=n.p+"img/old-business-card-01.1b59688e.jpg"},"423d":function(e,t,n){},"4dfd":function(e,t,n){"use strict";n("7d9e")},6748:function(e,t,n){"use strict";n("423d")},"7d9e":function(e,t,n){},"809f":function(e,t,n){e.exports=n.p+"img/handwritten-letter.134a9240.jpg"},bcd7:function(e,t,n){e.exports=n.p+"img/old-business-card-02.1d5ef800.jpg"},c8e8:function(e,t,n){e.exports=n.p+"img/telegram-01.147b6f22.jpg"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b972");var r=n("7a23"),a={class:"\n      h-16\n      flex\n      items-center\n      px-4\n      z-50\n      bg-gray-100\n      border-b-2 border-black\n      w-full\n    "},o={class:"logo-container"},i=Object(r["e"])("HANDOUT GENERATOR"),c={class:"container mx-auto pt-16 pb-8"};function u(e,t,n,u,l,d){var s=Object(r["x"])("router-link"),f=Object(r["x"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("header",a,[Object(r["f"])("div",o,[Object(r["f"])(s,{to:"/",class:"logo"},{default:Object(r["F"])((function(){return[i]})),_:1})])]),Object(r["f"])("div",c,[Object(r["f"])(f)])],64)}var l=Object(r["g"])({name:"App"});n("4dfd");l.render=u;var d=l,s=n("9483");Object(s["a"])("".concat("/handout-generator/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var f=n("6c02");function p(e,t,n,a,o,i){var c=Object(r["x"])("HandoutCard"),u=Object(r["x"])("MasonryContainer");return Object(r["p"])(),Object(r["d"])(u,null,{default:Object(r["F"])((function(){return[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.filteredHandoutCards,(function(e){return Object(r["p"])(),Object(r["d"])(c,{key:e.title,title:e.title,url:e.url,image:e.image,width:300,class:"masonry-item"},null,8,["title","url","image"])})),128))]})),_:1})}n("4de4"),n("caad"),n("2532");var b=Object(r["H"])("data-v-10dab27a"),g=b((function(e,t,n,a,o,i){return Object(r["p"])(),Object(r["d"])("div",{style:{opacity:e.isInitialized?1:0},ref:"containerRef",class:"masonry-container"},[Object(r["w"])(e.$slots,"default",{},void 0,!0)],4)})),v=n("b85c"),m=(n("cb29"),n("25f0"),n("a9e3"),Object(r["g"])({name:"MasonryContainer",setup:function(){var e=Object(r["u"])(),t=Object(r["u"])(!1),n=Object(r["u"])([]),a=300,o=25,i=25,c=function(e,t,n){var r=e-t,a=0,o=0;do{o++,a=r,r=r-t-n}while(r>=0);return{columnsCount:o,freeWidth:a}},u=function(e){if(e.length<=0)return null;for(var t=0,n=e[0],r=1;r<e.length;r++)e[r]<n&&(t=r,n=e[r]);return t},l=function(){if(e.value){var t=e.value,r=Math.min(t.clientWidth+2*t.offsetLeft,1600),i=c(r,a,o);n.value=new Array(i.columnsCount).fill(0),t.style.marginLeft="".concat(i.freeWidth/2,"px"),t.style.marginRight="".concat(i.freeWidth/2,"px")}},d=function(e){var t=e.offsetHeight,r=u(n.value);e.dataset.gridColumn=r.toString(),e.dataset.left=(r*(a+o)).toString(),e.dataset.top=n.value[r].toString(),e.dataset.positioned="true",e.style.position="absolute",e.style.left="".concat(r*(a+o),"px"),e.style.top="".concat(n.value[r],"px"),n.value[r]+=Number(t)+i},s=function(){if(l(),e.value){var t,n=Object(v["a"])(e.value.children);try{for(n.s();!(t=n.n()).done;){var r=t.value,a=r;"true"===a.dataset.imageLoaded&&d(a)}}catch(o){n.e(o)}finally{n.f()}}};return Object(r["n"])((function(){l(),window.addEventListener("resize",s),t.value=!0,setInterval((function(){if(e.value){var t,n=Object(v["a"])(e.value.children);try{for(n.s();!(t=n.n()).done;){var r=t.value,a=r;"true"===a.dataset.imageLoaded&&"true"!==a.dataset.positioned&&d(a)}}catch(o){n.e(o)}finally{n.f()}}}),200)})),Object(r["o"])((function(){window.removeEventListener("resize",s)})),{containerRef:e,isInitialized:t}}}));n("6748");m.render=g,m.__scopeId="data-v-10dab27a";var h=m,j=Object(r["H"])("data-v-05a60a7d");Object(r["s"])("data-v-05a60a7d");var O={class:"mx-2"};Object(r["q"])();var y=j((function(e,t,n,a,o,i){var c=Object(r["x"])("router-link");return Object(r["p"])(),Object(r["d"])(c,{to:e.url,class:"handout-card","data-image-loaded":e.isImageLoaded},{default:j((function(){return[Object(r["f"])("div",null,[Object(r["f"])("img",{class:"rounded-xl mb-2",ref:"imgRef",style:{width:"".concat(e.width,"px")},src:e.image},null,12,["src"]),Object(r["f"])("p",O,Object(r["A"])(e.title),1)])]})),_:1},8,["to","data-image-loaded"])})),w=Object(r["g"])({name:"HandoutCard",props:{title:{type:String,required:!0},url:{type:String,default:"/"},image:{type:String,required:!0},width:Number},setup:function(){var e=Object(r["u"])(),t=Object(r["u"])(!1);return Object(r["n"])((function(){e.value&&(e.value.complete?t.value=!0:e.value.addEventListener("load",(function(){t.value=!0})))})),{imgRef:e,isImageLoaded:t}}});n("2e09");w.render=y,w.__scopeId="data-v-05a60a7d";var x=w,C=Object(r["g"])({name:"Home",components:{MasonryContainer:h,HandoutCard:x},setup:function(){var e=Object(r["u"])(""),t=Object(r["u"])([{title:"Newspaper Article",url:"/handout/newspaper-article",image:n("3706")},{title:"Old Newspaper Article",url:"/handout/old-newspaper-article",image:n("213d")},{title:"Handwritten Letter",url:"/handout/handwritten-letter",image:n("809f")},{title:"Old Handwritten Letter",url:"/handout/old-handwritten-letter",image:n("299f")},{title:"Old Business Card 01",url:"/handout/old-business-card-01",image:n("3ce0")},{title:"Old Business Card 02",url:"/handout/old-business-card-02",image:n("bcd7")},{title:"Old Business Card 03",url:"/handout/old-business-card-03",image:n("dcab")},{title:"Telegram 01",url:"/handout/telegram-01",image:n("c8e8")},{title:"Orient Express Ticket",url:"/handout/orient-express-ticket",image:n("e1d9")}]),a=Object(r["b"])((function(){return t.value.filter((function(t){return t.title.toLowerCase().includes(e.value.toLowerCase())}))}));return{filterValue:e,filteredHandoutCards:a}}});C.render=p;var k=C,L=[{path:"/",name:"Home",component:k},{path:"/handout/:handoutId",name:"Handout",component:function(){return n.e("handout").then(n.bind(null,"a3a5"))},props:!0}],A=Object(f["a"])({history:Object(f["b"])("/handout-generator/"),routes:L}),E=A,S=n("5502"),_=Object(S["a"])({state:{},mutations:{},actions:{},modules:{}});n("1192");Object(r["c"])(d).use(_).use(E).mount("#app")},dcab:function(e,t,n){e.exports=n.p+"img/old-business-card-03.597abcd6.jpg"},e1d9:function(e,t,n){e.exports=n.p+"img/orient-express-ticket.9bbe886d.jpg"}});
//# sourceMappingURL=app.d062644c.js.map