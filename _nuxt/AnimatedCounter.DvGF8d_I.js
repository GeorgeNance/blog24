import{k as i,U as l,r as m,V as d,W as p,X as _,b as f,c as x,e,t as h,B as n,g as b,w as g,p as w,i as y}from"./entry.BnjT8Y_-.js";const C=t=>(w("data-v-e9f86973"),t=t(),y(),t),N={class:"px-4 py-8 flex items-center justify-center flex-col"},V={class:"sr-only"},k=C(()=>e("p",{class:"text-xs mt-2 text-gray-500"}," or start the counter when this component is in the viewport ",-1)),v={__name:"AnimatedCounter",props:{targetNumber:{type:Number,required:!0,default:1234}},setup(t){l(r=>({"4977d1da":a.targetNumber}));const s=m(null),c=d(s),a=t,o=()=>{document.querySelector(".animate-counter").animate([{"--num":0},{"--num":a.targetNumber}],{duration:1e3,easing:"ease-out",fill:"forwards"})};return p(c,()=>{o()}),(r,B)=>{const u=_("UButton");return f(),x("div",N,[e("span",{ref_key:"target",ref:s,class:"flex tabular-nums text-slate-900 dark:text-white text-5xl font-extrabold mb-2 [counter-set:_num_var(--num)] before:content-[counter(num)] animate-counter"},[e("span",V,h(t.targetNumber),1),n("+ ")],512),b(u,{color:"white",onClick:o,class:"mt-4",size:"xs"},{default:g(()=>[n(" Start Counter ")]),_:1}),k])}}},I=i(v,[["__scopeId","data-v-e9f86973"]]);export{I as default};