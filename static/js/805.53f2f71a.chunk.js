"use strict";(self.webpackChunklittle_bro=self.webpackChunklittle_bro||[]).push([[805],{96106:function(e,t,n){var i=n(4942),r=n(1413),s=n(45987),c=n(66934),l=n(18455),a=n(69293),o=n(80184),u=["className"],d=(0,c.ZP)((function(e){var t=e.className,n=(0,s.Z)(e,u);return(0,o.jsx)(l.Z,(0,r.Z)((0,r.Z)({},n),{},{arrow:!0,classes:{popper:t}}))}))((function(e){var t,n=e.theme;return t={},(0,i.Z)(t,"& .".concat(a.Z.arrow),{color:n.palette.common.black}),(0,i.Z)(t,"& .".concat(a.Z.tooltip),{backgroundColor:n.palette.common.black,maxWidth:500}),t}));t.Z=d},2693:function(e,t,n){n.d(t,{R:function(){return i}});var i=(0,n(72791).createContext)({})},31148:function(e,t,n){n.d(t,{y:function(){return y},u:function(){return p}});var i=n(29439),r=n(93433),s=n(15671),c=n(43144),l=n(55942),a=n(66624),o=n(87234),u=n(24351),d=n(26138),f=n(25617),h=n(80184),x=n.e(159).then(n.bind(n,22159)).then((function(e){return e.default})),Z=function(e,t){return(0,h.jsx)(a.v,{ns:"artifact_".concat(e,"_gen"),key18:t})},j=x.then((function(e){return(0,o.b3)(Object.values(e).map((function(e){return e.data})))})),y=function(){function e(t,n,i){var r=this;(0,s.Z)(this,e),this.sheet=void 0,this.key=void 0,this.data=void 0,this.getSlotName=function(e){return Z(r.key,"pieces.".concat(e,".name"))},this.getSlotDesc=function(e){return Z(r.key,"pieces.".concat(e,".desc"))},this.setEffectDesc=function(e){return Z(r.key,"setEffects.".concat(e))},this.setEffectDocument=function(e){var t;return null===(t=r.sheet.setEffects[e])||void 0===t?void 0:t.document},this.hasEnough=function(e,t){var n;return(null!==(n=t.get(d.qH.artSet[r.key]).value)&&void 0!==n?n:0)>=e},this.sheet=n,this.key=t,this.data=i}return(0,c.Z)(e,[{key:"name",get:function(){return Z(this.key,"setName")}},{key:"defIconSrc",get:function(){var e=this.slots[0];if(this.slotIcons[e])return this.slotIcons[e]}},{key:"defIcon",get:function(){return(0,h.jsx)(l.Z,{src:this.defIconSrc,sx:{fontSize:"1.5em"}})}},{key:"nameWithIcon",get:function(){var e=this.slots[0];return(0,h.jsxs)("span",{children:[(0,h.jsx)(l.Z,{src:this.slotIcons[e]})," ",Z(this.key,"setName")]})}},{key:"nameRaw",get:function(){return this.sheet.name}},{key:"rarity",get:function(){return this.sheet.rarity}},{key:"slots",get:function(){switch(this.key){case"PrayersForDestiny":case"PrayersForIllumination":case"PrayersForWisdom":case"PrayersToSpringtime":return["circlet"];default:return(0,r.Z)(u.eV)}}},{key:"slotIcons",get:function(){return this.sheet.icons}},{key:"setEffects",get:function(){return this.sheet.setEffects}}],[{key:"get",value:function(e){return e?x.then((function(t){return t[e]})):void 0}},{key:"getAll",get:function(){return x}},{key:"getAllData",get:function(){return j}},{key:"setKeysByRarities",value:function(e){var t={};return Object.entries(e).forEach((function(e){var n=(0,i.Z)(e,2),s=n[0],c=n[1],l=Math.max.apply(Math,(0,r.Z)(c.rarity));t[l]?t[l].push(s):t[l]=[s]})),t}},{key:"setEffects",value:function(e,t){var n={};return Object.entries(e).forEach((function(e){var r=(0,i.Z)(e,2),s=r[0],c=r[1],l=Object.keys(c.setEffects).map((function(e){return parseInt(e)})).filter((function(e){return c.hasEnough(e,t)}));l.length&&(n[s]=l)})),n}}]),e}(),p=function(e,t){return{title:e("setName"),icon:(0,h.jsx)(l.Z,{size:2,sx:{m:-1},src:t}),action:(0,h.jsx)(f.Z,{color:"success",children:"4-set"})}}},93091:function(e,t,n){n.r(t),n.d(t,{default:function(){return Re}});var i=n(30168),r=n(29439),s=n(93433),c=n(1413),l=n(53174),a=n(54483),o=n(49670),u=n(68870),d=n(19658),f=n(23060),h=n(39504),x=n(61889),Z=n(24518),j=n(57246),y=n(47047),p=n(20890),m=n(90388),v=n(72791),g=n(16129),b=n(22020),k=n(76899),w=n(43504),P=n(3992),S=n(4942),A=n(94721),C=n(17278),K=n(60393),I=n(68198),E=n(9321),W=n(66624),F=n(80184);function L(){return{artifactPage:!0,buildPage:!0,characterPage:!0}}function G(e){var t=e.pageKey,n=e.text,i=void 0===n?"":n,s=e.modalTitle,c=void 0===s?"":s,o=e.children,u=(0,C.Z)("InfoShown",L),d=(0,r.Z)(u,2),f=d[0],j=d[1],m=f[t],g=(0,v.useCallback)((function(e){return j((0,S.Z)({},t,e))}),[j,t]),b=(0,v.useState)(Array.isArray(i)?(0,K.F_)(i):i),k=(0,r.Z)(b,1)[0],w=function(){return g(!1)};return(0,F.jsxs)(P.Z,{children:[(0,F.jsxs)(x.ZP,{container:!0,children:[(0,F.jsx)(x.ZP,{item:!0,flexGrow:1,children:(0,F.jsx)(p.Z,{variant:"caption",pl:1,children:k})}),(0,F.jsx)(x.ZP,{item:!0,xs:"auto",children:(0,F.jsx)(Z.Z,{size:"small",color:"info",variant:"contained",onClick:function(){return g(!0)},startIcon:(0,F.jsx)(a.G,{icon:l.sph}),children:(0,F.jsx)(W.v,{ns:"ui",key18:"info"})})})]}),(0,F.jsx)(E.Z,{containerProps:{maxWidth:"xl"},open:m,onClose:function(){return w()},children:(0,F.jsxs)(P.Z,{children:[(0,F.jsx)(h.Z,{sx:{py:1},children:(0,F.jsxs)(x.ZP,{container:!0,children:[(0,F.jsx)(x.ZP,{item:!0,flexGrow:1,children:(0,F.jsx)(p.Z,{variant:"h6",children:c})}),(0,F.jsx)(x.ZP,{item:!0,children:(0,F.jsx)(I.Z,{onClick:w})})]})}),(0,F.jsx)(A.Z,{}),(0,F.jsx)(h.Z,{children:(0,F.jsx)(v.Suspense,{fallback:(0,F.jsx)(y.Z,{variant:"rectangular",width:"100%",height:500}),children:o})}),(0,F.jsx)(A.Z,{}),(0,F.jsx)(h.Z,{sx:{py:1},children:(0,F.jsx)(I.Z,{large:!0,onClick:w})})]})})]})}var M=n(91839),O=n(59215),D=n(75545),T=n(56928),q=n(20323),V=n(79406),z=n(68544),N=n(70645),R=n(50765),U=n(46956),H=n(72838),_=n(63204),B=n(62002),$=n(40117),Q=n(23786),J=n(57064),X=n(49900),Y=n(52791),ee=n(21977),te=n(81918),ne=n(68096),ie=n(94925),re=n(28029),se=n(99321),ce=n(13967);function le(e,t,n){return{fontWeight:t.includes(e)?n.typography.fontWeightMedium:n.typography.fontWeightRegular}}function ae(e){var t=e.mainStatKeys,n=e.setMainStatKeys,i=(0,ce.Z)();return(0,F.jsx)("div",{children:(0,F.jsxs)(ne.Z,{fullWidth:!0,children:[(0,F.jsx)(ie.Z,{id:"main-stat-multiple-chip-label",children:"Main Stats"}),(0,F.jsx)(se.Z,{labelId:"main-stat-multiple-chip-label",id:"main-stat-multiple-chip",multiple:!0,value:t,onChange:function(e){var t=e.target.value;n("string"===typeof t?t.split(","):t)},input:(0,F.jsx)(re.Z,{id:"main-stat-select-multiple-chip",label:"Main Stats"}),renderValue:function(e){return(0,F.jsx)(u.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return(0,F.jsx)(te.Z,{icon:D.Z[e],label:V.ZP.getArtStr(e)},e)}))})},children:R.r.map((function(e){return(0,F.jsxs)(Q.Z,{value:e,children:[(0,F.jsx)(J.Z,{children:D.Z[e]}),(0,F.jsx)(X.Z,{primaryTypographyProps:{style:le(e,t,i)},children:V.ZP.getArtStr(e)})]},e)}))})]})})}var oe=n(31148),ue=n(42320),de=n(10157);function fe(e,t,n){return{fontWeight:t.includes(e)?n.typography.fontWeightMedium:n.typography.fontWeightRegular}}function he(e){var t=e.artSetKeys,n=e.setArtSetKeys,i=(0,b.$)("artifact").t,c=(0,ue.Z)(oe.y.getAll,[]),l=(0,ce.Z)(),a=(0,v.useMemo)((function(){return c?oe.y.setKeysByRarities(c):{}}),[c]);return c?(0,F.jsx)("div",{children:(0,F.jsxs)(ne.Z,{fullWidth:!0,children:[(0,F.jsx)(ie.Z,{id:"artifact-set-multiple-chip-label",children:"Artifact Sets"}),(0,F.jsx)(se.Z,{labelId:"artifact-set-multiple-chip-label",id:"artifact-set-multiple-chip",multiple:!0,value:t,onChange:function(e){var t=e.target.value;n("string"===typeof t?t.split(","):t)},input:(0,F.jsx)(re.Z,{id:"artifact-set-select-multiple-chip",label:"Artifact Sets"}),renderValue:function(e){return(0,F.jsx)(u.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){var t;return(0,F.jsx)(te.Z,{icon:null===(t=c[e])||void 0===t?void 0:t.defIcon,label:c[e].name},e)}))})},children:!!Object.keys(a).length&&Object.entries(a).reverse().flatMap((function(e,n){var a=(0,r.Z)(e,2),o=a[0],u=a[1];return[].concat((0,s.Z)(n>0&&u.length?[(0,F.jsx)(A.Z,{},"".concat(o,"divi"))]:[]),(0,s.Z)(u.length?[(0,F.jsx)(Q.Z,{style:{pointerEvents:"none"},children:(0,F.jsx)(p.Z,{children:(0,F.jsxs)(k.c,{t:i,i18nKey:"editor.set.maxRarity",children:["Max Rarity ",(0,F.jsx)(de.t,{stars:parseInt(o)})]})})},"".concat(o,"header"))]:[]),(0,s.Z)(u.map((function(e){var n,i;return(0,F.jsxs)(Q.Z,{value:e,children:[(0,F.jsx)(J.Z,{children:null===(n=c[e])||void 0===n?void 0:n.defIcon}),(0,F.jsx)(X.Z,{primaryTypographyProps:{style:fe(e,t,l)},children:(0,F.jsx)(v.Suspense,{fallback:(0,F.jsx)(y.Z,{variant:"text",width:100}),children:null===(i=c[e])||void 0===i?void 0:i.name})})]},e)}))))}))})]})}):null}function xe(e,t,n){return{fontWeight:t.includes(e)?n.typography.fontWeightMedium:n.typography.fontWeightRegular}}function Ze(e){var t=e.subStatKeys,n=e.setSubStatKeys,i=(0,ce.Z)();return(0,F.jsx)("div",{children:(0,F.jsxs)(ne.Z,{fullWidth:!0,children:[(0,F.jsx)(ie.Z,{id:"sub-stat-multiple-chip-label",children:"Sub Stats"}),(0,F.jsx)(se.Z,{labelId:"sub-stat-multiple-chip-label",id:"sub-stat-multiple-chip",multiple:!0,value:t,onChange:function(e){var t=e.target.value;n("string"===typeof t?t.split(","):t)},input:(0,F.jsx)(re.Z,{id:"sub-stat-select-multiple-chip",label:"Sub Stats"}),renderValue:function(e){return(0,F.jsx)(u.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return(0,F.jsx)(te.Z,{icon:D.Z[e],label:V.ZP.getArtStr(e)},e)}))})},children:R.L.map((function(e){return(0,F.jsxs)(Q.Z,{value:e,children:[(0,F.jsx)(J.Z,{children:D.Z[e]}),(0,F.jsx)(X.Z,{primaryTypographyProps:{style:xe(e,t,i)},children:V.ZP.getArtStr(e)})]},e)}))})]})})}var je,ye,pe=n(95614),me=n(36944),ve=n(33890),ge=n(25617),be=n(947),ke=n(24351),we=n(50921);function Pe(e){var t,n,r=e.filterOption,s=e.filterOptionDispatch,c=e.filterDispatch,u=e.numShowing,d=e.total,f=(0,b.$)(["artifact","ui"]).t,j=r.artSetKeys,g=void 0===j?[]:j,w=r.mainStatKeys,S=void 0===w?[]:w,A=r.rarity,C=void 0===A?[]:A,K=r.slotKeys,I=void 0===K?[]:K,E=r.levelLow,W=r.levelHigh,L=r.substats,G=void 0===L?[]:L,O=r.location,D=void 0===O?"":O,T=r.excluded,q=void 0===T?"":T,V=(0,ue.Z)(be.ZP.get(D),[D]);return t=D?"Inventory"===D?(0,F.jsxs)("span",{children:[(0,F.jsx)(_.Z,{})," ",f("filterLocation.inventory")]}):"Equipped"===D?(0,F.jsxs)("span",{children:[(0,F.jsx)(a.G,{icon:l.caW})," ",f("filterLocation.currentlyEquipped")]}):(0,F.jsx)("b",{children:null===V||void 0===V?void 0:V.nameWIthIcon}):f("filterLocation.any"),n="excluded"===q?(0,F.jsxs)("span",{children:[(0,F.jsx)(a.G,{icon:l.gPx})," ",f(je||(je=(0,i.Z)(["exclusion.excluded"])))]}):"included"===q?(0,F.jsxs)("span",{children:[(0,F.jsx)(a.G,{icon:l.Stf})," ",f(ye||(ye=(0,i.Z)(["exclusion.included"])))]}):f("exclusionDisplay",{value:f("exclusion.any")}),(0,F.jsx)(v.Suspense,{fallback:(0,F.jsx)(y.Z,{variant:"rectangular",width:"100%",height:300}),children:(0,F.jsx)(P.Z,{children:(0,F.jsxs)(h.Z,{children:[(0,F.jsxs)(x.ZP,{container:!0,children:[(0,F.jsx)(x.ZP,{item:!0,children:(0,F.jsx)(p.Z,{variant:"h6",children:(0,F.jsx)(k.c,{t:f,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),(0,F.jsx)(x.ZP,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:u!==d&&(0,F.jsxs)(p.Z,{children:["Filtered ",u," / ",d]})}),(0,F.jsx)(x.ZP,{item:!0,children:(0,F.jsx)(Z.Z,{size:"small",color:"error",onClick:function(){return c({type:"reset"})},startIcon:(0,F.jsx)(o.Z,{}),children:(0,F.jsx)(k.c,{t:f,i18nKey:"ui:reset"})})})]}),(0,F.jsxs)(x.ZP,{container:!0,spacing:1,mt:1,children:[(0,F.jsxs)(x.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,F.jsx)(M.Z,{fullWidth:!0,onChange:function(e,t){return s({rarity:t})},value:C,size:"small",children:ke.En.map((function(e){return(0,F.jsx)(m.Z,{value:e,children:(0,F.jsx)(de.t,{stars:e})},e)}))}),(0,F.jsx)(M.Z,{fullWidth:!0,onChange:function(e,t){return s({slotKeys:t})},value:I,size:"small",children:ke.eV.map((function(e){return(0,F.jsx)(m.Z,{value:e,children:(0,pe.Ir)(e)},e)}))}),(0,F.jsx)(ee.Z,{showLevelText:!0,levelLow:E,levelHigh:W,setLow:function(e){return s({levelLow:e})},setHigh:function(e){return s({levelHigh:e})},setBoth:function(e,t){return s({levelLow:e,levelHigh:t})}}),(0,F.jsxs)(Y.Z,{display:"flex",gap:1,children:[(0,F.jsx)(Se,{dropdownProps:{color:D?"success":"primary"},title:t,onChange:function(e){return s({location:e})},selectedCharacterKey:D}),(0,F.jsxs)(ve.Z,{fullWidth:!0,title:n,color:q?"included"===q?"success":"error":"primary",children:[(0,F.jsx)(Q.Z,{selected:""===q,disabled:""===q,onClick:function(){return s({excluded:""})},children:(0,F.jsx)(k.c,{t:f,i18nKey:"exclusion.any",children:"Any"})}),(0,F.jsxs)(Q.Z,{selected:"excluded"===q,disabled:"excluded"===q,onClick:function(){return s({excluded:"excluded"})},children:[(0,F.jsx)(J.Z,{children:(0,F.jsx)(a.G,{icon:l.gPx})}),(0,F.jsx)(X.Z,{children:(0,F.jsx)(k.c,{t:f,i18nKey:"exclusion.excluded",children:"Excluded"})})]}),(0,F.jsxs)(Q.Z,{selected:"included"===q,disabled:"included"===q,onClick:function(){return s({excluded:"included"})},children:[(0,F.jsx)(J.Z,{children:(0,F.jsx)(a.G,{icon:l.Stf})}),(0,F.jsx)(X.Z,{children:(0,F.jsx)(k.c,{t:f,i18nKey:"exclusion.included",children:"Included"})})]})]})]})]}),(0,F.jsxs)(x.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,F.jsx)(he,{artSetKeys:g,setArtSetKeys:function(e){return s({artSetKeys:e})}}),(0,F.jsx)(ae,{mainStatKeys:S,setMainStatKeys:function(e){return s({mainStatKeys:e})}}),(0,F.jsx)(Ze,{subStatKeys:G,setSubStatKeys:function(e){return s({substats:e})}})]})]})]})})})}function Se(e){var t=e.title,n=e.onChange,i=e.selectedCharacterKey,r=e.dropdownProps,s=(0,v.useContext)(T.t).database,u=(0,ue.Z)(be.ZP.getAll,[]),d=(0,v.useMemo)((function(){return u&&(0,we.zU)(s,u)}),[s,u]),f=(0,b.$)(["artifact","ui"]).t;return(0,F.jsxs)(ve.Z,(0,c.Z)((0,c.Z)({fullWidth:!0},r),{},{title:t,children:[(0,F.jsxs)(Q.Z,{selected:""===i,disabled:""===i,onClick:function(){return n("")},children:[(0,F.jsx)(J.Z,{children:(0,F.jsx)(o.Z,{})}),(0,F.jsx)(X.Z,{children:(0,F.jsx)(k.c,{t:f,i18nKey:"ui:unselect",children:"Unselect"})})]},"unselect"),(0,F.jsxs)(Q.Z,{selected:"Inventory"===i,disabled:"Inventory"===i,onClick:function(){return n("Inventory")},children:[(0,F.jsx)(J.Z,{children:(0,F.jsx)(_.Z,{})}),(0,F.jsx)(X.Z,{children:(0,F.jsx)(k.c,{t:f,i18nKey:"filterLocation.inventory",children:"Inventory"})})]},"inventory"),(0,F.jsxs)(Q.Z,{selected:"Equipped"===i,disabled:"Equipped"===i,onClick:function(){return n("Equipped")},children:[(0,F.jsx)(J.Z,{children:(0,F.jsx)(a.G,{icon:l.caW})}),(0,F.jsx)(X.Z,{children:(0,F.jsx)(k.c,{t:f,i18nKey:"filterLocation.currentlyEquipped",children:"Currently Equipped"})})]},"equipped"),(0,F.jsx)(A.Z,{}),!!u&&(0,me.d)(u,s._getCharKeys().sort(),n,i,d)]}))}function Ae(e){var t=e.artifactIds,n=(e.filterOption,(0,b.$)(["artifact","ui"]).t),i=(0,v.useContext)(T.t).database,r=(0,v.useMemo)((function(){var e=t.map((function(e){return i._getArt(e)})),n=e.reduce((function(e,t){return e+(t.lock?0:1)}),0),r=e.length-n,s=n,c=e.reduce((function(e,t){return e+(t.location?1:0)}),0),l=e.reduce((function(e,t){return e+(t.exclude?1:0)}),0);return{numDelete:s,numUnequip:c,numExclude:l,numInclude:e.length-l,numUnlock:n,numLock:r}}),[t,i]),s=r.numDelete,c=r.numUnequip,o=r.numExclude,u=r.numInclude,d=r.numUnlock,f=r.numLock;return(0,F.jsxs)(x.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,F.jsx)(x.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,F.jsxs)(Z.Z,{fullWidth:!0,color:"error",disabled:!c,onClick:function(){return window.confirm("Are you sure you want to unequip ".concat(c," artifacts currently equipped on characters?"))&&t.map((function(e){return i.setArtLocation(e,"")}))},startIcon:(0,F.jsx)(a.G,{icon:l.wOQ}),children:[(0,F.jsx)(k.c,{t:n,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),(0,F.jsx)(ge.Z,{sx:{ml:1},color:c?"success":"secondary",children:c})]})}),(0,F.jsx)(x.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,F.jsxs)(Z.Z,{fullWidth:!0,color:"error",disabled:!s,onClick:function(){return window.confirm("Are you sure you want to delete ".concat(s," artifacts?"))&&t.map((function(e){var t;return!(null!==(t=i._getArt(e))&&void 0!==t&&t.lock)&&i.removeArt(e)}))},startIcon:(0,F.jsx)(a.G,{icon:l.$aW}),children:[(0,F.jsx)(k.c,{t:n,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),(0,F.jsx)(ge.Z,{sx:{ml:1},color:s?"success":"secondary",children:s})]})}),(0,F.jsx)(x.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,F.jsxs)(Z.Z,{fullWidth:!0,color:"error",disabled:!u,onClick:function(){return window.confirm("Are you sure you want to exclude ".concat(u," artifacts from build generations?"))&&t.map((function(e){return i.updateArt({exclude:!0},e)}))},startIcon:(0,F.jsx)(a.G,{icon:l.gPx}),children:[(0,F.jsx)(k.c,{t:n,i18nKey:"button.excludeArtifacts",children:"Exclude Artifacts"}),(0,F.jsx)(ge.Z,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),(0,F.jsx)(x.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,F.jsxs)(Z.Z,{fullWidth:!0,color:"error",disabled:!o,onClick:function(){return window.confirm("Are you sure you want to include ".concat(o," artifacts in build generations?"))&&t.map((function(e){return i.updateArt({exclude:!1},e)}))},startIcon:(0,F.jsx)(a.G,{icon:l.Stf}),children:[(0,F.jsx)(k.c,{t:n,i18nKey:"button.includeArtifacts",children:"Include Artifacts"}),(0,F.jsx)(ge.Z,{sx:{ml:1},color:o?"success":"secondary",children:o})]})}),(0,F.jsx)(x.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,F.jsxs)(Z.Z,{fullWidth:!0,color:"error",disabled:!f,onClick:function(){return window.confirm("Are you sure you want to unlock ".concat(f," artifacts?"))&&t.map((function(e){return i.updateArt({lock:!1},e)}))},startIcon:(0,F.jsx)(B.Z,{}),children:[(0,F.jsx)(k.c,{t:n,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),(0,F.jsx)(ge.Z,{sx:{ml:1},color:f?"success":"secondary",children:f})]})}),(0,F.jsx)(x.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,F.jsxs)(Z.Z,{fullWidth:!0,color:"error",disabled:!d,onClick:function(){return window.confirm("Are you sure you want to lock ".concat(d," artifacts?"))&&t.map((function(e){return i.updateArt({lock:!0},e)}))},startIcon:(0,F.jsx)($.Z,{}),children:[(0,F.jsx)(k.c,{t:n,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),(0,F.jsx)(ge.Z,{sx:{ml:1},color:d?"success":"secondary",children:d})]})}),(0,F.jsx)(x.ZP,{item:!0,xs:12,sm:12,md:6,display:"flex",justifyContent:"space-around",children:(0,F.jsx)(p.Z,{variant:"caption",color:"text.secondary",children:(0,F.jsxs)(k.c,{t:n,i18nKey:"buttonHint",children:["Note: the red buttons above only applies to ",(0,F.jsx)("b",{children:"currently filtered artifacts"})]})})})]})}var Ce=n(37762),Ke=n(19272),Ie=n(44217),Ee=["rarity","level","artsetkey","efficiency","mefficiency","probability"],We=["probability"],Fe=function(){return{filterOption:{artSetKeys:[],rarity:(0,s.Z)(ke.En),levelLow:0,levelHigh:20,slotKeys:(0,s.Z)(ke.eV),mainStatKeys:[],substats:[],location:"",excluded:""},ascending:!1,sortType:Ee[0]}};var Le,Ge=n(71310),Me=n(91702),Oe=n(14525);function De(e){var t=e.probabilityFilter,n=void 0===t?{}:t,i=e.setProbabilityFilter,s=e.disabled,l=void 0!==s&&s,a=R.L.filter((function(e){return!Object.keys(n).some((function(t){return t===e}))})),o=(0,v.useCallback)((function(e,t){return i((0,c.Z)((0,c.Z)({},n),{},(0,S.Z)({},e,t)))}),[n,i]);return(0,F.jsxs)(P.Z,{children:[(0,F.jsx)(h.Z,{sx:{py:1},children:(0,F.jsxs)(p.Z,{variant:"h6",children:["Roll Probability Calculator ",(0,F.jsx)(ge.Z,{color:"success",children:"TC Feature"})]})}),(0,F.jsx)(A.Z,{}),(0,F.jsx)(h.Z,{children:(0,F.jsxs)(x.ZP,{container:!0,spacing:1,children:[(0,F.jsx)(x.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(Ge.Z,{children:(0,F.jsx)(h.Z,{children:(0,F.jsxs)(p.Z,{children:['This UI only pops up when "Sort by" ',(0,F.jsx)("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",(0,F.jsx)(Me.Z,{color:"warning",children:" Artifacts that already reach the criteria(100%) or are at 0% are hidden."})]})})})}),(0,F.jsxs)(x.ZP,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object.entries(n).map((function(e){var t=(0,r.Z)(e,2),s=t[0],u=t[1];return(0,F.jsx)(x.ZP,{item:!0,xs:12,children:(0,F.jsx)(Oe.b,{statKey:s,statKeys:a,setFilter:o,disabled:l,value:u,close:function(){delete n[s],i((0,c.Z)({},n))}})},s)})),(0,F.jsx)(x.ZP,{item:!0,xs:12,children:(0,F.jsx)(Oe.b,{value:void 0,close:void 0,statKeys:a,setFilter:o,disabled:l})})]})]})})]})}var Te=v.lazy((function(){return Promise.all([n.e(872),n.e(292)]).then(n.bind(n,29292))})),qe=v.lazy((function(){return n.e(400).then(n.bind(n,56400))})),Ve={xs:1,sm:2,md:3,lg:3,xl:4},ze={xs:9,sm:11,md:23,lg:23,xl:23};function Ne(){return(0,c.Z)((0,c.Z)({},Fe()),{},{effFilter:(0,s.Z)(R.L),probabilityFilter:{}})}function Re(){var e=(0,C.Z)("GlobalSettings",q.c),t=(0,r.Z)(e,1)[0].tcMode,n=(0,b.$)(["artifact","ui"]).t,l=(0,v.useContext)(T.t).database,a=(0,C.Z)("ArtifactDisplay",Ne),p=(0,r.Z)(a,2),m=p[0],S=p[1],A=(0,v.useCallback)((function(e){"reset"===e.type?S(Fe()):S(e)}),[S]),I=(0,N.Z)(),E=ze[I],W=m.effFilter,L=m.filterOption,M=m.ascending,D=m.probabilityFilter,V=m.sortType,_=t&&"probability"===V;"probability"!==V||t||A({sortType:Ee[0]});var B=(0,v.useState)(0),$=(0,r.Z)(B,2),Q=$[0],J=$[1],X=(0,v.useRef)(null),Y=(0,z.Z)(),ee=(0,r.Z)(Y,2),te=ee[0],ne=ee[1],ie=(0,v.useMemo)((function(){return new Set(W)}),[W]),re=(0,v.useCallback)((function(e){return l.removeArt(e)}),[l]);(0,v.useEffect)((function(){return g.ZP.pageview("/artifact"),l.followAnyArt(ne)}),[l,ne]);var se=(0,v.useCallback)((function(e){A({filterOption:(0,c.Z)((0,c.Z)({},L),e)})}),[A,L]),ce=(0,v.useCallback)((function(e){return A({probabilityFilter:e})}),[A]),le=(0,v.useMemo)((function(){return!l._getArts().length}),[l]),ae=(0,v.useMemo)((function(){return function(e,t){return{rarity:{getValue:function(e){var t;return null!==(t=e.rarity)&&void 0!==t?t:0},tieBreaker:"level"},level:{getValue:function(e){var t;return null!==(t=e.level)&&void 0!==t?t:0},tieBreaker:"artsetkey"},artsetkey:{getValue:function(e){var t;return null!==(t=e.setKey)&&void 0!==t?t:""},tieBreaker:"level"},efficiency:{getValue:function(t){return Ke.Z.getArtifactEfficiency(t,e).currentEfficiency}},mefficiency:{getValue:function(t){return Ke.Z.getArtifactEfficiency(t,e).maxEfficiency}},probability:{getValue:function(e){if(!Object.keys(t).length)return 0;var n=e.probability;return void 0===n?(0,Ie.B)(e,t):n}}}}(ie,D)}),[ie,D]),oe=(0,v.useMemo)((function(){return{excluded:function(e,t){return!("excluded"===t&&!e.exclude)&&("included"!==t||!e.exclude)},location:function(e,t){return!t||"Inventory"===t&&!e.location||!("Equipped"!==t||!e.location)||t===e.location},artSetKeys:function(e,t){return!t.length||t.includes(e.setKey)},slotKeys:function(e,t){return t.includes(e.slotKey)},mainStatKeys:function(e,t){return!t.length||t.includes(e.mainStatKey)},levelLow:function(e,t){return t<=e.level},levelHigh:function(e,t){return t>=e.level},rarity:function(e,t){return t.includes(e.rarity)},substats:function(e,t){var n,i=(0,Ce.Z)(t);try{var r=function(){var t=n.value;if(t&&!e.substats.some((function(e){return e.key===t})))return{v:!1}};for(i.s();!(n=i.n()).done;){var s=r();if("object"===typeof s)return s.v}}catch(c){i.e(c)}finally{i.f()}return!0}}}),[]),ue=(0,v.useMemo)((function(){var e=m.sortType,t=void 0===e?Ee[0]:e,n=m.ascending,i=void 0!==n&&n,r=m.filterOption,s=l._getArts(),a=(0,U.C)(r,oe),o=(0,U.e)(t,i,ae);_&&(s.forEach((function(e){return e.probability=(0,Ie.B)(e,D)})),s=s.filter((function(e){return e.probability&&1!==e.probability})));var u=s.filter(a).sort(o).map((function(e){return e.id}));return(0,c.Z)({artifactIds:u,totalArtNum:s.length},te)}),[m,te,l,ae,oe,D,_]),de=ue.artifactIds,fe=ue.totalArtNum,he=(0,v.useMemo)((function(){var e=Math.ceil(de.length/E),t=(0,K.uZ)(Q,0,e-1);return{artifactsToShow:de.slice(t*E,(t+1)*E),numPages:e,currentPageIndex:t}}),[de,Q,E]),xe=he.artifactsToShow,Ze=he.numPages,je=he.currentPageIndex,ye=de.length!==fe?"".concat(de.length,"/").concat(fe):"".concat(fe),pe=(0,v.useCallback)((function(e,t){var n;null===(n=X.current)||void 0===n||n.scrollIntoView({behavior:"smooth"}),J(t-1)}),[J,X]);return(0,F.jsxs)(u.Z,{display:"flex",flexDirection:"column",gap:1,my:1,children:[(0,F.jsx)(G,{pageKey:"artifactPage",modalTitle:n(Le||(Le=(0,i.Z)(["info.title"]))),text:n("tipsOfTheDay",{returnObjects:!0}),children:(0,F.jsx)(qe,{})}),le&&(0,F.jsxs)(d.Z,{severity:"info",variant:"filled",children:["Looks like you haven't added any artifacts yet. If you want, there are ",(0,F.jsx)(f.Z,{color:"warning.main",component:w.rU,to:"/scanner",children:"automatic scanners"})," that can speed up the import process!"]}),(0,F.jsx)(Pe,{filterOption:L,filterOptionDispatch:se,filterDispatch:A,numShowing:de.length,total:fe}),_&&(0,F.jsx)(De,{probabilityFilter:D,setProbabilityFilter:ce}),(0,F.jsx)(P.Z,{ref:X,children:(0,F.jsxs)(h.Z,{children:[(0,F.jsxs)(x.ZP,{container:!0,sx:{mb:1},children:[(0,F.jsx)(x.ZP,{item:!0,flexGrow:1,children:(0,F.jsx)("span",{children:(0,F.jsx)(k.c,{t:n,i18nKey:"efficiencyFilter.title",children:"Substats to use in efficiency calculation"})})}),(0,F.jsx)(x.ZP,{item:!0,children:(0,F.jsx)(Z.Z,{size:"small",color:"error",onClick:function(){return A({effFilter:(0,s.Z)(R.L)})},startIcon:(0,F.jsx)(o.Z,{}),children:(0,F.jsx)(k.c,{t:n,i18nKey:"ui:reset"})})})]}),(0,F.jsx)(_e,{selectedKeys:W,onChange:function(e){return A({effFilter:e})}})]})}),(0,F.jsx)(P.Z,{children:(0,F.jsxs)(h.Z,{children:[(0,F.jsxs)(x.ZP,{container:!0,alignItems:"center",sx:{pb:2},children:[(0,F.jsx)(x.ZP,{item:!0,flexGrow:1,children:(0,F.jsx)(j.Z,{count:Ze,page:je+1,onChange:pe})}),(0,F.jsx)(x.ZP,{item:!0,flexGrow:1,children:(0,F.jsx)(He,{numShowing:xe.length,total:ye,t:n})}),(0,F.jsxs)(x.ZP,{item:!0,xs:12,sm:6,md:4,lg:4,xl:3,display:"flex",children:[(0,F.jsx)(u.Z,{flexGrow:1}),(0,F.jsx)(O.Z,{sortKeys:(0,s.Z)(Ee.filter((function(e){return!We.includes(e)||t}))),value:V,onChange:function(e){return A({sortType:e})},ascending:M,onChangeAsc:function(e){return A({ascending:e})}})]})]}),(0,F.jsx)(Ae,{artifactIds:de,filterOption:L})]})}),(0,F.jsx)(v.Suspense,{fallback:(0,F.jsx)(y.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:(0,F.jsxs)(x.ZP,{container:!0,spacing:1,columns:Ve,children:[(0,F.jsx)(x.ZP,{item:!0,xs:1,children:(0,F.jsx)(Ue,{})}),xe.map((function(e){return(0,F.jsx)(x.ZP,{item:!0,xs:1,children:(0,F.jsx)(H.Z,{artifactId:e,effFilter:ie,onDelete:re,probabilityFilter:_?D:void 0})},e)}))]})}),Ze>1&&(0,F.jsx)(P.Z,{children:(0,F.jsx)(h.Z,{children:(0,F.jsxs)(x.ZP,{container:!0,children:[(0,F.jsx)(x.ZP,{item:!0,flexGrow:1,children:(0,F.jsx)(j.Z,{count:Ze,page:je+1,onChange:pe})}),(0,F.jsx)(x.ZP,{item:!0,children:(0,F.jsx)(He,{numShowing:xe.length,total:ye,t:n})})]})})})]})}function Ue(){var e=(0,v.useState)(!1),t=(0,r.Z)(e,2),n=t[0],i=t[1],s=(0,v.useCallback)((function(){return i(!0)}),[i]),c=(0,v.useCallback)((function(){return i(!1)}),[i]);return(0,F.jsxs)(P.Z,{sx:{height:"100%",width:"100%",minHeight:300,display:"flex",flexDirection:"column"},children:[(0,F.jsx)(v.Suspense,{fallback:!1,children:(0,F.jsx)(Te,{artifactIdToEdit:n?"new":"",cancelEdit:c,allowUpload:!0,allowEmpty:!0})}),(0,F.jsx)(h.Z,{children:(0,F.jsx)(p.Z,{sx:{textAlign:"center"},children:"Add New Artifact"})}),(0,F.jsx)(u.Z,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,F.jsx)(Z.Z,{onClick:s,color:"info",sx:{borderRadius:"1em"},children:(0,F.jsx)(p.Z,{variant:"h1",children:(0,F.jsx)(a.G,{icon:l.r8p,className:"fa-fw"})})})})]})}function He(e){var t=e.numShowing,n=e.total,i=e.t;return(0,F.jsx)(p.Z,{color:"text.secondary",children:(0,F.jsxs)(k.c,{t:i,i18nKey:"showingNum",count:t,value:n,children:["Showing ",(0,F.jsx)("b",{children:{count:t}})," out of ",{value:n}," Artifacts"]})})}function _e(e){var t=e.selectedKeys,n=e.onChange,i=R.L.slice(0,6),r=R.L.slice(6),c=t.filter((function(e){return i.includes(e)})),l=t.filter((function(e){return r.includes(e)}));return(0,F.jsxs)(x.ZP,{container:!0,spacing:1,children:[(0,F.jsx)(x.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(M.Z,{fullWidth:!0,value:c,onChange:function(e,t){return n([].concat((0,s.Z)(l),(0,s.Z)(t)))},sx:{height:"100%"},children:i.map((function(e){return(0,F.jsx)(m.Z,{size:"small",value:e,children:(0,F.jsxs)(u.Z,{display:"flex",gap:1,alignItems:"center",children:[D.Z[e],V.ZP.getArtStr(e)]})},e)}))})}),(0,F.jsx)(x.ZP,{item:!0,xs:12,md:6,children:(0,F.jsx)(M.Z,{fullWidth:!0,value:l,onChange:function(e,t){return n([].concat((0,s.Z)(c),(0,s.Z)(t)))},sx:{height:"100%"},children:r.map((function(e){return(0,F.jsx)(m.Z,{size:"small",value:e,children:(0,F.jsxs)(u.Z,{display:"flex",gap:1,alignItems:"center",children:[D.Z[e],V.ZP.getArtStr(e)]})},e)}))})})]})}},70645:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(13967),r=n(95193);function s(){var e=(0,i.Z)(),t=(0,r.Z)(e.breakpoints.up("sm")),n=(0,r.Z)(e.breakpoints.up("md")),s=(0,r.Z)(e.breakpoints.up("lg"));return(0,r.Z)(e.breakpoints.up("xl"))?"xl":s?"lg":n?"md":t?"sm":"xs"}}}]);
//# sourceMappingURL=805.53f2f71a.chunk.js.map