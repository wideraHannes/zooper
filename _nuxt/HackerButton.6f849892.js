import{r as u,$ as d,b as h,c as b,e as f,t as p,G as y}from"./entry.3f1e6d9b.js";const x={class:"px-4 py-8 flex items-center justify-center"},s="abcdefghijklmnopqrstuvwxyz",_={__name:"HackerButton",props:{label:String},setup(l){const t=l,a=u(t.label);function c(e){return Array.from({length:e},()=>s[Math.floor(Math.random()*s.length)]).join("")}async function i(e){let r="";for(let n=0;n<e.length;n++)await new Promise(m=>setTimeout(m,50)),r+=e.charAt(n),a.value=r+c(e.length-r.length)}function o(){i(t.label)}const g=()=>{o(),setTimeout(()=>console.log("Submitted"),t.label.length*50)};return d(()=>t.label,e=>{a.value=e}),(e,r)=>(h(),b("div",x,[f("button",{type:"button",class:"rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-950 relative font-mono",onClick:g,onMouseenter:o},p(y(a)),33)]))}};export{_ as default};
