(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[96],{2781:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i(3),c=i(31),l=i(32),s=i(383),r=i(297),a=i(228),j=i(609),o=i(36),b=i(0);function d(e){var t=e.links,i=e.action,d=e.heading,x=e.moreLink,h=void 0===x?[]:x,O=e.sx,m=Object(c.a)(e,["links","action","heading","moreLink","sx"]);return Object(b.jsxs)(s.a,{sx:O,mb:5,spacing:2,children:[Object(b.jsxs)(s.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(b.jsx)(a.a,{variant:"h4",gutterBottom:!0,children:d}),Object(b.jsx)(o.c,Object(n.a)({links:t},m))]}),i&&Object(b.jsx)(r.a,{sx:{flexShrink:0},children:i})]}),Object(l.isString)(h)?Object(b.jsx)(j.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(b.jsx)(j.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2782:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"d",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"e",(function(){return j})),i.d(t,"b",(function(){return o}));var n=i(32),c=i(2861),l=i.n(c);function s(e){return l()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function r(e){return l()(e/100).format("0.0%")}function a(e){return l()(e).format()}function j(e){return Object(n.replace)(l()(e).format("0.00a"),".00","")}function o(e){return l()(e).format("0.0 b")}},3779:function(e,t){},3780:function(e,t){},4317:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return X}));var n=i(20),c=i(4),l=i.n(c),s=i(32),r=i(7),a=i(3285),j=i(2655),o=i(2818),b=i(2734),d=i(297),x=i(228),h=i(3282),O=i(3283),m=i(3284),u=i(3437),y=i(3286),g=i(2656),p=i(19),f=i(2782),w=i(384),v=i(304),T=i(84),V=i(2781),C=i(3480),_=i(0);C.Font.register({family:"Roboto",fonts:[{src:"/fonts/Roboto-Regular.ttf"},{src:"/fonts/Roboto-Bold.ttf"}]});var S=C.StyleSheet.create({col4:{width:"25%"},col8:{width:"75%"},col6:{width:"50%"},mb8:{marginBottom:8},mb40:{marginBottom:40},overline:{fontSize:8,marginBottom:8,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase"},h3:{fontSize:16,fontWeight:700},h4:{fontSize:13,fontWeight:700},body1:{fontSize:10},subtitle2:{fontSize:9,fontWeight:700},alignRight:{textAlign:"right"},page:{padding:"40px 24px 0 24px",fontSize:9,lineHeight:1.6,fontFamily:"Roboto",backgroundColor:"#fff",textTransform:"capitalize"},footer:{left:0,right:0,bottom:0,padding:24,margin:"auto",borderTopWidth:1,borderStyle:"solid",position:"absolute",borderColor:"#DFE3E8"},gridContainer:{flexDirection:"row",justifyContent:"space-between"},table:{display:"flex",width:"auto"},tableHeader:{},tableBody:{},tableRow:{padding:"8px 0",flexDirection:"row",borderBottomWidth:1,borderStyle:"solid",borderColor:"#DFE3E8"},noBorder:{paddingTop:8,paddingBottom:0,borderBottomWidth:0},tableCell_1:{width:"5%"},tableCell_2:{width:"50%",paddingRight:16},tableCell_3:{width:"15%"}});function I(e){var t=e.invoice,i=t.id,n=t.items,c=t.taxes,l=t.status,r=t.discount,a=t.invoiceTo,j=t.invoiceFrom,o=Object(s.sum)(n.map((function(e){return e.price*e.qty}))),b=o-r+c;return Object(_.jsx)(C.Document,{children:Object(_.jsxs)(C.Page,{size:"A4",style:S.page,children:[Object(_.jsxs)(C.View,{style:[S.gridContainer,S.mb40],children:[Object(_.jsx)(C.Image,{source:"/static/brand/logo_full.jpg",style:{height:32}}),Object(_.jsxs)(C.View,{style:{alignItems:"right",flexDirection:"column"},children:[Object(_.jsx)(C.Text,{style:S.h3,children:l}),Object(_.jsxs)(C.Text,{children:["INV-",i]})]})]}),Object(_.jsxs)(C.View,{style:[S.gridContainer,S.mb40],children:[Object(_.jsxs)(C.View,{style:S.col6,children:[Object(_.jsx)(C.Text,{style:[S.overline,S.mb8],children:"Invoice from"}),Object(_.jsx)(C.Text,{style:S.body1,children:j.name}),Object(_.jsx)(C.Text,{style:S.body1,children:j.address}),Object(_.jsx)(C.Text,{style:S.body1,children:j.phone})]}),Object(_.jsxs)(C.View,{style:S.col6,children:[Object(_.jsx)(C.Text,{style:[S.overline,S.mb8],children:"Invoice to"}),Object(_.jsx)(C.Text,{style:S.body1,children:a.name}),Object(_.jsx)(C.Text,{style:S.body1,children:a.address}),Object(_.jsx)(C.Text,{style:S.body1,children:a.phone})]})]}),Object(_.jsx)(C.Text,{style:[S.overline,S.mb8],children:"Invoice Details"}),Object(_.jsxs)(C.View,{style:S.table,children:[Object(_.jsx)(C.View,{style:S.tableHeader,children:Object(_.jsxs)(C.View,{style:S.tableRow,children:[Object(_.jsx)(C.View,{style:S.tableCell_1,children:Object(_.jsx)(C.Text,{style:S.subtitle2,children:"#"})}),Object(_.jsx)(C.View,{style:S.tableCell_2,children:Object(_.jsx)(C.Text,{style:S.subtitle2,children:"Description"})}),Object(_.jsx)(C.View,{style:S.tableCell_3,children:Object(_.jsx)(C.Text,{style:S.subtitle2,children:"Qty"})}),Object(_.jsx)(C.View,{style:S.tableCell_3,children:Object(_.jsx)(C.Text,{style:S.subtitle2,children:"Unit price"})}),Object(_.jsx)(C.View,{style:[S.tableCell_3,S.alignRight],children:Object(_.jsx)(C.Text,{style:S.subtitle2,children:"Total"})})]})}),Object(_.jsxs)(C.View,{style:S.tableBody,children:[n.map((function(e,t){return Object(_.jsxs)(C.View,{style:S.tableRow,children:[Object(_.jsx)(C.View,{style:S.tableCell_1,children:Object(_.jsx)(C.Text,{children:t+1})}),Object(_.jsxs)(C.View,{style:S.tableCell_2,children:[Object(_.jsx)(C.Text,{style:S.subtitle2,children:e.title}),Object(_.jsx)(C.Text,{children:e.description})]}),Object(_.jsx)(C.View,{style:S.tableCell_3,children:Object(_.jsx)(C.Text,{children:e.qty})}),Object(_.jsx)(C.View,{style:S.tableCell_3,children:Object(_.jsx)(C.Text,{children:e.price})}),Object(_.jsx)(C.View,{style:[S.tableCell_3,S.alignRight],children:Object(_.jsx)(C.Text,{children:Object(f.a)(e.price*e.qty)})})]},e.id)})),Object(_.jsxs)(C.View,{style:[S.tableRow,S.noBorder],children:[Object(_.jsx)(C.View,{style:S.tableCell_1}),Object(_.jsx)(C.View,{style:S.tableCell_2}),Object(_.jsx)(C.View,{style:S.tableCell_3}),Object(_.jsx)(C.View,{style:S.tableCell_3,children:Object(_.jsx)(C.Text,{children:"Subtotal"})}),Object(_.jsx)(C.View,{style:[S.tableCell_3,S.alignRight],children:Object(_.jsx)(C.Text,{children:Object(f.a)(o)})})]}),Object(_.jsxs)(C.View,{style:[S.tableRow,S.noBorder],children:[Object(_.jsx)(C.View,{style:S.tableCell_1}),Object(_.jsx)(C.View,{style:S.tableCell_2}),Object(_.jsx)(C.View,{style:S.tableCell_3}),Object(_.jsx)(C.View,{style:S.tableCell_3,children:Object(_.jsx)(C.Text,{children:"Discount"})}),Object(_.jsx)(C.View,{style:[S.tableCell_3,S.alignRight],children:Object(_.jsx)(C.Text,{children:Object(f.a)(-r)})})]}),Object(_.jsxs)(C.View,{style:[S.tableRow,S.noBorder],children:[Object(_.jsx)(C.View,{style:S.tableCell_1}),Object(_.jsx)(C.View,{style:S.tableCell_2}),Object(_.jsx)(C.View,{style:S.tableCell_3}),Object(_.jsx)(C.View,{style:S.tableCell_3,children:Object(_.jsx)(C.Text,{children:"Taxes"})}),Object(_.jsx)(C.View,{style:[S.tableCell_3,S.alignRight],children:Object(_.jsx)(C.Text,{children:Object(f.a)(c)})})]}),Object(_.jsxs)(C.View,{style:[S.tableRow,S.noBorder],children:[Object(_.jsx)(C.View,{style:S.tableCell_1}),Object(_.jsx)(C.View,{style:S.tableCell_2}),Object(_.jsx)(C.View,{style:S.tableCell_3}),Object(_.jsx)(C.View,{style:S.tableCell_3,children:Object(_.jsx)(C.Text,{style:S.h4,children:"Total"})}),Object(_.jsx)(C.View,{style:[S.tableCell_3,S.alignRight],children:Object(_.jsx)(C.Text,{style:S.h4,children:Object(f.a)(b)})})]})]})]}),Object(_.jsxs)(C.View,{style:[S.gridContainer,S.footer],children:[Object(_.jsxs)(C.View,{style:S.col8,children:[Object(_.jsx)(C.Text,{style:S.subtitle2,children:"NOTES"}),Object(_.jsx)(C.Text,{children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),Object(_.jsxs)(C.View,{style:[S.col4,S.alignRight],children:[Object(_.jsx)(C.Text,{style:S.subtitle2,children:"Have a Question?"}),Object(_.jsx)(C.Text,{children:"support@abcapp.com"})]})]})]})})}var R=i(17),k=i(26),D=i(1),B=i(235),F=i.n(B),z=i(140),N=i.n(z),W=i(2913),E=i.n(W),A=i(3247),q=i.n(A),P=i(383),H=i(3205),Q=i(2761),G=i(2743),L=i(2711),U=i(36),J=i(161);function $(e){var t=e.invoice,i=Object(D.useState)(!1),n=Object(R.a)(i,2),c=n[0],l=n[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(P.a,{mb:5,direction:"row",justifyContent:"flex-end",spacing:1.5,children:[Object(_.jsx)(U.d,{color:"error",size:"small",variant:"contained",endIcon:Object(_.jsx)(k.Icon,{icon:E.a}),children:"Share"}),Object(_.jsx)(U.d,{color:"info",size:"small",variant:"contained",onClick:function(){l(!0)},endIcon:Object(_.jsx)(k.Icon,{icon:F.a}),sx:{mx:1},children:"Preview"}),Object(_.jsx)(C.PDFDownloadLink,{document:Object(_.jsx)(I,{invoice:t}),fileName:"INVOICE-".concat(t.id),style:{textDecoration:"none"},children:function(e){var t=e.loading;return Object(_.jsx)(L.a,{size:"small",loading:t,variant:"contained",loadingPosition:"end",endIcon:Object(_.jsx)(k.Icon,{icon:q.a}),children:"Download"})}})]}),Object(_.jsx)(J.b,{fullScreen:!0,open:c,children:Object(_.jsxs)(d.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(_.jsx)(H.a,{sx:{zIndex:9,padding:"12px !important",boxShadow:function(e){return e.customShadows.z8}},children:Object(_.jsx)(Q.a,{title:"Close",children:Object(_.jsx)(G.a,{color:"inherit",onClick:function(){l(!1)},children:Object(_.jsx)(k.Icon,{icon:N.a})})})}),Object(_.jsx)(d.a,{sx:{flexGrow:1,height:"100%",overflow:"hidden"},children:Object(_.jsx)(C.PDFViewer,{width:"100%",height:"100%",style:{border:"none"},children:Object(_.jsx)(I,{invoice:t})})})]})})]})}var K={id:l.a.datatype.uuid(),taxes:5,discount:10,status:"paid",invoiceFrom:{name:l.a.name.findName(),address:"DieSachbearbeiter Choriner Stra\xdfe 49 10435 Berlin",company:l.a.company.companyName(),email:l.a.internet.email(),phone:l.a.phone.phoneNumberFormat()},invoiceTo:{name:l.a.name.findName(),address:"Keas 69 Str. 15234, Chalandri Athens, Greece",company:l.a.company.companyName(),email:l.a.internet.email(),phone:l.a.phone.phoneNumberFormat()},items:Object(n.a)(Array(3)).map((function(){return{id:l.a.datatype.uuid(),title:l.a.lorem.sentence(),description:l.a.lorem.lines(),qty:l.a.datatype.number({min:1,max:5}),price:l.a.datatype.number({min:4,max:99,precision:.01})}}))},M=Object(r.a)(a.a)((function(e){var t=e.theme;return{"& td":{paddingTop:t.spacing(1),paddingBottom:t.spacing(1)}}}));function X(){var e=Object(s.sum)(K.items.map((function(e){return e.price*e.qty}))),t=e-K.discount+K.taxes;return Object(_.jsx)(w.a,{title:"Ecommerce: Invoice | Minimal-UI",children:Object(_.jsxs)(j.a,{children:[Object(_.jsx)(V.a,{heading:"Invoice Details",links:[{name:"Dashboard",href:p.b.root},{name:"E-Commerce",href:p.b.eCommerce.root},{name:"Invoice"}]}),Object(_.jsx)($,{invoice:K}),Object(_.jsxs)(o.a,{sx:{pt:5,px:5},children:[Object(_.jsxs)(b.a,{container:!0,children:[Object(_.jsx)(b.a,{item:!0,xs:12,sm:6,sx:{mb:5},children:Object(_.jsx)(d.a,{component:"img",alt:"logo",src:"/static/brand/logo_full.svg",sx:{height:48}})}),Object(_.jsx)(b.a,{item:!0,xs:12,sm:6,sx:{mb:5},children:Object(_.jsxs)(d.a,{sx:{textAlign:{sm:"right"}},children:[Object(_.jsx)(v.a,{color:"success",sx:{textTransform:"uppercase",mb:1},children:K.status}),Object(_.jsxs)(x.a,{variant:"h6",children:["INV-",K.id]})]})}),Object(_.jsxs)(b.a,{item:!0,xs:12,sm:6,sx:{mb:5},children:[Object(_.jsx)(x.a,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Invoice from"}),Object(_.jsx)(x.a,{variant:"body2",children:K.invoiceFrom.name}),Object(_.jsx)(x.a,{variant:"body2",children:K.invoiceFrom.address}),Object(_.jsxs)(x.a,{variant:"body2",children:["Phone: ",K.invoiceFrom.phone]})]}),Object(_.jsxs)(b.a,{item:!0,xs:12,sm:6,sx:{mb:5},children:[Object(_.jsx)(x.a,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Invoice to"}),Object(_.jsx)(x.a,{variant:"body2",children:K.invoiceTo.name}),Object(_.jsx)(x.a,{variant:"body2",children:K.invoiceTo.address}),Object(_.jsxs)(x.a,{variant:"body2",children:["Phone: ",K.invoiceTo.phone]})]})]}),Object(_.jsx)(T.a,{children:Object(_.jsx)(h.a,{sx:{minWidth:960},children:Object(_.jsxs)(O.a,{children:[Object(_.jsx)(m.a,{sx:{borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)},"& th":{backgroundColor:"transparent"}},children:Object(_.jsxs)(a.a,{children:[Object(_.jsx)(u.a,{width:40,children:"#"}),Object(_.jsx)(u.a,{align:"left",children:"Description"}),Object(_.jsx)(u.a,{align:"left",children:"Qty"}),Object(_.jsx)(u.a,{align:"right",children:"Unit price"}),Object(_.jsx)(u.a,{align:"right",children:"Total"})]})}),Object(_.jsxs)(y.a,{children:[K.items.map((function(e,t){return Object(_.jsxs)(a.a,{sx:{borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}},children:[Object(_.jsx)(u.a,{children:t+1}),Object(_.jsx)(u.a,{align:"left",children:Object(_.jsxs)(d.a,{sx:{maxWidth:560},children:[Object(_.jsx)(x.a,{variant:"subtitle2",children:e.title}),Object(_.jsx)(x.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:e.description})]})}),Object(_.jsx)(u.a,{align:"left",children:e.qty}),Object(_.jsx)(u.a,{align:"right",children:Object(f.a)(e.price)}),Object(_.jsx)(u.a,{align:"right",children:Object(f.a)(e.price*e.qty)})]},t)})),Object(_.jsxs)(M,{children:[Object(_.jsx)(u.a,{colSpan:3}),Object(_.jsxs)(u.a,{align:"right",children:[Object(_.jsx)(d.a,{sx:{mt:2}}),Object(_.jsx)(x.a,{variant:"body1",children:"Subtotal"})]}),Object(_.jsxs)(u.a,{align:"right",width:120,children:[Object(_.jsx)(d.a,{sx:{mt:2}}),Object(_.jsx)(x.a,{variant:"body1",children:Object(f.a)(e)})]})]}),Object(_.jsxs)(M,{children:[Object(_.jsx)(u.a,{colSpan:3}),Object(_.jsx)(u.a,{align:"right",children:Object(_.jsx)(x.a,{variant:"body1",children:"Discount"})}),Object(_.jsx)(u.a,{align:"right",width:120,children:Object(_.jsx)(x.a,{sx:{color:"error.main"},children:Object(f.a)(-K.discount)})})]}),Object(_.jsxs)(M,{children:[Object(_.jsx)(u.a,{colSpan:3}),Object(_.jsx)(u.a,{align:"right",children:Object(_.jsx)(x.a,{variant:"body1",children:"Taxes"})}),Object(_.jsx)(u.a,{align:"right",width:120,children:Object(_.jsx)(x.a,{variant:"body1",children:Object(f.a)(K.taxes)})})]}),Object(_.jsxs)(M,{children:[Object(_.jsx)(u.a,{colSpan:3}),Object(_.jsx)(u.a,{align:"right",children:Object(_.jsx)(x.a,{variant:"h6",children:"Total"})}),Object(_.jsx)(u.a,{align:"right",width:140,children:Object(_.jsx)(x.a,{variant:"h6",children:Object(f.a)(t)})})]})]})]})})}),Object(_.jsx)(g.a,{sx:{mt:5}}),Object(_.jsxs)(b.a,{container:!0,children:[Object(_.jsxs)(b.a,{item:!0,xs:12,md:9,sx:{py:3},children:[Object(_.jsx)(x.a,{variant:"subtitle2",children:"NOTES"}),Object(_.jsx)(x.a,{variant:"body2",children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),Object(_.jsxs)(b.a,{item:!0,xs:12,md:3,sx:{py:3,textAlign:"right"},children:[Object(_.jsx)(x.a,{variant:"subtitle2",children:"Have a Question?"}),Object(_.jsx)(x.a,{variant:"body2",children:"support@minimals.cc"})]})]})]})]})})}}}]);
//# sourceMappingURL=96.013064da.chunk.js.map