(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[121],{3435:function(e,a,o){"use strict";o.d(a,"b",(function(){return w})),o.d(a,"a",(function(){return P}));var l=o(3),n=o(16),c=o.n(n),r=o(25),t=o(17),d=o(124),i=o(1),b=o(26),h=o(123),p=o(122),s=o(235),u=o.n(s),m=o(140),j=o.n(m),S=o(242),O=o.n(S),f=o(383),g=o(2721),x=o(2753),M=o(2758),y=o(2743),C=o(2711),N=o(50),T=o(125),I=o(36),B=o(0);function w(){var e=Object(N.a)().register,a=Object(T.a)(),o=Object(h.b)(),n=o.enqueueSnackbar,s=o.closeSnackbar,m=Object(i.useState)(!1),S=Object(t.a)(m,2),w=S[0],A=S[1],v=d.e().shape({firstName:d.g().min(2,"Too Short!").max(50,"Too Long!").required("Organization name required"),lastName:d.g().min(2,"Too Short!").max(50,"Too Long!").required("Contact name required"),email:d.g().email("Email must be a valid email address").required("Email is required"),password:d.g().required("Password is required")}),G=Object(p.d)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:v,onSubmit:function(){var o=Object(r.a)(c.a.mark((function o(l,r){var t,d;return c.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=r.setErrors,d=r.setSubmitting,o.prev=1,o.next=4,e(l.email,l.password,l.firstName,l.lastName);case 4:n("Register success",{variant:"success",action:function(e){return Object(B.jsx)(I.k,{size:"small",onClick:function(){return s(e)},children:Object(B.jsx)(b.Icon,{icon:j.a})})}}),a.current&&d(!1),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(1),console.error(o.t0),a.current&&(t({afterSubmit:o.t0.message}),d(!1));case 12:case"end":return o.stop()}}),o,null,[[1,8]])})));return function(e,a){return o.apply(this,arguments)}}()}),P=G.errors,R=G.touched,E=G.handleSubmit,L=G.isSubmitting,k=G.getFieldProps;return Object(B.jsx)(p.b,{value:G,children:Object(B.jsx)(p.a,{autoComplete:"off",noValidate:!0,onSubmit:E,children:Object(B.jsxs)(f.a,{spacing:3,children:[P.afterSubmit&&Object(B.jsx)(g.a,{severity:"error",children:P.afterSubmit}),Object(B.jsx)(x.a,Object(l.a)(Object(l.a)({fullWidth:!0,label:"Name of the organization"},k("firstName")),{},{error:Boolean(R.firstName&&P.firstName),helperText:R.firstName&&P.firstName,required:!0})),Object(B.jsx)(x.a,Object(l.a)(Object(l.a)({fullWidth:!0,label:"Contact person"},k("lastName")),{},{error:Boolean(R.lastName&&P.lastName),helperText:R.lastName&&P.lastName,required:!0})),Object(B.jsx)(x.a,Object(l.a)(Object(l.a)({fullWidth:!0,autoComplete:"username",type:"email",label:"Email ID"},k("email")),{},{error:Boolean(R.email&&P.email),helperText:R.email&&P.email,required:!0})),Object(B.jsx)(x.a,Object(l.a)(Object(l.a)({fullWidth:!0,autoComplete:"current-password",type:w?"text":"password",label:"Password"},k("password")),{},{InputProps:{endAdornment:Object(B.jsx)(M.a,{position:"end",children:Object(B.jsx)(y.a,{edge:"end",onClick:function(){return A((function(e){return!e}))},children:Object(B.jsx)(b.Icon,{icon:w?u.a:O.a})})})},error:Boolean(R.password&&P.password),helperText:R.password&&P.password,required:!0})),Object(B.jsx)(x.a,Object(l.a)(Object(l.a)({fullWidth:!0,autoComplete:"current-password",type:w?"text":"password",label:"Confirm Password"},k("password")),{},{error:Boolean(R.password&&P.password),helperText:R.password&&P.password,required:!0})),Object(B.jsx)(C.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:L,children:"SUBMIT"})]})})})}var A=o(2763),v=o(2723),G=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61"},{code:"AW",label:"Aruba",phone:"297"},{code:"AX",label:"Alland Islands",phone:"358"},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BL",label:"Saint Barthelemy",phone:"590"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BN",label:"Brunei Darussalam",phone:"673"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BV",label:"Bouvet Island",phone:"47"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1"},{code:"CC",label:"Cocos (Keeling) Islands",phone:"61"},{code:"CD",label:"Congo, Democratic Republic of the",phone:"243"},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CG",label:"Congo, Republic of the",phone:"242"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CV",label:"Cape Verde",phone:"238"},{code:"CW",label:"Curacao",phone:"599"},{code:"CX",label:"Christmas Island",phone:"61"},{code:"CY",label:"Cyprus",phone:"357"},{code:"CZ",label:"Czech Republic",phone:"420"},{code:"DE",label:"Germany",phone:"49"},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FK",label:"Falkland Islands (Malvinas)",phone:"500"},{code:"FM",label:"Micronesia, Federated States of",phone:"691"},{code:"FO",label:"Faroe Islands",phone:"298"},{code:"FR",label:"France",phone:"33"},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GF",label:"French Guiana",phone:"594"},{code:"GG",label:"Guernsey",phone:"44"},{code:"GH",label:"Ghana",phone:"233"},{code:"GI",label:"Gibraltar",phone:"350"},{code:"GL",label:"Greenland",phone:"299"},{code:"GM",label:"Gambia",phone:"220"},{code:"GN",label:"Guinea",phone:"224"},{code:"GP",label:"Guadeloupe",phone:"590"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GS",label:"South Georgia and the South Sandwich Islands",phone:"500"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GU",label:"Guam",phone:"1-671"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HM",label:"Heard Island and McDonald Islands",phone:"672"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IM",label:"Isle of Man",phone:"44"},{code:"IN",label:"India",phone:"91"},{code:"IO",label:"British Indian Ocean Territory",phone:"246"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran, Islamic Republic of",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JE",label:"Jersey",phone:"44"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81"},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KI",label:"Kiribati",phone:"686"},{code:"KM",label:"Comoros",phone:"269"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KR",label:"Korea, Republic of",phone:"82"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KY",label:"Cayman Islands",phone:"1-345"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LS",label:"Lesotho",phone:"266"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"MD",label:"Moldova, Republic of",phone:"373"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MF",label:"Saint Martin (French part)",phone:"590"},{code:"MG",label:"Madagascar",phone:"261"},{code:"MH",label:"Marshall Islands",phone:"692"},{code:"MK",label:"Macedonia, the Former Yugoslav Republic of",phone:"389"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MO",label:"Macao",phone:"853"},{code:"MP",label:"Northern Mariana Islands",phone:"1-670"},{code:"MQ",label:"Martinique",phone:"596"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MS",label:"Montserrat",phone:"1-664"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NC",label:"New Caledonia",phone:"687"},{code:"NE",label:"Niger",phone:"227"},{code:"NF",label:"Norfolk Island",phone:"672"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NR",label:"Nauru",phone:"674"},{code:"NU",label:"Niue",phone:"683"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PF",label:"French Polynesia",phone:"689"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PM",label:"Saint Pierre and Miquelon",phone:"508"},{code:"PN",label:"Pitcairn",phone:"870"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PS",label:"Palestine, State of",phone:"970"},{code:"PT",label:"Portugal",phone:"351"},{code:"PW",label:"Palau",phone:"680"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RE",label:"Reunion",phone:"262"},{code:"RO",label:"Romania",phone:"40"},{code:"RS",label:"Serbia",phone:"381"},{code:"RU",label:"Russian Federation",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SB",label:"Solomon Islands",phone:"677"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SH",label:"Saint Helena",phone:"290"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SJ",label:"Svalbard and Jan Mayen",phone:"47"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SX",label:"Sint Maarten (Dutch part)",phone:"1-721"},{code:"SY",label:"Syrian Arab Republic",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TC",label:"Turks and Caicos Islands",phone:"1-649"},{code:"TD",label:"Chad",phone:"235"},{code:"TF",label:"French Southern Territories",phone:"262"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TK",label:"Tokelau",phone:"690"},{code:"TL",label:"Timor-Leste",phone:"670"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TO",label:"Tonga",phone:"676"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TV",label:"Tuvalu",phone:"688"},{code:"TW",label:"Taiwan, Province of China",phone:"886"},{code:"TZ",label:"United Republic of Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"United States",phone:"1"},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VA",label:"Holy See (Vatican City State)",phone:"379"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VG",label:"British Virgin Islands",phone:"1-284"},{code:"VI",label:"US Virgin Islands",phone:"1-340"},{code:"VN",label:"Vietnam",phone:"84"},{code:"VU",label:"Vanuatu",phone:"678"},{code:"WF",label:"Wallis and Futuna",phone:"681"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"YT",label:"Mayotte",phone:"262"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}];function P(){var e=Object(N.a)().register,a=Object(T.a)(),o=Object(h.b)(),n=o.enqueueSnackbar,s=o.closeSnackbar,m=Object(i.useState)(!1),S=Object(t.a)(m,2),w=S[0],P=S[1],R=d.e().shape({fullname:d.g().min(2,"Too Short!").max(50,"Too Long!").required("Full Name required"),email:d.g().email("Email must be a valid email address").required("Email is required"),password:d.g().required("Password is required"),phoneNumber:d.g().required("Phone Number required"),country:d.g().required("Phone Number required"),job:d.g().required("Desired Job required")}),E=Object(p.d)({initialValues:{fullname:"",email:"",password:"",phoneNumber:"",country:"",job:""},validationSchema:R,onSubmit:function(){var o=Object(r.a)(c.a.mark((function o(l,r){var t,d;return c.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=r.setErrors,d=r.setSubmitting,o.prev=1,o.next=4,e(l.fullname,l.email,l.password);case 4:n("Register success",{variant:"success",action:function(e){return Object(B.jsx)(I.k,{size:"small",onClick:function(){return s(e)},children:Object(B.jsx)(b.Icon,{icon:j.a})})}}),a.current&&d(!1),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(1),console.error(o.t0),a.current&&(t({afterSubmit:o.t0.message}),d(!1));case 12:case"end":return o.stop()}}),o,null,[[1,8]])})));return function(e,a){return o.apply(this,arguments)}}()}),L=E.errors,k=E.touched,q=E.handleSubmit,F=E.isSubmitting,K=E.getFieldProps;return Object(B.jsx)(p.b,{value:E,children:Object(B.jsx)(p.a,{autoComplete:"off",noValidate:!0,onSubmit:q,children:Object(B.jsxs)(f.a,{spacing:3,children:[L.afterSubmit&&Object(B.jsx)(g.a,{severity:"error",children:L.afterSubmit}),Object(B.jsx)(x.a,Object(l.a)(Object(l.a)({fullWidth:!0,label:"Enter your Full Name here"},K("fullname")),{},{error:Boolean(k.fullname&&L.fullname),helperText:k.fullname&&L.fullname,required:!0})),Object(B.jsx)(x.a,Object(l.a)(Object(l.a)({fullWidth:!0,autoComplete:"email",type:"email",label:"Enter your Active Email ID here"},K("email")),{},{error:Boolean(k.email&&L.email),helperText:k.email&&L.email,required:!0})),Object(B.jsx)(x.a,Object(l.a)(Object(l.a)({fullWidth:!0,autoComplete:"current-password",type:w?"text":"password",label:"Enter your Password"},K("password")),{},{InputProps:{endAdornment:Object(B.jsx)(M.a,{position:"end",children:Object(B.jsx)(y.a,{edge:"end",onClick:function(){return P((function(e){return!e}))},children:Object(B.jsx)(b.Icon,{icon:w?u.a:O.a})})})},error:Boolean(k.password&&L.password),helperText:k.password&&L.password,required:!0})),Object(B.jsx)(x.a,Object(l.a)(Object(l.a)({fullWidth:!0,type:"phone",label:"Where recruiters can contact you"},K("phoneNumber")),{},{error:Boolean(k.phoneNumber&&L.phoneNumber),helperText:k.phoneNumber&&L.phoneNumber,required:!0})),Object(B.jsxs)(x.a,Object(l.a)(Object(l.a)({select:!0,fullWidth:!0,label:"Tell us about your country of residence",placeholder:"Country"},K("country")),{},{SelectProps:{native:!0},error:Boolean(k.country&&L.country),helperText:k.country&&L.country,required:!0,children:[Object(B.jsx)("option",{value:""}),G.map((function(e){return Object(B.jsx)("option",{value:e.label,children:e.label},e.code)}))]})),Object(B.jsx)(A.a,{control:Object(B.jsx)(v.a,{}),label:"Abailability to work"}),Object(B.jsx)(x.a,Object(l.a)(Object(l.a)({fullWidth:!0,autoComplete:"job",type:"text",label:"Please put in your Desired Job Preference"},K("job")),{},{error:Boolean(k.job&&L.job),helperText:k.job&&L.job,required:!0})),Object(B.jsx)(C.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:F,children:"SUBMIT"})]})})})}},4228:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return g}));var l=o(5),n=o(29),c=o(7),r=o(2655),t=o(2654),d=o(383),i=o(228),b=o(609),h=o(50),p=o(19),s=(o(630),o(384)),u=(o(36),o(3435)),m=o(406),j=o(46),S=o(0),O=Object(c.a)(s.a)((function(e){var a=e.theme;return Object(l.a)({},a.breakpoints.up("md"),{display:"flex"})})),f=Object(c.a)("div")((function(e){return{width:800,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0),textAlign:"center"}}));function g(){Object(h.a)().method;return Object(S.jsx)(O,{title:"Register | Minimal-UI",children:Object(S.jsx)(r.a,{children:Object(S.jsx)(f,{children:Object(S.jsxs)(t.a,{sx:{py:3,px:16,width:"100%",borderRadius:2,zIndex:function(e){return e.zIndex.modal},boxShadow:function(e){return e.customShadows.z20}},children:[Object(S.jsx)(d.a,{direction:"column",alignItems:"center",spacing:2,sx:{mb:4},children:Object(S.jsx)(n.b,{to:"/",children:Object(S.jsx)(j.a,{})})}),Object(S.jsx)(m.a,{}),Object(S.jsx)(u.a,{}),Object(S.jsxs)(i.a,{variant:"subtitle2",sx:{mt:3,textAlign:"center"},color:"text.secondary",children:[Object(S.jsx)("span",{style:{fontWeight:500},children:"Already have an account?\xa0"}),Object(S.jsx)(b.a,{to:p.a.candidateLogin,component:n.b,color:"secondary",children:Object(S.jsx)("span",{style:{fontWeight:600},children:"Login"})})]}),Object(S.jsx)(i.a,{variant:"body2",align:"center",color:"text.secondary",sx:{mt:3},children:Object(S.jsx)("span",{style:{fontWeight:500},children:"by clicking submit and joining us, you agree to the terms and conditions & Privacy policy of IRekommend"})})]})})})})}}}]);
//# sourceMappingURL=121.87d6cc36.chunk.js.map