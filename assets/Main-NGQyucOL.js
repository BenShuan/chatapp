import{r as a,U as m,j as t,L as u}from"./index-8Off4IFn.js";import{T as n}from"./TextField-ch3JUBxM.js";import{B as c}from"./Button-sUI3ERhV.js";import"./isHostComponent-jcd54X0C.js";import"./List-Jt_vRrzQ.js";function h(){const{name:x,setName:s,SignIn:i}=a.useContext(m);a.useEffect(()=>{s("התחברות")},[]);const r=e=>{e.preventDefault();let{mail:l,pass:o}=e.target;i(l.value,o.value)};return t.jsx(t.Fragment,{children:t.jsxs("form",{className:"flex-center-all",onSubmit:r,style:{width:"70%",margin:"auto",flexDirection:"column"},children:[t.jsx(n,{label:"מייל",type:"email",variant:"outlined",name:"mail"}),t.jsx(n,{label:"סיסמה",variant:"outlined",name:"pass"}),t.jsx(c,{type:"submit",variant:"contained",children:"כניסה"}),t.jsx(u,{style:{display:"block",margin:15},to:"/register",children:"להרשמה"})]})})}export{h as default};