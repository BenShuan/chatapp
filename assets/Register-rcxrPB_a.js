import{r as s,U as u,j as e,B as x}from"./index-8Off4IFn.js";import{T as t}from"./TextField-ch3JUBxM.js";import{B as c}from"./Button-sUI3ERhV.js";import"./isHostComponent-jcd54X0C.js";import"./List-Jt_vRrzQ.js";function b(){const{setName:n,Register:l}=s.useContext(u);s.useEffect(()=>{n("הרשמה")},[]);const r=a=>{a.preventDefault();let{mail:i,pass:o,uName:m}=a.target;l(i.value,o.value,m.value)};return e.jsx(x,{children:e.jsxs("form",{onSubmit:r,className:"flex-center-all",style:{flexDirection:"column"},children:[e.jsx(t,{label:"מייל",type:"email",variant:"outlined",name:"mail"}),e.jsx(t,{label:"סיסמה",variant:"outlined",name:"pass"}),e.jsx(t,{label:"שם",variant:"outlined",name:"uName"}),e.jsx(c,{type:"submit",variant:"contained",children:"כניסה"})]})})}export{b as default};
