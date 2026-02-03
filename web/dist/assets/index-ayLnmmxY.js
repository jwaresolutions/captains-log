import{j as t,u as ie,a as Q,b as Y,Q as Ma,c as Ia}from"./query-qfgcgxkg.js";import{b as Lo,r as j,a as Ue}from"./vendor-ibvuEIEr.js";import{u as me,a as Ra,b as qe,L as te,c as Na,R as cn,d as H,B as Pa}from"./router-CxqMmorT.js";import{d as a,l as L,m as re,f as Ba,o as Oa}from"./ui-BNlCdbnp.js";import{l as ke,T as Gr,P as zo,M as xe,a as fe,b as Do,W as Ua,u as Mo}from"./maps-CDKGOAYI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var _r={},dn=Lo;_r.createRoot=dn.createRoot,_r.hydrateRoot=dn.hydrateRoot;function Io(e,r){return function(){return e.apply(r,arguments)}}const{toString:qa}=Object.prototype,{getPrototypeOf:en}=Object,{iterator:Vt,toStringTag:Ro}=Symbol,Gt=(e=>r=>{const n=qa.call(r);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ye=e=>(e=e.toLowerCase(),r=>Gt(r)===e),_t=e=>r=>typeof r===e,{isArray:pt}=Array,mt=_t("undefined");function wt(e){return e!==null&&!mt(e)&&e.constructor!==null&&!mt(e.constructor)&&ce(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const No=ye("ArrayBuffer");function Ha(e){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&No(e.buffer),r}const Wa=_t("string"),ce=_t("function"),Po=_t("number"),Ct=e=>e!==null&&typeof e=="object",Ka=e=>e===!0||e===!1,Ut=e=>{if(Gt(e)!=="object")return!1;const r=en(e);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Ro in e)&&!(Vt in e)},Va=e=>{if(!Ct(e)||wt(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Ga=ye("Date"),_a=ye("File"),Qa=ye("Blob"),Ja=ye("FileList"),Za=e=>Ct(e)&&ce(e.pipe),Ya=e=>{let r;return e&&(typeof FormData=="function"&&e instanceof FormData||ce(e.append)&&((r=Gt(e))==="formdata"||r==="object"&&ce(e.toString)&&e.toString()==="[object FormData]"))},Xa=ye("URLSearchParams"),[es,ts,rs,ns]=["ReadableStream","Request","Response","Headers"].map(ye),os=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function St(e,r,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,s;if(typeof e!="object"&&(e=[e]),pt(e))for(o=0,s=e.length;o<s;o++)r.call(null,e[o],o,e);else{if(wt(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let c;for(o=0;o<l;o++)c=i[o],r.call(null,e[c],c,e)}}function Bo(e,r){if(wt(e))return null;r=r.toLowerCase();const n=Object.keys(e);let o=n.length,s;for(;o-- >0;)if(s=n[o],r===s.toLowerCase())return s;return null}const Ze=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Oo=e=>!mt(e)&&e!==Ze;function Qr(){const{caseless:e,skipUndefined:r}=Oo(this)&&this||{},n={},o=(s,i)=>{const l=e&&Bo(n,i)||i;Ut(n[l])&&Ut(s)?n[l]=Qr(n[l],s):Ut(s)?n[l]=Qr({},s):pt(s)?n[l]=s.slice():(!r||!mt(s))&&(n[l]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&St(arguments[s],o);return n}const as=(e,r,n,{allOwnKeys:o}={})=>(St(r,(s,i)=>{n&&ce(s)?e[i]=Io(s,n):e[i]=s},{allOwnKeys:o}),e),ss=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),is=(e,r,n,o)=>{e.prototype=Object.create(r.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:r.prototype}),n&&Object.assign(e.prototype,n)},ls=(e,r,n,o)=>{let s,i,l;const c={};if(r=r||{},e==null)return r;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)l=s[i],(!o||o(l,e,r))&&!c[l]&&(r[l]=e[l],c[l]=!0);e=n!==!1&&en(e)}while(e&&(!n||n(e,r))&&e!==Object.prototype);return r},cs=(e,r,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=r.length;const o=e.indexOf(r,n);return o!==-1&&o===n},ds=e=>{if(!e)return null;if(pt(e))return e;let r=e.length;if(!Po(r))return null;const n=new Array(r);for(;r-- >0;)n[r]=e[r];return n},ms=(e=>r=>e&&r instanceof e)(typeof Uint8Array<"u"&&en(Uint8Array)),ps=(e,r)=>{const o=(e&&e[Vt]).call(e);let s;for(;(s=o.next())&&!s.done;){const i=s.value;r.call(e,i[0],i[1])}},hs=(e,r)=>{let n;const o=[];for(;(n=e.exec(r))!==null;)o.push(n);return o},us=ye("HTMLFormElement"),gs=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,s){return o.toUpperCase()+s}),mn=(({hasOwnProperty:e})=>(r,n)=>e.call(r,n))(Object.prototype),xs=ye("RegExp"),Uo=(e,r)=>{const n=Object.getOwnPropertyDescriptors(e),o={};St(n,(s,i)=>{let l;(l=r(s,i,e))!==!1&&(o[i]=l||s)}),Object.defineProperties(e,o)},fs=e=>{Uo(e,(r,n)=>{if(ce(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(ce(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ys=(e,r)=>{const n={},o=s=>{s.forEach(i=>{n[i]=!0})};return pt(e)?o(e):o(String(e).split(r)),n},bs=()=>{},$s=(e,r)=>e!=null&&Number.isFinite(e=+e)?e:r;function js(e){return!!(e&&ce(e.append)&&e[Ro]==="FormData"&&e[Vt])}const vs=e=>{const r=new Array(10),n=(o,s)=>{if(Ct(o)){if(r.indexOf(o)>=0)return;if(wt(o))return o;if(!("toJSON"in o)){r[s]=o;const i=pt(o)?[]:{};return St(o,(l,c)=>{const m=n(l,s+1);!mt(m)&&(i[c]=m)}),r[s]=void 0,i}}return o};return n(e,0)},ws=ye("AsyncFunction"),Cs=e=>e&&(Ct(e)||ce(e))&&ce(e.then)&&ce(e.catch),qo=((e,r)=>e?setImmediate:r?((n,o)=>(Ze.addEventListener("message",({source:s,data:i})=>{s===Ze&&i===n&&o.length&&o.shift()()},!1),s=>{o.push(s),Ze.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",ce(Ze.postMessage)),Ss=typeof queueMicrotask<"u"?queueMicrotask.bind(Ze):typeof process<"u"&&process.nextTick||qo,ks=e=>e!=null&&ce(e[Vt]),C={isArray:pt,isArrayBuffer:No,isBuffer:wt,isFormData:Ya,isArrayBufferView:Ha,isString:Wa,isNumber:Po,isBoolean:Ka,isObject:Ct,isPlainObject:Ut,isEmptyObject:Va,isReadableStream:es,isRequest:ts,isResponse:rs,isHeaders:ns,isUndefined:mt,isDate:Ga,isFile:_a,isBlob:Qa,isRegExp:xs,isFunction:ce,isStream:Za,isURLSearchParams:Xa,isTypedArray:ms,isFileList:Ja,forEach:St,merge:Qr,extend:as,trim:os,stripBOM:ss,inherits:is,toFlatObject:ls,kindOf:Gt,kindOfTest:ye,endsWith:cs,toArray:ds,forEachEntry:ps,matchAll:hs,isHTMLForm:us,hasOwnProperty:mn,hasOwnProp:mn,reduceDescriptors:Uo,freezeMethods:fs,toObjectSet:ys,toCamelCase:gs,noop:bs,toFiniteNumber:$s,findKey:Bo,global:Ze,isContextDefined:Oo,isSpecCompliantForm:js,toJSONObject:vs,isAsyncFn:ws,isThenable:Cs,setImmediate:qo,asap:Ss,isIterable:ks};function U(e,r,n,o,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",r&&(this.code=r),n&&(this.config=n),o&&(this.request=o),s&&(this.response=s,this.status=s.status?s.status:null)}C.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.status}}});const Ho=U.prototype,Wo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Wo[e]={value:e}});Object.defineProperties(U,Wo);Object.defineProperty(Ho,"isAxiosError",{value:!0});U.from=(e,r,n,o,s,i)=>{const l=Object.create(Ho);C.toFlatObject(e,l,function(h){return h!==Error.prototype},d=>d!=="isAxiosError");const c=e&&e.message?e.message:"Error",m=r==null&&e?e.code:r;return U.call(l,c,m,n,o,s),e&&l.cause==null&&Object.defineProperty(l,"cause",{value:e,configurable:!0}),l.name=e&&e.name||"Error",i&&Object.assign(l,i),l};const Ts=null;function Jr(e){return C.isPlainObject(e)||C.isArray(e)}function Ko(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function pn(e,r,n){return e?e.concat(r).map(function(s,i){return s=Ko(s),!n&&i?"["+s+"]":s}).join(n?".":""):r}function As(e){return C.isArray(e)&&!e.some(Jr)}const Es=C.toFlatObject(C,{},null,function(r){return/^is[A-Z]/.test(r)});function Qt(e,r,n){if(!C.isObject(e))throw new TypeError("target must be an object");r=r||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,x){return!C.isUndefined(x[f])});const o=n.metaTokens,s=n.visitor||h,i=n.dots,l=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(r);if(!C.isFunction(s))throw new TypeError("visitor must be a function");function d(p){if(p===null)return"";if(C.isDate(p))return p.toISOString();if(C.isBoolean(p))return p.toString();if(!m&&C.isBlob(p))throw new U("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(p)||C.isTypedArray(p)?m&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function h(p,f,x){let g=p;if(p&&!x&&typeof p=="object"){if(C.endsWith(f,"{}"))f=o?f:f.slice(0,-2),p=JSON.stringify(p);else if(C.isArray(p)&&As(p)||(C.isFileList(p)||C.endsWith(f,"[]"))&&(g=C.toArray(p)))return f=Ko(f),g.forEach(function(v,w){!(C.isUndefined(v)||v===null)&&r.append(l===!0?pn([f],w,i):l===null?f:f+"[]",d(v))}),!1}return Jr(p)?!0:(r.append(pn(x,f,i),d(p)),!1)}const b=[],$=Object.assign(Es,{defaultVisitor:h,convertValue:d,isVisitable:Jr});function u(p,f){if(!C.isUndefined(p)){if(b.indexOf(p)!==-1)throw Error("Circular reference detected in "+f.join("."));b.push(p),C.forEach(p,function(g,y){(!(C.isUndefined(g)||g===null)&&s.call(r,g,C.isString(y)?y.trim():y,f,$))===!0&&u(g,f?f.concat(y):[y])}),b.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return u(e),r}function hn(e){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function tn(e,r){this._pairs=[],e&&Qt(e,this,r)}const Vo=tn.prototype;Vo.append=function(r,n){this._pairs.push([r,n])};Vo.toString=function(r){const n=r?function(o){return r.call(this,o,hn)}:hn;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Fs(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Go(e,r,n){if(!r)return e;const o=n&&n.encode||Fs;C.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(r,n):i=C.isURLSearchParams(r)?r.toString():new tn(r,n).toString(o),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class un{constructor(){this.handlers=[]}use(r,n,o){return this.handlers.push({fulfilled:r,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){C.forEach(this.handlers,function(o){o!==null&&r(o)})}}const _o={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ls=typeof URLSearchParams<"u"?URLSearchParams:tn,zs=typeof FormData<"u"?FormData:null,Ds=typeof Blob<"u"?Blob:null,Ms={isBrowser:!0,classes:{URLSearchParams:Ls,FormData:zs,Blob:Ds},protocols:["http","https","file","blob","url","data"]},rn=typeof window<"u"&&typeof document<"u",Zr=typeof navigator=="object"&&navigator||void 0,Is=rn&&(!Zr||["ReactNative","NativeScript","NS"].indexOf(Zr.product)<0),Rs=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ns=rn&&window.location.href||"http://localhost",Ps=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rn,hasStandardBrowserEnv:Is,hasStandardBrowserWebWorkerEnv:Rs,navigator:Zr,origin:Ns},Symbol.toStringTag,{value:"Module"})),ne={...Ps,...Ms};function Bs(e,r){return Qt(e,new ne.classes.URLSearchParams,{visitor:function(n,o,s,i){return ne.isNode&&C.isBuffer(n)?(this.append(o,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...r})}function Os(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Us(e){const r={},n=Object.keys(e);let o;const s=n.length;let i;for(o=0;o<s;o++)i=n[o],r[i]=e[i];return r}function Qo(e){function r(n,o,s,i){let l=n[i++];if(l==="__proto__")return!0;const c=Number.isFinite(+l),m=i>=n.length;return l=!l&&C.isArray(s)?s.length:l,m?(C.hasOwnProp(s,l)?s[l]=[s[l],o]:s[l]=o,!c):((!s[l]||!C.isObject(s[l]))&&(s[l]=[]),r(n,o,s[l],i)&&C.isArray(s[l])&&(s[l]=Us(s[l])),!c)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(o,s)=>{r(Os(o),s,n,0)}),n}return null}function qs(e,r,n){if(C.isString(e))try{return(r||JSON.parse)(e),C.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const kt={transitional:_o,adapter:["xhr","http","fetch"],transformRequest:[function(r,n){const o=n.getContentType()||"",s=o.indexOf("application/json")>-1,i=C.isObject(r);if(i&&C.isHTMLForm(r)&&(r=new FormData(r)),C.isFormData(r))return s?JSON.stringify(Qo(r)):r;if(C.isArrayBuffer(r)||C.isBuffer(r)||C.isStream(r)||C.isFile(r)||C.isBlob(r)||C.isReadableStream(r))return r;if(C.isArrayBufferView(r))return r.buffer;if(C.isURLSearchParams(r))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let c;if(i){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Bs(r,this.formSerializer).toString();if((c=C.isFileList(r))||o.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Qt(c?{"files[]":r}:r,m&&new m,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),qs(r)):r}],transformResponse:[function(r){const n=this.transitional||kt.transitional,o=n&&n.forcedJSONParsing,s=this.responseType==="json";if(C.isResponse(r)||C.isReadableStream(r))return r;if(r&&C.isString(r)&&(o&&!this.responseType||s)){const l=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(r,this.parseReviver)}catch(c){if(l)throw c.name==="SyntaxError"?U.from(c,U.ERR_BAD_RESPONSE,this,null,this.response):c}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ne.classes.FormData,Blob:ne.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{kt.headers[e]={}});const Hs=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ws=e=>{const r={};let n,o,s;return e&&e.split(`
`).forEach(function(l){s=l.indexOf(":"),n=l.substring(0,s).trim().toLowerCase(),o=l.substring(s+1).trim(),!(!n||r[n]&&Hs[n])&&(n==="set-cookie"?r[n]?r[n].push(o):r[n]=[o]:r[n]=r[n]?r[n]+", "+o:o)}),r},gn=Symbol("internals");function ut(e){return e&&String(e).trim().toLowerCase()}function qt(e){return e===!1||e==null?e:C.isArray(e)?e.map(qt):String(e)}function Ks(e){const r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)r[o[1]]=o[2];return r}const Vs=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function rr(e,r,n,o,s){if(C.isFunction(o))return o.call(this,r,n);if(s&&(r=n),!!C.isString(r)){if(C.isString(o))return r.indexOf(o)!==-1;if(C.isRegExp(o))return o.test(r)}}function Gs(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,n,o)=>n.toUpperCase()+o)}function _s(e,r){const n=C.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(s,i,l){return this[o].call(this,r,s,i,l)},configurable:!0})})}let de=class{constructor(r){r&&this.set(r)}set(r,n,o){const s=this;function i(c,m,d){const h=ut(m);if(!h)throw new Error("header name must be a non-empty string");const b=C.findKey(s,h);(!b||s[b]===void 0||d===!0||d===void 0&&s[b]!==!1)&&(s[b||m]=qt(c))}const l=(c,m)=>C.forEach(c,(d,h)=>i(d,h,m));if(C.isPlainObject(r)||r instanceof this.constructor)l(r,n);else if(C.isString(r)&&(r=r.trim())&&!Vs(r))l(Ws(r),n);else if(C.isObject(r)&&C.isIterable(r)){let c={},m,d;for(const h of r){if(!C.isArray(h))throw TypeError("Object iterator must return a key-value pair");c[d=h[0]]=(m=c[d])?C.isArray(m)?[...m,h[1]]:[m,h[1]]:h[1]}l(c,n)}else r!=null&&i(n,r,o);return this}get(r,n){if(r=ut(r),r){const o=C.findKey(this,r);if(o){const s=this[o];if(!n)return s;if(n===!0)return Ks(s);if(C.isFunction(n))return n.call(this,s,o);if(C.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,n){if(r=ut(r),r){const o=C.findKey(this,r);return!!(o&&this[o]!==void 0&&(!n||rr(this,this[o],o,n)))}return!1}delete(r,n){const o=this;let s=!1;function i(l){if(l=ut(l),l){const c=C.findKey(o,l);c&&(!n||rr(o,o[c],c,n))&&(delete o[c],s=!0)}}return C.isArray(r)?r.forEach(i):i(r),s}clear(r){const n=Object.keys(this);let o=n.length,s=!1;for(;o--;){const i=n[o];(!r||rr(this,this[i],i,r,!0))&&(delete this[i],s=!0)}return s}normalize(r){const n=this,o={};return C.forEach(this,(s,i)=>{const l=C.findKey(o,i);if(l){n[l]=qt(s),delete n[i];return}const c=r?Gs(i):String(i).trim();c!==i&&delete n[i],n[c]=qt(s),o[c]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const n=Object.create(null);return C.forEach(this,(o,s)=>{o!=null&&o!==!1&&(n[s]=r&&C.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,n])=>r+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...n){const o=new this(r);return n.forEach(s=>o.set(s)),o}static accessor(r){const o=(this[gn]=this[gn]={accessors:{}}).accessors,s=this.prototype;function i(l){const c=ut(l);o[c]||(_s(s,l),o[c]=!0)}return C.isArray(r)?r.forEach(i):i(r),this}};de.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(de.prototype,({value:e},r)=>{let n=r[0].toUpperCase()+r.slice(1);return{get:()=>e,set(o){this[n]=o}}});C.freezeMethods(de);function nr(e,r){const n=this||kt,o=r||n,s=de.from(o.headers);let i=o.data;return C.forEach(e,function(c){i=c.call(n,i,s.normalize(),r?r.status:void 0)}),s.normalize(),i}function Jo(e){return!!(e&&e.__CANCEL__)}function ht(e,r,n){U.call(this,e??"canceled",U.ERR_CANCELED,r,n),this.name="CanceledError"}C.inherits(ht,U,{__CANCEL__:!0});function Zo(e,r,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):r(new U("Request failed with status code "+n.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Qs(e){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}function Js(e,r){e=e||10;const n=new Array(e),o=new Array(e);let s=0,i=0,l;return r=r!==void 0?r:1e3,function(m){const d=Date.now(),h=o[i];l||(l=d),n[s]=m,o[s]=d;let b=i,$=0;for(;b!==s;)$+=n[b++],b=b%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),d-l<r)return;const u=h&&d-h;return u?Math.round($*1e3/u):void 0}}function Zs(e,r){let n=0,o=1e3/r,s,i;const l=(d,h=Date.now())=>{n=h,s=null,i&&(clearTimeout(i),i=null),e(...d)};return[(...d)=>{const h=Date.now(),b=h-n;b>=o?l(d,h):(s=d,i||(i=setTimeout(()=>{i=null,l(s)},o-b)))},()=>s&&l(s)]}const Wt=(e,r,n=3)=>{let o=0;const s=Js(50,250);return Zs(i=>{const l=i.loaded,c=i.lengthComputable?i.total:void 0,m=l-o,d=s(m),h=l<=c;o=l;const b={loaded:l,total:c,progress:c?l/c:void 0,bytes:m,rate:d||void 0,estimated:d&&c&&h?(c-l)/d:void 0,event:i,lengthComputable:c!=null,[r?"download":"upload"]:!0};e(b)},n)},xn=(e,r)=>{const n=e!=null;return[o=>r[0]({lengthComputable:n,total:e,loaded:o}),r[1]]},fn=e=>(...r)=>C.asap(()=>e(...r)),Ys=ne.hasStandardBrowserEnv?((e,r)=>n=>(n=new URL(n,ne.origin),e.protocol===n.protocol&&e.host===n.host&&(r||e.port===n.port)))(new URL(ne.origin),ne.navigator&&/(msie|trident)/i.test(ne.navigator.userAgent)):()=>!0,Xs=ne.hasStandardBrowserEnv?{write(e,r,n,o,s,i,l){if(typeof document>"u")return;const c=[`${e}=${encodeURIComponent(r)}`];C.isNumber(n)&&c.push(`expires=${new Date(n).toUTCString()}`),C.isString(o)&&c.push(`path=${o}`),C.isString(s)&&c.push(`domain=${s}`),i===!0&&c.push("secure"),C.isString(l)&&c.push(`SameSite=${l}`),document.cookie=c.join("; ")},read(e){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ei(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ti(e,r){return r?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e}function Yo(e,r,n){let o=!ei(r);return e&&(o||n==!1)?ti(e,r):r}const yn=e=>e instanceof de?{...e}:e;function Xe(e,r){r=r||{};const n={};function o(d,h,b,$){return C.isPlainObject(d)&&C.isPlainObject(h)?C.merge.call({caseless:$},d,h):C.isPlainObject(h)?C.merge({},h):C.isArray(h)?h.slice():h}function s(d,h,b,$){if(C.isUndefined(h)){if(!C.isUndefined(d))return o(void 0,d,b,$)}else return o(d,h,b,$)}function i(d,h){if(!C.isUndefined(h))return o(void 0,h)}function l(d,h){if(C.isUndefined(h)){if(!C.isUndefined(d))return o(void 0,d)}else return o(void 0,h)}function c(d,h,b){if(b in r)return o(d,h);if(b in e)return o(void 0,d)}const m={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c,headers:(d,h,b)=>s(yn(d),yn(h),b,!0)};return C.forEach(Object.keys({...e,...r}),function(h){const b=m[h]||s,$=b(e[h],r[h],h);C.isUndefined($)&&b!==c||(n[h]=$)}),n}const Xo=e=>{const r=Xe({},e);let{data:n,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:l,auth:c}=r;if(r.headers=l=de.from(l),r.url=Go(Yo(r.baseURL,r.url,r.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&l.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),C.isFormData(n)){if(ne.hasStandardBrowserEnv||ne.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(C.isFunction(n.getHeaders)){const m=n.getHeaders(),d=["content-type","content-length"];Object.entries(m).forEach(([h,b])=>{d.includes(h.toLowerCase())&&l.set(h,b)})}}if(ne.hasStandardBrowserEnv&&(o&&C.isFunction(o)&&(o=o(r)),o||o!==!1&&Ys(r.url))){const m=s&&i&&Xs.read(i);m&&l.set(s,m)}return r},ri=typeof XMLHttpRequest<"u",ni=ri&&function(e){return new Promise(function(n,o){const s=Xo(e);let i=s.data;const l=de.from(s.headers).normalize();let{responseType:c,onUploadProgress:m,onDownloadProgress:d}=s,h,b,$,u,p;function f(){u&&u(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(h),s.signal&&s.signal.removeEventListener("abort",h)}let x=new XMLHttpRequest;x.open(s.method.toUpperCase(),s.url,!0),x.timeout=s.timeout;function g(){if(!x)return;const v=de.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),F={data:!c||c==="text"||c==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:v,config:e,request:x};Zo(function(I){n(I),f()},function(I){o(I),f()},F),x=null}"onloadend"in x?x.onloadend=g:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(g)},x.onabort=function(){x&&(o(new U("Request aborted",U.ECONNABORTED,e,x)),x=null)},x.onerror=function(w){const F=w&&w.message?w.message:"Network Error",k=new U(F,U.ERR_NETWORK,e,x);k.event=w||null,o(k),x=null},x.ontimeout=function(){let w=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||_o;s.timeoutErrorMessage&&(w=s.timeoutErrorMessage),o(new U(w,F.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,x)),x=null},i===void 0&&l.setContentType(null),"setRequestHeader"in x&&C.forEach(l.toJSON(),function(w,F){x.setRequestHeader(F,w)}),C.isUndefined(s.withCredentials)||(x.withCredentials=!!s.withCredentials),c&&c!=="json"&&(x.responseType=s.responseType),d&&([$,p]=Wt(d,!0),x.addEventListener("progress",$)),m&&x.upload&&([b,u]=Wt(m),x.upload.addEventListener("progress",b),x.upload.addEventListener("loadend",u)),(s.cancelToken||s.signal)&&(h=v=>{x&&(o(!v||v.type?new ht(null,e,x):v),x.abort(),x=null)},s.cancelToken&&s.cancelToken.subscribe(h),s.signal&&(s.signal.aborted?h():s.signal.addEventListener("abort",h)));const y=Qs(s.url);if(y&&ne.protocols.indexOf(y)===-1){o(new U("Unsupported protocol "+y+":",U.ERR_BAD_REQUEST,e));return}x.send(i||null)})},oi=(e,r)=>{const{length:n}=e=e?e.filter(Boolean):[];if(r||n){let o=new AbortController,s;const i=function(d){if(!s){s=!0,c();const h=d instanceof Error?d:this.reason;o.abort(h instanceof U?h:new ht(h instanceof Error?h.message:h))}};let l=r&&setTimeout(()=>{l=null,i(new U(`timeout ${r} of ms exceeded`,U.ETIMEDOUT))},r);const c=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(i):d.removeEventListener("abort",i)}),e=null)};e.forEach(d=>d.addEventListener("abort",i));const{signal:m}=o;return m.unsubscribe=()=>C.asap(c),m}},ai=function*(e,r){let n=e.byteLength;if(n<r){yield e;return}let o=0,s;for(;o<n;)s=o+r,yield e.slice(o,s),o=s},si=async function*(e,r){for await(const n of ii(e))yield*ai(n,r)},ii=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const r=e.getReader();try{for(;;){const{done:n,value:o}=await r.read();if(n)break;yield o}}finally{await r.cancel()}},bn=(e,r,n,o)=>{const s=si(e,r);let i=0,l,c=m=>{l||(l=!0,o&&o(m))};return new ReadableStream({async pull(m){try{const{done:d,value:h}=await s.next();if(d){c(),m.close();return}let b=h.byteLength;if(n){let $=i+=b;n($)}m.enqueue(new Uint8Array(h))}catch(d){throw c(d),d}},cancel(m){return c(m),s.return()}},{highWaterMark:2})},$n=64*1024,{isFunction:Tt}=C,li=(({Request:e,Response:r})=>({Request:e,Response:r}))(C.global),{ReadableStream:jn,TextEncoder:vn}=C.global,wn=(e,...r)=>{try{return!!e(...r)}catch{return!1}},ci=e=>{e=C.merge.call({skipUndefined:!0},li,e);const{fetch:r,Request:n,Response:o}=e,s=r?Tt(r):typeof fetch=="function",i=Tt(n),l=Tt(o);if(!s)return!1;const c=s&&Tt(jn),m=s&&(typeof vn=="function"?(p=>f=>p.encode(f))(new vn):async p=>new Uint8Array(await new n(p).arrayBuffer())),d=i&&c&&wn(()=>{let p=!1;const f=new n(ne.origin,{body:new jn,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!f}),h=l&&c&&wn(()=>C.isReadableStream(new o("").body)),b={stream:h&&(p=>p.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!b[p]&&(b[p]=(f,x)=>{let g=f&&f[p];if(g)return g.call(f);throw new U(`Response type '${p}' is not supported`,U.ERR_NOT_SUPPORT,x)})});const $=async p=>{if(p==null)return 0;if(C.isBlob(p))return p.size;if(C.isSpecCompliantForm(p))return(await new n(ne.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(C.isArrayBufferView(p)||C.isArrayBuffer(p))return p.byteLength;if(C.isURLSearchParams(p)&&(p=p+""),C.isString(p))return(await m(p)).byteLength},u=async(p,f)=>{const x=C.toFiniteNumber(p.getContentLength());return x??$(f)};return async p=>{let{url:f,method:x,data:g,signal:y,cancelToken:v,timeout:w,onDownloadProgress:F,onUploadProgress:k,responseType:I,headers:z,withCredentials:B="same-origin",fetchOptions:A}=Xo(p),M=r||fetch;I=I?(I+"").toLowerCase():"text";let q=oi([y,v&&v.toAbortSignal()],w),W=null;const G=q&&q.unsubscribe&&(()=>{q.unsubscribe()});let N;try{if(k&&d&&x!=="get"&&x!=="head"&&(N=await u(z,g))!==0){let _=new n(f,{method:"POST",body:g,duplex:"half"}),ae;if(C.isFormData(g)&&(ae=_.headers.get("content-type"))&&z.setContentType(ae),_.body){const[se,be]=xn(N,Wt(fn(k)));g=bn(_.body,$n,se,be)}}C.isString(B)||(B=B?"include":"omit");const X=i&&"credentials"in n.prototype,Le={...A,signal:q,method:x.toUpperCase(),headers:z.normalize().toJSON(),body:g,duplex:"half",credentials:X?B:void 0};W=i&&new n(f,Le);let oe=await(i?M(W,A):M(f,Le));const S=h&&(I==="stream"||I==="response");if(h&&(F||S&&G)){const _={};["status","statusText","headers"].forEach(Ne=>{_[Ne]=oe[Ne]});const ae=C.toFiniteNumber(oe.headers.get("content-length")),[se,be]=F&&xn(ae,Wt(fn(F),!0))||[];oe=new o(bn(oe.body,$n,se,()=>{be&&be(),G&&G()}),_)}I=I||"text";let K=await b[C.findKey(b,I)||"text"](oe,p);return!S&&G&&G(),await new Promise((_,ae)=>{Zo(_,ae,{data:K,headers:de.from(oe.headers),status:oe.status,statusText:oe.statusText,config:p,request:W})})}catch(X){throw G&&G(),X&&X.name==="TypeError"&&/Load failed|fetch/i.test(X.message)?Object.assign(new U("Network Error",U.ERR_NETWORK,p,W),{cause:X.cause||X}):U.from(X,X&&X.code,p,W)}}},di=new Map,ea=e=>{let r=e&&e.env||{};const{fetch:n,Request:o,Response:s}=r,i=[o,s,n];let l=i.length,c=l,m,d,h=di;for(;c--;)m=i[c],d=h.get(m),d===void 0&&h.set(m,d=c?new Map:ci(r)),h=d;return d};ea();const nn={http:Ts,xhr:ni,fetch:{get:ea}};C.forEach(nn,(e,r)=>{if(e){try{Object.defineProperty(e,"name",{value:r})}catch{}Object.defineProperty(e,"adapterName",{value:r})}});const Cn=e=>`- ${e}`,mi=e=>C.isFunction(e)||e===null||e===!1;function pi(e,r){e=C.isArray(e)?e:[e];const{length:n}=e;let o,s;const i={};for(let l=0;l<n;l++){o=e[l];let c;if(s=o,!mi(o)&&(s=nn[(c=String(o)).toLowerCase()],s===void 0))throw new U(`Unknown adapter '${c}'`);if(s&&(C.isFunction(s)||(s=s.get(r))))break;i[c||"#"+l]=s}if(!s){const l=Object.entries(i).map(([m,d])=>`adapter ${m} `+(d===!1?"is not supported by the environment":"is not available in the build"));let c=n?l.length>1?`since :
`+l.map(Cn).join(`
`):" "+Cn(l[0]):"as no adapter specified";throw new U("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s}const ta={getAdapter:pi,adapters:nn};function or(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ht(null,e)}function Sn(e){return or(e),e.headers=de.from(e.headers),e.data=nr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ta.getAdapter(e.adapter||kt.adapter,e)(e).then(function(o){return or(e),o.data=nr.call(e,e.transformResponse,o),o.headers=de.from(o.headers),o},function(o){return Jo(o)||(or(e),o&&o.response&&(o.response.data=nr.call(e,e.transformResponse,o.response),o.response.headers=de.from(o.response.headers))),Promise.reject(o)})}const ra="1.13.2",Jt={};["object","boolean","number","function","string","symbol"].forEach((e,r)=>{Jt[e]=function(o){return typeof o===e||"a"+(r<1?"n ":" ")+e}});const kn={};Jt.transitional=function(r,n,o){function s(i,l){return"[Axios v"+ra+"] Transitional option '"+i+"'"+l+(o?". "+o:"")}return(i,l,c)=>{if(r===!1)throw new U(s(l," has been removed"+(n?" in "+n:"")),U.ERR_DEPRECATED);return n&&!kn[l]&&(kn[l]=!0,console.warn(s(l," has been deprecated since v"+n+" and will be removed in the near future"))),r?r(i,l,c):!0}};Jt.spelling=function(r){return(n,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function hi(e,r,n){if(typeof e!="object")throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let s=o.length;for(;s-- >0;){const i=o[s],l=r[i];if(l){const c=e[i],m=c===void 0||l(c,i,e);if(m!==!0)throw new U("option "+i+" must be "+m,U.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new U("Unknown option "+i,U.ERR_BAD_OPTION)}}const Ht={assertOptions:hi,validators:Jt},je=Ht.validators;let Ye=class{constructor(r){this.defaults=r||{},this.interceptors={request:new un,response:new un}}async request(r,n){try{return await this._request(r,n)}catch(o){if(o instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{o.stack?i&&!String(o.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+i):o.stack=i}catch{}}throw o}}_request(r,n){typeof r=="string"?(n=n||{},n.url=r):n=r||{},n=Xe(this.defaults,n);const{transitional:o,paramsSerializer:s,headers:i}=n;o!==void 0&&Ht.assertOptions(o,{silentJSONParsing:je.transitional(je.boolean),forcedJSONParsing:je.transitional(je.boolean),clarifyTimeoutError:je.transitional(je.boolean)},!1),s!=null&&(C.isFunction(s)?n.paramsSerializer={serialize:s}:Ht.assertOptions(s,{encode:je.function,serialize:je.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ht.assertOptions(n,{baseUrl:je.spelling("baseURL"),withXsrfToken:je.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&C.merge(i.common,i[n.method]);i&&C.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=de.concat(l,i);const c=[];let m=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(m=m&&f.synchronous,c.unshift(f.fulfilled,f.rejected))});const d=[];this.interceptors.response.forEach(function(f){d.push(f.fulfilled,f.rejected)});let h,b=0,$;if(!m){const p=[Sn.bind(this),void 0];for(p.unshift(...c),p.push(...d),$=p.length,h=Promise.resolve(n);b<$;)h=h.then(p[b++],p[b++]);return h}$=c.length;let u=n;for(;b<$;){const p=c[b++],f=c[b++];try{u=p(u)}catch(x){f.call(this,x);break}}try{h=Sn.call(this,u)}catch(p){return Promise.reject(p)}for(b=0,$=d.length;b<$;)h=h.then(d[b++],d[b++]);return h}getUri(r){r=Xe(this.defaults,r);const n=Yo(r.baseURL,r.url,r.allowAbsoluteUrls);return Go(n,r.params,r.paramsSerializer)}};C.forEach(["delete","get","head","options"],function(r){Ye.prototype[r]=function(n,o){return this.request(Xe(o||{},{method:r,url:n,data:(o||{}).data}))}});C.forEach(["post","put","patch"],function(r){function n(o){return function(i,l,c){return this.request(Xe(c||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}Ye.prototype[r]=n(),Ye.prototype[r+"Form"]=n(!0)});let ui=class na{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const o=this;this.promise.then(s=>{if(!o._listeners)return;let i=o._listeners.length;for(;i-- >0;)o._listeners[i](s);o._listeners=null}),this.promise.then=s=>{let i;const l=new Promise(c=>{o.subscribe(c),i=c}).then(s);return l.cancel=function(){o.unsubscribe(i)},l},r(function(i,l,c){o.reason||(o.reason=new ht(i,l,c),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const n=this._listeners.indexOf(r);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const r=new AbortController,n=o=>{r.abort(o)};return this.subscribe(n),r.signal.unsubscribe=()=>this.unsubscribe(n),r.signal}static source(){let r;return{token:new na(function(s){r=s}),cancel:r}}};function gi(e){return function(n){return e.apply(null,n)}}function xi(e){return C.isObject(e)&&e.isAxiosError===!0}const Yr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Yr).forEach(([e,r])=>{Yr[r]=e});function oa(e){const r=new Ye(e),n=Io(Ye.prototype.request,r);return C.extend(n,Ye.prototype,r,{allOwnKeys:!0}),C.extend(n,r,null,{allOwnKeys:!0}),n.create=function(s){return oa(Xe(e,s))},n}const Z=oa(kt);Z.Axios=Ye;Z.CanceledError=ht;Z.CancelToken=ui;Z.isCancel=Jo;Z.VERSION=ra;Z.toFormData=Qt;Z.AxiosError=U;Z.Cancel=Z.CanceledError;Z.all=function(r){return Promise.all(r)};Z.spread=gi;Z.isAxiosError=xi;Z.mergeConfig=Xe;Z.AxiosHeaders=de;Z.formToJSON=e=>Qo(C.isHTMLForm(e)?new FormData(e):e);Z.getAdapter=ta.getAdapter;Z.HttpStatusCode=Yr;Z.default=Z;const{Axios:$x,AxiosError:jx,CanceledError:vx,isCancel:wx,CancelToken:Cx,VERSION:Sx,all:kx,Cancel:Tx,isAxiosError:Ax,spread:Ex,toFormData:Fx,AxiosHeaders:Lx,HttpStatusCode:zx,formToJSON:Dx,getAdapter:Mx,mergeConfig:Ix}=Z;class fi{client;constructor(){const r="/api/v1";localStorage.removeItem("api_base_url"),this.client=Z.create({baseURL:r,timeout:1e4,headers:{"Content-Type":"application/json"}}),this.client.interceptors.request.use(n=>{const o=this.getAuthToken();return o&&(n.headers.Authorization=`Bearer ${o}`),n},n=>Promise.reject(n)),this.client.interceptors.response.use(n=>n,n=>{var s,i,l,c,m,d;if(!n.response){const h={message:n.code==="ECONNABORTED"?"Request timeout. Please try again.":"Network error. Please check your internet connection.",code:"NETWORK_ERROR",details:{originalError:n.message}};return Promise.reject(h)}const o={message:this.getErrorMessage(n),code:n.response.status.toString(),details:n.response.data};switch(n.response.status){case 401:this.clearAuthToken(),o.message="Your session has expired. Please log in again.";break;case 403:o.message="You don't have permission to perform this action.";break;case 404:o.message="The requested resource was not found.";break;case 409:o.message=((i=(s=n.response.data)==null?void 0:s.error)==null?void 0:i.message)||"A conflict occurred. The resource may have been modified.";break;case 422:o.message=((c=(l=n.response.data)==null?void 0:l.error)==null?void 0:c.message)||"Invalid data provided.";break;case 429:o.message="Too many requests. Please wait a moment and try again.";break;case 500:o.message="Server error. Please try again later.";break;case 503:o.message="Service temporarily unavailable. Please try again later.";break}return console.error("API Error:",{status:n.response.status,message:o.message,url:(m=n.config)==null?void 0:m.url,method:(d=n.config)==null?void 0:d.method}),Promise.reject(o)})}getAuthToken(){return localStorage.getItem("auth_token")}setAuthToken(r){localStorage.setItem("auth_token",r)}clearAuthToken(){localStorage.removeItem("auth_token")}getErrorMessage(r){var n,o,s,i,l;return(s=(o=(n=r.response)==null?void 0:n.data)==null?void 0:o.error)!=null&&s.message?r.response.data.error.message:(l=(i=r.response)==null?void 0:i.data)!=null&&l.message?r.response.data.message:r.message?r.message:"An unexpected error occurred"}async retryRequest(r,n=3,o=1e3){let s;for(let i=1;i<=n;i++)try{return await r()}catch(l){if(s=l,l.code&&l.code.startsWith("4")&&l.code!=="408"&&l.code!=="429")throw l;i<n&&await new Promise(c=>setTimeout(c,o*i))}throw s}updateBaseUrl(r){let n;try{const o=new URL(r).origin,s=window.location.origin;o===s||window.location.hostname==="localhost"&&new URL(r).hostname==="localhost"?n="/api/v1":(n=r.replace(/\/$/,""),n.endsWith("/api/v1")||(n+="/api/v1"))}catch{n=r.replace(/\/$/,""),n.endsWith("/api/v1")||(n+="/api/v1")}this.client.defaults.baseURL=n,console.log("API base URL updated to:",n)}async checkConnectivity(){try{return await this.healthCheck(),!0}catch{return!1}}async get(r,n){return(await this.client.get(r,{params:n})).data.data}async post(r,n){return(await this.client.post(r,n)).data.data}async put(r,n){return(await this.client.put(r,n)).data.data}async patch(r,n){return(await this.client.patch(r,n)).data.data}async delete(r){return(await this.client.delete(r)).data.data}async login(r,n){const s=(await this.client.post("/auth/login",{username:r,password:n})).data;return this.setAuthToken(s.token),s}async logout(){try{await this.post("/auth/logout")}finally{this.clearAuthToken()}}async changePassword(r,n){await this.post("/auth/change-password",{currentPassword:r,newPassword:n}),this.clearAuthToken()}async healthCheck(){return(await Z.get("/health")).data}async getBoats(){return this.get("/boats")}async getBoat(r){return this.get(`/boats/${r}`)}async createBoat(r){return this.post("/boats",r)}async updateBoat(r,n){return this.put(`/boats/${r}`,n)}async toggleBoatStatus(r,n){return this.patch(`/boats/${r}/status`,{enabled:n})}async setActiveBoat(r){return this.patch(`/boats/${r}/active`)}async getTrips(r){return this.get("/trips",r)}async getTrip(r){return this.get(`/trips/${r}`)}async createTrip(r){return this.post("/trips",r)}async updateTrip(r,n){return this.put(`/trips/${r}`,n)}async addManualData(r,n){return this.patch(`/trips/${r}/manual-data`,n)}async getLicenseProgress(){return this.get("/captain-log/progress")}async getNotes(r){return this.get("/notes",r)}async getNote(r){return this.get(`/notes/${r}`)}async createNote(r){return this.post("/notes",r)}async updateNote(r,n){return this.put(`/notes/${r}`,n)}async deleteNote(r){return this.delete(`/notes/${r}`)}async getTodoLists(r){return this.get("/todos",r?{boatId:r}:void 0)}async getTodoList(r){return this.get(`/todos/${r}`)}async createTodoList(r){return this.post("/todos",r)}async updateTodoList(r,n){return this.put(`/todos/${r}`,n)}async deleteTodoList(r){return this.delete(`/todos/${r}`)}async addTodoItem(r,n){return this.post(`/todos/${r}/items`,{content:n})}async toggleTodoItem(r){return this.patch(`/todos/items/${r}/complete`)}async updateTodoItem(r,n){return this.put(`/todos/items/${r}`,n)}async deleteTodoItem(r){return this.delete(`/todos/items/${r}`)}async getMaintenanceTemplates(r){return this.get("/maintenance/templates",r?{boatId:r}:void 0)}async getMaintenanceTemplate(r){return this.get(`/maintenance/templates/${r}`)}async createMaintenanceTemplate(r){return this.post("/maintenance/templates",r)}async updateMaintenanceTemplate(r,n){return this.put(`/maintenance/templates/${r}`,n)}async deleteMaintenanceTemplate(r){return this.delete(`/maintenance/templates/${r}`)}async getUpcomingMaintenanceEvents(r){return this.get("/maintenance/events/upcoming",r?{boatId:r}:void 0)}async getCompletedMaintenanceEvents(r){return this.get("/maintenance/events/completed",r?{boatId:r}:void 0)}async getMaintenanceEvent(r){return this.get(`/maintenance/events/${r}`)}async completeMaintenanceEvent(r,n){return this.post(`/maintenance/events/${r}/complete`,n)}async getMarkedLocations(r){return this.get("/locations",r)}async getMarkedLocation(r){return this.get(`/locations/${r}`)}async createMarkedLocation(r){return this.post("/locations",r)}async updateMarkedLocation(r,n){return this.put(`/locations/${r}`,n)}async deleteMarkedLocation(r){return this.delete(`/locations/${r}`)}async getNearbyLocations(r,n,o){return this.get("/locations/nearby",{latitude:r,longitude:n,radiusMeters:o})}async uploadPhoto(r,n,o){const s=new FormData;return s.append("photo",r),s.append("entityType",n),s.append("entityId",o),(await this.client.post("/photos",s,{headers:{"Content-Type":"multipart/form-data"}})).data.data}async getPhotos(r,n){return this.get("/photos",{entityType:r,entityId:n})}async deletePhoto(r){return this.delete(`/photos/${r}`)}async getNotifications(){const r=await this.get("/notifications");return Array.isArray(r)?r:(r==null?void 0:r.notifications)||[]}async markNotificationAsRead(r){return this.patch(`/notifications/${r}/read`)}async createBackup(){return this.post("/backups")}async getBackups(){return this.get("/backups")}async downloadBackup(r){return(await this.client.get(`/backups/${r}/download`,{responseType:"blob"})).data}async getViewerSettings(){return this.get("/settings/viewer")}async updateViewerSettings(r){return this.put("/settings/viewer",r)}}const P=new fi,yi=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  transform: translateY(${e=>e.$show?"0":"-100%"});
  transition: transform 0.3s ease-in-out;
`,bi=a.div`
  background: ${e=>e.theme.colors.status.warning};
  color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.md};
`,$i=a.button`
  background: transparent;
  border: 1px solid ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.background};
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: ${e=>e.theme.colors.background}20;
  }
`,ji=a.div`
  position: static;
  z-index: auto;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${e=>e.$isOnline?e.theme.colors.status.success:e.theme.colors.status.error};
  color: white;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    animation: ${e=>e.$isOnline?"none":"pulse 2s infinite"};
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,vi=({showConnectionStatus:e=!0})=>{const[r,n]=j.useState(navigator.onLine),[o,s]=j.useState(!1),[i,l]=j.useState(!1);j.useEffect(()=>{const m=()=>{n(!0),s(!1),h()},d=()=>{n(!1),s(!0)},h=async()=>{try{!await P.checkConnectivity()&&navigator.onLine&&(n(!1),s(!0))}catch{navigator.onLine&&(n(!1),s(!0))}};window.addEventListener("online",m),window.addEventListener("offline",d),navigator.onLine?h():s(!0);const b=setInterval(()=>{r||h()},3e4);return()=>{window.removeEventListener("online",m),window.removeEventListener("offline",d),clearInterval(b)}},[r]);const c=async()=>{l(!0);try{await P.checkConnectivity()&&(n(!0),s(!1))}catch{}finally{l(!1)}};return t.jsxs(t.Fragment,{children:[t.jsx(yi,{$show:o,children:t.jsxs(bi,{children:[t.jsx("span",{children:"⚠ You are currently offline"}),t.jsx($i,{onClick:c,disabled:i,children:i?"Checking...":"Retry"})]})}),e&&t.jsx(ji,{$isOnline:r,children:r?"Online":"Offline"})]})},wi={primary:L`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.neonCarrot};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.neonCarrot};
    }
  `,secondary:L`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.lilac};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.lilac};
    }
  `,accent:L`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.anakiwa};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.anakiwa};
    }
  `,info:L`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.mariner};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.mariner};
    }
  `},Ci={none:L`
    padding: 0;
  `,sm:L`
    padding: ${e=>e.theme.spacing.sm};
  `,md:L`
    padding: ${e=>e.theme.spacing.md};
  `,lg:L`
    padding: ${e=>e.theme.spacing.lg};
  `},Si=a.div`
  display: flex;
  flex-direction: column;

  ${e=>wi[e.variant]}
`,ki=a.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.lcars.buttonRadius};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.inverse};
`,Ti=a.div`
  background-color: ${e=>e.theme.colors.background};
  border: 1px solid;
  border-top: none;
  flex: 1;

  ${e=>Ci[e.padding]}
`,D=({children:e,title:r,variant:n="primary",padding:o="md",className:s})=>t.jsxs(Si,{variant:n,className:s,children:[r&&t.jsx(ki,{className:"panel-header",children:r}),t.jsx(Ti,{padding:o,className:"panel-content",children:e})]}),Ai={primary:L`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: ${e=>e.theme.shadows.glowStrong};
    }
  `,secondary:L`
    background-color: ${e=>e.theme.colors.primary.lilac};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #DDA6DD;
    }

    &:active:not(:disabled) {
      background-color: #EEB3EE;
      box-shadow: 0 0 40px rgba(204, 153, 204, 0.5);
    }
  `,accent:L`
    background-color: ${e=>e.theme.colors.primary.anakiwa};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #AAD6FF;
    }

    &:active:not(:disabled) {
      background-color: #BBE0FF;
      box-shadow: 0 0 40px rgba(153, 204, 255, 0.5);
    }
  `,info:L`
    background-color: ${e=>e.theme.colors.primary.mariner};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #4477DD;
    }

    &:active:not(:disabled) {
      background-color: #5588EE;
      box-shadow: 0 0 40px rgba(51, 102, 204, 0.5);
    }
  `,warning:L`
    background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #FFD677;
    }

    &:active:not(:disabled) {
      background-color: #FFE088;
      box-shadow: 0 0 40px rgba(255, 204, 102, 0.5);
    }
  `,danger:L`
    background-color: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #FF6666;
    }

    &:active:not(:disabled) {
      background-color: #FF7777;
      box-shadow: 0 0 40px rgba(255, 85, 85, 0.5);
    }
  `,sidebar:L`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};
    border-radius: 0 9999px 9999px 0;

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: ${e=>e.theme.shadows.glowStrong};
    }
  `,"cap-left":L`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};
    border-radius: 9999px 0 0 9999px;

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: ${e=>e.theme.shadows.glowStrong};
    }
  `,"cap-right":L`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};
    border-radius: 0 9999px 9999px 0;

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: ${e=>e.theme.shadows.glowStrong};
    }
  `},Ei={sm:L`
    height: 28px;
    padding: 0 ${e=>e.theme.spacing.md};
    font-size: ${e=>e.theme.typography.fontSize.sm};
  `,md:L`
    height: 40px;
    padding: 0 ${e=>e.theme.spacing.lg};
    font-size: ${e=>e.theme.typography.fontSize.md};
  `,lg:L`
    height: 56px;
    padding: 0 ${e=>e.theme.spacing.xl};
    font-size: ${e=>e.theme.typography.fontSize.lg};
  `},Fi=a.button`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  border: none;
  border-radius: ${e=>e.theme.lcars.buttonRadius};
  cursor: pointer;
  transition: all ${e=>e.theme.animation.fast} ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.sm};
  white-space: nowrap;
  box-shadow: none;
  position: relative;
  overflow: hidden;

  /* Left-to-right sweep hover effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(-100%);
    transition: transform 0.35s ease;
    border-radius: inherit;
  }

  &:hover:not(:disabled)::after {
    transform: translateX(0);
  }

  &:active:not(:disabled)::after {
    background: rgba(255, 255, 255, 0.35);
  }

  ${e=>Ai[e.variant]}
  ${e=>Ei[e.size]}

  &:disabled {
    background-color: ${e=>e.theme.colors.interactive.disabled};
    color: ${e=>e.theme.colors.text.muted};
    cursor: not-allowed;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary.tanoi};
    outline-offset: 2px;
  }
`,T=({children:e,variant:r="primary",size:n="md",disabled:o=!1,onClick:s,className:i,type:l="button"})=>t.jsx(Fi,{variant:r,size:n,disabled:o,onClick:s,className:i,type:l,children:e}),Li={1:L`
    font-size: ${e=>e.theme.typography.fontSize.xxxl};
  `,2:L`
    font-size: ${e=>e.theme.typography.fontSize.xxl};
  `,3:L`
    font-size: ${e=>e.theme.typography.fontSize.xl};
  `,4:L`
    font-size: ${e=>e.theme.typography.fontSize.lg};
  `,5:L`
    font-size: ${e=>e.theme.typography.fontSize.md};
  `,6:L`
    font-size: ${e=>e.theme.typography.fontSize.md};
  `},zi={neonCarrot:L`
    color: ${e=>e.theme.colors.primary.neonCarrot};
  `,tanoi:L`
    color: ${e=>e.theme.colors.primary.tanoi};
  `,lilac:L`
    color: ${e=>e.theme.colors.primary.lilac};
  `,anakiwa:L`
    color: ${e=>e.theme.colors.primary.anakiwa};
  `,mariner:L`
    color: ${e=>e.theme.colors.primary.mariner};
  `},Di={left:L`
    text-align: left;
  `,center:L`
    text-align: center;
  `,right:L`
    text-align: right;
  `},Mi={neonCarrot:"#FF9933",tanoi:"#FFCC99",lilac:"#CC99CC",anakiwa:"#99CCFF"},Ii=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Ri=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin: 0;

  ${e=>Li[e.level]}
  ${e=>zi[e.color]}
  ${e=>Di[e.align]}
`,Ni=a.div`
  width: 100%;
  height: 4px;
  background-color: ${e=>e.color};
  border-radius: 0;
`,O=({children:e,level:r=1,color:n="neonCarrot",align:o="left",withBar:s=!1,barColor:i="neonCarrot",className:l})=>{const c=`h${r}`,m=t.jsx(Ri,{as:c,level:r,color:n,align:o,className:l,children:e});return s?t.jsxs(Ii,{children:[m,t.jsx(Ni,{color:Mi[i]})]}):m},aa=re`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,Pi=re`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,Bi=a.div`
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
  width: 100%;
  animation: ${e=>e.show?aa:Pi} 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    top: 60px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`,Oi=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,Ui=a.div`
  padding: 16px;
  border-left: 4px solid ${e=>{switch(e.type){case"maintenance":return e.theme.colors.primary.neonCarrot;case"warning":return e.theme.colors.status.warning;case"error":return e.theme.colors.status.error;default:return e.theme.colors.primary.anakiwa}}};
  background: ${e=>e.isRead?e.theme.colors.surface.dark:e.theme.colors.background};
  opacity: ${e=>e.isRead?.7:1};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.surface.medium};
  }
`,qi=a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`,Hi=a.div`
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
`,Wi=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.light};
  white-space: nowrap;
  margin-left: 8px;
`,Ki=a.div`
  color: ${e=>e.theme.colors.text.light};
  font-size: 13px;
  line-height: 1.4;
`,Vi=a.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`,Gi=a.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${e=>e.theme.colors.status.error};
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  min-width: 20px;
  
  ${e=>e.count>99&&`
    border-radius: 10px;
    padding: 0 6px;
    width: auto;
  `}
`,_i=a.button`
  position: relative;
  background: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.inverse};
  border: none;
  border-radius: 9999px;
  padding: 0 16px;
  height: 32px;
  cursor: pointer;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.2);
  }

  ${e=>e.$hasUnread&&`
    filter: brightness(1.3);
  `}
`,Qi=a.div`
  text-align: center;
  padding: 32px 16px;
  color: ${e=>e.theme.colors.text.light};
`,Ji=({className:e})=>{const[r,n]=j.useState([]),[o,s]=j.useState(!1),[i,l]=j.useState(!1),c=(r||[]).filter(p=>!p.read).length;j.useEffect(()=>{m();const p=setInterval(m,3e4);return()=>clearInterval(p)},[]);const m=async()=>{try{l(!0);const p=await P.getNotifications();n(p)}catch(p){console.error("Failed to load notifications:",p)}finally{l(!1)}},d=()=>{s(!o)},h=async p=>{if(!p.read)try{await P.markNotificationAsRead(p.id),n(f=>f.map(x=>x.id===p.id?{...x,read:!0}:x))}catch(f){console.error("Failed to mark notification as read:",f)}},b=async()=>{const p=(r||[]).filter(f=>!f.read);try{await Promise.all(p.map(f=>P.markNotificationAsRead(f.id))),n(f=>f.map(x=>({...x,read:!0})))}catch(f){console.error("Failed to mark all notifications as read:",f)}},$=p=>{const f=new Date(p),g=new Date().getTime()-f.getTime(),y=Math.floor(g/6e4),v=Math.floor(y/60),w=Math.floor(v/24);return y<1?"Just now":y<60?`${y}m ago`:v<24?`${v}h ago`:w<7?`${w}d ago`:f.toLocaleDateString()},u=p=>{switch(p){case"maintenance_due":return"🔧";case"system":return"ℹ️";case"warning":return"⚠️";case"error":return"❌";default:return"📢"}};return t.jsxs("div",{className:e,children:[t.jsxs(_i,{onClick:d,$hasUnread:c>0,children:["Alerts",c>0&&t.jsx(Gi,{count:c,children:c>99?"99+":c})]}),o&&t.jsx(Bi,{show:o,children:t.jsx(D,{children:t.jsxs("div",{style:{padding:"16px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsx(O,{level:3,children:"System Alerts"}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[c>0&&t.jsx(T,{size:"sm",variant:"secondary",onClick:b,children:"Mark All Read"}),t.jsx(T,{size:"sm",variant:"secondary",onClick:d,children:"Close"})]})]}),i?t.jsx("div",{style:{textAlign:"center",padding:"20px"},children:"Loading notifications..."}):r.length===0?t.jsxs(Qi,{children:[t.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📭"}),t.jsx("div",{children:"No notifications"})]}):t.jsx(Oi,{children:r.map(p=>t.jsxs(Ui,{type:p.type,isRead:p.read,onClick:()=>h(p),children:[t.jsxs(qi,{children:[t.jsxs(Hi,{children:[u(p.type)," ",p.title]}),t.jsx(Wi,{children:$(p.createdAt)})]}),t.jsx(Ki,{children:p.message}),p.entityType&&p.entityId&&t.jsx(Vi,{children:t.jsx(T,{size:"sm",variant:"primary",onClick:()=>{const f=p.entityType==="maintenance"?`/maintenance/events/${p.entityId}`:`/${p.entityType}/${p.entityId}`;window.location.href=f},children:"View Details"})})]},p.id))})]})})})]})};a.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10001;
  padding: 16px 20px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 400px;
  animation: ${aa} 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  background: ${e=>{switch(e.type){case"success":return"#51cf66";case"error":return"#ff6b6b";case"warning":return"#ffd43b";case"info":return"#339af0";default:return"#339af0"}}};
  
  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`;a.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  margin-left: auto;
  
  &:hover {
    opacity: 0.7;
  }
`;const on="200px",Zi="60px",Tn="60px",Xr="40px",Yi="3px",Xi="44px",Fe="768px",sa=re`
  from { opacity: 0; }
  to   { opacity: 1; }
`,el=a.div`
  min-height: 100vh;
  display: grid;
  background: ${e=>e.theme.colors.background};
  grid-template-columns: ${on} 1fr;
  grid-template-rows: ${Tn} 1fr ${Xr};
  grid-template-areas:
    "sidebar header"
    "sidebar content"
    "sidebar footer";
  gap: 0;
  overflow-x: hidden;
  animation: ${sa} 0.6s ease;

  @media (max-width: ${Fe}) {
    grid-template-columns: 1fr;
    grid-template-rows: ${Tn} 1fr ${Xr};
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
`,tl=a.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: ${Yi};
  overflow-y: auto;
  overflow-x: hidden;
  animation: ${sa} 0.4s ease;

  @media (max-width: ${Fe}) {
    display: none;
  }
`,rl=a.div`
  width: ${on};
  height: ${Zi};
  background: ${e=>e.theme.colors.primary.tanoi};
  position: relative;
  flex-shrink: 0;
  border-radius: 32px 0 0 0;
`,nl=a.div`
  width: ${on};
  height: ${Xr};
  background: ${e=>e.theme.colors.primary.lilac};
  position: relative;
  flex-shrink: 0;
  border-radius: 0 0 0 32px;
  margin-top: auto;
`,At=["tanoi","anakiwa","lilac","goldenTanoi","neonCarrot","mariner","anakiwa","lilac","tanoi","neonCarrot","goldenTanoi","mariner"],ol=a.button`
  width: 100%;
  height: ${Xi};
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  background: ${e=>e.$color};
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  text-align: right;
  padding: 0 18px 0 0;
  border-radius: 0 24px 24px 0;
  position: relative;
  overflow: hidden;
  z-index: 0;

  /* Left-to-right sweep hover effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(-100%);
    transition: transform 0.35s ease;
    z-index: 0;
    border-radius: inherit;
  }

  &:hover:not(:disabled)::after {
    transform: translateX(0);
  }

  &:active:not(:disabled)::after {
    background: rgba(255, 255, 255, 0.35);
  }

  ${e=>e.$isActive&&L`
    filter: brightness(1.35);
    box-shadow: 0 0 12px currentColor, inset 0 0 8px rgba(255,255,255,0.15);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      bottom: 4px;
      width: 4px;
      background: #fff;
      border-radius: 0 2px 2px 0;
      z-index: 1;
    }
  `}
`,al=a.div`
  width: 60%;
  height: 3px;
  background: ${e=>e.$color};
  border-radius: 0 2px 2px 0;
  flex-shrink: 0;
  opacity: 0.6;
`,sl=a.header`
  grid-area: header;
  background: ${e=>e.theme.colors.primary.tanoi};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  @media (max-width: ${Fe}) {
    border-radius: 0;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`,il=a.h1`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.extraWide};
  margin: 0;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.2s;

  &:hover { opacity: 0.8; }

  @media (max-width: ${Fe}) {
    font-size: ${e=>e.theme.typography.fontSize.lg};
    letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  }

  @media (max-width: 480px) {
    font-size: ${e=>e.theme.typography.fontSize.md};
    letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  }
`,ll=a.img`
  height: 40px;
  width: auto;
  cursor: pointer;
  margin-right: 12px;
  filter: drop-shadow(0 0 6px rgba(255, 153, 51, 0.4));
  transition: filter 0.2s;

  &:hover {
    filter: drop-shadow(0 0 10px rgba(255, 153, 51, 0.7));
  }

  @media (max-width: ${Fe}) {
    height: 32px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`,cl=a.span`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  margin-right: auto;
  padding-left: 40px;
  opacity: 0.75;

  @media (max-width: ${Fe}) {
    display: none;
  }
`,dl=a.main`
  grid-area: content;
  background: ${e=>e.theme.colors.background};
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${e=>e.theme.spacing.lg};

  @media (max-width: ${Fe}) {
    padding: ${e=>e.theme.spacing.md};
  }

  @media (max-width: 480px) {
    padding: ${e=>e.theme.spacing.sm};
  }
`,ml=a.footer`
  grid-area: footer;
  background: ${e=>e.theme.colors.primary.lilac};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  @media (max-width: ${Fe}) {
    border-radius: 0;
    justify-content: center;
  }
`,pl=a.span`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  opacity: 0.8;
`,hl=a.div`
  display: none;

  @media (max-width: ${Fe}) {
    display: ${e=>e.$open?"flex":"none"};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    z-index: ${e=>e.theme.zIndex.modal};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 24px;
  }
`,ul=a.button`
  width: 80%;
  max-width: 320px;
  height: 48px;
  border: none;
  cursor: pointer;
  background: ${e=>e.$isActive?e.$color:`${e.$color}44`};
  color: ${e=>e.$isActive?e.theme.colors.text.inverse:e.$color};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  border-radius: 0 24px 24px 0;
  transition: background 0.15s, transform 0.1s;

  &:hover {
    filter: brightness(1.2);
    transform: translateX(4px);
  }
`,gl=a.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: ${e=>e.theme.colors.primary.neonCarrot};
  color: ${e=>e.theme.colors.text.inverse};
  border: none;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 24px;
  cursor: pointer;
`,xl=a.button`
  display: none;
  @media (max-width: ${Fe}) {
    display: block;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: 2px solid ${e=>e.theme.colors.text.inverse};
    color: ${e=>e.theme.colors.text.inverse};
    font-family: ${e=>e.theme.typography.fontFamily.primary};
    font-size: ${e=>e.theme.typography.fontSize.sm};
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
    padding: 6px 12px;
    border-radius: 12px;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 8px;
    border: 2px solid currentColor;
    background: none;
    color: inherit;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-family: inherit;
  }
`,An=[{label:"Dashboard",path:"/dashboard"},{label:"Vessels",path:"/boats"},{label:"Trip Log",path:"/trips"},{label:"Notes",path:"/notes"},{label:"To-Do Lists",path:"/todos"},{label:"Maintenance",path:"/maintenance"},{label:"Navigation",path:"/map"},{label:"Reports",path:"/reports"},{label:"Calendar",path:"/calendar"},{label:"Photos",path:"/photos"},{label:"Settings",path:"/settings"}];function fl(){const e=new Date,r=e.getFullYear(),n=new Date(r,0,1).getTime(),o=new Date(r+1,0,1).getTime(),s=(e.getTime()-n)/(o-n);return((r-2323)*1e3+s*1e3).toFixed(1)}const yl=({children:e})=>{const r=me(),n=Ra(),[o,s]=j.useState(!1),i=d=>d==="/"?n.pathname==="/":d==="/dashboard"?n.pathname==="/dashboard":n.pathname.startsWith(d),l=d=>{r(d),s(!1)},c=fl(),m=["#664466","#3366CC","#006699","#CC99CC","#FFCC66"];return t.jsxs(el,{children:[t.jsxs(tl,{children:[t.jsx(rl,{}),An.map((d,h)=>{const b=At[h%At.length],u={tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99",eggplant:"#664466",bahamBlue:"#006699"}[b]||"#FFCC99";return t.jsxs(Ue.Fragment,{children:[h>0&&t.jsx(al,{$color:m[h%m.length]}),t.jsx(ol,{$color:u,$isActive:i(d.path),onClick:()=>l(d.path),"aria-current":i(d.path)?"page":void 0,children:d.label})]},d.path)}),t.jsx(nl,{})]}),t.jsxs(sl,{children:[t.jsx(xl,{onClick:()=>s(!0),children:"Menu"}),t.jsxs(cl,{children:["Stardate ",c," (",new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),")"]}),t.jsx(ll,{src:"/assets/captains-log-logo.png",alt:"Captain's Log",onClick:()=>l("/")}),t.jsx(il,{onClick:()=>l("/"),children:"Captain's Log"}),t.jsx("div",{style:{marginLeft:"8px"},children:t.jsx(Ji,{})})]}),t.jsx(dl,{children:e}),t.jsxs(ml,{children:[t.jsx(vi,{}),t.jsx(pl,{style:{marginLeft:"auto"},children:"LCARS v47.3 — Library Computer Access/Retrieval System"})]}),t.jsxs(hl,{$open:o,children:[t.jsx(gl,{onClick:()=>s(!1),children:"Close"}),An.map((d,h)=>{const $={tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99",eggplant:"#664466",bahamBlue:"#006699"}[At[h%At.length]]||"#FFCC99";return t.jsx(ul,{$color:$,$isActive:i(d.path),onClick:()=>l(d.path),children:d.label},d.path)})]})]})},bl=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: ${e=>e.theme.spacing.xl};
  text-align: center;
`,$l=a.div`
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  margin: ${e=>e.theme.spacing.lg} 0;
`;a.details`
  margin-top: ${e=>e.theme.spacing.lg};
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.surface.dark};
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.colors.status.error};
  max-width: 600px;
  
  summary {
    cursor: pointer;
    color: ${e=>e.theme.colors.status.error};
    font-weight: bold;
    margin-bottom: ${e=>e.theme.spacing.sm};
  }
  
  pre {
    font-size: ${e=>e.theme.typography.fontSize.sm};
    color: ${e=>e.theme.colors.text.secondary};
    white-space: pre-wrap;
    word-break: break-word;
    margin: 0;
  }
`;const jl=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.xl};
`;class vl extends j.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,n){console.error("Error caught by boundary:",r,n),this.setState({error:r,errorInfo:n}),console.error("Production error:",{error:r.message,stack:r.stack,componentStack:n.componentStack})}handleReload=()=>{window.location.reload()};handleGoHome=()=>{window.location.href="/"};handleRetry=()=>{this.setState({hasError:!1,error:void 0,errorInfo:void 0})};render(){return this.state.hasError?this.props.fallback?this.props.fallback:t.jsx(bl,{children:t.jsxs(D,{children:[t.jsx(O,{level:1,children:"System Error"}),t.jsx($l,{children:"An unexpected error has occurred in the application."}),t.jsx("p",{children:"The error has been logged and will be investigated. You can try reloading the page or returning to the dashboard."}),t.jsxs(jl,{children:[t.jsx(T,{onClick:this.handleRetry,variant:"primary",children:"Try Again"}),t.jsx(T,{onClick:this.handleReload,variant:"secondary",children:"Reload Page"}),t.jsx(T,{onClick:this.handleGoHome,variant:"secondary",children:"Go to Dashboard"})]}),!1]})}):this.props.children}}const wl={neonCarrot:L`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,tanoi:L`
    background-color: ${e=>e.theme.colors.primary.tanoi};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,lilac:L`
    background-color: ${e=>e.theme.colors.primary.lilac};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,anakiwa:L`
    background-color: ${e=>e.theme.colors.primary.anakiwa};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,mariner:L`
    background-color: ${e=>e.theme.colors.primary.mariner};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `};a.div`
  position: relative;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  flex-shrink: 0;

  ${e=>wl[e.color]}

  /* Create the quarter-circle cutout using a pseudo-element */
  &::before {
    content: '';
    position: absolute;
    width: ${e=>e.size-e.armWidth}px;
    height: ${e=>e.size-e.armWidth}px;
  }

  /* Position the cutout based on elbow orientation */
  ${e=>{switch(e.position){case"top-left":return L`
          &::before {
            bottom: 0;
            right: 0;
            border-radius: 0 0 0 ${e.size-e.armWidth}px;
          }
        `;case"top-right":return L`
          &::before {
            bottom: 0;
            left: 0;
            border-radius: 0 0 ${e.size-e.armWidth}px 0;
          }
        `;case"bottom-left":return L`
          &::before {
            top: 0;
            right: 0;
            border-radius: 0 ${e.size-e.armWidth}px 0 0;
          }
        `;case"bottom-right":return L`
          &::before {
            top: 0;
            left: 0;
            border-radius: ${e.size-e.armWidth}px 0 0 0;
          }
        `}}}
`;a.div`
  display: flex;
  flex-direction: ${e=>e.orientation==="horizontal"?"row":"column"};
  flex-shrink: 0;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height};
  gap: ${e=>e.isSegmented?e.theme.lcars.gap:"0"};
  border-radius: 0;
  overflow: hidden;
