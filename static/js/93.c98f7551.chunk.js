"use strict";(self.webpackChunklittle_bro=self.webpackChunklittle_bro||[]).push([[93],{52991:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(68870),i=n(20890),a=n(9350),o=n(31148),s=n(79406),c=n(42320),u=n(96106),l=n(3992),d=n(25617),f=n(75545),h=n(50428),x=n(80184);function v(e){var t=e.artifactObj,n=e.slotKey,v=(0,c.Z)((null===t||void 0===t?void 0:t.setKey)&&o.y.get(t.setKey),[null===t||void 0===t?void 0:t.setKey]);if(!t||!v)return(0,x.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:(0,x.jsx)(r.Z,{sx:{width:"100%",pb:"100%",position:"relative"},children:(0,x.jsx)(r.Z,{sx:{position:"absolute",width:"70%",height:"70%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:.7},component:"img",src:a.Z.slot[n]})})});var p=t.mainStatKey,m=t.rarity,Z=t.level,g=t.mainStatVal,y="roll"+(Math.floor(Math.max(Z,0)/4)+1);return(0,x.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[(0,x.jsx)(h.Z,{slotKey:n,sheet:v,children:(0,x.jsx)(r.Z,{component:"img",className:"grad-".concat(m,"star"),src:v.slotIcons[n],maxWidth:"100%",maxHeight:"100%"})}),(0,x.jsx)(i.Z,{sx:{position:"absolute",lineHeight:1,pointerEvents:"none"},variant:"subtitle2",children:(0,x.jsxs)(d.Z,{color:y,children:["+",Z]})}),(0,x.jsx)(i.Z,{variant:"h6",sx:{position:"absolute",bottom:0,right:0,lineHeight:1},children:(0,x.jsx)(u.Z,{placement:"top",title:(0,x.jsxs)(i.Z,{children:[(0,s.qs)(g,s.ZP.unit(p)),s.ZP.unit(p)," ",s.ZP.getStr(p)]}),disableInteractive:!0,children:(0,x.jsx)(d.Z,{color:"secondary",sx:{p:.25},children:f.Z[p]})})})]})}},50428:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(68870),i=n(47047),a=n(20890),o=n(72791),s=n(96106),c=n(95614),u=n(80184);function l(e){var t,n=e.slotKey,l=e.sheet,d=e.children,f=(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(i.Z,{variant:"text",width:100}),(0,u.jsx)(i.Z,{variant:"text",width:100})]}),h=(0,u.jsx)(o.Suspense,{fallback:f,children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(a.Z,{children:(0,u.jsx)("strong",{children:null===l||void 0===l?void 0:l.name})}),(0,u.jsxs)(a.Z,{children:[(0,c.Ir)(n)," ",null===l||void 0===l||null===(t=l.getSlotName)||void 0===t?void 0:t.call(l,n)]})]})});return(0,u.jsx)(s.Z,{placement:"top",title:h,disableInteractive:!0,children:d})}},96106:function(e,t,n){var r=n(4942),i=n(1413),a=n(45987),o=n(66934),s=n(18455),c=n(69293),u=n(80184),l=["className"],d=(0,o.ZP)((function(e){var t=e.className,n=(0,a.Z)(e,l);return(0,u.jsx)(s.Z,(0,i.Z)((0,i.Z)({},n),{},{arrow:!0,classes:{popper:t}}))}))((function(e){var t,n=e.theme;return t={},(0,r.Z)(t,"& .".concat(c.Z.arrow),{color:n.palette.common.black}),(0,r.Z)(t,"& .".concat(c.Z.tooltip),{backgroundColor:n.palette.common.black,maxWidth:500}),t}));t.Z=d},30865:function(e,t,n){n.d(t,{Z:function(){return A}});var r=n(29439),i=n(14361),a=n(90690),o=n(66647),s=n(47047),c=n(68870),u=n(13400),l=n(39504),d=n(61889),f=n(81918),h=n(20890),x=n(72791),v=n(2139),p=n(56928),m=n(2693),Z=n(26138),g=n(79406),y=n(84684),j=n(50920),b=n(47639),k=n(24351),w=n(60393),C=n(52991),S=n(71310),P=n(20005),K=n(14763),I=n(25617),_=n(10157),D=n(75545),E=n(77208),W=n(66218),R=n(87234),M=n(42320),T=n(3992),H=n(80184);function N(e){var t=e.weaponId,n=(0,x.useContext)(p.t).database._getWeapon(t),r=(0,M.Z)((null===n||void 0===n?void 0:n.key)&&W.ZP.get(n.key),[null===n||void 0===n?void 0:n.key]),i=(0,x.useMemo)((function(){return r&&n&&(0,R.mP)([r.data,(0,R.v0)(n)])}),[r,n]);return n&&r&&i?(0,H.jsx)(T.Z,{children:(0,H.jsxs)(c.Z,{display:"flex",children:[(0,H.jsx)(c.Z,{flexShrink:1,maxWidth:"35%",display:"flex",flexDirection:"column",alignContent:"flex-end",className:"grad-".concat(r.rarity,"star"),children:(0,H.jsx)(c.Z,{component:"img",src:r.img,width:"100%",height:"auto",sx:{mt:"auto"}})}),(0,H.jsxs)(c.Z,{flexGrow:1,sx:{p:1},children:[(0,H.jsx)(h.Z,{variant:"body2",gutterBottom:!0,children:(0,H.jsx)("strong",{children:null===r||void 0===r?void 0:r.name})}),(0,H.jsxs)(h.Z,{variant:"subtitle1",sx:{display:"flex",gap:1},gutterBottom:!0,children:[(0,H.jsxs)(I.Z,{color:"primary",children:["Lv. ",W.ZP.getLevelString(n)]}),r.hasRefinement&&(0,H.jsxs)(I.Z,{color:"info",children:["R",n.refinement]})]}),(0,H.jsxs)(h.Z,{variant:"subtitle1",sx:{display:"flex",gap:1},children:[(0,H.jsx)(O,{node:i.get(Z.ri.weapon.main)}),(0,H.jsx)(O,{node:i.get(Z.ri.weapon.sub)})]})]})]})}):null}function O(e){var t=e.node;if(!t.info.key)return null;var n=(0,g.EC)(t.value,t.unit,t.unit?void 0:0);return(0,H.jsxs)(I.Z,{color:"secondary",children:[D.Z[t.info.key]," ",n]})}function A(e){var t,n,r=e.characterKey,f=e.artifactChildren,h=e.weaponChildren,v=e.characterChildren,p=e.onClick,Z=e.onClickHeader,g=e.footer,k=e.isTeammateCard,C=(0,x.useContext)(m.R).teamData,K=null!==(t=(0,b.Z)(C?"":r))&&void 0!==t?t:C,I=null!==(n=null===K||void 0===K?void 0:K[r])&&void 0!==n?n:{},_=I.character,D=I.characterSheet,W=I.target,R=(0,x.useCallback)((function(){return r&&(null===p||void 0===p?void 0:p(r,"overview"))}),[r,p]),M=(0,x.useCallback)((function(e){return(0,H.jsx)(o.Z,{onClick:R,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[R]),T=(0,j.Z)(r);if(!K||!_||!D||!W)return null;var O={character:_,data:W,characterSheet:D,mainStatAssumptionLevel:0,teamData:K,characterDispatch:T};return(0,H.jsx)(x.Suspense,{fallback:(0,H.jsx)(s.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:(0,H.jsx)(m.R.Provider,{value:O,children:(0,H.jsxs)(S.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,H.jsx)(c.Z,{sx:{display:"flex",position:"absolute",zIndex:2,opacity:.7},children:(0,H.jsx)(u.Z,{sx:{p:.5},onClick:function(e){return T({favorite:!_.favorite})},children:_.favorite?(0,H.jsx)(i.Z,{}):(0,H.jsx)(a.Z,{})})}),(0,H.jsxs)(P.Z,{condition:!!p,wrapper:M,children:[(0,H.jsx)(B,{onClick:p?void 0:Z}),(0,H.jsxs)(l.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",gap:1,flexGrow:1},children:[(0,H.jsx)(z,{}),!k&&(0,H.jsxs)(d.ZP,{container:!0,columns:4,spacing:.75,children:[(0,H.jsx)(d.ZP,{item:!0,xs:1,height:"100%",children:(0,H.jsx)(E.Z,{weaponId:_.equippedWeapon})}),(0,w.w6)(0,2).map((function(e){return(0,H.jsx)(d.ZP,{item:!0,xs:1,height:"100%",children:(0,H.jsx)(y.Z,{characterKey:_.team[e],index:e})},e)}))]}),k&&(0,H.jsx)(N,{weaponId:_.equippedWeapon}),!k&&(0,H.jsx)(L,{}),h,f,v]})]}),g]})})})}function B(e){var t=e.onClick,n=(0,x.useContext)(m.R),r=n.data,i=n.characterSheet,a=r.get(Z.ri.charKey).value,s=r.get(Z.ri.charEle).value,u=r.get(Z.ri.lvl).value,l=r.get(Z.ri.constellation).value,p=r.get(Z.ri.asc).value,g=r.get(Z.ri.bonus.auto).value,y=r.get(Z.ri.bonus.skill).value,j=r.get(Z.ri.bonus.burst).value,b=r.get(Z.ri.total.auto).value,k=r.get(Z.ri.total.skill).value,w=r.get(Z.ri.total.burst).value,C=(0,x.useCallback)((function(e){return(0,H.jsx)(o.Z,{onClick:function(){return a&&(null===t||void 0===t?void 0:t(a,"overview"))},sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[t,a]);return(0,H.jsx)(P.Z,{condition:!!t,wrapper:C,children:(0,H.jsxs)(c.Z,{display:"flex",position:"relative",className:"grad-".concat(i.rarity,"star"),sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.7,backgroundImage:"url(".concat(i.bannerImg,")"),backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[(0,H.jsx)(c.Z,{flexShrink:1,sx:{maxWidth:{xs:"40%",lg:"40%"}},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1,children:(0,H.jsx)(c.Z,{component:"img",src:i.thumbImg,width:"100%",height:"auto",maxWidth:256,sx:{mt:"auto"}})}),(0,H.jsxs)(c.Z,{flexGrow:1,sx:{py:1,pr:1},display:"flex",flexDirection:"column",zIndex:1,children:[(0,H.jsx)(f.Z,{label:(0,H.jsx)(h.Z,{variant:"subtitle1",children:i.name}),size:"small",color:s,sx:{opacity:.85}}),(0,H.jsxs)(d.ZP,{container:!0,spacing:1,flexWrap:"nowrap",children:[(0,H.jsxs)(d.ZP,{item:!0,sx:{textShadow:"0 0 5px gray"},children:[(0,H.jsxs)(h.Z,{component:"span",variant:"h6",whiteSpace:"nowrap",children:["Lv. ",u]}),(0,H.jsxs)(h.Z,{component:"span",variant:"h6",color:"text.secondary",children:["/",v.SJ[p]]})]}),(0,H.jsx)(d.ZP,{item:!0,children:(0,H.jsx)(h.Z,{variant:"h6",children:(0,H.jsxs)(I.Z,{children:["C",l]})})})]}),(0,H.jsxs)(d.ZP,{container:!0,spacing:1,flexWrap:"nowrap",children:[(0,H.jsx)(d.ZP,{item:!0,children:(0,H.jsx)(f.Z,{color:g?"info":"secondary",label:(0,H.jsx)("strong",{children:b})})}),(0,H.jsx)(d.ZP,{item:!0,children:(0,H.jsx)(f.Z,{color:y?"info":"secondary",label:(0,H.jsx)("strong",{children:k})})}),(0,H.jsx)(d.ZP,{item:!0,children:(0,H.jsx)(f.Z,{color:j?"info":"secondary",label:(0,H.jsx)("strong",{children:w})})})]}),(0,H.jsx)(h.Z,{mt:1,children:(0,H.jsx)(_.t,{stars:i.rarity,colored:!0})})]})]})})}function z(){var e=(0,x.useContext)(p.t).database,t=(0,x.useContext)(m.R).data,n=(0,x.useMemo)((function(){return k.eV.map((function(n){var r;return[n,e._getArt(null!==(r=t.get(Z.ri.art[n].id).value)&&void 0!==r?r:"")]}))}),[t,e]);return(0,H.jsx)(d.ZP,{direction:"row",container:!0,spacing:.75,columns:5,children:n.map((function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,H.jsx)(d.ZP,{item:!0,xs:1,children:(0,H.jsx)(C.Z,{artifactObj:i,slotKey:n})},n)}))})}function L(){var e=(0,x.useContext)(m.R).data;return(0,H.jsxs)(c.Z,{sx:{width:"100%"},children:[Object.values(e.getDisplay().basic).map((function(e){return(0,H.jsx)(K.JW,{node:e},e.info.key)})),e.get(Z.ri.special).info.key&&(0,H.jsxs)(c.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,H.jsx)(h.Z,{flexGrow:1,children:(0,H.jsx)("strong",{children:"Specialized:"})}),D.Z[e.get(Z.ri.special).info.key],(0,H.jsx)(h.Z,{children:g.ZP.get(e.get(Z.ri.special).info.key)})]})]})}},84684:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(47047),i=n(20890),a=n(68870),o=n(72791),s=n(9350),c=n(96106),u=n(3992),l=n(25617),d=n(75545),f=n(947),h=n(2139),x=n(13434),v=n(42320),p=n(80184);function m(e){var t=e.characterKey,n=void 0===t?"":t,m=e.index,Z=void 0===m?-1:m,g=(0,v.Z)(f.ZP.get(n),[n]),y=(0,x.Z)(n);if(g&&y){var j=(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)(r.Z,{variant:"text",width:100}),children:(0,p.jsxs)(i.Z,{children:[g.elementKey&&d.Z[g.elementKey]," ",g.name]})});return(0,p.jsxs)(u.Z,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[(0,p.jsx)(c.Z,{placement:"top",title:j,children:(0,p.jsx)(a.Z,{display:"flex",className:"grad-".concat(g.rarity,"star"),children:(0,p.jsx)(a.Z,{component:"img",src:g.thumbImgSide,maxWidth:"100%",maxHeight:"100%",sx:{transform:"scale(1.4)",transformOrigin:"bottom"}})})}),(0,p.jsx)(i.Z,{variant:"subtitle1",sx:{position:"absolute",lineHeight:1,pointerEvents:"none"},children:(0,p.jsxs)(l.Z,{color:"primary",children:[y.level,"/",h.SJ[y.ascension]]})}),(0,p.jsx)(i.Z,{variant:"subtitle1",sx:{position:"absolute",bottom:0,right:0,lineHeight:1,pointerEvents:"none"},children:(0,p.jsxs)(l.Z,{color:"secondary",children:["C",y.constellation]})})]})}return(0,p.jsx)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:(0,p.jsx)(a.Z,{component:"img",src:s.Z.team["team".concat(Z+2)],sx:{width:"75%",height:"auto",opacity:.7}})})}},3082:function(e,t,n){n.d(t,{w:function(){return O}});var r=n(93433),i=n(29439),a=n(14361),o=n(90690),s=n(39504),c=n(61889),u=n(94721),l=n(68870),d=n(13400),f=n(66647),h=n(20890),x=n(72791),v=n(9350),p=n(947),m=n(56928),Z=n(26138),g=n(50920),y=n(68544),j=n(42320),b=n(47639),k=n(24351),w=n(50921),C=n(46956),S=n(3992),P=n(71310),K=n(68198),I=n(55942),_=n(9321),D=n(59215),E=n(25617),W=n(10157),R=n(75545),M=n(48510),T=n(73578),H=n(80184),N=["level","rarity","name"];function O(e){var t=e.show,n=e.onHide,a=e.onSelect,o=e.filter,l=void 0===o?function(){return!0}:o,d=e.newFirst,f=void 0!==d&&d,h=(0,x.useMemo)((function(){return f?["new"].concat(N):N}),[f]),v=(0,x.useContext)(m.t).database,Z=(0,x.useState)(h[0]),g=(0,i.Z)(Z,2),b=g[0],P=g[1],I=(0,x.useState)(!1),E=(0,i.Z)(I,2),W=E[0],R=E[1],O=(0,x.useState)(""),B=(0,i.Z)(O,2),z=B[0],L=B[1],V=(0,x.useState)(""),F=(0,i.Z)(V,2),Q=F[0],q=F[1],G=(0,j.Z)(p.ZP.getAll,[]),J=(0,y.Z)(),Y=(0,i.Z)(J,2),U=Y[0],$=Y[1];(0,x.useEffect)((function(){return v.followAnyChar($)}),[v,$]);var X=(0,x.useMemo)((function(){return G&&(0,w._L)(v,G)}),[v,G]),ee=(0,x.useMemo)((function(){return G&&U&&(0,w.zU)(v,G)}),[U,v,G]),te=(0,x.useMemo)((function(){return G?(0,r.Z)(new Set(k.IV)).filter((function(e){return l(v._getChar(e),G[e])})):[]}),[v,G,l]),ne=(0,x.useMemo)((function(){return G&&X&&ee?te.filter((0,C.C)({element:z,weaponType:Q,favorite:"yes"},ee)).sort((0,C.e)(b,W,X)).concat(te.filter((0,C.C)({element:z,weaponType:Q,favorite:"no"},ee)).sort((0,C.e)(b,W,X))):[]}),[G,z,Q,b,W,X,ee,te]);return G?(0,H.jsx)(_.Z,{open:t,onClose:n,children:(0,H.jsxs)(S.Z,{children:[(0,H.jsx)(s.Z,{sx:{py:1},children:(0,H.jsxs)(c.ZP,{container:!0,spacing:1,children:[(0,H.jsx)(c.ZP,{item:!0,children:(0,H.jsx)(T.Z,{sx:{height:"100%"},onChange:q,value:Q,size:"small"})}),(0,H.jsx)(c.ZP,{item:!0,flexGrow:1,children:(0,H.jsx)(M.Z,{sx:{height:"100%"},onChange:L,value:z,size:"small"})}),(0,H.jsx)(c.ZP,{item:!0,flexGrow:1}),(0,H.jsx)(c.ZP,{item:!0,children:(0,H.jsx)(D.Z,{sx:{height:"100%"},sortKeys:h,value:b,onChange:P,ascending:W,onChangeAsc:R})}),(0,H.jsx)(c.ZP,{item:!0,children:(0,H.jsx)(K.Z,{onClick:n})})]})}),(0,H.jsx)(u.Z,{}),(0,H.jsx)(s.Z,{children:(0,H.jsx)(c.ZP,{container:!0,spacing:1,children:ne.map((function(e){return(0,H.jsx)(c.ZP,{item:!0,xs:6,md:4,lg:3,children:(0,H.jsx)(A,{characterKey:e,onClick:function(){n(),null===a||void 0===a||a(e)}},e)},e)}))})})]})}):null}function A(e){var t,n,r,i=e.onClick,s=e.characterKey,c=(0,j.Z)(p.ZP.get(s),[s]),u=(0,b.Z)(s),y=(0,x.useContext)(m.t).database,k=(0,g.Z)(s),w=null===(t=y._getChar(s))||void 0===t?void 0:t.favorite,C=(null!==(n=null===u||void 0===u?void 0:u[s])&&void 0!==n?n:{}).target;if(!c)return null;var S=c.rarity;return(0,H.jsxs)(l.Z,{children:[void 0!==w&&(0,H.jsx)(l.Z,{display:"flex",position:"absolute",alignSelf:"start",zIndex:1,children:(0,H.jsx)(d.Z,{sx:{p:.5},onClick:function(){return k({favorite:!w})},children:w?(0,H.jsx)(a.Z,{}):(0,H.jsx)(o.Z,{})})}),(0,H.jsx)(f.Z,{onClick:i,children:(0,H.jsxs)(P.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,H.jsx)(l.Z,{component:"img",src:c.thumbImg,sx:{width:130,height:"auto"},className:"grad-".concat(S,"star")}),(0,H.jsxs)(l.Z,{sx:{pl:1},children:[(0,H.jsx)(h.Z,{children:(0,H.jsx)("strong",{children:c.name})}),C?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(h.Z,{variant:"h6",children:[" ",c.elementKey&&R.Z[c.elementKey]," ",(0,H.jsx)(I.Z,{src:null===(r=v.Z.weaponTypes)||void 0===r?void 0:r[c.weaponTypeKey]})," ",p.ZP.getLevelString(C.get(Z.ri.lvl).value,C.get(Z.ri.asc).value)]}),(0,H.jsxs)(h.Z,{children:[(0,H.jsx)(E.Z,{color:"success",children:"C".concat(C.get(Z.ri.constellation).value)})," ",(0,H.jsx)(E.Z,{color:C.get(Z.ri.bonus.auto).value?"info":"secondary",children:(0,H.jsx)("strong",{children:C.get(Z.ri.total.auto).value})})," ",(0,H.jsx)(E.Z,{color:C.get(Z.ri.bonus.skill).value?"info":"secondary",children:(0,H.jsx)("strong",{children:C.get(Z.ri.total.skill).value})})," ",(0,H.jsx)(E.Z,{color:C.get(Z.ri.bonus.burst).value?"info":"secondary",children:(0,H.jsx)("strong",{children:C.get(Z.ri.total.burst).value})})]})]}):(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(h.Z,{variant:"h6",children:(0,H.jsx)(E.Z,{color:"primary",children:"NEW"})})}),(0,H.jsx)("small",{children:(0,H.jsx)(W.t,{stars:S,colored:!0})})]})]})})]})}},20005:function(e,t,n){function r(e){var t=e.condition,n=e.wrapper,r=e.falseWrapper,i=e.children;return t?n(i):r?r(i):i}n.d(t,{Z:function(){return r}})},14763:function(e,t,n){n.d(t,{ZP:function(){return g},JW:function(){return j},lD:function(){return b}});var r=n(53174),i=n(54483),a=n(68870),o=n(20890),s=n(66934),c=n(90493),u=n(72791),l=n(2693),d=n(79406),f=n(60393),h=n(96106),x=n(91702),v=n(75545),p=n(78661),m=n(35893),Z=n(80184);function g(e){var t=e.field,n=e.fieldContext,r=e.component,i=(0,u.useContext)(l.R),a=i.data,o=i.oldData;if(!(0,u.useMemo)((function(){var e,n;return null===(e=null===t||void 0===t||null===(n=t.canShow)||void 0===n?void 0:n.call(t,a))||void 0===e||e}),[t,a]))return null;if("node"in t){var s=n?a.get((0,p.aT)(t.node,{target:n.data.data[0]})):a.get(t.node);if(s.isEmpty)return null;if(o){var c=n?o.get((0,p.aT)(t.node,{target:n.oldData.data[0]})):o.get(t.node),d=c.isEmpty?0:c.value;return(0,Z.jsx)(j,{node:s,oldValue:d,suffix:t.textSuffix,component:r})}return(0,Z.jsx)(j,{node:s,suffix:t.textSuffix,component:r})}return(0,Z.jsx)(y,{field:t,component:r})}function y(e){var t,n=e.field,r=e.component,i=(0,u.useContext)(l.R).data,s=(0,f.mY)(n.value,i),c=(0,f.mY)(n.variant,i),d=n.text&&(0,Z.jsx)("span",{children:n.text}),h=n.textSuffix&&(0,Z.jsx)("span",{children:n.textSuffix});return(0,Z.jsxs)(a.Z,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:r,children:[(0,Z.jsxs)(o.Z,{color:"".concat(c,".main"),sx:{display:"flex",gap:1,alignItems:"center"},children:[d,h]}),(0,Z.jsxs)(o.Z,{children:["number"===typeof s?null===(t=s.toFixed)||void 0===t?void 0:t.call(s,n.fixed):s,n.unit]})]})}function j(e){var t=e.node,n=e.oldValue,s=e.suffix,c=e.component;if(t.isEmpty)return null;s=s&&(0,Z.jsx)("span",{children:s});var u=t.info.key&&v.Z[t.info.key],l=t.info.key?d.ZP.get(t.info.key):"",f=t.info.isTeamBuff,p=t.formula,g="";if(n){var y=t.value-n;g=(0,Z.jsxs)("span",{children:[(0,d.EC)(n,t.unit),y>1e-4||y<-1e-4?(0,Z.jsxs)(x.Z,{color:y>0?"success":"error",children:[" ",y>0?"+":"",(0,d.EC)(y,t.unit)]}):""]})}else g=(0,d.EC)(t.value,t.unit);var j=!!t.formula&&(0,Z.jsx)(h.Z,{placement:"top",title:(0,Z.jsx)(o.Z,{children:p}),children:(0,Z.jsx)(a.Z,{component:"span",sx:{cursor:"help"},children:(0,Z.jsx)(i.G,{icon:r.sph})})});return(0,Z.jsxs)(a.Z,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:c,children:[(0,Z.jsxs)(o.Z,{color:"".concat(t.info.variant,".main"),sx:{display:"flex",gap:1,alignItems:"center"},children:[!!f&&(0,Z.jsx)(m.Z,{}),u,l,s]}),(0,Z.jsxs)(o.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[g,j]})]})}var b=(0,s.ZP)(c.Z)((function(e){var t=e.theme;return{borderRadius:t.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:t.palette.contentDark.main},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:t.palette.contentDarker.main}}}))},48510:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(1413),i=n(45987),a=n(72466),o=n(68870),s=n(72791),c=n(24351),u=n(66934),l=n(90388),d=(0,u.ZP)(l.Z,{shouldForwardProp:function(e){return"baseColor"!==e&&"selectedColor"!==e}})((function(e){var t=e.theme,n=e.baseColor,r=void 0===n?"secondary":n,i=e.selectedColor,a=void 0===i?"success":i;return{"&":{backgroundColor:t.palette[r].main,color:t.palette[r].contrastText},"&:hover":{backgroundColor:t.palette[r].dark},"&.Mui-selected":{backgroundColor:t.palette[a].main,color:t.palette[a].contrastText},"&.Mui-selected:hover":{backgroundColor:t.palette[a].dark},"&.Mui-disabled":{backgroundColor:t.palette[r].dark},"&.Mui-selected.Mui-disabled":{backgroundColor:t.palette[a].dark}}})),f=n(75545),h=n(80184),x=["value","onChange"];function v(e){var t=e.value,n=e.onChange,u=(0,i.Z)(e,x),l=(0,s.useCallback)((function(e,t){return n(t||"")}),[n]);return(0,h.jsx)(a.Z,(0,r.Z)((0,r.Z)({exclusive:!0,onChange:l,value:t||c.N},u),{},{children:c.N.map((function(e){return(0,h.jsx)(d,{value:e,selectedColor:e,children:(0,h.jsx)(o.Z,{sx:{fontSize:"2em",lineHeight:1},children:f.h[e]})},e)}))}))}},73578:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(1413),i=n(45987),a=n(90388),o=n(72791),s=n(9350),c=n(24351),u=n(55942),l=n(91839),d=n(80184),f=["value","onChange"];function h(e){var t=e.value,n=e.onChange,h=(0,i.Z)(e,f),x=(0,o.useCallback)((function(e,t){return n(t||"")}),[n]);return(0,d.jsx)(l.Z,(0,r.Z)((0,r.Z)({exclusive:!0,onChange:x,value:t||c.yd},h),{},{children:c.yd.map((function(e){var t;return(0,d.jsx)(a.Z,{value:e,children:(0,d.jsx)(u.Z,{src:null===(t=s.Z.weaponTypes)||void 0===t?void 0:t[e],size:2})},e)}))}))}},77208:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(68870),i=n(20890),a=n(72791),o=n(66218),s=n(56928),c=n(26138),u=n(87234),l=n(79406),d=n(42320),f=n(3992),h=n(25617),x=n(75545),v=n(41717),p=n(80184);function m(e){var t=e.weaponId,n=(0,a.useContext)(s.t).database._getWeapon(t),l=(0,d.Z)((null===n||void 0===n?void 0:n.key)&&o.ZP.get(n.key),[null===n||void 0===n?void 0:n.key]),x=(0,a.useMemo)((function(){return l&&n&&(0,u.mP)([l.data,(0,u.v0)(n)])}),[l,n]);if(!n||!l||!x)return null;var m=(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(Z,{node:x.get(c.ri.weapon.main)}),(0,p.jsx)(Z,{node:x.get(c.ri.weapon.sub)})]});return(0,p.jsxs)(f.Z,{sx:{height:"100%",maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[(0,p.jsx)(r.Z,{display:"flex",flexDirection:"column",alignContent:"flex-end",className:"grad-".concat(l.rarity,"star"),children:(0,p.jsx)(v.Z,{sheet:l,addlText:m,children:(0,p.jsx)(r.Z,{component:"img",src:l.img,maxWidth:"100%",maxHeight:"100%",sx:{mt:"auto"}})})}),(0,p.jsx)(i.Z,{variant:"subtitle1",sx:{position:"absolute",lineHeight:1,pointerEvents:"none"},children:(0,p.jsx)(h.Z,{color:"primary",children:o.ZP.getLevelString(n)})}),l.hasRefinement&&(0,p.jsx)(i.Z,{variant:"subtitle1",sx:{position:"absolute",bottom:0,right:0,lineHeight:1,pointerEvents:"none"},children:(0,p.jsxs)(h.Z,{color:"secondary",children:["R",n.refinement]})})]})}function Z(e){var t=e.node;if(!t.info.key)return null;var n=(0,l.EC)(t.value,t.unit,t.unit?void 0:0);return(0,p.jsxs)(i.Z,{children:[x.Z[t.info.key]," ",n]})}},41717:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(47047),i=n(20890),a=n(72791),o=n(9350),s=n(96106),c=n(55942),u=n(80184);function l(e){var t=e.sheet,n=e.addlText,l=e.children,d=(0,u.jsxs)(a.Suspense,{fallback:(0,u.jsx)(r.Z,{variant:"text",width:100}),children:[(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(c.Z,{src:o.Z.weaponTypes[t.weaponType]})," ",t.name]}),n]});return(0,u.jsx)(s.Z,{placement:"top",title:d,disableInteractive:!0,children:l})}},2693:function(e,t,n){n.d(t,{R:function(){return r}});var r=(0,n(72791).createContext)({})},31148:function(e,t,n){n.d(t,{y:function(){return m},u:function(){return Z}});var r=n(29439),i=n(93433),a=n(15671),o=n(43144),s=n(55942),c=n(66624),u=n(87234),l=n(24351),d=n(26138),f=n(25617),h=n(80184),x=n.e(159).then(n.bind(n,22159)).then((function(e){return e.default})),v=function(e,t){return(0,h.jsx)(c.v,{ns:"artifact_".concat(e,"_gen"),key18:t})},p=x.then((function(e){return(0,u.b3)(Object.values(e).map((function(e){return e.data})))})),m=function(){function e(t,n,r){var i=this;(0,a.Z)(this,e),this.sheet=void 0,this.key=void 0,this.data=void 0,this.getSlotName=function(e){return v(i.key,"pieces.".concat(e,".name"))},this.getSlotDesc=function(e){return v(i.key,"pieces.".concat(e,".desc"))},this.setEffectDesc=function(e){return v(i.key,"setEffects.".concat(e))},this.setEffectDocument=function(e){var t;return null===(t=i.sheet.setEffects[e])||void 0===t?void 0:t.document},this.hasEnough=function(e,t){var n;return(null!==(n=t.get(d.qH.artSet[i.key]).value)&&void 0!==n?n:0)>=e},this.sheet=n,this.key=t,this.data=r}return(0,o.Z)(e,[{key:"name",get:function(){return v(this.key,"setName")}},{key:"defIconSrc",get:function(){var e=this.slots[0];if(this.slotIcons[e])return this.slotIcons[e]}},{key:"defIcon",get:function(){return(0,h.jsx)(s.Z,{src:this.defIconSrc,sx:{fontSize:"1.5em"}})}},{key:"nameWithIcon",get:function(){var e=this.slots[0];return(0,h.jsxs)("span",{children:[(0,h.jsx)(s.Z,{src:this.slotIcons[e]})," ",v(this.key,"setName")]})}},{key:"nameRaw",get:function(){return this.sheet.name}},{key:"rarity",get:function(){return this.sheet.rarity}},{key:"slots",get:function(){switch(this.key){case"PrayersForDestiny":case"PrayersForIllumination":case"PrayersForWisdom":case"PrayersToSpringtime":return["circlet"];default:return(0,i.Z)(l.eV)}}},{key:"slotIcons",get:function(){return this.sheet.icons}},{key:"setEffects",get:function(){return this.sheet.setEffects}}],[{key:"get",value:function(e){return e?x.then((function(t){return t[e]})):void 0}},{key:"getAll",get:function(){return x}},{key:"getAllData",get:function(){return p}},{key:"setKeysByRarities",value:function(e){var t={};return Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),a=n[0],o=n[1],s=Math.max.apply(Math,(0,i.Z)(o.rarity));t[s]?t[s].push(a):t[s]=[a]})),t}},{key:"setEffects",value:function(e,t){var n={};return Object.entries(e).forEach((function(e){var i=(0,r.Z)(e,2),a=i[0],o=i[1],s=Object.keys(o.setEffects).map((function(e){return parseInt(e)})).filter((function(e){return o.hasEnough(e,t)}));s.length&&(n[a]=s)})),n}}]),e}(),Z=function(e,t){return{title:e("setName"),icon:(0,h.jsx)(s.Z,{size:2,sx:{m:-1},src:t}),action:(0,h.jsx)(f.Z,{color:"success",children:"4-set"})}}},11741:function(e,t,n){n.d(t,{J:function(){return T},Y:function(){return H}});var r,i=n(1413),a=n(93433),o=n(75545),s=n(66624),c=n(26138),u=n(87234),l=n(78661),d=n(24351),f=n(60393),h=n(53343),x=n(80184),v=function(e){return(0,x.jsx)(s.v,{ns:"elementalResonance_gen",key18:e})},p=(0,f.Uq)(d.Kj,(function(e){return["".concat(e,"_res_"),(0,l.ew)(l.Sm.apply(void 0,(0,a.Z)(d.Kj.map((function(e){return(0,l.VV)(1,c.uK[e])})))),4,(0,l.aQ)(.15))]})),m={name:v("ProtectiveCanopy.name"),desc:v("ProtectiveCanopy.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.anemo," ",o.Z.geo," ",o.Z.pyro," ",o.Z.hydro," ",o.Z.cryo," ",o.Z.electro," x4"]}),canShow:function(e){return 4===d.N.filter((function(t){return e.get(c.uK[t]).value>=1})).length},sections:[{teamBuff:!0,fields:Object.values(p).map((function(e){return{node:e}}))}]},Z=(0,l.ew)(c.uK.pyro,2,(0,l.aQ)(.25)),g={name:v("FerventFlames.name"),desc:v("FerventFlames.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.pyro," ",o.Z.pyro]}),canShow:function(e){return e.get(c.uK.pyro).value>=2},sections:[{teamBuff:!0,fields:[{text:(0,h.st)("effectDuration.cryo"),value:-40,unit:"%"},{node:Z}]}]},y=(0,l.ew)(c.uK.hydro,2,(0,l.aQ)(.25)),j={name:v("SoothingWater.name"),desc:v("SoothingWater.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.hydro," ",o.Z.hydro]}),canShow:function(e){return e.get(c.uK.hydro).value>=2},sections:[{teamBuff:!0,fields:[{text:(0,h.st)("effectDuration.pyro"),value:-40,unit:"%"},{node:y}]}]},b=["resonance","ShatteringIce"],k=(0,h.v9)(b),w=(0,l.ew)(c.uK.cryo,2,(0,l.Dg)(k,"on",(0,l.aQ)(.15))),C={name:v("ShatteringIce.name"),desc:v("ShatteringIce.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.cryo," ",o.Z.cryo]}),canShow:function(e){return e.get(c.uK.cryo).value>=2},sections:[{teamBuff:!0,fields:[{text:(0,h.st)("effectDuration.electro"),value:-40,unit:"%"}],conditional:{teamBuff:!0,path:b,value:k,name:(r="ShatteringIce.cond",(0,x.jsx)(s.v,{ns:"elementalResonance",key18:r})),header:{title:v("ShatteringIce.name"),icon:o.Z.cryo},states:{on:{fields:[{node:w}]}}}}]},S={name:v("HighVoltage.name"),desc:v("HighVoltage.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.electro," ",o.Z.electro]}),canShow:function(e){return e.get(c.uK.electro).value>=2},sections:[{teamBuff:!0,fields:[{text:(0,h.st)("effectDuration.hydro"),value:-40,unit:"%"}]}]},P=(0,l.ew)(c.uK.anemo,2,(0,l.aQ)(-.15)),K=(0,l.ew)(c.uK.anemo,2,(0,l.aQ)(.1)),I=(0,l.ew)(c.uK.anemo,2,(0,l.aQ)(-.05)),_={name:v("ImpetuousWinds.name"),desc:v("ImpetuousWinds.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.anemo," ",o.Z.anemo]}),canShow:function(e){return e.get(c.uK.anemo).value>=2},sections:[{teamBuff:!0,fields:[{node:P},{node:K},{node:I}]}]},D=["resonance","EnduringRock"],E=(0,h.v9)(D),W=(0,l.ew)(c.uK.geo,2,(0,l.aQ)(.15)),R=(0,l.ew)(c.uK.geo,2,(0,l.Dg)(E,"on",(0,l.aQ)(.15))),M=(0,l.ew)(c.uK.geo,2,(0,l.Dg)(E,"on",(0,l.aQ)(-.2))),T=[m,g,j,C,S,_,{name:v("EnduringRock.name"),desc:v("EnduringRock.desc"),icon:(0,x.jsxs)("span",{children:[o.Z.geo," ",o.Z.geo]}),canShow:function(e){return e.get(c.uK.geo).value>=2},sections:[{teamBuff:!0,text:v("EnduringRock.desc"),fields:[{node:W}],conditional:{teamBuff:!0,path:D,value:E,header:{title:v("EnduringRock.name"),icon:o.Z.geo},name:(0,h.st)("protectedByShield"),states:{on:{fields:[{node:R},{node:M},{text:(0,h.Oy)("duration"),value:15,unit:"s"}]}}}}]}],H=(0,u.d1)({premod:(0,i.Z)((0,i.Z)({},p),{},{atk_:Z,incHeal_:y,staminaDec_:P,moveSPD_:K,cdRed_:I,shield_:W,all_dmg_:R,geo_enemyRes_:M}),total:{critRate_:w}})},53343:function(e,t,n){n.d(t,{st:function(){return s},Oy:function(){return c},v9:function(){return u},wV:function(){return l},dW:function(){return d}});var r=n(93433),i=n(66624),a=n(78661),o=n(80184),s=function(e,t){return(0,o.jsx)(i.v,{ns:"sheet",key18:e,values:t})},c=function(e){return(0,o.jsx)(i.v,{ns:"sheet_gen",key18:e})},u=function(e){return(0,a.Mp)(["conditional"].concat((0,r.Z)(e)))};function l(e,t){var n=[e,t];return[n,u(n)]}function d(e,t){return[function(n){return(0,o.jsx)(i.v,{ns:"".concat(e,"_").concat(t,"_gen"),key18:n})},function(n,r){return(0,o.jsx)(i.v,{ns:"".concat(e,"_").concat(t),key18:n,values:r})}]}},66218:function(e,t,n){n.d(t,{ZP:function(){return h},uh:function(){return x},p$:function(){return v}});var r=n(29439),i=n(15671),a=n(43144),o=n(66624),s=n(2139),c=n(55942),u=n(26138),l=n(25617),d=n(80184),f=n.e(505).then(n.bind(n,80505)).then((function(e){return e.default})),h=function(){function e(t,n,r,a){var s=this;(0,i.Z)(this,e),this.key=void 0,this.sheet=void 0,this.data=void 0,this.rarity=void 0,this.weaponType=void 0,this.tr=function(e){return(0,d.jsx)(o.v,{ns:"weapon_".concat(s.key,"_gen"),key18:e})},this.passiveDescription=function(e){return s.hasRefinement?s.tr("passiveDescription.".concat(e)):""},this.rarity=r.rarity,this.weaponType=r.weaponType,this.key=t,this.sheet=n,this.data=a}return(0,a.Z)(e,[{key:"name",get:function(){return this.tr("name")}},{key:"hasRefinement",get:function(){return this.rarity>2}},{key:"passiveName",get:function(){return this.hasRefinement?this.tr("passiveName"):""}},{key:"description",get:function(){return this.tr("description")}},{key:"img",get:function(){return this.sheet.icon}},{key:"imgAwaken",get:function(){return this.sheet.iconAwaken}},{key:"document",get:function(){return this.sheet.document}},{key:"milestoneLevels",get:function(){return this.hasRefinement?s.D4:s.Xu}},{key:"ambiguousLevel",value:function(e){return this.hasRefinement?(0,s.ek)(e):(0,s.nB)(e)}}],[{key:"getAll",get:function(){return f}}]),e}();h.get=function(e){return e?f.then((function(t){return t[e]})):void 0},h.getWeaponsOfType=function(e,t){return Object.fromEntries(Object.entries(e).filter((function(e){var n=(0,r.Z)(e,2);n[0];return n[1].weaponType===t})))},h.getLevelString=function(e){return"".concat(e.level,"/").concat(s.SJ[e.ascension])};var x=function(e,t,n,r){return{title:e("passiveName"),icon:function(e){return(0,d.jsx)(c.Z,{size:2,sx:{m:-1},src:e.get(u.qH.weapon.asc).value<2?t:n})},action:r&&(0,d.jsx)(l.Z,{color:"success",children:r})}},v=function(e){return function(t){return e("passiveDescription.".concat(t.get(u.qH.weapon.refineIndex).value))}}},53561:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(15861),i=n(87757),a=n.n(i),o=n(72791),s=n(16871),c=n(947),u=n(9274),l=n(24351),d=n(60393);var f=n(56928),h=n(11400);function x(){var e,t=(0,o.useContext)(f.t).database,n=(0,s.s0)(),i=(null!==(e=(0,s.bS)({path:"/character/:charKey/:tab",end:!1}))&&void 0!==e?e:{params:{tab:""}}).params.tab,x=void 0===i?"":i,v=(0,o.useCallback)(function(){var e=(0,r.Z)(a().mark((function e(r){var i,o,s,f,v,p;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t._getChar(r),o=x,i){e.next=14;break}return s={key:r,level:1,ascension:0,hitMode:"avgHit",reactionMode:"",equippedArtifacts:(0,d.O)(l.eV,(function(){return""})),equippedWeapon:"",conditional:{},bonusStats:{},enemyOverride:{},buildSettings:(0,u.$)(),talent:{auto:1,skill:1,burst:1},infusionAura:"",constellation:0,team:["","",""],compareData:!1,favorite:!1},t.updateChar(s),e.next=7,c.ZP.get(r);case 7:if(f=e.sent){e.next=10;break}return e.abrupt("return");case 10:v=(0,h.Q)(f.weaponTypeKey),p=t.createWeapon(v),t.setWeaponLocation(p,r),o="";case 14:n("/character/".concat(r,"/").concat(o));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,t,x]);return v}},13434:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(29439),i=n(72791),a=n(56928);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,i.useContext)(a.t),n=t.database,o=(0,i.useState)(n._getChar(e)),s=(0,r.Z)(o,2),c=s[0],u=s[1];return(0,i.useEffect)((function(){return u(n._getChar(e))}),[n,e]),(0,i.useEffect)((function(){return e?n.followChar(e,u):void 0}),[e,u,n]),c}},50920:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(93433),i=n(4942),a=n(1413),o=n(72791),s=n(56928),c=n(60393);function u(e){var t=(0,o.useContext)(s.t).database;return(0,o.useCallback)((function(n){if(e)if("type"in n)switch(n.type){case"weapon":t.setWeaponLocation(n.id,e);break;case"enemyOverride":var o=t._getChar(e),s=o.enemyOverride,u=n.statKey,l=n.value;if(s[u]===l)break;t.updateChar((0,a.Z)((0,a.Z)({},o),{},{enemyOverride:(0,a.Z)((0,a.Z)({},s),{},(0,i.Z)({},u,l))}));break;case"editStats":var d=t._getChar(e),f=n.statKey,h=n.value,x=(0,c.I8)(d.bonusStats);if(x[f]===h)break;h?x[f]=h:delete x[f],t.updateChar((0,a.Z)((0,a.Z)({},d),{},{bonusStats:x}));break;case"resetStats":var v=t._getChar(e),p=n.statKey,m=v.bonusStats;delete m[p],t.updateChar((0,a.Z)((0,a.Z)({},v),{},{bonusStats:m}));break;case"team":var Z=t._getChar(e),g=Z.team,y=n.index,j=n.charKey,b=g[y];if(g[y]=j,b){var k=t._getChar(b);k&&t.updateChar((0,a.Z)((0,a.Z)({},k),{},{team:["","",""]}))}if(j){var w=t._getChar(j);w&&w.team.forEach((function(e){if(e){var n=t._getChar(e);n&&t.updateChar((0,a.Z)((0,a.Z)({},n),{},{team:n.team.map((function(e){return e===j?"":e}))}))}}))}g.forEach((function(n,i){if(n){var o=t._getChar(n);o&&t.updateChar((0,a.Z)((0,a.Z)({},o),{},{team:[e].concat((0,r.Z)(g)).filter((function(e,t){return t!==i+1}))}))}})),t.updateChar((0,a.Z)((0,a.Z)({},Z),{},{team:g}))}else t.updateChar((0,a.Z)((0,a.Z)({},t._getChar(e)),n))}),[e,t])}},47639:function(e,t,n){n.d(t,{Z:function(){return k},V:function(){return w}});var r=n(93433),i=n(4942),a=n(15861),o=n(1413),s=n(45987),c=n(29439),u=n(87757),l=n.n(u),d=n(72791),f=n(31148),h=n(947),x=n(11741),v=n(66218),p=n(56928),m=n(26138),Z=n(87234),g=n(60393),y=n(68544),j=n(42320),b=["data"];function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,r=(0,d.useContext)(p.t),i=r.database,a=(0,y.Z)(),u=(0,c.Z)(a,2),l=u[0],f=u[1],h=(0,j.Z)(w(i,e,t,n),[l,e,i,t,n]),x=null!==h&&void 0!==h?h:{},v=x.team,m=void 0===v?[]:v,k=x.teamData,C=x.teamBundle;(0,d.useEffect)((function(){return e?i.followChar(e,f):void 0}),[e,f,i]),(0,d.useEffect)((function(){return e?i.followAnyArt(f):void 0}),[e,f,i]);var S=(0,c.Z)(m,4),P=S[0],K=S[1],I=S[2],_=S[3];(0,d.useEffect)((function(){return P?i.followChar(P,f):void 0}),[P,f,i]),(0,d.useEffect)((function(){return K?i.followChar(K,f):void 0}),[K,f,i]),(0,d.useEffect)((function(){return I?i.followChar(I,f):void 0}),[I,f,i]),(0,d.useEffect)((function(){return _?i.followChar(_,f):void 0}),[_,f,i]);var D=(0,d.useMemo)((function(){return k&&(0,Z.Qo)(k,e)}),[k,e]),E=(0,d.useMemo)((function(){if(D&&C)return(0,g.xh)(D,(function(e,t){var n=C[t],r=(n.data,(0,s.Z)(n,b));return(0,o.Z)((0,o.Z)({},e),r)}))}),[D,C]);return E}function w(e,t){return C.apply(this,arguments)}function C(){return C=(0,a.Z)(l().mark((function e(t,n){var r,o,s,c,u,d,f=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=f.length>2&&void 0!==f[2]?f[2]:0,o=f.length>3?f[3]:void 0,n){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,S(t,n,r,o);case 6:if(s=e.sent){e.next=9;break}return e.abrupt("return");case 9:return c=[n],u=(0,i.Z)({},n,s),d=(0,i.Z)({},n,s.data),e.next=14,Promise.all(s.character.team.map(function(){var e=(0,a.Z)(l().mark((function e(n){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,S(t,n);case 4:if(r=e.sent){e.next=7;break}return e.abrupt("return");case 7:c.push(n),u[n]=r,d[n]=r.data;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 14:return e.abrupt("return",{team:c,teamData:d,teamBundle:u});case 15:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function S(e,t){return P.apply(this,arguments)}function P(){return P=(0,a.Z)(l().mark((function e(t,n){var i,a,o,s,c,u,d,p,g,y=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=y.length>2&&void 0!==y[2]?y[2]:0,a=y.length>3?y[3]:void 0,n){e.next=4;break}return e.abrupt("return");case 4:if(o=t._getChar(n)){e.next=7;break}return e.abrupt("return");case 7:if(s=t._getWeapon(o.equippedWeapon)){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,h.ZP.get(n);case 12:return c=e.sent,e.next=15,v.ZP.get(s.key);case 15:return u=e.sent,e.next=18,f.y.getAllData;case 18:if(d=e.sent,c&&u&&d){e.next=21;break}return e.abrupt("return");case 21:return p=(null!==a&&void 0!==a?a:Object.values(o.equippedArtifacts).map((function(e){return t._getArt(e)}))).filter((function(e){return e})),g=[].concat((0,r.Z)(p.map((function(e){return(0,Z.n3)(e,i)}))),[(0,Z.vn)(o),c.getData(o.elementKey),(0,Z.v0)(s),u.data,d,m.y0,x.Y]),e.abrupt("return",{character:o,weapon:s,characterSheet:c,weaponSheet:u,data:g});case 24:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}}}]);
//# sourceMappingURL=93.c98f7551.chunk.js.map