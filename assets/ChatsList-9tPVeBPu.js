import{a as c,r as m,u as _,_ as M,j as r,e as S,U as at,g as q,h as nt,i as it}from"./index-HjMk2-pq.js";import{T as N,r as rt,i as ct,I as lt}from"./createSvgIcon-x9BAF_kY.js";import{a as P,L as dt}from"./List-OdStRU6P.js";import{g as k,f as U,j as G,c as R,k as V,a as pt,l as ut,u as mt,i as W,B as yt}from"./ButtonBase-7jkdPV5E.js";function ft(t){return U("MuiListItem",t)}const gt=k("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),h=gt,bt=k("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),vt=bt;function xt(t){return U("MuiListItemSecondaryAction",t)}k("MuiListItemSecondaryAction",["root","disableGutters"]);const Ct=["className"],It=t=>{const{disableGutters:e,classes:s}=t;return V({root:["root",e&&"disableGutters"]},xt,s)},ht=G("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>c({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),J=m.forwardRef(function(e,s){const a=_({props:e,name:"MuiListItemSecondaryAction"}),{className:d}=a,l=M(a,Ct),p=m.useContext(P),y=c({},a,{disableGutters:p.disableGutters}),i=It(y);return r.jsx(ht,c({className:R(i.root,d),ownerState:y,ref:s},l))});J.muiName="ListItemSecondaryAction";const Lt=J,$t=["className"],Pt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Rt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},At=t=>{const{alignItems:e,button:s,classes:a,dense:d,disabled:l,disableGutters:p,disablePadding:y,divider:i,hasSecondaryAction:o,selected:n}=t;return V({root:["root",d&&"dense",!p&&"gutters",!y&&"padding",i&&"divider",l&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",o&&"secondaryAction",n&&"selected"],container:["container"]},ft,a)},jt=G("div",{name:"MuiListItem",slot:"Root",overridesResolver:Rt})(({theme:t,ownerState:e})=>c({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&c({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${vt.root}`]:{paddingRight:48}},{[`&.${h.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${h.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:S(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${h.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:S(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${h.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:S(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:S(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Tt=G("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),St=m.forwardRef(function(e,s){const a=_({props:e,name:"MuiListItem"}),{alignItems:d="center",autoFocus:l=!1,button:p=!1,children:y,className:i,component:o,components:n={},componentsProps:u={},ContainerComponent:b="li",ContainerProps:{className:A}={},dense:f=!1,disabled:g=!1,disableGutters:C=!1,disablePadding:L=!1,divider:Q=!1,focusVisibleClassName:X,secondaryAction:F,selected:Z=!1,slotProps:tt={},slots:et={}}=a,st=M(a.ContainerProps,$t),ot=M(a,Pt),w=m.useContext(P),O=m.useMemo(()=>({dense:f||w.dense||!1,alignItems:d,disableGutters:C}),[d,w.dense,f,C]),B=m.useRef(null);pt(()=>{l&&B.current&&B.current.focus()},[l]);const I=m.Children.toArray(y),z=I.length&&ut(I[I.length-1],["ListItemSecondaryAction"]),j=c({},a,{alignItems:d,autoFocus:l,button:p,dense:O.dense,disabled:g,disableGutters:C,disablePadding:L,divider:Q,hasSecondaryAction:z,selected:Z}),H=At(j),D=mt(B,s),T=et.root||n.Root||jt,$=tt.root||u.root||{},v=c({className:R(H.root,$.className,i),disabled:g},ot);let x=o||"li";return p&&(v.component=o||"div",v.focusVisibleClassName=R(h.focusVisible,X),x=yt),z?(x=!v.component&&!o?"div":x,b==="li"&&(x==="li"?x="div":v.component==="li"&&(v.component="div")),r.jsx(P.Provider,{value:O,children:r.jsxs(Tt,c({as:b,className:R(H.container,A),ref:D,ownerState:j},st,{children:[r.jsx(T,c({},$,!W(T)&&{as:x,ownerState:c({},j,$.ownerState)},v,{children:I})),I.pop()]}))})):r.jsx(P.Provider,{value:O,children:r.jsxs(T,c({},$,{as:x,ref:D},!W(T)&&{ownerState:c({},j,$.ownerState)},v,{children:[I,F&&r.jsx(Lt,{children:F})]}))})}),Nt=St;function Mt(t){return U("MuiListItemText",t)}const kt=k("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Y=kt,Gt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Ot=t=>{const{classes:e,inset:s,primary:a,secondary:d,dense:l}=t;return V({root:["root",s&&"inset",l&&"dense",a&&d&&"multiline"],primary:["primary"],secondary:["secondary"]},Mt,e)},Bt=G("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[{[`& .${Y.primary}`]:e.primary},{[`& .${Y.secondary}`]:e.secondary},e.root,s.inset&&e.inset,s.primary&&s.secondary&&e.multiline,s.dense&&e.dense]}})(({ownerState:t})=>c({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),_t=m.forwardRef(function(e,s){const a=_({props:e,name:"MuiListItemText"}),{children:d,className:l,disableTypography:p=!1,inset:y=!1,primary:i,primaryTypographyProps:o,secondary:n,secondaryTypographyProps:u}=a,b=M(a,Gt),{dense:A}=m.useContext(P);let f=i??d,g=n;const C=c({},a,{disableTypography:p,inset:y,primary:!!f,secondary:!!g,dense:A}),L=Ot(C);return f!=null&&f.type!==N&&!p&&(f=r.jsx(N,c({variant:A?"body2":"body1",className:L.primary,component:o!=null&&o.variant?void 0:"span",display:"block"},o,{children:f}))),g!=null&&g.type!==N&&!p&&(g=r.jsx(N,c({variant:"body2",className:L.secondary,color:"text.secondary",display:"block"},u,{children:g}))),r.jsxs(Bt,c({className:R(L.root,l),ownerState:C,ref:s},b,{children:[f,g]}))}),Ut=_t;var E={},Vt=ct;Object.defineProperty(E,"__esModule",{value:!0});var K=E.default=void 0,Et=Vt(rt()),Ft=r;K=E.default=(0,Et.default)((0,Ft.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"}),"Comment");function qt(){const{objList:t}=m.useContext(at),[e,s]=m.useState(null);m.useEffect(()=>{var i,o;s((o=(i=q)==null?void 0:i.currentUser)==null?void 0:o.email)},[q]);const[a,,,,d]=nt("chatId"),l=it(),p=i=>{var o=null;a.find(n=>{for(const u in n)(n[u].user1===e&&n[u].user2===i||n[u].user2===e&&n[u].user1===i)&&(o=u)}),o?l("/chat",{state:{chatId:o}}):(d(i,e).then(()=>{l("/chat",{state:{chatId:o}}),console.log("succses")}).catch(n=>{console.log(n)}),o=a.length,console.log("chatId",o))},y=()=>{let i=[],o=t.filter((n,u)=>n[u].email!==e);return o.length>0&&(i=o.map((n,u)=>{for(const b in n)return r.jsx(Nt,{disableGutters:!0,secondaryAction:r.jsx(lt,{"aria-label":"comment",disabled:!0,children:r.jsx(K,{})}),onClick:()=>p(n[b].email),children:r.jsx(Ut,{primary:`שיחה עם ${n[b].name}`})},n[b].email)})),i};return r.jsx(r.Fragment,{children:r.jsx(dt,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:y()})})}export{qt as default};
