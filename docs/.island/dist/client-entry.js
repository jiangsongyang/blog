import Le,{createContext as ke}from"react";import{jsx as Ce}from"react/jsx-runtime";const Ae="modulepreload",Ie=function(e){return"/"+e},ne={},Oe=function(t,o,i){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=Ie(r),r in ne)return;ne[r]=!0;const s=r.endsWith(".css"),p=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${p}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":Ae,s||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),s)return new Promise((f,_)=>{a.addEventListener("load",f),a.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};const me=()=>typeof window<"u";ke({data:me()?window==null?void 0:window.ISLAND_PAGE_DATA:null,setData:e=>{}});const He="island-theme-appearance";let Ne,W,Q;typeof window<"u"&&typeof localStorage<"u"&&(W=localStorage.getItem(He)||"auto",Q=window.matchMedia("(prefers-color-scheme: dark)"),W==="auto"&&Q.matches,Q.onchange=e=>{W==="auto"&&Re(e.matches)});const Re=e=>{Ne[e?"add":"remove"]("dark")};var Pe=typeof global=="object"&&global&&global.Object===Object&&global;const je=Pe;var $e=typeof self=="object"&&self&&self.Object===Object&&self,De=je||$e||Function("return this")();const ue=De;var qe=ue.Symbol;const Y=qe;var pe=Object.prototype,Me=pe.hasOwnProperty,Be=pe.toString,D=Y?Y.toStringTag:void 0;function Ue(e){var t=Me.call(e,D),o=e[D];try{e[D]=void 0;var i=!0}catch{}var r=Be.call(e);return i&&(t?e[D]=o:delete e[D]),r}var We=Object.prototype,Ge=We.toString;function Fe(e){return Ge.call(e)}var Ye="[object Null]",Ke="[object Undefined]",oe=Y?Y.toStringTag:void 0;function Xe(e){return e==null?e===void 0?Ke:Ye:oe&&oe in Object(e)?Ue(e):Fe(e)}function Ze(e){return e!=null&&typeof e=="object"}var Ve="[object Symbol]";function Je(e){return typeof e=="symbol"||Ze(e)&&Xe(e)==Ve}var Qe=/\s/;function et(e){for(var t=e.length;t--&&Qe.test(e.charAt(t)););return t}var tt=/^\s+/;function nt(e){return e&&e.slice(0,et(e)+1).replace(tt,"")}function K(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var re=0/0,ot=/^[-+]0x[0-9a-f]+$/i,rt=/^0b[01]+$/i,at=/^0o[0-7]+$/i,it=parseInt;function ae(e){if(typeof e=="number")return e;if(Je(e))return re;if(K(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=K(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=nt(e);var o=rt.test(e);return o||at.test(e)?it(e.slice(2),o?2:8):ot.test(e)?re:+e}var ct=function(){return ue.Date.now()};const ee=ct;var st="Expected a function",dt=Math.max,lt=Math.min;function mt(e,t,o){var i,r,s,p,a,f,_=0,g=!1,w=!1,z=!0;if(typeof e!="function")throw new TypeError(st);t=ae(t)||0,K(o)&&(g=!!o.leading,w="maxWait"in o,s=w?dt(ae(o.maxWait)||0,t):s,z="trailing"in o?!!o.trailing:z);function L(h){var m=i,n=r;return i=r=void 0,_=h,p=e.apply(n,m),p}function E(h){return _=h,a=setTimeout(N,t),g?L(h):p}function A(h){var m=h-f,n=h-_,O=t-m;return w?lt(O,s-n):O}function M(h){var m=h-f,n=h-_;return f===void 0||m>=t||m<0||w&&n>=s}function N(){var h=ee();if(M(h))return B(h);a=setTimeout(N,A(h))}function B(h){return a=void 0,z&&i?L(h):(i=r=void 0,p)}function x(){a!==void 0&&clearTimeout(a),_=0,i=f=r=a=void 0}function R(){return a===void 0?p:B(ee())}function C(){var h=ee(),m=M(h);if(i=arguments,r=this,f=h,m){if(a===void 0)return E(f);if(w)return clearTimeout(a),a=setTimeout(N,t),L(f)}return a===void 0&&(a=setTimeout(N,t)),p}return C.cancel=x,C.flush=R,C}var ut="Expected a function";function pt(e,t,o){var i=!0,r=!0;if(typeof e!="function")throw new TypeError(ut);return K(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),mt(e,t,{leading:i,maxWait:t,trailing:r})}var ft=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],i=0;i<e.rangeCount;i++)o.push(e.getRangeAt(i));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(r){e.addRange(r)}),t&&t.focus()}},gt=ft,ie={"text/plain":"Text","text/html":"Url",default:"Text"},vt="Copy to clipboard: #{key}, Enter";function ht(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function _t(e,t){var o,i,r,s,p,a,f=!1;t||(t={}),o=t.debug||!1;try{r=gt(),s=document.createRange(),p=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(g){if(g.stopPropagation(),t.format)if(g.preventDefault(),typeof g.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var w=ie[t.format]||ie.default;window.clipboardData.setData(w,e)}else g.clipboardData.clearData(),g.clipboardData.setData(t.format,e);t.onCopy&&(g.preventDefault(),t.onCopy(g.clipboardData))}),document.body.appendChild(a),s.selectNodeContents(a),p.addRange(s);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");f=!0}catch(g){o&&console.error("unable to copy using execCommand: ",g),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(w){o&&console.error("unable to copy using clipboardData: ",w),o&&console.error("falling back to prompt"),i=ht("message"in t?t.message:vt),window.prompt(i,e)}}finally{p&&(typeof p.removeRange=="function"?p.removeRange(s):p.removeAllRanges()),a&&document.body.removeChild(a),r()}return f}var yt=_t;function bt(){const e=new Map;window.addEventListener("click",t=>{var i;const o=t.target;if(o.matches('div[class*="language-"] > button.copy')){const r=o.parentElement,s=(i=o.nextElementSibling)==null?void 0:i.nextElementSibling;if(!r||!s)return;const{innerText:p=""}=s;if(yt(p)){o.classList.add("copied"),clearTimeout(e.get(o));const f=setTimeout(()=>{o.classList.remove("copied"),o.blur(),e.delete(o)},2e3);e.set(o,f)}}})}/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},G=function(t){return t.tagName==="IMG"},wt=function(t){return NodeList.prototype.isPrototypeOf(t)},F=function(t){return t&&t.nodeType===1},ce=function(t){var o=t.currentSrc||t.src;return o.substr(-4).toLowerCase()===".svg"},se=function(t){try{return Array.isArray(t)?t.filter(G):wt(t)?[].slice.call(t).filter(G):F(t)?[t].filter(G):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(G):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Et=function(t){var o=document.createElement("div");return o.classList.add("medium-zoom-overlay"),o.style.background=t,o},xt=function(t){var o=t.getBoundingClientRect(),i=o.top,r=o.left,s=o.width,p=o.height,a=t.cloneNode(),f=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,_=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=i+f+"px",a.style.left=r+_+"px",a.style.width=s+"px",a.style.height=p+"px",a.style.transform="",a},j=function(t,o){var i=H({bubbles:!1,cancelable:!1,detail:void 0},o);if(typeof window.CustomEvent=="function")return new CustomEvent(t,i);var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),r},Tt=function e(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=window.Promise||function(c){function d(){}c(d,d)},r=function(c){var d=c.target;if(d===O){E();return}x.indexOf(d)!==-1&&A({target:d})},s=function(){if(!(C||!n.original)){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(h-c)>m.scrollOffset&&setTimeout(E,150)}},p=function(c){var d=c.key||c.keyCode;(d==="Escape"||d==="Esc"||d===27)&&E()},a=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c;if(c.background&&(O.style.background=c.background),c.container&&c.container instanceof Object&&(d.container=H({},m.container,c.container)),c.template){var v=F(c.template)?c.template:document.querySelector(c.template);d.template=v}return m=H({},m,d),x.forEach(function(y){y.dispatchEvent(j("medium-zoom:update",{detail:{zoom:b}}))}),b},f=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(H({},m,c))},_=function(){for(var c=arguments.length,d=Array(c),v=0;v<c;v++)d[v]=arguments[v];var y=d.reduce(function(u,S){return[].concat(u,se(S))},[]);return y.filter(function(u){return x.indexOf(u)===-1}).forEach(function(u){x.push(u),u.classList.add("medium-zoom-image")}),R.forEach(function(u){var S=u.type,k=u.listener,P=u.options;y.forEach(function(I){I.addEventListener(S,k,P)})}),b},g=function(){for(var c=arguments.length,d=Array(c),v=0;v<c;v++)d[v]=arguments[v];n.zoomed&&E();var y=d.length>0?d.reduce(function(u,S){return[].concat(u,se(S))},[]):x;return y.forEach(function(u){u.classList.remove("medium-zoom-image"),u.dispatchEvent(j("medium-zoom:detach",{detail:{zoom:b}}))}),x=x.filter(function(u){return y.indexOf(u)===-1}),b},w=function(c,d){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return x.forEach(function(y){y.addEventListener("medium-zoom:"+c,d,v)}),R.push({type:"medium-zoom:"+c,listener:d,options:v}),b},z=function(c,d){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return x.forEach(function(y){y.removeEventListener("medium-zoom:"+c,d,v)}),R=R.filter(function(y){return!(y.type==="medium-zoom:"+c&&y.listener.toString()===d.toString())}),b},L=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target,v=function(){var u={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},S=void 0,k=void 0;if(m.container)if(m.container instanceof Object)u=H({},u,m.container),S=u.width-u.left-u.right-m.margin*2,k=u.height-u.top-u.bottom-m.margin*2;else{var P=F(m.container)?m.container:document.querySelector(m.container),I=P.getBoundingClientRect(),X=I.width,ve=I.height,he=I.left,_e=I.top;u=H({},u,{width:X,height:ve,left:he,top:_e})}S=S||u.width-m.margin*2,k=k||u.height-m.margin*2;var $=n.zoomedHd||n.original,ye=ce($)?S:$.naturalWidth||S,be=ce($)?k:$.naturalHeight||k,U=$.getBoundingClientRect(),we=U.top,Ee=U.left,Z=U.width,V=U.height,xe=Math.min(Math.max(Z,ye),S)/Z,Te=Math.min(Math.max(V,be),k)/V,J=Math.min(xe,Te),Se=(-Ee+(S-Z)/2+m.margin+u.left)/J,ze=(-we+(k-V)/2+m.margin+u.top)/J,te="scale("+J+") translate3d("+Se+"px, "+ze+"px, 0)";n.zoomed.style.transform=te,n.zoomedHd&&(n.zoomedHd.style.transform=te)};return new i(function(y){if(d&&x.indexOf(d)===-1){y(b);return}var u=function X(){C=!1,n.zoomed.removeEventListener("transitionend",X),n.original.dispatchEvent(j("medium-zoom:opened",{detail:{zoom:b}})),y(b)};if(n.zoomed){y(b);return}if(d)n.original=d;else if(x.length>0){var S=x;n.original=S[0]}else{y(b);return}if(n.original.dispatchEvent(j("medium-zoom:open",{detail:{zoom:b}})),h=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,C=!0,n.zoomed=xt(n.original),document.body.appendChild(O),m.template){var k=F(m.template)?m.template:document.querySelector(m.template);n.template=document.createElement("div"),n.template.appendChild(k.content.cloneNode(!0)),document.body.appendChild(n.template)}if(n.original.parentElement&&n.original.parentElement.tagName==="PICTURE"&&n.original.currentSrc&&(n.zoomed.src=n.original.currentSrc),document.body.appendChild(n.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),n.original.classList.add("medium-zoom-image--hidden"),n.zoomed.classList.add("medium-zoom-image--opened"),n.zoomed.addEventListener("click",E),n.zoomed.addEventListener("transitionend",u),n.original.getAttribute("data-zoom-src")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("srcset"),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.removeAttribute("loading"),n.zoomedHd.src=n.zoomed.getAttribute("data-zoom-src"),n.zoomedHd.onerror=function(){clearInterval(P),console.warn("Unable to reach the zoom image target "+n.zoomedHd.src),n.zoomedHd=null,v()};var P=setInterval(function(){n.zoomedHd.complete&&(clearInterval(P),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",E),document.body.appendChild(n.zoomedHd),v())},10)}else if(n.original.hasAttribute("srcset")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.removeAttribute("loading");var I=n.zoomedHd.addEventListener("load",function(){n.zoomedHd.removeEventListener("load",I),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",E),document.body.appendChild(n.zoomedHd),v()})}else v()})},E=function(){return new i(function(c){if(C||!n.original){c(b);return}var d=function v(){n.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(n.zoomed),n.zoomedHd&&document.body.removeChild(n.zoomedHd),document.body.removeChild(O),n.zoomed.classList.remove("medium-zoom-image--opened"),n.template&&document.body.removeChild(n.template),C=!1,n.zoomed.removeEventListener("transitionend",v),n.original.dispatchEvent(j("medium-zoom:closed",{detail:{zoom:b}})),n.original=null,n.zoomed=null,n.zoomedHd=null,n.template=null,c(b)};C=!0,document.body.classList.remove("medium-zoom--opened"),n.zoomed.style.transform="",n.zoomedHd&&(n.zoomedHd.style.transform=""),n.template&&(n.template.style.transition="opacity 150ms",n.template.style.opacity=0),n.original.dispatchEvent(j("medium-zoom:close",{detail:{zoom:b}})),n.zoomed.addEventListener("transitionend",d)})},A=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target;return n.original?E():L({target:d})},M=function(){return m},N=function(){return x},B=function(){return n.original},x=[],R=[],C=!1,h=0,m=o,n={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?m=t:(t||typeof t=="string")&&_(t),m=H({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},m);var O=Et(m.background);document.addEventListener("click",r),document.addEventListener("keyup",p),document.addEventListener("scroll",s),window.addEventListener("resize",E);var b={open:L,close:E,toggle:A,update:a,clone:f,attach:_,detach:g,on:w,off:z,getOptions:M,getImages:N,getZoomedImage:B};return b};function St(e,t){t===void 0&&(t={});var o=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",o==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var zt=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";St(zt);const Lt=Tt,kt=60;function Ct(){function e(t,o,i=!1){let r=null;try{r=t.classList.contains("header-anchor")?t:document.getElementById(decodeURIComponent(o.slice(1)))}catch(s){console.warn(s)}if(r){const s=parseInt(window.getComputedStyle(r).paddingTop,10),p=window.scrollY+r.getBoundingClientRect().top-kt+s;window.scrollTo({left:0,top:p,...i?{behavior:"smooth"}:{}})}}window.addEventListener("click",t=>{const o=t.target.closest("a");if(o){const{origin:i,hash:r,target:s,pathname:p,search:a}=o,f=window.location;r&&s!=="_blank"&&i===f.origin&&p===f.pathname&&a===f.search&&r&&r!==f.hash&&o.classList.contains("header-anchor")&&(t.preventDefault(),history.pushState(null,"",r),e(o,r,!0),window.dispatchEvent(new Event("hashchange")))}},{capture:!0}),window.addEventListener("hashchange",t=>{t.preventDefault()})}function At(){function e(){return document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight}const t=60,o=document.getElementById("aside-marker"),i=document.getElementById("aside-container"),r=document.querySelectorAll(".island-doc .header-anchor");let s=null;const p=Array.from((i==null?void 0:i.getElementsByTagName("a"))||[]).map(g=>decodeURIComponent(g.hash));if(o&&!p.length){o.style.opacity="0";return}const a=(g,w)=>{if(s&&s.classList.remove("aside-active"),g[w]){g[w].classList.add("aside-active");const z=g[w].getAttribute("href"),L=p.findIndex(A=>A===z),E=i==null?void 0:i.querySelector(`a[href="#${z==null?void 0:z.slice(1)}"]`);E&&(s=E,s.classList.add("aside-active"),o.style.top=`${33+L*28}px`,o.style.opacity="1")}},f=()=>{if(e())a(r,r.length-1);else for(let g=0;g<r.length;g++){const w=r[g],z=r[g+1],L=window.scrollY,E=w.parentElement.offsetTop-t;if(g===0&&L===0&&a(r,0),!z){a(r,g);break}const A=z.parentElement.offsetTop-t;if(L>E&&L<A){a(r,g);break}}},_=pt(f,100);return requestAnimationFrame(f),window.addEventListener("scroll",_),()=>{window.removeEventListener("scroll",_)}}function It(){const e=document.querySelectorAll("img");Lt(e,{margin:100,background:"rgba(0, 0, 0, 0.7)"})}function Ot(){!me()||(At(),Ct(),bt(),It())}if(typeof window<"u"){var de={get passive(){}};window.addEventListener("testPassive",null,de),window.removeEventListener("testPassive",null,de)}typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1);var l={exports:{}},Ht="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Nt=Ht,Rt=Nt;function fe(){}function ge(){}ge.resetWarningCache=fe;var Pt=function(){function e(i,r,s,p,a,f){if(f!==Rt){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ge,resetWarningCache:fe};return o.PropTypes=o,o};l.exports=Pt();var q={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"};Object.keys(q).map(function(e){return q[e]});var le={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.keys(le).reduce(function(e,t){return e[le[t]]=t,e},{});q.NOSCRIPT,q.SCRIPT,q.STYLE;Le.createContext({});var jt=l.exports.shape({setHelmet:l.exports.func,helmetInstances:l.exports.shape({get:l.exports.func,add:l.exports.func,remove:l.exports.func})});l.exports.shape({helmet:l.exports.shape()}),l.exports.node.isRequired;jt.isRequired;l.exports.object,l.exports.object,l.exports.oneOfType([l.exports.arrayOf(l.exports.node),l.exports.node]),l.exports.string,l.exports.bool,l.exports.bool,l.exports.object,l.exports.arrayOf(l.exports.object),l.exports.arrayOf(l.exports.object),l.exports.arrayOf(l.exports.object),l.exports.func,l.exports.arrayOf(l.exports.object),l.exports.arrayOf(l.exports.object),l.exports.string,l.exports.object,l.exports.string,l.exports.bool,l.exports.object;async function $t(){if(!document.getElementById("root"))throw new Error("#root element not found");{const t=document.querySelectorAll("[__island]");if(t.length===0)return;const{hydrateRoot:o}=await Oe(()=>import("react-dom/client"),[]);for(let i=0;i<t.length;i++){const r=t[i],[s,p]=r.getAttribute("__island").split(":"),a=window.ISLANDS[s];o(r,Ce(a,{...window.ISLAND_PROPS[p]}))}}}$t().then(()=>{setTimeout(()=>{Ot()})});
