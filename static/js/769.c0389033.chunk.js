"use strict";(self.webpackChunklittle_bro=self.webpackChunklittle_bro||[]).push([[769],{70415:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var r=t(15861),i=t(29439),c=t(87757),o=t.n(c),s=t(53174),a=t(54483),l=t(76189),u=t(80184),h=(0,l.Z)((0,u.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever"),d=t(45781),f=t(19701),x=t(35893),Z=t(66630),p=t(68870),m=t(39504),v=t(61889),g=t(57246),j=t(47047),C=t(20890),y=t(24518),w=t(94721),b=t(13400),z=t(30178),P=t(72791),k=t(16129),H=t(22020),M=t(76899),V=t(16871),L=t(96106),A=t(3992),T=t(3082),N=t(59215),K=t(48510),S=t(73578),_=t(947),R=t(56928),F=t(53561),G=t(17278),I=t(68544),D=t(42320),q=t(50921),E=t(46956),O=t(30865),B=t(60393),U=t(70645),$={xs:1,sm:2,md:3,lg:4,xl:4},J={xs:3,sm:3,md:5,lg:7,xl:7};function Q(){return{sortType:q.vV[0],ascending:!1,weaponType:"",element:""}}function W(e){var n=(0,H.$)("page_character").t,t=(0,P.useContext)(R.t).database,c=(0,G.Z)("CharacterDisplay",Q),l=(0,i.Z)(c,2),W=l[0],Y=l[1],ee=(0,P.useState)(0),ne=(0,i.Z)(ee,2),te=ne[0],re=ne[1],ie=(0,P.useRef)(null),ce=(0,P.useCallback)((function(e,n){var t;null===(t=ie.current)||void 0===t||t.scrollIntoView({behavior:"smooth"}),re(n-1)}),[re,ie]),oe=(0,U.Z)(),se=J[oe],ae=(0,P.useState)(!1),le=(0,i.Z)(ae,2),ue=le[0],he=le[1],de=(0,I.Z)(),fe=(0,i.Z)(de,2),xe=fe[0],Ze=fe[1];(0,P.useEffect)((function(){return k.ZP.pageview("/character"),t.followAnyChar(Ze)}),[Ze,t]);var pe=(0,D.Z)(_.ZP.getAll,[]),me=(0,P.useCallback)(function(){var e=(0,r.Z)(o().mark((function e(r){var i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.ZP.get(r);case 2:if(i=e.sent,"object"===typeof(c=null===i||void 0===i?void 0:i.name)&&(c=z.ZP.t("char_".concat(r,"_gen:name"))),window.confirm(n("removeCharacter",{value:c}))){e.next=7;break}return e.abrupt("return");case 7:t.removeChar(r);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,n]),ve=(0,F.Z)(),ge=(0,V.s0)(),je=W.element,Ce=W.weaponType,ye=(0,P.useMemo)((function(){return pe&&(0,q._L)(t,pe)}),[t,pe]),we=(0,P.useMemo)((function(){return pe&&(0,q.zU)(t,pe)}),[t,pe]),be=(0,P.useMemo)((function(){var e=t._getCharKeys().length;if(!ye||!we)return{charKeyList:[],totalCharNum:e};var n=t._getCharKeys().filter((0,E.C)({element:je,weaponType:Ce,favorite:"yes"},we)).sort((0,E.e)(W.sortType,W.ascending,ye)).concat(t._getCharKeys().filter((0,E.C)({element:je,weaponType:Ce,favorite:"no"},we)).sort((0,E.e)(W.sortType,W.ascending,ye)));return xe&&{charKeyList:n,totalCharNum:e}}),[xe,t,ye,W.sortType,W.ascending,je,we,Ce]),ze=be.charKeyList,Pe=be.totalCharNum,ke=(0,P.useMemo)((function(){var e=Math.ceil(ze.length/se),n=(0,B.uZ)(te,0,e-1);return{charKeyListToShow:ze.slice(n*se,(n+1)*se),numPages:e,currentPageIndex:n}}),[ze,te,se]),He=ke.charKeyListToShow,Me=ke.numPages,Ve=ke.currentPageIndex,Le=ze.length!==Pe?"".concat(ze.length,"/").concat(Pe):"".concat(Pe);return(0,u.jsxs)(p.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,u.jsx)(A.Z,{ref:ie,children:(0,u.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,u.jsxs)(v.ZP,{container:!0,spacing:1,children:[(0,u.jsx)(v.ZP,{item:!0,children:(0,u.jsx)(S.Z,{sx:{height:"100%"},onChange:function(e){return Y({weaponType:e})},value:W.weaponType,size:"small"})}),(0,u.jsx)(v.ZP,{item:!0,flexGrow:1,children:(0,u.jsx)(K.Z,{sx:{height:"100%"},onChange:function(e){return Y({element:e})},value:W.element,size:"small"})}),(0,u.jsx)(v.ZP,{item:!0,children:(0,u.jsx)(N.Z,{sx:{height:"100%"},sortKeys:q.vV,value:W.sortType,onChange:function(e){return Y({sortType:e})},ascending:W.ascending,onChangeAsc:function(e){return Y({ascending:e})}})})]}),(0,u.jsxs)(v.ZP,{container:!0,alignItems:"flex-end",children:[(0,u.jsx)(v.ZP,{item:!0,flexGrow:1,children:(0,u.jsx)(g.Z,{count:Me,page:Ve+1,onChange:ce})}),(0,u.jsx)(v.ZP,{item:!0,children:(0,u.jsx)(X,{numShowing:He.length,total:Le,t:n})})]})]})}),(0,u.jsx)(P.Suspense,{fallback:(0,u.jsx)(j.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:(0,u.jsxs)(v.ZP,{container:!0,spacing:1,columns:$,children:[(0,u.jsx)(v.ZP,{item:!0,xs:1,children:(0,u.jsxs)(A.Z,{sx:{height:"100%",minHeight:400,width:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)(m.Z,{children:(0,u.jsx)(C.Z,{sx:{textAlign:"center"},children:(0,u.jsx)(M.c,{t:n,i18nKey:"addNew"})})}),(0,u.jsx)(T.w,{newFirst:!0,show:ue,onHide:function(){return he(!1)},onSelect:ve}),(0,u.jsx)(p.Z,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,u.jsx)(y.Z,{onClick:function(){return he(!0)},color:"info",sx:{borderRadius:"1em"},children:(0,u.jsx)(C.Z,{variant:"h1",children:(0,u.jsx)(a.G,{icon:s.r8p,className:"fa-fw"})})})})]})}),He.map((function(e){return(0,u.jsx)(v.ZP,{item:!0,xs:1,children:(0,u.jsx)(O.Z,{characterKey:e,onClick:function(){return ge("".concat(e))},footer:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(w.Z,{}),(0,u.jsxs)(p.Z,{sx:{py:1,px:2,display:"flex",gap:1,justifyContent:"space-between"},children:[(0,u.jsx)(L.Z,{placement:"top",title:(0,u.jsx)(C.Z,{children:n("tabs.talent")}),children:(0,u.jsx)(b.Z,{onClick:function(){return ge("".concat(e,"/talent"))},children:(0,u.jsx)(d.Z,{})})}),(0,u.jsx)(L.Z,{placement:"top",title:(0,u.jsx)(C.Z,{children:n("tabs.equip")}),children:(0,u.jsx)(b.Z,{onClick:function(){return ge("".concat(e,"/equip"))},children:(0,u.jsx)(f.Z,{})})}),(0,u.jsx)(L.Z,{placement:"top",title:(0,u.jsx)(C.Z,{children:n("tabs.buffs")}),children:(0,u.jsx)(b.Z,{onClick:function(){return ge("".concat(e,"/teambuffs"))},children:(0,u.jsx)(x.Z,{})})}),(0,u.jsx)(L.Z,{placement:"top",title:(0,u.jsx)(C.Z,{children:n("tabs.optimize")}),children:(0,u.jsx)(b.Z,{onClick:function(){return ge("".concat(e,"/optimize"))},children:(0,u.jsx)(Z.Z,{})})}),(0,u.jsx)(w.Z,{orientation:"vertical"}),(0,u.jsx)(L.Z,{placement:"top",title:(0,u.jsx)(C.Z,{children:n("delete")}),children:(0,u.jsx)(b.Z,{color:"error",onClick:function(){return me(e)},children:(0,u.jsx)(h,{})})})]})]})})},e)}))]})}),Me>1&&(0,u.jsx)(A.Z,{children:(0,u.jsx)(m.Z,{children:(0,u.jsxs)(v.ZP,{container:!0,alignItems:"flex-end",children:[(0,u.jsx)(v.ZP,{item:!0,flexGrow:1,children:(0,u.jsx)(g.Z,{count:Me,page:Ve+1,onChange:ce})}),(0,u.jsx)(v.ZP,{item:!0,children:(0,u.jsx)(X,{numShowing:He.length,total:Le,t:n})})]})})})]})}function X(e){var n=e.numShowing,t=e.total,r=e.t;return(0,u.jsx)(C.Z,{color:"text.secondary",children:(0,u.jsxs)(M.c,{t:r,i18nKey:"showingNum",count:n,value:t,children:["Showing ",(0,u.jsx)("b",{children:{count:n}})," out of ",{value:t}," Characters"]})})}},70645:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(13967),i=t(95193);function c(){var e=(0,r.Z)(),n=(0,i.Z)(e.breakpoints.up("sm")),t=(0,i.Z)(e.breakpoints.up("md")),c=(0,i.Z)(e.breakpoints.up("lg"));return(0,i.Z)(e.breakpoints.up("xl"))?"xl":c?"lg":t?"md":n?"sm":"xs"}},66630:function(e,n,t){var r=t(76189),i=t(80184);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.42zm-6.78.66h5v1.5h-5v-1.5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16zm6.5 1.25h-5v-1.5h5v1.5zm0-2.5h-5v-1.5h5v1.5z"}),"Calculate")},19701:function(e,n,t){var r=t(76189),i=t(80184);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z"}),"Checkroom")},45781:function(e,n,t){var r=t(76189),i=t(80184);n.Z=(0,r.Z)((0,i.jsx)("path",{fillRule:"evenodd",d:"M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42L14.82 15z"}),"FactCheck")},90690:function(e,n,t){var r=t(76189),i=t(80184);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder")},35893:function(e,n,t){var r=t(76189),i=t(80184);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"}),"Groups")},66647:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(4942),i=t(87462),c=t(63366),o=t(72791),s=t(28182),a=t(90767),l=t(93736),u=t(66934),h=t(95159);function d(e){return(0,h.Z)("MuiCardActionArea",e)}var f=(0,t(30208).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),x=t(23701),Z=t(80184),p=["children","className","focusVisibleClassName"],m=(0,u.ZP)(x.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,t=e.theme;return n={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(n,"&:hover .".concat(f.focusHighlight),{opacity:t.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(n,"&.".concat(f.focusVisible," .").concat(f.focusHighlight),{opacity:t.palette.action.focusOpacity}),n})),v=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,n){return n.focusHighlight}})((function(e){var n=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:n.transitions.create("opacity",{duration:n.transitions.duration.short})}})),g=o.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCardActionArea"}),r=t.children,o=t.className,u=t.focusVisibleClassName,h=(0,c.Z)(t,p),f=t,x=function(e){var n=e.classes;return(0,a.Z)({root:["root"],focusHighlight:["focusHighlight"]},d,n)}(f);return(0,Z.jsxs)(m,(0,i.Z)({className:(0,s.Z)(x.root,o),focusVisibleClassName:(0,s.Z)(u,x.focusVisible),ref:n,ownerState:f},h,{children:[r,(0,Z.jsx)(v,{className:x.focusHighlight,ownerState:f})]}))}))},15861:function(e,n,t){function r(e,n,t,r,i,c,o){try{var s=e[c](o),a=s.value}catch(l){return void t(l)}s.done?n(a):Promise.resolve(a).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,c){var o=e.apply(n,t);function s(e){r(o,i,c,s,a,"next",e)}function a(e){r(o,i,c,s,a,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=769.c0389033.chunk.js.map