`;a.div`
  background-color: ${e=>e.color};
  flex: ${e=>e.flex||1};
  border-radius: 0;
`;const Cl=a.div`
  display: flex;
  flex-direction: column;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  gap: ${e=>e.gap};
  min-height: 100%;

  > * {
    width: 100%;
    flex-shrink: 0;
  }
`,Ae=({children:e,width:r="200px",gap:n="3px",className:o})=>t.jsx(Cl,{width:r,gap:n,className:o,children:e}),Sl={sm:L`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.xs};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
  `,md:L`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.lg};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
  `,lg:L`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.xl};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.lg};
    }
  `},kl={neonCarrot:L`
    color: ${e=>e.theme.colors.primary.neonCarrot};
  `,lilac:L`
    color: ${e=>e.theme.colors.primary.lilac};
  `,anakiwa:L`
    color: ${e=>e.theme.colors.primary.anakiwa};
  `,mariner:L`
    color: ${e=>e.theme.colors.primary.mariner};
  `,success:L`
    color: ${e=>e.theme.colors.status.success};
  `},Tl={neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",success:"#55FF55",error:"#FF5555"},Al=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.xs};
  background-color: transparent;

  ${e=>Sl[e.size]}
`,El=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.normal};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  color: ${e=>e.theme.colors.primary.lilac};
  opacity: 0.8;
`,Fl=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,Ll=a.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  box-shadow: 0 0 8px ${e=>e.color};
  flex-shrink: 0;
`,zl=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};

  ${e=>kl[e.valueColor]}
`,Dl=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.normal};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
`,E=({label:e,value:r,unit:n,size:o="md",valueColor:s="neonCarrot",showIndicator:i=!1,indicatorColor:l="neonCarrot",className:c})=>t.jsxs(Al,{size:o,className:c,children:[t.jsx(El,{className:"data-label",children:e}),t.jsxs(Fl,{children:[i&&t.jsx(Ll,{color:Tl[l]}),t.jsx(zl,{className:"data-value",valueColor:s,children:r}),n&&t.jsx(Dl,{className:"data-unit",children:n})]})]}),Ml={info:L`
    background-color: ${e=>e.theme.colors.primary.anakiwa};
    border-color: #AAD6FF;
    color: ${e=>e.theme.colors.text.inverse};
  `,success:L`
    background-color: ${e=>e.theme.colors.status.success};
    border-color: #88FF88;
    color: ${e=>e.theme.colors.text.inverse};
  `,warning:L`
    background-color: ${e=>e.theme.colors.status.warning};
    border-color: #FFFF88;
    color: ${e=>e.theme.colors.text.inverse};
  `,error:L`
    background-color: ${e=>e.theme.colors.status.error};
    border-color: #FF8888;
    color: ${e=>e.theme.colors.text.inverse};
  `},Il=a.div.withConfig({shouldForwardProp:e=>!["type","blink"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing.md};
  border: 2px solid;
  border-radius: ${e=>e.theme.borderRadius.lg};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;

  ${e=>Ml[e.type]}

  ${e=>e.blink&&L`
    animation: lcars-blink 1s infinite;
  `}
`,Rl=a.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,Nl=a.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Pl=a.div`
  flex: 1;
`,Bl=a.button`
  background: none;
  border: none;
  color: inherit;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  cursor: pointer;
  padding: ${e=>e.theme.spacing.xs};
  border-radius: ${e=>e.theme.borderRadius.sm};
  transition: background-color ${e=>e.theme.animation.fast} ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`,Ol=e=>{switch(e){case"info":return"ℹ";case"success":return"✓";case"warning":return"⚠";case"error":return"✗";default:return"ℹ"}},Ee=({children:e,type:r="info",blink:n=!1,dismissible:o=!1,onDismiss:s,className:i})=>t.jsxs(Il,{type:r,blink:n,className:i,children:[t.jsxs(Rl,{children:[t.jsx(Nl,{children:Ol(r)}),t.jsx(Pl,{children:e})]}),o&&s&&t.jsx(Bl,{onClick:s,"aria-label":"Dismiss alert",children:"×"})]}),Ul={neonCarrot:L`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.primary.neonCarrot} 0%,
        ${e=>e.theme.colors.primary.goldenTanoi} 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.neonCarrot};
    }
  `,lilac:L`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.primary.lilac} 0%,
        #DDA6DD 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.lilac};
    }
  `,anakiwa:L`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.primary.anakiwa} 0%,
        #AAD6FF 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.anakiwa};
    }
  `,success:L`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.status.success} 0%,
        #88FF88 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.status.success};
    }
  `},ql={sm:L`
    .chart-title {
      font-size: ${e=>e.theme.typography.fontSize.sm};
      margin-bottom: ${e=>e.theme.spacing.sm};
    }
    .progress-bar {
      height: 12px;
    }
    .progress-stats {
      font-size: ${e=>e.theme.typography.fontSize.xs};
      margin-top: ${e=>e.theme.spacing.sm};
    }
  `,md:L`
    .chart-title {
      font-size: ${e=>e.theme.typography.fontSize.md};
      margin-bottom: ${e=>e.theme.spacing.md};
    }
    .progress-bar {
      height: 16px;
    }
    .progress-stats {
      font-size: ${e=>e.theme.typography.fontSize.sm};
      margin-top: ${e=>e.theme.spacing.md};
    }
  `,lg:L`
    .chart-title {
      font-size: ${e=>e.theme.typography.fontSize.lg};
      margin-bottom: ${e=>e.theme.spacing.lg};
    }
    .progress-bar {
      height: 20px;
    }
    .progress-stats {
      font-size: ${e=>e.theme.typography.fontSize.md};
      margin-top: ${e=>e.theme.spacing.lg};
    }
  `},Hl=a.div`
  ${e=>Ul[e.color]}
  ${e=>ql[e.size]}
