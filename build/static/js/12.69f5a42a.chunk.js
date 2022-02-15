(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[12],{679:function(e,n,t){"use strict";var c,r=t(52),a=(t(0),t(3)),o=t(40),s=t(10),i=a.e.div(c||(c=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),b=function(e){var n=e.onClick,t=e.expanded;return Object(s.jsxs)(i,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(s.jsx)(o.F,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(s.jsx)(o.l,{}):Object(s.jsx)(o.k,{})]})};b.defaultProps={expanded:!1},n.a=b},680:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return x}));var c=t(53),r=t(4),a=t.n(r),o=t(16),s=t(0),i=t(67),b=t(56),l=t(130),j=t(668),d=t(666),u=function(e){var n=Object(b.b)(),t=Object(i.m)().account,c=Object(d.d)();return{onReward:Object(s.useCallback)(Object(o.a)(a.a.mark((function r(){var o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(j.b)(c,e,t);case 2:return o=r.sent,n(Object(l.a)(t)),r.abrupt("return",o);case 5:case"end":return r.stop()}}),r)}))),[t,n,e,c])}},x=function(e){var n=Object(i.m)().account,t=Object(d.d)();return{onReward:Object(s.useCallback)(Object(o.a)(a.a.mark((function r(){var o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.reduce((function(e,r){return[].concat(Object(c.a)(e),[Object(j.b)(t,r,n)])}),[]),r.abrupt("return",Promise.all(o));case 2:case"end":return r.stop()}}),r)}))),[n,e,t])}}},684:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var c=t(4),r=t.n(c),a=t(16),o=t(0),s=t(67),i=(t(677),t(56)),b=t(130),l=t(668),j=t(666),d=function(e){var n=Object(i.b)(),t=Object(s.m)().account,c=Object(j.d)();return{onApprove:Object(o.useCallback)(Object(a.a)(r.a.mark((function a(){var o;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(l.a)(e,c,t);case 3:return o=r.sent,n(Object(b.a)(t)),r.abrupt("return",o);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",!1);case 11:case"end":return r.stop()}}),a,null,[[0,8]])}))),[t,n,e,c])}},u=function(){var e=Object(s.m)().account,n=Object(j.a)(),t=Object(j.b)();return{onApprove:Object(o.useCallback)(Object(a.a)(r.a.mark((function c(){var a;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(l.a)(n,t,e);case 3:return a=c.sent,c.abrupt("return",a);case 7:return c.prev=7,c.t0=c.catch(0),c.abrupt("return",!1);case 10:case"end":return c.stop()}}),c,null,[[0,7]])}))),[e,n,t])}}},784:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return _e}));var c=t(17),r=t(21),a=t(52),o=t(0),s=t(30),i=t(56),b=t(14),l=t.n(b),j=t(67),d=t(40),u=t(683);u.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new u.a(1);var x,O,p,m,f,h,k,g,v,y,w,S,C,T,F,A,P,I,q,B,D,N,L,z,E,M=new u.a(10512e3),R=t(3),Q=R.e.div(x||(x=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),H=t(171),W=t(110),G=t(129),J=t(130),U=t(23),V=t(170),X=t(679),$=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===t?"ETH":n[56],a=c[56];return"".concat(r,"/").concat(a)},_=t(10),K=R.e.div(O||(O=Object(a.a)(["\n  margin-top: 24px;\n"]))),Y=Object(R.e)(d.t)(p||(p=Object(a.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),Z=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=e.removed,r=e.totalValueFormated,a=e.lpLabel,o=e.quoteTokenAdresses,s=e.quoteTokenSymbol,i=e.tokenAddresses,b=Object(V.a)(),l=$({quoteTokenAdresses:o,quoteTokenSymbol:s,tokenAddresses:i});return Object(_.jsxs)(K,{children:[Object(_.jsxs)(d.n,{justifyContent:"space-between",children:[Object(_.jsxs)(d.F,{children:[b(316,"Stake"),":"]}),Object(_.jsx)(Y,{href:n?"https://exchange.goosedefi.com/#/swap/".concat(i[56]):"https://exchange.goosedefi.com/#/add/".concat(l),children:a})]}),!c&&Object(_.jsxs)(d.n,{justifyContent:"space-between",children:[Object(_.jsxs)(d.F,{children:[b(23,"Total Liquidity"),":"]}),Object(_.jsx)(d.F,{children:r})]}),Object(_.jsx)(d.n,{justifyContent:"flex-start",children:Object(_.jsx)(d.s,{external:!0,href:t,bold:!1,children:b(356,"View on BscScan")})})]})},ee=function(){return Object(_.jsx)(d.E,{variant:"success",outline:!0,startIcon:Object(_.jsx)(d.J,{}),children:"No Fees"})},ne=Object(R.e)(d.n)(m||(m=Object(a.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),te=Object(R.e)(d.E)(f||(f=Object(a.a)(["\n  margin-left: 4px;\n"]))),ce=function(e){var n=e.lpLabel,t=e.multiplier,c=(e.risk,e.farmImage),r=e.tokenSymbol,a=e.depositFee;return Object(_.jsxs)(ne,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(_.jsx)(d.q,{src:"/images/farms/".concat(c,".png"),alt:r,width:64,height:64}),Object(_.jsxs)(d.n,{flexDirection:"column",alignItems:"flex-end",children:[Object(_.jsx)(d.o,{mb:"4px",children:n}),Object(_.jsxs)(d.n,{justifyContent:"center",children:[0===a?Object(_.jsx)(ee,{}):null,Object(_.jsx)(te,{variant:"secondary",children:t})]})]})]})},re=t(4),ae=t.n(re),oe=t(16),se=t(678),ie=t(669),be=t(684),le=t(668),je=t(666),de=function(e){var n=Object(i.b)(),t=Object(j.m)().account,c=Object(je.d)();return{onStake:Object(o.useCallback)(function(){var r=Object(oe.a)(ae.a.mark((function r(a){var o;return ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(le.i)(c,e,a,t);case 2:o=r.sent,n(Object(J.a)(t)),console.info(o);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[t,n,c,e])}},ue=function(e){var n=Object(i.b)(),t=Object(j.m)().account,c=Object(je.d)();return{onUnstake:Object(o.useCallback)(function(){var r=Object(oe.a)(ae.a.mark((function r(a){var o;return ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(le.j)(c,e,a,t);case 2:o=r.sent,n(Object(J.a)(t)),console.info(o);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[t,n,c,e])}},xe=t(664),Oe=t(675),pe=t(690),me=R.e.div(h||(h=Object(a.a)([""]))),fe=R.e.div(k||(k=Object(a.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),he=R.e.div(g||(g=Object(a.a)(["\n  align-items: center;\n  display: flex;\n"]))),ke=R.e.div(v||(v=Object(a.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),ge=R.e.span(y||(y=Object(a.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),ve=function(e){var n=e.max,t=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,o=e.depositFeeBP,s=void 0===o?0:o,i=Object(V.a)();return Object(_.jsxs)(me,{children:[Object(_.jsxs)(ke,{children:[n.toLocaleString()," ",t," ",i(526,"Available")]}),Object(_.jsx)(pe.a,{endAdornment:Object(_.jsxs)(he,{children:[Object(_.jsx)(ge,{children:t}),Object(_.jsx)(fe,{}),Object(_.jsx)("div",{children:Object(_.jsx)(d.d,{size:"sm",onClick:r,children:i(452,"Max")})})]}),onChange:c,placeholder:"0",value:a}),s>0?Object(_.jsxs)(ke,{children:[i(10001,"Deposit Fee"),": ",new u.a(a||0).times(s/1e4).toString()," ",t]}):null]})},ye=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,a=e.tokenName,s=void 0===a?"":a,i=e.depositFeeBP,b=void 0===i?0:i,l=Object(o.useState)(""),j=Object(r.a)(l,2),u=j[0],x=j[1],O=Object(o.useState)(!1),p=Object(r.a)(O,2),m=p[0],f=p[1],h=Object(V.a)(),k=Object(o.useMemo)((function(){return Object(xe.b)(n)}),[n]),g=Object(o.useCallback)((function(e){x(e.currentTarget.value)}),[x]),v=Object(o.useCallback)((function(){x(k)}),[k,x]);return Object(_.jsxs)(d.x,{title:"".concat(h(316,"Deposit")," ").concat(s," Tokens"),onDismiss:c,children:[Object(_.jsx)(ve,{value:u,onSelectMax:v,onChange:g,max:k,symbol:s,depositFeeBP:b}),Object(_.jsxs)(Oe.a,{children:[Object(_.jsx)(d.d,{variant:"secondary",onClick:c,children:h(462,"Cancel")}),Object(_.jsx)(d.d,{disabled:m,onClick:Object(oe.a)(ae.a.mark((function e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,t(u);case 3:f(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:m?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},we=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,a=e.tokenName,s=void 0===a?"":a,i=Object(o.useState)(""),b=Object(r.a)(i,2),l=b[0],j=b[1],u=Object(o.useState)(!1),x=Object(r.a)(u,2),O=x[0],p=x[1],m=Object(V.a)(),f=Object(o.useMemo)((function(){return Object(xe.b)(c)}),[c]),h=Object(o.useCallback)((function(e){j(e.currentTarget.value)}),[j]),k=Object(o.useCallback)((function(){j(f)}),[f,j]);return Object(_.jsxs)(d.x,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(_.jsx)(ve,{onSelectMax:k,onChange:h,value:l,max:f,symbol:s}),Object(_.jsxs)(Oe.a,{children:[Object(_.jsx)(d.d,{variant:"secondary",onClick:t,children:m(462,"Cancel")}),Object(_.jsx)(d.d,{disabled:O,onClick:Object(oe.a)(ae.a.mark((function e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,n(l);case 3:p(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:O?m(488,"Pending Confirmation"):m(464,"Confirm")})]})]})},Se=R.e.div(w||(w=Object(a.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),Ce=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,a=e.pid,o=e.depositFeeBP,s=Object(V.a)(),i=de(a).onStake,b=ue(a).onUnstake,l=Object(xe.a)(n),j=l.toLocaleString(),u=Object(d.N)(Object(_.jsx)(ye,{max:t,onConfirm:i,tokenName:c,depositFeeBP:o})),x=Object(r.a)(u,1)[0],O=Object(d.N)(Object(_.jsx)(we,{max:n,onConfirm:b,tokenName:c})),p=Object(r.a)(O,1)[0];return Object(_.jsxs)(d.n,{justifyContent:"space-between",alignItems:"center",children:[Object(_.jsx)(d.o,{color:0===l?"textDisabled":"text",children:j}),0===l?Object(_.jsx)(d.d,{onClick:x,children:s(999,"Stake")}):Object(_.jsxs)(Se,{children:[Object(_.jsx)(d.p,{variant:"tertiary",onClick:p,mr:"6px",children:Object(_.jsx)(d.w,{color:"primary"})}),Object(_.jsx)(d.p,{variant:"tertiary",onClick:x,children:Object(_.jsx)(d.a,{color:"primary"})})]})]})},Te=t(680),Fe=R.e.div(S||(S=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),Ae=function(e){var n=e.earnings,t=e.pid,c=Object(V.a)(),a=Object(o.useState)(!1),s=Object(r.a)(a,2),i=s[0],b=s[1],l=Object(Te.b)(t).onReward,j=de(t).onStake,u=Object(xe.a)(n),x=u.toLocaleString();return Object(_.jsxs)(d.n,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(_.jsx)(d.o,{color:0===u?"textDisabled":"text",children:x}),Object(_.jsxs)(Fe,{children:[12===t?Object(_.jsx)(d.d,{disabled:0===u||i,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(oe.a)(ae.a.mark((function e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,j(u.toString());case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(_.jsx)(d.d,{disabled:0===u||i,onClick:Object(oe.a)(ae.a.mark((function e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,l();case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})},Pe=R.e.div(C||(C=Object(a.a)(["\n  padding-top: 16px;\n"]))),Ie=function(e){var n=e.farm,t=e.ethereum,c=e.account,a=Object(V.a)(),s=Object(o.useState)(!1),i=Object(r.a)(s,2),b=i[0],l=i[1],j=Object(W.a)(n.pid),u=j.pid,x=j.lpAddresses,O=j.tokenAddresses,p=j.isTokenOnly,m=j.depositFeeBP,f=Object(W.b)(u),h=f.allowance,k=f.tokenBalance,g=f.stakedBalance,v=f.earnings,y=x[56],w=O[56],S=n.lpSymbol.toUpperCase(),C=c&&h&&h.isGreaterThan(0),T=Object(o.useMemo)((function(){return p?Object(se.b)(t,w):Object(se.b)(t,y)}),[t,y,w,p]),F=Object(be.a)(T).onApprove,A=Object(o.useCallback)(Object(oe.a)(ae.a.mark((function e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,F();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[F]);return Object(_.jsxs)(Pe,{children:[Object(_.jsxs)(d.n,{children:[Object(_.jsx)(d.F,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"ANO"}),Object(_.jsx)(d.F,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Earned")})]}),Object(_.jsx)(Ae,{earnings:v,pid:u}),Object(_.jsxs)(d.n,{children:[Object(_.jsx)(d.F,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:S}),Object(_.jsx)(d.F,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Staked")})]}),c?C?Object(_.jsx)(Ce,{stakedBalance:g,tokenBalance:k,tokenName:S,pid:u,depositFeeBP:m}):Object(_.jsx)(d.d,{mt:"8px",fullWidth:!0,disabled:b,onClick:A,children:a(999,"Approve Contract")}):Object(_.jsx)(ie.a,{mt:"8px",fullWidth:!0})]})},qe=function(e){var n,t=e.numberOfDays,c=e.farmApy/100,r=t/365,a=1e3/e.cakePrice,o=a*Math.pow(1+c/365,365*r);return n=o-a,Math.round(100*n)/100},Be=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},De=R.e.div(T||(T=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),Ne=R.e.div(F||(F=Object(a.a)(["\n  margin-bottom: '10px';\n"]))),Le=Object(R.e)(d.F)(A||(A=Object(a.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),ze=function(e){var n=e.onDismiss,t=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.cakePrice,s=e.apy,i=Object(V.a)(),b=$({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),j=s.times(new l.a(100)).toNumber(),u=1e3/o.toNumber(),x=qe({numberOfDays:1,farmApy:j,cakePrice:o}),O=qe({numberOfDays:7,farmApy:j,cakePrice:o}),p=qe({numberOfDays:30,farmApy:j,cakePrice:o}),m=qe({numberOfDays:365,farmApy:j,cakePrice:o});return Object(_.jsxs)(d.x,{title:"ROI",onDismiss:n,children:[Object(_.jsxs)(De,{children:[Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"PITper $1000")})}),Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{children:"1d"})}),Object(_.jsx)(Ne,{children:Object(_.jsxs)(d.F,{children:[Be({amountEarned:x,amountInvested:u}),"%"]})}),Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{children:x})}),Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{children:"7d"})}),Object(_.jsx)(Ne,{children:Object(_.jsxs)(d.F,{children:[Be({amountEarned:O,amountInvested:u}),"%"]})}),Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{children:O})}),Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{children:"30d"})}),Object(_.jsx)(Ne,{children:Object(_.jsxs)(d.F,{children:[Be({amountEarned:p,amountInvested:u}),"%"]})}),Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{children:p})}),Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{children:"365d(APY)"})}),Object(_.jsx)(Ne,{children:Object(_.jsxs)(d.F,{children:[Be({amountEarned:m,amountInvested:u}),"%"]})}),Object(_.jsx)(Ne,{children:Object(_.jsx)(d.F,{children:m})})]}),Object(_.jsx)(Le,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(_.jsx)(d.n,{justifyContent:"center",children:Object(_.jsxs)(d.t,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:[i(999,"Get")," ",t]})})]})},Ee=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,c=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.cakePrice,s=e.apy,i=Object(d.N)(Object(_.jsx)(ze,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:c,tokenAddresses:a,cakePrice:o,apy:s})),b=Object(r.a)(i,1)[0];return Object(_.jsx)(d.p,{onClick:b,variant:"text",size:"sm",ml:"4px",children:Object(_.jsx)(d.g,{})})},Me=Object(R.f)(P||(P=Object(a.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),Re=R.e.div(I||(I=Object(a.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),Me),Qe=R.e.div(q||(q=Object(a.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),He=R.e.div(B||(B=Object(a.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),We=R.e.div(D||(D=Object(a.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Ge=function(e){var n=e.farm,t=e.removed,c=e.cakePrice,a=e.bnbPrice,s=e.ethereum,i=e.account,b=Object(V.a)(),j=Object(o.useState)(!1),u=Object(r.a)(j,2),x=u[0],O=u[1],p=n.isTokenOnly?n.tokenSymbol.toLowerCase():"".concat(n.tokenSymbol.toLowerCase(),"-").concat(n.quoteTokenSymbol.toLowerCase()),m=Object(o.useMemo)((function(){return n.lpTotalInQuoteToken?n.quoteTokenSymbol===U.b.BNB?a.times(n.lpTotalInQuoteToken):n.quoteTokenSymbol===U.b.CAKE?c.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[a,c,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),f=m?"$".concat(Number(m).toLocaleString(void 0,{maximumFractionDigits:0})):"-",h=n.lpSymbol,k=n.apy&&n.apy.times(new l.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),g=n.quoteTokenAdresses,v=n.quoteTokenSymbol,y=n.tokenAddresses,w=n.risk;return Object(_.jsxs)(Qe,{children:["ANO"===n.tokenSymbol&&Object(_.jsx)(Re,{}),Object(_.jsx)(ce,{lpLabel:h,multiplier:n.multiplier,risk:w,depositFee:n.depositFeeBP,farmImage:p,tokenSymbol:n.tokenSymbol}),!t&&Object(_.jsxs)(d.n,{justifyContent:"space-between",alignItems:"center",children:[Object(_.jsxs)(d.F,{children:[b(352,"APR"),":"]}),Object(_.jsx)(d.F,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Ee,{lpLabel:h,quoteTokenAdresses:g,quoteTokenSymbol:v,tokenAddresses:y,cakePrice:c,apy:n.apy}),k,"%"]}):Object(_.jsx)(d.C,{height:24,width:80})})]}),Object(_.jsxs)(d.n,{justifyContent:"space-between",children:[Object(_.jsxs)(d.F,{children:[b(318,"Earn"),":"]}),Object(_.jsx)(d.F,{bold:!0,children:"ANO"})]}),Object(_.jsxs)(d.n,{justifyContent:"space-between",children:[Object(_.jsxs)(d.F,{style:{fontSize:"24px"},children:[b(10001,"Deposit Fee"),":"]}),Object(_.jsxs)(d.F,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(_.jsx)(Ie,{farm:n,ethereum:s,account:i}),Object(_.jsx)(He,{}),Object(_.jsx)(X.a,{onClick:function(){return O(!x)},expanded:x}),Object(_.jsx)(We,{expanded:x,children:Object(_.jsx)(Z,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:f,lpLabel:h,quoteTokenAdresses:g,quoteTokenSymbol:v,tokenAddresses:y})})]})},Je=t(75),Ue=function(e){var n=e.stakedOnly,t=e.setStakedOnly,c=Object(s.g)(),r=c.url,a=c.isExact,o=Object(V.a)();return Object(_.jsxs)(Ve,{children:[Object(_.jsxs)(Xe,{children:[Object(_.jsx)(d.I,{checked:n,onChange:function(){return t(!n)}}),Object(_.jsxs)(d.F,{children:[" ",o(699,"Staked only")]})]}),Object(_.jsxs)(d.e,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(_.jsx)(d.f,{as:Je.b,to:"".concat(r),children:o(698,"Active")}),Object(_.jsx)(d.f,{as:Je.b,to:"".concat(r,"/history"),children:o(700,"Inactive")})]})]})},Ve=R.e.div(N||(N=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Xe=R.e.div(L||(L=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),d.F),$e=R.e.div(z||(z=Object(a.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),_e=function(e){var n=Object(s.g)().path,t=Object(V.a)(),b=Object(W.c)(),u=Object(W.f)(),x=Object(W.e)(),O=Object(j.m)(),p=O.account,m=O.ethereum,f=e.tokenMode,h=Object(i.b)(),k=Object(G.a)().fastRefresh,g=R.e.div(E||(E=Object(a.a)(["\n  align-items: center;\n  background-image: url('/images/home/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/home/3.png'), url('/images/home/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));Object(o.useEffect)((function(){p&&h(Object(J.a)(p))}),[p,h,k]);var v=Object(o.useState)(!1),y=Object(r.a)(v,2),w=y[0],S=y[1],C=b.filter((function(e){return!!e.isTokenOnly===!!f&&"0X"!==e.multiplier})),T=b.filter((function(e){return!!e.isTokenOnly===!!f&&"0X"===e.multiplier})),F=C.filter((function(e){return e.userData&&new l.a(e.userData.stakedBalance).isGreaterThan(0)})),A=Object(o.useCallback)((function(e,n){return e.map((function(e){var n=new l.a(e.eggPerBlock||1).times(new l.a(e.poolWeight)).div(new l.a(10).pow(18)).times(M),t=u.times(n),r=new l.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===U.b.BNB&&(r=r.times(x)),r.comparedTo(0)>0&&(t=t.div(r)),Object(c.a)(Object(c.a)({},e),{},{apy:t})})).map((function(e){return Object(_.jsx)(Ge,{farm:e,removed:n,bnbPrice:x,cakePrice:u,ethereum:m,account:p},e.pid)}))}),[x,p,u,m]);return Object(_.jsxs)(H.a,{children:[Object(_.jsxs)(g,{children:[Object(_.jsx)(d.o,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:f?t(10002,"Stake tokens to earn ANO"):t(320,"Stake LP tokens to earn ANO")}),Object(_.jsx)(d.o,{as:"h2",color:"secondary",mb:"50px",style:{textAlign:"center"},children:t(1e4,"Deposit Fee will be used to buyback ANO")}),Object(_.jsx)(Ue,{stakedOnly:w,setStakedOnly:S})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)($e,{}),Object(_.jsxs)(Q,{children:[Object(_.jsx)(s.a,{exact:!0,path:"".concat(n),children:A(w?F:C,!1)}),Object(_.jsx)(s.a,{exact:!0,path:"".concat(n,"/history"),children:A(T,!0)})]})]})]})}}}]);
//# sourceMappingURL=12.69f5a42a.chunk.js.map