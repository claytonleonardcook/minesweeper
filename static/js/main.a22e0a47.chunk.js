(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var i=t(1),r=t.n(i),a=t(6),o=t.n(a),c=(t(12),t(2)),d=(t(13),t(7));function h(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=0,r=-1;r<=1;r++){var a=t+r;if(!(a<0||a>=e.length))for(var o=-1;o<=1;o++){var c=n+o;c<0||c>=e.length||0===o&&0===r||(i+=e[a][c].data?1:0)}}return i}function s(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=[],i=0;i<e;i++){for(var r=[],a=0;a<e;a++)r.push({data:0,toggled:!1});t.push(r)}for(var o=0;o<n;o++){var c=Math.round(Math.random()*(e-1)),d=Math.round(Math.random()*(e-1));1!==t[d][c].data?t[d][c].data=1:o--}return t}t(14);var l=t(0);var u=function(e){var n=e.x,t=e.y,i=Object(c.a)(e.grid,2),r=i[0],a=i[1],o=Object(c.a)(e.alive,2),s=o[0],u=o[1],g=r[t][n],j=g.data,v=g.toggled;return Object(l.jsx)("th",{className:"Cell",x:n,y:t,style:{animation:s||1!==j?"none":"shake 0.5s ease-in 0s forwards",backgroundColor:v?"#FFF0":"",height:"".concat(((window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight)-100)/r.length,"px"),width:"".concat(((window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight)-100)/r.length,"px")},onClick:function(){if(!v){j&&u(!1);var e=Object(d.a)(r);e[t][n].toggled=!0,a(e)}},children:v?j?"\ud83d\udca3":h(r,n,t):""})};var g=function(){var e=Object(i.useState)(!0),n=Object(c.a)(e,2),t=n[0],r=n[1],a=Object(i.useState)(s(8,16)),o=Object(c.a)(a,2),d=o[0],h=o[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("table",{className:"Grid",children:Object(l.jsx)("tbody",{children:d.map((function(e,n){return Object(l.jsx)("tr",{className:"row y",children:e.map((function(e,i){return Object(l.jsx)(u,{x:i,y:n,grid:[d,h],alive:[t,r]},i)}))},n)}))})}),Object(l.jsxs)("div",{style:{visibility:t?"hidden":"visible"},children:[Object(l.jsx)("h2",{children:"Game Over"}),Object(l.jsx)("button",{onClick:function(){h(s(8,16)),r(!0)},children:"New Game?"})]})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),i(e),r(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.a22e0a47.chunk.js.map