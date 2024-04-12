import{k,l as _,p as G,b as i,r as m,q as U,a as M,j as r,c as R,t as V,G as T,e as ot,y as at,u as nt,H as it,I as S,J as rt,K as ct,U as lt,M as dt,N as pt,O as ut,B as mt,P as yt}from"./index-8Off4IFn.js";import{a as A,L as xt}from"./List-Jt_vRrzQ.js";import{i as D}from"./isHostComponent-jcd54X0C.js";function gt(t){return _("MuiListItem",t)}const ft=k("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),L=ft,bt=k("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),vt=bt;function Ct(t){return _("MuiListItemSecondaryAction",t)}k("MuiListItemSecondaryAction",["root","disableGutters"]);const It=["className"],ht=t=>{const{disableGutters:e,classes:s}=t;return V({root:["root",e&&"disableGutters"]},Ct,s)},Lt=G("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>i({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),K=m.forwardRef(function(e,s){const o=U({props:e,name:"MuiListItemSecondaryAction"}),{className:d}=o,p=M(o,It),l=m.useContext(A),y=i({},o,{disableGutters:l.disableGutters}),x=ht(y);return r.jsx(Lt,i({className:R(x.root,d),ownerState:y,ref:s},p))});K.muiName="ListItemSecondaryAction";const $t=K,Pt=["className"],Rt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],At=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},Nt=t=>{const{alignItems:e,button:s,classes:o,dense:d,disabled:p,disableGutters:l,disablePadding:y,divider:x,hasSecondaryAction:a,selected:c}=t;return V({root:["root",d&&"dense",!l&&"gutters",!y&&"padding",x&&"divider",p&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",a&&"secondaryAction",c&&"selected"],container:["container"]},gt,o)},jt=G("div",{name:"MuiListItem",slot:"Root",overridesResolver:At})(({theme:t,ownerState:e})=>i({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&i({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${vt.root}`]:{paddingRight:48}},{[`&.${L.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${L.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:T(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${L.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:T(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${L.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${L.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:T(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:T(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Tt=G("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),St=m.forwardRef(function(e,s){const o=U({props:e,name:"MuiListItem"}),{alignItems:d="center",autoFocus:p=!1,button:l=!1,children:y,className:x,component:a,components:c={},componentsProps:n={},ContainerComponent:u="li",ContainerProps:{className:b}={},dense:g=!1,disabled:f=!1,disableGutters:I=!1,disablePadding:$=!1,divider:Y=!1,focusVisibleClassName:Q,secondaryAction:E,selected:X=!1,slotProps:Z={},slots:tt={}}=o,et=M(o.ContainerProps,Pt),st=M(o,Rt),w=m.useContext(A),O=m.useMemo(()=>({dense:g||w.dense||!1,alignItems:d,disableGutters:I}),[d,w.dense,g,I]),B=m.useRef(null);ot(()=>{p&&B.current&&B.current.focus()},[p]);const h=m.Children.toArray(y),H=h.length&&at(h[h.length-1],["ListItemSecondaryAction"]),N=i({},o,{alignItems:d,autoFocus:p,button:l,dense:O.dense,disabled:f,disableGutters:I,disablePadding:$,divider:Y,hasSecondaryAction:H,selected:X}),z=Nt(N),q=nt(B,s),j=tt.root||c.Root||jt,P=Z.root||n.root||{},v=i({className:R(z.root,P.className,x),disabled:f},st);let C=a||"li";return l&&(v.component=a||"div",v.focusVisibleClassName=R(L.focusVisible,Q),C=it),H?(C=!v.component&&!a?"div":C,u==="li"&&(C==="li"?C="div":v.component==="li"&&(v.component="div")),r.jsx(A.Provider,{value:O,children:r.jsxs(Tt,i({as:u,className:R(z.container,b),ref:q,ownerState:N},et,{children:[r.jsx(j,i({},P,!D(j)&&{as:C,ownerState:i({},N,P.ownerState)},v,{children:h})),h.pop()]}))})):r.jsx(A.Provider,{value:O,children:r.jsxs(j,i({},P,{as:C,ref:q},!D(j)&&{ownerState:i({},N,P.ownerState)},v,{children:[h,E&&r.jsx($t,{children:E})]}))})}),Mt=St;function kt(t){return _("MuiListItemText",t)}const Gt=k("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),J=Gt,Ot=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Bt=t=>{const{classes:e,inset:s,primary:o,secondary:d,dense:p}=t;return V({root:["root",s&&"inset",p&&"dense",o&&d&&"multiline"],primary:["primary"],secondary:["secondary"]},kt,e)},_t=G("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[{[`& .${J.primary}`]:e.primary},{[`& .${J.secondary}`]:e.secondary},e.root,s.inset&&e.inset,s.primary&&s.secondary&&e.multiline,s.dense&&e.dense]}})(({ownerState:t})=>i({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),Ut=m.forwardRef(function(e,s){const o=U({props:e,name:"MuiListItemText"}),{children:d,className:p,disableTypography:l=!1,inset:y=!1,primary:x,primaryTypographyProps:a,secondary:c,secondaryTypographyProps:n}=o,u=M(o,Ot),{dense:b}=m.useContext(A);let g=x??d,f=c;const I=i({},o,{disableTypography:l,inset:y,primary:!!g,secondary:!!f,dense:b}),$=Bt(I);return g!=null&&g.type!==S&&!l&&(g=r.jsx(S,i({variant:b?"body2":"body1",className:$.primary,component:a!=null&&a.variant?void 0:"span",display:"block"},a,{children:g}))),f!=null&&f.type!==S&&!l&&(f=r.jsx(S,i({variant:"body2",className:$.secondary,color:"text.secondary",display:"block"},n,{children:f}))),r.jsxs(_t,i({className:R($.root,p),ownerState:I,ref:s},u,{children:[g,f]}))}),Vt=Ut;var F={},Ft=ct;Object.defineProperty(F,"__esModule",{value:!0});var W=F.default=void 0,Et=Ft(rt()),wt=r;W=F.default=(0,Et.default)((0,wt.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"}),"Comment");function Dt(){const{setName:t,objList:e,user:s}=m.useContext(lt),o=m.useContext(dt),[d,,,,p]=pt("chatId"),l=ut();m.useEffect(()=>{t("אנשי קשר")},[]);const y=a=>{var c=null;d.find(n=>{for(const u in n)(n[u].user1.email===s.email&&n[u].user2.email===a.email||n[u].user2.email===s.email&&n[u].user1.email===a.email)&&(c=u)}),c?l("/chat",{state:{chatId:c,chatWithName:a.name}}):(c=p(a,{email:s.email,name:s.displayName}),console.log("chaaatid",c),l("/chat",{state:{chatId:c,chatWithName:a.name}}))},x=()=>{let a=[],c=e.filter((n,u)=>n[u].email!==s.email);return c.length>0&&(a=c.map((n,u)=>{for(const b in n)return r.jsxs(Mt,{disableGutters:!0,onClick:()=>y(n[b]),sx:[{m:3,p:"5px 10px",borderRadius:15,boxShadow:"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;",transition:`${o.transitions.create(["background-color","scale","transform"],{duration:500})}`},{"&:hover":{cursor:"pointer",scale:"1.1",bgcolor:"#ddd",transition:`${o.transitions.create(["background-color","scale"],{duration:500})}`}},{"&:active":{}}],children:[r.jsx(yt,{"aria-label":"comment",disabled:!0,children:r.jsx(W,{})}),r.jsx(Vt,{sx:{textAlign:"end"},primary:`שיחה עם ${n[b].name}`})]},n[b].email)})),a};return r.jsx(mt,{sx:{width:"100%",justifyContent:"center"},children:r.jsx(xt,{sx:{margin:"auto",maxWidth:360,bgcolor:"background.default"},children:x()})})}export{Dt as default};