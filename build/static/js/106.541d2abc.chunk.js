(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[106],{2781:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),c=n(31),s=n(32),i=n(383),r=n(297),o=n(228),l=n(609),b=n(36),j=n(0);function u(e){var t=e.links,n=e.action,u=e.heading,d=e.moreLink,O=void 0===d?[]:d,x=e.sx,h=Object(c.a)(e,["links","action","heading","moreLink","sx"]);return Object(j.jsxs)(i.a,{sx:x,mb:5,spacing:2,children:[Object(j.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(j.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(j.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:u}),Object(j.jsx)(b.c,Object(a.a)({links:t},h))]}),n&&Object(j.jsx)(r.a,{sx:{flexShrink:0},children:n})]}),Object(s.isString)(O)?Object(j.jsx)(l.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2789:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var a=n(3),c=n(228),s=n(2818),i=n(2827),r=n(297),o=n(0);function l(e){var t=e.title;return Object(o.jsx)(c.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function b(e){var t=e.title,n=e.sx,c=e.children;return Object(o.jsxs)(s.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(o.jsx)(i.a,{title:t}),Object(o.jsx)(r.a,{sx:Object(a.a)({p:3,minHeight:180},n),children:c})]})}},4291:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return me}));var a=n(17),c=n(1),s=n(7),i=n(297),r=n(2655),o=n(4341),l=n(3260),b=n(3261),j=n(3288),u=n(19),d=n(384),O=n(2781),x=n(2818),h=n(2734),p=[{type:"slide in",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"slide out",values:["slideOutUp","slideOutDown","slideOutLeft","slideOutRight"]},{type:"fade in",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"fade out",values:["fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight"]},{type:"zoom in",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"zoom out",values:["zoomOut","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight"]},{type:"bounce in",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"bounce out",values:["bounceOut","bounceOutUp","bounceOutDown","bounceOutLeft","bounceOutRight"]},{type:"flip in",values:["flipInX","flipInY"]},{type:"flip out",values:["flipOutX","flipOutY"]},{type:"scale in",values:["scaleInX","scaleInY"]},{type:"scale out",values:["scaleOutX","scaleOutY"]},{type:"rotate in",values:["rotateIn"]},{type:"rotate out",values:["rotateOut"]}],f=n(3),m=n(31),g=n(26),k=n(3236),I=n.n(k),v=n(383),y=n(2763),w=n(2744),C=n(36),R=n(0);function z(e){var t=e.isText,n=e.isMulti,a=e.onChangeText,c=e.onChangeMulti,s=e.onRefresh,i=Object(m.a)(e,["isText","isMulti","onChangeText","onChangeMulti","onRefresh"]);return Object(R.jsxs)(v.a,Object(f.a)(Object(f.a)({direction:"row",alignItems:"center",justifyContent:"space-between"},i),{},{children:[Object(R.jsx)(y.a,{control:Object(R.jsx)(w.a,{checked:t,onChange:a}),label:"Text Object"}),Object(R.jsxs)(v.a,{direction:"row",alignItems:"center",children:[!t&&Object(R.jsx)(y.a,{control:Object(R.jsx)(w.a,{checked:n,onChange:c}),label:"Multi Item"}),Object(R.jsx)(C.k,{onClick:s,children:Object(R.jsx)(g.Icon,{icon:I.a,width:20,height:20})})]})]}))}var L=n(2654),U=n(2714),D=n(228),V=n(2720),T=n(84);function S(e){var t=e.variantTypes,n=e.selectVariant,a=e.onChangeVariant,c=e.sx;return Object(R.jsx)(L.a,{variant:"outlined",sx:Object(f.a)({height:480},c),children:Object(R.jsx)(T.a,{children:Object(R.jsx)(U.a,{value:n,onChange:a,sx:{px:1,py:1},children:t.map((function(e){return Object(R.jsxs)(i.a,{sx:{my:1.5},children:[Object(R.jsx)(D.a,{variant:"overline",sx:{px:1,mb:1,display:"block"},children:e.type}),e.values.map((function(e){return Object(R.jsx)(y.a,{value:e,label:e,control:Object(R.jsx)(V.a,{sx:{display:"none"}}),sx:Object(f.a)(Object(f.a)({px:1,py:.5,mx:0,my:.25,width:"100%",borderRadius:.75,color:"text.secondary"},n===e&&{color:"warning.contrastText"}),n===e&&{bgcolor:"warning.main"})},e)}))]},e.type)}))})})})}var M=n(2716),X=n(161),Y=n(12),B=n.n(Y);function G(e){var t;switch(e){case"slideInUp":t=X.Z;break;case"slideInDown":t=X.W;break;case"slideInLeft":t=X.X;break;case"slideInRight":t=X.Y;break;case"slideOutUp":t=X.db;break;case"slideOutDown":t=X.ab;break;case"slideOutLeft":t=X.bb;break;case"slideOutRight":t=X.cb;break;case"fadeIn":t=X.t;break;case"fadeInUp":t=X.x;break;case"fadeInDown":t=X.u;break;case"fadeInLeft":t=X.v;break;case"fadeInRight":t=X.w;break;case"fadeOut":t=X.y;break;case"fadeOutUp":t=X.C;break;case"fadeOutDown":t=X.z;break;case"fadeOutLeft":t=X.A;break;case"fadeOutRight":t=X.B;break;case"zoomIn":t=X.fb;break;case"zoomInUp":t=X.jb;break;case"zoomInDown":t=X.gb;break;case"zoomInLeft":t=X.hb;break;case"zoomInRight":t=X.ib;break;case"zoomOut":t=X.kb;break;case"zoomOutLeft":t=X.mb;break;case"zoomOutRight":t=X.nb;break;case"zoomOutUp":t=X.ob;break;case"zoomOutDown":t=X.lb;break;case"bounceIn":t=X.f;break;case"bounceInUp":t=X.j;break;case"bounceInDown":t=X.g;break;case"bounceInLeft":t=X.h;break;case"bounceInRight":t=X.i;break;case"bounceOut":t=X.k;break;case"bounceOutUp":t=X.o;break;case"bounceOutDown":t=X.l;break;case"bounceOutLeft":t=X.m;break;case"bounceOutRight":t=X.n;break;case"flipInX":t=X.D;break;case"flipInY":t=X.E;break;case"flipOutX":t=X.F;break;case"flipOutY":t=X.G;break;case"scaleInX":t=X.S;break;case"scaleInY":t=X.T;break;case"scaleOutX":t=X.U;break;case"scaleOutY":t=X.V;break;case"rotateIn":t=X.Q;break;case"rotateOut":t=X.R;break;case"kenburnsTop":t=X.K;break;case"kenburnsBottom":t=X.H;break;case"kenburnsLeft":t=X.I;break;case"kenburnsRight":t=X.J;break;case"panTop":t=X.O;break;case"panBottom":t=X.L;break;case"panLeft":t=X.M;break;case"panRight":t=X.N;break;case"color2x":t=X.p;break;case"color3x":t=X.q;break;case"color4x":t=X.r;break;case"color5x":t=X.s;break;default:t=e}return t}G.propTypes={variant:B.a.string};var _=["/static/mock-images/feeds/feed_2.jpg","/static/mock-images/feeds/feed_3.jpg","/static/mock-images/feeds/feed_4.jpg","/static/mock-images/feeds/feed_5.jpg","/static/mock-images/feeds/feed_8.jpg"];function W(e){var t=e.isText,n=e.isMulti,a=e.selectVariant,c=Object(m.a)(e,["isText","isMulti","selectVariant"]),s=n?_:_.slice(0,1);return Object(R.jsx)(L.a,Object(f.a)(Object(f.a)({sx:{p:3,minHeight:480,display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"}},c),{},{children:t?Object(R.jsx)(X.c,{open:!0,initial:"initial",children:Object(R.jsx)(X.e,{text:"Minimals",variants:G(a)})}):Object(R.jsx)(X.c,{open:!0,initial:"initial",children:s.map((function(e,t){return Object(R.jsx)(i.a,{component:M.a.img,src:e,variants:G(a),sx:{my:2,width:480,borderRadius:1,objectFit:"cover",height:n?72:320,boxShadow:function(e){return e.customShadows.z8}}},t)}))})}))}function A(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),r=Object(a.a)(i,2),o=r[0],l=r[1],b=Object(c.useState)(!1),j=Object(a.a)(b,2),u=j[0],d=j[1],O=Object(c.useState)("slideInUp"),f=Object(a.a)(O,2),m=f[0],g=f[1];return Object(R.jsxs)(x.a,{sx:{p:3},children:[Object(R.jsx)(h.a,{container:!0,sx:{mb:3},children:Object(R.jsx)(h.a,{item:!0,xs:9,children:Object(R.jsx)(z,{isText:u,isMulti:o,onChangeText:function(e){return d(e.target.checked)},onChangeMulti:function(e){return l(e.target.checked)},onRefresh:function(){return s(n+1)}})})}),Object(R.jsxs)(h.a,{container:!0,spacing:3,children:[Object(R.jsx)(h.a,{item:!0,xs:9,children:Object(R.jsx)(W,{isText:u,isMulti:o,selectVariant:m},n)}),Object(R.jsx)(h.a,{item:!0,xs:3,children:Object(R.jsx)(S,{variantTypes:p,selectVariant:m,onChangeVariant:function(e){s(n+1),g(e.target.value)}})})]})]})}var F=n(55);function P(){var e=Object(F.a)(),t=e.palette.primary.light,n=e.palette.primary.main,a=e.palette.primary.dark;return Object(R.jsxs)(i.a,{component:M.a.svg,viewBox:"0 0 512 512",sx:{width:240,height:240,strokeWidth:4,stroke:n},children:[Object(R.jsxs)("defs",{children:[Object(R.jsxs)("linearGradient",{x1:"100%",y1:"9.946%",x2:"50%",y2:"50%",id:"a",children:[Object(R.jsx)("stop",{stopColor:a,offset:"0%"}),Object(R.jsx)("stop",{stopColor:n,offset:"100%"})]}),Object(R.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"b",children:[Object(R.jsx)("stop",{stopColor:t,offset:"0%"}),Object(R.jsx)("stop",{stopColor:n,offset:"100%"})]}),Object(R.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"c",children:[Object(R.jsx)("stop",{stopColor:t,offset:"0%"}),Object(R.jsx)("stop",{stopColor:n,offset:"100%"})]})]}),Object(R.jsxs)("g",{fill:"none",fillRule:"nonzero",children:[Object(R.jsx)(M.a.path,Object(f.a)(Object(f.a)({},X.P),{},{d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z",fill:"url(#a)"})),Object(R.jsx)(M.a.path,Object(f.a)(Object(f.a)({},X.P),{},{d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994",fill:"url(#b)"})),Object(R.jsx)(M.a.path,Object(f.a)(Object(f.a)({},X.P),{},{d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48",fill:"url(#c)"}))]})]})}var H=n(2912),J=n.n(H),q=n(229),E=n(2747),K=n(2743);function N(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(X.a,{children:Object(R.jsx)(q.a,{variant:"contained",children:"Button"})}),Object(R.jsx)(X.a,{children:Object(R.jsx)(E.a,{size:"small",children:Object(R.jsx)(g.Icon,{icon:J.a,width:20,height:20})})}),Object(R.jsx)(X.a,{children:Object(R.jsx)(K.a,{color:"primary",children:Object(R.jsx)(g.Icon,{icon:J.a,width:20,height:20})})})]})}function Q(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(X.a,{mediumClick:!0,children:Object(R.jsx)(q.a,{variant:"contained",size:"large",children:"Button"})}),Object(R.jsx)(X.a,{mediumClick:!0,children:Object(R.jsx)(E.a,{children:Object(R.jsx)(g.Icon,{icon:J.a,width:20,height:20})})}),Object(R.jsx)(X.a,{mediumClick:!0,children:Object(R.jsx)(K.a,{color:"primary",children:Object(R.jsx)(g.Icon,{icon:J.a,width:24,height:24})})})]})}var Z=n(2789),$={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function ee(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(R.jsxs)(h.a,{container:!0,spacing:3,children:[Object(R.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(R.jsx)(Z.a,{title:"Small Click",sx:$,children:Object(R.jsx)(N,{})})}),Object(R.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(R.jsx)(Z.a,{title:"Medium Click",sx:$,children:Object(R.jsx)(Q,{})})}),Object(R.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(R.jsxs)(Z.a,{title:"Path",sx:$,children:[Object(R.jsx)(i.a,{sx:{position:"absolute",right:0,top:32},children:Object(R.jsx)(C.k,{onClick:function(){return s(n+1)},children:Object(R.jsx)(g.Icon,{icon:I.a,width:20,height:20})})}),Object(R.jsx)(P,{},n)]})})]})}function te(e){var t=e.onRefresh,n=e.sx,a=Object(m.a)(e,["onRefresh","sx"]);return Object(R.jsx)(L.a,Object(f.a)(Object(f.a)({sx:Object(f.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"},n)},a),{},{children:Object(R.jsx)(C.k,{onClick:t,children:Object(R.jsx)(g.Icon,{icon:I.a,width:20,height:20})})}))}var ne=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}],ae=n(20);function ce(e){var t=e.selectVariant,n=e.sx,a=Object(m.a)(e,["selectVariant","sx"]);return Object(R.jsx)(L.a,Object(f.a)(Object(f.a)({sx:Object(f.a)({height:480,overflow:"hidden",bgcolor:"background.neutral"},n)},a),{},{children:Object(R.jsx)(T.a,{children:Object(ae.a)(Array(40)).map((function(e,n){return Object(R.jsx)(X.d,{variants:G(t),children:Object(R.jsx)(i.a,{sx:{my:2,mx:"auto",height:72,maxWidth:480,display:"flex",borderRadius:1,alignItems:"center",justifyContent:"center",bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z8}},children:Object(R.jsxs)(D.a,{variant:"body2",children:["Item ",n+1]})})},n)}))})}))}function se(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)("slideInUp"),r=Object(a.a)(i,2),o=r[0],l=r[1];return Object(R.jsxs)(x.a,{sx:{p:3},children:[Object(R.jsx)(h.a,{container:!0,sx:{mb:3},children:Object(R.jsx)(h.a,{item:!0,xs:9,children:Object(R.jsx)(te,{onRefresh:function(){return s(n+1)}})})}),Object(R.jsxs)(h.a,{container:!0,spacing:3,children:[Object(R.jsx)(h.a,{item:!0,xs:9,children:Object(R.jsx)(ce,{selectVariant:o},n)}),Object(R.jsx)(h.a,{item:!0,xs:3,children:Object(R.jsx)(S,{variantTypes:ne,selectVariant:o,onChangeVariant:function(e){s(n+1),l(e.target.value)}})})]})]})}var ie=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}],re=n(3324),oe=n(3325),le=n(4200),be=n(3205);function je(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,c=e.selectVariant,s=Object(m.a)(e,["isOpen","onOpen","onClose","selectVariant"]);return Object(R.jsxs)(L.a,Object(f.a)(Object(f.a)({sx:{height:480,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"}},s),{},{children:[Object(R.jsx)(q.a,{variant:"contained",onClick:n,children:"Click Me!"}),Object(R.jsxs)(X.b,{open:t,onClose:a,animate:G(c),children:[Object(R.jsx)(re.a,{id:"alert-dialog-title",children:"Use Google's location service?"}),Object(R.jsx)(oe.a,{children:Object(R.jsx)(le.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(R.jsxs)(be.a,{children:[Object(R.jsx)(q.a,{variant:"contained",onClick:a,children:"Disagree"}),Object(R.jsx)(q.a,{onClick:a,autoFocus:!0,children:"Agree"})]})]})]}))}function ue(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)("slideInUp"),r=Object(a.a)(i,2),o=r[0],l=r[1];return Object(R.jsx)(x.a,{sx:{p:3},children:Object(R.jsxs)(h.a,{container:!0,spacing:3,children:[Object(R.jsx)(h.a,{item:!0,xs:9,children:Object(R.jsx)(je,{isOpen:n,onOpen:function(){return s(!0)},onClose:function(){return s(!1)},selectVariant:o})}),Object(R.jsx)(h.a,{item:!0,xs:3,children:Object(R.jsx)(S,{variantTypes:ie,selectVariant:o,onChangeVariant:function(e){l(e.target.value)}})})]})})}var de=[{type:"kenburns",values:["kenburnsTop","kenburnsBottom","kenburnsLeft","kenburnsRight"]},{type:"pan",values:["panTop","panBottom","panLeft","panRight"]},{type:"color change",values:["color2x","color3x","color4x","color5x"]}];function Oe(e){var t=e.onRefresh,n=Object(m.a)(e,["onRefresh"]);return Object(R.jsx)(L.a,Object(f.a)(Object(f.a)({sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},n),{},{children:Object(R.jsx)(C.k,{onClick:t,children:Object(R.jsx)(g.Icon,{icon:I.a,width:20,height:20})})}))}function xe(e){var t=e.selectVariant,n=Object(m.a)(e,["selectVariant"]),a=t.includes("kenburns");return Object(R.jsx)(L.a,Object(f.a)(Object(f.a)({sx:{height:480,width:"100%",overflow:"hidden",boxShadow:function(e){return e.customShadows.z8}}},n),{},{children:a?Object(R.jsx)(i.a,Object(f.a)(Object(f.a)({component:M.a.img,src:"/static/mock-images/feeds/feed_8.jpg"},G(t)),{},{sx:{width:"100%",height:"100%",objectFit:"cover"}})):Object(R.jsx)(i.a,Object(f.a)(Object(f.a)({component:M.a.div},G(t)),{},{sx:{height:"100%",width:"100%"}}))}))}function he(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)("kenburnsTop"),r=Object(a.a)(i,2),o=r[0],l=r[1];return Object(R.jsxs)(x.a,{sx:{p:3},children:[Object(R.jsx)(h.a,{container:!0,sx:{mb:3},children:Object(R.jsx)(h.a,{item:!0,xs:9,children:Object(R.jsx)(Oe,{onRefresh:function(){return s(n+1)}})})}),Object(R.jsxs)(h.a,{container:!0,spacing:3,children:[Object(R.jsx)(h.a,{item:!0,xs:9,children:Object(R.jsx)(xe,{selectVariant:o},n)}),Object(R.jsx)(h.a,{item:!0,xs:3,children:Object(R.jsx)(S,{variantTypes:de,selectVariant:o,onChangeVariant:function(e){s(n+1),l(e.target.value)}})})]})]})}var pe=[{label:"In View",component:Object(R.jsx)(A,{})},{label:"Scroll",component:Object(R.jsx)(se,{})},{label:"Dialog",component:Object(R.jsx)(ue,{})},{label:"Background",component:Object(R.jsx)(he,{})},{label:"Other",component:Object(R.jsx)(ee,{})}],fe=Object(s.a)(d.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function me(){var e=Object(c.useState)("In View"),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(R.jsxs)(fe,{title:"Components: Animate | Minimal-UI",children:[Object(R.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(R.jsx)(r.a,{maxWidth:"lg",children:Object(R.jsx)(O.a,{heading:"Animate",links:[{name:"Components",href:u.d.components},{name:"Animate"}],moreLink:"https://www.framer.com/api/motion"})})}),Object(R.jsx)(r.a,{maxWidth:"lg",children:Object(R.jsxs)(l.a,{value:n,children:[Object(R.jsx)(i.a,{sx:{mb:5},children:Object(R.jsx)(b.a,{onChange:function(e,t){s(t)},children:pe.map((function(e){return Object(R.jsx)(o.a,{label:e.label,value:e.label,disableRipple:!0},e.label)}))})}),pe.map((function(e){return Object(R.jsx)(j.a,{value:e.label,children:e.component},e.label)}))]})})]})}}}]);
//# sourceMappingURL=106.541d2abc.chunk.js.map