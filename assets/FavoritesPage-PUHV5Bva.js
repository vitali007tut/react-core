import{P as a,j as t}from"./index-C_3wMPvc.js";import{M as n}from"./MediaCard-C_81qMvS.js";import{u as r}from"./App-DjeFBDSc.js";import"./FavoriteBorder-oPUnl4Yi.js";import"./index-xCS3G6po.js";const m="_listImg_haofc_1",c="_liItem_haofc_11",i={listImg:m,liItem:c};function h(){const{isAuth:o}=r(s=>s.userAuth);let e=[];const l=r(s=>s.arrayUsers);return e=a(l),t.jsx(t.Fragment,{children:t.jsxs("ul",{className:i.listImg,children:[!e.length&&t.jsx("p",{style:{textAlign:"center",fontSize:"1.5rem"},children:"You don't have favorite items"}),!!e.length&&e.map(s=>t.jsx("li",{className:i.liItem,children:t.jsx(n,{item:s,id:s.id,description:s.alt_description,url:s.urls.small,logined:o,favorite:!0})},s.id))]})})}export{h as default};