`,Wl=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.primary};
`,Kl=a.div`
  background-color: ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  position: relative;
  border: 1px solid ${e=>e.theme.colors.surface.light};
`,Vl=a.div`
  height: 100%;
  width: ${e=>Math.min(e.progress,100)}%;
  transition: width 0.5s ease-in-out;
  border-radius: ${e=>e.theme.borderRadius.pill};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0 ${e=>e.theme.borderRadius.pill} ${e=>e.theme.borderRadius.pill} 0;
  }
`,Gl=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,En=a.span`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Kt=({title:e,current:r,target:n,unit:o="",color:s="neonCarrot",size:i="md",showPercentage:l=!0,className:c})=>{const m=n>0?r/n*100:0,d=Math.round(m),h=r>=n;return t.jsxs(Hl,{color:s,size:i,className:c,children:[t.jsx(Wl,{className:"chart-title",children:e}),t.jsx(Kl,{children:t.jsx(Vl,{className:"progress-fill",progress:m})}),t.jsxs(Gl,{className:"progress-stats",children:[t.jsxs("div",{children:[t.jsx(En,{className:"progress-text",children:r}),o&&` ${o}`," / ",n,o&&` ${o}`]}),l&&t.jsxs("div",{className:"progress-text",children:[t.jsxs(En,{children:[d,"%"]}),h&&" ✓"]})]})]})},_l={neonCarrot:L`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.neonCarrot};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.neonCarrot};
    }
  `,lilac:L`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.lilac};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.lilac};
    }
  `,anakiwa:L`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.anakiwa};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.anakiwa};
    }
  `,success:L`
    .estimate-value {
      color: ${e=>e.theme.colors.status.success};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.status.success};
    }
  `},Ql={sm:L`
    .estimate-title {
      font-size: ${e=>e.theme.typography.fontSize.xs};
    }
    .estimate-value {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .estimate-subtitle {
      font-size: ${e=>e.theme.typography.fontSize.xs};
    }
    padding: ${e=>e.theme.spacing.sm};
  `,md:L`
    .estimate-title {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
    .estimate-value {
      font-size: ${e=>e.theme.typography.fontSize.lg};
    }
    .estimate-subtitle {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
    padding: ${e=>e.theme.spacing.md};
  `,lg:L`
    .estimate-title {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .estimate-value {
      font-size: ${e=>e.theme.typography.fontSize.xl};
    }
    .estimate-subtitle {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    padding: ${e=>e.theme.spacing.lg};
  `},Jl=a.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid;
  border-radius: ${e=>e.theme.borderRadius.lg};
  text-align: center;
  position: relative;

  ${e=>_l[e.color]}
  ${e=>Ql[e.size]}

  ${e=>e.isComplete&&L`
    .estimate-value {
      color: ${r=>r.theme.colors.status.success};
    }
    .estimate-border {
      border-color: ${r=>r.theme.colors.status.success};
    }

    &::after {
      content: '✓ COMPLETE';
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: ${r=>r.theme.typography.fontSize.xs};
      color: ${r=>r.theme.colors.status.success};
      font-weight: ${r=>r.theme.typography.fontWeight.bold};
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  `}
`,Zl=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,ar=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,sr=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ir=({title:e,estimatedDate:r,daysRemaining:n,isComplete:o=!1,color:s="neonCarrot",size:i="md",className:l})=>{const c=d=>{try{return new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"Unknown"}},m=d=>{if(d<=0)return"Goal Achieved";if(d===1)return"1 Day";if(d<30)return`${d} Days`;if(d<365){const b=Math.round(d/30);return b===1?"1 Month":`${b} Months`}const h=Math.round(d/365);return h===1?"1 Year":`${h} Years`};return t.jsxs(Jl,{color:s,size:i,isComplete:o,className:`estimate-border ${l||""}`,children:[t.jsx(Zl,{className:"estimate-title",children:e}),o?t.jsxs(t.Fragment,{children:[t.jsx(ar,{className:"estimate-value",children:"ACHIEVED"}),t.jsx(sr,{className:"estimate-subtitle",children:"Goal Complete"})]}):t.jsxs(t.Fragment,{children:[r&&t.jsxs(t.Fragment,{children:[t.jsx(ar,{className:"estimate-value",children:c(r)}),t.jsx(sr,{className:"estimate-subtitle",children:"Estimated Completion"})]}),n!==void 0&&t.jsxs(t.Fragment,{children:[t.jsx(ar,{className:"estimate-value",children:m(n)}),t.jsx(sr,{className:"estimate-subtitle",children:"Remaining"})]})]})]})},he={all:["boats"],lists:()=>[...he.all,"list"],list:e=>[...he.lists(),{filters:e}],details:()=>[...he.all,"detail"],detail:e=>[...he.details(),e]},ue=()=>ie({queryKey:he.lists(),queryFn:()=>P.getBoats()}),Yl=e=>ie({queryKey:he.detail(e),queryFn:()=>P.getBoat(e),enabled:!!e}),Xl=()=>{const e=Q();return Y({mutationFn:r=>P.createBoat(r),onSuccess:()=>{e.invalidateQueries({queryKey:he.lists()})}})},ec=()=>{const e=Q();return Y({mutationFn:({id:r,data:n})=>P.updateBoat(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:he.detail(n)}),e.invalidateQueries({queryKey:he.lists()})}})},ia=()=>{const e=Q();return Y({mutationFn:({id:r,enabled:n})=>P.toggleBoatStatus(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:he.detail(n)}),e.invalidateQueries({queryKey:he.lists()})}})},la=()=>{const e=Q();return Y({mutationFn:r=>P.setActiveBoat(r),onSuccess:()=>{e.invalidateQueries({queryKey:he.lists()})}})},Te={all:["trips"],lists:()=>[...Te.all,"list"],list:e=>[...Te.lists(),{filters:e}],details:()=>[...Te.all,"detail"],detail:e=>[...Te.details(),e]},He=e=>ie({queryKey:Te.list(e||{}),queryFn:()=>P.getTrips(e)}),ca=e=>ie({queryKey:Te.detail(e),queryFn:()=>P.getTrip(e),enabled:!!e}),tc=()=>{const e=Q();return Y({mutationFn:({id:r,data:n})=>P.updateTrip(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:Te.detail(n)}),e.invalidateQueries({queryKey:Te.lists()})}})},rc=()=>{const e=Q();return Y({mutationFn:({tripId:r,data:n})=>P.addManualData(r,n),onSuccess:(r,{tripId:n})=>{e.invalidateQueries({queryKey:Te.detail(n)}),e.invalidateQueries({queryKey:Te.lists()})}})},da={all:["license"],progress:()=>[...da.all,"progress"]},ma=()=>ie({queryKey:da.progress(),queryFn:()=>P.getLicenseProgress(),staleTime:5*60*1e3}),nc=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,oc=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ac=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,sc=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing.sm};
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,ic=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,lc=a.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,cc=a.span`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,dc=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,mc=a.div`
  width: 100%;
  height: 8px;
  background-color: ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  margin-top: ${e=>e.theme.spacing.sm};

  &::after {
    content: '';
    display: block;
    width: ${e=>Math.min(e.progress,100)}%;
    height: 100%;
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    transition: width ${e=>e.theme.animation.normal} ease;
  }
`,pc=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,hc=()=>{const{data:e,isLoading:r,error:n}=ue(),{data:o,isLoading:s,error:i}=He(),{data:l,isLoading:c,error:m}=ma(),d=(e==null?void 0:e.filter(f=>f.enabled))||[],h=(o==null?void 0:o.slice(0,5))||[],b=(o==null?void 0:o.length)||0,$=f=>new Date(f).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),u=f=>{const x=Math.floor(f/3600),g=Math.floor(f%3600/60);return`${x}h ${g}m`},p=(f,x)=>Math.min(f/x*100,100);return t.jsxs(nc,{children:[t.jsx(O,{level:1,children:"Command Center"}),(n||i||m)&&t.jsx(Ee,{type:"error",children:"Unable to load dashboard data. Check your connection and try again."}),t.jsxs(oc,{children:[t.jsx(D,{title:"Fleet Status",variant:"accent",children:r?t.jsx(E,{label:"Loading",value:"...",valueColor:"anakiwa"}):t.jsxs(t.Fragment,{children:[t.jsx(E,{label:"Total Vessels",value:(e==null?void 0:e.length)||0,valueColor:"anakiwa"}),t.jsx(E,{label:"Active Vessels",value:d.length,valueColor:"success"}),t.jsx(E,{label:"Inactive Vessels",value:((e==null?void 0:e.length)||0)-d.length,valueColor:"neonCarrot"})]})}),t.jsx(D,{title:"License Progress",variant:"secondary",children:c?t.jsx(E,{label:"Loading",value:"...",valueColor:"lilac"}):l?t.jsxs(t.Fragment,{children:[t.jsx(E,{label:"Sea Time Days",value:l.totalDays,valueColor:"lilac"}),t.jsx(E,{label:"Days (3 Years)",value:l.daysInLast3Years,valueColor:"lilac"}),t.jsxs("div",{children:[t.jsx(mc,{progress:p(l.totalDays,360)}),t.jsxs(pc,{children:[t.jsx("span",{children:"360 Day Goal"}),t.jsxs("span",{children:[Math.round(p(l.totalDays,360)),"%"]})]})]})]}):t.jsx(E,{label:"Status",value:"Disabled",valueColor:"neonCarrot"})}),t.jsxs(D,{title:"System Status",variant:"primary",children:[t.jsx(E,{label:"Interface Status",value:"ONLINE",valueColor:"success",size:"sm"}),t.jsx(E,{label:"Active Boats",value:r?"...":d.length.toString(),valueColor:"neonCarrot",size:"sm"}),t.jsx(E,{label:"Total Trips",value:s?"...":b.toString(),valueColor:"anakiwa",size:"sm"})]})]}),t.jsxs(dc,{children:[t.jsx(T,{size:"sm",variant:"primary",children:"New Trip"}),t.jsx(T,{size:"sm",variant:"secondary",children:"Add Boat"})]}),t.jsxs(ac,{children:[t.jsx(D,{title:"Recent Trips",variant:"primary",children:s?t.jsx(E,{label:"Loading",value:"...",valueColor:"neonCarrot"}):h.length>0?h.map(f=>{var x,g;return t.jsxs(sc,{children:[t.jsxs(ic,{children:[t.jsx(lc,{children:$(f.startTime)}),t.jsxs(cc,{children:[u(((x=f.statistics)==null?void 0:x.durationSeconds)||0)," • ",f.waterType]})]}),t.jsx(E,{label:"Distance",value:Math.round((((g=f.statistics)==null?void 0:g.distanceMeters)||0)/1852),unit:"nm",size:"sm",valueColor:"neonCarrot"})]},f.id)}):t.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No trips recorded yet"})}),t.jsx(D,{title:"Upcoming Tasks",variant:"accent",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No maintenance tasks due"})})]})]})},uc=re`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,gc=re`
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(255, 153, 51, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 40px rgba(255, 153, 51, 0.9)) drop-shadow(0 0 60px rgba(255, 153, 51, 0.4));
  }
`,xc=re`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,pa=re`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`,We=re`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,fc=re`
  from { transform: translateX(-200px); opacity: 0; }
  to { transform: translateX(0); opacity: 0.7; }
`,yc=a.div`
  min-height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 2rem;
`,bc=a.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.4;
`,$c=a.img`
  width: 400px;
  max-width: 80vw;
  height: auto;
  margin-bottom: 3rem;
  animation: ${gc} 3s ease-in-out infinite, ${We} 1s ease;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 250px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    width: 200px;
    margin-bottom: 1.5rem;
  }
`,jc=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  margin: 2rem 0;
  z-index: 1;
  animation: ${We} 1s ease 0.3s backwards;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,vc=a.div`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid ${e=>e.$color};
  border-radius: 0 16px 16px 0;
  padding: 1rem 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: ${e=>e.$color};
  }
`,wc=a.div`
  color: #99CCFF;
  font-family: 'Antonio', sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`,Cc=a.div`
  color: ${e=>e.$color};
  font-family: 'Antonio', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
`,Sc=a.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0.5rem;
`,kc=a.div`
  height: 100%;
  background: ${e=>e.$color};
  width: ${e=>e.$percentage}%;
  transition: width 0.3s ease;
  box-shadow: 0 0 8px ${e=>e.$color};
`,Tc=a.div`
  position: absolute;
  left: -100px;
  top: ${e=>e.$top};
  width: 80px;
  height: 4px;
  background: ${e=>e.$color};
  border-radius: 2px;
  opacity: 0;
  animation: ${fc} 1.5s ease-in-out ${e=>e.$delay}s forwards;
  z-index: 0;
`,Ac=a.div`
  position: absolute;
  top: 100px;
  left: 40px;
  width: 150px;
  height: 150px;
  border-top: 12px solid #FFCC99;
  border-left: 12px solid #FFCC99;
  border-radius: 40px 0 0 0;
  z-index: 0;
  opacity: 0.6;
  animation: ${We} 1s ease 0.5s backwards;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: 60px;
    left: 20px;
    border-width: 8px;
  }
`,Ec=a.div`
  position: absolute;
  bottom: 100px;
  right: 40px;
  width: 150px;
  height: 150px;
  border-bottom: 12px solid #CC99CC;
  border-right: 12px solid #CC99CC;
  border-radius: 0 0 40px 0;
  z-index: 0;
  opacity: 0.6;
  animation: ${We} 1s ease 0.7s backwards;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    bottom: 60px;
    right: 20px;
    border-width: 8px;
  }
`,Fc=a.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  z-index: 1;
  animation: ${We} 1s ease 0.5s backwards;
`,Lc=a.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$color};
  box-shadow: 0 0 10px ${e=>e.$color};
  animation: ${uc} 2s ease-in-out ${e=>e.$delay} infinite;
`,zc=a.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  z-index: 1;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${We} 1s ease 0.7s backwards;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`,lr=a.button`
  background: ${e=>e.$color};
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-family: 'Antonio', sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 0 24px 24px 0;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    filter: brightness(1.2);
    box-shadow: 0 0 20px ${e=>e.$color};
  }

  &:hover::after {
    transform: translateX(0);
  }

  &:active {
    transform: scale(0.98);
  }
`,Dc=a.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: rgba(102, 68, 102, 0.9);
  border-top: 3px solid #FFCC66;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 2;
`,Mc=a.div`
  display: flex;
  white-space: nowrap;
  animation: ${xc} 40s linear infinite;
  gap: 3rem;
`,Ic=a.span`
  color: #FFCC99;
  font-family: 'Antonio', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;

  &::before {
    content: '●';
    color: #FF9933;
    margin-right: 1rem;
    animation: ${pa} 1.5s ease-in-out infinite;
  }
`,Rc=a.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #99CCFF;
  border-radius: 0 16px 16px 0;
  padding: 0.75rem 1.5rem;
  z-index: 1;
  animation: ${We} 1s ease 0.9s backwards;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
  }
`,Nc=a.div`
  color: #99CCFF;
  font-family: 'Antonio', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
`,Pc=a.div`
  color: #FFCC66;
  font-family: 'Antonio', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.05em;
`,Bc=a.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #FF9933;
  border-radius: 0 16px 16px 0;
  padding: 0.5rem 1rem;
  z-index: 1;
  animation: ${We} 1s ease 0.9s backwards;

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.4rem 0.8rem;
  }
`,Oc=a.span`
  color: #FF9933;
  font-family: 'Antonio', sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`,Uc=a.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #FF9933;
  box-shadow: 0 0 10px #FF9933;
  animation: ${pa} 1s ease-in-out infinite;
`;function Fn(){const e=new Date,r=e.getFullYear(),n=new Date(r,0,1).getTime(),o=new Date(r+1,0,1).getTime(),s=(e.getTime()-n)/(o-n);return((r-2323)*1e3+s*1e3).toFixed(5)}function pe(e,r){return e+Math.random()*(r-e)}const qc=()=>{const e=j.useRef(null),r=j.useRef([]),n=j.useRef();return j.useEffect(()=>{const o=e.current;if(!o)return;const s=o.getContext("2d");if(!s)return;const i=()=>{o.width=window.innerWidth,o.height=window.innerHeight};i(),window.addEventListener("resize",i);const l=200,c=[];for(let d=0;d<l;d++)c.push({x:pe(-o.width,o.width),y:pe(-o.height,o.height),z:pe(0,o.width)});r.current=c;const m=()=>{const d=o.width,h=o.height,b=d/2,$=h/2;s.fillStyle="rgba(0, 0, 0, 0.1)",s.fillRect(0,0,d,h),c.forEach(u=>{u.z-=2,u.z<=0&&(u.x=pe(-d,d),u.y=pe(-h,h),u.z=d,u.prevX=void 0,u.prevY=void 0);const p=128/u.z,f=u.x*p+b,x=u.y*p+$;if(f>=0&&f<=d&&x>=0&&x<=h){const g=(1-u.z/d)*2,y=Math.floor((1-u.z/d)*255),v=.5+(1-u.z/d)*.5;u.prevX!==void 0&&u.prevY!==void 0&&(s.strokeStyle=`rgba(${y}, ${y}, 255, ${v*.5})`,s.lineWidth=g*.5,s.beginPath(),s.moveTo(u.prevX,u.prevY),s.lineTo(f,x),s.stroke()),s.fillStyle=`rgba(${y}, ${y}, 255, ${v})`,s.beginPath(),s.arc(f,x,g,0,Math.PI*2),s.fill(),u.prevX=f,u.prevY=x}}),n.current=requestAnimationFrame(m)};return m(),()=>{window.removeEventListener("resize",i),n.current&&cancelAnimationFrame(n.current)}},[]),t.jsx(bc,{ref:e})},Ln=()=>{const e=me(),[r,n]=j.useState(Fn()),[o,s]=j.useState(257.4),[i,l]=j.useState(1.247),[c,m]=j.useState(97.3),[d,h]=j.useState(1547.2),[b,$]=j.useState(.0042),[u,p]=j.useState(99.7),[f,x]=j.useState([]);j.useEffect(()=>{const w=setInterval(()=>{n(Fn())},3e3);return()=>clearInterval(w)},[]),j.useEffect(()=>{const w=setInterval(()=>{s(pe(250,280))},500);return()=>clearInterval(w)},[]),j.useEffect(()=>{const w=setInterval(()=>{l(pe(1.1,1.4))},300);return()=>clearInterval(w)},[]),j.useEffect(()=>{const w=setInterval(()=>{m(pe(94,100))},600);return()=>clearInterval(w)},[]),j.useEffect(()=>{const w=setInterval(()=>{h(pe(1500,1600))},400);return()=>clearInterval(w)},[]),j.useEffect(()=>{const w=setInterval(()=>{$(pe(.003,.006))},700);return()=>clearInterval(w)},[]),j.useEffect(()=>{const w=setInterval(()=>{p(pe(98.5,100))},550);return()=>clearInterval(w)},[]),j.useEffect(()=>{const w=["#FFCC99","#99CCFF","#CC99CC","#FFCC66","#FF9933"],k=setInterval(()=>{const I={color:w[Math.floor(Math.random()*w.length)],top:`${pe(20,80)}%`,delay:0};x(z=>[...z,I].slice(-6))},pe(3e3,6e3));return()=>clearInterval(k)},[]);const g=["All systems nominal","Warp core stable","Navigation array calibrated","Subspace communications active","Deflector shields online","Sensors operating at peak efficiency","Life support systems optimal","Transporter standing by","Quantum slipstream drive ready","Temporal sensors synchronized"],y=[{label:"Shield Harmonic Frequency",value:`${o.toFixed(1)} MHz`,color:"#99CCFF",percentage:(o-250)/30*100},{label:"Anti-Matter Injection Flow",value:`${i.toFixed(3)} cm³/s`,color:"#FFCC66",percentage:(i-1.1)/(1.4-1.1)*100},{label:"Communications Uplink Signal",value:`${c.toFixed(1)}%`,color:"#99CCFF",percentage:(c-94)/6*100},{label:"Warp Core Output",value:`${d.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1})} TW`,color:"#FFCC99",percentage:(d-1500)/100*100},{label:"Sensor Array Resolution",value:`${b.toFixed(4)} arc-sec`,color:"#99CCFF",percentage:(b-.003)/(.006-.003)*100},{label:"Life Support Efficiency",value:`${u.toFixed(1)}%`,color:"#CC99CC",percentage:(u-98.5)/(100-98.5)*100}],v=[{color:"#FF9933",delay:"0s"},{color:"#99CCFF",delay:"0.3s"},{color:"#CC99CC",delay:"0.6s"},{color:"#FFCC66",delay:"0.9s"},{color:"#99CCFF",delay:"1.2s"}];return t.jsxs(yc,{children:[t.jsx(qc,{}),t.jsxs(Rc,{children:[t.jsx(Nc,{children:"Stardate"}),t.jsx(Pc,{children:r})]}),t.jsxs(Bc,{children:[t.jsx(Oc,{children:"LCARS"}),t.jsx(Uc,{})]}),t.jsx(Ac,{}),t.jsx(Ec,{}),t.jsx($c,{src:"/assets/captains-log-logo.png",alt:"Captain's Log",onClick:()=>e("/dashboard")}),t.jsx(Fc,{children:v.map((w,F)=>t.jsx(Lc,{$color:w.color,$delay:w.delay},F))}),t.jsxs(jc,{children:[f.map((w,F)=>t.jsx(Tc,{$color:w.color,$top:w.top,$delay:w.delay},F)),y.map((w,F)=>t.jsxs(vc,{$color:w.color,children:[t.jsx(wc,{children:w.label}),t.jsx(Cc,{$color:w.color,children:w.value}),t.jsx(Sc,{children:t.jsx(kc,{$color:w.color,$percentage:w.percentage})})]},F))]}),t.jsxs(zc,{children:[t.jsx(lr,{$color:"#FFCC99",onClick:()=>e("/dashboard"),children:"Dashboard"}),t.jsx(lr,{$color:"#99CCFF",onClick:()=>e("/trips"),children:"Trip Log"}),t.jsx(lr,{$color:"#CC99CC",onClick:()=>e("/boats"),children:"Vessels"})]}),t.jsx(Dc,{children:t.jsx(Mc,{children:g.concat(g).map((w,F)=>t.jsx(Ic,{children:w},F))})})]})};let dt=null;const Hc={boats:["boats"],trips:["trips"],notes:["notes"],todos:["todos"],maintenance_templates:["maintenanceTemplates"],maintenance_events:["maintenanceEvents"],locations:["locations"],photos:["photos"],sensors:["sensors"]};function zn(e){ha();const r=localStorage.getItem("auth_token");if(!r)return;const o=`${localStorage.getItem("api_base_url")||"/api/v1"}/sync/events?token=${encodeURIComponent(r)}`;dt=new EventSource(o),dt.onmessage=s=>{try{const i=JSON.parse(s.data);if(i.type==="connected")return;const l=Hc[i.type];l&&e.invalidateQueries({queryKey:l})}catch{}},dt.onerror=()=>{}}function ha(){dt&&(dt.close(),dt=null)}const ua=j.createContext(null),Wc=({children:e})=>{var m;const r=Q(),[n,o]=j.useState({isAuthenticated:!1,isLoading:!0,needsSetup:!1,user:null}),s=j.useCallback(async()=>{try{if(!localStorage.getItem("auth_token")){o({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null});return}await P.getBoats(),o({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:{id:"current",username:"user",role:localStorage.getItem("user_role")||"ADMIN",createdAt:"",updatedAt:""}}),zn(r)}catch{localStorage.removeItem("auth_token"),o({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null})}},[]);j.useEffect(()=>{s()},[s]);const i=j.useCallback(async(d,h)=>{var b;try{const $=await P.login(d,h);return o({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:$.user}),(b=$.user)!=null&&b.role&&localStorage.setItem("user_role",$.user.role),zn(r),{success:!0}}catch($){return o(u=>({...u,isAuthenticated:!1})),{success:!1,error:$.message||"Login failed"}}},[]),l=j.useCallback(async()=>{try{await P.logout()}catch(d){console.warn("Logout request failed:",d)}finally{ha(),localStorage.removeItem("user_role"),o({isAuthenticated:!1,isLoading:!1,needsSetup:!1,user:null})}},[]),c={...n,isReadOnly:((m=n.user)==null?void 0:m.role)==="VIEWER",login:i,logout:l,checkAuthStatus:s};return Ue.createElement(ua.Provider,{value:c},e)},Zt=()=>{const e=j.useContext(ua);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},Kc=a.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.lg};
`,Vc=a.div`
  max-width: 600px;
  width: 100%;
`,Gc=a.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${e=>e.theme.spacing.xl};
`,_c=a.img`
  max-width: 200px;
  height: auto;
  filter: drop-shadow(0 0 10px ${e=>e.theme.colors.primary.neonCarrot}40);
`,Qc=a.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,cr=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,dr=a.label`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,mr=a.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  padding: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,Jc=a.div`
  display: flex;
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.lg};
`,pr=()=>{const e=me(),{login:r,isAuthenticated:n}=Zt();j.useEffect(()=>{n&&e("/")},[n,e]);const[o,s]=j.useState({username:"",password:"",serverUrl:""}),[i,l]=j.useState(!1),[c,m]=j.useState(null),[d,h]=j.useState(!1),b=u=>{const{name:p,value:f}=u.target;s(x=>({...x,[p]:f}))},$=async u=>{u.preventDefault(),l(!0),m(null);try{o.serverUrl.trim()?(P.updateBaseUrl(o.serverUrl),console.log("Server URL configured:",o.serverUrl)):console.log("Using default server URL (proxy)"),console.log("Attempting login with:",{username:o.username});const p=await r(o.username,o.password);console.log("Login result:",p),p.success?(m({type:"success",text:"LCARS Interface Initialized Successfully! Redirecting..."}),console.log("Login successful, setting timeout for redirect"),setTimeout(()=>{console.log("Redirecting to dashboard"),e("/")},1500)):(console.log("Login failed:",p.error),m({type:"error",text:p.error||"Authentication failed. Please check your credentials."}))}catch(p){console.error("Login error:",p),m({type:"error",text:p.message||"Setup failed. Please check your connection and try again."})}finally{l(!1)}};return t.jsx(Kc,{children:t.jsxs(Vc,{children:[t.jsx(Gc,{children:t.jsx(_c,{src:"/assets/captains-log-logo.png",alt:"Captain's Log"})}),t.jsxs(D,{title:"System Initialization",padding:"lg",children:[t.jsx(O,{level:2,align:"center",children:"LCARS Setup Wizard"}),t.jsxs(Qc,{onSubmit:$,children:[t.jsxs(cr,{children:[t.jsx(dr,{htmlFor:"username",children:"Username"}),t.jsx(mr,{type:"text",id:"username",name:"username",value:o.username,onChange:b,placeholder:"Enter your username",required:!0,disabled:i})]}),t.jsxs(cr,{children:[t.jsx(dr,{htmlFor:"password",children:"Password"}),t.jsx(mr,{type:"password",id:"password",name:"password",value:o.password,onChange:b,placeholder:"Enter your password",required:!0,disabled:i})]}),t.jsx("div",{style:{textAlign:"right"},children:t.jsx("button",{type:"button",onClick:()=>h(!d),style:{background:"none",border:"none",color:"#99CCFF",cursor:"pointer",fontSize:"12px",textTransform:"uppercase",letterSpacing:"1px"},children:d?"Hide Advanced":"Advanced Options"})}),d&&t.jsxs(cr,{children:[t.jsx(dr,{htmlFor:"serverUrl",children:"Server URL (Optional)"}),t.jsx(mr,{type:"url",id:"serverUrl",name:"serverUrl",value:o.serverUrl,onChange:b,placeholder:"Leave empty for default",disabled:i})]}),c&&t.jsx(Ee,{type:c.type==="success"?"success":c.type==="error"?"error":"info",children:c.text}),t.jsx(Jc,{children:t.jsx(T,{type:"submit",disabled:i,size:"lg",children:i?"Initializing...":"Initialize LCARS"})})]})]})]})})},Zc=re`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Yc=re`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${e=>e.fullScreen&&`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9999;
  `}
  ${e=>!e.fullScreen&&`
    padding: ${e.theme.spacing.xl};
  `}
`;a.div`
  width: ${e=>{switch(e.size){case"sm":return"20px";case"lg":return"60px";default:return"40px"}}};
  height: ${e=>{switch(e.size){case"sm":return"20px";case"lg":return"60px";default:return"40px"}}};
  border: 3px solid ${e=>e.theme.colors.primary.neonCarrot}40;
  border-top: 3px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: 50%;
  animation: ${Zc} 1s linear infinite;
`;a.div`
  margin-left: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>{switch(e.size){case"sm":return e.theme.typography.fontSize.sm;case"lg":return e.theme.typography.fontSize.lg;default:return e.theme.typography.fontSize.md}}};
  animation: ${Yc} 2s ease-in-out infinite;
`;a.div`
  width: 200px;
  height: 20px;
  background: ${e=>e.theme.colors.surface.dark};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${e=>e.theme.colors.primary.neonCarrot},
      transparent
    );
    animation: ${re`
      0% { left: -100%; }
      100% { left: 100%; }
    `} 2s ease-in-out infinite;
  }
`;const ga=a.div`
  background: linear-gradient(
    90deg,
    ${e=>e.theme.colors.surface.dark} 25%,
    ${e=>e.theme.colors.surface.medium} 50%,
    ${e=>e.theme.colors.surface.dark} 75%
  );
  background-size: 200% 100%;
  animation: ${re`
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  `} 2s ease-in-out infinite;
  border-radius: 4px;
`,Dn=a(ga)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"1em"};
  margin: 4px 0;
`,Xc=a(ga)`
  width: 100%;
  height: 120px;
  margin: 8px 0;
`,Et=({variant:e="text",width:r,height:n,lines:o=1})=>e==="card"?t.jsx(Xc,{}):o===1?t.jsx(Dn,{width:r,height:n}):t.jsx("div",{children:Array.from({length:o},(s,i)=>t.jsx(Dn,{width:i===o-1?"60%":r,height:n},i))}),ed=a.div`
  ${e=>{switch(e.variant){case"inline":return`
          display: inline-flex;
          align-items: center;
          padding: ${e.theme.spacing.sm};
          background: ${e.theme.colors.status.error}20;
          border: 1px solid ${e.theme.colors.status.error};
          border-radius: 4px;
          color: ${e.theme.colors.status.error};
        `;case"banner":return`
          width: 100%;
          padding: ${e.theme.spacing.md};
          background: ${e.theme.colors.status.error}20;
          border-left: 4px solid ${e.theme.colors.status.error};
          color: ${e.theme.colors.status.error};
        `;default:return`
          padding: ${e.theme.spacing.lg};
          text-align: center;
        `}}}
`,td=a.div`
  font-size: 1.2em;
  margin-right: ${e=>e.theme.spacing.sm};
  color: ${e=>e.theme.colors.status.error};
`,rd=a.div`
  font-weight: bold;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.status.error};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,nd=a.div`
  color: ${e=>e.theme.colors.text.light};
  margin-bottom: ${e=>e.theme.spacing.md};
  line-height: 1.5;
`,od=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.md};
`,ad=a.code`
  background: ${e=>e.theme.colors.surface.dark};
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
  color: ${e=>e.theme.colors.status.error};
`,sd=({title:e="Error",message:r,code:n,variant:o="card",showIcon:s=!0,onRetry:i,onDismiss:l,retryText:c="Try Again",dismissText:m="Dismiss"})=>{const d=t.jsxs(ed,{variant:o,children:[s&&o==="inline"&&t.jsx(td,{children:"⚠"}),o!=="inline"&&t.jsxs(rd,{children:[s&&"⚠ ",e]}),t.jsxs(nd,{children:[r,n&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("small",{children:["Error code: ",t.jsx(ad,{children:n})]})]})]}),(i||l)&&t.jsxs(od,{children:[i&&t.jsx(T,{onClick:i,variant:"primary",size:"sm",children:c}),l&&t.jsx(T,{onClick:l,variant:"secondary",size:"sm",children:m})]})]});return o==="card"?t.jsx(D,{children:d}):d};function id(e){const r=Q(),[n,o]=j.useState(!1);return{optimisticUpdate:j.useCallback(async(i,l,c,m)=>{o(!0);const d=r.getQueryData(e);r.setQueryData(e,h=>h===void 0?h:i(h));try{const h=await l();return await r.invalidateQueries({queryKey:e}),c==null||c(h),h}catch(h){throw d!==void 0&&r.setQueryData(e,d),m==null||m(h),h}finally{o(!1)}},[r,e]),isOptimistic:n}}function ld(e){const{optimisticUpdate:r,isOptimistic:n}=id(e),o=j.useCallback((l,c)=>r((m=[])=>[...m,l],c),[r]),s=j.useCallback((l,c)=>r((m=[])=>m.filter(d=>d.id!==l),c),[r]),i=j.useCallback((l,c,m)=>r((d=[])=>d.map(h=>h.id===l?c(h):h),m),[r]);return{optimisticAdd:o,optimisticRemove:s,optimisticUpdate:i,isOptimistic:n}}const cd=a.div`
  position: relative;
  opacity: 0.4;
  pointer-events: none;
  cursor: not-allowed;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`,dd=a.div`
  position: relative;
  display: inline-block;

  &:hover > .readonly-tooltip {
    visibility: visible;
    opacity: 1;
  }
`,md=a.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 8px;
  background: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  z-index: 100;
  transition: opacity 0.2s;
  pointer-events: none;
`,V=({children:e,fallback:r})=>{const{isReadOnly:n}=Zt();return n?r!==void 0?t.jsx(t.Fragment,{children:r}):t.jsxs(dd,{children:[t.jsx(cd,{children:e}),t.jsx(md,{className:"readonly-tooltip",children:"View Only"})]}):t.jsx(t.Fragment,{children:e})},hr=a.div`
  padding: 20px;
`,Mn=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,pd=a.div`
  padding: 20px;
  border: 2px solid ${e=>e.$isActive?e.theme.colors.primary.neonCarrot:e.$isEnabled?e.theme.colors.primary.anakiwa:e.theme.colors.interactive.disabled};
  background: ${e=>e.$isActive?`${e.theme.colors.primary.neonCarrot}15`:e.$isEnabled?`${e.theme.colors.primary.anakiwa}10`:`${e.theme.colors.interactive.disabled}10`};
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: ${e=>e.theme.borderRadius.lg};

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    background: ${e=>e.theme.colors.primary.neonCarrot}20;
  }
`,hd=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  text-transform: uppercase;
`,ud=a.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`,In=a.span`
  padding: 4px 12px;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background: ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.neonCarrot;case"enabled":return e.theme.colors.primary.anakiwa;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  color: ${e=>e.theme.colors.background};
`,gd=a.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,Rn=a(T)`
  flex: 1;
  min-width: 120px;
