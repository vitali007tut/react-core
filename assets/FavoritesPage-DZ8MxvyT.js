import{j as e}from"./index-CvZb_BPW.js";import{u as r,g as o,M as n}from"./App-BaLS7WJW.js";const c="_listImg_haofc_1",m="_liItem_haofc_11",i={listImg:c,liItem:m};function g(){const{isAuth:l}=r(s=>s.userAuth);let t=[];const a=r(s=>s.arrayUsers);return t=o(a.users),e.jsx(e.Fragment,{children:e.jsxs("ul",{className:i.listImg,children:[!t.length&&e.jsx("p",{style:{textAlign:"center",fontSize:"1.5rem"},children:"You don't have favorite items"}),!!t.length&&t.map(s=>e.jsx("li",{className:i.liItem,children:e.jsx(n,{item:s,id:s.id,description:s.alt_description,url:s.urls.small,logined:l,favorite:!0})},s.id))]})})}export{g as default};