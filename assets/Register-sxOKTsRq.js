import{r as s,U as u,j as e,B as x}from"./index-qt8WzcbF.js";import{T as t}from"./TextField-HRD1b6Gr.js";import{B as p}from"./Button-PUg5T3x0.js";import"./isHostComponent-jcd54X0C.js";import"./List-ot-5GeJI.js";function b(){const{setName:n,Register:l}=s.useContext(u);s.useEffect(()=>{n("הרשמה")},[]);const r=a=>{a.preventDefault();let{mail:i,pass:o,uName:m}=a.target;l(i.value,o.value,m.value)};return e.jsx(x,{pt:2,children:e.jsxs("form",{onSubmit:r,className:"flex-center-all",style:{flexDirection:"column"},children:[e.jsx(t,{label:"מייל",type:"email",variant:"outlined",name:"mail"}),e.jsx(t,{label:"סיסמה",variant:"outlined",name:"pass"}),e.jsx(t,{label:"שם",variant:"outlined",name:"uName"}),e.jsx(p,{type:"submit",variant:"contained",children:"כניסה"})]})})}export{b as default};