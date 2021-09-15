(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[90],{2781:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(3),n=a(31),c=a(32),i=a(383),o=a(297),s=a(228),l=a(609),d=a(36),j=a(0);function b(e){var t=e.links,a=e.action,b=e.heading,u=e.moreLink,h=void 0===u?[]:u,O=e.sx,x=Object(n.a)(e,["links","action","heading","moreLink","sx"]);return Object(j.jsxs)(i.a,{sx:O,mb:5,spacing:2,children:[Object(j.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(j.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(d.c,Object(r.a)({links:t},x))]}),a&&Object(j.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(c.isString)(h)?Object(j.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2789:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var r=a(3),n=a(228),c=a(2818),i=a(2827),o=a(297),s=a(0);function l(e){var t=e.title;return Object(s.jsx)(n.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,n=e.children;return Object(s.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(i.a,{title:t}),Object(s.jsx)(o.a,{sx:Object(r.a)({p:3,minHeight:180},a),children:n})]})}},2818:function(e,t,a){"use strict";var r=a(2),n=a(8),c=a(1),i=(a(12),a(11)),o=a(2701),s=a(7),l=a(14),d=a(2654),j=a(2641),b=a(2702);function u(e){return Object(j.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var h=a(0),O=Object(s.a)(d.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),x=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCard"}),c=a.className,s=a.raised,d=void 0!==s&&s,j=Object(n.a)(a,["className","raised"]),b=Object(r.a)({},a,{raised:d}),x=function(e){var t=e.classes;return Object(o.a)({root:["root"]},u,t)}(b);return Object(h.jsx)(O,Object(r.a)({className:Object(i.a)(x.root,c),elevation:d?8:void 0,ref:t,styleProps:b},j))}));t.a=x},2827:function(e,t,a){"use strict";var r=a(5),n=a(8),c=a(2),i=a(1),o=(a(12),a(11)),s=a(2701),l=a(228),d=a(14),j=a(7),b=a(2641),u=a(2702);function h(e){return Object(b.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=a(0),p=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(r.a)(a,"& .".concat(O.title),t.title),Object(r.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),m=Object(j.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),r=a.action,i=a.avatar,j=a.className,b=a.component,u=void 0===b?"div":b,O=a.disableTypography,y=void 0!==O&&O,g=a.subheader,k=a.subheaderTypographyProps,C=a.title,w=a.titleTypographyProps,M=Object(n.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),P=Object(c.a)({},a,{component:u,disableTypography:y}),N=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(P),R=C;null==R||R.type===l.a||y||(R=Object(x.jsx)(l.a,Object(c.a)({variant:i?"body2":"h5",className:N.title,component:"span",display:"block"},w,{children:R})));var S=g;return null==S||S.type===l.a||y||(S=Object(x.jsx)(l.a,Object(c.a)({variant:i?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:S}))),Object(x.jsxs)(p,Object(c.a)({className:Object(o.a)(N.root,j),as:u,ref:t,styleProps:P},M,{children:[i&&Object(x.jsx)(f,{className:N.avatar,styleProps:P,children:i}),Object(x.jsxs)(m,{className:N.content,styleProps:P,children:[R,S]}),r&&Object(x.jsx)(v,{className:N.action,styleProps:P,children:r})]}))}));t.a=y},4257:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var r=a(7),n=a(297),c=a(2655),i=a(383),o=a(19),s=a(384),l=a(304),d=a(2781),j=a(2789),b=a(0),u={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:1}},h=Object(r.a)(s.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function O(){return Object(b.jsxs)(h,{title:"Components: Label | Minimal-UI",children:[Object(b.jsx)(n.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(b.jsx)(c.a,{maxWidth:"lg",children:Object(b.jsx)(d.a,{heading:"Label",links:[{name:"Components",href:o.d.components},{name:"Label"}]})})}),Object(b.jsx)(c.a,{maxWidth:"lg",children:Object(b.jsxs)(i.a,{spacing:5,children:[Object(b.jsxs)(j.a,{title:"Filled",sx:u,children:[Object(b.jsx)(l.a,{variant:"filled",children:" Default"}),Object(b.jsx)(l.a,{variant:"filled",color:"primary",children:"Primary"}),Object(b.jsx)(l.a,{variant:"filled",color:"secondary",children:"Secondary"}),Object(b.jsx)(l.a,{variant:"filled",color:"info",children:"Info"}),Object(b.jsx)(l.a,{variant:"filled",color:"success",children:"Success"}),Object(b.jsx)(l.a,{variant:"filled",color:"warning",children:"Waring"}),Object(b.jsx)(l.a,{variant:"filled",color:"error",children:"Error"})]}),Object(b.jsxs)(j.a,{title:"Outlined",sx:u,children:[Object(b.jsx)(l.a,{variant:"outlined",children:" Default"}),Object(b.jsx)(l.a,{variant:"outlined",color:"primary",children:"Primary"}),Object(b.jsx)(l.a,{variant:"outlined",color:"secondary",children:"Secondary"}),Object(b.jsx)(l.a,{variant:"outlined",color:"info",children:"Info"}),Object(b.jsx)(l.a,{variant:"outlined",color:"success",children:"Success"}),Object(b.jsx)(l.a,{variant:"outlined",color:"warning",children:"Waring"}),Object(b.jsx)(l.a,{variant:"outlined",color:"error",children:"Error"})]}),Object(b.jsxs)(j.a,{title:"Ghost",sx:u,children:[Object(b.jsx)(l.a,{children:" Default"}),Object(b.jsx)(l.a,{color:"primary",children:"Primary"}),Object(b.jsx)(l.a,{color:"secondary",children:"Secondary"}),Object(b.jsx)(l.a,{color:"info",children:"Info"}),Object(b.jsx)(l.a,{color:"success",children:"Success"}),Object(b.jsx)(l.a,{color:"warning",children:"Waring"}),Object(b.jsx)(l.a,{color:"error",children:"Error"})]})]})})]})}}}]);
//# sourceMappingURL=90.099cae6f.chunk.js.map