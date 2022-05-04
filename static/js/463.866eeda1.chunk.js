"use strict";(self.webpackChunklittle_bro=self.webpackChunklittle_bro||[]).push([[463],{96106:function(e,n,t){var i=t(4942),o=t(1413),a=t(45987),r=t(66934),l=t(18455),s=t(69293),c=t(80184),d=["className"],u=(0,r.ZP)((function(e){var n=e.className,t=(0,a.Z)(e,d);return(0,c.jsx)(l.Z,(0,o.Z)((0,o.Z)({},t),{},{arrow:!0,classes:{popper:n}}))}))((function(e){var n,t=e.theme;return n={},(0,i.Z)(n,"& .".concat(s.Z.arrow),{color:t.palette.common.black}),(0,i.Z)(n,"& .".concat(s.Z.tooltip),{backgroundColor:t.palette.common.black,maxWidth:500}),n}));n.Z=u},10600:function(e,n,t){t.d(n,{CC:function(){return h},ZP:function(){return v}});var i=t(29439),o=t(1413),a=t(45987),r=t(66934),l=t(4834),s=t(24518),c=t(72791),d=t(80184),u=["children","disableRipple","disableFocusRipple","disableTouchRipple"],x=["value","onChange","disabled","float"],f=(0,r.ZP)(l.ZP)((function(e){var n=e.theme;return{backgroundColor:n.palette.primary.main,transition:"all 0.5s ease","&:hover":{backgroundColor:n.palette.primary.dark},"&.Mui-focused":{backgroundColor:n.palette.primary.dark},"&.Mui-disabled":{backgroundColor:n.palette.primary.dark}}})),p=(0,r.ZP)(s.Z)((function(e){return{backgroundColor:e.theme.palette.primary.main,padding:0,overflow:"hidden",div:{width:"100%",height:"100%"}}}));function h(e){var n=e.children,t=(e.disableRipple,e.disableFocusRipple,e.disableTouchRipple,(0,a.Z)(e,u));return(0,d.jsx)(p,(0,o.Z)((0,o.Z)({disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},t),{},{children:n}))}function v(e){var n=e.value,t=void 0===n?0:n,r=e.onChange,l=e.disabled,s=void 0!==l&&l,u=e.float,p=void 0!==u&&u,h=(0,a.Z)(e,x),v=(0,c.useState)(t),m=(0,i.Z)(v,2),Z=m[0],j=m[1],y=(0,c.useState)(!1),g=(0,i.Z)(y,2),b=g[0],C=g[1],k=(0,c.useMemo)((function(){return p?parseFloat:parseInt}),[p]),w=(0,c.useCallback)((function(){r(Z),C(!1)}),[r,Z,C]),P=(0,c.useCallback)((function(){C(!0)}),[C]);(0,c.useEffect)((function(){return j(t)}),[t,j]);var S=(0,c.useCallback)((function(e){return j(k(e.target.value)||0)}),[j,k]),R=(0,c.useCallback)((function(e){return"Enter"===e.key&&w()}),[w]);return(0,d.jsx)(f,(0,o.Z)({value:b&&!Z?"":Z,"aria-label":"custom-input",type:"number",inputProps:{step:p?.1:1},onChange:S,onBlur:w,onFocus:P,disabled:s,onKeyDown:R},h))}},37503:function(e,n,t){t.d(n,{Z:function(){return R}});var i=t(68870),o=t(39504),a=t(9585),r=t(94721),l=t(15021),s=t(72791),c=t(2693),d=t(60393),u=t(53174),x=t(54483),f=t(20890),p=t(78661),h=t(96106),v=t(3992),m=t(14763),Z=t(29439),j=t(72247),y=t(9912),g=t(24518),b=t(23786),C=t(33890),k=t(25617),w=t(80184);function P(e){var n=e.conditional,t=e.conditionalValue,i=e.disabled,o=void 0!==i&&i,a=(0,s.useContext)(c.R),l=a.character,u=a.characterDispatch,x=(0,s.useCallback)((function(e){var t=(0,d.I8)(l.conditional);e?(0,d.SR)(t,n.path,e):(0,d.uH)(t,n.path),u({conditional:t})}),[n,l,u]);if(1===Object.keys(n.states).length){var f=(0,Z.Z)(Object.entries(n.states)[0],2),p=f[0],h=f[1],v=h.name&&(0,w.jsx)(k.Z,{children:h.name});return(0,w.jsxs)(g.Z,{fullWidth:!0,size:"small",color:t?"success":"primary",onClick:function(){return x(t?void 0:p)},disabled:o,startIcon:t?(0,w.jsx)(j.Z,{}):(0,w.jsx)(y.Z,{}),children:[n.name," ",v]})}var m=t?n.states[t]:void 0,P=(null===m||void 0===m?void 0:m.name)&&(0,w.jsx)(k.Z,{color:m?"primary":"secondary",children:m?m.name:"Not Active"});return(0,w.jsxs)(C.Z,{fullWidth:!0,size:"small",color:t?"success":"primary",title:(0,w.jsxs)("span",{children:[n.name," ",P]}),disabled:o,children:[(0,w.jsx)(b.Z,{onClick:function(){return x()},selected:!m,disabled:!m,children:(0,w.jsx)("span",{children:"Not Active"})}),(0,w.jsx)(r.Z,{}),Object.entries(n.states).map((function(e){var n=(0,Z.Z)(e,2),i=n[0],o=n[1];return(0,w.jsx)(b.Z,{onClick:function(){return x(i)},selected:t===i,disabled:t===i,children:o.name},i)}))]})}function S(e){var n,t,Z=e.conditional,j=e.hideHeader,y=void 0!==j&&j,g=e.hideDesc,b=void 0!==g&&g,C=e.fieldContext,k=(0,s.useContext)(c.R).data;if(!(!Z.canShow||!!(C?k.get((0,p.aT)(Z.canShow,{target:C.data.data[0]})).value:k.get(Z.canShow).value)))return null;var S=k.get(Z.value).value,R=!b&&(0,d.mY)(Z.description,k),T=null!==(n=Z.header)&&void 0!==n?n:{},D=T.icon,W=T.title,I=T.action;D=(0,d.mY)(D,k);var E=S&&(null===(t=Z.states[S])||void 0===t?void 0:t.fields),L=b?W:W&&(0,w.jsxs)("span",{children:[W," ",(0,w.jsx)(h.Z,{placement:"top",title:(0,w.jsx)(f.Z,{children:R}),children:(0,w.jsx)(i.Z,{component:"span",sx:{cursor:"help"},children:(0,w.jsx)(x.G,{icon:u.sqG})})})]});return(0,w.jsxs)(v.Z,{children:[!y&&Z.header&&(0,w.jsx)(a.Z,{avatar:D,title:L,action:I,titleTypographyProps:{variant:"subtitle2"}}),!y&&Z.header&&(0,w.jsx)(r.Z,{}),!!Z.name&&(0,w.jsx)(o.Z,{children:(0,w.jsx)(P,{conditional:Z,conditionalValue:S})}),E&&(0,w.jsx)(m.lD,{sx:{m:0},children:E.map((function(e,n){return(0,w.jsx)(m.ZP,{field:e,fieldContext:C,component:l.ZP},n)}))})]})}function R(e){var n=e.sections,t=e.teamBuffOnly,o=e.hideDesc,a=void 0!==o&&o,r=(0,s.useContext)(c.R).data;if(!n.length)return null;var l=n.map((function(e,n){var i;return e.canShow&&!e.canShow(r)?null:!t||e.teamBuff||null!==(i=e.conditional)&&void 0!==i&&i.teamBuff?t&&e.conditional&&e.conditional.teamBuff&&e.conditional.canShow&&!r.get(e.conditional.canShow).value?null:(0,w.jsx)(T,{section:e,teamBuffOnly:t,hideDesc:a},n):null})).filter((function(e){return e}));return l.length?(0,w.jsx)(i.Z,{display:"flex",flexDirection:"column",gap:1,children:l}):null}function T(e){var n,t,i,u=e.section,x=e.teamBuffOnly,f=e.hideDesc,p=void 0!==f&&f,h=(0,s.useContext)(c.R).data,Z=(0,d.mY)(u.text,h),j=null!==(n=u.fields)&&void 0!==n?n:[],y=null!==(t=u.fieldsHeader)&&void 0!==t?t:{},g=y.icon,b=y.title,C=y.action;return g=(0,d.mY)(g,h),(0,w.jsxs)(w.Fragment,{children:[!x&&Z&&(0,w.jsx)("div",{children:Z}),(!x||u.teamBuff)&&(0,w.jsxs)(v.Z,{children:[x&&Z&&(0,w.jsx)(o.Z,{children:Z}),u.fieldsHeader&&(0,w.jsx)(a.Z,{avatar:g,title:b,action:C,titleTypographyProps:{variant:"subtitle2"}}),u.fieldsHeader&&(0,w.jsx)(r.Z,{}),j.length>0&&(0,w.jsx)(m.lD,{children:null===j||void 0===j||null===(i=j.map)||void 0===i?void 0:i.call(j,(function(e,n){return(0,w.jsx)(m.ZP,{field:e,component:l.ZP},n)}))})]}),!!u.conditional&&(!x||u.conditional.teamBuff)&&(0,w.jsx)(S,{conditional:u.conditional,hideDesc:p})]})}},14763:function(e,n,t){t.d(n,{ZP:function(){return j},JW:function(){return g},lD:function(){return b}});var i=t(53174),o=t(54483),a=t(68870),r=t(20890),l=t(66934),s=t(90493),c=t(72791),d=t(2693),u=t(79406),x=t(60393),f=t(96106),p=t(91702),h=t(75545),v=t(78661),m=t(35893),Z=t(80184);function j(e){var n=e.field,t=e.fieldContext,i=e.component,o=(0,c.useContext)(d.R),a=o.data,r=o.oldData;if(!(0,c.useMemo)((function(){var e,t;return null===(e=null===n||void 0===n||null===(t=n.canShow)||void 0===t?void 0:t.call(n,a))||void 0===e||e}),[n,a]))return null;if("node"in n){var l=t?a.get((0,v.aT)(n.node,{target:t.data.data[0]})):a.get(n.node);if(l.isEmpty)return null;if(r){var s=t?r.get((0,v.aT)(n.node,{target:t.oldData.data[0]})):r.get(n.node),u=s.isEmpty?0:s.value;return(0,Z.jsx)(g,{node:l,oldValue:u,suffix:n.textSuffix,component:i})}return(0,Z.jsx)(g,{node:l,suffix:n.textSuffix,component:i})}return(0,Z.jsx)(y,{field:n,component:i})}function y(e){var n,t=e.field,i=e.component,o=(0,c.useContext)(d.R).data,l=(0,x.mY)(t.value,o),s=(0,x.mY)(t.variant,o),u=t.text&&(0,Z.jsx)("span",{children:t.text}),f=t.textSuffix&&(0,Z.jsx)("span",{children:t.textSuffix});return(0,Z.jsxs)(a.Z,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:i,children:[(0,Z.jsxs)(r.Z,{color:"".concat(s,".main"),sx:{display:"flex",gap:1,alignItems:"center"},children:[u,f]}),(0,Z.jsxs)(r.Z,{children:["number"===typeof l?null===(n=l.toFixed)||void 0===n?void 0:n.call(l,t.fixed):l,t.unit]})]})}function g(e){var n=e.node,t=e.oldValue,l=e.suffix,s=e.component;if(n.isEmpty)return null;l=l&&(0,Z.jsx)("span",{children:l});var c=n.info.key&&h.Z[n.info.key],d=n.info.key?u.ZP.get(n.info.key):"",x=n.info.isTeamBuff,v=n.formula,j="";if(t){var y=n.value-t;j=(0,Z.jsxs)("span",{children:[(0,u.EC)(t,n.unit),y>1e-4||y<-1e-4?(0,Z.jsxs)(p.Z,{color:y>0?"success":"error",children:[" ",y>0?"+":"",(0,u.EC)(y,n.unit)]}):""]})}else j=(0,u.EC)(n.value,n.unit);var g=!!n.formula&&(0,Z.jsx)(f.Z,{placement:"top",title:(0,Z.jsx)(r.Z,{children:v}),children:(0,Z.jsx)(a.Z,{component:"span",sx:{cursor:"help"},children:(0,Z.jsx)(o.G,{icon:i.sph})})});return(0,Z.jsxs)(a.Z,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:s,children:[(0,Z.jsxs)(r.Z,{color:"".concat(n.info.variant,".main"),sx:{display:"flex",gap:1,alignItems:"center"},children:[!!x&&(0,Z.jsx)(m.Z,{}),c,d,l]}),(0,Z.jsxs)(r.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[j,g]})]})}var b=(0,l.ZP)(s.Z)((function(e){var n=e.theme;return{borderRadius:n.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:n.palette.contentDark.main},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:n.palette.contentDarker.main}}}))},2693:function(e,n,t){t.d(n,{R:function(){return i}});var i=(0,t(72791).createContext)({})},74476:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var i=t(93433),o=t(29439),a=t(40117),r=t(62002),l=t(39504),s=t(61889),c=t(68870),d=t(20890),u=t(2199),x=t(24518),f=t(23786),p=t(94721),h=t(9585),v=t(15021),m=t(72791),Z=t(3992),j=t(71310),y=t(36944),g=t(68198),b=t(10600),C=t(37503),k=t(33890),w=t(14763),P=t(9321),S=t(10157),R=t(44361),T=t(947),D=t(2139),W=t(66218),I=t(56928),E=t(2693),L=t(26138),B=t(87234),A=t(42320),F=t(74480),N=t(60393),K=t(38516),M=t(80184);function O(e){var n,t,O=e.weaponId,J=e.footer,H=void 0!==J&&J,Y=e.onClose,G=(0,m.useContext)(E.R).data,V=(0,m.useContext)(I.t).database,_=(0,F.Z)(O),z=null!==_&&void 0!==_?_:{},U=z.key,q=void 0===U?"":U,X=z.level,Q=void 0===X?0:X,$=z.refinement,ee=void 0===$?0:$,ne=z.ascension,te=void 0===ne?0:ne,ie=z.lock,oe=z.location,ae=void 0===oe?"":oe,re=z.id,le=(0,A.Z)(W.ZP.get(q),[q]),se=(0,m.useCallback)((function(e){V.updateWeapon(e,O)}),[O,V]),ce=(0,m.useCallback)((function(e){e=(0,N.uZ)(e,1,90);var n=D.SJ.findIndex((function(n){return e<=n}));se({level:e,ascension:n})}),[se]),de=(0,m.useCallback)((function(){var e=D.SJ.findIndex((function(e){return 90!==Q&&Q===e}));se(te===e?{ascension:te+1}:{ascension:e})}),[se,te,Q]),ue=(0,A.Z)(ae?T.ZP.get(ae):void 0,[ae]),xe=ue?function(e){return e.weaponType===ue.weaponTypeKey}:void 0,fe=ue&&ue.weaponTypeKey,pe=(0,m.useCallback)((function(e){return re&&V.setWeaponLocation(re,e)}),[V,re]),he=(0,m.useCallback)((function(e){return e.weaponTypeKey===(null===le||void 0===le?void 0:le.weaponType)}),[le]),ve=(0,m.useState)(!1),me=(0,o.Z)(ve,2),Ze=me[0],je=me[1],ye=te<2?null===le||void 0===le?void 0:le.img:null===le||void 0===le?void 0:le.imgAwaken;(0,m.useEffect)((function(){if(le&&se&&le.key===(null===_||void 0===_?void 0:_.key)&&le.rarity<=2&&(Q>70||te>4)){var e=(0,o.Z)(D.Xu[0],2),n=e[0],t=e[1];se({level:n,ascension:t})}}),[le,_,se,Q,te]);var ge=(0,m.useMemo)((function(){return le&&_&&(0,B.mP)([le.data,(0,B.v0)(_)])}),[le,_]);return(0,M.jsx)(P.Z,{open:!!O,onClose:Y,containerProps:{maxWidth:"md"},children:(0,M.jsxs)(j.Z,{children:[(0,M.jsx)(R.Z,{show:Ze,onHide:function(){return je(!1)},onSelect:function(e){return se({key:e})},filter:xe,weaponFilter:fe}),(0,M.jsx)(l.Z,{children:le&&ge&&(0,M.jsxs)(s.ZP,{container:!0,spacing:1.5,children:[(0,M.jsx)(s.ZP,{item:!0,xs:12,sm:3,children:(0,M.jsxs)(s.ZP,{container:!0,spacing:1.5,children:[(0,M.jsx)(s.ZP,{item:!0,xs:6,sm:12,children:(0,M.jsx)(c.Z,{component:"img",src:ye,className:"grad-".concat(le.rarity,"star"),sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),(0,M.jsx)(s.ZP,{item:!0,xs:6,sm:12,children:(0,M.jsx)(d.Z,{children:(0,M.jsx)("small",{children:le.description})})})]})}),(0,M.jsxs)(s.ZP,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,M.jsxs)(c.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[(0,M.jsxs)(u.Z,{children:[(0,M.jsx)(x.Z,{onClick:function(){return je(!0)},children:null!==(n=null===le||void 0===le?void 0:le.name)&&void 0!==n?n:"Select a Weapon"}),(null===le||void 0===le?void 0:le.hasRefinement)&&(0,M.jsxs)(k.Z,{title:"Refinement ".concat(ee),children:[(0,M.jsx)(f.Z,{children:"Select Weapon Refinement"}),(0,M.jsx)(p.Z,{}),(0,i.Z)(Array(5).keys()).map((function(e){return(0,M.jsx)(f.Z,{onClick:function(){return se({refinement:e+1})},selected:ee===e+1,disabled:ee===e+1,children:"Refinement ".concat(e+1)},e)}))]})]}),(null===G||void 0===G||null===(t=G.get(L.ri.charKey))||void 0===t?void 0:t.value)&&(0,M.jsx)(K.Z,{weaponTypeKey:le.weaponType,onChangeId:function(e){return V.setWeaponLocation(e,G.get(L.ri.charKey).value)}})]}),(0,M.jsxs)(c.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[(0,M.jsxs)(u.Z,{sx:{bgcolor:function(e){return e.palette.contentLight.main}},children:[(0,M.jsx)(b.CC,{children:(0,M.jsx)(b.ZP,{onChange:ce,value:Q,startAdornment:"Lv. ",inputProps:{min:1,max:90,sx:{textAlign:"center"}},sx:{width:"100%",height:"100%",pl:2}})}),le&&(0,M.jsx)(x.Z,{sx:{pl:1},disabled:!le.ambiguousLevel(Q),onClick:de,children:(0,M.jsxs)("strong",{children:["/ ",D.SJ[te]]})}),le&&(0,M.jsx)(k.Z,{title:"Select Level",children:le.milestoneLevels.map((function(e){var n=(0,o.Z)(e,2),t=n[0],i=n[1],a=t===D.SJ[i]?"Lv. ".concat(t):"Lv. ".concat(t,"/").concat(D.SJ[i]),r=t===Q&&i===te;return(0,M.jsx)(f.Z,{selected:r,disabled:r,onClick:function(){return se({level:t,ascension:i})},children:a},"".concat(t,"/").concat(i))}))})]}),(0,M.jsx)(x.Z,{color:"error",onClick:function(){return re&&V.updateWeapon({lock:!ie},re)},startIcon:ie?(0,M.jsx)(a.Z,{}):(0,M.jsx)(r.Z,{}),children:ie?"Locked":"Unlocked"})]}),(0,M.jsx)(d.Z,{children:(0,M.jsx)(S.t,{stars:le.rarity})}),(0,M.jsx)(d.Z,{variant:"subtitle1",children:(0,M.jsx)("strong",{children:le.passiveName})}),(0,M.jsx)(d.Z,{gutterBottom:!0,children:le.passiveName&&le.passiveDescription(ge.get(L.ri.weapon.refineIndex).value)}),(0,M.jsxs)(c.Z,{display:"flex",flexDirection:"column",gap:1,children:[(0,M.jsxs)(Z.Z,{children:[(0,M.jsx)(h.Z,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),(0,M.jsx)(p.Z,{}),(0,M.jsx)(w.lD,{children:[L.ri.weapon.main,L.ri.weapon.sub,L.ri.weapon.sub2].map((function(e,n){var t=ge.get(e);return t.isEmpty||!t.value?null:(0,M.jsx)(w.JW,{node:t,component:v.ZP},t.info.key)}))})]}),G&&le.document&&(0,M.jsx)(C.Z,{sections:le.document})]})]})]})}),H&&re&&(0,M.jsx)(l.Z,{sx:{py:1},children:(0,M.jsxs)(s.ZP,{container:!0,children:[(0,M.jsx)(s.ZP,{item:!0,flexGrow:1,children:(0,M.jsx)(y.Z,{noUnselect:!0,inventory:!0,value:ae,onChange:pe,filter:he})}),!!Y&&(0,M.jsx)(s.ZP,{item:!0,children:(0,M.jsx)(g.Z,{large:!0,onClick:Y})})]})})]})})}},38516:function(e,n,t){t.d(n,{Z:function(){return g}});var i=t(29439),o=t(97719),a=t(24518),r=t(39504),l=t(61889),s=t(20890),c=t(94721),d=t(72791),u=t(9350),x=t(3992),f=t(68198),p=t(55942),h=t(9321),v=t(66218),m=t(56928),Z=t(42320),j=t(90543),y=t(80184);function g(e){var n=e.onChangeId,t=e.weaponTypeKey,g=(0,d.useContext)(m.t).database,b=(0,d.useState)(!1),C=(0,i.Z)(b,2),k=C[0],w=C[1],P=function(){return w(!1)},S=function(e){n(e),P()},R=(0,Z.Z)(v.ZP.getAll,[]),T=g.weapons.keys.filter((function(e){var n,i=g._getWeapon(e);return!!i&&(!t||t===(null===R||void 0===R||null===(n=R[i.key])||void 0===n?void 0:n.weaponType))}));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.Z,{color:"info",onClick:function(){return w(!0)},startIcon:(0,y.jsx)(o.Z,{}),children:"SWAP WEAPON"}),(0,y.jsx)(h.Z,{open:k,onClose:P,children:(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(r.Z,{sx:{py:1},children:(0,y.jsxs)(l.ZP,{container:!0,children:[(0,y.jsx)(l.ZP,{item:!0,flexGrow:1,children:(0,y.jsxs)(s.Z,{variant:"h6",children:[t?(0,y.jsx)(p.Z,{src:u.Z.weaponTypes[t]}):null," Swap Weapon"]})}),(0,y.jsx)(l.ZP,{item:!0,children:(0,y.jsx)(f.Z,{onClick:P})})]})}),(0,y.jsx)(c.Z,{}),(0,y.jsx)(r.Z,{children:(0,y.jsx)(l.ZP,{container:!0,spacing:1,children:T.map((function(e){return(0,y.jsx)(l.ZP,{item:!0,xs:6,sm:6,md:4,lg:3,children:(0,y.jsx)(j.Z,{weaponId:e,onClick:S})},e)}))})})]})})]})}},19103:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(72791);var o=function(e,n){return i.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}}}]);
//# sourceMappingURL=463.866eeda1.chunk.js.map