import{r as n,j as e}from"./index-DLuo_xtw.js";import{f,c as _,B as j,N as c,i as v,j as w,s as C}from"./App-DcSXfbqb.js";const N="_title_1htxx_1",E="_elements_1htxx_8",S="_form_1htxx_17",U="_warning_1htxx_31",b="_container_1htxx_38",r={title:N,elements:E,form:S,warning:U,container:b};function P(){const[t,u]=n.useState(""),[o,l]=n.useState(""),[m,a]=n.useState(!0),[x,i]=n.useState(!0),p=f(),{setAuth:d,setCurrentUser:h}=_(),g=s=>{if(s.preventDefault(),!v(t)){a(!1);return}w(t,o)?(d(!0),p("/"),C(t),h(t)):i(!1)};return e.jsx("div",{className:r.container,children:e.jsxs("form",{onSubmit:g,className:r.form,children:[e.jsx("div",{className:r.title,children:"LogIn"}),e.jsx("input",{placeholder:"Email",type:"text",value:t,onChange:s=>{u(s.target.value),a(!0),i(!0)},pattern:"\\D{3,}",required:!0}),e.jsx("input",{type:"password",placeholder:"Password",value:o,onChange:s=>{l(s.target.value),a(!0),i(!0)},pattern:"\\D{3,}",required:!0}),e.jsx(j,{variant:"contained",type:"submit",children:"Submit"}),!m&&e.jsxs("p",{className:r.warning,children:["Customer doesn't exist, please ",e.jsx(c,{to:"/signup",children:"signup"})]}),!x&&e.jsxs("p",{className:r.warning,children:["Password incorrect, please try one more time or"," ",e.jsx(c,{to:"/signup",children:"signup"})]})]})})}export{P as default};
