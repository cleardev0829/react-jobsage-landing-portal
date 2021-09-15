(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[103],{2818:function(e,a,t){"use strict";var n=t(2),r=t(8),i=t(1),c=(t(12),t(11)),s=t(2701),d=t(7),l=t(14),o=t(2654),j=t(2641),b=t(2702);function u(e){return Object(j.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var m=t(0),p=Object(d.a)(o.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,a){return a.root}})((function(){return{overflow:"hidden"}})),h=i.forwardRef((function(e,a){var t=Object(l.a)({props:e,name:"MuiCard"}),i=t.className,d=t.raised,o=void 0!==d&&d,j=Object(r.a)(t,["className","raised"]),b=Object(n.a)({},t,{raised:o}),h=function(e){var a=e.classes;return Object(s.a)({root:["root"]},u,a)}(b);return Object(m.jsx)(p,Object(n.a)({className:Object(c.a)(h.root,i),elevation:o?8:void 0,ref:a,styleProps:b},j))}));a.a=h},2912:function(e,a){a.__esModule=!0,a.default={body:'<path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>',width:24,height:24}},4126:function(e,a){a.__esModule=!0,a.default={body:'<path fill="currentColor" d="M12 21.85a2 2 0 0 1-1-.25l-.3-.17A15.17 15.17 0 0 1 3 8.23v-.14a2 2 0 0 1 1-1.75l7-3.94a2 2 0 0 1 2 0l7 3.94a2 2 0 0 1 1 1.75v.14a15.17 15.17 0 0 1-7.72 13.2l-.3.17a2 2 0 0 1-.98.25z"/>',width:24,height:24}},4310:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return ie}));var n=t(16),r=t.n(n),i=t(3),c=t(25),s=t(124),d=t(123),l=t(122),o=t(7),j=t(55),b=t(2707),u=t(2655),m=t(297),p=t(228),h=t(2818),O=t(2734),x=t(303),g=t(384),v=t(5),f=t(383),w=t(2753),C=t(0),y=Object(o.a)("div")((function(e){var a=e.theme;return Object(v.a)({padding:a.spacing(3)},a.breakpoints.up("md"),{padding:0,paddingTop:a.spacing(5),paddingLeft:a.spacing(5)})}));function k(e){var a=e.formik,t=a.touched,n=a.errors,r=a.getFieldProps;return Object(C.jsxs)(y,{children:[Object(C.jsx)(p.a,{variant:"subtitle1",children:"Billing Address"}),Object(C.jsxs)(f.a,{spacing:3,mt:5,children:[Object(C.jsx)(w.a,Object(i.a)(Object(i.a)({fullWidth:!0,label:"Person name"},r("name")),{},{error:Boolean(t.name&&n.name),helperText:t.name&&n.name})),Object(C.jsx)(w.a,Object(i.a)(Object(i.a)({fullWidth:!0,label:"Phone number"},r("phone")),{},{error:Boolean(t.phone&&n.phone),helperText:t.phone&&n.phone})),Object(C.jsx)(w.a,Object(i.a)(Object(i.a)({fullWidth:!0,label:"Email"},r("email")),{},{error:Boolean(t.email&&n.email),helperText:t.email&&n.email})),Object(C.jsx)(w.a,Object(i.a)(Object(i.a)({fullWidth:!0,label:"Address"},r("address")),{},{error:Boolean(t.address&&n.address),helperText:t.address&&n.address}))]})]})}var S=t(17),N=t(26),P=t(1),M=t(2912),I=t.n(M),W=t(245),z=t.n(W),T=t(2654),B=t(2714),E=t(2763),_=t(2720),q=t(2741),A=t(229),R=t(36),F=t(268),J=t.n(F),V=t(2758),L=t(2752);function H(e){var a=e.formik,t=e.onCancel,n=Object(P.useState)(null),r=Object(S.a)(n,2),c=r[0],s=r[1],d=a.values,l=a.resetForm,o=a.getFieldProps;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(T.a,{sx:{p:2.5,mb:2.5,bgcolor:"background.neutral"},children:Object(C.jsxs)(f.a,{spacing:2,children:[Object(C.jsx)(p.a,{variant:"subtitle1",children:"Add new card"}),Object(C.jsx)(w.a,Object(i.a)({fullWidth:!0,size:"small",label:"Name on card"},o("newCardName"))),Object(C.jsx)(w.a,Object(i.a)({fullWidth:!0,size:"small",label:"Card number"},o("newCardNumber"))),Object(C.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(C.jsx)(w.a,Object(i.a)({size:"small",label:"MM/YY"},o("newCardExpired"))),Object(C.jsx)(w.a,Object(i.a)(Object(i.a)({size:"small",label:"CVV"},o("newCardCvv")),{},{InputProps:{endAdornment:Object(C.jsx)(V.a,{position:"end",children:Object(C.jsx)(R.k,{size:"small",edge:"end",onClick:function(e){return s(e.currentTarget)},children:Object(C.jsx)(N.Icon,{icon:J.a})})})}}))]}),Object(C.jsxs)(f.a,{direction:"row",spacing:2,children:[Object(C.jsx)(A.a,{id:"cancel",type:"button",fullWidth:!0,onClick:function(){t(),l({values:Object(i.a)(Object(i.a)({},d),{},{newCardName:"",newCardNumber:"",newCardExpired:"",newCardCvv:""})})},children:"Cancel"}),Object(C.jsx)(A.a,{id:"create",type:"button",fullWidth:!0,variant:"contained",children:"Create"})]})]})}),Object(C.jsx)(L.a,{open:Boolean(c),anchorEl:c,onClose:function(){return s(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},PaperProps:{sx:{p:1,maxWidth:200}},children:Object(C.jsx)(p.a,{variant:"body2",align:"center",children:"Three-digit number on the back of your VISA card"})})]})}var U=[{value:"paypal",title:"Pay with Paypal",icons:["/static/icons/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",icons:["/static/icons/ic_mastercard.svg","/static/icons/ic_visa.svg"]}],D=[{value:"visa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"visa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"mastercard",label:"**** **** **** 4545 - Cole Armstrong"}],Y=Object(o.a)("div")((function(e){var a=e.theme;return Object(v.a)({padding:a.spacing(3)},a.breakpoints.up("md"),{padding:0,paddingTop:a.spacing(5)})})),$=Object(o.a)(T.a)((function(e){var a=e.theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:a.spacing(2.5),paddingRight:a.spacing(2),transition:a.transitions.create("all"),border:"solid 1px ".concat(a.palette.grey[50032])}}));function G(e){var a=e.formik,t=Object(P.useState)(!1),n=Object(S.a)(t,2),r=n[0],c=n[1],s=a.values,d=a.getFieldProps,l=function(){c((function(e){return!e}))},o=function(){c(!1)};return Object(C.jsxs)(Y,{children:[Object(C.jsx)(p.a,{variant:"subtitle1",sx:{mb:5},children:"Payment Method"}),Object(C.jsx)(B.a,Object(i.a)(Object(i.a)({},d("method")),{},{children:Object(C.jsx)(f.a,{spacing:3,children:U.map((function(e){var t=e.value,n=e.title,c=e.icons,j="credit_card"===t;return Object(C.jsxs)($,{sx:Object(i.a)(Object(i.a)({},s.method===t&&{boxShadow:function(e){return e.customShadows.z8}}),j&&{flexWrap:"wrap"}),children:[Object(C.jsx)(E.a,{value:t,control:Object(C.jsx)(_.a,{checkedIcon:Object(C.jsx)(N.Icon,{icon:z.a})}),label:Object(C.jsx)(p.a,{variant:"subtitle2",sx:{ml:1},children:n}),sx:{py:3,mx:0}}),Object(C.jsx)(R.j,{width:"smDown",children:Object(C.jsx)(f.a,{direction:"row",alignItems:"center",spacing:1,children:c.map((function(e){return Object(C.jsx)("img",{alt:"logo card",src:e},e)}))})}),j&&Object(C.jsxs)(q.a,{in:"credit_card"===s.method,sx:{width:1},children:[Object(C.jsx)(w.a,Object(i.a)(Object(i.a)({select:!0,fullWidth:!0,label:"Card"},d("card")),{},{SelectProps:{native:!0},children:D.map((function(e){return Object(C.jsx)("option",{value:e.value,children:e.label},e.value)}))})),Object(C.jsx)(A.a,{id:"addNewCard",type:"button",size:"small",startIcon:Object(C.jsx)(N.Icon,{icon:I.a,width:20,height:20}),onClick:l,sx:{my:3},children:"Add new card"}),Object(C.jsx)(q.a,{in:r,children:Object(C.jsx)(H,{formik:a,onCancel:o})})]})]},n)}))})}))]})}var K=t(4126),Q=t.n(K),X=t(2744),Z=t(2656),ee=t(2711),ae=t(304),te=Object(o.a)("div")((function(e){var a,t=e.theme;return a={padding:t.spacing(3)},Object(v.a)(a,t.breakpoints.up("md"),{margin:t.spacing(1),paddingTop:t.spacing(5),paddingBottom:t.spacing(5),borderRadius:t.shape.borderRadiusMd,backgroundColor:t.palette.background.neutral}),Object(v.a)(a,t.breakpoints.up("lg"),{paddingLeft:t.spacing(5),paddingRight:t.spacing(5)}),a}));function ne(e){var a=e.formik,t=a.getFieldProps,n=a.isSubmitting;return Object(C.jsxs)(te,{children:[Object(C.jsx)(p.a,{variant:"subtitle1",sx:{mb:5},children:"Summary"}),Object(C.jsxs)(f.a,{spacing:2.5,children:[Object(C.jsxs)(f.a,{direction:"row",justifyContent:"space-between",children:[Object(C.jsx)(p.a,{variant:"subtitle2",component:"p",sx:{color:"text.secondary"},children:"Subscription"}),Object(C.jsx)(ae.a,{color:"error",variant:"filled",children:"PREMIUM"})]}),Object(C.jsxs)(f.a,{direction:"row",justifyContent:"space-between",children:[Object(C.jsx)(p.a,{component:"p",variant:"subtitle2",sx:{color:"text.secondary"},children:"Billed Monthly"}),Object(C.jsx)(X.a,Object(i.a)({},t("isMonthly")))]}),Object(C.jsxs)(f.a,{direction:"row",justifyContent:"flex-end",children:[Object(C.jsx)(p.a,{sx:{color:"text.secondary"},children:"$"}),Object(C.jsx)(p.a,{variant:"h2",sx:{mx:1},children:"9.99"}),Object(C.jsx)(p.a,{component:"span",variant:"body2",sx:{mb:1,alignSelf:"flex-end",color:"text.secondary"},children:"/mo"})]}),Object(C.jsx)(Z.a,{sx:{borderStyle:"dashed"}}),Object(C.jsxs)(f.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(C.jsx)(p.a,{variant:"h6",component:"p",children:"Total Billed"}),Object(C.jsx)(p.a,{variant:"h6",component:"p",children:"$9.99*"})]}),Object(C.jsx)(Z.a,{sx:{borderStyle:"dashed",mb:1}})]}),Object(C.jsx)(p.a,{variant:"caption",sx:{color:"text.secondary",mt:1},children:"* Plus applicable taxes"}),Object(C.jsx)(ee.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:n,sx:{mt:5,mb:3},children:"Upgrade My Plan"}),Object(C.jsxs)(f.a,{alignItems:"center",spacing:1,children:[Object(C.jsxs)(f.a,{direction:"row",alignItems:"center",spacing:1.5,children:[Object(C.jsx)(m.a,{component:N.Icon,icon:Q.a,sx:{width:20,height:20,color:"primary.main"}}),Object(C.jsx)(p.a,{variant:"subtitle2",children:"Secure credit card payment"})]}),Object(C.jsx)(p.a,{variant:"caption",sx:{color:"text.secondary"},children:"This is a secure 128-bit SSL encrypted payment"})]})]})}var re=Object(o.a)(g.a)((function(e){var a=e.theme;return{minHeight:"100%",paddingTop:a.spacing(15),paddingBottom:a.spacing(10)}}));function ie(){var e=Object(d.b)().enqueueSnackbar,a=Object(j.a)(),t=Object(b.a)(a.breakpoints.up("md")),n=s.e().shape({name:s.g().required("Name is required"),phone:s.g().required("Phone is required"),email:s.g().email("Email must be a valid email address").required("Email is required"),address:s.g().required("Address is required")}),o=Object(l.d)({initialValues:{name:"",phone:"",email:"",address:"",subscription:"premium",isMonthly:!1,method:"paypal",card:"mastercard",newCardName:"",newCardNumber:"",newCardExpired:"",newCardCvv:""},validationSchema:n,onSubmit:function(){var a=Object(c.a)(r.a.mark((function a(t,n){var c,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=n.resetForm,s={name:t.name,phone:t.phone,email:t.email,address:t.address,subscription:"premium"},a.next=4,Object(x.a)(500);case 4:"paypal"===t.method?alert(JSON.stringify(Object(i.a)(Object(i.a)({},s),{},{method:t.method}),null,2)):"paypal"===t.method||t.newCardName||alert(JSON.stringify(Object(i.a)(Object(i.a)({},s),{},{method:t.method,card:t.card}),null,2)),t.newCardName&&alert(JSON.stringify(Object(i.a)(Object(i.a)({},s),{},{method:t.method,newCardName:t.newCardName,newCardNumber:t.newCardNumber,newCardExpired:t.newCardExpired,newCardCvv:t.newCardCvv}),null,2)),c(),e("Payment success",{variant:"success"});case 8:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()});return Object(C.jsx)(re,{title:"Payment | Minimal-UI",children:Object(C.jsxs)(u.a,{maxWidth:"lg",children:[Object(C.jsxs)(m.a,{sx:{mb:5},children:[Object(C.jsx)(p.a,{variant:"h3",align:"center",paragraph:!0,children:"Let's finish powering you up!"}),Object(C.jsx)(p.a,{align:"center",sx:{color:"text.secondary"},children:"Professional plan is right for you."})]}),Object(C.jsx)(h.a,{children:Object(C.jsx)(l.b,{value:o,children:Object(C.jsx)(l.a,{noValidate:!0,autoComplete:"off",onSubmit:o.handleSubmit,children:Object(C.jsxs)(O.a,{container:!0,spacing:t?5:2,children:[Object(C.jsx)(O.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(k,{formik:o})}),Object(C.jsx)(O.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(G,{formik:o})}),Object(C.jsx)(O.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(ne,{formik:o})})]})})})})]})})}}}]);
//# sourceMappingURL=103.18ad5d18.chunk.js.map