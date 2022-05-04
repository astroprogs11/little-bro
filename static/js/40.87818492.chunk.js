"use strict";(self.webpackChunklittle_bro=self.webpackChunklittle_bro||[]).push([[40],{21977:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(29439),i=t(57621),a=t(10889),l=t(72791),o=t(60393),s=t(10600),c=t(80184);function u(e){var n=e.levelLow,t=e.levelHigh,u=e.setLow,d=e.setHigh,f=e.setBoth,h=e.dark,x=void 0!==h&&h,v=e.disabled,Z=void 0!==v&&v,p=e.showLevelText,j=void 0!==p&&p,m=(0,l.useState)(n),g=(0,r.Z)(m,2),y=g[0],b=g[1],k=(0,l.useState)(t),C=(0,r.Z)(k,2),w=C[0],S=C[1],P=(0,l.useCallback)((function(e,n){var t=(0,r.Z)(n,2),i=t[0],a=t[1];b(i),S(a)}),[b,S]);return(0,l.useEffect)((function(){return b(n)}),[b,n]),(0,l.useEffect)((function(){return S(t)}),[S,t]),(0,c.jsxs)(i.Z,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:x?"contentDark.main":"contentLight.main"},children:[(0,c.jsx)(s.ZP,{value:y,onChange:function(e){return u((0,o.uZ)(e,0,t))},sx:{pl:2,width:j?100:50},inputProps:{sx:{textAlign:"center"}},startAdornment:j?"Level: ":void 0,disabled:Z}),(0,c.jsx)(a.ZP,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:function(){return"Arifact Level Range"},value:[y,w],onChange:P,onChangeCommitted:function(e,n){return f(n[0],n[1])},valueLabelDisplay:"auto",min:0,max:20,step:1,marks:!0,disabled:Z}),(0,c.jsx)(s.ZP,{value:w,onChange:function(e){return d((0,o.uZ)(e,n,20))},sx:{px:1,width:50},inputProps:{sx:{textAlign:"center"}},disabled:Z})]})}},36944:function(e,n,t){t.d(n,{Z:function(){return R},d:function(){return G}});var r,i,a,l,o=t(1413),s=t(30168),c=t(45987),u=t(63204),d=t(49670),f=t(14361),h=t(23786),x=t(57064),v=t(20890),Z=t(94721),p=t(47047),j=t(52791),m=t(72791),g=t(22020),y=t(947),b=t(56928),k=t(42320),C=t(50921),w=t(46956),S=t(33890),P=t(2380),E=t(80184),A=["value","onChange","unSelectText","unSelectIcon","inventory","noUnselect","filter"];function R(e){var n,t=e.value,f=e.onChange,p=e.unSelectText,j=e.unSelectIcon,w=e.inventory,R=void 0!==w&&w,M=e.noUnselect,I=void 0!==M&&M,K=e.filter,_=void 0===K?function(){return!0}:K,F=(0,c.Z)(e,A),D=(0,g.$)("ui").t,L=(0,m.useContext)(b.t).database,N=(0,k.Z)(y.ZP.getAll,[]),T=(0,k.Z)(y.ZP.get(t),[t]),O=(0,m.useMemo)((function(){return N&&(0,C.zU)(L,N)}),[L,N]),z=L._getCharKeys().filter((function(e){return(null===N||void 0===N?void 0:N[e])&&_(N[e],e)})).sort();return(0,E.jsxs)(S.Z,(0,o.Z)((0,o.Z)({},F),{},{title:null!==(n=null===T||void 0===T?void 0:T.name)&&void 0!==n?n:R?D(r||(r=(0,s.Z)(["inventory"]))):null!==p&&void 0!==p?p:D(i||(i=(0,s.Z)(["unselect"]))),color:t?"success":"primary",startIcon:null!==T&&void 0!==T&&T.thumbImg?(0,E.jsx)(P.Z,{src:T.thumbImgSide}):R?(0,E.jsx)(u.Z,{}):null!==j&&void 0!==j?j:(0,E.jsx)(d.Z,{}),children:[!I&&(R?(0,E.jsxs)(h.Z,{onClick:function(){return f("")},selected:""===t,disabled:""===t,children:[(0,E.jsx)(x.Z,{children:(0,E.jsx)(u.Z,{})}),(0,E.jsx)(v.Z,{variant:"inherit",noWrap:!0,children:D(a||(a=(0,s.Z)(["inventory"])))})]}):(0,E.jsxs)(h.Z,{onClick:function(){return f("")},selected:""===t,disabled:""===t,children:[(0,E.jsx)(x.Z,{children:(0,E.jsx)(d.Z,{})}),(0,E.jsx)(v.Z,{variant:"inherit",noWrap:!0,children:D(l||(l=(0,s.Z)(["unselect"])))})]})),!I&&(0,E.jsx)(Z.Z,{},"div"),!!N&&G(N,z,f,t,O)]}))}function G(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4?arguments[4]:void 0;if(!i)return[];var a=n.filter((0,w.C)({element:"",weaponType:"",favorite:"yes"},i)).map((function(n){return(0,E.jsx)(M,{characterSheets:e,characterKey:n,selectedCharacterKey:r,onChange:t,favorite:!0},n)})),l=n.filter((0,w.C)({element:"",weaponType:"",favorite:"no"},i)).map((function(n){return(0,E.jsx)(M,{characterSheets:e,characterKey:n,selectedCharacterKey:r,onChange:t,favorite:!1},n)}));return a.concat(l)}function M(e){var n,t,r=e.characterSheets,i=e.characterKey,a=e.selectedCharacterKey,l=void 0===a?"":a,o=e.onChange,s=e.favorite;return(0,E.jsxs)(h.Z,{onClick:function(){return o(i)},selected:l===i,disabled:l===i,children:[(0,E.jsx)(x.Z,{children:(0,E.jsx)(P.Z,{src:null===(n=r[i])||void 0===n?void 0:n.thumbImgSide})}),(0,E.jsx)(m.Suspense,{fallback:(0,E.jsx)(p.Z,{variant:"text",width:100}),children:(0,E.jsx)(v.Z,{variant:"inherit",noWrap:!0,children:null===(t=r[i])||void 0===t?void 0:t.name})}),s&&(0,E.jsx)(j.Z,{display:"flex",flexGrow:1}),s&&(0,E.jsx)(f.Z,{sx:{ml:1,mr:-.5}})]},i)}},40020:function(e,n,t){t.d(n,{Z:function(){return d}});var r,i=t(30168),a=t(63204),l=t(20890),o=t(22020),s=t(947),c=t(42320),u=t(80184);function d(e){var n=e.location,t=(0,o.$)("ui").t,d=(0,c.Z)(s.ZP.get(null!==n&&void 0!==n?n:""),[n]);return(0,u.jsx)(l.Z,{component:"span",children:null!==d&&void 0!==d&&d.name?d.nameWIthIcon:(0,u.jsxs)("span",{children:[(0,u.jsx)(a.Z,{sx:{verticalAlign:"text-bottom"}})," ",t(r||(r=(0,i.Z)(["inventory"])))]})})}},2380:function(e,n,t){var r=(0,t(93457).Z)("img")((function(e){var n=e.theme;return{display:"inline-block",width:"auto",height:"2.3em",lineHeight:1,verticalAlign:"text-bottom",marginTop:n.spacing(-3),marginLeft:n.spacing(-1.25),marginRight:n.spacing(-1),marginBottom:n.spacing(-1)}}));n.Z=r},10600:function(e,n,t){t.d(n,{CC:function(){return v},ZP:function(){return Z}});var r=t(29439),i=t(1413),a=t(45987),l=t(66934),o=t(4834),s=t(24518),c=t(72791),u=t(80184),d=["children","disableRipple","disableFocusRipple","disableTouchRipple"],f=["value","onChange","disabled","float"],h=(0,l.ZP)(o.ZP)((function(e){var n=e.theme;return{backgroundColor:n.palette.primary.main,transition:"all 0.5s ease","&:hover":{backgroundColor:n.palette.primary.dark},"&.Mui-focused":{backgroundColor:n.palette.primary.dark},"&.Mui-disabled":{backgroundColor:n.palette.primary.dark}}})),x=(0,l.ZP)(s.Z)((function(e){return{backgroundColor:e.theme.palette.primary.main,padding:0,overflow:"hidden",div:{width:"100%",height:"100%"}}}));function v(e){var n=e.children,t=(e.disableRipple,e.disableFocusRipple,e.disableTouchRipple,(0,a.Z)(e,d));return(0,u.jsx)(x,(0,i.Z)((0,i.Z)({disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},t),{},{children:n}))}function Z(e){var n=e.value,t=void 0===n?0:n,l=e.onChange,o=e.disabled,s=void 0!==o&&o,d=e.float,x=void 0!==d&&d,v=(0,a.Z)(e,f),Z=(0,c.useState)(t),p=(0,r.Z)(Z,2),j=p[0],m=p[1],g=(0,c.useState)(!1),y=(0,r.Z)(g,2),b=y[0],k=y[1],C=(0,c.useMemo)((function(){return x?parseFloat:parseInt}),[x]),w=(0,c.useCallback)((function(){l(j),k(!1)}),[l,j,k]),S=(0,c.useCallback)((function(){k(!0)}),[k]);(0,c.useEffect)((function(){return m(t)}),[t,m]);var P=(0,c.useCallback)((function(e){return m(C(e.target.value)||0)}),[m,C]),E=(0,c.useCallback)((function(e){return"Enter"===e.key&&w()}),[w]);return(0,u.jsx)(h,(0,i.Z)({value:b&&!j?"":j,"aria-label":"custom-input",type:"number",inputProps:{step:x?.1:1},onChange:P,onBlur:w,onFocus:S,disabled:s,onKeyDown:E},v))}},14525:function(e,n,t){t.d(n,{Z:function(){return C},b:function(){return w}});var r=t(29439),i=t(4942),a=t(1413),l=t(53174),o=t(54483),s=t(94294),c=t(39504),u=t(20890),d=t(2199),f=t(23786),h=t(24518),x=t(52791),v=t(72791),Z=t(2693),p=t(26138),j=t(79406),m=t(96106),g=t(71310),y=t(10600),b=t(33890),k=t(80184);function C(e){var n=e.statFilters,t=void 0===n?{}:n,l=e.setStatFilters,o=e.disabled,d=void 0!==o&&o,f=(0,v.useContext)(Z.R).data,h=["atk","hp","def","eleMas","critRate_","critDMG_","heal_","enerRech_"];"catalyst"!==f.get(p.ri.weaponType).value&&h.push("physical_dmg_");var j=f.get(p.ri.charEle).value;h.push("".concat(j,"_dmg_"));var y=h.filter((function(e){return!Object.keys(t).some((function(n){return n===e}))})),b=(0,v.useCallback)((function(e,n){return l((0,a.Z)((0,a.Z)({},t),{},(0,i.Z)({},e,n)))}),[t,l]);return(0,k.jsxs)(x.Z,{children:[(0,k.jsx)(g.Z,{children:(0,k.jsxs)(c.Z,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[(0,k.jsx)(u.Z,{children:"Build Constraints"}),(0,k.jsx)(m.Z,{placement:"top",title:(0,k.jsx)(u.Z,{children:"Constraint the generated builds to conform to some requirements, e.g. Generate builds with at least 140% Energy Recharge."}),children:(0,k.jsx)(s.Z,{})})]})}),(0,k.jsxs)(x.Z,{display:"flex",flexDirection:"column",gap:.5,children:[Object.entries(t).map((function(e){var n=(0,r.Z)(e,2),i=n[0],o=n[1];return(0,k.jsx)(w,{statKey:i,statKeys:y,setFilter:b,disabled:d,value:o,close:function(){delete t[i],l((0,a.Z)({},t))}},i)})),(0,k.jsx)(w,{value:void 0,close:void 0,statKeys:y,setFilter:b,disabled:d})]})]})}function w(e){var n=e.statKey,t=e.statKeys,r=void 0===t?[]:t,i=e.value,a=void 0===i?0:i,s=e.close,c=e.setFilter,u=e.disabled,x=void 0!==u&&u,Z="%"===j.ZP.unit(n),p=(0,v.useCallback)((function(e){return n&&c(n,e)}),[c,n]);return(0,k.jsxs)(d.Z,{sx:{width:"100%"},children:[(0,k.jsx)(b.Z,{title:n?j.ZP.get(n):"New Stat",disabled:x,children:r.map((function(e){return(0,k.jsx)(f.Z,{onClick:function(){null===s||void 0===s||s(),c(e,a)},children:j.ZP.get(e)},e)}))}),(0,k.jsx)(y.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,k.jsx)(y.ZP,{disabled:!n,float:Z,value:a,placeholder:"Min Value",onChange:p,sx:{px:2}})}),!!s&&(0,k.jsx)(h.Z,{color:"error",onClick:s,disabled:x,children:(0,k.jsx)(o.G,{icon:l.I7k})})]})}},20323:function(e,n,t){function r(){return{tcMode:!1}}t.d(n,{c:function(){return r}})},72838:function(e,n,t){t.d(n,{Z:function(){return W},N:function(){return $}});var r,i,a,l=t(30168),o=t(29439),s=t(53174),c=t(54483),u=t(40117),d=t(62002),f=t(20890),h=t(47047),x=t(68870),v=t(13400),Z=t(81918),p=t(39504),j=t(72363),m=t(61889),g=t(2199),y=t(24518),b=t(18455),k=t(72791),C=t(22020),w=t(95614),S=t(96106),P=t(71310),E=t(36944),A=t(40020),R=t(91702),G=t(25617),M=t(10157),I=t(75545),K=t(19272),_=t(31148),F=t(56928),D=t(79406),L=t(63372),N=t(42320),T=t(50765),O=t(60393),z=t(46797),B=t(44217),U=t(80184),V=(0,k.lazy)((function(){return Promise.all([t.e(872),t.e(731),t.e(292)]).then(t.bind(t,29292))})),q=new Set(T.L);function W(e){var n,t,T,O,W=e.artifactId,$=e.artifactObj,Q=e.onDelete,X=e.mainStatAssumptionLevel,J=void 0===X?0:X,Y=e.effFilter,ee=void 0===Y?q:Y,ne=e.probabilityFilter,te=e.disableEditSetSlot,re=void 0!==te&&te,ie=(0,C.$)(["artifact"]).t,ae=(0,k.useContext)(F.t).database,le=(0,L.Z)(W),oe=(0,N.Z)(_.y.get(null===(n=null!==$&&void 0!==$?$:le)||void 0===n?void 0:n.setKey),[$,le]),se=!$,ce=(0,k.useState)(!1),ue=(0,o.Z)(ce,2),de=ue[0],fe=ue[1],he=(0,k.useCallback)((function(){return fe(!1)}),[fe]),xe=(0,k.useCallback)((function(){return se&&fe(!0)}),[se,fe]),ve=null!==$&&void 0!==$?$:le;if(!ve)return null;var Ze=ve.id,pe=ve.lock,je=ve.slotKey,me=ve.rarity,ge=ve.level,ye=ve.mainStatKey,be=ve.substats,ke=ve.exclude,Ce=ve.location,we=void 0===Ce?"":Ce,Se=Math.max(Math.min(J,4*me),ge),Pe=D.ZP.unit(ye),Ee="roll"+(Math.floor(Math.max(ge,0)/4)+1),Ae=K.Z.getArtifactEfficiency(ve,ee),Re=Ae.currentEfficiency,Ge=Ae.maxEfficiency,Me=0!==Ge,Ie=(null===oe||void 0===oe?void 0:oe.getSlotName(je))||"Unknown Piece Name",Ke=null===oe||void 0===oe?void 0:oe.getSlotDesc(je),_e=Ke&&(0,U.jsx)(S.Z,{placement:"top",title:(0,U.jsx)(f.Z,{children:Ke}),children:(0,U.jsx)("span",{children:(0,U.jsx)(c.G,{icon:s.sqG})})}),Fe=null===oe||void 0===oe?void 0:oe.setEffects,De=oe&&Fe&&(0,U.jsx)(S.Z,{placement:"top",title:(0,U.jsx)("span",{children:Object.keys(Fe).map((function(e){return(0,U.jsxs)("span",{children:[(0,U.jsx)(f.Z,{variant:"h6",children:(0,U.jsx)(G.Z,{color:"success",children:ie("setEffectNum",{setNum:e})})}),(0,U.jsx)(f.Z,{children:oe.setEffectDesc(e)})]},e)}))}),children:(0,U.jsx)("span",{children:(0,U.jsx)(c.G,{icon:s.sqG})})});return(0,U.jsxs)(k.Suspense,{fallback:(0,U.jsx)(h.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:[(0,U.jsx)(k.Suspense,{fallback:!1,children:(0,U.jsx)(V,{artifactIdToEdit:de?W:"",cancelEdit:he,disableEditSetSlot:re})}),(0,U.jsxs)(P.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,U.jsxs)(x.Z,{className:"grad-".concat(me,"star"),sx:{position:"relative"},children:[(0,U.jsx)(v.Z,{color:"primary",disabled:!se,onClick:function(){return ae.updateArt({lock:!pe},Ze)},sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:pe?(0,U.jsx)(u.Z,{}):(0,U.jsx)(d.Z,{})}),(0,U.jsxs)(x.Z,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[(0,U.jsxs)(x.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1},children:[(0,U.jsx)(Z.Z,{size:"small",label:(0,U.jsx)("strong",{children:" +".concat(ge)}),color:Ee}),(0,U.jsxs)(f.Z,{sx:{flexGrow:1},children:[Ie," ",_e]})]}),(0,U.jsx)(f.Z,{color:"text.secondary",variant:"body2",children:(0,U.jsx)(w.ZP,{slotKey:je})}),(0,U.jsx)(f.Z,{variant:"h6",color:"".concat(D.ZP.getVariant(ye),".main"),children:(0,U.jsxs)("span",{children:[I.Z[ye]," ",D.ZP.get(ye)]})}),(0,U.jsx)(f.Z,{variant:"h5",children:(0,U.jsx)("strong",{children:(0,U.jsxs)(R.Z,{color:Se!==ge?"warning":void 0,children:[(0,D.qs)(null!==(t=K.Z.mainStatValue(ye,me,Se))&&void 0!==t?t:0,D.ZP.unit(ye)),Pe]})})}),(0,U.jsx)(M.t,{stars:me,colored:!0})]}),(0,U.jsx)(x.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,U.jsx)(x.Z,{component:"img",src:null!==(T=null===oe||void 0===oe?void 0:oe.slotIcons[je])&&void 0!==T?T:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,U.jsxs)(p.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:0},children:[be.map((function(e){return(0,U.jsx)(H,{stat:e,effFilter:ee,rarity:me},e.key)})),(0,U.jsxs)(x.Z,{sx:{display:"flex",my:1},children:[(0,U.jsx)(f.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:ie(r||(r=(0,l.Z)(["editor.curSubEff"])))}),(0,U.jsx)(z.Z,{value:Re,max:900,valid:Me})]}),Re!==Ge&&(0,U.jsxs)(x.Z,{sx:{display:"flex",mb:1},children:[(0,U.jsx)(f.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:ie(i||(i=(0,l.Z)(["editor.maxSubEff"])))}),(0,U.jsx)(z.Z,{value:Ge,max:900,valid:Me})]}),(0,U.jsx)(x.Z,{flexGrow:1}),ne&&(0,U.jsxs)("strong",{children:["Probability: ",(100*(0,B.B)(ve,ne)).toFixed(2),"%"]}),(0,U.jsxs)(f.Z,{color:"success.main",children:[null!==(O=null===oe||void 0===oe?void 0:oe.name)&&void 0!==O?O:"Artifact Set"," ",De]})]}),(0,U.jsx)(j.Z,{children:(0,U.jsxs)(m.ZP,{container:!0,sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[se?(0,U.jsx)(E.Z,{size:"small",inventory:!0,value:we,onChange:function(e){return ae.setArtLocation(W,e)}}):(0,U.jsx)(A.Z,{location:we}),se&&(0,U.jsxs)(g.Z,{children:[(0,U.jsx)(y.Z,{color:"info",onClick:xe,size:"small",children:(0,U.jsx)(c.G,{icon:s.Xcf,className:"fa-fw"})}),(0,U.jsx)(b.Z,{title:(0,U.jsx)(f.Z,{children:ie(a||(a=(0,l.Z)(["excludeArtifactTip"])))}),placement:"top",arrow:!0,children:(0,U.jsx)(y.Z,{onClick:function(){return ae.updateArt({exclude:!ke},Ze)},color:ke?"error":"success",size:"small",children:(0,U.jsx)(c.G,{icon:ke?s.gPx:s.Stf,className:"fa-fw"})})}),!!Q&&(0,U.jsx)(y.Z,{color:"error",size:"small",onClick:function(){return Q(Ze)},disabled:pe,children:(0,U.jsx)(c.G,{icon:s.I7k,className:"fa-fw"})})]})]})})]})]})}function H(e){var n,t,r,i=e.stat,a=e.effFilter,l=e.rarity;if(!i.value)return null;var o=null!==(n=null===(t=i.rolls)||void 0===t?void 0:t.length)&&void 0!==n?n:0,s=i.key?K.Z.maxSubstatValues(i.key):0,c=i.key?K.Z.getSubstatRollData(i.key,l):[],u=7-c.length,d="roll".concat((0,O.uZ)(o,1,6)),h=null!==(r=i.efficiency)&&void 0!==r?r:0,v=(0,O.V2)(.5+h/500*.5),Z=D.ZP.getStr(i.key),p=D.ZP.unit(i.key),j=i.key&&a.has(i.key);return(0,U.jsxs)(x.Z,{display:"flex",gap:1,alignContent:"center",children:[(0,U.jsxs)(f.Z,{sx:{flexGrow:1},color:o?"".concat(d,".main"):"error.main",component:"span",children:[I.Z[i.key]," ",Z,"+".concat((0,D.qs)(i.value,D.ZP.unit(i.key))).concat(p)]}),j&&(0,U.jsx)(x.Z,{display:"flex",gap:.25,height:"1.3em",children:i.rolls.sort().map((function(e,n){return(0,U.jsx)($,{value:100*e/s,color:"roll".concat((0,O.uZ)(u+c.indexOf(e),1,6),".main")},"".concat(n).concat(e))}))}),(0,U.jsx)(f.Z,{sx:{opacity:v,minWidth:40,textAlign:"right"},children:j?"".concat(h.toFixed(),"%"):"-"})]})}function $(e){var n=e.color,t=void 0===n?"red":n,r=e.value,i=void 0===r?50:r;return(0,U.jsx)(x.Z,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:(0,U.jsx)(x.Z,{sx:{width:10,height:"".concat(100-(0,O.uZ)(i,0,100),"%"),bgcolor:"gray"}})})}},46797:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),i=t(25617),a=t(60393),l=t(80184);function o(e){var n=e.value,t=e.max,o=void 0===t?1:t,s=e.valid,c="number"===typeof n?["roll".concat((0,a.uZ)(Math.floor(n/o*10)-4,1,6)),n.toFixed()+"%"]:["secondary",n],u=(0,r.Z)(c,2),d=u[0],f=u[1];return s||(d="error"),(0,l.jsx)(i.Z,{color:d,children:f})}},44217:function(e,n,t){t.d(n,{B:function(){return y}});var r=t(29439),i=t(37762),a=t(4942),l=t(1413),o=t(93433),s=t(60393),c=t(19272),u=t(12354),d=[3,4,6],f={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},h={};function x(e,n,t,r){if(5!==e.length)for(var i=0,c=d;i<c.length;i++){var u=c[i];n[u]>0&&x([].concat((0,o.Z)(e),[u]),(0,l.Z)((0,l.Z)({},n),{},(0,a.Z)({},u,n[u]-u)),t-u,r*n[u]/t)}else(0,s.SR)(h,e,r)}x([0],{3:6,4:20,6:18},44,1),x([3],{3:3,4:20,6:18},41,1),x([4],{3:6,4:16,6:18},40,1),x([6],{3:6,4:20,6:12},38,1);for(var v=Array(6).fill(0).map((function(e,n){for(var t=[1],r=0,i=1;++r<=n;)i*=n-r+1,i/=r,t.push(i);return t})),Z=[[1]],p=function(){var e=Z[Z.length-1],n=Array(e.length+3).fill(0);e.forEach((function(e,t){for(var r=0,i=[0,1,2,3];r<i.length;r++){n[t+i[r]]+=e}})),Z.push(n.map((function(e){return e/4})))};Z.length<6;)p();for(var j=function(){var e=g[m],n=e.reduce((function(e,n){return e+n}));e.forEach((function(e,t,r){r[t]=n,n-=e}))},m=0,g=Z;m<g.length;m++)j();function y(e,n){if(e.rarity<=2)return NaN;var t=e.rarity,o=e.level,x=e.substats,p=(0,l.Z)({},n),j=new Set(Object.keys(p)),m=0,g=e.mainStatKey;if(g in p){var y=4*t;if(u[t][g][y]<p[g])return 0;delete p[g],j.delete(g)}var b,k=(0,i.Z)(x);try{for(k.s();!(b=k.n()).done;){var C=b.value,w=C.key,S=C.value;w?j.has(w)&&(j.delete(w),p[w]>S?p[w]-=S:delete p[w]):m+=1}}catch(D){k.e(D)}finally{k.f()}if(m+=4-x.length,j.size>m||Object.keys(p).length>4)return 0;for(var P=c.Z.rollsRemaining(o,t)-m,E=0,A=Object.entries(p);E<A.length;E++){var R=(0,r.Z)(A[E],2),G=R[0],M=R[1];p[G]=Math.max(Math.ceil(10*M/c.Z.maxSubstatValues(G,t)),1)}var I=0,K=Object.entries(p).map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],a=j.has(t)?1:0,l=Math.ceil(i/10)-a;return I+=l,{target:i,filler:a,minUpgrade:l}})).reverse();if(I>P)return 0;var _=(0,a.Z)({},P,1),F=P-I;return K.forEach((function(e,n){for(var t,i,a,l=e.target,o=e.filler,s=e.minUpgrade,c={},u=s;u<=s+F;u++)for(var d=l-7*(u+o),f=d>0?Z[u+o][d]:1,h=0,x=Object.entries(_);h<x.length;h++){var p,j=(0,r.Z)(x[h],2),m=j[0],g=j[1],y=parseInt(m);if(!(y<u)){var b=(i=u,a=4-n,v[t=y][i]*Math.pow(a-1,t-i)/Math.pow(a,t)),k=y-u;c[k]=(null!==(p=c[k])&&void 0!==p?p:0)+g*f*b}}_=c})),function(e,n,t){var r,a,l=null!==(r=f[e])&&void 0!==r?r:0,o=0,c={3:2,4:5,6:3},u=h[l],x=(0,i.Z)(n);try{for(x.s();!(a=x.n()).done;){var Z=a.value.key;if(Z){var p=f[Z];u=u[p],c[p]-=1}}}catch(D){x.e(D)}finally{x.f()}l&&(c[l]-=1);var j,m={3:0,4:0,6:0},g=(0,i.Z)(t);try{for(g.s();!(j=g.n()).done;){var y=j.value;m[f[y]]+=1}}catch(D){g.e(D)}finally{g.f()}var b=0;(0,s.Q1)(u,[],(function(e){return"number"===typeof e}),(function(e,n){b+=e;var t,r={3:0,4:0,6:0},a=(0,i.Z)(n);try{for(a.s();!(t=a.n()).done;){r[t.value]+=1}}catch(D){a.e(D)}finally{a.f()}var l,s=e,c=(0,i.Z)(d);try{for(c.s();!(l=c.n()).done;){var u=l.value,f=r[u],h=m[u];if(f<h)return;s*=v[f][h]}}catch(D){c.e(D)}finally{c.f()}o+=s}));var k,C=(0,i.Z)(d);try{for(C.s();!(k=C.n()).done;){var w=k.value;o/=v[c[w]][m[w]]}}catch(D){C.e(D)}finally{C.f()}return o/b}(e.mainStatKey,x,j)*Object.values(_).reduce((function(e,n){return e+n}))}},63372:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(29439),i=t(72791),a=t(56928);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,i.useContext)(a.t),t=n.database,l=(0,i.useState)(t._getArt(e)),o=(0,r.Z)(l,2),s=o[0],c=o[1];return(0,i.useEffect)((function(){return c(t._getArt(e))}),[t,e]),(0,i.useEffect)((function(){return e?t.followArt(e,c):void 0}),[e,c,t]),s}}}]);
//# sourceMappingURL=40.87818492.chunk.js.map