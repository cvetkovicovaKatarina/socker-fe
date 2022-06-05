import{b as he,d as pe,f as N}from"/build/_shared/chunk-OGYP3M3B.js";N();N();N();function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}var $;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($||($={}));var at=function(e){return e};var ot="beforeunload";var an="popstate";function st(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,a=r.history;function o(){var E=r.location,S=E.pathname,O=E.search,B=E.hash,F=a.state||{};return[F.idx,at({pathname:S,search:O,hash:B,state:F.usr||null,key:F.key||"default"})]}var l=null;function s(){if(l)g.call(l),l=null;else{var E=$.Pop,S=o(),O=S[0],B=S[1];if(g.length){if(O!=null){var F=d-O;F&&(l={action:E,location:B,retry:function(){W(F*-1)}},W(F))}}else T(E)}}r.addEventListener(an,s);var h=$.Pop,i=o(),d=i[0],m=i[1],y=lt(),g=lt();d==null&&(d=0,a.replaceState(me({},a.state,{idx:d}),""));function v(E){return typeof E=="string"?E:ve(E)}function R(E,S){return S===void 0&&(S=null),at(me({pathname:m.pathname,hash:"",search:""},typeof E=="string"?V(E):E,{state:S,key:on()}))}function C(E,S){return[{usr:E.state,key:E.key,idx:S},v(E)]}function M(E,S,O){return!g.length||(g.call({action:E,location:S,retry:O}),!1)}function T(E){h=E;var S=o();d=S[0],m=S[1],y.call({action:h,location:m})}function ue(E,S){var O=$.Push,B=R(E,S);function F(){ue(E,S)}if(M(O,B,F)){var G=C(B,d+1),be=G[0],de=G[1];try{a.pushState(be,"",de)}catch{r.location.assign(de)}T(O)}}function ce(E,S){var O=$.Replace,B=R(E,S);function F(){ce(E,S)}if(M(O,B,F)){var G=C(B,d),be=G[0],de=G[1];a.replaceState(be,"",de),T(O)}}function W(E){a.go(E)}var I={get action(){return h},get location(){return m},createHref:v,push:ue,replace:ce,go:W,back:function(){W(-1)},forward:function(){W(1)},listen:function(S){return y.push(S)},block:function(S){var O=g.push(S);return g.length===1&&r.addEventListener(ot,it),function(){O(),g.length||r.removeEventListener(ot,it)}}};return I}function it(e){e.preventDefault(),e.returnValue=""}function lt(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function on(){return Math.random().toString(36).substr(2,8)}function ve(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,a=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function V(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var te=he(pe());N();N();function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}var p=he(pe());N();var U=he(pe());N();var x=he(pe());var ke=(0,x.createContext)(null),De=(0,x.createContext)(null),ye=(0,x.createContext)({outlet:null,matches:[]});function Z(e,t){if(!e)throw new Error(t)}function Me(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?V(t):t,a=pt(r.pathname||"/",n);if(a==null)return null;let o=ct(e);ln(o);let l=null;for(let s=0;l==null&&s<o.length;++s)l=vn(o[s],a);return l}function ct(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((a,o)=>{let l={relativePath:a.path||"",caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||Z(!1),l.relativePath=l.relativePath.slice(r.length));let s=Q([r,l.relativePath]),h=n.concat(l);a.children&&a.children.length>0&&(a.index===!0&&Z(!1),ct(a.children,t,h,s)),!(a.path==null&&!a.index)&&t.push({path:s,score:pn(s,a.index),routesMeta:h})}),t}function ln(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:mn(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var sn=/^:\w+$/,un=3,cn=2,dn=1,fn=10,hn=-2,ut=e=>e==="*";function pn(e,t){let n=e.split("/"),r=n.length;return n.some(ut)&&(r+=hn),t&&(r+=cn),n.filter(a=>!ut(a)).reduce((a,o)=>a+(sn.test(o)?un:o===""?dn:fn),r)}function mn(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function vn(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],h=l===n.length-1,i=a==="/"?t:t.slice(a.length)||"/",d=dt({path:s.relativePath,caseSensitive:s.caseSensitive,end:h},i);if(!d)return null;Object.assign(r,d.params);let m=s.route;o.push({params:r,pathname:Q([a,d.pathname]),pathnameBase:mt(Q([a,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(a=Q([a,d.pathnameBase]))}return o}function dt(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=yn(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((i,d,m)=>{if(d==="*"){let y=s[m]||"";l=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return i[d]=gn(s[m]||"",d),i},{}),pathname:o,pathnameBase:l,pattern:e}}function yn(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,s)=>(r.push(s),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,t?void 0:"i"),r]}function gn(e,t){try{return decodeURIComponent(e)}catch{return e}}function ft(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?V(e):e;return{pathname:n?n.startsWith("/")?n:Rn(n,t):t,search:En(r),hash:bn(a)}}function Rn(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function ht(e,t,n){let r=typeof e=="string"?V(e):e,a=e===""||r.pathname===""?"/":r.pathname,o;if(a==null)o=n;else{let s=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),s-=1;r.pathname=h.join("/")}o=s>=0?t[s]:"/"}let l=ft(r,o);return a&&a!=="/"&&a.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function wn(e){return e===""||e.pathname===""?"/":typeof e=="string"?V(e).pathname:e.pathname}function pt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}var Q=e=>e.join("/").replace(/\/\/+/g,"/"),mt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),En=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bn=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function oe(e){ge()||Z(!1);let{basename:t,navigator:n}=(0,x.useContext)(ke),{hash:r,pathname:a,search:o}=ee(e),l=a;if(t!=="/"){let s=wn(e),h=s!=null&&s.endsWith("/");l=a==="/"?t+(h?"/":""):Q([t,a])}return n.createHref({pathname:l,search:o,hash:r})}function ge(){return(0,x.useContext)(De)!=null}function z(){return ge()||Z(!1),(0,x.useContext)(De).location}function Re(){ge()||Z(!1);let{basename:e,navigator:t}=(0,x.useContext)(ke),{matches:n}=(0,x.useContext)(ye),{pathname:r}=z(),a=JSON.stringify(n.map(s=>s.pathnameBase)),o=(0,x.useRef)(!1);return(0,x.useEffect)(()=>{o.current=!0}),(0,x.useCallback)(function(s,h){if(h===void 0&&(h={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let i=ht(s,JSON.parse(a),r);e!=="/"&&(i.pathname=Q([e,i.pathname])),(h.replace?t.replace:t.push)(i,h.state)},[e,t,a,r])}var xn=(0,x.createContext)(null);function je(e){let t=(0,x.useContext)(ye).outlet;return t&&(0,x.createElement)(xn.Provider,{value:e},t)}function ee(e){let{matches:t}=(0,x.useContext)(ye),{pathname:n}=z(),r=JSON.stringify(t.map(a=>a.pathnameBase));return(0,x.useMemo)(()=>ht(e,JSON.parse(r),n),[e,r,n])}function Je(e,t){ge()||Z(!1);let{matches:n}=(0,x.useContext)(ye),r=n[n.length-1],a=r?r.params:{},o=r?r.pathname:"/",l=r?r.pathnameBase:"/",s=r&&r.route,h=z(),i;if(t){var d;let v=typeof t=="string"?V(t):t;l==="/"||((d=v.pathname)==null?void 0:d.startsWith(l))||Z(!1),i=v}else i=h;let m=i.pathname||"/",y=l==="/"?m:m.slice(l.length)||"/",g=Me(e,{pathname:y});return Nn(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Q([l,v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Q([l,v.pathnameBase])})),n)}function Nn(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,a)=>(0,x.createElement)(ye.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,a+1))}}),null)}function vt(e){return je(e.context)}function Oe(e){let{basename:t="/",children:n=null,location:r,navigationType:a=$.Pop,navigator:o,static:l=!1}=e;ge()&&Z(!1);let s=mt(t),h=(0,x.useMemo)(()=>({basename:s,navigator:o,static:l}),[s,o,l]);typeof r=="string"&&(r=V(r));let{pathname:i="/",search:d="",hash:m="",state:y=null,key:g="default"}=r,v=(0,x.useMemo)(()=>{let R=pt(i,s);return R==null?null:{pathname:R,search:d,hash:m,state:y,key:g}},[s,i,d,m,y,g]);return v==null?null:(0,x.createElement)(ke.Provider,{value:h},(0,x.createElement)(De.Provider,{children:n,value:{location:v,navigationType:a}}))}function _e(){return _e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_e.apply(this,arguments)}function yt(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var Cn=["onClick","reloadDocument","replace","state","target","to"],kn=["aria-current","caseSensitive","className","end","style","to","children"];function Dn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var Ye=(0,U.forwardRef)(function(t,n){let{onClick:r,reloadDocument:a,replace:o=!1,state:l,target:s,to:h}=t,i=yt(t,Cn),d=oe(h),m=Mn(h,{replace:o,state:l,target:s});function y(g){r&&r(g),!g.defaultPrevented&&!a&&m(g)}return(0,U.createElement)("a",_e({},i,{href:d,onClick:y,ref:n,target:s}))}),gt=(0,U.forwardRef)(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:l=!1,style:s,to:h,children:i}=t,d=yt(t,kn),m=z(),y=ee(h),g=m.pathname,v=y.pathname;a||(g=g.toLowerCase(),v=v.toLowerCase());let R=g===v||!l&&g.startsWith(v)&&g.charAt(v.length)==="/",C=R?r:void 0,M;typeof o=="function"?M=o({isActive:R}):M=[o,R?"active":null].filter(Boolean).join(" ");let T=typeof s=="function"?s({isActive:R}):s;return(0,U.createElement)(Ye,_e({},d,{"aria-current":C,className:M,ref:n,style:T,to:h}),typeof i=="function"?i({isActive:R}):i)});function Mn(e,t){let{target:n,replace:r,state:a}=t===void 0?{}:t,o=Re(),l=z(),s=ee(e);return(0,U.useCallback)(h=>{if(h.button===0&&(!n||n==="_self")&&!Dn(h)){h.preventDefault();let i=!!r||ve(l)===ve(s);o(e,{replace:i,state:a})}},[l,o,s,r,a,n,e])}N();var L=he(pe());var Te=class extends L.default.Component{constructor(t){super(t);this.state={error:t.error||null,location:t.location}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error||null,location:t.location}:{error:t.error||n.error,location:n.location}}render(){return this.state.error?L.default.createElement(this.props.component,{error:this.state.error}):this.props.children}};function Rt({error:e}){return console.error(e),L.default.createElement("html",{lang:"en"},L.default.createElement("head",null,L.default.createElement("meta",{charSet:"utf-8"}),L.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),L.default.createElement("title",null,"Application Error!")),L.default.createElement("body",null,L.default.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},L.default.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),L.default.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},e.stack)),L.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `}})))}var wt=L.default.createContext(void 0);function On(){return(0,L.useContext)(wt)}function Ke({catch:e,component:t,children:n}){return e?L.default.createElement(wt.Provider,{value:e},L.default.createElement(t,null)):L.default.createElement(L.default.Fragment,null,n)}function Et(){let e=On();return L.default.createElement("html",{lang:"en"},L.default.createElement("head",null,L.default.createElement("meta",{charSet:"utf-8"}),L.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),L.default.createElement("title",null,"Unhandled Thrown Response!")),L.default.createElement("body",null,L.default.createElement("h1",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},e.status," ",e.statusText),L.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `}})))}N();function _(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}N();N();async function Be(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch{return window.location.reload(),new Promise(()=>{})}}async function bt(e){if(!e.links)return;let t=e.links();if(!t)return;let n=[];for(let a of t)!xt(a)&&a.rel==="stylesheet"&&n.push({...a,rel:"preload",as:"style"});let r=n.filter(a=>!a.media||window.matchMedia(a.media).matches);await Promise.all(r.map(_n))}async function _n(e){return new Promise(t=>{let n=document.createElement("link");Object.assign(n,e);function r(){document.head.contains(n)&&document.head.removeChild(n)}n.onload=()=>{r(),t()},n.onerror=()=>{r(),t()},document.head.appendChild(n)})}function xt(e){return e!=null&&typeof e.page=="string"}function Tn(e){return e!=null&&typeof e.rel=="string"&&typeof e.href=="string"}async function Nt(e,t){return(await Promise.all(e.map(async r=>{let a=await Be(r.route,t);return a.links?a.links():[]}))).flat(1).filter(Tn).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(({rel:r,...a})=>r==="preload"?{rel:"prefetch",...a}:{rel:"prefetch",as:"style",...a})}function ze(e,t,n,r,a){let o=Ct(e),l=(i,d)=>n[d]?i.route.id!==n[d].route.id:!0,s=(i,d)=>{var m;return n[d].pathname!==i.pathname||((m=n[d].route.path)===null||m===void 0?void 0:m.endsWith("*"))&&n[d].params["*"]!==i.params["*"]};return a==="data"&&r.search!==o.search?t.filter((i,d)=>i.route.hasLoader?l(i,d)||s(i,d)?!0:i.route.shouldReload?i.route.shouldReload({params:i.params,prevUrl:new URL(r.pathname+r.search+r.hash,window.origin),url:new URL(e,window.origin)}):!0:!1):t.filter((i,d)=>(a==="assets"||i.route.hasLoader)&&(l(i,d)||s(i,d)))}function Pt(e,t,n){let r=Ct(e);return Lt(t.filter(a=>n.routes[a.route.id].hasLoader).map(a=>{let{pathname:o,search:l}=r,s=new URLSearchParams(l);return s.set("_data",a.route.id),`${o}?${s}`}))}function St(e,t){return Lt(e.map(n=>{let r=t.routes[n.route.id],a=[r.module];return r.imports&&(a=a.concat(r.imports)),a}).flat(1))}function Lt(e){return[...new Set(e)]}function Ct(e){let t=V(e);return t.search===void 0&&(t.search=""),t}N();var At=he(pe());N();function Xe(e){return e instanceof Response&&e.headers.get("X-Remix-Catch")!=null}function Bn(e){return e instanceof Response&&e.headers.get("X-Remix-Error")!=null}function kt(e){return e instanceof Response&&e.headers.get("X-Remix-Redirect")!=null}async function Ge(e,t,n,r){e.searchParams.set("_data",t);let a=r?Fn(r,n):{credentials:"same-origin",signal:n},o=await fetch(e.href,a);if(Bn(o)){let l=await o.json(),s=new Error(l.message);return s.stack=l.stack,s}return o}async function Ne(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.json():e.text()}function Fn(e,t){let{encType:n,method:r,formData:a}=e,o,l=a;if(n==="application/x-www-form-urlencoded"){l=new URLSearchParams;for(let[s,h]of a)_(typeof h=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),l.append(s,h);o={"Content-Type":n}}return{method:r,body:l,signal:t,credentials:"same-origin",headers:o}}N();N();function we(e,t){let n=Me(e,t);return n?n.map(r=>({params:r.params,pathname:r.pathname,route:r.route})):null}var Le=class{constructor(t,n,r){this.status=t,this.statusText=n,this.data=r}};function Dt(e){return["POST","PUT","PATCH","DELETE"].includes(e.method)}function Mt(e){return e.method==="GET"}function He(e){return Boolean(e.state)&&e.state.isRedirect}function An(e){return He(e)&&e.state.type==="loader"}function In(e){return He(e)&&e.state.type==="action"}function Hn(e){return He(e)&&e.state.type==="fetchAction"}function $n(e){return He(e)&&e.state.type==="loaderSubmission"}var $e=class{constructor(t,n){this.setCookie=n,this.location=typeof t=="string"?t:t.pathname+t.search}},ie={state:"idle",submission:void 0,location:void 0,type:"idle"},Vn={state:"idle",type:"init",data:void 0,submission:void 0};function Ft(e){let{routes:t}=e,n,r=new Map,a=0,o=-1,l=new Map,s=new Set,h=we(t,e.location);h||(h=[{params:{},pathname:"",route:t[0]}]);let i={location:e.location,loaderData:e.loaderData||{},actionData:e.actionData,catch:e.catch,error:e.error,catchBoundaryId:e.catchBoundaryId||null,errorBoundaryId:e.errorBoundaryId||null,matches:h,nextMatches:void 0,transition:ie,fetchers:new Map};function d(c){c.transition&&c.transition===ie&&(n=void 0),i=Object.assign({},i,c),e.onChange(i)}function m(){return i}function y(c){return i.fetchers.get(c)||Vn}function g(c,u){i.fetchers.set(c,u)}function v(c){r.has(c)&&We(c),l.delete(c),s.delete(c),i.fetchers.delete(c)}async function R(c){switch(c.type){case"navigation":{let{action:u,location:f,submission:w}=c,b=we(t,f);b?!w&&Zt(f)?await de(f,b):u===$.Pop?await Ue(f,b):w&&Dt(w)?await G(f,w,b):w&&Mt(w)?await be(f,w,b):In(f)?await Qt(f,b):$n(f)?await Gt(f,b):An(f)?await Xt(f,b):Hn(f)?await qt(f,b):await Ue(f,b):(b=[{params:{},pathname:"",route:t[0]}],await F(f,b)),o=-1;break}case"fetcher":{let{key:u,submission:f,href:w}=c,b=we(t,w);_(b,"No matches found"),r.has(u)&&We(u);let k=T(new URL(w,window.location.href),b);f&&Dt(f)?await ue(u,f,k):f&&Mt(f)?await E(w,u,f,k):await S(w,u,k);break}default:throw new Error(`Unknown data event type: ${c.type}`)}}function C(){j();for(let[,c]of r)c.abort()}function M(c){for(let u of c.searchParams.getAll("index"))if(u==="")return!0;return!1}function T(c,u){let f=u.slice(-1)[0];return!M(c)&&f.route.index?u.slice(-2)[0]:f}async function ue(c,u,f){let w=i.fetchers.get(c),b={state:"submitting",type:"actionSubmission",submission:u,data:(w==null?void 0:w.data)||void 0};g(c,b),d({fetchers:new Map(i.fetchers)});let k=new AbortController;r.set(c,k);let P=await _t(u,f,k.signal);if(k.signal.aborted)return;if(Pe(P)){let ae={isRedirect:!0,type:"fetchAction",setCookie:P.value.setCookie};s.add(c),e.onRedirect(P.value.location,ae),g(c,{state:"loading",type:"actionRedirect",submission:u,data:void 0}),d({fetchers:new Map(i.fetchers)});return}if(B(f,c,P)||await O(f,c,P))return;let D={state:"loading",type:"actionReload",data:P.value,submission:u};g(c,D),d({fetchers:new Map(i.fetchers)});let J=Ae(P)?P:void 0,Y=Se(P)?P:void 0,X=++a;l.set(c,X);let A=i.nextMatches||i.matches,re=await Ot(i,i.transition.location||i.location,A,k.signal,J,Y,u,f.route.id,D);if(k.signal.aborted)return;l.delete(c),r.delete(c);let xe=Tt(re);if(xe){let ae={isRedirect:!0,type:"loader",setCookie:xe.setCookie};e.onRedirect(xe.location,ae);return}let[fe,q]=Bt(re,i.matches,J),[tn,nn]=await qe(re,i.matches,Y)||[],rn={state:"idle",type:"done",data:P.value,submission:void 0};g(c,rn);let rt=I(X);if(rt&&W(rt),ce(X)){let{transition:ae}=i;_(ae.state==="loading","Expected loading transition"),d({location:ae.location,matches:i.nextMatches,error:fe,errorBoundaryId:q,catch:tn,catchBoundaryId:nn,loaderData:Qe(i,re,A),actionData:ae.type==="actionReload"?i.actionData:void 0,transition:ie,fetchers:new Map(i.fetchers)})}else d({fetchers:new Map(i.fetchers),error:fe,errorBoundaryId:q,loaderData:Qe(i,re,A)})}function ce(c){return i.transition.state==="loading"&&o<c?(j(),!0):!1}function W(c){for(let u of c){let f=y(u),w={state:"idle",type:"done",data:f.data,submission:void 0};g(u,w)}}function I(c){let u=[];for(let[f,w]of l)if(w<c){let b=i.fetchers.get(f);_(b,`Expected fetcher: ${f}`),b.state==="loading"&&(We(f),l.delete(f),u.push(f))}return u.length?u:!1}async function E(c,u,f,w){let b=i.fetchers.get(u),k={state:"submitting",type:"loaderSubmission",submission:f,data:(b==null?void 0:b.data)||void 0};g(u,k),d({fetchers:new Map(i.fetchers)});let P=new AbortController;r.set(u,P);let D=await Ze(w,se(c),P.signal);if(r.delete(u),P.signal.aborted)return;if(Pe(D)){let Y={isRedirect:!0,type:"loader",setCookie:D.value.setCookie};e.onRedirect(D.value.location,Y);return}if(B(w,u,D)||await O(w,u,D))return;let J={state:"idle",type:"done",data:D.value,submission:void 0};g(u,J),d({fetchers:new Map(i.fetchers)})}async function S(c,u,f){if(typeof AbortController>"u")throw new Error("handleLoaderFetch was called during the server render, but it shouldn't be. You are likely calling useFetcher.load() in the body of your component. Try moving it to a useEffect or a callback.");let w=i.fetchers.get(u),b={state:"loading",type:"normalLoad",submission:void 0,data:(w==null?void 0:w.data)||void 0};g(u,b),d({fetchers:new Map(i.fetchers)});let k=new AbortController;r.set(u,k);let P=await Ze(f,se(c),k.signal);if(k.signal.aborted)return;if(r.delete(u),Pe(P)){let J={isRedirect:!0,type:"loader",setCookie:P.value.setCookie};e.onRedirect(P.value.location,J);return}if(B(f,u,P)||await O(f,u,P))return;let D={state:"idle",type:"done",data:P.value,submission:void 0};g(u,D),d({fetchers:new Map(i.fetchers)})}async function O(c,u,f){if(Se(f)){let w=Ie(c,i.matches);return i.fetchers.delete(u),d({transition:ie,fetchers:new Map(i.fetchers),catch:{data:f.value.data,status:f.value.status,statusText:f.value.statusText},catchBoundaryId:w}),!0}return!1}function B(c,u,f){if(Ae(f)){let w=Fe(c,i.matches);return i.fetchers.delete(u),d({fetchers:new Map(i.fetchers),error:f.value,errorBoundaryId:w}),!0}return!1}async function F(c,u){j(),d({transition:{state:"loading",type:"normalLoad",submission:void 0,location:c},nextMatches:u}),await Promise.resolve();let w=Ie(u[0],u);d({location:c,matches:u,catch:{data:null,status:404,statusText:"Not Found"},catchBoundaryId:w,transition:ie})}async function G(c,u,f){j(),d({transition:{state:"submitting",type:"actionSubmission",submission:u,location:c},nextMatches:f});let b=new AbortController;n=b;let k=f;!M(se(u.action))&&k[f.length-1].route.index&&(k=k.slice(0,-1));let P=k.slice(-1)[0],D=await _t(u,P,b.signal);if(b.signal.aborted)return;if(Pe(D)){let A={isRedirect:!0,type:"action",setCookie:D.value.setCookie};e.onRedirect(D.value.location,A);return}let J,Y;Se(D)&&([J,Y]=await qe([D],k,D)||[]),d({transition:{state:"loading",type:"actionReload",submission:u,location:c},actionData:{[P.route.id]:D.value}}),await ne(c,f,u,P.route.id,D,J,Y)}async function be(c,u,f){j(),d({transition:{state:"submitting",type:"loaderSubmission",submission:u,location:c},nextMatches:f}),await ne(c,f,u)}async function de(c,u){j(),d({transition:{state:"loading",type:"normalLoad",submission:void 0,location:c},nextMatches:u}),await Promise.resolve(),d({location:c,matches:u,transition:ie})}async function Ue(c,u){j(),d({transition:{state:"loading",type:"normalLoad",submission:void 0,location:c},nextMatches:u}),await ne(c,u)}async function Xt(c,u){j(),d({transition:{state:"loading",type:"normalRedirect",submission:void 0,location:c},nextMatches:u}),await ne(c,u)}async function Gt(c,u){j(),_(i.transition.type==="loaderSubmission",`Unexpected transition: ${JSON.stringify(i.transition)}`);let{submission:f}=i.transition;d({transition:{state:"loading",type:"loaderSubmissionRedirect",submission:f,location:c},nextMatches:u}),await ne(c,u,f)}async function qt(c,u){j(),d({transition:{state:"loading",type:"fetchActionRedirect",submission:void 0,location:c},nextMatches:u}),await ne(c,u)}async function Qt(c,u){j(),_(i.transition.type==="actionSubmission"||i.transition.type==="actionReload",`Unexpected transition: ${JSON.stringify(i.transition)}`);let{submission:f}=i.transition;d({transition:{state:"loading",type:"actionRedirect",submission:f,location:c},nextMatches:u}),await ne(c,u,f)}function Zt(c){return le(i.location)===le(c)&&i.location.hash!==c.hash}async function ne(c,u,f,w,b,k,P){let D=b&&Ae(b)?b:void 0,J=b&&Se(b)?b:void 0,Y=new AbortController;n=Y,o=++a;let X=await Ot(i,c,u,Y.signal,D,J,f,w,void 0,P);if(Y.signal.aborted)return;let A=Tt(X);if(A){if(i.transition.type==="actionReload"){let q={isRedirect:!0,type:"action",setCookie:A.setCookie};e.onRedirect(A.location,q)}else if(i.transition.type==="loaderSubmission"){let q={isRedirect:!0,type:"loaderSubmission",setCookie:A.setCookie};e.onRedirect(A.location,q)}else{let q={isRedirect:!0,type:"loader",setCookie:A.setCookie};e.onRedirect(A.location,q)}return}let[re,xe]=Bt(X,u,D);[k,P]=await qe(X,u,D)||[k,P],en();let fe=I(o);fe&&W(fe),d({location:c,matches:u,error:re,errorBoundaryId:xe,catch:k,catchBoundaryId:P,loaderData:Qe(i,X,u),actionData:i.transition.type==="actionReload"?i.actionData:void 0,transition:ie,fetchers:fe?new Map(i.fetchers):i.fetchers})}function j(){n&&n.abort()}function We(c){let u=r.get(c);_(u,`Expected fetch controller: ${c}`),u.abort(),r.delete(c)}function en(){let c=[];for(let u of s){let f=i.fetchers.get(u);_(f,`Expected fetcher: ${u}`),f.type==="actionRedirect"&&(s.delete(u),c.push(u))}W(c)}return{send:R,getState:m,getFetcher:y,deleteFetcher:v,dispose:C,get _internalFetchControllers(){return r}}}async function Ot(e,t,n,r,a,o,l,s,h,i){let d=se(le(t)),m=Un(e,t,n,a,o,l,s,h,i);return Promise.all(m.map(y=>Ze(y,d,r)))}async function Ze(e,t,n){_(e.route.loader,`Expected loader for ${e.route.id}`);try{let{params:r}=e,a=await e.route.loader({params:r,url:t,signal:n});return{match:e,value:a}}catch(r){return{match:e,value:r}}}async function _t(e,t,n){try{let r=await t.route.action({url:se(e.action),params:t.params,submission:e,signal:n});return{match:t,value:r}}catch(r){return{match:t,value:r}}}function Un(e,t,n,r,a,o,l,s,h){var i;if(h||l&&(a||r)){let R=!1;n=n.filter(C=>R?!1:C.route.id===l||C.route.id===h?(R=!0,!1):!0)}let d=(R,C)=>e.matches[C]?R.route.id!==e.matches[C].route.id:!0,m=(R,C)=>{var M;return e.matches[C].pathname!==R.pathname||((M=e.matches[C].route.path)===null||M===void 0?void 0:M.endsWith("*"))&&e.matches[C].params["*"]!==R.params["*"]},y=se(le(t)),g=(R,C)=>{if(!R.route.loader)return!1;if(d(R,C)||m(R,C))return!0;if(R.route.shouldReload){let M=se(le(e.location));return R.route.shouldReload({prevUrl:M,url:y,submission:o,params:R.params})}return!0};return e.matches.length===1?n.filter(R=>!!R.route.loader):(s==null?void 0:s.type)==="actionReload"||e.transition.type==="actionReload"||e.transition.type==="actionRedirect"||e.transition.type==="fetchActionRedirect"||le(y)===le(e.location)||y.searchParams.toString()!==e.location.search.substring(1)||(i=t.state)!==null&&i!==void 0&&i.setCookie?n.filter(g):n.filter((R,C,M)=>{var T;return(r||a)&&M.length-1===C?!1:R.route.loader&&(d(R,C)||m(R,C)||((T=t.state)===null||T===void 0?void 0:T.setCookie))})}function Pe(e){return e.value instanceof $e}function le(e){return e.pathname+e.search}function Tt(e){for(let t of e)if(Pe(t))return t.value;return null}async function qe(e,t,n){let r;for(let o of e)if(Se(o)){r=o;break}let a=async o=>({status:o.status,statusText:o.statusText,data:o.data});if(n&&r){let o=Ie(r.match,t);return[await a(n.value),o]}if(r){let o=Ie(r.match,t);return[await a(r.value),o]}return null}function Bt(e,t,n){let r;for(let a of e)if(Ae(a)){r=a;break}if(n&&r){let a=Fe(r.match,t);return[n.value,a]}if(n){let a=Fe(n.match,t);return[n.value,a]}if(r){let a=Fe(r.match,t);return[r.value,a]}return[void 0,void 0]}function Ie(e,t){let n=null;for(let r of t)if(r.route.CatchBoundary&&(n=r.route.id),r===e)break;return n}function Fe(e,t){let n=null;for(let r of t)if(r.route.ErrorBoundary&&(n=r.route.id),r===e)break;return n}function Qe(e,t,n){let r={};for(let{match:o,value:l}of t)r[o.route.id]=l;let a={};for(let{route:o}of n){let l=r[o.id]!==void 0?r[o.id]:e.loaderData[o.id];l!==void 0&&(a[o.id]=l)}return a}function Se(e){return e.value instanceof Le}function Ae(e){return e.value instanceof Error}function se(e){return new URL(e,window.location.origin)}function Wn(e,t,n){return{caseSensitive:!!e.caseSensitive,element:At.createElement(n,{id:e.id}),id:e.id,path:e.path,index:e.index,module:e.module,loader:Jn(e,t),action:Yn(e,t),shouldReload:jn(e,t),ErrorBoundary:e.hasErrorBoundary,CatchBoundary:e.hasCatchBoundary,hasLoader:e.hasLoader}}function tt(e,t,n,r){return Object.keys(e).filter(a=>e[a].parentId===r).map(a=>{let o=Wn(e[a],t,n),l=tt(e,t,n,o.id);return l.length>0&&(o.children=l),o})}function jn(e,t){return r=>{let a=t[e.id];return _(a,`Expected route module to be loaded for ${e.id}`),a.unstable_shouldReload?a.unstable_shouldReload(r):!0}}async function et(e,t){let n=await Be(e,t);return await bt(n),n}function Jn(e,t){return async({url:r,signal:a,submission:o})=>{if(e.hasLoader){let[l]=await Promise.all([Ge(r,e.id,a,o),et(e,t)]);if(l instanceof Error)throw l;let s=await It(l);if(s)return s;if(Xe(l))throw new Le(l.status,l.statusText,await Ne(l));return Ne(l)}else await et(e,t)}}function Yn(e,t){return async({url:r,signal:a,submission:o})=>{e.hasAction||console.error(`Route "${e.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);let l=await Ge(r,e.id,a,o);if(l instanceof Error)throw l;let s=await It(l);if(s)return s;if(await et(e,t),Xe(l))throw new Le(l.status,l.statusText,await Ne(l));return Ne(l)}}async function It(e){if(kt(e)){let t=new URL(e.headers.get("X-Remix-Redirect"),window.location.origin);if(t.origin!==window.location.origin)await new Promise(()=>{window.location.replace(t.href)});else return new $e(t.pathname+t.search+t.hash,e.headers.get("X-Remix-Revalidate")!==null)}return null}var Vt=p.createContext(void 0);function Ee(){let e=p.useContext(Vt);return _(e,"You must render this element inside a <Remix> element"),e}function Ut({context:e,action:t,location:n,navigator:r,static:a=!1}){let{manifest:o,routeData:l,actionData:s,routeModules:h,serverHandoffString:i,appState:d}=e,m=p.useMemo(()=>tt(o.routes,h,Gn),[o,h]),[y,g]=p.useState(d),[v]=p.useState(()=>Ft({routes:m,actionData:s,loaderData:l,location:n,catch:d.catch,catchBoundaryId:d.catchBoundaryRouteId,onRedirect:r.replace,onChange:I=>{g({catch:I.catch,error:I.error,catchBoundaryRouteId:I.catchBoundaryId,loaderBoundaryRouteId:I.errorBoundaryId,renderBoundaryRouteId:null,trackBoundaries:!1,trackCatchBoundaries:!1})}})),R=p.useMemo(()=>({...r,push:(E,S)=>v.getState().transition.state!=="idle"?r.replace(E,S):r.push(E,S)}),[r,v]),{location:C,matches:M,loaderData:T,actionData:ue}=v.getState();p.useEffect(()=>{let{location:I}=v.getState();n!==I&&v.send({type:"navigation",location:n,submission:ar(),action:t})},[v,n,t]);let ce=y.error&&y.renderBoundaryRouteId===null&&y.loaderBoundaryRouteId===null?Wt(y.error):void 0,W=y.catch&&y.catchBoundaryRouteId===null?y.catch:void 0;return p.createElement(Vt.Provider,{value:{matches:M,manifest:o,appState:y,routeModules:h,serverHandoffString:i,clientRoutes:m,routeData:T,actionData:ue,transitionManager:v}},p.createElement(Te,{location:C,component:Rt,error:ce},p.createElement(Ke,{location:C,component:Et,catch:W},p.createElement(Oe,{navigationType:t,location:C,navigator:R,static:a},p.createElement(Kn,null)))))}function Wt(e){let t=new Error(e.message);return t.stack=e.stack,t}function Kn(){let{clientRoutes:e}=Ee();return Je(e)||e[0].element}var jt=p.createContext(void 0);function zn(){let e=p.useContext(jt);return _(e,"You must render this element in a remix route element"),e}function Xn({id:e}){throw new Error(`Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`)}function Gn({id:e}){let t=z(),{routeData:n,routeModules:r,appState:a}=Ee();_(n,`Cannot initialize 'routeData'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`),_(r,`Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);let o=n[e],{default:l,CatchBoundary:s,ErrorBoundary:h}=r[e],i=l?p.createElement(l,null):p.createElement(Xn,{id:e}),d={data:o,id:e};if(s){let m=a.catch&&a.catchBoundaryRouteId===e?a.catch:void 0;a.trackCatchBoundaries&&(a.catchBoundaryRouteId=e),d=m?{id:e,get data(){console.error("You cannot `useLoaderData` in a catch boundary.")}}:{id:e,data:o},i=p.createElement(Ke,{location:t,component:s,catch:m},i)}if(h){let m=a.error&&(a.renderBoundaryRouteId===e||a.loaderBoundaryRouteId===e)?Wt(a.error):void 0;a.trackBoundaries&&(a.renderBoundaryRouteId=e),d=m?{id:e,get data(){console.error("You cannot `useLoaderData` in an error boundary.")}}:{id:e,data:o},i=p.createElement(Te,{location:t,component:h,error:m},i)}return p.createElement(jt.Provider,{value:d},i)}function Jt(e,t){let[n,r]=p.useState(!1),[a,o]=p.useState(!1),{onFocus:l,onBlur:s,onMouseEnter:h,onMouseLeave:i,onTouchStart:d}=t;p.useEffect(()=>{e==="render"&&o(!0)},[e]);let m=()=>{e==="intent"&&r(!0)},y=()=>{e==="intent"&&(r(!1),o(!1))};return p.useEffect(()=>{if(n){let g=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(g)}}},[n]),[a,{onFocus:Ce(l,m),onBlur:Ce(s,y),onMouseEnter:Ce(h,m),onMouseLeave:Ce(i,y),onTouchStart:Ce(d,m)}]}var qn=p.forwardRef(({to:e,prefetch:t="none",...n},r)=>{let a=oe(e),[o,l]=Jt(t,n);return p.createElement(p.Fragment,null,p.createElement(gt,K({ref:r,to:e},n,l)),o?p.createElement(Yt,{page:a}):null)});qn.displayName="NavLink";var Qn=p.forwardRef(({to:e,prefetch:t="none",...n},r)=>{let a=oe(e),[o,l]=Jt(t,n);return p.createElement(p.Fragment,null,p.createElement(Ye,K({ref:r,to:e},n,l)),o?p.createElement(Yt,{page:a}):null)});Qn.displayName="Link";function Ce(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Yt({page:e,...t}){let{clientRoutes:n}=Ee(),r=p.useMemo(()=>we(n,e),[n,e]);return r?p.createElement(er,K({page:e,matches:r},t)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function Zn(e){let{routeModules:t}=Ee(),[n,r]=p.useState([]);return p.useEffect(()=>{let a=!1;return Nt(e,t).then(o=>{a||r(o)}),()=>{a=!0}},[e,t]),n}function er({page:e,matches:t,...n}){let r=z(),{matches:a,manifest:o}=Ee(),l=p.useMemo(()=>ze(e,t,a,r,"data"),[e,t,a,r]),s=p.useMemo(()=>ze(e,t,a,r,"assets"),[e,t,a,r]),h=p.useMemo(()=>Pt(e,l,o),[l,e,o]),i=p.useMemo(()=>St(s,o),[s,o]),d=Zn(s);return p.createElement(p.Fragment,null,h.map(m=>p.createElement("link",K({key:m,rel:"prefetch",as:"fetch",href:m},n))),i.map(m=>p.createElement("link",K({key:m,rel:"modulepreload",href:m},n))),d.map(m=>p.createElement("link",K({key:m.href},m))))}var tr=p.forwardRef((e,t)=>p.createElement(Kt,K({},e,{ref:t})));tr.displayName="Form";var Kt=p.forwardRef(({reloadDocument:e=!1,replace:t=!1,method:n="get",action:r=".",encType:a="application/x-www-form-urlencoded",fetchKey:o,onSubmit:l,...s},h)=>{let i=nr(o),d=n.toLowerCase()==="get"?"get":"post",m=zt(r);return p.createElement("form",K({ref:h,method:d,action:m,encType:a,onSubmit:e?void 0:y=>{if(l&&l(y),y.defaultPrevented)return;y.preventDefault();let g=y.nativeEvent.submitter;i(g||y.currentTarget,{method:n,replace:t})}},s))});Kt.displayName="FormImpl";function zt(e=".",t="get"){let{id:n}=zn(),r=ee(e),a=r.search,o=n.endsWith("/index");return e==="."&&o&&(a=a?a.replace(/^\?/,"?index&"):"?index"),r.pathname+a}var Ht="get",$t="application/x-www-form-urlencoded";function nr(e){let t=Re(),n=zt(),{transitionManager:r}=Ee();return p.useCallback((a,o={})=>{let l,s,h,i;if(ir(a)){let v=o.submissionTrigger;l=o.method||a.getAttribute("method")||Ht,s=o.action||a.getAttribute("action")||n,h=o.encType||a.getAttribute("enctype")||$t,i=new FormData(a),v&&v.name&&i.append(v.name,v.value)}else if(or(a)||lr(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error("Cannot submit a <button> without a <form>");l=o.method||a.getAttribute("formmethod")||v.getAttribute("method")||Ht,s=o.action||a.getAttribute("formaction")||v.getAttribute("action")||n,h=o.encType||a.getAttribute("formenctype")||v.getAttribute("enctype")||$t,i=new FormData(v),a.name&&i.set(a.name,a.value)}else{if(Ve(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(l=o.method||"get",s=o.action||n,h=o.encType||"application/x-www-form-urlencoded",a instanceof FormData)i=a;else if(i=new FormData,a instanceof URLSearchParams)for(let[v,R]of a)i.append(v,R);else if(a!=null)for(let v of Object.keys(a))i.append(v,a[v])}if(typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{protocol:d,host:m}=window.location,y=new URL(s,`${d}//${m}`);if(l.toLowerCase()==="get")for(let[v,R]of i)if(typeof R=="string")y.searchParams.append(v,R);else throw new Error("Cannot submit binary form data using GET");let g={formData:i,action:y.pathname+y.search,method:l.toUpperCase(),encType:h,key:Math.random().toString(36).substr(2,8)};e?r.send({type:"fetcher",href:g.action,submission:g,key:e}):(rr(g),t(y.pathname+y.search,{replace:o.replace}))},[n,e,t,r])}var nt;function rr(e){nt=e}function ar(){let e=nt;return nt=void 0,e}function Ve(e){return e!=null&&typeof e.tagName=="string"}function or(e){return Ve(e)&&e.tagName.toLowerCase()==="button"}function ir(e){return Ve(e)&&e.tagName.toLowerCase()==="form"}function lr(e){return Ve(e)&&e.tagName.toLowerCase()==="input"}function sr(e){let t=te.useRef();t.current==null&&(t.current=st({window}));let n=t.current,[r,a]=te.useReducer((l,s)=>s,{action:n.action,location:n.location});te.useLayoutEffect(()=>n.listen(a),[n]);let o=window.__remixContext;return o.manifest=window.__remixManifest,o.routeModules=window.__remixRouteModules,o.appState.trackBoundaries=!1,o.appState.trackCatchBoundaries=!1,te.createElement(Ut,{context:o,action:r.action,location:r.location,navigator:n})}N();export{vt as a,sr as b};
/**
 * @remix-run/react v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */