import{r as i,a as x,g as L,s as f,_ as d,u as C,e as P,j as u,f as j,h as v}from"./index-qt8WzcbF.js";const M=i.createContext({}),R=M;function U(s){return x("MuiList",s)}L("MuiList",["root","padding","dense","subheader"]);const _=["children","className","component","dense","disablePadding","subheader"],y=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return v({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},U,e)},N=f("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:s})=>d({listStyle:"none",margin:0,padding:0,position:"relative"},!s.disablePadding&&{paddingTop:8,paddingBottom:8},s.subheader&&{paddingTop:0})),T=i.forwardRef(function(e,t){const o=C({props:e,name:"MuiList"}),{children:a,className:r,component:c="ul",dense:n=!1,disablePadding:p=!1,subheader:g}=o,h=P(o,_),m=i.useMemo(()=>({dense:n}),[n]),l=d({},o,{component:c,dense:n,disablePadding:p}),b=y(l);return u.jsx(R.Provider,{value:m,children:u.jsxs(N,d({as:c,className:j(b.root,r),ref:t,ownerState:l},h,{children:[g,a]}))})}),E=T;export{E as L,R as a};