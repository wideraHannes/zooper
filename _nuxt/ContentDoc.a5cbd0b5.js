import{G as d,$ as v,q as y,a0 as w,A as x,l as g,d as D,a7 as H,a8 as q,J as u}from"./entry.3f1e6d9b.js";import S from"./ContentRenderer.01c2b361.js";import b from"./ContentQuery.f5799b42.js";import"./ContentRendererMarkdown.vue.cc5bf378.js";import"./index.288f722b.js";import"./preview.e79a543d.js";import"./asyncData.601453af.js";import"./query.186da874.js";const a=(p,s=y())=>{const e=d(p),m=g();v(()=>d(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),w(()=>x(t))},{immediate:!0})},j=D({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=H(),{tag:m,excerpt:f,path:n,query:t,head:r}=p,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||q(y().path),find:"one"},_=(o,i)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return u(b,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:C})=>{var h;return c&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:C,excerpt:f,...this.$attrs})}:({data:o})=>(c&&a(o),u(S,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):_("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||u("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||u("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),k=j,G=k;export{G as default};
