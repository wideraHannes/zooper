import d from"./ContentQuery.f5799b42.js";import{d as c,a7 as _,J as r}from"./entry.3f1e6d9b.js";import"./asyncData.601453af.js";import"./query.186da874.js";import"./preview.e79a543d.js";const p=(u,t)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),l=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=_(),{path:n,query:o}=u,f={...o||{},path:n||(o==null?void 0:o.path)||"/"};return r(d,f,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:m})=>t.default({list:e,refresh:a,isPartial:m,...this.$attrs}):e=>p("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):p("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):p("not-found",e==null?void 0:e.data)}})}}),h=l,S=h;export{S as default};