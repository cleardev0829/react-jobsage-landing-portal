(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[22],{2551:function(e,a,o){"use strict";o.d(a,"b",(function(){return l})),o.d(a,"c",(function(){return c})),o.d(a,"a",(function(){return i}));var n=o(26),t=o(2586),r=o.n(t);function l(e){return r()(e/100).format("0.0%")}function c(e){return Object(n.replace)(r()(e).format("0.00a"),".00","")}function i(e){return r()(e).format("0.0 b")}},2620:function(e,a,o){"use strict";o.d(a,"a",(function(){return A})),o.d(a,"c",(function(){return D})),o.d(a,"b",(function(){return G}));var n=o(4),t=o(29),r=o(6),l=o(26),c=o(36),i=o(2577),d=o(325),s=o.n(d),b=o(2562),u=o.n(b),p=o(2509),h=o(2498),j=o(7),m=o(22),O=o(2526),x=o(506),f=o(2522),g=o(2521),v=o(2531),y=o(313),S=o(2533),w=o(2534),C=o(3356),N=o(2493),I=o(2528),T=o(2551),P=o(104),R=o(141),B=o(2606),k=o(1),M=Object(j.a)("div")((function(e){var a=e.theme;return Object(r.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:a.spacing(5,1),borderRadius:a.shape.borderRadius,backgroundColor:a.palette.background.neutral,border:"1px dashed ".concat(a.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},a.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function A(e){var a=e.error,o=e.showPreview,r=void 0!==o&&o,d=e.files,b=e.onRemove,j=e.onRemoveAll,A=e.sx,q=Object(t.a)(e,["error","showPreview","files","onRemove","onRemoveAll","sx"]),D=d.length>0,E=Object(i.a)(Object(n.a)({},q)),G=E.getRootProps,W=E.getInputProps,L=E.isDragActive,F=E.isDragReject,z=E.fileRejections,U=function(){return Object(k.jsx)(O.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(m.a)(e.palette.error.main,.08)}},children:z.map((function(e){var a=e.file,o=e.errors,n=a.path,t=a.size;return Object(k.jsxs)(x.a,{sx:{my:1},children:[Object(k.jsxs)(f.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(T.a)(t)]}),o.map((function(e){return Object(k.jsxs)(f.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(k.jsxs)(x.a,{sx:Object(n.a)({width:"100%"},A),children:[Object(k.jsxs)(M,Object(n.a)(Object(n.a)({},G()),{},{sx:Object(n.a)(Object(n.a)({},L&&{opacity:.72}),(F||a)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(k.jsx)("input",Object(n.a)({},W())),Object(k.jsx)(B.d,{sx:{width:220}}),Object(k.jsxs)(x.a,{sx:{p:3,ml:{md:2}},children:[Object(k.jsx)(f.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(k.jsxs)(f.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(k.jsx)(g.a,{underline:"always",children:"browse"}),"\xa0thorough your machine"]})]})]})),z.length>0&&Object(k.jsx)(U,{}),Object(k.jsx)(v.a,{disablePadding:!0,sx:Object(n.a)({},D&&{my:3}),children:Object(k.jsx)(p.a,{children:d.map((function(e){var a=e.name,o=e.size,t=e.preview,i=Object(l.isString)(e)?e:a;return r?Object(k.jsxs)(y.b,Object(n.a)(Object(n.a)({component:h.a.div},R.j),{},{sx:{p:0,m:.5,width:80,height:80,borderRadius:1.5,overflow:"hidden",position:"relative",display:"inline-flex"},children:[Object(k.jsx)(O.a,{variant:"outlined",component:"img",src:Object(l.isString)(e)?e:t,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute"}}),Object(k.jsx)(x.a,{sx:{top:6,right:6,position:"absolute"},children:Object(k.jsx)(P.d,{size:"small",onClick:function(){return b(e)},sx:{p:"2px",color:"common.white",bgcolor:function(e){return Object(m.a)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return Object(m.a)(e.palette.grey[900],.48)}}},children:Object(k.jsx)(c.Icon,{icon:u.a})})})]}),i):Object(k.jsxs)(y.b,Object(n.a)(Object(n.a)({component:h.a.div},R.j),{},{sx:{my:1,py:.75,px:2,borderRadius:1,border:function(e){return"solid 1px ".concat(e.palette.divider)},bgcolor:"background.paper"},children:[Object(k.jsx)(S.a,{children:Object(k.jsx)(c.Icon,{icon:s.a,width:28,height:28})}),Object(k.jsx)(w.a,{primary:Object(l.isString)(e)?e:a,secondary:Object(l.isString)(e)?"":Object(T.a)(o),primaryTypographyProps:{variant:"subtitle2"},secondaryTypographyProps:{variant:"caption"}}),Object(k.jsx)(C.a,{children:Object(k.jsx)(P.d,{edge:"end",size:"small",onClick:function(){return b(e)},children:Object(k.jsx)(c.Icon,{icon:u.a})})})]}),i)}))})}),D&&Object(k.jsxs)(N.a,{direction:"row",justifyContent:"flex-end",children:[Object(k.jsx)(I.a,{onClick:j,sx:{mr:1.5},children:"Remove all"}),Object(k.jsx)(I.a,{variant:"contained",children:"Upload files"})]})]})}var q=Object(j.a)("div")((function(e){var a=e.theme;return Object(r.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:a.spacing(5,0),borderRadius:a.shape.borderRadius,transition:a.transitions.create("padding"),backgroundColor:a.palette.background.neutral,border:"1px dashed ".concat(a.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},a.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function D(e){var a=e.error,o=e.file,r=e.sx,c=Object(t.a)(e,["error","file","sx"]),d=Object(i.a)(Object(n.a)({multiple:!1},c)),s=d.getRootProps,b=d.getInputProps,u=d.isDragActive,p=d.isDragReject,h=d.fileRejections,j=function(){return Object(k.jsx)(O.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(m.a)(e.palette.error.main,.08)}},children:h.map((function(e){var a=e.file,o=e.errors,n=a.path,t=a.size;return Object(k.jsxs)(x.a,{sx:{my:1},children:[Object(k.jsxs)(f.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(T.a)(t)]}),o.map((function(e){return Object(k.jsxs)(f.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(k.jsxs)(x.a,{sx:Object(n.a)({width:"100%"},r),children:[Object(k.jsxs)(q,Object(n.a)(Object(n.a)({},s()),{},{sx:Object(n.a)(Object(n.a)(Object(n.a)({},u&&{opacity:.72}),(p||a)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),o&&{padding:"12% 0"}),children:[Object(k.jsx)("input",Object(n.a)({},b())),Object(k.jsx)(B.d,{sx:{width:220}}),Object(k.jsxs)(x.a,{sx:{p:3,ml:{md:2}},children:[Object(k.jsx)(f.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(k.jsxs)(f.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(k.jsx)(f.a,{variant:"body2",component:"span",sx:{color:"primary.main"},children:"browse"}),"\xa0thorough your machine"]})]}),o&&Object(k.jsx)(x.a,{component:"img",alt:"file preview",src:Object(l.isString)(o)?o:o.preview,sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})]})),h.length>0&&Object(k.jsx)(j,{})]})}o(2686),Object(j.a)("div")((function(e){var a=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:a.spacing(1),border:"1px dashed ".concat(a.palette.grey[50032])}})),Object(j.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),Object(j.a)("div")((function(e){var a=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:a.palette.text.secondary,backgroundColor:a.palette.background.neutral,transition:a.transitions.create("opacity",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));var E=Object(j.a)("div")((function(e){var a=e.theme;return Object(r.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:a.spacing(5,0),borderRadius:a.shape.borderRadius,transition:a.transitions.create("padding"),backgroundColor:a.palette.background.neutral,border:"1px dashed ".concat(a.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},a.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function G(e){var a=e.error,o=e.file,r=e.sx,l=Object(t.a)(e,["error","file","sx"]),c=Object(i.a)(Object(n.a)({multiple:!1},l)),d=c.getRootProps,s=c.getInputProps,b=c.isDragActive,u=c.isDragReject,p=c.fileRejections,h=function(){return Object(k.jsx)(O.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(m.a)(e.palette.error.main,.08)}},children:p.map((function(e){var a=e.file,o=e.errors,n=a.path,t=a.size;return Object(k.jsxs)(x.a,{sx:{my:1},children:[Object(k.jsxs)(f.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(T.a)(t)]}),o.map((function(e){return Object(k.jsxs)(f.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(k.jsxs)(x.a,{sx:Object(n.a)({width:"100%"},r),children:[Object(k.jsx)(f.a,{textAlign:"left",color:"text.secondary",children:"Upload your resume"}),Object(k.jsxs)(E,Object(n.a)(Object(n.a)({},d()),{},{sx:Object(n.a)(Object(n.a)(Object(n.a)({},b&&{opacity:.72}),(u||a)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),o&&{padding:"1 0"}),children:[Object(k.jsx)("input",Object(n.a)({},s())),Object(k.jsx)(x.a,{sx:{p:3,ml:{md:2}},children:Object(k.jsxs)(f.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(k.jsx)(f.a,{variant:"body2",component:"span",sx:{color:"primary.main"},children:"browse"}),"\xa0thorough your machine"]})}),o&&Object(k.jsx)(x.a,{component:"div",sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"},children:Object(k.jsx)(f.a,{variant:"subtitle1",children:o.path})})]})),p.length>0&&Object(k.jsx)(h,{})]})}},2637:function(e,a,o){"use strict";o.d(a,"a",(function(){return O}));var n=o(16),t=o.n(n),r=o(25),l=o(36),c=o(326),i=o.n(c),d=o(323),s=o.n(d),b=(o(324),o(2493)),u=o(2528),p=o(2537),h=o(2522),j=o(77),m=o(1);function O(){var e=Object(j.a)(),a=e.loginWithGoogle,o=e.loginWithFaceBook,n=(e.loginWithTwitter,function(){var e=Object(r.a)(t.a.mark((function e(){return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()),c=function(){var e=Object(r.a)(t.a.mark((function e(){return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(b.a,{direction:"row",spacing:2,children:[Object(m.jsx)(u.a,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:n,children:Object(m.jsx)(l.Icon,{icon:i.a,color:"#DF3E30",height:24})}),Object(m.jsx)(u.a,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:c,children:Object(m.jsx)(l.Icon,{icon:s.a,color:"#1877F2",height:24})})]}),Object(m.jsx)(p.a,{sx:{my:3},children:Object(m.jsx)(h.a,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})})]})}},2638:function(e,a,o){"use strict";a.a=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61"},{code:"AW",label:"Aruba",phone:"297"},{code:"AX",label:"Alland Islands",phone:"358"},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BL",label:"Saint Barthelemy",phone:"590"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BN",label:"Brunei Darussalam",phone:"673"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BV",label:"Bouvet Island",phone:"47"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1"},{code:"CC",label:"Cocos (Keeling) Islands",phone:"61"},{code:"CD",label:"Congo, Democratic Republic of the",phone:"243"},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CG",label:"Congo, Republic of the",phone:"242"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CV",label:"Cape Verde",phone:"238"},{code:"CW",label:"Curacao",phone:"599"},{code:"CX",label:"Christmas Island",phone:"61"},{code:"CY",label:"Cyprus",phone:"357"},{code:"CZ",label:"Czech Republic",phone:"420"},{code:"DE",label:"Germany",phone:"49"},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FK",label:"Falkland Islands (Malvinas)",phone:"500"},{code:"FM",label:"Micronesia, Federated States of",phone:"691"},{code:"FO",label:"Faroe Islands",phone:"298"},{code:"FR",label:"France",phone:"33"},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GF",label:"French Guiana",phone:"594"},{code:"GG",label:"Guernsey",phone:"44"},{code:"GH",label:"Ghana",phone:"233"},{code:"GI",label:"Gibraltar",phone:"350"},{code:"GL",label:"Greenland",phone:"299"},{code:"GM",label:"Gambia",phone:"220"},{code:"GN",label:"Guinea",phone:"224"},{code:"GP",label:"Guadeloupe",phone:"590"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GS",label:"South Georgia and the South Sandwich Islands",phone:"500"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GU",label:"Guam",phone:"1-671"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HM",label:"Heard Island and McDonald Islands",phone:"672"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IM",label:"Isle of Man",phone:"44"},{code:"IN",label:"India",phone:"91"},{code:"IO",label:"British Indian Ocean Territory",phone:"246"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran, Islamic Republic of",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JE",label:"Jersey",phone:"44"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81"},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KI",label:"Kiribati",phone:"686"},{code:"KM",label:"Comoros",phone:"269"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KR",label:"Korea, Republic of",phone:"82"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KY",label:"Cayman Islands",phone:"1-345"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LS",label:"Lesotho",phone:"266"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"MD",label:"Moldova, Republic of",phone:"373"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MF",label:"Saint Martin (French part)",phone:"590"},{code:"MG",label:"Madagascar",phone:"261"},{code:"MH",label:"Marshall Islands",phone:"692"},{code:"MK",label:"Macedonia, the Former Yugoslav Republic of",phone:"389"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MO",label:"Macao",phone:"853"},{code:"MP",label:"Northern Mariana Islands",phone:"1-670"},{code:"MQ",label:"Martinique",phone:"596"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MS",label:"Montserrat",phone:"1-664"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NC",label:"New Caledonia",phone:"687"},{code:"NE",label:"Niger",phone:"227"},{code:"NF",label:"Norfolk Island",phone:"672"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NR",label:"Nauru",phone:"674"},{code:"NU",label:"Niue",phone:"683"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PF",label:"French Polynesia",phone:"689"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PM",label:"Saint Pierre and Miquelon",phone:"508"},{code:"PN",label:"Pitcairn",phone:"870"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PS",label:"Palestine, State of",phone:"970"},{code:"PT",label:"Portugal",phone:"351"},{code:"PW",label:"Palau",phone:"680"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RE",label:"Reunion",phone:"262"},{code:"RO",label:"Romania",phone:"40"},{code:"RS",label:"Serbia",phone:"381"},{code:"RU",label:"Russian Federation",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SB",label:"Solomon Islands",phone:"677"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SH",label:"Saint Helena",phone:"290"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SJ",label:"Svalbard and Jan Mayen",phone:"47"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SX",label:"Sint Maarten (Dutch part)",phone:"1-721"},{code:"SY",label:"Syrian Arab Republic",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TC",label:"Turks and Caicos Islands",phone:"1-649"},{code:"TD",label:"Chad",phone:"235"},{code:"TF",label:"French Southern Territories",phone:"262"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TK",label:"Tokelau",phone:"690"},{code:"TL",label:"Timor-Leste",phone:"670"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TO",label:"Tonga",phone:"676"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TV",label:"Tuvalu",phone:"688"},{code:"TW",label:"Taiwan, Province of China",phone:"886"},{code:"TZ",label:"United Republic of Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"United States",phone:"1"},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VA",label:"Holy See (Vatican City State)",phone:"379"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VG",label:"British Virgin Islands",phone:"1-284"},{code:"VI",label:"US Virgin Islands",phone:"1-340"},{code:"VN",label:"Vietnam",phone:"84"},{code:"VU",label:"Vanuatu",phone:"678"},{code:"WF",label:"Wallis and Futuna",phone:"681"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"YT",label:"Mayotte",phone:"262"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}]},2763:function(e,a,o){"use strict";o.d(a,"c",(function(){return P})),o.d(a,"d",(function(){return R})),o.d(a,"a",(function(){return M})),o.d(a,"b",(function(){return A}));var n=o(4),t=o(16),r=o.n(t),l=o(25),c=o(20),i=o(2561),d=o(0),s=o(36),b=o(201),u=o(2560),p=o(2575),h=o.n(p),j=o(2562),m=o.n(j),O=o(2580),x=o.n(O),f=o(2493),g=o(2504),v=o(2500),y=o(2765),S=o(2519),w=o(3313),C=o(77),N=o(317),I=o(104),T=o(1);function P(){var e=Object(C.a)().employerRegister,a=Object(N.a)(),o=Object(b.b)(),t=o.enqueueSnackbar,p=o.closeSnackbar,j=Object(d.useState)(!1),O=Object(c.a)(j,2),P=O[0],R=O[1],B=i.c().shape({orgName:i.d().min(2,"Too Short!").max(50,"Too Long!").required("Organization name required"),contactName:i.d().min(2,"Too Short!").max(50,"Too Long!").required("Contact name required"),email:i.d().email("Email must be a valid email address").required("Email is required"),password:i.d().required("Password is required")}),k=Object(u.c)({initialValues:{orgName:"",contactName:"",email:"",password:""},validationSchema:B,onSubmit:function(){var o=Object(l.a)(r.a.mark((function o(n,l){var c,i;return r.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=l.setErrors,i=l.setSubmitting,o.prev=1,o.next=4,e(n.email,n.password,n.orgName,n.contactName);case 4:t("Register success",{variant:"success",action:function(e){return Object(T.jsx)(I.d,{size:"small",onClick:function(){return p(e)},children:Object(T.jsx)(s.Icon,{icon:m.a})})}}),a.current&&i(!1),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(1),console.error(o.t0),a.current&&(c({afterSubmit:o.t0.message}),i(!1));case 12:case"end":return o.stop()}}),o,null,[[1,8]])})));return function(e,a){return o.apply(this,arguments)}}()}),M=k.errors,A=k.touched,q=k.handleSubmit,D=k.isSubmitting,E=k.getFieldProps;return Object(T.jsx)(u.b,{value:k,children:Object(T.jsx)(u.a,{autoComplete:"off",noValidate:!0,onSubmit:q,children:Object(T.jsxs)(f.a,{spacing:3,children:[M.afterSubmit&&Object(T.jsx)(g.a,{severity:"error",children:M.afterSubmit}),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,label:"Name of the organization"},E("orgName")),{},{error:Boolean(A.orgName&&M.orgName),helperText:A.orgName&&M.orgName,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,label:"Contact person"},E("contactName")),{},{error:Boolean(A.contactName&&M.contactName),helperText:A.contactName&&M.contactName,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"username",type:"email",label:"Email ID"},E("email")),{},{error:Boolean(A.email&&M.email),helperText:A.email&&M.email,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"current-password",type:P?"text":"password",label:"Password"},E("password")),{},{InputProps:{endAdornment:Object(T.jsx)(y.a,{position:"end",children:Object(T.jsx)(S.a,{edge:"end",onClick:function(){return R((function(e){return!e}))},children:Object(T.jsx)(s.Icon,{icon:P?h.a:x.a})})})},error:Boolean(A.password&&M.password),helperText:A.password&&M.password,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"current-password",type:P?"text":"password",label:"Confirm Password"},E("password")),{},{error:Boolean(A.password&&M.password),helperText:A.password&&M.password,required:!0})),Object(T.jsx)(w.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:D,children:"SUBMIT"})]})})})}function R(){var e=Object(C.a)().employerUpdateProfile,a=Object(N.a)(),o=Object(b.b)(),t=o.enqueueSnackbar,p=o.closeSnackbar,j=Object(d.useState)(!1),O=Object(c.a)(j,2),P=O[0],R=O[1],B=i.c().shape({orgName:i.d().min(2,"Too Short!").max(50,"Too Long!").required("Organization name required"),contactName:i.d().min(2,"Too Short!").max(50,"Too Long!").required("Contact name required"),email:i.d().email("Email must be a valid email address").required("Email is required"),password:i.d().required("Password is required")}),k=Object(u.c)({initialValues:{orgName:"",contactName:"",email:"",password:""},validationSchema:B,onSubmit:function(){var o=Object(l.a)(r.a.mark((function o(n,l){var c,i;return r.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=l.setErrors,i=l.setSubmitting,o.prev=1,o.next=4,e({email:n.email,password:n.password,orgName:n.orgName,contactName:n.contactName});case 4:t("Update success",{variant:"success",action:function(e){return Object(T.jsx)(I.d,{size:"small",onClick:function(){return p(e)},children:Object(T.jsx)(s.Icon,{icon:m.a})})}}),a.current&&i(!1),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(1),console.error(o.t0),a.current&&(c({afterSubmit:o.t0.message}),i(!1));case 12:case"end":return o.stop()}}),o,null,[[1,8]])})));return function(e,a){return o.apply(this,arguments)}}()}),M=k.errors,A=k.touched,q=k.handleSubmit,D=k.isSubmitting,E=k.getFieldProps;return Object(T.jsx)(u.b,{value:k,children:Object(T.jsx)(u.a,{autoComplete:"off",noValidate:!0,onSubmit:q,children:Object(T.jsxs)(f.a,{spacing:3,children:[M.afterSubmit&&Object(T.jsx)(g.a,{severity:"error",children:M.afterSubmit}),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,label:"Name of the organization"},E("orgName")),{},{error:Boolean(A.orgName&&M.orgName),helperText:A.orgName&&M.orgName,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,label:"Contact person"},E("contactName")),{},{error:Boolean(A.contactName&&M.contactName),helperText:A.contactName&&M.contactName,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"username",type:"email",label:"Email ID"},E("email")),{},{error:Boolean(A.email&&M.email),helperText:A.email&&M.email,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"current-password",type:P?"text":"password",label:"Password"},E("password")),{},{InputProps:{endAdornment:Object(T.jsx)(y.a,{position:"end",children:Object(T.jsx)(S.a,{edge:"end",onClick:function(){return R((function(e){return!e}))},children:Object(T.jsx)(s.Icon,{icon:P?h.a:x.a})})})},error:Boolean(A.password&&M.password),helperText:A.password&&M.password,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"current-password",type:P?"text":"password",label:"Confirm Password"},E("password")),{},{error:Boolean(A.password&&M.password),helperText:A.password&&M.password,required:!0})),Object(T.jsx)(w.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:D,children:"UPDATE"})]})})})}var B=o(2638),k=o(2620);function M(){var e=Object(C.a)().candidateRegister,a=Object(N.a)(),o=Object(b.b)(),t=o.enqueueSnackbar,p=o.closeSnackbar,j=Object(d.useState)(!1),O=Object(c.a)(j,2),P=O[0],R=O[1],M=Object(d.useState)(null),A=Object(c.a)(M,2),q=A[0],D=A[1],E=i.c().shape({fullname:i.d().min(2,"Too Short!").max(50,"Too Long!").required("Full Name required"),email:i.d().email("Email must be a valid email address").required("Email is required"),password:i.d().required("Password is required"),phoneNumber:i.d().required("Phone Number required"),country:i.d().required(" Country required"),job:i.d().required("Desired Job required")}),G=Object(u.c)({initialValues:{fullname:"",email:"",password:"",phoneNumber:"",country:"",job:""},validationSchema:E,onSubmit:function(){var o=Object(l.a)(r.a.mark((function o(n,l){var c,i;return r.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=l.setErrors,i=l.setSubmitting,o.prev=1,o.next=4,e(n.fullname,n.email,n.password,n.phoneNumber,n.country,n.job,q);case 4:t("Register success",{variant:"success",action:function(e){return Object(T.jsx)(I.d,{size:"small",onClick:function(){return p(e)},children:Object(T.jsx)(s.Icon,{icon:m.a})})}}),a.current&&i(!1),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(1),console.error(o.t0),a.current&&(c({afterSubmit:o.t0.message}),i(!1));case 12:case"end":return o.stop()}}),o,null,[[1,8]])})));return function(e,a){return o.apply(this,arguments)}}()}),W=G.errors,L=G.touched,F=G.handleSubmit,z=G.isSubmitting,U=G.getFieldProps,K=Object(d.useCallback)((function(e){var a=e[0];a&&D(Object(n.a)(Object(n.a)({},a),{},{preview:URL.createObjectURL(a)}))}),[]);return Object(T.jsx)(u.b,{value:G,children:Object(T.jsx)(u.a,{autoComplete:"off",noValidate:!0,onSubmit:F,children:Object(T.jsxs)(f.a,{spacing:3,children:[W.afterSubmit&&Object(T.jsx)(g.a,{severity:"error",children:W.afterSubmit}),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,label:"Enter your Full Name here"},U("fullname")),{},{error:Boolean(L.fullname&&W.fullname),helperText:L.fullname&&W.fullname,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"email",type:"email",label:"Enter your Active Email ID here"},U("email")),{},{error:Boolean(L.email&&W.email),helperText:L.email&&W.email,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"current-password",type:P?"text":"password",label:"Enter your Password"},U("password")),{},{InputProps:{endAdornment:Object(T.jsx)(y.a,{position:"end",children:Object(T.jsx)(S.a,{edge:"end",onClick:function(){return R((function(e){return!e}))},children:Object(T.jsx)(s.Icon,{icon:P?h.a:x.a})})})},error:Boolean(L.password&&W.password),helperText:L.password&&W.password,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,type:"phone",label:"Where recruiters can contact you"},U("phoneNumber")),{},{error:Boolean(L.phoneNumber&&W.phoneNumber),helperText:L.phoneNumber&&W.phoneNumber,required:!0})),Object(T.jsxs)(v.a,Object(n.a)(Object(n.a)({select:!0,fullWidth:!0,label:"Tell us about your country of residence",placeholder:"Country"},U("country")),{},{SelectProps:{native:!0},error:Boolean(L.country&&W.country),helperText:L.country&&W.country,required:!0,children:[Object(T.jsx)("option",{value:""}),B.a.map((function(e){return Object(T.jsx)("option",{value:e.label,children:e.label},e.code)}))]})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"job",type:"text",label:"Please put in your Desired Job Preference"},U("job")),{},{error:Boolean(L.job&&W.job),helperText:L.job&&W.job,required:!0})),Object(T.jsx)(k.b,{file:q,onDrop:K}),Object(T.jsx)(w.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:z,children:"SUBMIT"})]})})})}function A(){var e=Object(C.a)().candidateUpdateProfile,a=Object(N.a)(),o=Object(b.b)(),t=o.enqueueSnackbar,p=o.closeSnackbar,j=Object(d.useState)(!1),O=Object(c.a)(j,2),P=O[0],R=O[1],M=Object(d.useState)(null),A=Object(c.a)(M,2),q=A[0],D=A[1],E=i.c().shape({fullname:i.d().min(2,"Too Short!").max(50,"Too Long!").required("Full Name required"),email:i.d().email("Email must be a valid email address").required("Email is required"),password:i.d().required("Password is required"),phoneNumber:i.d().required("Phone Number required"),country:i.d().required(" Country required"),job:i.d().required("Desired Job required")}),G=Object(u.c)({initialValues:{fullname:"",email:"",password:"",phoneNumber:"",country:"",job:""},validationSchema:E,onSubmit:function(){var o=Object(l.a)(r.a.mark((function o(n,l){var c,i;return r.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=l.setErrors,i=l.setSubmitting,o.prev=1,o.next=4,e({fullname:n.fullname,email:n.email,password:n.password,phoneNumber:n.phoneNumber,country:n.country,job:n.job,resume:q});case 4:t("Update success",{variant:"success",action:function(e){return Object(T.jsx)(I.d,{size:"small",onClick:function(){return p(e)},children:Object(T.jsx)(s.Icon,{icon:m.a})})}}),a.current&&i(!1),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(1),console.error(o.t0),a.current&&(c({afterSubmit:o.t0.message}),i(!1));case 12:case"end":return o.stop()}}),o,null,[[1,8]])})));return function(e,a){return o.apply(this,arguments)}}()}),W=G.errors,L=G.touched,F=G.handleSubmit,z=G.isSubmitting,U=G.getFieldProps,K=Object(d.useCallback)((function(e){var a=e[0];a&&D(Object(n.a)(Object(n.a)({},a),{},{preview:URL.createObjectURL(a)}))}),[]);return Object(T.jsx)(u.b,{value:G,children:Object(T.jsx)(u.a,{autoComplete:"off",noValidate:!0,onSubmit:F,children:Object(T.jsxs)(f.a,{spacing:3,children:[W.afterSubmit&&Object(T.jsx)(g.a,{severity:"error",children:W.afterSubmit}),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,label:"Enter your Full Name here"},U("fullname")),{},{error:Boolean(L.fullname&&W.fullname),helperText:L.fullname&&W.fullname,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"email",type:"email",label:"Enter your Active Email ID here"},U("email")),{},{error:Boolean(L.email&&W.email),helperText:L.email&&W.email,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"current-password",type:P?"text":"password",label:"Enter your Password"},U("password")),{},{InputProps:{endAdornment:Object(T.jsx)(y.a,{position:"end",children:Object(T.jsx)(S.a,{edge:"end",onClick:function(){return R((function(e){return!e}))},children:Object(T.jsx)(s.Icon,{icon:P?h.a:x.a})})})},error:Boolean(L.password&&W.password),helperText:L.password&&W.password,required:!0})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,type:"phone",label:"Where recruiters can contact you"},U("phoneNumber")),{},{error:Boolean(L.phoneNumber&&W.phoneNumber),helperText:L.phoneNumber&&W.phoneNumber,required:!0})),Object(T.jsxs)(v.a,Object(n.a)(Object(n.a)({select:!0,fullWidth:!0,label:"Tell us about your country of residence",placeholder:"Country"},U("country")),{},{SelectProps:{native:!0},error:Boolean(L.country&&W.country),helperText:L.country&&W.country,required:!0,children:[Object(T.jsx)("option",{value:""}),B.a.map((function(e){return Object(T.jsx)("option",{value:e.label,children:e.label},e.code)}))]})),Object(T.jsx)(v.a,Object(n.a)(Object(n.a)({fullWidth:!0,autoComplete:"job",type:"text",label:"Please put in your Desired Job Preference"},U("job")),{},{error:Boolean(L.job&&W.job),helperText:L.job&&W.job,required:!0})),Object(T.jsx)(k.b,{file:q,onDrop:K}),Object(T.jsx)(w.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:z,children:"UPDATE"})]})})})}},3316:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return f}));var n=o(6),t=o(37),r=o(7),l=o(2541),c=o(2526),i=o(2493),d=o(2522),s=o(2521),b=o(77),u=o(44),p=o(2549),h=o(2763),j=(o(2637),o(92)),m=o(1),O=Object(r.a)(p.a)((function(e){var a=e.theme;return Object(n.a)({},a.breakpoints.up("md"),{display:"flex"})})),x=Object(r.a)("div")((function(e){return{width:800,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0),textAlign:"center"}}));function f(){var e=Object(b.a)().isAuthenticated;return Object(m.jsx)(O,{title:"Register | Minimal-UI",children:Object(m.jsx)(l.a,{children:Object(m.jsx)(x,{children:Object(m.jsxs)(c.a,{sx:{py:3,px:16,width:"100%",borderRadius:2,zIndex:function(e){return e.zIndex.modal},boxShadow:function(e){return e.customShadows.z20}},children:[Object(m.jsx)(i.a,{direction:"column",alignItems:"center",spacing:2,sx:{mb:4},children:Object(m.jsx)(t.b,{to:"/",children:Object(m.jsx)(j.a,{})})}),e?Object(m.jsx)(h.b,{}):Object(m.jsx)(h.a,{}),!e&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(d.a,{variant:"subtitle2",sx:{mt:3,textAlign:"center"},color:"text.secondary",children:[Object(m.jsx)("span",{style:{fontWeight:500},children:"Already have an account?\xa0"}),Object(m.jsx)(s.a,{to:u.a.candidateLogin,component:t.b,color:"secondary",children:Object(m.jsx)("span",{style:{fontWeight:600},children:"Login"})})]}),Object(m.jsx)(d.a,{variant:"body2",align:"center",color:"text.secondary",sx:{mt:3},children:Object(m.jsx)("span",{style:{fontWeight:500},children:"by clicking submit and joining us, you agree to the terms and conditions & Privacy policy of IRekommend"})})]})]})})})})}}}]);
//# sourceMappingURL=22.f5de81e8.chunk.js.map