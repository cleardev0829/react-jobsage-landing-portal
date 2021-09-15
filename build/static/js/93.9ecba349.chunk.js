(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[93],{2781:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(3),a=n(31),i=n(32),c=n(383),o=n(297),s=n(228),l=n(609),d=n(36),u=n(0);function j(t){var e=t.links,n=t.action,j=t.heading,b=t.moreLink,h=void 0===b?[]:b,f=t.sx,x=Object(a.a)(t,["links","action","heading","moreLink","sx"]);return Object(u.jsxs)(c.a,{sx:f,mb:5,spacing:2,children:[Object(u.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(u.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(u.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:j}),Object(u.jsx)(d.c,Object(r.a)({links:e},x))]}),n&&Object(u.jsx)(o.a,{sx:{flexShrink:0},children:n})]}),Object(i.isString)(h)?Object(u.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(t){return Object(u.jsx)(l.a,{noWrap:!0,href:t,variant:"body2",target:"_blank",sx:{display:"flex"},children:t},t)}))]})}},2789:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));var r=n(3),a=n(228),i=n(2818),c=n(2827),o=n(297),s=n(0);function l(t){var e=t.title;return Object(s.jsx)(a.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}function d(t){var e=t.title,n=t.sx,a=t.children;return Object(s.jsxs)(i.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[e&&Object(s.jsx)(c.a,{title:e}),Object(s.jsx)(o.a,{sx:Object(r.a)({p:3,minHeight:180},n),children:a})]})}},2818:function(t,e,n){"use strict";var r=n(2),a=n(8),i=n(1),c=(n(12),n(11)),o=n(2701),s=n(7),l=n(14),d=n(2654),u=n(2641),j=n(2702);function b(t){return Object(u.a)("MuiCard",t)}Object(j.a)("MuiCard",["root"]);var h=n(0),f=Object(s.a)(d.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),x=i.forwardRef((function(t,e){var n=Object(l.a)({props:t,name:"MuiCard"}),i=n.className,s=n.raised,d=void 0!==s&&s,u=Object(a.a)(n,["className","raised"]),j=Object(r.a)({},n,{raised:d}),x=function(t){var e=t.classes;return Object(o.a)({root:["root"]},b,e)}(j);return Object(h.jsx)(f,Object(r.a)({className:Object(c.a)(x.root,i),elevation:d?8:void 0,ref:e,styleProps:j},u))}));e.a=x},2827:function(t,e,n){"use strict";var r=n(5),a=n(8),i=n(2),c=n(1),o=(n(12),n(11)),s=n(2701),l=n(228),d=n(14),u=n(7),j=n(2641),b=n(2702);function h(t){return Object(j.a)("MuiCardHeader",t)}var f=Object(b.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=n(0),O=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(t,e){var n;return Object(i.a)((n={},Object(r.a)(n,"& .".concat(f.title),e.title),Object(r.a)(n,"& .".concat(f.subheader),e.subheader),n),e.root)}})({display:"flex",alignItems:"center",padding:16}),v=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(t,e){return e.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),m=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(t,e){return e.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),p=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(t,e){return e.content}})({flex:"1 1 auto"}),g=c.forwardRef((function(t,e){var n=Object(d.a)({props:t,name:"MuiCardHeader"}),r=n.action,c=n.avatar,u=n.className,j=n.component,b=void 0===j?"div":j,f=n.disableTypography,g=void 0!==f&&f,k=n.subheader,C=n.subheaderTypographyProps,y=n.title,w=n.titleTypographyProps,T=Object(a.a)(n,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),R=Object(i.a)({},n,{component:b,disableTypography:g}),M=function(t){var e=t.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,e)}(R),S=y;null==S||S.type===l.a||g||(S=Object(x.jsx)(l.a,Object(i.a)({variant:c?"body2":"h5",className:M.title,component:"span",display:"block"},w,{children:S})));var N=k;return null==N||N.type===l.a||g||(N=Object(x.jsx)(l.a,Object(i.a)({variant:c?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:N}))),Object(x.jsxs)(O,Object(i.a)({className:Object(o.a)(M.root,u),as:b,ref:e,styleProps:R},T,{children:[c&&Object(x.jsx)(v,{className:M.avatar,styleProps:R,children:c}),Object(x.jsxs)(p,{className:M.content,styleProps:R,children:[S,N]}),r&&Object(x.jsx)(m,{className:M.action,styleProps:R,children:r})]}))}));e.a=g},4278:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var r=n(123),a=n(140),i=n.n(a),c=n(26),o=n(7),s=n(228),l=n(2743),d=n(229),u=n(297),j=n(2655),b=n(2734),h=n(19),f=n(384),x=n(36),O=n(2781),v=n(2789),m=n(0),p={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},g=Object(o.a)(f.a)((function(t){var e=t.theme;return{paddingTop:e.spacing(11),paddingBottom:e.spacing(15)}}));function k(){var t=Object(r.b)(),e=t.enqueueSnackbar,n=t.closeSnackbar,a=function(t){e(Object(m.jsxs)("div",{children:[Object(m.jsx)(s.a,{variant:"subtitle2",sx:{textTransform:"capitalize"},children:t}),Object(m.jsxs)(s.a,{variant:"body2",sx:{color:"text.secondary"},children:["This is an ",t]})]}),{variant:t,action:function(t){return Object(m.jsx)(l.a,{size:"small",color:"inherit",onClick:function(){return n(t)},children:Object(m.jsx)(c.Icon,{icon:i.a,width:24,height:24})})}})},o=function(t,r){e("This is an ".concat(t),{variant:t,anchorOrigin:r,action:function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{size:"small",color:"default"!==t?t:"primary",onClick:function(){alert("I belong to snackbar with key ".concat(e))},children:"Alert"}),Object(m.jsx)(d.a,{size:"small",color:"inherit",onClick:function(){return n(e)},children:"Dismiss"})]})}})};return Object(m.jsxs)(g,{title:"Components: Snackbar | Minimal-UI",children:[Object(m.jsx)(u.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(t){return"light"===t.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(j.a,{maxWidth:"lg",children:Object(m.jsx)(O.a,{heading:"Snackbar",links:[{name:"Components",href:h.d.components},{name:"Snackbar"}],moreLink:["https://next.material-ui.com/components/snackbars","https://www.iamhosseindhv.com/notistack"]})})}),Object(m.jsx)(j.a,{maxWidth:"lg",children:Object(m.jsxs)(b.a,{container:!0,spacing:3,children:[Object(m.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(m.jsxs)(v.a,{title:"Simple",sx:p,children:[Object(m.jsx)(d.a,{variant:"contained",color:"inherit",onClick:function(){return e("This is an default")},children:"Default"}),Object(m.jsx)(x.d,{variant:"contained",color:"info",onClick:function(){return e("This is an info",{variant:"info"})},children:"Info"}),Object(m.jsx)(x.d,{variant:"contained",color:"success",onClick:function(){return e("This is an success",{variant:"success"})},children:"Success"}),Object(m.jsx)(x.d,{variant:"contained",color:"warning",onClick:function(){return e("This is an warning",{variant:"warning"})},children:"Warning"}),Object(m.jsx)(x.d,{variant:"contained",color:"error",onClick:function(){return e("This is an error",{variant:"error"})},children:"Error"})]})}),Object(m.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(m.jsxs)(v.a,{title:"With Close",sx:p,children:[Object(m.jsx)(d.a,{variant:"contained",color:"inherit",onClick:function(){return a("default")},children:"Default"}),Object(m.jsx)(x.d,{variant:"contained",color:"info",onClick:function(){return a("info")},children:"Info"}),Object(m.jsx)(x.d,{variant:"contained",color:"success",onClick:function(){return a("success")},children:"Success"}),Object(m.jsx)(x.d,{variant:"contained",color:"warning",onClick:function(){return a("warning")},children:"Warning"}),Object(m.jsx)(x.d,{variant:"contained",color:"error",onClick:function(){return a("error")},children:"Error"})]})}),Object(m.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(m.jsxs)(v.a,{title:"With Action",sx:p,children:[Object(m.jsx)(d.a,{variant:"contained",color:"inherit",onClick:function(){return o("default")},children:"Default"}),Object(m.jsx)(x.d,{variant:"contained",color:"info",onClick:function(){return o("info")},children:"Info"}),Object(m.jsx)(x.d,{variant:"contained",color:"success",onClick:function(){return o("success")},children:"Success"}),Object(m.jsx)(x.d,{variant:"contained",color:"warning",onClick:function(){return o("warning")},children:"Warning"}),Object(m.jsx)(x.d,{variant:"contained",color:"error",onClick:function(){return o("error")},children:"Error"})]})}),Object(m.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(m.jsxs)(v.a,{title:"anchorOrigin",sx:p,children:[Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"top",horizontal:"left"})},children:"Top Left"}),Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"top",horizontal:"center"})},children:"Top Center"}),Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default")},children:"Top Right"}),Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"bottom",horizontal:"left"})},children:"Bottom Left"}),Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"bottom",horizontal:"center"})},children:"Bottom Center"}),Object(m.jsx)(d.a,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"bottom",horizontal:"right"})},children:"Bottom Right"})]})})]})})]})}}}]);
//# sourceMappingURL=93.9ecba349.chunk.js.map