`,Nn=a.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,xd=a.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.colors.text.secondary};
`,fd=a.div`
  font-size: 4rem;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.primary.anakiwa};
`,Pn=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Bn=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,yd=()=>{const e=me(),{data:r,isLoading:n,error:o}=ue(),s=ia(),i=la(),[l,c]=j.useState(null),{optimisticUpdate:m}=ld(["boats"]),d=x=>{e(`/boats/${x.id}`)},h=async x=>{c(`toggle-${x.id}`);try{await m(x.id,g=>({...g,enabled:!g.enabled}),()=>s.mutateAsync({id:x.id,enabled:!x.enabled}))}catch(g){console.error("Failed to toggle boat status:",g)}finally{c(null)}},b=async x=>{if(!x.isActive){c(`active-${x.id}`);try{await i.mutateAsync(x.id)}catch(g){console.error("Failed to set active boat:",g)}finally{c(null)}}},$=()=>{e("/boats/new")};if(n)return t.jsxs(hr,{children:[t.jsxs(Pn,{children:[t.jsxs(Bn,{children:[t.jsx(O,{children:"BOAT MANAGEMENT"}),t.jsx(Et,{width:"200px",height:"20px"})]}),t.jsxs(Nn,{children:[t.jsx(Et,{width:"150px",height:"40px"}),t.jsx(Et,{width:"180px",height:"40px"})]})]}),t.jsx(Mn,{children:Array.from({length:3},(x,g)=>t.jsx(D,{children:t.jsx(Et,{variant:"card"})},g))})]});if(o)return t.jsxs(hr,{children:[t.jsx(O,{children:"BOAT MANAGEMENT"}),t.jsx(sd,{title:"Failed to Load Boats",message:o.message,onRetry:()=>window.location.reload()})]});const u=r==null?void 0:r.find(x=>x.isActive),p=(r==null?void 0:r.filter(x=>x.enabled))||[],f=(r==null?void 0:r.filter(x=>!x.enabled))||[];return t.jsxs(hr,{children:[t.jsxs(Pn,{children:[t.jsxs(Bn,{children:[t.jsx(O,{children:"BOAT MANAGEMENT"}),t.jsx(E,{label:"VESSELS REGISTERED",value:(r==null?void 0:r.length)||0,valueColor:"anakiwa",size:"sm"})]}),t.jsxs(Nn,{children:[t.jsx(E,{label:"ACTIVE VESSEL",value:(u==null?void 0:u.name)||"NONE SELECTED",valueColor:u?"neonCarrot":"anakiwa"}),t.jsx(V,{children:t.jsx(T,{variant:"primary",onClick:$,children:"ADD NEW VESSEL"})})]})]}),!r||r.length===0?t.jsx(D,{children:t.jsxs(xd,{children:[t.jsx(fd,{children:"🚤"}),t.jsx("h3",{children:"NO VESSELS REGISTERED"}),t.jsx("p",{children:"Add your first vessel to begin tracking trips and maintenance."}),t.jsx(V,{children:t.jsx(T,{variant:"primary",onClick:$,children:"ADD FIRST VESSEL"})})]})}):t.jsx(Mn,{children:r.map(x=>t.jsxs(pd,{$isActive:x.isActive,$isEnabled:x.enabled,onClick:()=>d(x),children:[t.jsx(hd,{children:x.name}),t.jsxs(ud,{children:[x.isActive&&t.jsx(In,{$type:"active",children:"ACTIVE"}),t.jsx(In,{$type:x.enabled?"enabled":"disabled",children:x.enabled?"ENABLED":"DISABLED"})]}),t.jsx(E,{label:"VESSEL ID",value:x.id.slice(0,8).toUpperCase(),valueColor:"anakiwa",size:"sm"}),t.jsx(E,{label:"REGISTERED",value:new Date(x.createdAt).toLocaleDateString(),valueColor:"anakiwa",size:"sm"}),t.jsxs(gd,{children:[!x.isActive&&x.enabled&&t.jsx(V,{children:t.jsx(Rn,{variant:"secondary",onClick:()=>b(x),disabled:l===`active-${x.id}`,children:l===`active-${x.id}`?"SETTING...":"SET ACTIVE"})}),t.jsx(V,{children:t.jsx(Rn,{variant:x.enabled?"danger":"accent",onClick:()=>h(x),disabled:l===`toggle-${x.id}`,children:l===`toggle-${x.id}`?"UPDATING...":x.enabled?"DISABLE":"ENABLE"})})]})]},x.id))}),r&&r.length>0&&t.jsxs("div",{style:{marginTop:"30px",display:"flex",gap:"20px"},children:[t.jsx(E,{label:"ENABLED VESSELS",value:p.length.toString(),valueColor:"anakiwa"}),t.jsx(E,{label:"DISABLED VESSELS",value:f.length.toString(),valueColor:"lilac"})]})]})},ur=a.div`
  padding: 20px;
`,bd=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,On=a(D)`
  padding: 25px;
`,gr=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.2rem;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  border-bottom: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding-bottom: 10px;
`,$d=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
`,Un=a.div`
  padding: 15px;
  text-align: center;
  border: 2px solid ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.neonCarrot;case"enabled":return e.theme.colors.primary.anakiwa;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  background: ${e=>{switch(e.$type){case"active":return`${e.theme.colors.primary.neonCarrot}20`;case"enabled":return`${e.theme.colors.primary.anakiwa}15`;case"disabled":return`${e.theme.colors.interactive.disabled}15`;default:return`${e.theme.colors.interactive.disabled}15`}}};
`,qn=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 5px;
  text-transform: uppercase;
`,Hn=a.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
`,jd=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
`,Wn=a(T)`
  margin-right: 15px;
`,vd=a.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,wd=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Cd=a.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
`,Sd=a.input`
  padding: 12px 15px;
  background: ${e=>e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,kd=a.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 20px;
`,Td=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`,Ad=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Ed=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Fd=a(D)`
  padding: 25px;
  margin-top: 30px;
`,Ld=()=>{const{id:e}=qe(),r=me(),{data:n,isLoading:o,error:s}=Yl(e),{data:i}=He({boatId:e}),l=ec(),c=ia(),m=la(),[d,h]=j.useState(!1),[b,$]=j.useState({name:""}),[u,p]=j.useState(null);Ue.useEffect(()=>{n&&$({name:n.name})},[n]);const f=()=>{r("/boats")},x=()=>{h(!0)},g=()=>{h(!1),n&&$({name:n.name})},y=async z=>{if(z.preventDefault(),!(!n||!b.name.trim())){p("save");try{await l.mutateAsync({id:n.id,data:{name:b.name.trim()}}),h(!1)}catch(B){console.error("Failed to update boat:",B)}finally{p(null)}}},v=async()=>{if(n){p("toggle");try{await c.mutateAsync({id:n.id,enabled:!n.enabled})}catch(z){console.error("Failed to toggle boat status:",z)}finally{p(null)}}},w=async()=>{if(!(!n||n.isActive)){p("active");try{await m.mutateAsync(n.id)}catch(z){console.error("Failed to set active boat:",z)}finally{p(null)}}};if(o)return t.jsxs(ur,{children:[t.jsx(O,{children:"VESSEL DETAILS"}),t.jsx(E,{label:"STATUS",value:"LOADING VESSEL DATA...",valueColor:"anakiwa"})]});if(s||!n)return t.jsxs(ur,{children:[t.jsx(O,{children:"VESSEL DETAILS"}),t.jsx(Ee,{type:"error",children:(s==null?void 0:s.message)||"Vessel not found"}),t.jsx(Wn,{variant:"secondary",onClick:f,children:"BACK TO VESSELS"})]});const F=(i==null?void 0:i.length)||0,k=(i==null?void 0:i.reduce((z,B)=>{var A;return z+(((A=B.statistics)==null?void 0:A.durationSeconds)||0)},0))||0,I=(i==null?void 0:i.reduce((z,B)=>{var A;return z+(((A=B.statistics)==null?void 0:A.distanceMeters)||0)},0))||0;return t.jsx(t.Fragment,{children:t.jsxs(ur,{children:[t.jsxs(Ad,{children:[t.jsxs(Ed,{children:[t.jsx(O,{children:"VESSEL DETAILS"}),t.jsx(E,{label:"VESSEL NAME",value:n.name,valueColor:"neonCarrot",size:"sm"})]}),t.jsxs("div",{children:[t.jsx(Wn,{variant:"secondary",onClick:f,children:"BACK TO VESSELS"}),!d&&t.jsx(V,{children:t.jsx(T,{variant:"primary",onClick:x,children:"EDIT VESSEL"})})]})]}),t.jsxs(bd,{children:[t.jsxs(On,{children:[t.jsx(gr,{children:"Vessel Information"}),d?t.jsxs(vd,{onSubmit:y,children:[t.jsxs(wd,{children:[t.jsx(Cd,{children:"Vessel Name"}),t.jsx(Sd,{type:"text",value:b.name,onChange:z=>$({...b,name:z.target.value}),placeholder:"Enter vessel name",required:!0,disabled:u==="save"})]}),t.jsxs(kd,{children:[t.jsx(T,{type:"button",variant:"secondary",onClick:g,disabled:u==="save",children:"CANCEL"}),t.jsx(T,{type:"submit",variant:"primary",disabled:u==="save"||!b.name.trim(),children:u==="save"?"SAVING...":"SAVE CHANGES"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(E,{label:"VESSEL NAME",value:n.name,valueColor:"neonCarrot"}),t.jsx(E,{label:"VESSEL ID",value:n.id,valueColor:"anakiwa"}),t.jsx(E,{label:"REGISTERED",value:new Date(n.createdAt).toLocaleString(),valueColor:"anakiwa"}),t.jsx(E,{label:"LAST UPDATED",value:new Date(n.updatedAt).toLocaleString(),valueColor:"anakiwa"})]})]}),t.jsxs(On,{children:[t.jsx(gr,{children:"Status & Actions"}),t.jsxs($d,{children:[t.jsxs(Un,{$type:n.isActive?"active":"disabled",children:[t.jsx(qn,{children:"Active Status"}),t.jsx(Hn,{children:n.isActive?"ACTIVE":"INACTIVE"})]}),t.jsxs(Un,{$type:n.enabled?"enabled":"disabled",children:[t.jsx(qn,{children:"Operational Status"}),t.jsx(Hn,{children:n.enabled?"ENABLED":"DISABLED"})]})]}),!d&&t.jsx(V,{children:t.jsxs(jd,{children:[!n.isActive&&n.enabled&&t.jsx(T,{variant:"primary",onClick:w,disabled:u==="active",children:u==="active"?"SETTING...":"SET AS ACTIVE"}),t.jsx(T,{variant:n.enabled?"danger":"accent",onClick:v,disabled:u==="toggle",children:u==="toggle"?"UPDATING...":n.enabled?"DISABLE VESSEL":"ENABLE VESSEL"})]})})]})]}),t.jsxs(Fd,{children:[t.jsx(gr,{children:"Usage Statistics"}),t.jsxs(Td,{children:[t.jsx(E,{label:"TOTAL TRIPS",value:F.toString(),valueColor:"anakiwa"}),t.jsx(E,{label:"TOTAL HOURS",value:`${(k/3600).toFixed(1)}`,unit:"hrs",valueColor:"anakiwa"}),t.jsx(E,{label:"TOTAL DISTANCE",value:`${(I*539957e-9).toFixed(1)}`,unit:"nm",valueColor:"anakiwa"}),t.jsx(E,{label:"LAST TRIP",value:i&&i.length>0?new Date(i[0].startTime).toLocaleDateString():"NO TRIPS",valueColor:"anakiwa"})]})]})]})})},zd=a.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`,Dd=a(D)`
  padding: 30px;
  margin-top: 20px;
`,Md=a.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Ke=a.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ve=a.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
`,tt=a.input`
  padding: 15px 20px;
  background: ${e=>e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 15px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    border-color: ${e=>e.theme.colors.interactive.disabled};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
    opacity: 0.7;
  }
`,Id=a.textarea`
  padding: 15px 20px;
  background: ${e=>e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 15px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    border-color: ${e=>e.theme.colors.interactive.disabled};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
    opacity: 0.7;
  }
`,Pe=a.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
`,Rd=a.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid ${e=>e.theme.colors.primary.anakiwa};
`,Nd=a(T)`
  margin-right: 15px;
`,Pd=a.span`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin-left: 5px;
`,Ge=a.div`
  color: ${e=>e.theme.colors.status.error};
  font-size: 0.9rem;
  margin-top: 5px;
`,Bd=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Od=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Ud=()=>{const e=me(),r=Xl(),[n,o]=j.useState({name:"",description:"",hullNumber:"",manufacturer:"",model:"",year:"",length:""}),[s,i]=j.useState({}),[l,c]=j.useState(!1),m=()=>{e("/boats")},d=($,u)=>{o(p=>({...p,[$]:u})),s[$]&&i(p=>({...p,[$]:void 0}))},h=()=>{const $={};return n.name.trim()?n.name.trim().length<2?$.name="Vessel name must be at least 2 characters":n.name.trim().length>100&&($.name="Vessel name must be less than 100 characters"):$.name="Vessel name is required",n.description&&n.description.length>500&&($.description="Description must be less than 500 characters"),n.hullNumber&&n.hullNumber.length>50&&($.hullNumber="Hull number must be less than 50 characters"),n.manufacturer&&n.manufacturer.length>100&&($.manufacturer="Manufacturer must be less than 100 characters"),n.model&&n.model.length>100&&($.model="Model must be less than 100 characters"),n.year&&(!/^\d{4}$/.test(n.year)||parseInt(n.year)<1900||parseInt(n.year)>new Date().getFullYear()+1)&&($.year="Year must be a valid 4-digit year"),n.length&&(!/^\d+(\.\d+)?$/.test(n.length)||parseFloat(n.length)<=0||parseFloat(n.length)>1e3)&&($.length="Length must be a positive number (in feet)"),i($),Object.keys($).length===0},b=async $=>{if($.preventDefault(),!!h()){c(!0);try{const u={};n.description.trim()&&(u.description=n.description.trim()),n.hullNumber.trim()&&(u.hullNumber=n.hullNumber.trim()),n.manufacturer.trim()&&(u.manufacturer=n.manufacturer.trim()),n.model.trim()&&(u.model=n.model.trim()),n.year.trim()&&(u.year=parseInt(n.year.trim())),n.length.trim()&&(u.lengthFeet=parseFloat(n.length.trim()));const p=await r.mutateAsync({name:n.name.trim(),metadata:Object.keys(u).length>0?u:void 0});e(`/boats/${p.id}`)}catch(u){console.error("Failed to create boat:",u)}finally{c(!1)}}};return t.jsxs(zd,{children:[t.jsxs(Bd,{children:[t.jsxs(Od,{children:[t.jsx(O,{children:"ADD NEW VESSEL"}),t.jsx(Pe,{children:"Register a new vessel for tracking"})]}),t.jsx(Nd,{variant:"secondary",onClick:m,children:"BACK TO VESSELS"})]}),r.error&&t.jsxs(Ee,{type:"error",children:["Failed to create vessel: ",r.error.message]}),t.jsx(Dd,{children:t.jsxs(Md,{onSubmit:b,children:[t.jsxs(Ke,{children:[t.jsxs(Ve,{children:["Vessel Name",t.jsx(Pd,{children:"*"})]}),t.jsx(tt,{type:"text",value:n.name,onChange:$=>d("name",$.target.value),placeholder:"Enter vessel name (e.g., 'Sea Explorer', 'Fishing Buddy')",disabled:l,maxLength:100}),t.jsx(Pe,{children:"The primary name used to identify this vessel throughout the system."}),s.name&&t.jsx(Ge,{children:s.name})]}),t.jsxs(Ke,{children:[t.jsx(Ve,{children:"Description"}),t.jsx(Id,{value:n.description,onChange:$=>d("description",$.target.value),placeholder:"Optional description of the vessel (e.g., 'Center console fishing boat', '24ft cabin cruiser')",disabled:l,maxLength:500}),t.jsx(Pe,{children:"Optional description to help identify and categorize this vessel."}),s.description&&t.jsx(Ge,{children:s.description})]}),t.jsxs(Ke,{children:[t.jsx(Ve,{children:"Hull Identification Number (HIN)"}),t.jsx(tt,{type:"text",value:n.hullNumber,onChange:$=>d("hullNumber",$.target.value),placeholder:"Enter HIN if available",disabled:l,maxLength:50}),t.jsx(Pe,{children:"The unique hull identification number assigned by the manufacturer."}),s.hullNumber&&t.jsx(Ge,{children:s.hullNumber})]}),t.jsxs(Ke,{children:[t.jsx(Ve,{children:"Manufacturer"}),t.jsx(tt,{type:"text",value:n.manufacturer,onChange:$=>d("manufacturer",$.target.value),placeholder:"Enter manufacturer name",disabled:l,maxLength:100}),t.jsx(Pe,{children:"The company that built this vessel."}),s.manufacturer&&t.jsx(Ge,{children:s.manufacturer})]}),t.jsxs(Ke,{children:[t.jsx(Ve,{children:"Model"}),t.jsx(tt,{type:"text",value:n.model,onChange:$=>d("model",$.target.value),placeholder:"Enter model name",disabled:l,maxLength:100}),t.jsx(Pe,{children:"The specific model designation of this vessel."}),s.model&&t.jsx(Ge,{children:s.model})]}),t.jsxs(Ke,{children:[t.jsx(Ve,{children:"Year Built"}),t.jsx(tt,{type:"text",value:n.year,onChange:$=>d("year",$.target.value),placeholder:"Enter year (e.g., 2020)",disabled:l,maxLength:4}),t.jsx(Pe,{children:"The year this vessel was manufactured."}),s.year&&t.jsx(Ge,{children:s.year})]}),t.jsxs(Ke,{children:[t.jsx(Ve,{children:"Length (feet)"}),t.jsx(tt,{type:"text",value:n.length,onChange:$=>d("length",$.target.value),placeholder:"Enter length in feet (e.g., 24.5)",disabled:l}),t.jsx(Pe,{children:"The overall length of the vessel in feet."}),s.length&&t.jsx(Ge,{children:s.length})]}),t.jsxs(Rd,{children:[t.jsx(T,{type:"button",variant:"secondary",onClick:m,disabled:l,children:"CANCEL"}),t.jsx(V,{children:t.jsx(T,{type:"submit",variant:"primary",disabled:l||!n.name.trim(),children:l?"CREATING VESSEL...":"CREATE VESSEL"})})]})]})})]})},xr=a.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,qd=a(D)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Hd=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ft=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,fr=a.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Wd=a.select`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,Kn=a.input`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,Kd=a.div`
  display: grid;
  gap: ${e=>e.theme.spacing.md};
`,Vd=a(D)`
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.lg};
  }
`,Gd=a.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${e=>e.theme.spacing.md};
  align-items: start;
`,_d=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Qd=a.h3`
  margin: 0;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Jd=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${e=>e.theme.spacing.sm};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Zd=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
  text-align: right;
`,yr=a.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,br=a.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Yd=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
  
  .empty-title {
    font-size: ${e=>e.theme.typography.fontSize.xl};
    margin-bottom: ${e=>e.theme.spacing.md};
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }
  
  .empty-message {
    font-size: ${e=>e.theme.typography.fontSize.md};
    margin-bottom: ${e=>e.theme.spacing.lg};
  }
`,Xd=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,em=()=>{const[e,r]=j.useState({}),{data:n,isLoading:o,error:s}=He(e),{data:i}=ue(),l=(u,p)=>{r(f=>({...f,[u]:p||void 0}))},c=()=>{r({})},m=u=>{const p=Math.floor(u/3600),f=Math.floor(u%3600/60);return`${p}h ${f}m`},d=u=>`${(u*539957e-9).toFixed(1)} nm`,h=u=>`${u.toFixed(1)} kts`,b=u=>new Date(u).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),$=u=>{const p=i==null?void 0:i.find(f=>f.id===u);return(p==null?void 0:p.name)||"Unknown Boat"};return o?t.jsx(xr,{children:t.jsx(Xd,{children:"Loading Trip Data..."})}):s?t.jsx(xr,{children:t.jsx(D,{variant:"accent",title:"System Error",children:t.jsxs("div",{style:{color:"red",textAlign:"center",padding:"2rem"},children:["Error loading trips: ",s.message]})})}):t.jsxs(xr,{children:[t.jsx(O,{children:"Trip Log Database"}),t.jsx(qd,{title:"Search Parameters",variant:"secondary",children:t.jsxs(Hd,{children:[t.jsxs(Ft,{children:[t.jsx(fr,{children:"Vessel"}),t.jsxs(Wd,{value:e.boatId||"",onChange:u=>l("boatId",u.target.value),children:[t.jsx("option",{value:"",children:"All Vessels"}),i==null?void 0:i.map(u=>t.jsx("option",{value:u.id,children:u.name},u.id))]})]}),t.jsxs(Ft,{children:[t.jsx(fr,{children:"Start Date"}),t.jsx(Kn,{type:"date",value:e.startDate||"",onChange:u=>l("startDate",u.target.value)})]}),t.jsxs(Ft,{children:[t.jsx(fr,{children:"End Date"}),t.jsx(Kn,{type:"date",value:e.endDate||"",onChange:u=>l("endDate",u.target.value)})]}),t.jsx(Ft,{children:t.jsx(T,{variant:"secondary",size:"sm",onClick:c,children:"Clear Filters"})})]})}),!n||n.length===0?t.jsxs(Yd,{children:[t.jsx("div",{className:"empty-title",children:"No Trip Records Found"}),t.jsx("div",{className:"empty-message",children:Object.keys(e).length>0?"No trips match the current search parameters.":"No trips have been recorded yet."})]}):t.jsx(Kd,{children:n.map(u=>{var p,f,x,g,y,v;return t.jsx(te,{to:`/trips/${u.id}`,style:{textDecoration:"none"},children:t.jsx(Vd,{variant:"primary",children:t.jsxs(Gd,{children:[t.jsxs(_d,{children:[t.jsxs(Qd,{children:[$(u.boatId)," - ",b(u.startTime)]}),t.jsxs(Jd,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Water Type:"})," ",u.waterType.toUpperCase()]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Role:"})," ",u.role.toUpperCase()]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Duration:"})," ",m(((p=u.statistics)==null?void 0:p.durationSeconds)||0)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Distance:"})," ",d(((f=u.statistics)==null?void 0:f.distanceMeters)||0)]})]})]}),t.jsxs(Zd,{children:[t.jsxs("div",{children:[t.jsx(yr,{children:h(((x=u.statistics)==null?void 0:x.averageSpeedKnots)||0)}),t.jsx(br,{children:"Avg Speed"})]}),t.jsxs("div",{children:[t.jsx(yr,{children:h(((g=u.statistics)==null?void 0:g.maxSpeedKnots)||0)}),t.jsx(br,{children:"Max Speed"})]}),t.jsxs("div",{children:[t.jsx(yr,{children:((v=(y=u.statistics)==null?void 0:y.stopPoints)==null?void 0:v.length)||0}),t.jsx(br,{children:"Stop Points"})]})]})]})})},u.id)})})]})},$r=a.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,tm=a(T)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,rm=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,nm=a(D)`
  grid-column: 1 / -1;
  margin-bottom: ${e=>e.theme.spacing.lg};
`,om=a(Do)`
  height: 400px;
  width: 100%;
  border-radius: ${e=>e.theme.borderRadius.md};
  
  .leaflet-control-container {
    .leaflet-top.leaflet-left {
      .leaflet-control-zoom {
        background-color: ${e=>e.theme.colors.surface.dark};
        border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
        border-radius: ${e=>e.theme.borderRadius.sm};

        a {
          background-color: ${e=>e.theme.colors.surface.medium};
          color: ${e=>e.theme.colors.text.primary};
          border: none;

          &:hover {
            background-color: ${e=>e.theme.colors.primary.neonCarrot};
            color: ${e=>e.theme.colors.text.inverse};
          }
        }
      }
    }
  }
`,am=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,rt=a.div`
  text-align: center;
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,nt=a.div`
  font-size: ${e=>e.theme.typography.fontSize.xxl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,ot=a.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,sm=a.div`
  display: grid;
  gap: ${e=>e.theme.spacing.sm};
`,_e=a.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.sm} 0;
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,Qe=a.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Je=a.div`
  font-size: ${e=>e.theme.typography.fontSize.md};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,im=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,gt=a.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
  text-align: center;
`,xt=a.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.lilac};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,ft=a.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,lm=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,cm=a.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,dm=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,mm=a.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  text-transform: uppercase;
  letter-spacing: 1px;
`,pm=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,hm=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.muted};
`,um=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,gm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,xm=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.lg};
`,fm=a(D)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,ym=a(D)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,bm=new ke.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiM2NkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),$m=new ke.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRjY2NjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),jm=new ke.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[20,20],iconAnchor:[10,10]}),vm=()=>{var g,y,v,w,F,k,I,z,B;const{id:e}=qe(),{data:r,isLoading:n,error:o}=ca(e),{data:s}=ue(),i=A=>{const M=Math.floor(A/3600),q=Math.floor(A%3600/60);return`${M}h ${q}m`},l=A=>`${(A*539957e-9).toFixed(1)} nm`,c=A=>`${A.toFixed(1)} kts`,m=A=>new Date(A).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),d=(A,M)=>{const q=A>=0?"N":"S",W=M>=0?"E":"W";return`${Math.abs(A).toFixed(6)}°${q}, ${Math.abs(M).toFixed(6)}°${W}`},h=A=>{const M=s==null?void 0:s.find(q=>q.id===A);return(M==null?void 0:M.name)||"Unknown Boat"},b=A=>A.map(M=>[M.latitude,M.longitude]),$=A=>{if(A.length===0)return[0,0];const M=A.reduce((W,G)=>W+G.latitude,0)/A.length,q=A.reduce((W,G)=>W+G.longitude,0)/A.length;return[M,q]};if(n)return t.jsx($r,{children:t.jsx(um,{children:"Loading Trip Data..."})});if(o||!r)return t.jsx($r,{children:t.jsx(gm,{children:o?`Error loading trip: ${o.message}`:"Trip not found"})});const u=b(r.gpsPoints),p=$(r.gpsPoints),f=r.gpsPoints[0],x=r.gpsPoints[r.gpsPoints.length-1];return t.jsxs($r,{children:[t.jsx(tm,{as:te,to:"/trips",variant:"secondary",size:"sm",children:"← Back to Trip Log"}),t.jsxs(O,{children:["Trip Analysis - ",h(r.boatId)," - ",m(r.startTime)]}),u.length>0&&t.jsx(nm,{title:"Navigation Route",variant:"accent",children:t.jsxs(om,{center:p,zoom:13,scrollWheelZoom:!0,children:[t.jsx(Gr,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(zo,{positions:u,color:"#FF9966",weight:3,opacity:.8}),f&&t.jsx(xe,{position:[f.latitude,f.longitude],icon:bm,children:t.jsxs(fe,{children:[t.jsx("strong",{children:"Trip Start"}),t.jsx("br",{}),m(r.startTime),t.jsx("br",{}),d(f.latitude,f.longitude)]})}),x&&t.jsx(xe,{position:[x.latitude,x.longitude],icon:$m,children:t.jsxs(fe,{children:[t.jsx("strong",{children:"Trip End"}),t.jsx("br",{}),m(r.endTime),t.jsx("br",{}),d(x.latitude,x.longitude)]})}),(((g=r.statistics)==null?void 0:g.stopPoints)||[]).map((A,M)=>t.jsx(xe,{position:[A.latitude,A.longitude],icon:jm,children:t.jsxs(fe,{children:[t.jsxs("strong",{children:["Stop Point ",M+1]}),t.jsx("br",{}),"Duration: ",i(A.durationSeconds),t.jsx("br",{}),d(A.latitude,A.longitude)]})},M))]})}),t.jsxs(rm,{children:[t.jsx(D,{title:"Trip Statistics",variant:"primary",children:t.jsxs(am,{children:[t.jsxs(rt,{children:[t.jsx(nt,{children:i(((y=r.statistics)==null?void 0:y.durationSeconds)||0)}),t.jsx(ot,{children:"Duration"})]}),t.jsxs(rt,{children:[t.jsx(nt,{children:l(((v=r.statistics)==null?void 0:v.distanceMeters)||0)}),t.jsx(ot,{children:"Distance"})]}),t.jsxs(rt,{children:[t.jsx(nt,{children:c(((w=r.statistics)==null?void 0:w.averageSpeedKnots)||0)}),t.jsx(ot,{children:"Avg Speed"})]}),t.jsxs(rt,{children:[t.jsx(nt,{children:c(((F=r.statistics)==null?void 0:F.maxSpeedKnots)||0)}),t.jsx(ot,{children:"Max Speed"})]}),t.jsxs(rt,{children:[t.jsx(nt,{children:((I=(k=r.statistics)==null?void 0:k.stopPoints)==null?void 0:I.length)||0}),t.jsx(ot,{children:"Stop Points"})]}),t.jsxs(rt,{children:[t.jsx(nt,{children:r.gpsPoints.length}),t.jsx(ot,{children:"GPS Points"})]})]})}),t.jsx(D,{title:"Trip Information",variant:"secondary",children:t.jsxs(sm,{children:[t.jsxs(_e,{children:[t.jsx(Qe,{children:"Vessel"}),t.jsx(Je,{children:h(r.boatId)})]}),t.jsxs(_e,{children:[t.jsx(Qe,{children:"Start Time"}),t.jsx(Je,{children:m(r.startTime)})]}),t.jsxs(_e,{children:[t.jsx(Qe,{children:"End Time"}),t.jsx(Je,{children:m(r.endTime)})]}),t.jsxs(_e,{children:[t.jsx(Qe,{children:"Water Type"}),t.jsx(Je,{children:r.waterType.toUpperCase()})]}),t.jsxs(_e,{children:[t.jsx(Qe,{children:"Role"}),t.jsx(Je,{children:r.role.toUpperCase()})]}),f&&t.jsxs(_e,{children:[t.jsx(Qe,{children:"Start Position"}),t.jsx(Je,{children:d(f.latitude,f.longitude)})]}),x&&t.jsxs(_e,{children:[t.jsx(Qe,{children:"End Position"}),t.jsx(Je,{children:d(x.latitude,x.longitude)})]})]})})]}),r.manualData&&t.jsx(fm,{title:"Manual Data Entry",variant:"accent",children:t.jsxs(im,{children:[r.manualData.engineHours!==void 0&&t.jsxs(gt,{children:[t.jsx(xt,{children:r.manualData.engineHours}),t.jsx(ft,{children:"Engine Hours"})]}),r.manualData.fuelConsumed!==void 0&&t.jsxs(gt,{children:[t.jsx(xt,{children:r.manualData.fuelConsumed}),t.jsx(ft,{children:"Fuel Consumed"})]}),r.manualData.numberOfPassengers!==void 0&&t.jsxs(gt,{children:[t.jsx(xt,{children:r.manualData.numberOfPassengers}),t.jsx(ft,{children:"Passengers"})]}),r.manualData.weatherConditions&&t.jsxs(gt,{children:[t.jsx(xt,{children:r.manualData.weatherConditions}),t.jsx(ft,{children:"Weather"})]}),r.manualData.destination&&t.jsxs(gt,{children:[t.jsx(xt,{children:r.manualData.destination}),t.jsx(ft,{children:"Destination"})]})]})}),(((z=r.statistics)==null?void 0:z.stopPoints)||[]).length>0&&t.jsx(ym,{title:"Stop Points Analysis",variant:"primary",children:t.jsx(lm,{children:(((B=r.statistics)==null?void 0:B.stopPoints)||[]).map((A,M)=>t.jsxs(cm,{children:[t.jsxs(dm,{children:[t.jsxs(mm,{children:["Stop Point ",M+1]}),t.jsx(pm,{children:i(A.durationSeconds)})]}),t.jsx(hm,{children:d(A.latitude,A.longitude)}),t.jsxs("div",{style:{fontSize:"0.8rem",color:"#999",marginTop:"0.5rem"},children:[m(A.startTime)," - ",m(A.endTime)]})]},M))})}),t.jsxs(xm,{children:[t.jsx(V,{children:t.jsx(te,{to:`/trips/${r.id}/edit`,style:{textDecoration:"none"},children:t.jsx(T,{variant:"primary",children:"Edit Trip Data"})})}),t.jsx(T,{variant:"secondary",children:"Export Data"})]})]})},jr=a.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;
`,wm=a(T)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Cm=a.div`
  display: grid;
  gap: ${e=>e.theme.spacing.lg};
`,Vn=a(D)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,yt=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`,ve=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,we=a.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,at=a.input`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }

  &:disabled {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.muted};
    cursor: not-allowed;
  }
`,vr=a.select`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,Sm=a.textarea`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,wr=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,km=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,Tm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,Am=a.div`
  background-color: rgba(102, 255, 102, 0.1);
  border: 1px solid ${e=>e.theme.colors.status.success};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.status.success};
  padding: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Em=()=>{const{id:e}=qe(),{data:r,isLoading:n,error:o}=ca(e),{data:s}=ue(),i=tc(),l=rc(),[c,m]=j.useState({waterType:"inland",role:"captain",boatId:""}),[d,h]=j.useState({}),[b,$]=j.useState("");j.useEffect(()=>{r&&(m({waterType:r.waterType,role:r.role,boatId:r.boatId}),r.manualData&&h({engineHours:r.manualData.engineHours,fuelConsumed:r.manualData.fuelConsumed,weatherConditions:r.manualData.weatherConditions,numberOfPassengers:r.manualData.numberOfPassengers,destination:r.manualData.destination}))},[r]);const u=(v,w)=>{m(F=>({...F,[v]:w}))},p=(v,w)=>{h(F=>({...F,[v]:w===""?void 0:w}))},f=async()=>{if(r)try{await i.mutateAsync({id:r.id,data:c}),$("Trip information updated successfully!"),setTimeout(()=>$(""),3e3)}catch(v){console.error("Error updating trip:",v)}},x=async()=>{if(!r)return;const v={};Object.entries(d).forEach(([w,F])=>{F!==void 0&&F!==""&&(v[w]=F)});try{await l.mutateAsync({tripId:r.id,data:v}),$("Manual data updated successfully!"),setTimeout(()=>$(""),3e3)}catch(w){console.error("Error updating manual data:",w)}},g=v=>new Date(v).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),y=v=>{const w=s==null?void 0:s.find(F=>F.id===v);return(w==null?void 0:w.name)||"Unknown Boat"};return n?t.jsx(jr,{children:t.jsx(km,{children:"Loading Trip Data..."})}):o||!r?t.jsx(jr,{children:t.jsx(Tm,{children:o?`Error loading trip: ${o.message}`:"Trip not found"})}):t.jsxs(jr,{children:[t.jsx(wm,{as:te,to:`/trips/${r.id}`,variant:"secondary",size:"sm",children:"← Back to Trip Details"}),t.jsxs(O,{children:["Edit Trip Data - ",y(r.boatId)," - ",g(r.startTime)]}),b&&t.jsx(Am,{children:b}),t.jsxs(Cm,{children:[t.jsxs(Vn,{title:"Trip Information",variant:"primary",children:[t.jsxs(yt,{children:[t.jsxs(ve,{children:[t.jsx(we,{children:"Vessel"}),t.jsx(vr,{value:c.boatId,onChange:v=>u("boatId",v.target.value),children:s==null?void 0:s.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))})]}),t.jsxs(ve,{children:[t.jsx(we,{children:"Water Type"}),t.jsxs(vr,{value:c.waterType,onChange:v=>u("waterType",v.target.value),children:[t.jsx("option",{value:"inland",children:"Inland"}),t.jsx("option",{value:"coastal",children:"Coastal/Nearshore"}),t.jsx("option",{value:"offshore",children:"Offshore"})]})]}),t.jsxs(ve,{children:[t.jsx(we,{children:"Role"}),t.jsxs(vr,{value:c.role,onChange:v=>u("role",v.target.value),children:[t.jsx("option",{value:"captain",children:"Captain"}),t.jsx("option",{value:"crew",children:"Crew"}),t.jsx("option",{value:"observer",children:"Observer"})]})]})]}),t.jsxs(yt,{children:[t.jsxs(ve,{children:[t.jsx(we,{children:"Start Time"}),t.jsx(at,{type:"text",value:g(r.startTime),disabled:!0})]}),t.jsxs(ve,{children:[t.jsx(we,{children:"End Time"}),t.jsx(at,{type:"text",value:g(r.endTime),disabled:!0})]})]}),t.jsx(wr,{children:t.jsx(V,{children:t.jsx(T,{variant:"primary",onClick:f,disabled:i.isPending,children:i.isPending?"Saving...":"Save Trip Information"})})})]}),t.jsxs(Vn,{title:"Manual Data Entry",variant:"secondary",children:[t.jsxs(yt,{children:[t.jsxs(ve,{children:[t.jsx(we,{children:"Engine Hours"}),t.jsx(at,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:d.engineHours||"",onChange:v=>p("engineHours",parseFloat(v.target.value))})]}),t.jsxs(ve,{children:[t.jsx(we,{children:"Fuel Consumed (gallons)"}),t.jsx(at,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:d.fuelConsumed||"",onChange:v=>p("fuelConsumed",parseFloat(v.target.value))})]}),t.jsxs(ve,{children:[t.jsx(we,{children:"Number of Passengers"}),t.jsx(at,{type:"number",min:"0",placeholder:"0",value:d.numberOfPassengers||"",onChange:v=>p("numberOfPassengers",parseInt(v.target.value))})]})]}),t.jsx(yt,{children:t.jsxs(ve,{children:[t.jsx(we,{children:"Destination"}),t.jsx(at,{type:"text",placeholder:"Enter destination",value:d.destination||"",onChange:v=>p("destination",v.target.value)})]})}),t.jsx(yt,{children:t.jsxs(ve,{children:[t.jsx(we,{children:"Weather Conditions"}),t.jsx(Sm,{placeholder:"Describe weather conditions, sea state, visibility, etc.",value:d.weatherConditions||"",onChange:v=>p("weatherConditions",v.target.value)})]})}),t.jsx(wr,{children:t.jsx(V,{children:t.jsx(T,{variant:"secondary",onClick:x,disabled:l.isPending,children:l.isPending?"Saving...":"Save Manual Data"})})})]})]}),t.jsxs(wr,{children:[t.jsx(te,{to:`/trips/${r.id}`,style:{textDecoration:"none"},children:t.jsx(T,{variant:"accent",children:"View Trip Details"})}),t.jsx(te,{to:"/trips",style:{textDecoration:"none"},children:t.jsx(T,{variant:"secondary",children:"Back to Trip Log"})})]})]})},xa=e=>ie({queryKey:["notes",e],queryFn:()=>P.getNotes(e)}),fa=e=>ie({queryKey:["notes",e],queryFn:()=>P.getNote(e),enabled:!!e}),Fm=()=>{const e=Q();return Y({mutationFn:r=>P.createNote(r),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},Lm=()=>{const e=Q();return Y({mutationFn:({id:r,data:n})=>P.updateNote(r,n),onSuccess:r=>{e.invalidateQueries({queryKey:["notes"]}),e.setQueryData(["notes",r.id],r)}})},ya=()=>{const e=Q();return Y({mutationFn:r=>P.deleteNote(r),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},ba=()=>{const{data:e}=xa();return((e==null?void 0:e.reduce((n,o)=>(o.tags.forEach(s=>{n.includes(s)||n.push(s)}),n),[]))||[]).sort()},Gn=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,zm=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Dm=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Lt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,zt=a.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,Cr=a.select`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  option {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.primary};
  }
