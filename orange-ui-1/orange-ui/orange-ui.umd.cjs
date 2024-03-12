(function(p,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(p=typeof globalThis<"u"?globalThis:p||self,e(p["orange-ui"]={},p.Vue))})(this,function(p,e){"use strict";const w=["disabled"],$={key:0,class:"loading-indicator"},y=e.defineComponent({__name:"Button",props:{theme:{type:String,default:"button"},size:{type:String,default:"normal"},level:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(a){const r=a,o=e.computed(()=>{const{theme:l,size:n,level:d}=r;return{[`orange-theme-${l}`]:l,[`orange-size-${n}`]:n,[`orange-level-${d}`]:d}});return(l,n)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["orange-button",o.value]),disabled:r.disabled},[a.loading?(e.openBlock(),e.createElementBlock("div",$)):e.createCommentVNode("",!0),e.renderSlot(l.$slots,"default")],10,w))}}),V={key:0,class:"dropdown"},N=e.defineComponent({__name:"Dropdown",props:{title:{type:String,default:"默认标题"},closeAfterClick:{type:Boolean,default:!1},closeClickOutside:{type:Boolean,default:!1}},emits:["clickItem"],setup(a,{emit:r}){const o=a,l=r,n=e.ref(!1),d=()=>{n.value=!n.value},t=e.useSlots().default(),m=(_,i)=>{var c;(c=_.props)!=null&&c.disabled||(o.closeAfterClick&&(n.value=!n.value),l("clickItem",i))},f=e.ref(null),u=_=>{f.value&&o.closeClickOutside&&!f.value.contains(_.target)&&n.value&&(n.value=!1)};return e.onMounted(()=>{document.addEventListener("click",u),f.value&&console.log(f)}),e.onUnmounted(()=>{document.removeEventListener("click",u)}),(_,i)=>(e.openBlock(),e.createElementBlock("div",{class:"dropdown-wrapper",ref_key:"dropdownRef",ref:f},[e.createVNode(y,{level:"main",onClick:d},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(o.title),1)]),_:1}),n.value?(e.openBlock(),e.createElementBlock("div",V,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(t),(c,s)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(c),{onClick:g=>m(c,s),key:s},null,8,["onClick"]))),128))])):e.createCommentVNode("",!0)],512))}}),h=(a,r)=>{const o=a.__vccOpts||a;for(const[l,n]of r)o[l]=n;return o},S=h(N,[["__scopeId","data-v-6ef684ce"]]),T=h(e.defineComponent({__name:"DropdownItem",props:{disabled:{type:Boolean,default:!1}},setup(a){const r=a;return(o,l)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["dropdown-item",{"dropdown-item-disabled":r.disabled}])},[e.renderSlot(o.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-390a17d6"]]),I={class:"validate-input-container pb-3"},D={class:"input-wrapper"},O=["type"],R=["xlink:href"],x={key:0,class:"invalid-feedback",style:{display:"block"}},M=h(e.defineComponent({inheritAttrs:!1,__name:"Input",props:{rules:{type:Array},modelValue:{type:String}},emits:["update:modelValue"],setup(a,{emit:r}){const o=e.useAttrs(),l=e.ref(!1),n=a,d=r,t=e.reactive({val:n.modelValue||"",error:!1,message:""}),m=i=>{if(_(),i){const c=i.target.value;t.val=c,d("update:modelValue",c)}},f=e.ref("text"),u=()=>{l.value=!l.value,l.value?f.value="password":f.value="text"},_=()=>{if(!n.rules)return!0;let i=!0,c=n.rules;for(let s=0;s<c.length;s++)if(c[s].type=="required"){if(i=t.val.trim()!=="",!i){t.error=!0,t.message=c[s].message;return}}else if(c[s].type=="email"){if(i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.val),!i){t.error=!0,t.message=c[s].message;return}}else if(c[s].type=="phone"){if(i=/^1[3-9]\d{9}$/.test(t.val),!i){t.error=!0,t.message=c[s].message;return}}else if(c[s].type=="idCard"&&(i=/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/.test(t.val),!i)){t.error=!0,t.message=c[s].message;return}return t.error=!1,t.message="",console.log(t),i};return(i,c)=>(e.openBlock(),e.createElementBlock("div",I,[e.createElementVNode("div",D,[e.withDirectives(e.createElementVNode("input",e.mergeProps(e.unref(o),{type:!l.value&&e.unref(o).type=="password"?"password":"text",class:["form-control",{"is-invalid":t.error,disabled:e.unref(o).hasOwnProperty("disabled")}],"onUpdate:modelValue":c[0]||(c[0]=s=>t.val=s),onBlur:_,onInput:m}),null,16,O),[[e.vModelDynamic,t.val]]),e.unref(o).type=="password"&&n.modelValue?(e.openBlock(),e.createElementBlock("svg",{key:0,class:"icon",onClick:u},[e.createElementVNode("use",{"xlink:href":l.value?"#i-yanjing-kai":"#i-yanjing-guan"},null,8,R)])):e.createCommentVNode("",!0)]),t.error?(e.openBlock(),e.createElementBlock("div",x,e.toDisplayString(t.message),1)):e.createCommentVNode("",!0)]))}}),[["__scopeId","data-v-f745bd52"]]),z={class:"orange-modal-wrapper"},A={class:"orange-modal"},C=e.defineComponent({__name:"Modal",props:{visible:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!1},confirm:{type:Function},cancel:{type:Function}},emits:["update:visible"],setup(a,{emit:r}){const o=a,l=r,n=()=>{l("update:visible",!1)},d=()=>{o.closeOnClickOverlay&&n()},t=()=>{o.confirm&&o.confirm()!==!1&&n()},m=()=>{o.confirm&&o.cancel()!==!1&&n()};return(f,u)=>o.visible?(e.openBlock(),e.createBlock(e.Teleport,{key:0,to:"body"},[e.createElementVNode("div",{class:"orange-modal-overlay",onClick:d}),e.createElementVNode("div",z,[e.createElementVNode("div",A,[e.createElementVNode("header",null,[e.renderSlot(f.$slots,"title"),e.createElementVNode("span",{class:"orange-modal-close",onClick:n})]),e.createElementVNode("main",null,[e.renderSlot(f.$slots,"content")]),e.createElementVNode("footer",null,[e.createVNode(y,{level:"main",onClick:t},{default:e.withCtx(()=>[e.createTextVNode("确定")]),_:1}),e.createVNode(y,{onClick:m},{default:e.withCtx(()=>[e.createTextVNode("取消")]),_:1})])])])])):e.createCommentVNode("",!0)}}),P=[e.createElementVNode("span",{class:"circle"},null,-1)],U=e.defineComponent({__name:"Switch",props:["value"],emits:["update:value"],setup(a,{emit:r}){const o=a,l=r,n=()=>{l("update:value",!o.value)};return(d,t)=>(e.openBlock(),e.createElementBlock("button",{onClick:n,class:e.normalizeClass(["orange-switch",{"orange-checked":o.value}])},P,2))}}),j={};function F(a,r){return e.openBlock(),e.createElementBlock("div",null,[e.renderSlot(a.$slots,"default")])}const b=h(j,[["render",F]]),L={class:"orange-tabs"},q=["onClick"],X={class:"orange-tabs-content"},G=e.defineComponent({__name:"Tabs",props:{selected:{type:String},disabled:{type:Boolean,default:!1}},emits:["update:selected"],setup(a,{emit:r}){const o=a,l=r,n=e.useSlots().default();n.forEach((s,g)=>{if(s.type!==b)throw new Error(`Tabs下的第${g+1}个子组件不是Tab!`)});const d=n.map(s=>s.props.title),t=[];n.forEach(s=>{s.props.disabled&&t.push(s.props.title)});const m=e.computed(()=>n.find(s=>s.props.title===o.selected)),f=s=>{t.includes(s)||l("update:selected",s)},u=e.ref(null),_=e.ref(null),i=e.ref(null),c=()=>{const s=u.value.getBoundingClientRect().width;_.value.style.width=s+"px";const g=i.value.getBoundingClientRect().left,k=u.value.getBoundingClientRect().left;_.value.style.left=k-g+"px"};return e.onMounted(()=>{e.watchEffect(()=>{c()})}),(s,g)=>(e.openBlock(),e.createElementBlock("div",L,[e.createElementVNode("div",{class:"orange-tabs-nav",ref_key:"container",ref:i},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),(k,K)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["orange-tabs-nav-item",{selected:k===o.selected,disabled:t.includes(k)}]),ref_for:!0,ref:E=>{k===o.selected&&(u.value=E)},onClick:E=>f(k),key:K},e.toDisplayString(k),11,q))),128)),e.createElementVNode("div",{ref_key:"indicator",ref:_,class:"orange-tabs-nav-indicator"},null,512)],512),e.createElementVNode("div",X,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(m.value),{key:m.value.props.title}))])]))}}),B=e.defineComponent({__name:"Toast",props:{visible:{type:Boolean,default:!1},type:{type:String,default:"default"},message:{type:String,default:"这是一条默认信息"},duration:{type:Number,default:2e3}},emits:["update:visible"],setup(a,{emit:r}){const o=document.createElement("div");o.id="toast",document.body.appendChild(o),e.onUnmounted(()=>{document.body.removeChild(o)});const l=a,n=e.computed(()=>({[`orange-toast-${l.type}`]:l.type})),d=r;let t=null;const m=()=>{d("update:visible",!1),t&&clearTimeout(t)};return e.watchEffect(()=>{l.duration&&l.visible&&(t=setTimeout(()=>{m()},l.duration))}),(f,u)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"#toast"},[l.visible?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["orange-toast-wrapper",n.value])},[e.createElementVNode("div",null,e.toDisplayString(l.message),1),e.createElementVNode("div",{class:"close-icon",onClick:m})],2)):e.createCommentVNode("",!0)]))}}),H=a=>{const{title:r,content:o,closeOnClickOverlay:l,confirm:n,cancel:d}=a;console.log(r,o);const t=document.createElement("div");document.body.appendChild(t);const m=e.createApp({render(){return e.h(C,{visible:!0,"onUpdate:visible":u=>{console.log(u),u===!1&&f()},closeOnClickOverlay:l,confirm:n,cancel:d},{title:r,content:o})}}),f=()=>{m.unmount(),document.body.removeChild(t)};m.mount(t)},J=a=>{const{message:r,type:o,duration:l}=a;console.log(a);const n=document.createElement("div");document.body.appendChild(n);const d=e.createApp({render(){return e.h(B,{visible:!0,"onUpdate:visible":m=>{console.log(m),m===!1&&t()},message:r,type:o,duration:l})}}),t=()=>{d.unmount(),document.body.removeChild(n)};d.mount(n)};p.Button=y,p.Dropdown=S,p.DropdownItem=T,p.Input=M,p.Modal=C,p.Switch=U,p.Tab=b,p.Tabs=G,p.Toast=B,p.openModal=H,p.openToast=J,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
