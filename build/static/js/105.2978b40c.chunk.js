(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[105],{2781:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(3),r=n(31),a=n(32),i=n(383),s=n(297),o=n(228),l=n(609),j=n(36),d=n(0);function b(e){var t=e.links,n=e.action,b=e.heading,h=e.moreLink,u=void 0===h?[]:h,O=e.sx,x=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(d.jsxs)(i.a,{sx:O,mb:5,spacing:2,children:[Object(d.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(j.c,Object(c.a)({links:t},x))]}),n&&Object(d.jsx)(s.a,{sx:{flexShrink:0},children:n})]}),Object(a.isString)(u)?Object(d.jsx)(l.a,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return Object(d.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2968:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(3),r=n(31),a=n(2654),i=n(228),s=n(0);function o(e){var t=e.searchQuery,n=void 0===t?"":t,o=Object(r.a)(e,["searchQuery"]);return Object(s.jsxs)(a.a,Object(c.a)(Object(c.a)({},o),{},{children:[Object(s.jsx)(i.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(s.jsxs)(i.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(s.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]}))}},4313:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Oe}));var c=n(17),r=n(32),a=n(26),i=n(3249),s=n(1),o=n(2912),l=n.n(o),j=n(29),d=n(55),b=n(2655),h=n(229),u=n(2818),O=n(3282),x=n(3283),g=n(3286),f=n(3285),m=n(3437),p=n(2723),v=n(383),y=n(2732),k=n(228),w=n(4332),S=n(299),C=n(402),I=n(19),N=n(384),P=n(304),R=n(84),L=n(2968),U=n(2781),D=n(3),W=n(2976),B=n(3284),F=n(3604),z=n(297),A=n(0);function E(e){var t=e.order,n=e.orderBy,c=e.rowCount,r=e.headLabel,a=e.numSelected,i=e.onRequestSort,s=e.onSelectAllClick;return Object(A.jsx)(B.a,{children:Object(A.jsxs)(f.a,{children:[Object(A.jsx)(m.a,{padding:"checkbox",children:Object(A.jsx)(p.a,{indeterminate:a>0&&a<c,checked:c>0&&a===c,onChange:s})}),r.map((function(e){return Object(A.jsx)(m.a,{align:e.alignRight?"right":"left",sortDirection:n===e.id&&t,children:Object(A.jsxs)(F.a,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:(c=e.id,function(e){i(e,c)}),children:[e.label,n===e.id?Object(A.jsx)(z.a,{sx:Object(D.a)({},W.a),children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var c}))]})})}var M=n(307),Q=n.n(M),T=n(2978),V=n.n(T),q=n(3210),J=n.n(q),_=n(7),G=n(2751),Y=n(2735),H=n(2758),K=n(2761),X=n(2743),Z=Object(_.a)(G.a)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),$=Object(_.a)(Y.a)((function(e){var t=e.theme;return{width:240,transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function ee(e){var t=e.numSelected,n=e.filterName,c=e.onFilterName,r="light"===Object(d.a)().palette.mode;return Object(A.jsxs)(Z,{sx:Object(D.a)({},t>0&&{color:r?"primary.main":"text.primary",bgcolor:r?"primary.lighter":"primary.dark"}),children:[t>0?Object(A.jsxs)(k.a,{component:"div",variant:"subtitle1",children:[t," selected"]}):Object(A.jsx)($,{value:n,onChange:c,placeholder:"Search user...",startAdornment:Object(A.jsx)(H.a,{position:"start",children:Object(A.jsx)(z.a,{component:a.Icon,icon:Q.a,sx:{color:"text.disabled"}})})}),t>0?Object(A.jsx)(K.a,{title:"Delete",children:Object(A.jsx)(X.a,{children:Object(A.jsx)(a.Icon,{icon:V.a})})}):Object(A.jsx)(K.a,{title:"Filter list",children:Object(A.jsx)(X.a,{children:Object(A.jsx)(a.Icon,{icon:J.a})})})]})}var te=n(2697),ne=n(3064),ce=n.n(ne),re=n(3368),ae=n.n(re),ie=n(2940),se=n.n(ie),oe=n(603),le=n(2759),je=n(2739),de=n(2740);function be(e){var t=e.onDelete,n=e.userName,r=Object(s.useRef)(null),i=Object(s.useState)(!1),o=Object(c.a)(i,2),l=o[0],d=o[1];return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(X.a,{ref:r,onClick:function(){return d(!0)},children:Object(A.jsx)(a.Icon,{icon:se.a,width:20,height:20})}),Object(A.jsxs)(oe.a,{open:l,anchorEl:r.current,onClose:function(){return d(!1)},PaperProps:{sx:{width:200,maxWidth:"100%"}},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(A.jsxs)(le.a,{onClick:t,sx:{color:"text.secondary"},children:[Object(A.jsx)(je.a,{children:Object(A.jsx)(a.Icon,{icon:ae.a,width:24,height:24})}),Object(A.jsx)(de.a,{primary:"Delete",primaryTypographyProps:{variant:"body2"}})]}),Object(A.jsxs)(le.a,{component:j.b,to:"".concat(I.b.user.root,"/").concat(Object(te.a)(n),"/edit"),sx:{color:"text.secondary"},children:[Object(A.jsx)(je.a,{children:Object(A.jsx)(a.Icon,{icon:ce.a,width:24,height:24})}),Object(A.jsx)(de.a,{primary:"Edit",primaryTypographyProps:{variant:"body2"}})]})]})]})}var he=[{id:"name",label:"Name",alignRight:!1},{id:"company",label:"Company",alignRight:!1},{id:"role",label:"Role",alignRight:!1},{id:"isVerified",label:"Verified",alignRight:!1},{id:"status",label:"Status",alignRight:!1},{id:""}];function ue(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function Oe(){var e=Object(d.a)(),t=Object(S.c)(),n=Object(S.d)((function(e){return e.user})).userList,o=Object(s.useState)(0),D=Object(c.a)(o,2),W=D[0],B=D[1],F=Object(s.useState)("asc"),z=Object(c.a)(F,2),M=z[0],Q=z[1],T=Object(s.useState)([]),V=Object(c.a)(T,2),q=V[0],J=V[1],_=Object(s.useState)("name"),G=Object(c.a)(_,2),Y=G[0],H=G[1],K=Object(s.useState)(""),X=Object(c.a)(K,2),Z=X[0],$=X[1],te=Object(s.useState)(5),ne=Object(c.a)(te,2),ce=ne[0],re=ne[1];Object(s.useEffect)((function(){t(Object(C.l)())}),[t]);var ae=W>0?Math.max(0,(1+W)*ce-n.length):0,ie=function(e,t,n){var c=e.map((function(e,t){return[e,t]}));return c.sort((function(e,n){var c=t(e[0],n[0]);return 0!==c?c:e[1]-n[1]})),n?Object(r.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())})):c.map((function(e){return e[0]}))}(n,function(e,t){return"desc"===e?function(e,n){return ue(e,n,t)}:function(e,n){return-ue(e,n,t)}}(M,Y),Z),se=0===ie.length;return Object(A.jsx)(N.a,{title:"User: List | Minimal-UI",children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(U.a,{heading:"User List",links:[{name:"Dashboard",href:I.b.root},{name:"User",href:I.b.user.root},{name:"List"}],action:Object(A.jsx)(h.a,{variant:"contained",component:j.b,to:I.b.user.newUser,startIcon:Object(A.jsx)(a.Icon,{icon:l.a}),children:"New User"})}),Object(A.jsxs)(u.a,{children:[Object(A.jsx)(ee,{numSelected:q.length,filterName:Z,onFilterName:function(e){$(e.target.value)}}),Object(A.jsx)(R.a,{children:Object(A.jsx)(O.a,{sx:{minWidth:800},children:Object(A.jsxs)(x.a,{children:[Object(A.jsx)(E,{order:M,orderBy:Y,headLabel:he,rowCount:n.length,numSelected:q.length,onRequestSort:function(e,t){Q(Y===t&&"asc"===M?"desc":"asc"),H(t)},onSelectAllClick:function(e){if(e.target.checked){var t=n.map((function(e){return e.name}));J(t)}else J([])}}),Object(A.jsxs)(g.a,{children:[ie.slice(W*ce,W*ce+ce).map((function(n){var c=n.id,r=n.name,a=n.role,s=n.status,o=n.company,l=n.avatarUrl,j=n.isVerified,d=-1!==q.indexOf(r);return Object(A.jsxs)(f.a,{hover:!0,tabIndex:-1,role:"checkbox",selected:d,"aria-checked":d,children:[Object(A.jsx)(m.a,{padding:"checkbox",children:Object(A.jsx)(p.a,{checked:d,onChange:function(e){return function(e,t){var n=q.indexOf(t),c=[];-1===n?c=c.concat(q,t):0===n?c=c.concat(q.slice(1)):n===q.length-1?c=c.concat(q.slice(0,-1)):n>0&&(c=c.concat(q.slice(0,n),q.slice(n+1))),J(c)}(0,r)}})}),Object(A.jsx)(m.a,{component:"th",scope:"row",padding:"none",children:Object(A.jsxs)(v.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(A.jsx)(y.a,{alt:r,src:l}),Object(A.jsx)(k.a,{variant:"subtitle2",noWrap:!0,children:r})]})}),Object(A.jsx)(m.a,{align:"left",children:o}),Object(A.jsx)(m.a,{align:"left",children:a}),Object(A.jsx)(m.a,{align:"left",children:j?"Yes":"No"}),Object(A.jsx)(m.a,{align:"left",children:Object(A.jsx)(P.a,{variant:"light"===e.palette.mode?"ghost":"filled",color:"banned"===s?"error":"success",children:Object(i.a)(s)})}),Object(A.jsx)(m.a,{align:"right",children:Object(A.jsx)(be,{onDelete:function(){return e=c,void t(Object(C.b)(e));var e},userName:r})})]},c)})),ae>0&&Object(A.jsx)(f.a,{style:{height:53*ae},children:Object(A.jsx)(m.a,{colSpan:6})})]}),se&&Object(A.jsx)(g.a,{children:Object(A.jsx)(f.a,{children:Object(A.jsx)(m.a,{align:"center",colSpan:6,sx:{py:3},children:Object(A.jsx)(L.a,{searchQuery:Z})})})})]})})}),Object(A.jsx)(w.a,{rowsPerPageOptions:[5,10,25],component:"div",count:n.length,rowsPerPage:ce,page:W,onPageChange:function(e,t){B(t)},onRowsPerPageChange:function(e){re(parseInt(e.target.value,10)),B(0)}})]})]})})}}}]);
//# sourceMappingURL=105.2978b40c.chunk.js.map