`,Mm=a.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,Im=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${e=>e.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Rm=a.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: ${e=>e.theme.spacing.md};
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,Nm=a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Pm=a.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;case"trip":return e.theme.colors.primary.lilac;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Bm=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
`,_n=a.button`
  background: none;
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.xs};
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  transition: all ${e=>e.theme.animation.fast} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }

  &.danger:hover {
    border-color: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.status.error};
  }
`,Om=a.div`
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin-bottom: ${e=>e.theme.spacing.sm};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Um=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,qm=a.span`
  background-color: ${e=>e.theme.colors.surface.medium};
  color: ${e=>e.theme.colors.text.secondary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
`,Hm=a.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
`,Wm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
  
  .empty-icon {
    font-size: 48px;
    margin-bottom: ${e=>e.theme.spacing.md};
  }
  
  .empty-title {
    font-size: ${e=>e.theme.typography.fontSize.lg};
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    margin-bottom: ${e=>e.theme.spacing.sm};
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,Km=()=>{const e=me(),[r,n]=j.useState(""),[o,s]=j.useState(""),[i,l]=j.useState(""),[c,m]=j.useState(""),{data:d}=ue(),h=ba(),b=j.useMemo(()=>{const k={};return r&&(k.type=r),o&&(k.boatId=o),i&&(k.tags=[i]),k},[r,o,i]),{data:$,isLoading:u}=xa(b),p=ya(),f=j.useMemo(()=>$?$.filter(k=>{if(c){const I=c.toLowerCase();return k.content.toLowerCase().includes(I)||k.tags.some(z=>z.toLowerCase().includes(I))}return!0}):[],[$,c]),x=()=>{e("/notes/new")},g=(k,I)=>{I.stopPropagation(),e(`/notes/${k}/edit`)},y=async(k,I)=>{if(I.stopPropagation(),window.confirm("Are you sure you want to delete this note?"))try{await p.mutateAsync(k)}catch(z){console.error("Failed to delete note:",z)}},v=k=>{e(`/notes/${k}`)},w=k=>new Date(k).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),F=k=>{if(!k||!d)return null;const I=d.find(z=>z.id===k);return I==null?void 0:I.name};return u?t.jsxs(Gn,{children:[t.jsx(O,{level:1,children:"Notes Database"}),t.jsx(D,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading notes..."})})]}):t.jsxs(Gn,{children:[t.jsxs(zm,{children:[t.jsx(O,{level:1,children:"Notes Database"}),t.jsx(V,{children:t.jsx(T,{onClick:x,children:"Create New Note"})})]}),t.jsx(D,{title:"Filters",variant:"secondary",children:t.jsxs(Dm,{children:[t.jsxs(Lt,{children:[t.jsx(zt,{children:"Note Type"}),t.jsxs(Cr,{value:r,onChange:k=>n(k.target.value),children:[t.jsx("option",{value:"",children:"All Types"}),t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat-Specific"}),t.jsx("option",{value:"trip",children:"Trip"})]})]}),t.jsxs(Lt,{children:[t.jsx(zt,{children:"Boat"}),t.jsxs(Cr,{value:o,onChange:k=>s(k.target.value),disabled:r==="general"||r==="trip",children:[t.jsx("option",{value:"",children:"All Boats"}),d==null?void 0:d.map(k=>t.jsx("option",{value:k.id,children:k.name},k.id))]})]}),t.jsxs(Lt,{children:[t.jsx(zt,{children:"Tag"}),t.jsxs(Cr,{value:i,onChange:k=>l(k.target.value),children:[t.jsx("option",{value:"",children:"All Tags"}),h.map(k=>t.jsx("option",{value:k,children:k},k))]})]}),t.jsxs(Lt,{children:[t.jsx(zt,{children:"Search"}),t.jsx(Mm,{type:"text",placeholder:"Search notes content...",value:c,onChange:k=>m(k.target.value)})]})]})}),f.length===0?t.jsx(D,{children:t.jsxs(Wm,{children:[t.jsx("div",{className:"empty-icon",children:"📝"}),t.jsx("div",{className:"empty-title",children:"No Notes Found"}),t.jsx("div",{children:($==null?void 0:$.length)===0?"Create your first note to get started.":"Try adjusting your filters to find notes."})]})}):t.jsx(Im,{children:f.map(k=>t.jsxs(Rm,{onClick:()=>v(k.id),children:[t.jsxs(Nm,{children:[t.jsxs(Pm,{type:k.type,children:[k.type,k.type==="boat"&&F(k.boatId)&&` - ${F(k.boatId)}`]}),t.jsxs(Bm,{children:[t.jsx(V,{children:t.jsx(_n,{onClick:I=>g(k.id,I),children:"Edit"})}),t.jsx(V,{children:t.jsx(_n,{className:"danger",onClick:I=>y(k.id,I),children:"Delete"})})]})]}),t.jsx(Om,{children:k.content}),k.tags.length>0&&t.jsx(Um,{children:k.tags.map(I=>t.jsx(qm,{children:I},I))}),t.jsxs(Hm,{children:[w(k.createdAt),k.updatedAt!==k.createdAt&&" (edited)"]})]},k.id))})]})},Sr=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Vm=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Gm=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,_m=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,st=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,it=a.span`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,lt=a.span`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
`,Qm=a.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;case"trip":return e.theme.colors.primary.lilac;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
`,Jm=a.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.lg};
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  white-space: pre-wrap;
  font-size: ${e=>e.theme.typography.fontSize.md};
`,Zm=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,Ym=a.span`
  background-color: ${e=>e.theme.colors.primary.lilac};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Xm=a.span`
  color: ${e=>e.theme.colors.text.muted};
  font-style: italic;
`,ep=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
`,tp=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
`,rp=()=>{const e=me(),{id:r}=qe(),{data:n,isLoading:o,error:s}=fa(r||""),{data:i}=ue(),{data:l}=He(),c=ya(),m=()=>{e(`/notes/${r}/edit`)},d=async()=>{if(window.confirm("Are you sure you want to delete this note?"))try{await c.mutateAsync(r),e("/notes")}catch(p){console.error("Failed to delete note:",p)}},h=()=>{e("/notes")},b=p=>new Date(p).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),$=p=>{if(!p||!i)return"Unknown Boat";const f=i.find(x=>x.id===p);return(f==null?void 0:f.name)||"Unknown Boat"},u=p=>{if(!p||!l)return"Unknown Trip";const f=l.find(y=>y.id===p);if(!f)return"Unknown Trip";const x=$(f.boatId);return`${new Date(f.startTime).toLocaleDateString()} - ${x}`};return o?t.jsxs(Sr,{children:[t.jsx(O,{level:1,children:"Note Details"}),t.jsx(D,{children:t.jsx(ep,{children:"Loading note..."})})]}):s||!n?t.jsxs(Sr,{children:[t.jsx(O,{level:1,children:"Note Details"}),t.jsx(D,{children:t.jsxs(tp,{children:["Note not found or failed to load.",t.jsx("div",{style:{marginTop:"1rem"},children:t.jsx(T,{onClick:h,children:"Back to Notes"})})]})})]}):t.jsxs(Sr,{children:[t.jsxs(Vm,{children:[t.jsx(O,{level:1,children:"Note Details"}),t.jsxs(Gm,{children:[t.jsx(T,{variant:"secondary",onClick:h,children:"Back to Notes"}),t.jsx(V,{children:t.jsx(T,{variant:"accent",onClick:m,children:"Edit Note"})}),t.jsx(V,{children:t.jsx(T,{variant:"danger",onClick:d,disabled:c.isPending,children:c.isPending?"Deleting...":"Delete"})})]})]}),t.jsx(D,{title:"Note Information",children:t.jsxs(_m,{children:[t.jsxs(st,{children:[t.jsx(it,{children:"Type"}),t.jsx(lt,{children:t.jsx(Qm,{type:n.type,children:n.type})})]}),n.type==="boat"&&n.boatId&&t.jsxs(st,{children:[t.jsx(it,{children:"Boat"}),t.jsx(lt,{children:$(n.boatId)})]}),n.type==="trip"&&n.tripId&&t.jsxs(st,{children:[t.jsx(it,{children:"Trip"}),t.jsx(lt,{children:u(n.tripId)})]}),t.jsxs(st,{children:[t.jsx(it,{children:"Created"}),t.jsx(lt,{children:b(n.createdAt)})]}),n.updatedAt!==n.createdAt&&t.jsxs(st,{children:[t.jsx(it,{children:"Last Modified"}),t.jsx(lt,{children:b(n.updatedAt)})]}),t.jsxs(st,{children:[t.jsx(it,{children:"Tags"}),t.jsx(lt,{children:n.tags.length>0?t.jsx(Zm,{children:n.tags.map(p=>t.jsx(Ym,{children:p},p))}):t.jsx(Xm,{children:"No tags"})})]})]})}),t.jsx(D,{title:"Content",children:t.jsx(Jm,{children:n.content})})]})},Qn=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,np=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,op=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Dt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,ct=a.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,kr=a.select`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  option {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.primary};
  }
`,ap=a.textarea`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  min-height: 200px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,sp=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,ip=a.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,lp=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,cp=a.span`
  background-color: ${e=>e.theme.colors.primary.lilac};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};

  .remove-tag {
    background: none;
    border: none;
    color: ${e=>e.theme.colors.text.primary};
    cursor: pointer;
    font-size: ${e=>e.theme.typography.fontSize.sm};
    padding: 0;

    &:hover {
      color: ${e=>e.theme.colors.status.error};
    }
  }
`,dp=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-top: ${e=>e.theme.spacing.sm};
`,mp=a.button`
  background: none;
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  cursor: pointer;
  transition: all ${e=>e.theme.animation.fast} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.primary.neonCarrot};
    background-color: ${e=>e.theme.colors.primary.neonCarrot}20;
  }
`,pp=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,hp=a.div`
  color: ${e=>e.theme.colors.status.error};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.status.error};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Jn=()=>{const e=me(),{id:r}=qe(),n=!!r&&r!=="new",[o,s]=j.useState("general"),[i,l]=j.useState(""),[c,m]=j.useState(""),[d,h]=j.useState(""),[b,$]=j.useState([]),[u,p]=j.useState(""),[f,x]=j.useState(""),{data:g,isLoading:y}=fa(r||""),{data:v}=ue(),{data:w}=He(),F=ba(),k=Fm(),I=Lm();j.useEffect(()=>{g&&n&&(s(g.type),l(g.boatId||""),m(g.tripId||""),h(g.content),$(g.tags))},[g,n]);const z=()=>{const N=u.trim();N&&!b.includes(N)&&($([...b,N]),p(""))},B=N=>{$(b.filter(X=>X!==N))},A=N=>{b.includes(N)||$([...b,N])},M=N=>{N.key==="Enter"&&(N.preventDefault(),z())},q=async()=>{if(x(""),!d.trim()){x("Note content is required");return}if(o==="boat"&&!i){x("Please select a boat for boat-specific notes");return}if(o==="trip"&&!c){x("Please select a trip for trip notes");return}try{const N={content:d.trim(),type:o,boatId:o==="boat"?i:void 0,tripId:o==="trip"?c:void 0,tags:b};n?await I.mutateAsync({id:r,data:N}):await k.mutateAsync(N),e("/notes")}catch(N){console.error("Failed to save note:",N),x("Failed to save note. Please try again.")}},W=()=>{e("/notes")},G=F.filter(N=>!b.includes(N));return y&&n?t.jsxs(Qn,{children:[t.jsx(O,{level:1,children:"Loading Note"}),t.jsx(D,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading note data..."})})]}):t.jsxs(Qn,{children:[t.jsx(np,{children:t.jsx(O,{level:1,children:n?"Edit Note":"Create New Note"})}),t.jsx(D,{title:"Note Details",children:t.jsxs(op,{children:[f&&t.jsx(hp,{children:f}),t.jsxs(Dt,{children:[t.jsx(ct,{children:"Note Type"}),t.jsxs(kr,{value:o,onChange:N=>{s(N.target.value),l(""),m("")},children:[t.jsx("option",{value:"general",children:"General Note"}),t.jsx("option",{value:"boat",children:"Boat-Specific Note"}),t.jsx("option",{value:"trip",children:"Trip Note"})]})]}),o==="boat"&&t.jsxs(Dt,{children:[t.jsx(ct,{children:"Boat"}),t.jsxs(kr,{value:i,onChange:N=>l(N.target.value),children:[t.jsx("option",{value:"",children:"Select a boat"}),v==null?void 0:v.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),o==="trip"&&t.jsxs(Dt,{children:[t.jsx(ct,{children:"Trip"}),t.jsxs(kr,{value:c,onChange:N=>m(N.target.value),children:[t.jsx("option",{value:"",children:"Select a trip"}),w==null?void 0:w.map(N=>{var X;return t.jsxs("option",{value:N.id,children:[new Date(N.startTime).toLocaleDateString()," - ",((X=v==null?void 0:v.find(Le=>Le.id===N.boatId))==null?void 0:X.name)||"Unknown Boat"]},N.id)})]})]}),t.jsxs(Dt,{children:[t.jsx(ct,{children:"Content"}),t.jsx(ap,{value:d,onChange:N=>h(N.target.value),placeholder:"Enter your note content here..."})]}),t.jsxs(sp,{children:[t.jsx(ct,{children:"Tags"}),t.jsx(ip,{type:"text",value:u,onChange:N=>p(N.target.value),onKeyPress:M,placeholder:"Add a tag and press Enter"}),b.length>0&&t.jsx(lp,{children:b.map(N=>t.jsxs(cp,{children:[N,t.jsx("button",{className:"remove-tag",onClick:()=>B(N),type:"button",children:"×"})]},N))}),G.length>0&&t.jsxs("div",{children:[t.jsx(ct,{style:{fontSize:"12px",marginBottom:"8px"},children:"Suggested Tags"}),t.jsx(dp,{children:G.slice(0,10).map(N=>t.jsx(mp,{onClick:()=>A(N),type:"button",children:N},N))})]})]}),t.jsxs(pp,{children:[t.jsx(T,{variant:"secondary",onClick:W,children:"Cancel"}),t.jsx(V,{children:t.jsx(T,{onClick:q,disabled:k.isPending||I.isPending,children:k.isPending||I.isPending?"Saving...":"Save Note"})})]})]})})]})},J={todoLists:e=>["todoLists",e],todoList:e=>["todoList",e]},up=e=>ie({queryKey:J.todoLists(e),queryFn:()=>P.getTodoLists(e)}),gp=e=>ie({queryKey:J.todoList(e),queryFn:()=>P.getTodoList(e),enabled:!!e}),xp=()=>{const e=Q();return Y({mutationFn:r=>P.createTodoList(r),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},fp=()=>{const e=Q();return Y({mutationFn:({id:r,data:n})=>P.updateTodoList(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:J.todoList(n)}),e.invalidateQueries({queryKey:["todoLists"]})}})},yp=()=>{const e=Q();return Y({mutationFn:r=>P.deleteTodoList(r),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},bp=()=>{const e=Q();return Y({mutationFn:({listId:r,content:n})=>P.addTodoItem(r,n),onMutate:async({listId:r,content:n})=>{await e.cancelQueries({queryKey:J.todoList(r)});const o=e.getQueryData(J.todoList(r));if(o){const s={id:`temp-${Date.now()}`,listId:r,content:n,completed:!1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};e.setQueryData(J.todoList(r),{...o,items:[...o.items,s]})}return{previous:o}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(J.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:J.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},$p=()=>{const e=Q();return Y({mutationFn:({itemId:r})=>P.toggleTodoItem(r),onMutate:async({itemId:r,listId:n})=>{await e.cancelQueries({queryKey:J.todoList(n)});const o=e.getQueryData(J.todoList(n));return o&&e.setQueryData(J.todoList(n),{...o,items:o.items.map(s=>s.id===r?{...s,completed:!s.completed,completedAt:s.completed?void 0:new Date().toISOString()}:s)}),{previous:o}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(J.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:J.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},jp=()=>{const e=Q();return Y({mutationFn:({itemId:r,data:n})=>P.updateTodoItem(r,n),onMutate:async({itemId:r,listId:n,data:o})=>{await e.cancelQueries({queryKey:J.todoList(n)});const s=e.getQueryData(J.todoList(n));return s&&e.setQueryData(J.todoList(n),{...s,items:s.items.map(i=>i.id===r?{...i,...o}:i)}),{previous:s}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(J.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:J.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},vp=()=>{const e=Q();return Y({mutationFn:({itemId:r})=>P.deleteTodoItem(r),onMutate:async({itemId:r,listId:n})=>{await e.cancelQueries({queryKey:J.todoList(n)});const o=e.getQueryData(J.todoList(n));return o&&e.setQueryData(J.todoList(n),{...o,items:o.items.filter(s=>s.id!==r)}),{previous:o}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(J.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:J.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},wp=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.$isEditing?e.theme.colors.primary.neonCarrot:e.$completed?e.theme.colors.status.success:e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  transition: all ${e=>e.theme.animation.normal} ease;
  cursor: pointer;
  animation: slideIn ${e=>e.theme.animation.normal} ease;

  &:hover {
    border-color: ${e=>(e.$isEditing,e.theme.colors.primary.neonCarrot)};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}30;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,Cp=a.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  border-radius: 50%;
  border: 2px solid ${e=>e.$completed?e.theme.colors.status.success:e.theme.colors.primary.anakiwa};
  background: ${e=>e.$completed?e.theme.colors.status.success:"transparent"};
  color: ${e=>e.theme.colors.background};
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${e=>e.theme.animation.fast} ease;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 8px ${e=>e.$completed?e.theme.colors.status.success:e.theme.colors.primary.anakiwa};
  }

  &:active {
    transform: scale(0.95);
  }
`,Sp=a.div`
  flex: 1;
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 14px;
  color: ${e=>e.$completed?e.theme.colors.text.muted:e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  text-decoration: ${e=>e.$completed?"line-through":"none"};
  user-select: none;
`,kp=a.input`
  flex: 1;
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  background: ${e=>e.theme.colors.surface.medium};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 8px 12px;
  outline: none;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }
`,Tp=a.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  border-radius: 50%;
  border: 2px solid ${e=>e.theme.colors.status.error};
  background: transparent;
  color: ${e=>e.theme.colors.status.error};
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${e=>e.$visible?1:0};
  transition: all ${e=>e.theme.animation.fast} ease;
  padding: 0;

  &:hover {
    background: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.background};
    transform: scale(1.1);
    box-shadow: 0 0 8px ${e=>e.theme.colors.status.error};
  }

  &:active {
    transform: scale(0.95);
  }
`,Ap=({item:e,onToggle:r,onUpdate:n,onDelete:o})=>{const[s,i]=j.useState(!1),[l,c]=j.useState(e.content),[m,d]=j.useState(!1),h=j.useRef(null);j.useEffect(()=>{s&&h.current&&(h.current.focus(),h.current.select())},[s]);const b=g=>{g.stopPropagation(),e.completed||i(!0)},$=()=>{const g=l.trim();g&&g!==e.content&&n(e.id,g),i(!1)},u=()=>{c(e.content),i(!1)},p=g=>{g.key==="Enter"?$():g.key==="Escape"&&u()},f=g=>{g.stopPropagation(),r(e.id)},x=g=>{g.stopPropagation(),o(e.id)};return t.jsxs(wp,{$completed:e.completed,$isEditing:s,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[t.jsx(Cp,{$completed:e.completed,onClick:f,role:"checkbox","aria-label":e.completed?"Mark incomplete":"Mark complete","aria-checked":e.completed,children:e.completed&&"✓"}),s?t.jsx(kp,{ref:h,value:l,onChange:g=>c(g.target.value),onKeyDown:p,onBlur:$}):t.jsx(Sp,{$completed:e.completed,onClick:b,children:e.content}),t.jsx(Tp,{$visible:m,onClick:x,"aria-label":"Delete task",children:"×"})]})},Ep=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`,Fp=a.div`
  flex: 1;
  height: 10px;
  background: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  position: relative;
`,Lp=a.div`
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.pill};
  transition: width ${e=>e.theme.animation.normal} ease;
  box-shadow: 0 0 8px ${e=>e.theme.colors.primary.neonCarrot}40;
`,zp=a.span`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 12px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  min-width: 42px;
  text-align: right;
`,Dp=({percentage:e})=>{const r=Math.min(100,Math.max(0,e));return t.jsxs(Ep,{children:[t.jsx(Fp,{children:t.jsx(Lp,{$percentage:r})}),t.jsxs(zp,{children:[Math.round(r),"%"]})]})},Mp=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  gap: 16px;
`,Ip=a.div`
  font-size: 48px;
  line-height: 1;
  opacity: 0.6;
  filter: grayscale(0.3);
`,Rp=a.h3`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 20px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  margin: 0;
`,Np=a.p`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  margin: 0;
  max-width: 320px;
`,Zn=({title:e,message:r,icon:n="📋"})=>t.jsxs(Mp,{children:[t.jsx(Ip,{children:n}),t.jsx(Rp,{children:e}),t.jsx(Np,{children:r})]}),Pp=re`
  from { opacity: 0; }
  to { opacity: 1; }
`,Bp=re`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,Op=a.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: ${e=>e.theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Pp} 150ms ease;
`,Up=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.lg};
  width: ${e=>e.width||"480px"};
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${Bp} 200ms ease;
`,Yn={primary:"#FF9933",secondary:"#CC99CC",accent:"#99CCFF",danger:"#FF5555"},qp=a.div`
  background: ${e=>Yn[e.variant]||Yn.primary};
  padding: 0 ${e=>e.theme.spacing.md};
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${e=>e.theme.lcars.buttonRadius};
  margin: ${e=>e.theme.spacing.sm};
  margin-bottom: 0;
`,Hp=a.span`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.inverse};
`,Wp=a.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.inverse};
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
  font-weight: bold;
  line-height: 1;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`,Kp=a.div`
  padding: ${e=>e.theme.spacing.lg};
  overflow-y: auto;
  flex: 1;
`,$a=({isOpen:e,onClose:r,title:n,variant:o="primary",children:s,width:i})=>{const l=j.useRef(null),c=j.useCallback(m=>{m.key==="Escape"&&r()},[r]);return j.useEffect(()=>{if(e)return document.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",c),document.body.style.overflow=""}},[e,c]),e?Lo.createPortal(t.jsx(Op,{onClick:m=>{m.target===m.currentTarget&&r()},children:t.jsxs(Up,{ref:l,width:i,role:"dialog","aria-modal":"true",children:[n&&t.jsxs(qp,{variant:o,children:[t.jsx(Hp,{children:n}),t.jsx(Wp,{onClick:r,"aria-label":"Close",children:"×"})]}),t.jsx(Kp,{children:s})]})}),document.body):null},Vp=a.p`
  color: ${e=>e.theme.colors.text.light};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin: 0 0 ${e=>e.theme.spacing.lg} 0;
`,Gp=a.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing.md};
`,_p=({isOpen:e,onClose:r,onConfirm:n,title:o,message:s,confirmLabel:i="Confirm",cancelLabel:l="Cancel",variant:c="primary",isLoading:m=!1})=>t.jsxs($a,{isOpen:e,onClose:r,title:o,variant:c==="danger"?"danger":"primary",children:[t.jsx(Vp,{children:s}),t.jsxs(Gp,{children:[t.jsx(T,{variant:"secondary",onClick:r,disabled:m,children:l}),t.jsx(T,{variant:c==="danger"?"danger":"primary",onClick:n,disabled:m,children:m?"Processing...":i})]})]}),Qp=re`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,Jp=re`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
`,Zp=re`
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
`,Yt="768px",Xn="300px",Yp="3px",eo=a.div`
  display: flex;
  min-height: calc(100vh - 140px);
  gap: ${Yp};

  @media (max-width: ${Yt}) {
    flex-direction: column;
    gap: 0;
  }
`,Xp=a.aside`
  width: ${Xn};
  min-width: ${Xn};
  background: ${e=>e.theme.colors.surface.dark};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: ${Yt}) {
    width: 100%;
    min-width: 100%;
    display: ${e=>e.$hidden?"none":"flex"};
  }
`,eh=a.section`
  flex: 1;
  background: ${e=>e.theme.colors.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${Jp} 300ms ease;

  @media (max-width: ${Yt}) {
    display: ${e=>e.$hidden?"none":"flex"};
  }
`,th=a.div`
  padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  flex-shrink: 0;
`,rh=a.h2`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.extraWide};
  margin: 0;
`,nh=a.select`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  color: ${e=>e.theme.colors.text.light};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 6px 10px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  option {
    background: ${e=>e.theme.colors.surface.dark};
  }
`,oh=a.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,ah=a.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.$active?e.theme.colors.surface.medium:"transparent"};
  border: 2px solid ${e=>e.$active?e.theme.colors.primary.neonCarrot:e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.md};
  cursor: pointer;
  text-align: left;
  transition: all 200ms ease;
  animation: ${Zp} 300ms ease both;

  ${e=>e.$active&&L`
    box-shadow: 0 0 10px ${e.theme.colors.primary.neonCarrot}30;
  `}

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    background: ${e=>e.theme.colors.surface.medium};
  }
`,sh=a.span`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
`,Tr=a.span`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 11px;
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
`,to=a.span`
  display: inline-block;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 10px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  color: ${e=>e.theme.colors.text.inverse};
  background: ${e=>e.$type==="boat"?e.theme.colors.primary.anakiwa:e.theme.colors.primary.neonCarrot};
  padding: 2px 10px;
  border-radius: ${e=>e.theme.borderRadius.pill};
`,ih=a.div`
  padding: ${e=>e.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  flex-shrink: 0;
  border-bottom: 2px solid ${e=>e.theme.colors.surface.medium};
`,lh=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,ch=a.h2`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  margin: 0;
  cursor: pointer;
  transition: color 200ms ease;

  &:hover {
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,dh=a.input`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 4px 12px;
  outline: none;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }
`,mh=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 12px;
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
`,ph=a.button`
  display: none;

  @media (max-width: ${Yt}) {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    color: ${e=>e.theme.colors.primary.anakiwa};
    font-family: ${e=>e.theme.typography.fontFamily.primary};
    font-size: ${e=>e.theme.typography.fontSize.sm};
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
    padding: 0;
    cursor: pointer;
    margin-bottom: ${e=>e.theme.spacing.sm};
  }
`,hh=a.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,uh=a.form`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.md};
  flex-shrink: 0;
`,gh=a.input`
  flex: 1;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 10px 14px;
  outline: none;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
    opacity: 0.6;
  }
`,xh=a.div`
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  border-top: 2px solid ${e=>e.theme.colors.surface.medium};
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
`,ro=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.extraWide};
  text-align: center;
  padding: 80px 24px;
  animation: ${Qp} 1.5s ease infinite;
`,Ar=a.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Er=a.label`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 11px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
`,fh=a.input`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 10px 14px;
  outline: none;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }
`,no=a.select`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 14px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  color: ${e=>e.theme.colors.text.light};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 10px 14px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  option {
    background: ${e=>e.theme.colors.surface.dark};
  }
