(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[9],{665:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return O})),n.d(t,"b",(function(){return x}));var r=n(4),c=n.n(r),a=n(16),u=n(21),s=n(0),i=n(67),o=n(14),b=n.n(o),j=n(666),l=n(129),f=n(667),p=function(){var e=Object(s.useState)(new b.a(0)),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(j.b)(),o=Object(l.a)().fastRefresh;return Object(s.useEffect)((function(){i&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.g)(i);case 2:t=e.sent,r(new b.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,o]),n},d=function(){var e=Object(s.useState)(new b.a(0)),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(s.useState)(!1),l=Object(u.a)(o,2),p=l[0],d=l[1],O=Object(i.m)().account,x=Object(j.c)(),h=Object(j.b)(),m=Object(s.useCallback)(Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,Object(f.f)(h,x,O);case 3:t=e.sent,r(t),d(!1);case 6:case"end":return e.stop()}}),e)}))),[O,h,x]);return Object(s.useEffect)((function(){O&&h&&x&&m()}),[O,m,h,x]),{claimLoading:p,claimAmount:n}},O=function(){var e=Object(s.useState)([0,0,0,0]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(j.b)(),o=Object(l.a)().fastRefresh;return Object(s.useEffect)((function(){i&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.h)(i);case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,i,r]),n},x=function(e){var t=Object(s.useState)(0),n=Object(u.a)(t,2),r=n[0],i=n[1],o=Object(j.b)(),b=Object(l.a)().fastRefresh;return Object(s.useEffect)((function(){o&&function(){var t=Object(a.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.c)(o,e);case 2:n=t.sent,i(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[o,e,b]),r};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(s.useState)([]),n=Object(u.a)(t,2),r=n[0],o=n[1],b=Object(i.m)(),p=b.account,d=Object(j.c)(),O=Object(j.b)(),x=Object(l.a)(),h=x.fastRefresh;return Object(s.useEffect)((function(){p&&O&&d&&function(){var t=Object(a.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.e)(O,d,p,e);case 2:n=t.sent,o(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[p,O,d,h,e]),r}},667:function(e,t,n){"use strict";n.d(t,"i",(function(){return d})),n.d(t,"e",(function(){return O})),n.d(t,"j",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return y})),n.d(t,"h",(function(){return S}));var r=n(4),c=n.n(r),a=n(16),u=n(14),s=n.n(u),i=n(651),o=n(78),b=n(183),j=n(682),l=n(681),f=n(41),p=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u,s,j,l,p,d,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(o.b)(),a=new r.eth.Contract(b,Object(f.e)()),u=new i.a(t),s=[],!(n.length>100)){e.next=13;break}j=0,l=c.a.mark((function e(){var t,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.slice(100*j,100*(j+1)),r=t.map((function(e){return[e[0].toLowerCase(),u.encodeFunctionData(e[1],e[2])]})),e.next=4,a.methods.aggregate(r).call();case 4:i=e.sent,o=i.returnData,j++,s=s.concat(o.map((function(e,n){return u.decodeFunctionResult(t[n][1],e)})));case 8:case"end":return e.stop()}}),e)}));case 7:if(!(j<n.length/100)){e.next=11;break}return e.delegateYield(l(),"t0",9);case 9:e.next=7;break;case 11:e.next=19;break;case 13:return p=n.map((function(e){return[e[0].toLowerCase(),u.encodeFunctionData(e[1],e[2])]})),e.next=16,a.methods.aggregate(p).call();case 16:d=e.sent,O=d.returnData,s=O.map((function(e,t){return u.decodeFunctionResult(n[t][1],e)}));case 19:return e.abrupt("return",s);case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t.methods.multiBuy(new s.a(n).times(new s.a(10).pow(18)).toString(),r).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,u){var s,i,o,b,l,f,d,O,h,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=u,e.t0){e.next=5;break}return e.next=4,t.methods.issueIndex().call();case 4:e.t0=e.sent;case 5:return s=e.t0,e.next=8,x(n,r);case 8:return i=e.sent,o=Array.apply(null,{length:i}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=12,p(j,o);case 12:return b=e.sent,l=b.map((function(e){return e.toString()})),f=l.map((function(e){return[n.options.address,"getLotteryIssueIndex",[e]]})),e.next=17,p(j,f);case 17:return d=e.sent,O=[],d.forEach(function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.toString()===s&&O.push(l[n]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),h=O.map((function(e){return[n.options.address,"getLotteryNumbers",[e]]})),e.next=23,p(j,h);case 23:return m=e.sent,e.next=26,k(t);case 26:return e.abrupt("return",m);case 27:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.balanceOf(n).call());case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,u,s,i,o,b,f,d,O,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return e.next=4,x(n,r);case 4:return a=e.sent,u=Array.apply(null,{length:a}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=8,p(j,u);case 8:return s=e.sent,i=s.map((function(e){return e.toString()})),o=i.map((function(e){return[n.options.address,"getClaimStatus",[e]]})),e.next=13,p(j,o);case 13:return b=e.sent,f=i.filter((function(e,t){return!b[t][0]})),d=f.map((function(e){return[t.options.address,"getRewardView",[e]]})),e.next=18,p(l,d);case 18:return O=e.sent,h=[],O.forEach((function(e,t){e>0&&h.push(f[t])})),h.length>200&&(h=h.slice(0,200)),e.prev=22,e.abrupt("return",t.methods.multiClaim(h).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 26:return e.prev=26,e.t0=e.catch(22),e.abrupt("return",console.error(e.t0));case 29:case"end":return e.stop()}}),e,null,[[22,26]])})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var u,i,o,b,f,d,O,h,m,v,g,w,y,S;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.issueIndex().call();case 3:return u=e.sent,e.next=6,x(n,r);case 6:return i=e.sent,o=Array.apply(null,{length:i}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=10,p(j,o);case 10:return b=e.sent,f=b.map((function(e){return e.toString()})),d=f.map((function(e){return[n.options.address,"getLotteryIssueIndex",[e]]})),e.next=15,p(j,d);case 15:return O=e.sent,h=f.map((function(e){return[n.options.address,"getClaimStatus",[e]]})),e.next=19,p(j,h);case 19:return m=e.sent,e.next=22,k(t);case 22:return v=e.sent,g=[],O.forEach(function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(v||t.toString()!==u)&&(m[n][0]||g.push(f[n]));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),w=g.map((function(e){return[t.options.address,"getRewardView",[e]]})),e.next=28,p(l,w);case 28:return y=e.sent,S=y.reduce((function(e,t){return s.a.sum(e,t)}),s()(0)),e.abrupt("return",S);case 33:e.prev=33,e.t0=e.catch(0),console.error(e.t0);case 36:return e.abrupt("return",s()(0));case 37:case"end":return e.stop()}}),e,null,[[0,33]])})));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,e.abrupt("return",t.methods.getTotalRewards(n).call());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.maxNumber().call());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.drawed().call());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return r=e.sent,e.next=5,t.methods.drawed().call();case 5:return e.sent||(r-=1),e.prev=7,e.next=10,t.methods.historyAmount(r,5-n).call();case 10:return a=e.sent,e.abrupt("return",a/1e18/10);case 14:e.prev=14,e.t0=e.catch(7),console.error(e.t0);case 17:return e.abrupt("return",0);case 18:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,u,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,r=[],e.next=6,t.methods.drawed().call();case 6:if((a=e.sent)||0!==parseInt(n,10)){e.next=9;break}return e.abrupt("return",[0,0,0,0]);case 9:if(a){e.next=22;break}u=0;case 11:if(!(u<4)){e.next=20;break}return e.t0=r,e.next=15,t.methods.historyNumbers(n-1,u).call();case 15:e.t1=+e.sent.toString(),e.t0.push.call(e.t0,e.t1);case 17:u++,e.next=11;break;case 20:e.next=32;break;case 22:s=0;case 23:if(!(s<4)){e.next=32;break}return e.t2=r,e.next=27,t.methods.winningNumbers(s).call();case 27:e.t3=+e.sent.toString(),e.t2.push.call(e.t2,e.t3);case 29:s++,e.next=23;break;case 32:return e.abrupt("return",r);case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},670:function(e,t,n){"use strict";var r=n(4),c=n.n(r),a=n(16),u=n(21),s=n(0),i=n(67),o=n(666),b=n(667);t.a=function(){var e=Object(s.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1],j=Object(i.m)().account,l=Object(o.b)();return Object(s.useEffect)((function(){j&&l&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(l);case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[j,l]),n}},672:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return x}));var r=n(4),c=n.n(r),a=n(16),u=n(21),s=n(0),i=n(14),o=n.n(i),b=n(67),j=n(184),l=n(78),f=n(678),p=n(41),d=n(129),O=function(){var e=Object(d.a)().slowRefresh,t=Object(s.useState)(),n=Object(u.a)(t,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(j,Object(p.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,i(new o.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r},x=function(e){var t=Object(s.useState)(new o.a(0)),n=Object(u.a)(t,2),r=n[0],i=n[1],b=Object(d.a)().slowRefresh;return Object(s.useEffect)((function(){(function(){var e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(j,Object(p.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,i(new o.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e,b]),r};t.a=function(e){var t=Object(s.useState)(new o.a(0)),n=Object(u.a)(t,2),r=n[0],i=n[1],j=Object(b.m)(),l=j.account,p=j.ethereum,O=Object(d.a)().fastRefresh;return Object(s.useEffect)((function(){l&&p&&function(){var t=Object(a.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.c)(p,e,l);case 2:n=t.sent,i(new o.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,p,e,O]),r}},673:function(e,t,n){"use strict";n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f}));var r=n(21),c=n(4),a=n.n(c),u=n(16),s=n(0),i=n(67),o=n(666),b=n(667),j=function(){var e=Object(i.m)().account,t=Object(o.b)(),n=Object(o.c)();return{onMultiClaim:Object(s.useCallback)(Object(u.a)(a.a.mark((function r(){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(b.j)(t,n,e);case 3:return c=r.sent,r.abrupt("return",c);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[e,t,n])}},l=function(){var e=Object(i.m)().account,t=Object(o.b)();return{onMultiBuy:Object(s.useCallback)(function(){var n=Object(u.a)(a.a.mark((function n(r,c){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(b.i)(t,r,c,e);case 3:return u=n.sent,n.abrupt("return",u);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),[e,t])}},f=function(){var e=Object(s.useState)(5),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(o.b)(),j=Object(s.useCallback)(Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(i);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)}))),[i]);return Object(s.useEffect)((function(){i&&j()}),[i,j]),n}},680:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));var r=n(53),c=n(4),a=n.n(c),u=n(16),s=n(0),i=n(67),o=n(56),b=n(130),j=n(668),l=n(666),f=function(e){var t=Object(o.b)(),n=Object(i.m)().account,r=Object(l.d)();return{onReward:Object(s.useCallback)(Object(u.a)(a.a.mark((function c(){var u;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(j.b)(r,e,n);case 2:return u=c.sent,t(Object(b.a)(n)),c.abrupt("return",u);case 5:case"end":return c.stop()}}),c)}))),[n,t,e,r])}},p=function(e){var t=Object(i.m)().account,n=Object(l.d)();return{onReward:Object(s.useCallback)(Object(u.a)(a.a.mark((function c(){var u;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return u=e.reduce((function(e,c){return[].concat(Object(r.a)(e),[Object(j.b)(n,c,t)])}),[]),c.abrupt("return",Promise.all(u));case 2:case"end":return c.stop()}}),c)}))),[t,e,n])}}},688:function(e,t,n){"use strict";var r,c,a,u,s,i,o,b,j=n(52),l=n(4),f=n.n(l),p=n(16),d=n(21),O=n(14),x=n.n(O),h=n(0),m=n(3),v=n(40),g=n(664),w=n(170),k=n(690),y=n(10),S=m.e.div(r||(r=Object(j.a)([""]))),C=m.e.div(c||(c=Object(j.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),E=m.e.div(a||(a=Object(j.a)(["\n  align-items: center;\n  display: flex;\n"]))),z=m.e.div(u||(u=Object(j.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),I=m.e.span(s||(s=Object(j.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),F=function(e){var t=e.max,n=e.symbol,r=e.availableSymbol,c=e.onChange,a=e.onSelectMax,u=e.value,s=Object(w.a)();return Object(y.jsxs)(S,{children:[Object(y.jsx)(k.a,{endAdornment:Object(y.jsxs)(E,{children:[Object(y.jsx)(I,{children:n}),Object(y.jsx)(C,{}),Object(y.jsx)("div",{children:Object(y.jsx)(v.d,{size:"sm",onClick:a,children:s(452,"Max")})})]}),onChange:c,placeholder:"0",value:u}),Object(y.jsx)(z,{children:s(454,"".concat(t.toLocaleString()," ").concat(r," Available"))})]})},A=n(675),M=n(673),R=(t.a=function(e){var t,n=e.max,r=e.onDismiss,c=Object(h.useState)("1"),a=Object(d.a)(c,2),u=a[0],s=a[1],i=Object(h.useState)(!1),o=Object(d.a)(i,2),b=o[0],j=o[1],l=Object(h.useState)(!1),O=Object(d.a)(l,2)[1],m=Object(w.a)(),k=Object(h.useMemo)((function(){return Object(g.b)(n)}),[n]),S=Object(h.useMemo)((function(){return parseInt(Object(g.b)(n.div(new x.a(10))))}),[n]),C=Object(M.b)().onMultiBuy,E=Object(M.a)(),z=Object(h.useCallback)(Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),t=parseInt(u),n=Array.apply(null,{length:t}).map((function(){return[Math.floor(Math.random()*E)+1,Math.floor(Math.random()*E)+1,Math.floor(Math.random()*E)+1,Math.floor(Math.random()*E)+1]})),e.next=6,C("10",n);case 6:e.sent&&O(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[C,O,E,u]),I=Object(h.useCallback)((function(){Number(S)>50?s("50"):s(S.toString())}),[S]);return Object(y.jsxs)(v.x,{title:m(450,"Enter amount of tickets to buy"),onDismiss:r,children:[Object(y.jsx)(F,{value:u,onSelectMax:I,onChange:function(e){return s(e.currentTarget.value)},max:k,symbol:"TICKET",availableSymbol:"CAKE"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(R,{children:m(456,"Your amount must be a multiple of 10 CAKE")}),Object(y.jsx)(R,{children:m(458,"1 Ticket = 10 CAKE")})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(N,{children:m(478,"Ticket purchases are final. Your CAKE cannot be returned to you after buying tickets.")}),Object(y.jsx)(T,{children:m(460,"You will spend: ".concat((t=u,10*+t)," CAKE"))})]}),Object(y.jsxs)(A.a,{children:[Object(y.jsx)(v.d,{fullWidth:!0,variant:"secondary",onClick:r,children:m(462,"Cancel")}),Object(y.jsx)(v.d,{id:"lottery-buy-complete",fullWidth:!0,disabled:b||parseInt(u)>Number(S)||parseInt(u)>50||parseInt(u)<1,onClick:Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,z();case 3:j(!1),r();case 5:case"end":return e.stop()}}),e)}))),children:b?m(488,"Pending Confirmation"):m(464,"Confirm")})]})]})},m.e.div(i||(i=Object(j.a)(["\n  margin-left: 0.4em;\n  font-size: 14px;\n  font-weight: 600;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary}))),T=m.e.div(o||(o=Object(j.a)(["\n  margin-top: 1em;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),N=m.e.div(b||(b=Object(j.a)(["\n  margin-top: 1em;\n  margin-left: 0.4em;\n  color: #ed4b9e;\n"])))},785:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ze}));var r,c,a,u,s,i,o,b,j,l,f,p,d,O,x,h,m,v,g=n(52),w=n(0),k=n(3),y=n(40),S=n(170),C=n(171),E=n(4),z=n.n(E),I=n(16),F=n(21),A=n(67),M=n(14),R=n.n(M),T=n(680),N=n(17),L=n(33),B=n(41),D=n(73),P=n(689),H=n(129),K=function(){var e=Object(w.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(A.m)().account,a=Object(H.a)().fastRefresh;return Object(w.useEffect)((function(){c&&function(){var e=Object(I.a)(z.a.mark((function e(){var t,n,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.a.map((function(e){return{address:Object(B.d)(),name:"pendingEgg",params:[e.pid,c]}})),e.next=3,Object(L.a)(D,t);case 3:n=e.sent,a=P.a.map((function(e,t){return Object(N.a)(Object(N.a)({},e),{},{balance:new R.a(n[t])})})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,a]),n},W=n(669),Y=n(702),Q=n(10),V=function(e){var t=e.value,n=e.decimals,r=e.fontSize,c=void 0===r?"40px":r,a=e.prefix,u=Object(Y.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),s=u.countUp,i=u.update,o=Object(w.useRef)(i);return Object(w.useEffect)((function(){o.current(t)}),[t,o]),Object(Q.jsxs)(y.F,{bold:!0,fontSize:c,children:[a,s]})},$=function(e){var t=e.earningsSum,n=Object(S.a)();return Object(A.m)().account?Object(Q.jsx)(V,{value:t}):Object(Q.jsx)(y.F,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},q=function(e){var t=e.cakeBalance,n=Object(S.a)();return Object(A.m)().account?Object(Q.jsx)(V,{value:t,fontSize:"24px"}):Object(Q.jsx)(y.F,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},G=n(110),J=n(672),U=function(){var e=Object(w.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(A.m)().account,a=Object(H.a)().fastRefresh;return Object(w.useEffect)((function(){c&&function(){var e=Object(I.a)(z.a.mark((function e(){var t,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.a.map((function(e){return{address:Object(B.d)(),name:"pendingEgg",params:[e.pid,c]}})),e.next=3,Object(L.a)(D,t);case 3:n=e.sent,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,a]),n},X=n(664),Z=Object(k.e)(y.h)(r||(r=Object(g.a)(["\n  background-image: url('/images/home/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),_=k.e.div(c||(c=Object(g.a)(["\n  margin-bottom: 16px;\n"]))),ee=k.e.img(a||(a=Object(g.a)(["\n  margin-bottom: 16px;\n"]))),te=k.e.div(u||(u=Object(g.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),ne=k.e.div(s||(s=Object(g.a)(["\n  margin-top: 24px;\n"]))),re=function(){var e=Object(w.useState)(!1),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(A.m)().account,a=Object(S.a)(),u=K(),s=Object(X.a)(Object(J.a)(Object(B.a)())),i=Object(G.f)().toNumber(),o=U().reduce((function(e,t){return e+new R.a(t).div(new R.a(10).pow(18)).toNumber()}),0),b=u.filter((function(e){return e.balance.toNumber()>0})),j=Object(T.a)(b.map((function(e){return e.pid}))).onReward,l=Object(w.useCallback)(Object(I.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,j();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[j]);return Object(Q.jsx)(Z,{children:Object(Q.jsxs)(y.i,{children:[Object(Q.jsx)(y.o,{size:"xl",mb:"24px",children:a(542,"Farms & Staking")}),Object(Q.jsx)(ee,{src:"/images/home/2.png",alt:"cake logo",width:64,height:64}),Object(Q.jsxs)(_,{children:[Object(Q.jsx)(te,{children:a(544,"PIT to Harvest")}),Object(Q.jsx)($,{earningsSum:o}),Object(Q.jsxs)(te,{children:["~$",(i*o).toFixed(2)]})]}),Object(Q.jsxs)(_,{children:[Object(Q.jsx)(te,{children:a(546,"PIT in Wallet")}),Object(Q.jsx)(q,{cakeBalance:s}),Object(Q.jsxs)(te,{children:["~$",(i*s).toFixed(2)]})]}),Object(Q.jsx)(ne,{children:c?Object(Q.jsx)(y.d,{id:"harvest-all",disabled:b.length<=0||n,onClick:l,fullWidth:!0,children:n?a(548,"Collecting EGG"):a(999,"Harvest all (".concat(b.length,")"))}):Object(Q.jsx)(W.a,{fullWidth:!0})})]})})},ce=n(670),ae=n(673),ue=n(665),se=n(688),ie=function(){var e=Object(ue.c)().claimAmount;return Object(Q.jsx)(V,{value:Object(X.a)(e)})},oe=function(){var e=Object(ue.d)();return Object(Q.jsx)(y.F,{bold:!0,fontSize:"24px",children:Object(X.a)(e).toLocaleString(void 0,{maximumFractionDigits:2})})},be=Object(k.e)(y.h)(i||(i=Object(g.a)(["\n  background-image: url('/images/ticket-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),je=k.e.div(o||(o=Object(g.a)(["\n  margin-bottom: 16px;\n"]))),le=k.e.img(b||(b=Object(g.a)(["\n  margin-bottom: 16px;\n"]))),fe=k.e.div(j||(j=Object(g.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),pe=k.e.div(l||(l=Object(g.a)(["\n  display: flex;\n  margin-top: 24px;\n  button {\n    flex: 1 0 50%;\n  }\n"]))),de=function(){var e=Object(ce.a)(),t=Object(w.useState)(!1),n=Object(F.a)(t,2),r=n[0],c=n[1],a=Object(S.a)(),u=Object(ue.c)().claimAmount,s=Object(ae.c)().onMultiClaim,i=Object(J.a)(Object(B.a)()),o=Object(w.useCallback)(Object(I.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,s();case 4:e.sent&&c(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[s,c]),b=Object(y.N)(Object(Q.jsx)(se.a,{max:i,tokenName:"CAKE"})),j=Object(F.a)(b,1)[0];return Object(Q.jsx)(be,{children:Object(Q.jsxs)(y.i,{children:[Object(Q.jsx)(y.o,{size:"xl",mb:"24px",children:a(550,"Your Lottery Winnings")}),Object(Q.jsx)(le,{src:"/images/ticket.svg",alt:"cake logo",width:64,height:64}),Object(Q.jsxs)(je,{children:[Object(Q.jsx)(ie,{}),Object(Q.jsx)(fe,{children:a(552,"CAKE to Collect")})]}),Object(Q.jsxs)(je,{children:[Object(Q.jsx)(oe,{}),Object(Q.jsx)(fe,{children:a(554,"Total jackpot this round")})]}),Object(Q.jsxs)(pe,{children:[Object(Q.jsx)(y.d,{id:"dashboard-collect-winnings",disabled:0===Object(X.a)(u)||r,onClick:o,style:{marginRight:"8px"},children:a(556,"Collect Winnings")}),Object(Q.jsx)(y.d,{id:"dashboard-buy-tickets",variant:"secondary",onClick:j,disabled:e,children:a(558,"Buy Tickets")})]})]})})},Oe=n(683),xe=Object(k.e)(y.h)(f||(f=Object(g.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),he=k.e.div(p||(p=Object(g.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),me=function(){var e=Object(S.a)(),t=Object(J.c)(),n=Object(J.b)(Object(B.a)()),r=Object(G.c)(),c=Object(G.f)(),a=t?t.minus(n):new Oe.a(0),u=Object(X.a)(a),s=c.times(a),i=0;return r&&r[0]&&r[0].eggPerBlock&&(i=new Oe.a(r[0].eggPerBlock).div(new Oe.a(10).pow(18)).toNumber()),Object(Q.jsx)(xe,{children:Object(Q.jsxs)(y.i,{children:[Object(Q.jsx)(y.o,{size:"xl",mb:"24px",children:e(534,"PIT Stats")}),Object(Q.jsxs)(he,{children:[Object(Q.jsx)(y.F,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(Q.jsx)(V,{fontSize:"14px",value:Object(X.a)(s),decimals:0,prefix:"$"})]}),Object(Q.jsxs)(he,{children:[Object(Q.jsx)(y.F,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(Q.jsx)(V,{fontSize:"14px",value:Object(X.a)(t),decimals:0})]}),Object(Q.jsxs)(he,{children:[Object(Q.jsx)(y.F,{fontSize:"14px",children:e(538,"Total Burned")}),Object(Q.jsx)(V,{fontSize:"14px",value:Object(X.a)(n),decimals:0})]}),Object(Q.jsxs)(he,{children:[Object(Q.jsx)(y.F,{fontSize:"14px",children:e(10004,"Circulating Supply")}),u&&Object(Q.jsx)(V,{fontSize:"14px",value:u,decimals:0})]}),Object(Q.jsxs)(he,{children:[Object(Q.jsx)(y.F,{fontSize:"14px",children:e(540,"New PIT/block")}),Object(Q.jsx)(y.F,{bold:!0,fontSize:"14px",children:i})]})]})})},ve=Object(k.e)(y.h)(d||(d=Object(g.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ge=function(){var e=Object(S.a)(),t=Object(G.g)();return Object(Q.jsx)(ve,{children:Object(Q.jsxs)(y.i,{children:[Object(Q.jsx)(y.o,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(V,{value:t.toNumber(),prefix:"$",decimals:2}),Object(Q.jsx)(y.F,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},we=n(780),ke=Object(k.e)(y.h)(O||(O=Object(g.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ye=(k.e.div(x||(x=Object(g.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(S.a)();return Object(Q.jsx)(ke,{children:Object(Q.jsxs)(y.i,{children:[Object(Q.jsx)(y.o,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(Q.jsx)(we.a,{dataSource:{sourceType:"profile",screenName:"pantherswap"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),Se=k.e.div(h||(h=Object(g.a)(["\n  align-items: center;\n  background-image: url('/images/home/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/home/3.png'), url('/images/home/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ce=Object(k.e)(y.b)(m||(m=Object(g.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6 / auto;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Ee=Object(k.e)(y.b)(v||(v=Object(g.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n\n  & > div {\n    grid-column: span 12;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ze=function(){var e=Object(S.a)();return Object(Q.jsxs)(C.a,{children:[Object(Q.jsxs)(Se,{children:[Object(Q.jsx)(y.o,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"Pitbull Swap")}),Object(Q.jsx)(y.F,{children:e(578,"The First Automatic Liquidity Acquisition Yield Farm & AMM on Binance Smart Chain.")})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsxs)(Ce,{children:[Object(Q.jsx)(re,{}),Object(Q.jsx)(de,{})]}),Object(Q.jsxs)(Ce,{children:[Object(Q.jsx)(ye,{}),Object(Q.jsxs)(Ee,{children:[Object(Q.jsx)(me,{}),Object(Q.jsx)(ge,{})]})]})]})]})}}}]);
//# sourceMappingURL=9.9573b782.chunk.js.map