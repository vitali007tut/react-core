import{r as m,S as v,j as e}from"./index-JLUC-C-p.js";import{b as f,c as p,u as c,g,B as _,d as b,e as k}from"./App-t4vEksb-.js";const F="_container_5kfao_1",A="_description_5kfao_20",l={container:F,description:A};function T(){const{id:n}=f(),{addFavToCurrentUser:a,removeFavFromCurrentUser:d}=p(),{isAuth:u}=c(r=>r.userAuth);let t=[];const x=c(r=>r.arrayUsers);t=g(x.users);const[i,o]=m.useState(t.map(r=>r.id).includes(n||"")),{isLoading:h,data:s}=v(n||""),j=()=>{i?(s&&d(s),o(!1)):(s&&a(s),o(!0))};return e.jsxs("div",{className:l.container,children:[h&&e.jsx("p",{className:"text-center",children:"Loading..."}),e.jsx("img",{src:s==null?void 0:s.urls.small}),e.jsxs("div",{className:l.description,children:[e.jsx("p",{children:e.jsx("b",{children:"Details:"})}),e.jsxs("div",{children:[e.jsx("b",{children:"ID: "}),s==null?void 0:s.id]}),e.jsxs("div",{children:[e.jsx("b",{children:"Description: "}),s==null?void 0:s.alt_description]}),e.jsxs("div",{children:[e.jsx("b",{children:"Author: "})," ",s==null?void 0:s.user.name]}),e.jsxs("div",{children:[e.jsx("b",{children:"Bigger view: "}),e.jsx("a",{href:s==null?void 0:s.urls.regular,target:"_blank",children:"Link"})]}),e.jsxs("div",{children:[e.jsx("b",{children:"The biggest view: "}),e.jsx("a",{href:s==null?void 0:s.urls.full,target:"_blank",children:"Link"})]}),u&&e.jsxs(_,{onClick:j,size:"small",children:[i?"Remove from":"Add to"," ",i?e.jsx(b,{}):e.jsx(k,{})]})]})]})}export{T as default};