`,yh=a.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.md};
`,bh=()=>{const[e,r]=Na(),n=e.get("list")||"",{data:o,isLoading:s}=up(),{data:i,isLoading:l}=gp(n),{data:c}=ue(),m=xp(),d=fp(),h=yp(),b=bp(),$=$p(),u=jp(),p=vp(),[f,x]=j.useState("all"),[g,y]=j.useState(!1),[v,w]=j.useState(!1),[F,k]=j.useState(!1),[I,z]=j.useState(""),[B,A]=j.useState(""),[M,q]=j.useState(""),[W,G]=j.useState("general"),[N,X]=j.useState(""),Le=!!n,oe=j.useRef(null),S=j.useRef(null);j.useEffect(()=>{!n&&o&&o.length>0&&r({list:o[0].id},{replace:!0})},[o,n,r]),j.useEffect(()=>{F&&oe.current&&(oe.current.focus(),oe.current.select())},[F]);const K=j.useMemo(()=>o?f==="all"?o:o.filter(R=>R.type===f):[],[o,f]),_=j.useMemo(()=>i!=null&&i.items?[...i.items].sort((R,le)=>R.completed===le.completed?0:R.completed?1:-1):[],[i]),ae=(i==null?void 0:i.items.filter(R=>R.completed).length)??0,se=(i==null?void 0:i.items.length)??0,be=se>0?ae/se*100:0,Ne=R=>{if(!R||!c)return"";const le=c.find(et=>et.id===R);return(le==null?void 0:le.name)??""},$e=R=>{r({list:R})},tr=()=>{i&&(z(i.title),k(!0))},sn=()=>{const R=I.trim();R&&R!==(i==null?void 0:i.title)&&d.mutate({id:n,data:{title:R}}),k(!1)},Sa=R=>{R.key==="Enter"?sn():R.key==="Escape"&&k(!1)},ka=R=>{var et;R.preventDefault();const le=B.trim();!le||!n||(b.mutate({listId:n,content:le}),A(""),(et=S.current)==null||et.focus())},Ta=R=>{$.mutate({itemId:R,listId:n})},Aa=(R,le)=>{u.mutate({itemId:R,listId:n,data:{content:le}})},Ea=R=>{p.mutate({itemId:R,listId:n})},Fa=()=>{h.mutate(n,{onSuccess:()=>{w(!1),r({},{replace:!0})}})},ln=()=>{const R=M.trim();R&&m.mutate({title:R,type:W,boatId:W==="boat"&&N||void 0},{onSuccess:le=>{y(!1),q(""),G("general"),X(""),r({list:le.id})}})},La=()=>{r({},{replace:!0})};return s?t.jsx(eo,{children:t.jsx(ro,{children:"Accessing Database..."})}):t.jsxs(eo,{children:[t.jsxs(Xp,{$hidden:Le,children:[t.jsxs(th,{children:[t.jsx(rh,{children:"Task Lists"}),t.jsx(V,{children:t.jsx(T,{variant:"secondary",size:"sm",onClick:()=>y(!0),children:"New List"})}),t.jsxs(nh,{value:f,onChange:R=>x(R.target.value),"aria-label":"Filter by type",children:[t.jsx("option",{value:"all",children:"All Types"}),t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat"})]})]}),t.jsx(oh,{children:K.length===0?t.jsx(Tr,{style:{textAlign:"center",padding:"24px 0"},children:o&&o.length>0?"No matching lists":"No lists yet"}):K.map((R,le)=>{const et=R.items.filter(Da=>Da.completed).length,za=R.items.length;return t.jsxs(ah,{$active:R.id===n,onClick:()=>$e(R.id),style:{animationDelay:`${le*40}ms`},"aria-current":R.id===n?"true":void 0,children:[t.jsx(sh,{children:R.title}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(to,{$type:R.type,children:R.type==="boat"?`Boat - ${Ne(R.boatId)}`:"General"}),t.jsxs(Tr,{children:[et,"/",za," done"]})]})]},R.id)})})]}),t.jsx(eh,{$hidden:!Le&&!n&&!1,children:n?l?t.jsx(ro,{children:"Loading List Data..."}):i?t.jsxs(t.Fragment,{children:[t.jsxs(ih,{children:[t.jsx(ph,{onClick:La,children:"← Back to Lists"}),t.jsxs(lh,{children:[F?t.jsx(dh,{ref:oe,value:I,onChange:R=>z(R.target.value),onKeyDown:Sa,onBlur:sn}):t.jsx(ch,{onClick:tr,children:i.title}),t.jsx(to,{$type:i.type,children:i.type==="boat"?`Boat - ${Ne(i.boatId)}`:"General"})]}),t.jsxs(mh,{children:[ae," of ",se," completed",se>0&&` — ${Math.round(be)}%`]}),t.jsx(Dp,{percentage:be})]}),t.jsxs(hh,{children:[t.jsx(V,{fallback:null,children:t.jsxs(uh,{onSubmit:ka,children:[t.jsx(gh,{ref:S,value:B,onChange:R=>A(R.target.value),placeholder:"Add new task...","aria-label":"New task content"}),t.jsx(T,{variant:"primary",size:"sm",type:"submit",onClick:()=>{},children:"Add"})]})}),_.length===0?t.jsx(Tr,{style:{textAlign:"center",padding:"24px 0"},children:"No items yet. Add your first task above."}):_.map(R=>t.jsx(Ap,{item:R,onToggle:Ta,onUpdate:Aa,onDelete:Ea},R.id))]}),t.jsx(xh,{children:t.jsx(V,{children:t.jsx(T,{variant:"danger",size:"sm",onClick:()=>w(!0),children:"Delete List"})})})]}):t.jsx(Zn,{title:"List Not Found",message:"The selected list could not be loaded. It may have been deleted."}):t.jsx(Zn,{title:o&&o.length>0?"Select a List":"Create Your First List",message:o&&o.length>0?"Choose a task list from the sidebar to view its items":"Get started by creating a new task list using the button on the left"})}),t.jsxs($a,{isOpen:g,onClose:()=>y(!1),title:"Create Task List",children:[t.jsxs(Ar,{children:[t.jsx(Er,{htmlFor:"create-title",children:"Title"}),t.jsx(fh,{id:"create-title",value:M,onChange:R=>q(R.target.value),placeholder:"Enter list title...",autoFocus:!0,onKeyDown:R=>{R.key==="Enter"&&ln()}})]}),t.jsxs(Ar,{children:[t.jsx(Er,{htmlFor:"create-type",children:"Type"}),t.jsxs(no,{id:"create-type",value:W,onChange:R=>G(R.target.value),children:[t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat"})]})]}),W==="boat"&&t.jsxs(Ar,{children:[t.jsx(Er,{htmlFor:"create-boat",children:"Vessel"}),t.jsxs(no,{id:"create-boat",value:N,onChange:R=>X(R.target.value),children:[t.jsx("option",{value:"",children:"Select a vessel..."}),c==null?void 0:c.map(R=>t.jsx("option",{value:R.id,children:R.name},R.id))]})]}),t.jsxs(yh,{children:[t.jsx(T,{variant:"secondary",size:"sm",onClick:()=>y(!1),children:"Cancel"}),t.jsx(T,{variant:"primary",size:"sm",onClick:ln,disabled:!M.trim()||W==="boat"&&!N,children:"Create"})]})]}),t.jsx(_p,{isOpen:v,onClose:()=>w(!1),onConfirm:Fa,title:"Delete Task List",message:`Permanently delete "${(i==null?void 0:i.title)??""}" and all its items? This action cannot be undone.`,confirmLabel:"Delete",cancelLabel:"Cancel",variant:"danger",isLoading:h.isPending})]})};function ja(e){return ie({queryKey:["maintenance-templates",e],queryFn:()=>P.getMaintenanceTemplates(e)})}function va(e,r){return ie({queryKey:["maintenance-template",e],queryFn:()=>P.getMaintenanceTemplate(e),enabled:(r==null?void 0:r.enabled)!==void 0?r.enabled:!!e})}function $h(){const e=Q();return Y({mutationFn:r=>P.createMaintenanceTemplate(r),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function jh(){const e=Q();return Y({mutationFn:({id:r,data:n})=>P.updateMaintenanceTemplate(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:["maintenance-template",n]}),e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function vh(){const e=Q();return Y({mutationFn:r=>P.deleteMaintenanceTemplate(r),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]}),e.invalidateQueries({queryKey:["maintenance-events"]})}})}function an(e){return ie({queryKey:["maintenance-events","upcoming",e],queryFn:()=>P.getUpcomingMaintenanceEvents(e)})}function wa(e){return ie({queryKey:["maintenance-events","completed",e],queryFn:()=>P.getCompletedMaintenanceEvents(e)})}function wh(e){return ie({queryKey:["maintenance-event",e],queryFn:()=>P.getMaintenanceEvent(e),enabled:!!e})}function Ch(){const e=Q();return Y({mutationFn:({id:r,data:n})=>P.completeMaintenanceEvent(r,n),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-events"]})}})}const Sh=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,kh=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Th=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Fr=a(T)`
  background-color: ${e=>e.active?e.theme.colors.primary.neonCarrot:e.theme.colors.primary.lilac};
  opacity: ${e=>e.active?1:.7};
`,Ah=a(D)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,oo=a.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ao=a(D)`
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.primary.lilac}20;
  }
`,so=a.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 10px;
`,io=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0;
  font-size: 18px;
  flex: 1;
`,lo=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,co=a.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"active":return e.theme.colors.primary.anakiwa;case"inactive":return e.theme.colors.text.secondary;case"due":return e.theme.colors.primary.neonCarrot;case"overdue":return"#ff4444";case"completed":return"#44ff44";default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,Eh=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`,Fh=a.select`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
`;function Lh(){const[e,r]=j.useState("templates"),[n,o]=j.useState(""),{data:s=[]}=ue(),{data:i=[],isLoading:l}=ja(n||void 0),{data:c=[],isLoading:m}=an(n||void 0),{data:d=[],isLoading:h}=wa(n||void 0),b=y=>{if(!y)return"One-time";const{type:v,interval:w}=y,F=w===1?v.slice(0,-1):v;return`Every ${w} ${F}`},$=y=>y?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(y):"N/A",u=y=>{if(!y)return"N/A";const v=Math.floor(y/60),w=y%60;return v>0?`${v}h ${w}m`:`${w}m`},p=y=>{if(y.completedAt)return"completed";const v=new Date(y.dueDate),w=new Date,F=Math.ceil((v.getTime()-w.getTime())/(1e3*60*60*24));return F<0?"overdue":F<=7?"due":"active"},f=()=>t.jsx(oo,{children:i.map(y=>{var v;return t.jsx(te,{to:`/maintenance/templates/${y.id}`,style:{textDecoration:"none"},children:t.jsxs(ao,{children:[t.jsxs(so,{children:[t.jsx(io,{children:y.title}),t.jsx(co,{status:y.isActive?"active":"inactive",children:y.isActive?"Active":"Inactive"})]}),t.jsxs(lo,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Boat:"})," ",((v=y.boat)==null?void 0:v.name)||"Unknown"]}),y.component&&t.jsxs("div",{children:[t.jsx("strong",{children:"Component:"})," ",y.component]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Recurrence:"})," ",b(y.recurrence)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Est. Cost:"})," ",$(y.estimatedCost)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Est. Time:"})," ",u(y.estimatedTime)]})]}),y.description&&t.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:y.description})]})},y.id)})}),x=(y,v=!1)=>t.jsx(oo,{children:y.map(w=>{var F,k,I,z;return t.jsx(te,{to:`/maintenance/events/${w.id}`,style:{textDecoration:"none"},children:t.jsxs(ao,{children:[t.jsxs(so,{children:[t.jsx(io,{children:((F=w.template)==null?void 0:F.title)||"Unknown Task"}),t.jsx(co,{status:p(w),children:p(w)})]}),t.jsxs(lo,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Boat:"})," ",((I=(k=w.template)==null?void 0:k.boat)==null?void 0:I.name)||"Unknown"]}),((z=w.template)==null?void 0:z.component)&&t.jsxs("div",{children:[t.jsx("strong",{children:"Component:"})," ",w.template.component]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Due Date:"})," ",new Date(w.dueDate).toLocaleDateString()]}),v&&w.completedAt&&t.jsxs("div",{children:[t.jsx("strong",{children:"Completed:"})," ",new Date(w.completedAt).toLocaleDateString()]}),w.actualCost&&t.jsxs("div",{children:[t.jsx("strong",{children:"Actual Cost:"})," ",$(w.actualCost)]}),w.actualTime&&t.jsxs("div",{children:[t.jsx("strong",{children:"Actual Time:"})," ",u(w.actualTime)]})]}),w.notes&&t.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:w.notes})]})},w.id)})}),g=l||m||h;return t.jsxs(Sh,{children:[t.jsxs(Ae,{children:[t.jsx(E,{label:"System Status",value:"OPERATIONAL"}),t.jsx(E,{label:"Active Templates",value:i.filter(y=>y.isActive).length.toString()}),t.jsx(E,{label:"Upcoming Events",value:c.length.toString()}),t.jsx(E,{label:"Overdue Events",value:c.filter(y=>p(y)==="overdue").length.toString()})]}),t.jsxs(kh,{children:[t.jsx(O,{children:"Maintenance Management"}),t.jsxs(Eh,{children:[t.jsxs(Fh,{value:n,onChange:y=>o(y.target.value),children:[t.jsx("option",{value:"",children:"All Boats"}),s.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))]}),t.jsx(V,{children:t.jsx(te,{to:"/maintenance/templates/new",children:t.jsx(T,{children:"New Template"})})})]}),t.jsxs(Th,{children:[t.jsxs(Fr,{active:e==="templates",onClick:()=>r("templates"),children:["Templates (",i.length,")"]}),t.jsxs(Fr,{active:e==="upcoming",onClick:()=>r("upcoming"),children:["Upcoming (",c.length,")"]}),t.jsxs(Fr,{active:e==="completed",onClick:()=>r("completed"),children:["Completed (",d.length,")"]})]}),t.jsx(Ah,{children:g?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#ff9966",fontSize:"18px"},children:"Loading maintenance data..."})}):t.jsxs(t.Fragment,{children:[e==="templates"&&f(),e==="upcoming"&&x(c),e==="completed"&&x(d,!0)]})})]})]})}const Lr=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,zr=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Dr=a(D)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,zh=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Dh=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Mr=a(D)`
  padding: 15px;
`,Mt=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,ze=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,De=a.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,Me=a.span`
  color: ${e=>e.theme.colors.text.primary};
`,Mh=a.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>e.active?e.theme.colors.primary.anakiwa:e.theme.colors.text.secondary};
  color: ${e=>e.theme.colors.background};
`,Ih=a.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
  margin-bottom: 20px;
  line-height: 1.5;
`,Rh=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,Nh=a.div`
  padding: 20px;
  text-align: center;
`;function Ph(){var h,b;const{id:e}=qe(),r=me(),{data:n,isLoading:o,error:s}=va(e),i=vh(),l=async()=>{if(!n)return;if(window.confirm(`Are you sure you want to delete the template "${n.title}"? This will also delete all future maintenance events for this template.`))try{await i.mutateAsync(n.id),r("/maintenance")}catch(u){console.error("Failed to delete template:",u),alert("Failed to delete template. Please try again.")}},c=$=>{if(!$)return"One-time";const{type:u,interval:p}=$,f=p===1?u.slice(0,-1):u;return`Every ${p} ${f}`},m=$=>$?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format($):"Not specified",d=$=>{if(!$)return"Not specified";const u=Math.floor($/60),p=$%60;return u>0?`${u}h ${p}m`:`${p}m`};return o?t.jsxs(Lr,{children:[t.jsx(Ae,{children:t.jsx(E,{label:"Status",value:"LOADING"})}),t.jsxs(zr,{children:[t.jsx(O,{children:"Maintenance Template"}),t.jsx(Dr,{children:t.jsx(Rh,{children:"Loading template details..."})})]})]}):s||!n?t.jsxs(Lr,{children:[t.jsx(Ae,{children:t.jsx(E,{label:"Status",value:"ERROR"})}),t.jsxs(zr,{children:[t.jsx(O,{children:"Maintenance Template"}),t.jsx(Dr,{children:t.jsxs(Nh,{children:[t.jsx(Ee,{type:"error",children:"Template not found or failed to load."}),t.jsx(te,{to:"/maintenance",children:t.jsx(T,{children:"Back to Maintenance"})})]})})]})]}):t.jsxs(Lr,{children:[t.jsxs(Ae,{children:[t.jsx(E,{label:"Template Status",value:n.isActive?"ACTIVE":"INACTIVE"}),t.jsx(E,{label:"Boat",value:((h=n.boat)==null?void 0:h.name)||"Unknown"}),t.jsx(E,{label:"Component",value:n.component||"General"}),t.jsx(E,{label:"Recurrence",value:c(n.recurrence)})]}),t.jsxs(zr,{children:[t.jsx(O,{children:n.title}),t.jsxs(zh,{children:[t.jsx(te,{to:"/maintenance",children:t.jsx(T,{children:"Back to List"})}),t.jsx(V,{children:t.jsx(te,{to:`/maintenance/templates/${n.id}/edit`,children:t.jsx(T,{children:"Edit Template"})})}),t.jsx(V,{children:t.jsx(T,{onClick:l,disabled:i.isPending,variant:"danger",children:i.isPending?"Deleting...":"Delete Template"})})]}),t.jsxs(Dr,{children:[n.description&&t.jsxs(Ih,{children:[t.jsx("strong",{children:"Description:"}),t.jsx("br",{}),n.description]}),t.jsxs(Dh,{children:[t.jsxs(Mr,{children:[t.jsx(Mt,{children:"Basic Information"}),t.jsxs(ze,{children:[t.jsx(De,{children:"Title:"}),t.jsx(Me,{children:n.title})]}),t.jsxs(ze,{children:[t.jsx(De,{children:"Boat:"}),t.jsx(Me,{children:((b=n.boat)==null?void 0:b.name)||"Unknown"})]}),t.jsxs(ze,{children:[t.jsx(De,{children:"Component:"}),t.jsx(Me,{children:n.component||"General"})]}),t.jsxs(ze,{children:[t.jsx(De,{children:"Status:"}),t.jsx(Me,{children:t.jsx(Mh,{active:n.isActive,children:n.isActive?"Active":"Inactive"})})]})]}),t.jsxs(Mr,{children:[t.jsx(Mt,{children:"Schedule & Estimates"}),t.jsxs(ze,{children:[t.jsx(De,{children:"Recurrence:"}),t.jsx(Me,{children:c(n.recurrence)})]}),t.jsxs(ze,{children:[t.jsx(De,{children:"Estimated Cost:"}),t.jsx(Me,{children:m(n.estimatedCost)})]}),t.jsxs(ze,{children:[t.jsx(De,{children:"Estimated Time:"}),t.jsx(Me,{children:d(n.estimatedTime)})]})]}),t.jsxs(Mr,{children:[t.jsx(Mt,{children:"Timestamps"}),t.jsxs(ze,{children:[t.jsx(De,{children:"Created:"}),t.jsx(Me,{children:new Date(n.createdAt).toLocaleString()})]}),t.jsxs(ze,{children:[t.jsx(De,{children:"Updated:"}),t.jsx(Me,{children:new Date(n.updatedAt).toLocaleString()})]})]})]}),t.jsxs("div",{style:{marginTop:"30px"},children:[t.jsx(Mt,{children:"Related Events"}),t.jsx("p",{style:{color:"#ccc",marginBottom:"20px"},children:"View upcoming and completed maintenance events generated from this template."}),t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(te,{to:`/maintenance?tab=upcoming&template=${n.id}`,children:t.jsx(T,{children:"View Upcoming Events"})}),t.jsx(te,{to:`/maintenance?tab=completed&template=${n.id}`,children:t.jsx(T,{children:"View Completed Events"})})]})]})]})]})]})}const Ir=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Rr=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Nr=a(D)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Bh=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Oh=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Pr=a(D)`
  padding: 15px;
`,It=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,Ce=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ge=a.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,Se=a.span`
  color: ${e=>e.theme.colors.text.primary};
`,Uh=a.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"completed":return"#44ff44";case"overdue":return"#ff4444";case"due":return e.theme.colors.primary.neonCarrot;case"upcoming":return e.theme.colors.primary.anakiwa;default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,qh=a.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${e=>e.theme.colors.background}40;
  padding: 20px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
`,Br=a.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,Or=a.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 120px;
`,mo=a.input`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;
`,Hh=a.textarea`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  flex: 1;
`,Wh=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,Kh=a.div`
  padding: 20px;
  text-align: center;
`,Vh=a.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.lilac};
  margin-bottom: 20px;
  line-height: 1.5;
`;function Gh(){var x,g,y,v,w,F,k,I,z,B,A;const{id:e}=qe(),[r,n]=j.useState(!1),[o,s]=j.useState({actualCost:"",actualTime:"",notes:""}),{data:i,isLoading:l,error:c}=wh(e),m=Ch(),d=M=>{if(M.completedAt)return"completed";const q=new Date(M.dueDate),W=new Date,G=Math.ceil((q.getTime()-W.getTime())/(1e3*60*60*24));return G<0?"overdue":G<=7?"due":"upcoming"},h=M=>M?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(M):"Not specified",b=M=>{if(!M)return"Not specified";const q=Math.floor(M/60),W=M%60;return q>0?`${q}h ${W}m`:`${W}m`},$=M=>{if(!M)return"One-time";const{type:q,interval:W}=M,G=W===1?q.slice(0,-1):q;return`Every ${W} ${G}`},u=async M=>{if(M.preventDefault(),!!i)try{const q={};o.actualCost&&(q.actualCost=parseFloat(o.actualCost)),o.actualTime&&(q.actualTime=parseInt(o.actualTime)),o.notes&&(q.notes=o.notes),await m.mutateAsync({id:i.id,data:q}),n(!1)}catch(q){console.error("Failed to complete event:",q),alert("Failed to complete maintenance event. Please try again.")}};if(l)return t.jsxs(Ir,{children:[t.jsx(Ae,{children:t.jsx(E,{label:"Status",value:"LOADING"})}),t.jsxs(Rr,{children:[t.jsx(O,{children:"Maintenance Event"}),t.jsx(Nr,{children:t.jsx(Wh,{children:"Loading event details..."})})]})]});if(c||!i)return t.jsxs(Ir,{children:[t.jsx(Ae,{children:t.jsx(E,{label:"Status",value:"ERROR"})}),t.jsxs(Rr,{children:[t.jsx(O,{children:"Maintenance Event"}),t.jsx(Nr,{children:t.jsxs(Kh,{children:[t.jsx(Ee,{type:"error",children:"Event not found or failed to load."}),t.jsx(te,{to:"/maintenance",children:t.jsx(T,{children:"Back to Maintenance"})})]})})]})]});const p=d(i),f=!!i.completedAt;return t.jsxs(Ir,{children:[t.jsxs(Ae,{children:[t.jsx(E,{label:"Event Status",value:p.toUpperCase()}),t.jsx(E,{label:"Boat",value:((g=(x=i.template)==null?void 0:x.boat)==null?void 0:g.name)||"Unknown"}),t.jsx(E,{label:"Due Date",value:new Date(i.dueDate).toLocaleDateString()}),f&&t.jsx(E,{label:"Completed",value:new Date(i.completedAt).toLocaleDateString()})]}),t.jsxs(Rr,{children:[t.jsx(O,{children:((y=i.template)==null?void 0:y.title)||"Maintenance Event"}),t.jsxs(Bh,{children:[t.jsx(te,{to:"/maintenance",children:t.jsx(T,{children:"Back to List"})}),i.template&&t.jsx(te,{to:`/maintenance/templates/${i.template.id}`,children:t.jsx(T,{children:"View Template"})}),!f&&t.jsx(V,{children:t.jsx(T,{onClick:()=>n(!r),variant:"accent",children:r?"Cancel Completion":"Complete Event"})})]}),t.jsxs(Nr,{children:[t.jsx("div",{style:{marginBottom:"20px"},children:t.jsx(Uh,{status:p,children:p.toUpperCase()})}),((v=i.template)==null?void 0:v.description)&&t.jsxs(Vh,{children:[t.jsx("strong",{children:"Template Description:"}),t.jsx("br",{}),i.template.description]}),r&&!f&&t.jsxs(qh,{onSubmit:u,children:[t.jsx(It,{children:"Complete Maintenance Event"}),t.jsxs(Br,{children:[t.jsx(Or,{children:"Actual Cost ($):"}),t.jsx(mo,{type:"number",step:"0.01",value:o.actualCost,onChange:M=>s(q=>({...q,actualCost:M.target.value})),placeholder:"Enter actual cost"})]}),t.jsxs(Br,{children:[t.jsx(Or,{children:"Actual Time (minutes):"}),t.jsx(mo,{type:"number",value:o.actualTime,onChange:M=>s(q=>({...q,actualTime:M.target.value})),placeholder:"Enter time in minutes"})]}),t.jsxs(Br,{children:[t.jsx(Or,{children:"Notes:"}),t.jsx(Hh,{value:o.notes,onChange:M=>s(q=>({...q,notes:M.target.value})),placeholder:"Enter completion notes, observations, or issues encountered"})]}),t.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[t.jsx(T,{type:"button",onClick:()=>n(!1),children:"Cancel"}),t.jsx(T,{type:"submit",disabled:m.isPending,variant:"accent",children:m.isPending?"Completing...":"Complete Event"})]})]}),t.jsxs(Oh,{children:[t.jsxs(Pr,{children:[t.jsx(It,{children:"Event Information"}),t.jsxs(Ce,{children:[t.jsx(ge,{children:"Title:"}),t.jsx(Se,{children:((w=i.template)==null?void 0:w.title)||"Unknown"})]}),t.jsxs(Ce,{children:[t.jsx(ge,{children:"Boat:"}),t.jsx(Se,{children:((k=(F=i.template)==null?void 0:F.boat)==null?void 0:k.name)||"Unknown"})]}),t.jsxs(Ce,{children:[t.jsx(ge,{children:"Component:"}),t.jsx(Se,{children:((I=i.template)==null?void 0:I.component)||"General"})]}),t.jsxs(Ce,{children:[t.jsx(ge,{children:"Due Date:"}),t.jsx(Se,{children:new Date(i.dueDate).toLocaleDateString()})]}),f&&t.jsxs(Ce,{children:[t.jsx(ge,{children:"Completed:"}),t.jsx(Se,{children:new Date(i.completedAt).toLocaleDateString()})]})]}),t.jsxs(Pr,{children:[t.jsx(It,{children:"Template Information"}),t.jsxs(Ce,{children:[t.jsx(ge,{children:"Recurrence:"}),t.jsx(Se,{children:$((z=i.template)==null?void 0:z.recurrence)})]}),t.jsxs(Ce,{children:[t.jsx(ge,{children:"Est. Cost:"}),t.jsx(Se,{children:h((B=i.template)==null?void 0:B.estimatedCost)})]}),t.jsxs(Ce,{children:[t.jsx(ge,{children:"Est. Time:"}),t.jsx(Se,{children:b((A=i.template)==null?void 0:A.estimatedTime)})]})]}),f&&t.jsxs(Pr,{children:[t.jsx(It,{children:"Completion Details"}),t.jsxs(Ce,{children:[t.jsx(ge,{children:"Actual Cost:"}),t.jsx(Se,{children:h(i.actualCost)})]}),t.jsxs(Ce,{children:[t.jsx(ge,{children:"Actual Time:"}),t.jsx(Se,{children:b(i.actualTime)})]}),i.notes&&t.jsxs("div",{style:{marginTop:"15px"},children:[t.jsx(ge,{style:{display:"block",marginBottom:"5px"},children:"Notes:"}),t.jsx("div",{style:{backgroundColor:"#333",padding:"10px",borderRadius:"4px",whiteSpace:"pre-wrap"},children:i.notes})]})]})]})]})]})]})}const Ur=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,qr=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Hr=a(D)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,_h=a.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Rt=a.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: ${e=>e.theme.colors.background}40;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
`,Nt=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 10px 0;
  font-size: 16px;
  text-transform: uppercase;
`,Ie=a.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`,Re=a.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 150px;
  padding-top: 8px;
`,bt=a.input`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.anakiwa};
  }
`,po=a.select`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.anakiwa};
  }
`,Qh=a.textarea`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.anakiwa};
  }
`,ho=a.input`
  margin-right: 8px;
`,Jh=a.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
`,Zh=a.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.colors.primary.neonCarrot}40;
`,Yh=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,Xh=a.div`
  padding: 20px;
  text-align: center;
`;function uo(){const{id:e}=qe(),r=me(),n=!!e,[o,s]=j.useState({boatId:"",title:"",description:"",component:"",hasRecurrence:!1,recurrenceType:"days",recurrenceInterval:"30",estimatedCost:"",estimatedTime:"",isActive:!0}),{data:i=[]}=ue(),{data:l,isLoading:c}=va(e,{enabled:n}),m=$h(),d=jh();j.useEffect(()=>{var u,p,f,x,g;l&&n&&s({boatId:l.boatId,title:l.title,description:l.description||"",component:l.component||"",hasRecurrence:!!l.recurrence,recurrenceType:((u=l.recurrence)==null?void 0:u.type)||"days",recurrenceInterval:((f=(p=l.recurrence)==null?void 0:p.interval)==null?void 0:f.toString())||"30",estimatedCost:((x=l.estimatedCost)==null?void 0:x.toString())||"",estimatedTime:((g=l.estimatedTime)==null?void 0:g.toString())||"",isActive:l.isActive})},[l,n]);const h=async u=>{if(u.preventDefault(),!o.boatId||!o.title){alert("Please fill in all required fields (Boat and Title)");return}try{const p={boatId:o.boatId,title:o.title,description:o.description||void 0,component:o.component||void 0,estimatedCost:o.estimatedCost?parseFloat(o.estimatedCost):void 0,estimatedTime:o.estimatedTime?parseInt(o.estimatedTime):void 0};o.hasRecurrence&&(p.recurrence={type:o.recurrenceType,interval:parseInt(o.recurrenceInterval)}),n?(p.isActive=o.isActive,await d.mutateAsync({id:e,data:p})):await m.mutateAsync(p),r("/maintenance")}catch(p){console.error("Failed to save template:",p),alert("Failed to save maintenance template. Please try again.")}},b=(u,p)=>{s(f=>({...f,[u]:p}))};if(n&&c)return t.jsxs(Ur,{children:[t.jsx(Ae,{children:t.jsx(E,{label:"Status",value:"LOADING"})}),t.jsxs(qr,{children:[t.jsx(O,{children:"Edit Maintenance Template"}),t.jsx(Hr,{children:t.jsx(Yh,{children:"Loading template..."})})]})]});if(n&&!l)return t.jsxs(Ur,{children:[t.jsx(Ae,{children:t.jsx(E,{label:"Status",value:"ERROR"})}),t.jsxs(qr,{children:[t.jsx(O,{children:"Edit Maintenance Template"}),t.jsx(Hr,{children:t.jsxs(Xh,{children:[t.jsx(Ee,{type:"error",children:"Template not found."}),t.jsx(te,{to:"/maintenance",children:t.jsx(T,{children:"Back to Maintenance"})})]})})]})]});const $=m.isPending||d.isPending;return t.jsxs(Ur,{children:[t.jsxs(Ae,{children:[t.jsx(E,{label:"Mode",value:n?"EDIT":"CREATE"}),t.jsx(E,{label:"Boats Available",value:i.length.toString()}),n&&l&&t.jsx(E,{label:"Template Status",value:l.isActive?"ACTIVE":"INACTIVE"})]}),t.jsxs(qr,{children:[t.jsx(O,{children:n?"Edit Maintenance Template":"Create Maintenance Template"}),t.jsx(Hr,{children:t.jsxs(_h,{onSubmit:h,children:[t.jsxs(Rt,{children:[t.jsx(Nt,{children:"Basic Information"}),t.jsxs(Ie,{children:[t.jsx(Re,{children:"Boat *"}),t.jsxs(po,{value:o.boatId,onChange:u=>b("boatId",u.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Select a boat"}),i.map(u=>t.jsx("option",{value:u.id,children:u.name},u.id))]})]}),t.jsxs(Ie,{children:[t.jsx(Re,{children:"Title *"}),t.jsx(bt,{type:"text",value:o.title,onChange:u=>b("title",u.target.value),placeholder:"e.g., Oil Change, Hull Cleaning, Engine Service",required:!0})]}),t.jsxs(Ie,{children:[t.jsx(Re,{children:"Component"}),t.jsx(bt,{type:"text",value:o.component,onChange:u=>b("component",u.target.value),placeholder:"e.g., Engine, Hull, Electrical, Plumbing"})]}),t.jsxs(Ie,{children:[t.jsx(Re,{children:"Description"}),t.jsx(Qh,{value:o.description,onChange:u=>b("description",u.target.value),placeholder:"Detailed description of the maintenance task, including any special instructions or requirements"})]})]}),t.jsxs(Rt,{children:[t.jsx(Nt,{children:"Schedule"}),t.jsxs(Ie,{children:[t.jsx(Re,{children:"Recurring Task"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(ho,{type:"checkbox",checked:o.hasRecurrence,onChange:u=>b("hasRecurrence",u.target.checked)}),t.jsx("span",{children:"This is a recurring maintenance task"})]})]}),o.hasRecurrence&&t.jsxs(Ie,{children:[t.jsx(Re,{children:"Recurrence"}),t.jsxs(Jh,{children:[t.jsx("span",{children:"Every"}),t.jsx(bt,{type:"number",min:"1",value:o.recurrenceInterval,onChange:u=>b("recurrenceInterval",u.target.value),style:{width:"80px",flex:"none"}}),t.jsxs(po,{value:o.recurrenceType,onChange:u=>b("recurrenceType",u.target.value),style:{flex:"none",minWidth:"120px"},children:[t.jsx("option",{value:"days",children:"Days"}),t.jsx("option",{value:"weeks",children:"Weeks"}),t.jsx("option",{value:"months",children:"Months"}),t.jsx("option",{value:"years",children:"Years"}),t.jsx("option",{value:"engine_hours",children:"Engine Hours"})]})]})]})]}),t.jsxs(Rt,{children:[t.jsx(Nt,{children:"Estimates"}),t.jsxs(Ie,{children:[t.jsx(Re,{children:"Estimated Cost ($)"}),t.jsx(bt,{type:"number",step:"0.01",min:"0",value:o.estimatedCost,onChange:u=>b("estimatedCost",u.target.value),placeholder:"0.00"})]}),t.jsxs(Ie,{children:[t.jsx(Re,{children:"Estimated Time (minutes)"}),t.jsx(bt,{type:"number",min:"0",value:o.estimatedTime,onChange:u=>b("estimatedTime",u.target.value),placeholder:"60"})]})]}),n&&t.jsxs(Rt,{children:[t.jsx(Nt,{children:"Status"}),t.jsxs(Ie,{children:[t.jsx(Re,{children:"Template Status"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(ho,{type:"checkbox",checked:o.isActive,onChange:u=>b("isActive",u.target.checked)}),t.jsx("span",{children:"Template is active (generates future events)"})]})]})]}),t.jsxs(Zh,{children:[t.jsx(te,{to:"/maintenance",children:t.jsx(T,{type:"button",children:"Cancel"})}),t.jsx(V,{children:t.jsx(T,{type:"submit",disabled:$,variant:"accent",children:$?"Saving...":n?"Update Template":"Create Template"})})]})]})})]})]})}const Ca="nautical_settings",eu=()=>{try{const e=localStorage.getItem(Ca);return e?JSON.parse(e):{}}catch{return{}}},tu=e=>{localStorage.setItem(Ca,JSON.stringify(e))},Xt=()=>{const[e,r]=j.useState(eu);j.useEffect(()=>{tu(e)},[e]);const n=j.useCallback(c=>e[c]||{enabled:!1},[e]),o=j.useCallback(c=>{var m;return((m=e[c])==null?void 0:m.enabled)??!1},[e]),s=j.useCallback(c=>{r(m=>{const d=m[c]||{enabled:!1};return{...m,[c]:{...d,enabled:!d.enabled}}})},[]),i=j.useCallback((c,m)=>{r(d=>{const h=d[c]||{enabled:!1};return{...d,[c]:{...h,apiKey:m}}})},[]),l=j.useCallback((c,m,d)=>{r(h=>{const b=h[c]||{enabled:!1};return{...h,[c]:{...b,options:{...b.options,[m]:d}}}})},[]);return{settings:e,getProviderConfig:n,isEnabled:o,toggleProvider:s,setApiKey:i,setProviderOption:l}},ru={openseamap:{id:"openseamap",url:"https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openseamap.org">OpenSeaMap</a> contributors',opacity:.7,maxZoom:18,type:"xyz"},"noaa-charts":{id:"noaa-charts",url:"https://tileservice.charts.noaa.gov/tiles/50000_1/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://charts.noaa.gov">NOAA</a>',opacity:.8,maxZoom:16,type:"xyz"},gebco:{id:"gebco",url:"https://wms.gebco.net/mapserv?",attribution:'&copy; <a href="https://www.gebco.net">GEBCO</a>',opacity:.5,maxZoom:12,type:"wms",wmsLayers:"GEBCO_LATEST",wmsFormat:"image/png"},windy:{id:"windy",url:"https://tiles.windy.com/tiles/v10.0/wind/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://windy.com">Windy</a>',opacity:.6,maxZoom:18,type:"xyz"},navionics:{id:"navionics",url:"https://backend.navionics.com/tile/{z}/{x}/{y}",attribution:'&copy; <a href="https://www.navionics.com">Navionics/Garmin</a>',opacity:.8,maxZoom:18,type:"xyz"}},er=[{id:"openseamap",name:"OpenSeaMap",tier:"free",type:"tile",description:"Nautical marks, buoys, lights, and other seamark overlays on OpenStreetMap.",website:"https://openseamap.org",pros:["Completely free","Community maintained","Global coverage"],cons:["Limited detail in some regions","Community-dependent updates"],requiresApiKey:!1},{id:"noaa-charts",name:"NOAA Charts",tier:"free",type:"tile",description:"Official US nautical charts from NOAA via WMTS tile service.",website:"https://charts.noaa.gov",pros:["Official government data","High accuracy for US waters","Free to use"],cons:["US waters only","Can be slow to update"],requiresApiKey:!1},{id:"gebco",name:"GEBCO Bathymetry",tier:"free",type:"tile",description:"Global bathymetry and ocean depth visualization via WMS.",website:"https://www.gebco.net",pros:["Global ocean depth data","Free to use","Scientific quality"],cons:["Lower resolution in some areas","WMS can be slower than tile sources"],requiresApiKey:!1},{id:"noaa-coops",name:"NOAA CO-OPS",tier:"free",type:"data",description:"Real-time and predicted tide and current data from US stations.",website:"https://tidesandcurrents.noaa.gov",pros:["Official NOAA data","Real-time observations","Tide predictions"],cons:["US stations only","Rate limited"],requiresApiKey:!1},{id:"aisstream",name:"AISstream.io",tier:"free",type:"data",description:"Real-time coastal AIS vessel tracking via WebSocket.",website:"https://aisstream.io",pros:["Real-time vessel positions","WebSocket streaming","Free tier available"],cons:["Requires free API key","Coastal coverage only"],requiresApiKey:!0,apiKeySignupUrl:"https://aisstream.io/authenticate"},{id:"open-meteo",name:"Open-Meteo Marine",tier:"free",type:"data",description:"Marine weather forecasts including wave height, swell, and wind.",website:"https://open-meteo.com",pros:["Completely free","No API key needed","Global coverage"],cons:["Forecast only, no observations","Less detail than paid alternatives"],requiresApiKey:!1},{id:"worldtides",name:"WorldTides",tier:"paid",type:"data",description:"Global tide predictions and observations with high accuracy.",website:"https://www.worldtides.info",pros:["Global coverage","High accuracy","Detailed predictions"],cons:["Paid per request","Credits expire"],requiresApiKey:!0,apiKeySignupUrl:"https://www.worldtides.info/developer",pricingNote:"$10 for 5,000 predictions"},{id:"stormglass",name:"Stormglass",tier:"paid",type:"data",description:"Premium marine weather data from multiple sources.",website:"https://stormglass.io",pros:["Multiple weather models","High accuracy","Free tier (10 req/day)"],cons:["Limited free tier","Can be expensive at scale"],requiresApiKey:!0,apiKeySignupUrl:"https://stormglass.io/register",pricingNote:"Free tier: 10 requests/day. Paid plans from $19/month."},{id:"windy",name:"Windy",tier:"paid",type:"tile",description:"Animated wind, wave, and weather tile overlays.",website:"https://api.windy.com",pros:["Beautiful visualizations","Animated overlays","Multiple data layers"],cons:["Expensive","API key required"],requiresApiKey:!0,apiKeySignupUrl:"https://api.windy.com/signup",pricingNote:"~$720/year"},{id:"navionics",name:"Navionics/Garmin",tier:"paid",type:"tile",description:"Premium nautical charts with detailed depth contours and marina info.",website:"https://www.navionics.com",pros:["Industry-leading charts","Detailed depth data","Marina information"],cons:["Expensive","Contact for pricing","Complex integration"],requiresApiKey:!0,apiKeySignupUrl:"https://developer.navionics.com",pricingNote:"Contact Garmin/Navionics for pricing"},{id:"marinetraffic",name:"MarineTraffic",tier:"paid",type:"data",description:"Global vessel tracking with satellite AIS coverage.",website:"https://www.marinetraffic.com",pros:["Global coverage","Satellite + terrestrial AIS","Historical data"],cons:["Credit-based pricing","Can be expensive"],requiresApiKey:!0,apiKeySignupUrl:"https://www.marinetraffic.com/en/ais-api-services",pricingNote:"Credit-based pricing, varies by endpoint"}],nu=er.filter(e=>e.tier==="free"),ou=er.filter(e=>e.tier==="paid"),au=()=>{const{isEnabled:e,getProviderConfig:r}=Xt();return{enabledTileLayers:j.useMemo(()=>er.filter(o=>o.type==="tile"&&e(o.id)).filter(o=>o.requiresApiKey?!!r(o.id).apiKey:!0).map(o=>ru[o.id]).filter(o=>!!o),[e,r])}},su="https://api.tidesandcurrents.noaa.gov/api/prod/datagetter",iu=async(e,r,n,o)=>{try{const s=await fetch("https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json?type=tidepredictions");return s.ok?((await s.json()).stations||[]).filter(c=>c.lat>=e&&c.lat<=n&&c.lng>=r&&c.lng<=o).map(c=>({id:c.id,name:c.name,latitude:c.lat,longitude:c.lng})):[]}catch{return[]}},lu=async e=>{try{const r=new Date,n=new Date(r);n.setDate(n.getDate()+1);const o=r.toISOString().slice(0,10).replace(/-/g,""),s=n.toISOString().slice(0,10).replace(/-/g,""),i=new URLSearchParams({begin_date:o,end_date:s,station:e,product:"predictions",datum:"MLLW",time_zone:"lst_ldt",units:"english",format:"json",interval:"hilo"}),l=await fetch(`${su}?${i}`);return l.ok?((await l.json()).predictions||[]).map(m=>({time:m.t,value:parseFloat(m.v),type:m.type})):[]}catch{return[]}};class cu{ws=null;vessels=new Map;callback=null;connect(r,n,o){this.callback=o,this.disconnect(),this.ws=new WebSocket("wss://stream.aisstream.io/v0/stream"),this.ws.onopen=()=>{var s;(s=this.ws)==null||s.send(JSON.stringify({APIKey:r,BoundingBoxes:[n]}))},this.ws.onmessage=s=>{var i,l,c;try{const m=JSON.parse(s.data);if((i=m.Message)!=null&&i.PositionReport){const d=m.Message.PositionReport,h=m.MetaData,b={mmsi:h.MMSI,name:((l=h.ShipName)==null?void 0:l.trim())||`MMSI ${h.MMSI}`,latitude:d.Latitude,longitude:d.Longitude,heading:d.TrueHeading??d.Cog??0,speed:d.Sog??0,shipType:h.ShipType??0,timestamp:Date.now()};this.vessels.set(b.mmsi,b);const $=Date.now()-6e5;for(const[u,p]of this.vessels)p.timestamp<$&&this.vessels.delete(u);(c=this.callback)==null||c.call(this,Array.from(this.vessels.values()))}}catch{}},this.ws.onerror=()=>{setTimeout(()=>{this.callback&&this.connect(r,n,this.callback)},5e3)},this.ws.onclose=()=>{}}disconnect(){var r;(r=this.ws)==null||r.close(),this.ws=null,this.vessels.clear()}getVessels(){return Array.from(this.vessels.values())}}const du=async(e,r)=>{var n,o,s;try{const i=new URLSearchParams({latitude:e.toString(),longitude:r.toString(),current:["wave_height","wave_period","wave_direction","wind_wave_height","wind_wave_period","swell_wave_height","swell_wave_period"].join(","),hourly:"temperature_2m,wind_speed_10m,wind_direction_10m",forecast_days:"1",timezone:"auto"}),l=await fetch(`https://marine-api.open-meteo.com/v1/marine?${i}`);if(!l.ok)return null;const c=await l.json(),m=c.current||{},d=c.hourly||{};return{latitude:c.latitude,longitude:c.longitude,waveHeight:m.wave_height??null,wavePeriod:m.wave_period??null,waveDirection:m.wave_direction??null,windSpeed:((n=d.wind_speed_10m)==null?void 0:n[0])??null,windDirection:((o=d.wind_direction_10m)==null?void 0:o[0])??null,swellHeight:m.swell_wave_height??null,swellPeriod:m.swell_wave_period??null,temperature:((s=d.temperature_2m)==null?void 0:s[0])??null,timestamp:m.time||new Date().toISOString()}}catch{return null}},mu=async(e,r,n)=>{try{const o=await fetch(`https://www.worldtides.info/api/v3?extremes&lat=${e}&lon=${r}&key=${n}`);return o.ok?((await o.json()).extremes||[]).map(i=>({date:i.date,height:i.height,type:i.type==="High"?"High":"Low"})):[]}catch{return[]}},pu=async(e,r,n)=>{var o;try{const s=["waveHeight","wavePeriod","waveDirection","windSpeed","windDirection","waterTemperature","airTemperature","visibility"].join(","),i=await fetch(`https://api.stormglass.io/v2/weather/point?lat=${e}&lng=${r}&params=${s}`,{headers:{Authorization:n}});if(!i.ok)return null;const c=(o=(await i.json()).hours)==null?void 0:o[0];if(!c)return null;const m=d=>{var h,b;return((h=c[d])==null?void 0:h.sg)??((b=c[d])==null?void 0:b.noaa)??null};return{waveHeight:m("waveHeight"),wavePeriod:m("wavePeriod"),waveDirection:m("waveDirection"),windSpeed:m("windSpeed"),windDirection:m("windDirection"),waterTemperature:m("waterTemperature"),airTemperature:m("airTemperature"),visibility:m("visibility"),timestamp:c.time}}catch{return null}},hu=async(e,r,n,o,s)=>{try{const i=await fetch(`https://services.marinetraffic.com/api/exportvessels/v:8/${s}/MINLAT:${e}/MAXLAT:${n}/MINLON:${r}/MAXLON:${o}/protocol:jsono`);if(!i.ok)return[];const l=await i.json();return(Array.isArray(l)?l:[]).map(c=>({mmsi:parseInt(c.MMSI),name:c.SHIPNAME||`MMSI ${c.MMSI}`,latitude:parseFloat(c.LAT),longitude:parseFloat(c.LON),speed:parseFloat(c.SPEED)/10,heading:parseInt(c.HEADING),shipType:c.SHIPTYPE||"",destination:c.DESTINATION||"",timestamp:c.TIMESTAMP||""}))}catch{return[]}},uu=e=>{const{isEnabled:r,getProviderConfig:n}=Xt(),[o,s]=j.useState([]),[i,l]=j.useState([]),[c,m]=j.useState([]),[d,h]=j.useState([]),[b,$]=j.useState(null),[u,p]=j.useState(null),[f]=j.useState(!1),x=j.useRef(null);return j.useEffect(()=>{if(!e||!r("noaa-coops")){m([]);return}const g=async()=>{const v=await iu(e.minLat,e.minLng,e.maxLat,e.maxLng),w=await Promise.all(v.slice(0,20).map(async F=>{const k=await lu(F.id);return{...F,predictions:k}}));m(w)};g();const y=setInterval(g,30*60*1e3);return()=>clearInterval(y)},[e==null?void 0:e.minLat,e==null?void 0:e.maxLat,e==null?void 0:e.minLng,e==null?void 0:e.maxLng,r]),j.useEffect(()=>{var v;const g=n("aisstream");if(!e||!r("aisstream")||!g.apiKey){(v=x.current)==null||v.disconnect(),x.current=null,s([]);return}const y=new cu;return x.current=y,y.connect(g.apiKey,[[e.minLat,e.minLng],[e.maxLat,e.maxLng]],w=>s(w)),()=>{y.disconnect(),x.current=null}},[e==null?void 0:e.minLat,e==null?void 0:e.maxLat,r,n]),j.useEffect(()=>{if(!e||!r("open-meteo")){$(null);return}const g=async()=>{const v=await du(e.centerLat,e.centerLng);$(v)};g();const y=setInterval(g,15*60*1e3);return()=>clearInterval(y)},[e==null?void 0:e.centerLat,e==null?void 0:e.centerLng,r]),j.useEffect(()=>{const g=n("worldtides");if(!e||!r("worldtides")||!g.apiKey){h([]);return}const y=async()=>{const w=await mu(e.centerLat,e.centerLng,g.apiKey);h(w)};y();const v=setInterval(y,30*60*1e3);return()=>clearInterval(v)},[e==null?void 0:e.centerLat,e==null?void 0:e.centerLng,r,n]),j.useEffect(()=>{const g=n("stormglass");if(!e||!r("stormglass")||!g.apiKey){p(null);return}const y=async()=>{const w=await pu(e.centerLat,e.centerLng,g.apiKey);p(w)};y();const v=setInterval(y,15*60*1e3);return()=>clearInterval(v)},[e==null?void 0:e.centerLat,e==null?void 0:e.centerLng,r,n]),j.useEffect(()=>{const g=n("marinetraffic");if(!e||!r("marinetraffic")||!g.apiKey){l([]);return}const y=async()=>{const w=await hu(e.minLat,e.minLng,e.maxLat,e.maxLng,g.apiKey);l(w)};y();const v=setInterval(y,5*60*1e3);return()=>clearInterval(v)},[e==null?void 0:e.minLat,e==null?void 0:e.maxLat,r,n]),{vessels:o,marineTrafficVessels:i,tideStations:c,worldTides:d,weather:b,stormglassWeather:u,isLoading:f}},Oe={all:["locations"],lists:()=>[...Oe.all,"list"],list:e=>[...Oe.lists(),{filters:e}],details:()=>[...Oe.all,"detail"],detail:e=>[...Oe.details(),e],nearby:(e,r,n)=>[...Oe.all,"nearby",{lat:e,lng:r,radius:n}]},gu=e=>ie({queryKey:Oe.list(e||{}),queryFn:()=>P.getMarkedLocations(e)}),xu=()=>{const e=Q();return Y({mutationFn:r=>P.createMarkedLocation(r),onSuccess:()=>{e.invalidateQueries({queryKey:Oe.lists()})}})},fu=()=>{const e=Q();return Y({mutationFn:r=>P.deleteMarkedLocation(r),onSuccess:()=>{e.invalidateQueries({queryKey:Oe.lists()})}})},yu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",bu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",$u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete ke.Icon.Default.prototype._getIconUrl;ke.Icon.Default.mergeOptions({iconRetinaUrl:bu,iconUrl:yu,shadowUrl:$u});const ju=a.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px); // Account for header and footer
  gap: ${e=>e.theme.spacing.md};
`,vu=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,wu=a.div`
  position: relative;
  flex: 1;
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  min-height: 600px;
`,Cu=a(D)`
  flex: 1;
  
  .leaflet-container {
    height: 100%;
    min-height: 500px;
    background-color: ${e=>e.theme.colors.surface.dark};
  }
  
  .leaflet-control-container {
    .leaflet-control {
      background-color: ${e=>e.theme.colors.surface.medium};
      border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};

      a {
        color: ${e=>e.theme.colors.text.primary};
        background-color: ${e=>e.theme.colors.surface.medium};

        &:hover {
          background-color: ${e=>e.theme.colors.primary.neonCarrot};
          color: ${e=>e.theme.colors.text.inverse};
        }
      }
    }
  }
`,Su=a(D)`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,ku=a.div`
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Tu=a.div`
  padding: ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.sm};
  border-left: 3px solid ${e=>e.theme.colors.primary.anakiwa};

  .location-name {
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    color: ${e=>e.theme.colors.primary.anakiwa};
    margin-bottom: ${e=>e.theme.spacing.xs};
  }
  
  .location-category {
    font-size: ${e=>e.theme.typography.fontSize.sm};
    color: ${e=>e.theme.colors.text.secondary};
    text-transform: uppercase;
    margin-bottom: ${e=>e.theme.spacing.xs};
  }
  
  .location-notes {
    font-size: ${e=>e.theme.typography.fontSize.sm};
    color: ${e=>e.theme.colors.text.muted};
  }
  
  .location-actions {
    margin-top: ${e=>e.theme.spacing.sm};
    display: flex;
    gap: ${e=>e.theme.spacing.sm};
  }
`,Au=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  
  input, select, textarea {
    padding: ${e=>e.theme.spacing.sm};
    background-color: ${e=>e.theme.colors.surface.medium};
    border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
    border-radius: ${e=>e.theme.borderRadius.sm};
    color: ${e=>e.theme.colors.text.primary};
    font-family: ${e=>e.theme.typography.fontFamily.primary};

    &:focus {
      outline: none;
      border-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary.neonCarrot}20;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 60px;
  }
`,Eu=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  flex-wrap: wrap;
  align-items: center;
  
  label {
    color: ${e=>e.theme.colors.text.secondary};
    font-size: ${e=>e.theme.typography.fontSize.sm};
    text-transform: uppercase;
  }
  
  select {
    padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
    background-color: ${e=>e.theme.colors.surface.medium};
    border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
    border-radius: ${e=>e.theme.borderRadius.sm};
    color: ${e=>e.theme.colors.text.primary};
    font-family: ${e=>e.theme.typography.fontFamily.primary};
  }
`,Fu=e=>{const r={fishing:"#66FF66",marina:"#6688CC",anchorage:"#FFFF66",hazard:"#FF6666",other:"#CC99CC"};return new ke.DivIcon({html:`<div style="
      background-color: ${r[e]||r.other};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 10px;
      color: #000;
    ">${e.charAt(0).toUpperCase()}</div>`,className:"custom-marker",iconSize:[20,20],iconAnchor:[10,10]})},Lu=({onMapClick:e})=>(Mo({click:r=>{e(r.latlng.lat,r.latlng.lng)}}),null),zu=({onBoundsChange:e})=>{const r=Mo({moveend:()=>{const n=r.getBounds(),o=r.getCenter();e({minLat:n.getSouth(),minLng:n.getWest(),maxLat:n.getNorth(),maxLng:n.getEast(),centerLat:o.lat,centerLng:o.lng})},zoomend:()=>{const n=r.getBounds(),o=r.getCenter();e({minLat:n.getSouth(),minLng:n.getWest(),maxLat:n.getNorth(),maxLng:n.getEast(),centerLat:o.lat,centerLng:o.lng})}});return null},Du=()=>{const[e,r]=j.useState(!0),[n,o]=j.useState(!0),[s,i]=j.useState(""),[l,c]=j.useState(!1),[m,d]=j.useState({name:"",category:"other",notes:"",latitude:0,longitude:0}),[h,b]=j.useState(null),$=j.useRef(null),{enabledTileLayers:u}=au(),[p,f]=j.useState(null),x=uu(p),{isEnabled:g}=Xt(),[y,v]=j.useState(new Set),w=j.useCallback(S=>{v(K=>{const _=new Set(K);return _.has(S)?_.delete(S):_.add(S),_})},[]),F=j.useCallback(S=>g(S)&&!y.has(S),[g,y]),k=er.filter(S=>g(S.id)),{data:I=[],isLoading:z}=He(),{data:B=[],isLoading:A}=gu(s?{category:s}:void 0),M=xu(),q=fu(),W=Ue.useMemo(()=>{if(I.length>0){const S=I.flatMap(K=>K.gpsPoints);if(S.length>0){const K=S.reduce((ae,se)=>ae+se.latitude,0)/S.length,_=S.reduce((ae,se)=>ae+se.longitude,0)/S.length;return[K,_]}}return[37.7749,-122.4194]},[I]),G=j.useCallback((S,K)=>{l&&d(_=>({..._,latitude:S,longitude:K}))},[l]),N=async()=>{if(!(!m.name||!m.latitude||!m.longitude))try{await M.mutateAsync({name:m.name,latitude:m.latitude,longitude:m.longitude,category:m.category,notes:m.notes||void 0}),d({name:"",category:"other",notes:"",latitude:0,longitude:0}),c(!1)}catch(S){console.error("Failed to create location:",S)}},X=async S=>{if(window.confirm("Are you sure you want to delete this location?"))try{await q.mutateAsync(S),b(null)}catch(K){console.error("Failed to delete location:",K)}},Le=()=>e?I.map(S=>{var se,be,Ne;if(S.gpsPoints.length<2)return null;const K=S.gpsPoints.map($e=>[$e.latitude,$e.longitude]),_=K[0],ae=K[K.length-1];return t.jsxs(Ue.Fragment,{children:[t.jsx(zo,{positions:K,color:"#FF9966",weight:3,opacity:.7}),t.jsx(xe,{position:_,children:t.jsx(fe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Trip Start"}),t.jsx("br",{}),new Date(S.startTime).toLocaleString(),t.jsx("br",{}),"Boat: ",S.boatId]})})}),t.jsx(xe,{position:ae,children:t.jsx(fe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Trip End"}),t.jsx("br",{}),new Date(S.endTime).toLocaleString(),t.jsx("br",{}),"Duration: ",Math.round((((se=S.statistics)==null?void 0:se.durationSeconds)||0)/60)," minutes",t.jsx("br",{}),"Distance: ",((((be=S.statistics)==null?void 0:be.distanceMeters)||0)/1e3).toFixed(2)," km"]})})}),(((Ne=S.statistics)==null?void 0:Ne.stopPoints)||[]).map(($e,tr)=>t.jsx(xe,{position:[$e.latitude,$e.longitude],icon:new ke.DivIcon({html:`<div style="
                  background-color: #FFFF66;
                  width: 16px;
                  height: 16px;
                  border-radius: 50%;
                  border: 2px solid #000;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: bold;
                  font-size: 8px;
                  color: #000;
                ">S</div>`,className:"stop-marker",iconSize:[16,16],iconAnchor:[8,8]}),children:t.jsx(fe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Stop Point"}),t.jsx("br",{}),"Duration: ",Math.round($e.durationSeconds/60)," minutes",t.jsx("br",{}),"From: ",new Date($e.startTime).toLocaleString(),t.jsx("br",{}),"To: ",new Date($e.endTime).toLocaleString()]})})},`${S.id}-stop-${tr}`))]},S.id)}):null,oe=()=>n?B.map(S=>t.jsx(xe,{position:[S.latitude,S.longitude],icon:Fu(S.category),eventHandlers:{click:()=>b(S)},children:t.jsx(fe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:S.name}),t.jsx("br",{}),"Category: ",S.category,t.jsx("br",{}),S.notes&&t.jsxs(t.Fragment,{children:["Notes: ",S.notes,t.jsx("br",{})]}),S.tags.length>0&&t.jsxs(t.Fragment,{children:["Tags: ",S.tags.join(", "),t.jsx("br",{})]}),t.jsxs("small",{children:["Created: ",new Date(S.createdAt).toLocaleDateString()]})]})})},S.id)):null;return t.jsxs(ju,{children:[t.jsx(O,{children:"Navigation Chart"}),t.jsx(vu,{children:t.jsxs(Eu,{children:[t.jsx("label",{children:"Display:"}),t.jsx(T,{variant:e?"primary":"secondary",size:"sm",onClick:()=>r(!e),children:"Trip Routes"}),t.jsx(T,{variant:n?"primary":"secondary",size:"sm",onClick:()=>o(!n),children:"Locations"}),k.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("label",{children:"Overlays:"}),k.map(S=>t.jsx(T,{variant:y.has(S.id)?"secondary":"primary",size:"sm",onClick:()=>w(S.id),children:S.name},S.id))]}),t.jsx("label",{children:"Category:"}),t.jsxs("select",{value:s,onChange:S=>i(S.target.value),children:[t.jsx("option",{value:"",children:"All Categories"}),t.jsx("option",{value:"fishing",children:"Fishing"}),t.jsx("option",{value:"marina",children:"Marina"}),t.jsx("option",{value:"anchorage",children:"Anchorage"}),t.jsx("option",{value:"hazard",children:"Hazard"}),t.jsx("option",{value:"other",children:"Other"})]})]})}),t.jsxs(wu,{children:[t.jsxs(Cu,{title:"Chart Display",padding:"none",children:[t.jsxs(Do,{center:W,zoom:10,style:{height:"100%",width:"100%"},ref:$,children:[t.jsx(Gr,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),u.filter(S=>!y.has(S.id)).map(S=>S.type==="wms"?t.jsx(Ua,{url:S.url,layers:S.wmsLayers||"",format:S.wmsFormat||"image/png",transparent:!0,opacity:S.opacity,attribution:S.attribution},S.id):t.jsx(Gr,{url:S.url,opacity:S.opacity,maxZoom:S.maxZoom,attribution:S.attribution},S.id)),t.jsx(zu,{onBoundsChange:f}),t.jsx(Lu,{onMapClick:G}),Le(),oe(),F("aisstream")&&x.vessels.map(S=>t.jsx(xe,{position:[S.latitude,S.longitude],icon:new ke.DivIcon({html:`<div style="
                    width: 0; height: 0;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-bottom: 14px solid #00FFFF;
                    transform: rotate(${S.heading}deg);
                  "></div>`,className:"vessel-marker",iconSize:[12,14],iconAnchor:[6,7]}),children:t.jsx(fe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:S.name}),t.jsx("br",{}),"MMSI: ",S.mmsi,t.jsx("br",{}),"Speed: ",S.speed.toFixed(1)," kts",t.jsx("br",{}),"Heading: ",S.heading,"°"]})})},`ais-${S.mmsi}`)),F("marinetraffic")&&x.marineTrafficVessels.map(S=>t.jsx(xe,{position:[S.latitude,S.longitude],icon:new ke.DivIcon({html:`<div style="
                    width: 0; height: 0;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-bottom: 14px solid #FF00FF;
                    transform: rotate(${S.heading}deg);
                  "></div>`,className:"vessel-marker",iconSize:[12,14],iconAnchor:[6,7]}),children:t.jsx(fe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:S.name}),t.jsx("br",{}),"MMSI: ",S.mmsi,t.jsx("br",{}),"Speed: ",S.speed.toFixed(1)," kts",t.jsx("br",{}),"Destination: ",S.destination]})})},`mt-${S.mmsi}`)),F("noaa-coops")&&x.tideStations.map(S=>t.jsx(xe,{position:[S.latitude,S.longitude],icon:new ke.DivIcon({html:`<div style="
                    background: #0066FF;
                    color: white;
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 10px;
                    font-weight: bold;
                    border: 2px solid white;
                  ">T</div>`,className:"tide-marker",iconSize:[22,22],iconAnchor:[11,11]}),children:t.jsx(fe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:S.name}),t.jsx("br",{}),"Station: ",S.id,t.jsx("br",{}),S.predictions.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("strong",{children:"Predictions:"}),t.jsx("br",{}),S.predictions.slice(0,6).map((K,_)=>t.jsxs("span",{children:[K.type==="H"?"▲ High":"▼ Low",": ",K.value.toFixed(1)," ft at ",K.time,t.jsx("br",{})]},_))]})]})})},`tide-${S.id}`)),l&&m.latitude&&m.longitude&&t.jsx(xe,{position:[m.latitude,m.longitude],children:t.jsx(fe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"New Location"}),t.jsx("br",{}),'Click "Save Location" to confirm']})})})]}),(F("open-meteo")||F("stormglass"))&&x.weather&&t.jsxs("div",{style:{position:"absolute",bottom:"10px",left:"10px",background:"rgba(0,0,0,0.85)",color:"#99CCFF",padding:"8px 12px",borderRadius:"4px",border:"1px solid #336699",fontSize:"12px",fontFamily:"monospace",zIndex:1e3,lineHeight:"1.5"},children:[t.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px",color:"#FFCC99"},children:"MARINE WEATHER"}),x.weather.waveHeight!=null&&t.jsxs("div",{children:["Waves: ",x.weather.waveHeight,"m"]}),x.weather.windSpeed!=null&&t.jsxs("div",{children:["Wind: ",x.weather.windSpeed," km/h"]}),x.weather.swellHeight!=null&&t.jsxs("div",{children:["Swell: ",x.weather.swellHeight,"m"]}),x.weather.temperature!=null&&t.jsxs("div",{children:["Temp: ",x.weather.temperature,"°C"]}),F("stormglass")&&x.stormglassWeather&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{fontWeight:"bold",marginTop:"4px",color:"#CC99CC"},children:"STORMGLASS"}),x.stormglassWeather.waveHeight!=null&&t.jsxs("div",{children:["Waves: ",x.stormglassWeather.waveHeight,"m"]}),x.stormglassWeather.visibility!=null&&t.jsxs("div",{children:["Vis: ",x.stormglassWeather.visibility,"km"]}),x.stormglassWeather.waterTemperature!=null&&t.jsxs("div",{children:["Water: ",x.stormglassWeather.waterTemperature,"°C"]})]})]})]}),t.jsx(Su,{title:"Location Manager",variant:"secondary",children:l?t.jsxs(Au,{children:[t.jsx("h3",{children:"Add New Location"}),t.jsx("p",{children:"Click on the map to set coordinates, then fill in the details below."}),t.jsx("input",{type:"text",placeholder:"Location Name",value:m.name,onChange:S=>d(K=>({...K,name:S.target.value}))}),t.jsxs("select",{value:m.category,onChange:S=>d(K=>({...K,category:S.target.value})),children:[t.jsx("option",{value:"fishing",children:"Fishing Spot"}),t.jsx("option",{value:"marina",children:"Marina"}),t.jsx("option",{value:"anchorage",children:"Anchorage"}),t.jsx("option",{value:"hazard",children:"Hazard"}),t.jsx("option",{value:"other",children:"Other"})]}),t.jsx("textarea",{placeholder:"Notes (optional)",value:m.notes,onChange:S=>d(K=>({...K,notes:S.target.value}))}),m.latitude&&m.longitude&&t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Coordinates"}),t.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333",fontFamily:"monospace"},children:["Lat: ",m.latitude.toFixed(6),t.jsx("br",{}),"Lng: ",m.longitude.toFixed(6)]})]}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(V,{children:t.jsx(T,{onClick:N,disabled:!m.name||!m.latitude||!m.longitude||M.isPending,children:"Save Location"})}),t.jsx(T,{variant:"secondary",onClick:()=>{c(!1),d({name:"",category:"other",notes:"",latitude:0,longitude:0})},children:"Cancel"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(V,{children:t.jsx(T,{onClick:()=>c(!0),disabled:M.isPending,children:"Add New Location"})}),h&&t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Selected Location"}),t.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333"},children:[t.jsx("strong",{children:h.name}),t.jsx("br",{}),"Category: ",h.category,t.jsx("br",{}),"Coordinates: ",h.latitude.toFixed(6),", ",h.longitude.toFixed(6),t.jsx("br",{}),h.notes&&t.jsxs(t.Fragment,{children:["Notes: ",h.notes,t.jsx("br",{})]}),h.tags.length>0&&t.jsxs(t.Fragment,{children:["Tags: ",h.tags.join(", "),t.jsx("br",{})]}),t.jsx("div",{style:{marginTop:"8px"},children:t.jsx(V,{children:t.jsx(T,{size:"sm",variant:"accent",onClick:()=>X(h.id),disabled:q.isPending,children:"Delete"})})})]})]}),t.jsx(ku,{children:B.map(S=>t.jsxs(Tu,{children:[t.jsx("div",{className:"location-name",children:S.name}),t.jsx("div",{className:"location-category",children:S.category}),S.notes&&t.jsx("div",{className:"location-notes",children:S.notes}),t.jsx("div",{className:"location-actions",children:t.jsx(T,{size:"sm",onClick:()=>{b(S),$.current&&$.current.setView([S.latitude,S.longitude],15)},children:"View"})})]},S.id))})]})})]}),(z||A)&&t.jsx(E,{label:"System Status",value:"Loading chart data...",valueColor:"anakiwa"})]})},Pt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,go=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Mu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Iu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,Ru=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,Nu=a.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Pu=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,Bu=()=>{const{data:e,isLoading:r,error:n}=ma();if(r)return t.jsxs(Pt,{children:[t.jsx(O,{children:"Captain's License Progress"}),t.jsx(Ru,{children:t.jsx(E,{label:"System Status",value:"Loading Progress Data...",valueColor:"neonCarrot",size:"lg"})})]});if(n)return t.jsxs(Pt,{children:[t.jsx(O,{children:"Captain's License Progress"}),t.jsx(Nu,{children:t.jsx(Ee,{type:"error",children:"Error loading license progress data. Please check your connection and try again."})})]});if(!e)return t.jsxs(Pt,{children:[t.jsx(O,{children:"Captain's License Progress"}),t.jsx(D,{title:"No Data",variant:"secondary",children:t.jsx(Pu,{children:"No license progress data available yet. Log some trips to start tracking."})})]});const{totalDays:o,daysInLast3Years:s,totalHours:i,daysRemaining360:l,daysRemaining90In3Years:c,estimatedCompletion360:m}=e,d=o>=360,h=s>=90,b=d&&h;return t.jsxs(Pt,{children:[t.jsx(O,{children:"Captain's License Progress"}),b&&t.jsx(Ee,{type:"success",children:"Congratulations! You have met all requirements for OUPV (6-pack) Captain's License eligibility."}),t.jsx(D,{title:"Current Sea Time Statistics",variant:"primary",children:t.jsxs(go,{children:[t.jsx(E,{label:"Total Sea Time Days",value:o,valueColor:"neonCarrot",size:"lg"}),t.jsx(E,{label:"Days (Last 3 Years)",value:s,valueColor:"lilac",size:"lg"}),t.jsx(E,{label:"Total Hours",value:i.toFixed(1),unit:"hrs",valueColor:"anakiwa",size:"lg"}),t.jsx(E,{label:"Average Hours/Day",value:o>0?(i/o).toFixed(1):"0.0",unit:"hrs",valueColor:"success",size:"lg"})]})}),t.jsxs(Mu,{children:[t.jsx(D,{title:"360-Day Total Requirement",variant:"primary",children:t.jsx(Kt,{title:"Total Sea Time Days",current:o,target:360,unit:"days",color:"neonCarrot",size:"lg",showPercentage:!0})}),t.jsx(D,{title:"90-Day Recent Requirement",variant:"secondary",children:t.jsx(Kt,{title:"Days in Last 3 Years",current:s,target:90,unit:"days",color:"lilac",size:"lg",showPercentage:!0})})]}),t.jsx(D,{title:"Completion Estimates",variant:"accent",children:t.jsxs(Iu,{children:[t.jsx(ir,{title:"360-Day Goal",estimatedDate:d?void 0:m??void 0,daysRemaining:d?void 0:l,isComplete:d,color:"neonCarrot",size:"md"}),t.jsx(ir,{title:"90-Day (3 Years) Goal",daysRemaining:h?void 0:c,isComplete:h,color:"lilac",size:"md"}),!b&&t.jsx(ir,{title:"License Eligibility",estimatedDate:m??void 0,isComplete:b,color:"anakiwa",size:"md"})]})}),t.jsx(D,{title:"OUPV (6-Pack) License Requirements",variant:"secondary",children:t.jsxs(go,{children:[t.jsx(E,{label:"Total Sea Time",value:"360 Days",valueColor:"neonCarrot",size:"md"}),t.jsx(E,{label:"Recent Experience",value:"90 Days in 3 Years",valueColor:"lilac",size:"md"}),t.jsx(E,{label:"Minimum Per Day",value:"4 Hours",valueColor:"anakiwa",size:"md"}),t.jsx(E,{label:"Additional Requirements",value:"Medical, Drug Test, Course",valueColor:"success",size:"md"})]})})]})},Wr=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,xo=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Ou=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Uu=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  flex-wrap: wrap;
`,qu=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,Hu=a.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,fo=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Bt=a.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.sm};
  align-items: center;

  &.header {
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: ${e=>e.theme.typography.fontSize.sm};
  }
  
  &.overdue {
    border-color: ${e=>e.theme.colors.status.error};
    background-color: rgba(255, 102, 102, 0.1);
  }
  
  &.due-soon {
    border-color: ${e=>e.theme.colors.status.warning};
    background-color: rgba(255, 255, 102, 0.1);
  }
`,ee=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  
  &.text {
    font-family: ${e=>e.theme.typography.fontFamily.primary};
  }
  
  &.status {
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
  }
`,Wu=()=>{const[e,r]=Ue.useState(""),{data:n,isLoading:o}=ue(),{data:s,isLoading:i,error:l}=ja(e||void 0),{data:c,isLoading:m,error:d}=an(e||void 0),{data:h,isLoading:b,error:$}=wa(e||void 0),u=o||i||m||b,p=l||d||$,f=j.useMemo(()=>{if(!s||!c||!h)return{totalTemplates:0,activeTemplates:0,upcomingCount:0,overdueCount:0,completedThisMonth:0,totalCostThisMonth:0,averageCost:0,completionRate:0};const g=new Date,y=new Date(g.getFullYear(),g.getMonth(),1),v=c.filter(A=>new Date(A.dueDate)<g).length,w=h.filter(A=>A.completedAt&&new Date(A.completedAt)>=y),F=w.reduce((A,M)=>A+(M.actualCost||0),0),k=h.filter(A=>A.actualCost&&A.actualCost>0),I=k.length>0?k.reduce((A,M)=>A+(M.actualCost||0),0)/k.length:0,z=c.length+h.length,B=z>0?h.length/z*100:0;return{totalTemplates:s.length,activeTemplates:s.filter(A=>A.isActive).length,upcomingCount:c.length,overdueCount:v,completedThisMonth:w.length,totalCostThisMonth:F,averageCost:I,completionRate:B}},[s,c,h]),x=j.useMemo(()=>{if(!c)return[];const g=new Date,y=new Date(g.getTime()+7*24*60*60*1e3);return c.map(v=>{const w=new Date(v.dueDate);let F="upcoming",k="Upcoming";return w<g?(F="overdue",k="Overdue"):w<=y&&(F="due-soon",k="Due Soon"),{...v,status:F,statusText:k,daysUntilDue:Math.ceil((w.getTime()-g.getTime())/(1e3*60*60*24))}}).sort((v,w)=>new Date(v.dueDate).getTime()-new Date(w.dueDate).getTime())},[c]);return u?t.jsxs(Wr,{children:[t.jsx(O,{children:"Maintenance Reports"}),t.jsx(qu,{children:t.jsx(E,{label:"System Status",value:"Loading Maintenance Data...",valueColor:"neonCarrot",size:"lg"})})]}):p?t.jsxs(Wr,{children:[t.jsx(O,{children:"Maintenance Reports"}),t.jsx(Hu,{children:t.jsx(Ee,{type:"error",children:"Error loading maintenance data. Please check your connection and try again."})})]}):t.jsxs(Wr,{children:[t.jsx(O,{children:"Maintenance Reports"}),t.jsxs(Uu,{children:[t.jsx(T,{variant:e===""?"primary":"secondary",onClick:()=>r(""),children:"All Boats"}),n==null?void 0:n.map(g=>t.jsx(T,{variant:e===g.id?"primary":"secondary",onClick:()=>r(g.id),children:g.name},g.id))]}),t.jsx(D,{title:"Maintenance Overview",variant:"primary",children:t.jsxs(xo,{children:[t.jsx(E,{label:"Active Templates",value:f.activeTemplates,valueColor:"neonCarrot",size:"lg"}),t.jsx(E,{label:"Upcoming Tasks",value:f.upcomingCount,valueColor:"anakiwa",size:"lg"}),t.jsx(E,{label:"Overdue Tasks",value:f.overdueCount,valueColor:f.overdueCount>0?"neonCarrot":"success",size:"lg"}),t.jsx(E,{label:"Completed This Month",value:f.completedThisMonth,valueColor:"success",size:"lg"})]})}),t.jsx(D,{title:"Cost Analysis",variant:"secondary",children:t.jsxs(xo,{children:[t.jsx(E,{label:"Cost This Month",value:`$${f.totalCostThisMonth.toFixed(2)}`,valueColor:"lilac",size:"lg"}),t.jsx(E,{label:"Average Cost Per Task",value:`$${f.averageCost.toFixed(2)}`,valueColor:"lilac",size:"lg"}),t.jsx(E,{label:"Completion Rate",value:`${f.completionRate.toFixed(1)}%`,valueColor:"anakiwa",size:"lg"})]})}),t.jsxs(Ou,{children:[t.jsx(D,{title:"Template Status",variant:"primary",children:t.jsx(Kt,{title:"Active Templates",current:f.activeTemplates,target:f.totalTemplates,unit:"templates",color:"neonCarrot",size:"md",showPercentage:!0})}),t.jsx(D,{title:"Task Completion",variant:"secondary",children:t.jsx(Kt,{title:"Completion Rate",current:f.completionRate,target:100,unit:"%",color:"lilac",size:"md",showPercentage:!1})})]}),x.length>0&&t.jsx(D,{title:"Upcoming Maintenance Tasks",variant:"accent",children:t.jsxs(fo,{children:[t.jsxs(Bt,{className:"header",children:[t.jsx(ee,{children:"Task"}),t.jsx(ee,{children:"Boat"}),t.jsx(ee,{children:"Due Date"}),t.jsx(ee,{children:"Days Until Due"}),t.jsx(ee,{children:"Status"})]}),x.map(g=>{var y,v,w,F;return t.jsxs(Bt,{className:g.status,children:[t.jsxs(ee,{className:"text",children:[((y=g.template)==null?void 0:y.title)||"Unknown Task",((v=g.template)==null?void 0:v.component)&&t.jsx("div",{style:{fontSize:"0.8em",color:"#999"},children:g.template.component})]}),t.jsx(ee,{className:"text",children:((F=(w=g.template)==null?void 0:w.boat)==null?void 0:F.name)||"Unknown"}),t.jsx(ee,{children:new Date(g.dueDate).toLocaleDateString()}),t.jsx(ee,{children:g.daysUntilDue>0?`${g.daysUntilDue} days`:`${Math.abs(g.daysUntilDue)} days ago`}),t.jsx(ee,{className:"status",children:g.statusText})]},g.id)})]})}),h&&h.length>0&&t.jsx(D,{title:"Recent Completions",variant:"secondary",children:t.jsxs(fo,{children:[t.jsxs(Bt,{className:"header",children:[t.jsx(ee,{children:"Task"}),t.jsx(ee,{children:"Boat"}),t.jsx(ee,{children:"Completed"}),t.jsx(ee,{children:"Cost"}),t.jsx(ee,{children:"Time"})]}),h.slice(0,10).map(g=>{var y,v,w;return t.jsxs(Bt,{children:[t.jsx(ee,{className:"text",children:((y=g.template)==null?void 0:y.title)||"Unknown Task"}),t.jsx(ee,{className:"text",children:((w=(v=g.template)==null?void 0:v.boat)==null?void 0:w.name)||"Unknown"}),t.jsx(ee,{children:g.completedAt?new Date(g.completedAt).toLocaleDateString():"N/A"}),t.jsx(ee,{children:g.actualCost?`$${g.actualCost.toFixed(2)}`:"N/A"}),t.jsx(ee,{children:g.actualTime?`${g.actualTime}h`:"N/A"})]},g.id)})]})})]})},Ku=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Vu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,yo=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.lg};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.lg};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.tanoi};
    background-color: ${e=>e.theme.colors.surface.medium};
  }

  &.secondary {
    border-color: ${e=>e.theme.colors.primary.lilac};

    &:hover {
      border-color: ${e=>e.theme.colors.primary.lilac};
    }
  }
`,bo=a.h2`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  .secondary & {
    color: ${e=>e.theme.colors.primary.lilac};
  }
`,$o=a.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin: 0;
`,jo=a.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Be=a.li`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.sm};

  &::before {
    content: '▶';
    color: ${e=>e.theme.colors.primary.neonCarrot};
    margin-right: ${e=>e.theme.spacing.sm};
    font-size: 0.8em;
  }

  .secondary &::before {
    color: ${e=>e.theme.colors.primary.lilac};
  }
`,Gu=()=>{const e=me();return t.jsxs(Ku,{children:[t.jsx(O,{children:"System Reports"}),t.jsx(D,{title:"Available Reports",variant:"primary",children:t.jsxs(Vu,{children:[t.jsxs(yo,{onClick:()=>e("/reports/license"),children:[t.jsx(bo,{children:"Captain's License Progress"}),t.jsx($o,{children:"Track your progress toward OUPV (6-pack) Captain's License requirements"}),t.jsxs(jo,{children:[t.jsx(Be,{children:"360-day total sea time tracking"}),t.jsx(Be,{children:"90-day recent experience monitoring"}),t.jsx(Be,{children:"Progress charts and completion estimates"}),t.jsx(Be,{children:"Detailed statistics and requirements"})]})]}),t.jsxs(yo,{className:"secondary",onClick:()=>e("/reports/maintenance"),children:[t.jsx(bo,{children:"Maintenance Reports"}),t.jsx($o,{children:"Comprehensive maintenance tracking and cost analysis for all vessels"}),t.jsxs(jo,{children:[t.jsx(Be,{children:"Upcoming and overdue task tracking"}),t.jsx(Be,{children:"Cost analysis and completion rates"}),t.jsx(Be,{children:"Template status and activity monitoring"}),t.jsx(Be,{children:"Recent completion history"})]})]})]})}),t.jsx(D,{title:"Quick Access",variant:"accent",children:t.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[t.jsx(T,{variant:"primary",onClick:()=>e("/reports/license"),children:"License Progress"}),t.jsx(T,{variant:"secondary",onClick:()=>e("/reports/maintenance"),children:"Maintenance Reports"})]})})]})},_u=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,Qu=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,$t=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.md};
`,jt=a.label`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,vt=a.input`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,vo=a.div`
  padding: ${e=>e.theme.spacing.sm};
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  ${e=>{switch(e.$type){case"success":return`
          background: ${e.theme.colors.status.success}20;
          color: ${e.theme.colors.status.success};
          border: 1px solid ${e.theme.colors.status.success};
        `;case"error":return`
          background: ${e.theme.colors.status.error}20;
          color: ${e.theme.colors.status.error};
          border: 1px solid ${e.theme.colors.status.error};
        `;case"info":return`
          background: ${e.theme.colors.primary.anakiwa}20;
          color: ${e.theme.colors.primary.anakiwa};
          border: 1px solid ${e.theme.colors.primary.anakiwa};
        `}}}
`,Ju=a.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
`,Kr=a.div`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Vr=a.div`
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,Zu=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,Yu=a.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
  cursor: pointer;
`,Xu=a.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${e=>e.$checked?e.theme.colors.status.success:e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.$checked?e.theme.colors.status.success:e.theme.colors.primary.anakiwa};
  border-radius: 13px;
  transition: 0.3s;

  &::before {
    content: '';
    position: absolute;
    height: 18px;
    width: 18px;
    left: ${e=>e.$checked?"22px":"2px"};
    bottom: 2px;
    background-color: ${e=>e.theme.colors.text.primary};
    border-radius: 50%;
    transition: 0.3s;
  }
`,eg=a.span`
  color: ${e=>e.$active?e.theme.colors.status.success:e.theme.colors.text.secondary};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,tg=()=>{const{user:e,logout:r,isReadOnly:n}=Zt(),o=me(),[s,i]=j.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[l,c]=j.useState(!1),[m,d]=j.useState(null),[h,b]=j.useState({exists:!1,enabled:!1,username:""}),[$,u]=j.useState({username:"",password:""}),[p,f]=j.useState(!1),[x,g]=j.useState(null);Ue.useEffect(()=>{n||y()},[n]);const y=async()=>{try{const z=await P.getViewerSettings();b(z),u(B=>({...B,username:z.username||""}))}catch{}},v=async()=>{f(!0);try{if(h.exists){const z=await P.updateViewerSettings({enabled:!h.enabled});b(z),g({type:"success",text:`Viewer account ${z.enabled?"enabled":"disabled"}`})}else{if(!$.username||!$.password){g({type:"error",text:"Username and password required to create viewer account"}),f(!1);return}const z=await P.updateViewerSettings({username:$.username,password:$.password,enabled:!0});b(z),u(B=>({...B,password:""})),g({type:"success",text:"Viewer account created and enabled"})}}catch(z){g({type:"error",text:z.message||"Failed to update viewer settings"})}finally{f(!1)}},w=async z=>{if(z.preventDefault(),!$.username){g({type:"error",text:"Username is required"});return}if(!h.exists&&!$.password){g({type:"error",text:"Password is required for new viewer account"});return}if($.password&&$.password.length<8){g({type:"error",text:"Password must be at least 8 characters"});return}f(!0),g({type:"info",text:"Saving..."});try{const B={username:$.username};$.password&&(B.password=$.password);const A=await P.updateViewerSettings(B);b(A),u(M=>({...M,password:""})),g({type:"success",text:"Viewer account updated"})}catch(B){g({type:"error",text:B.message||"Failed to save viewer settings"})}finally{f(!1)}},F=z=>B=>{i(A=>({...A,[z]:B.target.value})),m&&d(null)},k=async z=>{if(z.preventDefault(),!s.currentPassword||!s.newPassword||!s.confirmPassword){d({type:"error",text:"All password fields are required"});return}if(s.newPassword!==s.confirmPassword){d({type:"error",text:"New passwords do not match"});return}if(s.newPassword.length<8){d({type:"error",text:"New password must be at least 8 characters"});return}c(!0),d({type:"info",text:"Changing password..."});try{await P.changePassword(s.currentPassword,s.newPassword),d({type:"success",text:"Password changed successfully. You will be logged out."}),i({currentPassword:"",newPassword:"",confirmPassword:""}),setTimeout(()=>{r()},2e3)}catch(B){d({type:"error",text:B.message||"Failed to change password"})}finally{c(!1)}},I=async()=>{window.confirm("Are you sure you want to log out?")&&await r()};return t.jsxs(_u,{children:[t.jsx(O,{children:"System Settings"}),t.jsxs(Qu,{children:[t.jsxs(D,{title:"User Account",children:[t.jsxs(Ju,{children:[t.jsx(Kr,{children:"Username:"}),t.jsx(Vr,{children:(e==null?void 0:e.username)||"Unknown"}),t.jsx(Kr,{children:"Account Created:"}),t.jsx(Vr,{children:e!=null&&e.createdAt?new Date(e.createdAt).toLocaleDateString():"Unknown"}),t.jsx(Kr,{children:"Last Updated:"}),t.jsx(Vr,{children:e!=null&&e.updatedAt?new Date(e.updatedAt).toLocaleDateString():"Unknown"})]}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(T,{onClick:I,variant:"secondary",children:"Logout"})})]}),t.jsx(V,{fallback:t.jsx(D,{title:"Change Password",children:t.jsx("div",{style:{padding:"20px",color:"#6688CC",textAlign:"center",textTransform:"uppercase",letterSpacing:"1px"},children:"Password changes are not available for viewer accounts."})}),children:t.jsx(D,{title:"Change Password",children:t.jsxs("form",{onSubmit:k,children:[t.jsxs($t,{children:[t.jsx(jt,{htmlFor:"currentPassword",children:"Current Password"}),t.jsx(vt,{id:"currentPassword",type:"password",value:s.currentPassword,onChange:F("currentPassword"),disabled:l,autoComplete:"current-password"})]}),t.jsxs($t,{children:[t.jsx(jt,{htmlFor:"newPassword",children:"New Password"}),t.jsx(vt,{id:"newPassword",type:"password",value:s.newPassword,onChange:F("newPassword"),disabled:l,autoComplete:"new-password",minLength:8})]}),t.jsxs($t,{children:[t.jsx(jt,{htmlFor:"confirmPassword",children:"Confirm New Password"}),t.jsx(vt,{id:"confirmPassword",type:"password",value:s.confirmPassword,onChange:F("confirmPassword"),disabled:l,autoComplete:"new-password",minLength:8})]}),m&&t.jsx(vo,{$type:m.type,children:m.text}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(T,{type:"submit",disabled:l,children:l?"Changing Password...":"Change Password"})})]})})})]}),!n&&t.jsxs(D,{title:"Viewer Account",children:[t.jsx("div",{style:{marginBottom:"20px"},children:t.jsxs(Zu,{children:[t.jsx(Yu,{onClick:v,children:t.jsx(Xu,{$checked:h.enabled})}),t.jsx(eg,{$active:h.enabled,children:h.enabled?"Enabled":"Disabled"}),p&&t.jsx("span",{style:{color:"#9999cc",fontSize:"12px"},children:"Updating..."})]})}),t.jsxs("form",{onSubmit:w,children:[t.jsxs($t,{children:[t.jsx(jt,{htmlFor:"viewerUsername",children:"Viewer Username"}),t.jsx(vt,{id:"viewerUsername",type:"text",value:$.username,onChange:z=>{u(B=>({...B,username:z.target.value})),g(null)},disabled:p,placeholder:"viewer"})]}),t.jsxs($t,{children:[t.jsx(jt,{htmlFor:"viewerPassword",children:h.exists?"New Password (leave blank to keep)":"Password"}),t.jsx(vt,{id:"viewerPassword",type:"password",value:$.password,onChange:z=>{u(B=>({...B,password:z.target.value})),g(null)},disabled:p,minLength:8,placeholder:h.exists?"********":"Min 8 characters"})]}),x&&t.jsx(vo,{$type:x.type,children:x.text}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(T,{type:"submit",disabled:p,children:h.exists?"Update Viewer":"Create Viewer"})})]})]}),t.jsxs(D,{title:"System Management",children:[t.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:[t.jsx(T,{onClick:()=>o("/settings/backup"),variant:"secondary",children:"Backup Manager"}),t.jsx(T,{onClick:()=>o("/settings/nautical"),variant:"secondary",children:"Nautical Data"})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[t.jsx(E,{label:"Interface Version",value:"LCARS v1.0",valueColor:"anakiwa"}),t.jsx(E,{label:"System Status",value:"Operational",valueColor:"success"}),t.jsx(E,{label:"API Endpoint",value:"/api/v1",valueColor:"anakiwa"}),t.jsx(E,{label:"Authentication",value:"JWT Token-based",valueColor:"lilac"})]})]})]})},rg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,ng=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,wo=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,og=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.sm};
  overflow: hidden;
