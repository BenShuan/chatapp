import{r as m,U as o,j as t,B as u}from"./index-2AZL11Rb.js";import{T as e}from"./TextField-uSJTagTL.js";import{B as x}from"./Button-_M-MG8y8.js";import"./isHostComponent-jcd54X0C.js";import"./List-goAsfC7v.js";function b(){const{name:p,setName:d,Register:s}=m.useContext(o),i=a=>{a.preventDefault();let{mail:r,pass:l,uName:n}=a.target;s(r.value,l.value,n.value)};return t.jsx(u,{sx:{width:"100%",height:"100vh",gap:20},children:t.jsxs("form",{onSubmit:i,children:[t.jsx(e,{label:"מייל",type:"email",variant:"outlined",fullWidth:!0,sx:{m:"10px"},name:"mail"}),t.jsx(e,{label:"סיסמה",variant:"outlined",fullWidth:!0,sx:{m:"10px"},name:"pass"}),t.jsx(e,{label:"שם",variant:"outlined",fullWidth:!0,sx:{m:"10px"},name:"uName"}),t.jsx(x,{type:"submit",variant:"contained",children:"כניסה"})]})})}export{b as default};