(this.webpackJsonpaws=this.webpackJsonpaws||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),s=n(4),a=n.n(s),r=(n(14),n(3)),i=n.n(r),u=n(5),h=n(6),l=n(7),d=n(9),p=n(8),f=(n(16),n(0)),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={code:"",events:[]},e.componentDidMount=function(){e.testEndPoints()},e.goToRoot=function(){window.location.href="".concat(window.location.origin,"/meet/")},e}return Object(l.a)(n,[{key:"testEndPoints",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,o,c,s,a,r,u,h,l,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.location.search,n=new URLSearchParams(t),o=n.get("code")){e.next=17;break}return console.log("step one"),e.next=7,fetch("https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 7:return c=e.sent,e.next=10,c.json();case 10:s=e.sent,a=s.authUrl,r=new URLSearchParams(a),this.setState({code:r.get("code")}),window.location.href=a,e.next=36;break;case 17:return console.log("step two",o),decodeURIComponent(o)===o&&(o=encodeURIComponent(o)),console.log("encoded code",o),e.next=22,fetch("https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(o));case 22:return u=e.sent,e.next=25,u.json();case 25:return h=e.sent,console.log("from token code",h),l=h.access_token,e.next=30,fetch("https://m200p3c8ne.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(l));case 30:return d=e.sent,e.next=33,d.json();case 33:p=e.sent,console.log("final product = ",p),p.errors.length?this.goToRoot():this.setState({events:p.events});case 36:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.events;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("button",{onClick:this.goToRoot,children:"refresh"}),Object(f.jsx)("hr",{}),Object(f.jsx)("h1",{children:this.state.code}),Object(f.jsx)("ul",{children:e.map((function(e,t){return Object(f.jsx)("li",{children:e.summary},t)}))}),Object(f.jsx)("hr",{})]})}}]),n}(c.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),s(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(j,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.4453fe96.chunk.js.map