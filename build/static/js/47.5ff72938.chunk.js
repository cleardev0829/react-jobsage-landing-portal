(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[47],{2781:function(e,t,o){"use strict";o.d(t,"a",(function(){return j}));var n=o(3),r=o(31),a=o(32),c=o(383),i=o(297),s=o(228),l=o(609),d=o(36),u=o(0);function j(e){var t=e.links,o=e.action,j=e.heading,b=e.moreLink,h=void 0===b?[]:b,p=e.sx,v=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(u.jsxs)(c.a,{sx:p,mb:5,spacing:2,children:[Object(u.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(u.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(u.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:j}),Object(u.jsx)(d.c,Object(n.a)({links:t},v))]}),o&&Object(u.jsx)(i.a,{sx:{flexShrink:0},children:o})]}),Object(a.isString)(h)?Object(u.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(u.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2789:function(e,t,o){"use strict";o.d(t,"b",(function(){return l})),o.d(t,"a",(function(){return d}));var n=o(3),r=o(228),a=o(2818),c=o(2827),i=o(297),s=o(0);function l(e){var t=e.title;return Object(s.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,o=e.sx,r=e.children;return Object(s.jsxs)(a.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(c.a,{title:t}),Object(s.jsx)(i.a,{sx:Object(n.a)({p:3,minHeight:180},o),children:r})]})}},2818:function(e,t,o){"use strict";var n=o(2),r=o(8),a=o(1),c=(o(12),o(11)),i=o(2701),s=o(7),l=o(14),d=o(2654),u=o(2641),j=o(2702);function b(e){return Object(u.a)("MuiCard",e)}Object(j.a)("MuiCard",["root"]);var h=o(0),p=Object(s.a)(d.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),v=a.forwardRef((function(e,t){var o=Object(l.a)({props:e,name:"MuiCard"}),a=o.className,s=o.raised,d=void 0!==s&&s,u=Object(r.a)(o,["className","raised"]),j=Object(n.a)({},o,{raised:d}),v=function(e){var t=e.classes;return Object(i.a)({root:["root"]},b,t)}(j);return Object(h.jsx)(p,Object(n.a)({className:Object(c.a)(v.root,a),elevation:d?8:void 0,ref:t,styleProps:j},u))}));t.a=v},2827:function(e,t,o){"use strict";var n=o(5),r=o(8),a=o(2),c=o(1),i=(o(12),o(11)),s=o(2701),l=o(228),d=o(14),u=o(7),j=o(2641),b=o(2702);function h(e){return Object(j.a)("MuiCardHeader",e)}var p=Object(b.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=o(0),f=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var o;return Object(a.a)((o={},Object(n.a)(o,"& .".concat(p.title),t.title),Object(n.a)(o,"& .".concat(p.subheader),t.subheader),o),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),O=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),m=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),x=c.forwardRef((function(e,t){var o=Object(d.a)({props:e,name:"MuiCardHeader"}),n=o.action,c=o.avatar,u=o.className,j=o.component,b=void 0===j?"div":j,p=o.disableTypography,x=void 0!==p&&p,y=o.subheader,I=o.subheaderTypographyProps,w=o.title,M=o.titleTypographyProps,S=Object(r.a)(o,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),C=Object(a.a)({},o,{component:b,disableTypography:x}),A=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(C),k=w;null==k||k.type===l.a||x||(k=Object(v.jsx)(l.a,Object(a.a)({variant:c?"body2":"h5",className:A.title,component:"span",display:"block"},M,{children:k})));var z=y;return null==z||z.type===l.a||x||(z=Object(v.jsx)(l.a,Object(a.a)({variant:c?"body2":"body1",className:A.subheader,color:"text.secondary",component:"span",display:"block"},I,{children:z}))),Object(v.jsxs)(f,Object(a.a)({className:Object(i.a)(A.root,u),as:b,ref:t,styleProps:C},S,{children:[c&&Object(v.jsx)(g,{className:A.avatar,styleProps:C,children:c}),Object(v.jsxs)(m,{className:A.content,styleProps:C,children:[k,z]}),n&&Object(v.jsx)(O,{className:A.action,styleProps:C,children:n})]}))}));t.a=x},2967:function(e,t,o){"use strict";o.d(t,"a",(function(){return g}));var n=o(5),r=o(3),a=o(3183),c=o.n(a),i=o(3187),s=o.n(i),l=o(3188),d=o.n(l),u=o(7),j=o(609),b=o(228),h=o(2656),p=o(0),v=Object(u.a)("div")((function(e){var t,o=e.theme,a="light"===o.palette.mode;return{"& ul, & ol":Object(r.a)(Object(r.a)({},o.typography.body1),{},{paddingLeft:o.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(t={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:o.spacing(3,3,3,8),borderRadius:o.shape.borderRadiusMd,backgroundColor:o.palette.background.neutral,color:"".concat(o.palette.text.secondary," !important")},Object(n.a)(t,o.breakpoints.up("md"),{width:"80%"}),Object(n.a)(t,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(o.palette.text.secondary," !important")}),Object(n.a)(t,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:o.palette.text.disabled}),t),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:o.spacing(2),color:o.palette.common.white,borderRadius:o.shape.borderRadius,backgroundColor:o.palette.grey[a?900:50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:o.spacing(.2,.5),color:o.palette.warning[a?"darker":"lighter"],backgroundColor:o.palette.warning[a?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}}));function f(e){var t=e.href,o=e.children;return t.includes("http")?Object(p.jsx)(j.a,{href:t,target:"_blank",rel:"nofollow noreferrer noopener",children:o}):Object(p.jsx)(j.a,{href:t,children:o})}function g(e){var t=Object.assign({},e);return Object(p.jsx)(v,{children:Object(p.jsx)(c.a,Object(r.a)({rehypePlugins:[s.a,d.a],components:{h1:function(e){return Object(p.jsx)(b.a,Object(r.a)({variant:"h1"},e))},h2:function(e){return Object(p.jsx)(b.a,Object(r.a)({variant:"h2"},e))},h3:function(e){return Object(p.jsx)(b.a,Object(r.a)({variant:"h3"},e))},h4:function(e){return Object(p.jsx)(b.a,Object(r.a)({variant:"h4"},e))},h5:function(e){return Object(p.jsx)(b.a,Object(r.a)({variant:"h5"},e))},h6:function(e){return Object(p.jsx)(b.a,Object(r.a)({variant:"h6"},e))},p:function(e){return Object(p.jsx)(b.a,Object(r.a)({variant:"body1"},e))},hr:function(e){return Object(p.jsx)(h.a,Object(r.a)({sx:{my:3}},e))},a:f}},t))})}},3020:function(e,t){t.__esModule=!0,t.default={body:'<path d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41zm13.14 6.14l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z" fill="currentColor"/>',width:24,height:24}},3277:function(e,t,o){"use strict";var n=o(611),r=o(610);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(o(1));var a=n(o(612)),c=o(0),i=(0,a.default)((0,c.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=i},3278:function(e,t,o){"use strict";var n=o(611),r=o(610);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(o(1));var a=n(o(612)),c=o(0),i=(0,a.default)((0,c.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");t.default=i},3324:function(e,t,o){"use strict";var n=o(2),r=o(8),a=o(1),c=(o(12),o(11)),i=o(2701),s=o(228),l=o(7),d=o(14),u=o(2641),j=o(2702);function b(e){return Object(u.a)("MuiDialogTitle",e)}Object(j.a)("MuiDialogTitle",["root"]);var h=o(0),p=Object(l.a)("div",{},{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{margin:0,padding:"16px 24px",flex:"0 0 auto"}})),v=a.forwardRef((function(e,t){var o=Object(d.a)({props:e,name:"MuiDialogTitle"}),a=o.children,l=o.className,u=o.disableTypography,j=void 0!==u&&u,v=Object(r.a)(o,["children","className","disableTypography"]),f=Object(n.a)({},o,{disableTypography:j}),g=function(e){var t=e.classes;return Object(i.a)({root:["root"]},b,t)}(f);return Object(h.jsx)(p,Object(n.a)({className:Object(c.a)(g.root,l),styleProps:f,ref:t},v,{children:j?a:Object(h.jsx)(s.a,{component:"h2",variant:"h6",children:a})}))}));t.a=v},3325:function(e,t,o){"use strict";var n=o(8),r=o(2),a=o(1),c=(o(12),o(11)),i=o(2701),s=o(7),l=o(14),d=o(2641),u=o(2702);function j(e){return Object(d.a)("MuiDialogContent",e)}Object(u.a)("MuiDialogContent",["root","dividers"]);var b=o(0),h=Object(s.a)("div",{},{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var o=e.styleProps;return Object(r.a)({},t.root,o.dividers&&t.dividers)}})((function(e){var t=e.theme,o=e.styleProps;return Object(r.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-of-type":{paddingTop:20}},o.dividers&&{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)})})),p=a.forwardRef((function(e,t){var o=Object(l.a)({props:e,name:"MuiDialogContent"}),a=o.className,s=o.dividers,d=void 0!==s&&s,u=Object(n.a)(o,["className","dividers"]),p=Object(r.a)({},o,{dividers:d}),v=function(e){var t=e.classes,o={root:["root",e.dividers&&"dividers"]};return Object(i.a)(o,j,t)}(p);return Object(b.jsx)(h,Object(r.a)({className:Object(c.a)(v.root,a),styleProps:p,ref:t},u))}));t.a=p},3413:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.69 11.86l-3 2.86a.49.49 0 0 1-.15.1a.54.54 0 0 1-.16.1a.94.94 0 0 1-.76 0a1 1 0 0 1-.33-.21l-3-3a1 1 0 0 1 1.42-1.42l1.29 1.3V8a1 1 0 0 1 2 0v5.66l1.31-1.25a1 1 0 0 1 1.38 1.45z"/>',width:24,height:24}},4127:function(e,t){t.__esModule=!0,t.default={body:'<g fill="currentColor"><path d="M11.28 13H7a1 1 0 0 1-.86-.5a1 1 0 0 1 0-1L9.28 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h4.25z"/><path d="M15.83 6h-4.25l-2.86 5H13a1 1 0 0 1 .86.5a1 1 0 0 1 0 1L10.72 18h5.11A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6zM21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/></g>',width:24,height:24}},4128:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20a2.58 2.58 0 0 0 2.53-1.89a2.52 2.52 0 0 0-.57-2.28a.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zm-12.7 9.66a1.5 1.5 0 1 1 .4-2.08a1.49 1.49 0 0 1-.4 2.08zM8.3 9.25a1.5 1.5 0 1 1-.55-2a1.5 1.5 0 0 1 .55 2zM11 7a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 7zm5.75.8a1.5 1.5 0 1 1 .55-2a1.5 1.5 0 0 1-.55 2z"/>',width:24,height:24}},4129:function(e,t,o){"use strict";var n=o(611),r=o(610);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(o(1));var a=n(o(612)),c=o(0),i=(0,a.default)((0,c.jsx)("path",{d:"M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"Adb");t.default=i},4130:function(e,t,o){"use strict";var n=o(611),r=o(610);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(o(1));var a=n(o(612)),c=o(0),i=(0,a.default)((0,c.jsx)("path",{d:"M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"}),"AirplanemodeActive");t.default=i},4131:function(e,t,o){"use strict";var n=o(611),r=o(610);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(o(1));var a=n(o(612)),c=o(0),i=(0,a.default)((0,c.jsx)("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"}),"Apple");t.default=i},4326:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return Y}));var n=o(26),r=o(414),a=o.n(r),c=o(4127),i=o.n(c),s=o(269),l=o.n(s),d=o(4128),u=o.n(d),j=o(3413),b=o.n(j),h=o(4129),p=o.n(h),v=o(3277),f=o.n(v),g=o(4131),O=o.n(g),m=o(3278),x=o.n(m),y=o(4130),I=o.n(y),w=o(7),M=o(297),S=o(2655),C=o(383),A=o(608),k=o(19),z=o(384),P=o(17),R=o(1),_=o(3020),T=o.n(_),N=o(2761),H=o(2743),L=o(3324),F=o(3325),D=o(2967),V=o(161),W=o(0);function B(e){var t=e.source,o=e.title,r=e.sx,a=Object(R.useState)(!1),c=Object(P.a)(a,2),i=c[0],s=c[1];return Object(W.jsxs)(M.a,{sx:r,children:[Object(W.jsx)(N.a,{title:"View Code",children:Object(W.jsx)(H.a,{onClick:function(){return s(!0)},color:i?"primary":"default",sx:{right:8,bottom:8,position:"absolute"},children:Object(W.jsx)(n.Icon,{icon:T.a,width:20,height:20})})}),Object(W.jsxs)(V.b,{fullWidth:!0,open:i,maxWidth:"md",scroll:"paper",onClose:function(){return s(!1)},children:[o&&Object(W.jsx)(L.a,{children:o}),Object(W.jsx)(F.a,{children:Object(W.jsx)(D.a,{children:t})})]})]})}var G=o(395),J=o(2781),q=o(2789),U=Object(w.a)(z.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),X={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function Y(){return Object(W.jsxs)(U,{title:"Foundations: Icons | Minimal-UI",children:[Object(W.jsx)(M.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(W.jsx)(S.a,{maxWidth:"lg",children:Object(W.jsx)(J.a,{heading:"Icons",links:[{name:"Components",href:k.d.components},{name:"Icons"}],moreLink:["https://material-ui.com/components/material-icons","https://iconify.design/icon-sets"]})})}),Object(W.jsx)(S.a,{maxWidth:"lg",children:Object(W.jsxs)(C.a,{spacing:3,children:[Object(W.jsx)(M.a,{sx:{position:"relative"},children:Object(W.jsxs)(q.a,{title:"Material Icons",sx:X,children:[Object(W.jsx)(B,{source:'\n~~~ js\n\nimport AdbIcon from \'@material-ui/icons/Adb\';\nimport AddIcon from \'@material-ui/icons/Add\';\nimport AppleIcon from \'@material-ui/icons/Apple\';\nimport AccountCircleIcon from \'@material-ui/icons/AccountCircle\';\nimport AirplanemodeActiveIcon from \'@material-ui/icons/AirplanemodeActive\';\n\n// ----------------------------------------------------------------------\n\nfunction IconMaterial() {\n  return (\n    <>\n      <AdbIcon color="action" />\n      <AddIcon color="disabled" />\n      <AccountCircleIcon color="error" />\n      <AirplanemodeActiveIcon color="inherit" />\n      <AppleIcon color="primary" />\n      <AppleIcon color="secondary" />\n    </>\n  );\n}\n\n\n~~~'}),Object(W.jsx)(p.a,{color:"action"}),Object(W.jsx)(f.a,{color:"disabled"}),Object(W.jsx)(x.a,{color:"error"}),Object(W.jsx)(I.a,{color:"inherit"}),Object(W.jsx)(O.a,{color:"primary"}),Object(W.jsx)(O.a,{color:"secondary"})]})}),Object(W.jsx)(M.a,{sx:{position:"relative"},children:Object(W.jsxs)(q.a,{title:"Iconify Icons",sx:X,children:[Object(W.jsx)(B,{source:"\n~~~ js\n\nimport { Icon } from '@iconify/react';\nimport { SvgIcon } from '@material-ui/core';\nimport clockFill from '@iconify/icons-eva/clock-fill';\nimport chargingFill from '@iconify/icons-eva/charging-fill';\nimport alertCircleFill from '@iconify/icons-eva/alert-circle-fill';\nimport colorPaletteFill from '@iconify/icons-eva/color-palette-fill';\nimport arrowCircleDownFill from '@iconify/icons-eva/arrow-circle-down-fill';\n\n// ----------------------------------------------------------------------\n\nfunction IconIconify() {\n  return (\n    <>\n      <SvgIcon color=\"action\">\n        <Icon icon={alertCircleFill} width={24} height={24} />\n      </SvgIcon>\n      <SvgIcon color=\"disabled\">\n        <Icon icon={chargingFill} width={24} height={24} />\n      </SvgIcon>\n      <SvgIcon color=\"error\">\n        <Icon icon={arrowCircleDownFill} width={24} height={24} />\n      </SvgIcon>\n      <SvgIcon color=\"inherit\">\n        <Icon icon={clockFill} width={24} height={24} />\n      </SvgIcon>\n      <SvgIcon color=\"primary\">\n        <Icon icon={colorPaletteFill} width={24} height={24} />\n      </SvgIcon>\n      <SvgIcon color=\"secondary\">\n      <Icon icon={colorPaletteFill} width={24} height={24} />\n    </SvgIcon>\n    </>\n  );\n}\n\n\n~~~"}),Object(W.jsx)(A.a,{color:"action",children:Object(W.jsx)(n.Icon,{icon:l.a,width:24,height:24})}),Object(W.jsx)(A.a,{color:"disabled",children:Object(W.jsx)(n.Icon,{icon:i.a,width:24,height:24})}),Object(W.jsx)(A.a,{color:"error",children:Object(W.jsx)(n.Icon,{icon:b.a,width:24,height:24})}),Object(W.jsx)(A.a,{color:"inherit",children:Object(W.jsx)(n.Icon,{icon:a.a,width:24,height:24})}),Object(W.jsx)(A.a,{color:"primary",children:Object(W.jsx)(n.Icon,{icon:u.a,width:24,height:24})}),Object(W.jsx)(A.a,{color:"secondary",children:Object(W.jsx)(n.Icon,{icon:u.a,width:24,height:24})})]})}),Object(W.jsx)(M.a,{sx:{position:"relative"},children:Object(W.jsxs)(q.a,{title:"Local Icons",sx:X,children:[Object(W.jsx)(B,{source:'\n~~~ js\n\nimport  SvgIconStyle  from \'src/components/SvgIconStyle\';\n\n// ----------------------------------------------------------------------\n\nfunction IconLocal() {\n  return (\n    <>\n      <SvgIconStyle src="/static/icons/browser-edge.svg" />\n      <SvgIconStyle src="/static/icons/browser-edge.svg" color="action" />\n      <SvgIconStyle src="/static/icons/browser-edge.svg" color="disabled" />\n      <SvgIconStyle src="/static/icons/browser-edge.svg" color="primary" />\n      <SvgIconStyle src="/static/icons/browser-edge.svg" color="secondary" />\n      <SvgIconStyle src="/static/icons/elephant.svg" color="info" />\n      <SvgIconStyle src="/static/icons/json-logo.svg" color="success" />\n      <SvgIconStyle src="/static/icons/love-camera.svg" color="warning" />\n      <SvgIconStyle src="/static/icons/shield.svg" color="error" />\n    </>\n  );\n}\n\n~~~'}),Object(W.jsx)(G.a,{src:"/static/icons/browser-edge.svg"}),Object(W.jsx)(G.a,{src:"/static/icons/browser-edge.svg",color:"action"}),Object(W.jsx)(G.a,{src:"/static/icons/browser-edge.svg",color:"disabled"}),Object(W.jsx)(G.a,{src:"/static/icons/browser-edge.svg",color:"primary"}),Object(W.jsx)(G.a,{src:"/static/icons/browser-edge.svg",color:"secondary"}),Object(W.jsx)(G.a,{src:"/static/icons/elephant.svg",color:"info"}),Object(W.jsx)(G.a,{src:"/static/icons/json-logo.svg",color:"success"}),Object(W.jsx)(G.a,{src:"/static/icons/love-camera.svg",color:"warning"}),Object(W.jsx)(G.a,{src:"/static/icons/shield.svg",color:"error"})]})})]})})]})}}}]);
//# sourceMappingURL=47.5ff72938.chunk.js.map