(this.webpackJsonpaws=this.webpackJsonpaws||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(4),a=n.n(c),o=(n(14),n(3)),u=n.n(o),i=n(5),h=n(6),l=n(7),p=n(9),j=n(8),f=(n(16),n(0)),d=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={code:"",events:[]},e.componentDidMount=function(){e.testEndPoints()},e.goToRoot=function(){},e}return Object(l.a)(n,[{key:"testEndPoints",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,s,r,c,a,o,i,h,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.location.search,n=new URLSearchParams(t),n.get("code")){e.next=14;break}return e.next=6,fetch("https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 6:return s=e.sent,e.next=9,s.json();case 9:r=e.sent,c=r.authUrl,console.log(c),e.next=32;break;case 14:return console.log("here"),e.abrupt("return");case 19:return a=e.sent,e.next=22,a.json();case 22:return o=e.sent,i=o.access_token,e.next=26,fetch("https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(i));case 26:return h=e.sent,e.next=29,h.json();case 29:l=e.sent,console.log(l.errors),l.errors||this.setState({events:l.events});case 32:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.events;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("button",{onClick:this.goToRoot,children:"refresh"}),Object(f.jsx)("hr",{}),Object(f.jsx)("ul",{children:e.map((function(e,t){return Object(f.jsx)("li",{children:e.summary},t)}))}),Object(f.jsx)("hr",{})]})}}]),n}(r.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(d,{})}),document.getElementById("root")),b()}},[[18,1,2]]]);
//# sourceMappingURL=main.4df2501c.chunk.js.map