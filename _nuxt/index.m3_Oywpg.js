import{_}from"./Header.CJY2vh6I.js";import{_ as p}from"./ArticleCard.CcmJ56I5.js";import{A as d,E as u,c as t,g as r,e as f,F as h,D as y,G as A,b as n}from"./entry.BnjT8Y_-.js";import{u as g}from"./asyncData.BvWO0L84.js";import{q as x}from"./query.BpnOM_01.js";import"./preview.BznvXk5T.js";const k={class:"min-h-screen"},w={class:"space-y-16"},s="All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.",V={__name:"index",async setup(B){let e,a;d({title:"Articles",meta:[{name:"description",content:s}]});const{data:c}=([e,a]=u(()=>g("all-articles",()=>x("/articles").where({draft:{$ne:!0}}).sort({date:-1}).find())),e=await e,a(),e);return(C,b)=>{const i=_,l=p;return n(),t("main",k,[r(i,{class:"mb-16",title:"Articles",description:s}),f("ul",w,[(n(!0),t(h,null,y(A(c),(m,o)=>(n(),t("li",{key:o},[r(l,{article:m,"delay-animation":o*100},null,8,["article","delay-animation"])]))),128))])])}}};export{V as default};