`,ag=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing.md};
  cursor: pointer;

  &:hover {
    background: ${e=>e.theme.colors.surface.medium};
  }
`,sg=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  flex: 1;
`,ig=a.span`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,lg=a.span`
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: ${e=>e.$tier==="free"?e.theme.colors.status.success+"30":e.theme.colors.primary.neonCarrot+"30"};
  color: ${e=>e.$tier==="free"?e.theme.colors.status.success:e.theme.colors.primary.neonCarrot};
  border: 1px solid ${e=>e.$tier==="free"?e.theme.colors.status.success:e.theme.colors.primary.neonCarrot};
`,cg=a.span`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,dg=a.div`
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background: ${e=>e.$active?e.theme.colors.status.success:e.theme.colors.surface.medium};
  border: 2px solid ${e=>e.$active?e.theme.colors.status.success:e.theme.colors.text.muted};
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${e=>e.theme.colors.text.primary};
    top: 1px;
    left: ${e=>e.$active?"24px":"1px"};
    transition: left 0.2s ease;
  }
`,mg=a.div`
  padding: 0 ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.md};
  border-top: 1px solid ${e=>e.theme.colors.surface.medium};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,pg=a.p`
  color: ${e=>e.theme.colors.text.secondary};
  margin: ${e=>e.theme.spacing.sm} 0 0;
  line-height: 1.5;
`,hg=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.md};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Co=a.div``,So=a.div`
  color: ${e=>e.$type==="pro"?e.theme.colors.status.success:e.theme.colors.primary.neonCarrot};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
  margin-bottom: ${e=>e.theme.spacing.xs};
`,ko=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  padding: 2px 0;

  &::before {
    content: '${e=>e.$type==="pro"?"+":"-"}';
    color: ${e=>e.$type==="pro"?e.theme.colors.status.success:e.theme.colors.primary.neonCarrot};
    margin-right: ${e=>e.theme.spacing.xs};
    font-weight: bold;
  }
`,ug=a.input`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,gg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,xg=a.label`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,fg=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
`,To=a.a`
  color: ${e=>e.theme.colors.primary.anakiwa};
  text-decoration: none;
  font-size: ${e=>e.theme.typography.fontSize.sm};

  &:hover {
    color: ${e=>e.theme.colors.primary.tanoi};
    text-decoration: underline;
  }
`,yg=a.div`
  color: ${e=>e.theme.colors.primary.lilac};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-style: italic;
`,Ao=({provider:e,enabled:r,apiKey:n,onToggle:o,onApiKeyChange:s})=>{const[i,l]=j.useState(!1);return t.jsxs(og,{$expanded:i,children:[t.jsxs(ag,{onClick:()=>l(!i),children:[t.jsxs(sg,{children:[t.jsx(ig,{children:e.name}),t.jsx(lg,{$tier:e.tier,children:e.tier}),!i&&t.jsx(cg,{children:e.description.split(".")[0]})]}),t.jsx(dg,{$active:r,onClick:c=>{c.stopPropagation(),o()}})]}),i&&t.jsxs(mg,{children:[t.jsx(pg,{children:e.description}),t.jsxs(hg,{children:[t.jsxs(Co,{children:[t.jsx(So,{$type:"pro",children:"Advantages"}),e.pros.map((c,m)=>t.jsx(ko,{$type:"pro",children:c},m))]}),t.jsxs(Co,{children:[t.jsx(So,{$type:"con",children:"Limitations"}),e.cons.map((c,m)=>t.jsx(ko,{$type:"con",children:c},m))]})]}),e.requiresApiKey&&t.jsxs(gg,{children:[t.jsx(xg,{children:"API Key"}),t.jsx(ug,{type:"password",placeholder:"Enter API key...",value:n||"",onChange:c=>s(c.target.value),onClick:c=>c.stopPropagation()}),e.apiKeySignupUrl&&t.jsx(To,{href:e.apiKeySignupUrl,target:"_blank",rel:"noopener noreferrer",children:"Get an API key →"})]}),t.jsxs(fg,{children:[t.jsx(To,{href:e.website,target:"_blank",rel:"noopener noreferrer",children:"Visit website →"}),e.pricingNote&&t.jsx(yg,{children:e.pricingNote})]})]})]})},bg=()=>{const e=me(),{isEnabled:r,getProviderConfig:n,toggleProvider:o,setApiKey:s}=Xt();return t.jsxs(rg,{children:[t.jsx(ng,{children:t.jsx(T,{variant:"secondary",size:"sm",onClick:()=>e("/settings"),children:"← Settings"})}),t.jsx(O,{children:"Nautical Data Providers"}),t.jsx(D,{title:"Free Providers",variant:"primary",children:t.jsx(wo,{children:nu.map(i=>t.jsx(Ao,{provider:i,enabled:r(i.id),apiKey:n(i.id).apiKey,onToggle:()=>o(i.id),onApiKeyChange:l=>s(i.id,l)},i.id))})}),t.jsx(D,{title:"Paid Providers",variant:"secondary",children:t.jsx(wo,{children:ou.map(i=>t.jsx(Ao,{provider:i,enabled:r(i.id),apiKey:n(i.id).apiKey,onToggle:()=>o(i.id),onApiKeyChange:l=>s(i.id,l)},i.id))})})]})},$g=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,jg=a.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,vg=a.div`
  padding: ${e=>e.theme.spacing.sm};
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${e=>e.theme.spacing.md};
  
  ${e=>{switch(e.$type){case"success":return`
          background: ${e.theme.colors.status.success}20;
          color: ${e.theme.colors.status.success};
          border: 1px solid ${e.theme.colors.status.success};
        `;case"error":return`
          background: ${e.theme.colors.status.error}20;
          color: ${e.theme.colors.status.error};
          border: 1px solid ${e.theme.colors.status.error};
        `;case"info":return`
          background: ${e.theme.colors.primary.anakiwa}20;
          color: ${e.theme.colors.primary.anakiwa};
          border: 1px solid ${e.theme.colors.primary.anakiwa};
        `}}}
`,wg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Cg=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,Sg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,kg=a.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,Tg=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,Ag=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
`,Eg=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,Fg=()=>{const[e,r]=j.useState([]),[n,o]=j.useState(!0),[s,i]=j.useState(!1),[l,c]=j.useState(null);j.useEffect(()=>{m()},[]);const m=async()=>{try{o(!0);const u=await P.getBackups();r(u)}catch(u){c({type:"error",text:u.message||"Failed to load backups"})}finally{o(!1)}},d=async()=>{if(!s){i(!0),c({type:"info",text:"Creating backup... This may take a few minutes."});try{const u=await P.createBackup();c({type:"success",text:`Backup created successfully: ${u.filename}`}),await m()}catch(u){c({type:"error",text:u.message||"Failed to create backup"})}finally{i(!1)}}},h=async u=>{try{c({type:"info",text:`Downloading ${u.filename}...`});const p=await P.downloadBackup(u.id),f=window.URL.createObjectURL(p),x=document.createElement("a");x.href=f,x.download=u.filename,document.body.appendChild(x),x.click(),document.body.removeChild(x),window.URL.revokeObjectURL(f),c({type:"success",text:`Download started: ${u.filename}`})}catch(p){c({type:"error",text:p.message||"Failed to download backup"})}},b=u=>{if(u===0)return"0 Bytes";const p=1024,f=["Bytes","KB","MB","GB"],x=Math.floor(Math.log(u)/Math.log(p));return parseFloat((u/Math.pow(p,x)).toFixed(2))+" "+f[x]},$=u=>new Date(u).toLocaleString();return t.jsxs($g,{children:[t.jsx(O,{children:"Database Backup Manager"}),l&&t.jsx(vg,{$type:l.type,children:l.text}),t.jsxs(jg,{children:[t.jsxs(D,{title:"Backup Operations",children:[t.jsxs("div",{style:{marginBottom:"20px"},children:[t.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:t.jsx(V,{children:t.jsx(T,{onClick:d,disabled:s,children:s?"Creating Backup...":"Create Manual Backup"})})}),t.jsx("div",{style:{width:"100%"},children:t.jsx(T,{onClick:m,disabled:n,variant:"secondary",children:n?"Refreshing...":"Refresh List"})})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[t.jsx(E,{label:"Total Backups",value:e.length.toString(),valueColor:"anakiwa"}),t.jsx(E,{label:"Total Size",value:b(e.reduce((u,p)=>u+p.size,0)),valueColor:"lilac"}),t.jsx(E,{label:"Latest Backup",value:e.length>0?$(e[0].createdAt):"None",valueColor:"neonCarrot"})]}),t.jsxs("div",{style:{marginTop:"20px",padding:"10px",background:"rgba(255, 153, 102, 0.1)",border:"1px solid #FF9966"},children:[t.jsx("strong",{style:{color:"#FF9966"},children:"Important:"}),t.jsxs("ul",{style:{margin:"10px 0",paddingLeft:"20px",color:"#CCCCCC"},children:[t.jsx("li",{children:"Backups include both database records and uploaded photos"}),t.jsx("li",{children:"Large backups may take several minutes to create"}),t.jsx("li",{children:"Store backups in a secure location outside the system"}),t.jsx("li",{children:"Test backup restoration procedures regularly"})]})]})]}),t.jsx(D,{title:"Available Backups",children:n?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#6688CC"},children:"Loading backups..."})}):e.length===0?t.jsx(Eg,{children:"No backups available. Create your first backup to get started."}):t.jsx(wg,{children:e.map(u=>t.jsxs(Cg,{children:[t.jsxs(Sg,{children:[t.jsx(kg,{children:u.filename}),t.jsxs(Tg,{children:[t.jsxs("span",{children:["Created: ",$(u.createdAt)]}),t.jsxs("span",{children:["Size: ",b(u.size)]})]})]}),t.jsx(Ag,{children:t.jsx(T,{onClick:()=>h(u),variant:"secondary",size:"sm",children:"Download"})})]},u.id))})})]})]})},Lg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,zg=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Dg=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,Mg=a.h2`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  min-width: 200px;
  text-align: center;
`,Ig=a.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${e=>e.theme.colors.primary.anakiwa};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
`,Rg=a.div`
  background-color: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Ng=a.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  min-height: 120px;
  padding: ${e=>e.theme.spacing.xs};
  display: flex;
  flex-direction: column;
  position: relative;
  
  ${e=>!e.$isCurrentMonth&&`
    background-color: ${e.theme.colors.surface.medium};
    opacity: 0.5;
  `}
  
  ${e=>e.$isToday&&`
    border: 2px solid ${e.theme.colors.primary.neonCarrot};
    background-color: ${e.theme.colors.primary.neonCarrot}10;
  `}

  ${e=>e.$hasEvents&&`
    border-left: 4px solid ${e.theme.colors.primary.lilac};
  `}
`,Pg=a.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.$isToday?e.theme.colors.primary.neonCarrot:e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Bg=a.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,Eo=a.div`
  background-color: ${e=>e.$type==="trip"?e.theme.colors.primary.anakiwa:e.theme.colors.primary.lilac};
  color: ${e=>e.theme.colors.text.primary};
  padding: 2px 4px;
  font-size: 10px;
  border-radius: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,Og=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Ug=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Fo=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  
  &::before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: ${e=>e.$color};
    border-radius: 2px;
  }
`,qg=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Hg=["January","February","March","April","May","June","July","August","September","October","November","December"],Wg=()=>{const[e,r]=j.useState(new Date),[n,o]=j.useState([]),{data:s,isLoading:i}=He(),{data:l,isLoading:c}=an();j.useEffect(()=>{const g=[];s&&s.forEach(y=>{var v;g.push({id:`trip-${y.id}`,title:`Trip: ${((v=y.boat)==null?void 0:v.name)||"Unknown Boat"}`,date:new Date(y.startTime),type:"trip",data:y})}),l&&l.forEach(y=>{var v;g.push({id:`maintenance-${y.id}`,title:`Maintenance: ${((v=y.template)==null?void 0:v.title)||"Unknown Task"}`,date:new Date(y.dueDate),type:"maintenance",data:y})}),o(g)},[s,l]);const m=g=>{r(y=>{const v=new Date(y);return g==="prev"?v.setMonth(y.getMonth()-1):v.setMonth(y.getMonth()+1),v})},d=()=>{r(new Date)},h=g=>{const y=g.getFullYear(),v=g.getMonth(),w=new Date(y,v,1),k=new Date(y,v+1,0).getDate(),I=w.getDay(),z=[];for(let A=I-1;A>=0;A--){const M=new Date(y,v,-A);z.push(M)}for(let A=1;A<=k;A++)z.push(new Date(y,v,A));const B=42-z.length;for(let A=1;A<=B;A++)z.push(new Date(y,v+1,A));return z},b=g=>n.filter(y=>new Date(y.date).toDateString()===g.toDateString()),$=g=>{const y=new Date;return g.toDateString()===y.toDateString()},u=g=>g.getMonth()===e.getMonth(),p=h(e),f=(s==null?void 0:s.filter(g=>{const y=new Date(g.startTime);return y.getMonth()===e.getMonth()&&y.getFullYear()===e.getFullYear()}))||[],x=(l==null?void 0:l.filter(g=>{const y=new Date(g.dueDate);return y.getMonth()===e.getMonth()&&y.getFullYear()===e.getFullYear()}))||[];return t.jsxs(Lg,{children:[t.jsx(O,{children:"Mission Calendar"}),t.jsxs(Og,{children:[t.jsx(E,{label:"Current Month Trips",value:f.length.toString(),valueColor:"anakiwa"}),t.jsx(E,{label:"Upcoming Maintenance",value:x.length.toString(),valueColor:"lilac"}),t.jsx(E,{label:"Total Events",value:(f.length+x.length).toString(),valueColor:"neonCarrot"})]}),t.jsxs(D,{title:"Calendar View",children:[t.jsxs(zg,{children:[t.jsxs(Dg,{children:[t.jsx(T,{onClick:()=>m("prev"),variant:"secondary",size:"sm",children:"← Previous"}),t.jsxs(Mg,{children:[Hg[e.getMonth()]," ",e.getFullYear()]}),t.jsx(T,{onClick:()=>m("next"),variant:"secondary",size:"sm",children:"Next →"})]}),t.jsx(T,{onClick:d,size:"sm",children:"Today"})]}),t.jsxs(Ug,{children:[t.jsx(Fo,{$color:"#6688CC",children:"Trips"}),t.jsx(Fo,{$color:"#CC99CC",children:"Maintenance"})]}),t.jsxs(Ig,{children:[qg.map(g=>t.jsx(Rg,{children:g},g)),p.map((g,y)=>{const v=b(g);return t.jsxs(Ng,{$isCurrentMonth:u(g),$isToday:$(g),$hasEvents:v.length>0,children:[t.jsx(Pg,{$isToday:$(g),children:g.getDate()}),t.jsxs(Bg,{children:[v.slice(0,3).map(w=>t.jsx(Eo,{$type:w.type,title:w.title,children:w.title},w.id)),v.length>3&&t.jsxs(Eo,{$type:"trip",children:["+",v.length-3," more"]})]})]},y)})]}),(i||c)&&t.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#6688CC"},children:"Loading calendar data..."})]})]})},Kg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Vg=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,Gg=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.md};
`,_g=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.sm};
  overflow: hidden;
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,Qg=a.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`,Jg=a.div`
  padding: ${e=>e.theme.spacing.sm};
`,Zg=a.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  margin-bottom: ${e=>e.theme.spacing.xs};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,Yg=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Xg=a.span`
  background: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
`,ex=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: ${e=>e.$isOpen?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: ${e=>e.theme.zIndex.modal};
  padding: ${e=>e.theme.spacing.lg};
`,tx=a.div`
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,rx=a.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
`,nx=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  text-align: center;
  max-width: 500px;
`,ox=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,ax=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,sx=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,ix=()=>{const[e,r]=j.useState([]),[n,o]=j.useState([]),[s,i]=j.useState("all"),[l,c]=j.useState(null),[m,d]=j.useState(!0),{data:h,isLoading:b}=He();j.useEffect(()=>{const g=[];h&&h.forEach(y=>{y.photos&&y.photos.forEach(v=>{var w;g.push({...v,contextType:"trip",contextTitle:`Trip: ${((w=y.boat)==null?void 0:w.name)||"Unknown Boat"}`,contextDate:new Date(y.startTime).toLocaleDateString()})})}),g.sort((y,v)=>new Date(v.createdAt).getTime()-new Date(y.createdAt).getTime()),r(g),d(b)},[h,b]),j.useEffect(()=>{let g=e;s==="trips"&&(g=e.filter(y=>y.contextType==="trip")),o(g)},[e,s]);const $=g=>{c(g)},u=()=>{c(null)},p=g=>{if(!l)return;const y=n.findIndex(w=>w.id===l.id);let v=y;g==="prev"?v=y>0?y-1:n.length-1:v=y<n.length-1?y+1:0,c(n[v])},f=g=>{if(g===0)return"0 Bytes";const y=1024,v=["Bytes","KB","MB","GB"],w=Math.floor(Math.log(g)/Math.log(y));return parseFloat((g/Math.pow(y,w)).toFixed(2))+" "+v[w]},x=e.filter(g=>g.contextType==="trip");return t.jsxs(Kg,{children:[t.jsx(O,{children:"Photo Gallery"}),t.jsxs(sx,{children:[t.jsx(E,{label:"Total Photos",value:e.length.toString(),valueColor:"neonCarrot"}),t.jsx(E,{label:"Trip Photos",value:x.length.toString(),valueColor:"anakiwa"}),t.jsx(E,{label:"Maintenance Photos",value:"0",valueColor:"lilac"}),t.jsx(E,{label:"Total Size",value:f(e.reduce((g,y)=>g+(y.sizeBytes||0),0)),valueColor:"anakiwa"})]}),t.jsxs(D,{title:"Photo Collection",children:[t.jsxs(Vg,{children:[t.jsxs(T,{onClick:()=>i("all"),variant:s==="all"?"primary":"secondary",size:"sm",children:["All Photos (",e.length,")"]}),t.jsxs(T,{onClick:()=>i("trips"),variant:s==="trips"?"primary":"secondary",size:"sm",children:["Trip Photos (",x.length,")"]}),t.jsx(T,{onClick:()=>i("trips"),variant:s==="trips"?"primary":"secondary",size:"sm",disabled:!0,children:"Maintenance Photos (Coming Soon)"})]}),m?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#6688CC"},children:"Loading photos..."})}):n.length===0?t.jsx(ax,{children:"No photos found. Photos will appear here when you attach them to trips."}):t.jsx(Gg,{children:n.map(g=>t.jsxs(_g,{onClick:()=>$(g),children:[t.jsx(Qg,{src:g.webOptimizedPath||g.originalPath,alt:g.contextTitle,loading:"lazy"}),t.jsxs(Jg,{children:[t.jsx(Zg,{children:g.contextTitle}),t.jsxs(Yg,{children:[t.jsx(Xg,{$type:g.contextType,children:g.contextType}),t.jsx("span",{children:g.contextDate})]})]})]},g.id))})]}),t.jsx(ex,{$isOpen:!!l,onClick:u,children:l&&t.jsxs(tx,{onClick:g=>g.stopPropagation(),children:[t.jsx(rx,{src:l.webOptimizedPath||l.originalPath,alt:l.contextTitle}),t.jsxs(nx,{children:[t.jsx("div",{style:{marginBottom:"10px"},children:t.jsx("strong",{children:l.contextTitle})}),t.jsxs("div",{style:{fontSize:"14px",color:"#CCCCCC"},children:[t.jsxs("div",{children:["Date: ",l.contextDate]}),t.jsxs("div",{children:["Size: ",f(l.sizeBytes||0)]}),t.jsxs("div",{children:["Type: ",l.mimeType]}),l.metadata&&t.jsxs("div",{children:["Dimensions: ",l.metadata.width," × ",l.metadata.height]})]})]}),t.jsxs(ox,{children:[t.jsx(T,{onClick:()=>p("prev"),variant:"secondary",size:"sm",children:"← Previous"}),t.jsx(T,{onClick:u,size:"sm",children:"Close"}),t.jsx(T,{onClick:()=>p("next"),variant:"secondary",size:"sm",children:"Next →"})]})]})})]})},Ot=a.div`
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
`,lx=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  
  .loading-text {
    color: ${e=>e.theme.colors.primary.neonCarrot};
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;function cx(){const{isAuthenticated:e,isLoading:r,needsSetup:n}=Zt();return r?t.jsx(Ot,{children:t.jsx(lx,{children:t.jsx("div",{className:"loading-text",children:"Initializing LCARS Interface"})})}):n?t.jsx(Ot,{children:t.jsx(pr,{})}):e?t.jsx(Ot,{children:t.jsx(vl,{children:t.jsx(yl,{children:t.jsxs(cn,{children:[t.jsx(H,{path:"/",element:t.jsx(Ln,{})}),t.jsx(H,{path:"/dashboard",element:t.jsx(hc,{})}),t.jsx(H,{path:"/boats",element:t.jsx(yd,{})}),t.jsx(H,{path:"/boats/new",element:t.jsx(Ud,{})}),t.jsx(H,{path:"/boats/:id",element:t.jsx(Ld,{})}),t.jsx(H,{path:"/trips",element:t.jsx(em,{})}),t.jsx(H,{path:"/trips/:id",element:t.jsx(vm,{})}),t.jsx(H,{path:"/trips/:id/edit",element:t.jsx(Em,{})}),t.jsx(H,{path:"/notes",element:t.jsx(Km,{})}),t.jsx(H,{path:"/notes/new",element:t.jsx(Jn,{})}),t.jsx(H,{path:"/notes/:id",element:t.jsx(rp,{})}),t.jsx(H,{path:"/notes/:id/edit",element:t.jsx(Jn,{})}),t.jsx(H,{path:"/todos",element:t.jsx(bh,{})}),t.jsx(H,{path:"/maintenance",element:t.jsx(Lh,{})}),t.jsx(H,{path:"/maintenance/templates/new",element:t.jsx(uo,{})}),t.jsx(H,{path:"/maintenance/templates/:id",element:t.jsx(Ph,{})}),t.jsx(H,{path:"/maintenance/templates/:id/edit",element:t.jsx(uo,{})}),t.jsx(H,{path:"/maintenance/events/:id",element:t.jsx(Gh,{})}),t.jsx(H,{path:"/map",element:t.jsx(Du,{})}),t.jsx(H,{path:"/reports",element:t.jsx(Gu,{})}),t.jsx(H,{path:"/reports/license",element:t.jsx(Bu,{})}),t.jsx(H,{path:"/reports/maintenance",element:t.jsx(Wu,{})}),t.jsx(H,{path:"/settings",element:t.jsx(tg,{})}),t.jsx(H,{path:"/settings/backup",element:t.jsx(Fg,{})}),t.jsx(H,{path:"/settings/nautical",element:t.jsx(bg,{})}),t.jsx(H,{path:"/calendar",element:t.jsx(Wg,{})}),t.jsx(H,{path:"/photos",element:t.jsx(ix,{})}),t.jsx(H,{path:"*",element:t.jsx(Ln,{})})]})})})}):t.jsx(Ot,{children:t.jsxs(cn,{children:[t.jsx(H,{path:"/setup",element:t.jsx(pr,{})}),t.jsx(H,{path:"*",element:t.jsx(pr,{})})]})})}const dx=Ba`
  /* Import Antonio font from Google Fonts - full weight range for LCARS */
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&display=swap');

  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    overflow-x: hidden;
  }

  /* Body - Authentic LCARS styling */
  body {
    font-family: 'Antonio', sans-serif;
    font-size: 14px;
    line-height: 1.4;
    color: #FF9933;
    background-color: #000000;
    text-transform: uppercase;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }

  /* Headings - LCARS style */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Antonio', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #FF9933;
  }

  h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5, h6 {
    font-size: 1.25rem;
  }

  /* Button reset */
  button {
    font-family: 'Antonio', sans-serif;
    font-size: inherit;
    text-transform: uppercase;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
  }

  /* Form inputs - LCARS style */
  input, textarea, select {
    font-family: 'Antonio', sans-serif;
    font-size: inherit;
    text-transform: none;
    color: #FFCC99;
    background-color: #0A0A0A;
    border: 2px solid #664466;
    border-radius: 0;
    padding: 8px 16px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: #FF9933;
      box-shadow: 0 0 8px rgba(255, 153, 51, 0.4);
    }

    &::placeholder {
      color: #664466;
    }
  }

  /* Links - LCARS blue */
  a {
    color: #99CCFF;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #FFCC99;
    }
  }

  /* Scrollbar - LCARS flat design */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #0A0A0A;
  }

  ::-webkit-scrollbar-thumb {
    background: #664466;
    border-radius: 0;

    &:hover {
      background: #CC99CC;
    }
  }

  /* Selection styling */
  ::selection {
    background-color: #FF9933;
    color: #000000;
  }

  ::-moz-selection {
    background-color: #FF9933;
    color: #000000;
  }

  /* LCARS Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes lcars-blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0.3;
    }
  }

  @keyframes lcars-sweep {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes lcars-pulse {
    0%, 100% {
      box-shadow: 0 0 4px rgba(255, 153, 51, 0.4);
    }
    50% {
      box-shadow: 0 0 12px rgba(255, 153, 51, 0.8);
    }
  }

  /* Animation utility classes */
  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }

  .slide-in {
    animation: slideIn 0.4s ease-out;
  }

  .lcars-blink {
    animation: lcars-blink 1s infinite;
  }

  .lcars-sweep {
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 153, 51, 0.3) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: lcars-sweep 2s linear infinite;
  }

  .lcars-pulse {
    animation: lcars-pulse 2s ease-in-out infinite;
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    body {
      font-size: 13px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 12px;
      letter-spacing: 0.5px;
    }

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`,mx={colors:{primary:{paleCanary:"#FFFF99",tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",eggplant:"#664466",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",bahamBlue:"#006699"},background:"#000000",surface:{dark:"#0A0A0A",medium:"#1A1119",light:"#2A2233"},text:{primary:"#FF9933",secondary:"#CC99CC",muted:"#664466",inverse:"#000000",light:"#FFCC99"},status:{success:"#55FF55",warning:"#FFFF99",error:"#FF5555",info:"#99CCFF"},interactive:{hover:"#FFCC66",active:"#FFCC99",disabled:"#664466"}},typography:{fontFamily:{primary:"'Antonio', 'Helvetica Neue', Arial, sans-serif",monospace:"'Courier New', monospace"},fontSize:{xs:"11px",sm:"13px",md:"15px",lg:"18px",xl:"24px",xxl:"32px",xxxl:"48px"},fontWeight:{normal:400,bold:700},lineHeight:{tight:1.1,normal:1.4,loose:1.7},letterSpacing:{tight:"-0.02em",normal:"0.04em",wide:"0.1em",extraWide:"0.2em"}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px"},borderRadius:{none:"0",sm:"4px",md:"8px",lg:"16px",xl:"24px",pill:"9999px"},shadows:{sm:"0 1px 3px rgba(255, 153, 51, 0.12)",md:"0 4px 8px rgba(255, 153, 51, 0.15)",lg:"0 10px 20px rgba(255, 153, 51, 0.18)",glow:"0 0 20px rgba(255, 153, 51, 0.35)",glowStrong:"0 0 40px rgba(255, 153, 51, 0.5)",glowSubtle:"0 0 10px rgba(255, 153, 51, 0.15)"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modal:1040,popover:1050,tooltip:1060},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},animation:{fast:"150ms",normal:"300ms",slow:"500ms"},lcars:{sidebarWidth:"200px",headerHeight:"60px",footerHeight:"40px",elbowSize:"60px",barThickness:"30px",buttonHeight:"40px",gap:"3px",buttonRadius:"9999px"}},px=new Ma({defaultOptions:{queries:{retry:3,staleTime:5*60*1e3,refetchOnWindowFocus:!1}}});_r.createRoot(document.getElementById("root")).render(t.jsx(Ue.StrictMode,{children:t.jsx(Ia,{client:px,children:t.jsx(Pa,{children:t.jsxs(Oa,{theme:mx,children:[t.jsx(dx,{}),t.jsx(Wc,{children:t.jsx(cx,{})})]})})})}));
//# sourceMappingURL=index-ayLnmmxY.js.map
