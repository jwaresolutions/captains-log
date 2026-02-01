import{j as t,u as se,a as _,b as Z,Q as Da,c as za}from"./query-qfgcgxkg.js";import{b as Eo,r as $,a as Ze}from"./vendor-ibvuEIEr.js";import{u as de,a as Ma,b as Oe,L as ee,c as Ia,R as ln,d as q,B as Ra}from"./router-CxqMmorT.js";import{d as a,l as L,m as te,f as Na,o as Pa}from"./ui-BNlCdbnp.js";import{l as Se,T as Kr,P as Fo,M as ge,a as xe,b as Lo,W as Ba,u as Do}from"./maps-CDKGOAYI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Vr={},cn=Eo;Vr.createRoot=cn.createRoot,Vr.hydrateRoot=cn.hydrateRoot;function zo(e,r){return function(){return e.apply(r,arguments)}}const{toString:Oa}=Object.prototype,{getPrototypeOf:Yr}=Object,{iterator:qt,toStringTag:Mo}=Symbol,Ht=(e=>r=>{const n=Oa.call(r);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),fe=e=>(e=e.toLowerCase(),r=>Ht(r)===e),Wt=e=>r=>typeof r===e,{isArray:mt}=Array,dt=Wt("undefined");function bt(e){return e!==null&&!dt(e)&&e.constructor!==null&&!dt(e.constructor)&&le(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Io=fe("ArrayBuffer");function Ua(e){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Io(e.buffer),r}const qa=Wt("string"),le=Wt("function"),Ro=Wt("number"),$t=e=>e!==null&&typeof e=="object",Ha=e=>e===!0||e===!1,Nt=e=>{if(Ht(e)!=="object")return!1;const r=Yr(e);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Mo in e)&&!(qt in e)},Wa=e=>{if(!$t(e)||bt(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Ka=fe("Date"),Va=fe("File"),Ga=fe("Blob"),_a=fe("FileList"),Qa=e=>$t(e)&&le(e.pipe),Ja=e=>{let r;return e&&(typeof FormData=="function"&&e instanceof FormData||le(e.append)&&((r=Ht(e))==="formdata"||r==="object"&&le(e.toString)&&e.toString()==="[object FormData]"))},Za=fe("URLSearchParams"),[Ya,Xa,es,ts]=["ReadableStream","Request","Response","Headers"].map(fe),rs=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function jt(e,r,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,s;if(typeof e!="object"&&(e=[e]),mt(e))for(o=0,s=e.length;o<s;o++)r.call(null,e[o],o,e);else{if(bt(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let c;for(o=0;o<l;o++)c=i[o],r.call(null,e[c],c,e)}}function No(e,r){if(bt(e))return null;r=r.toLowerCase();const n=Object.keys(e);let o=n.length,s;for(;o-- >0;)if(s=n[o],r===s.toLowerCase())return s;return null}const Qe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Po=e=>!dt(e)&&e!==Qe;function Gr(){const{caseless:e,skipUndefined:r}=Po(this)&&this||{},n={},o=(s,i)=>{const l=e&&No(n,i)||i;Nt(n[l])&&Nt(s)?n[l]=Gr(n[l],s):Nt(s)?n[l]=Gr({},s):mt(s)?n[l]=s.slice():(!r||!dt(s))&&(n[l]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&jt(arguments[s],o);return n}const ns=(e,r,n,{allOwnKeys:o}={})=>(jt(r,(s,i)=>{n&&le(s)?e[i]=zo(s,n):e[i]=s},{allOwnKeys:o}),e),os=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),as=(e,r,n,o)=>{e.prototype=Object.create(r.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:r.prototype}),n&&Object.assign(e.prototype,n)},ss=(e,r,n,o)=>{let s,i,l;const c={};if(r=r||{},e==null)return r;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)l=s[i],(!o||o(l,e,r))&&!c[l]&&(r[l]=e[l],c[l]=!0);e=n!==!1&&Yr(e)}while(e&&(!n||n(e,r))&&e!==Object.prototype);return r},is=(e,r,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=r.length;const o=e.indexOf(r,n);return o!==-1&&o===n},ls=e=>{if(!e)return null;if(mt(e))return e;let r=e.length;if(!Ro(r))return null;const n=new Array(r);for(;r-- >0;)n[r]=e[r];return n},cs=(e=>r=>e&&r instanceof e)(typeof Uint8Array<"u"&&Yr(Uint8Array)),ds=(e,r)=>{const o=(e&&e[qt]).call(e);let s;for(;(s=o.next())&&!s.done;){const i=s.value;r.call(e,i[0],i[1])}},ms=(e,r)=>{let n;const o=[];for(;(n=e.exec(r))!==null;)o.push(n);return o},ps=fe("HTMLFormElement"),hs=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,s){return o.toUpperCase()+s}),dn=(({hasOwnProperty:e})=>(r,n)=>e.call(r,n))(Object.prototype),us=fe("RegExp"),Bo=(e,r)=>{const n=Object.getOwnPropertyDescriptors(e),o={};jt(n,(s,i)=>{let l;(l=r(s,i,e))!==!1&&(o[i]=l||s)}),Object.defineProperties(e,o)},gs=e=>{Bo(e,(r,n)=>{if(le(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(le(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},xs=(e,r)=>{const n={},o=s=>{s.forEach(i=>{n[i]=!0})};return mt(e)?o(e):o(String(e).split(r)),n},fs=()=>{},ys=(e,r)=>e!=null&&Number.isFinite(e=+e)?e:r;function bs(e){return!!(e&&le(e.append)&&e[Mo]==="FormData"&&e[qt])}const $s=e=>{const r=new Array(10),n=(o,s)=>{if($t(o)){if(r.indexOf(o)>=0)return;if(bt(o))return o;if(!("toJSON"in o)){r[s]=o;const i=mt(o)?[]:{};return jt(o,(l,c)=>{const m=n(l,s+1);!dt(m)&&(i[c]=m)}),r[s]=void 0,i}}return o};return n(e,0)},js=fe("AsyncFunction"),vs=e=>e&&($t(e)||le(e))&&le(e.then)&&le(e.catch),Oo=((e,r)=>e?setImmediate:r?((n,o)=>(Qe.addEventListener("message",({source:s,data:i})=>{s===Qe&&i===n&&o.length&&o.shift()()},!1),s=>{o.push(s),Qe.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",le(Qe.postMessage)),ws=typeof queueMicrotask<"u"?queueMicrotask.bind(Qe):typeof process<"u"&&process.nextTick||Oo,Cs=e=>e!=null&&le(e[qt]),C={isArray:mt,isArrayBuffer:Io,isBuffer:bt,isFormData:Ja,isArrayBufferView:Ua,isString:qa,isNumber:Ro,isBoolean:Ha,isObject:$t,isPlainObject:Nt,isEmptyObject:Wa,isReadableStream:Ya,isRequest:Xa,isResponse:es,isHeaders:ts,isUndefined:dt,isDate:Ka,isFile:Va,isBlob:Ga,isRegExp:us,isFunction:le,isStream:Qa,isURLSearchParams:Za,isTypedArray:cs,isFileList:_a,forEach:jt,merge:Gr,extend:ns,trim:rs,stripBOM:os,inherits:as,toFlatObject:ss,kindOf:Ht,kindOfTest:fe,endsWith:is,toArray:ls,forEachEntry:ds,matchAll:ms,isHTMLForm:ps,hasOwnProperty:dn,hasOwnProp:dn,reduceDescriptors:Bo,freezeMethods:gs,toObjectSet:xs,toCamelCase:hs,noop:fs,toFiniteNumber:ys,findKey:No,global:Qe,isContextDefined:Po,isSpecCompliantForm:bs,toJSONObject:$s,isAsyncFn:js,isThenable:vs,setImmediate:Oo,asap:ws,isIterable:Cs};function O(e,r,n,o,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",r&&(this.code=r),n&&(this.config=n),o&&(this.request=o),s&&(this.response=s,this.status=s.status?s.status:null)}C.inherits(O,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.status}}});const Uo=O.prototype,qo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qo[e]={value:e}});Object.defineProperties(O,qo);Object.defineProperty(Uo,"isAxiosError",{value:!0});O.from=(e,r,n,o,s,i)=>{const l=Object.create(Uo);C.toFlatObject(e,l,function(h){return h!==Error.prototype},d=>d!=="isAxiosError");const c=e&&e.message?e.message:"Error",m=r==null&&e?e.code:r;return O.call(l,c,m,n,o,s),e&&l.cause==null&&Object.defineProperty(l,"cause",{value:e,configurable:!0}),l.name=e&&e.name||"Error",i&&Object.assign(l,i),l};const Ss=null;function _r(e){return C.isPlainObject(e)||C.isArray(e)}function Ho(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function mn(e,r,n){return e?e.concat(r).map(function(s,i){return s=Ho(s),!n&&i?"["+s+"]":s}).join(n?".":""):r}function ks(e){return C.isArray(e)&&!e.some(_r)}const Ts=C.toFlatObject(C,{},null,function(r){return/^is[A-Z]/.test(r)});function Kt(e,r,n){if(!C.isObject(e))throw new TypeError("target must be an object");r=r||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,g){return!C.isUndefined(g[f])});const o=n.metaTokens,s=n.visitor||h,i=n.dots,l=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(r);if(!C.isFunction(s))throw new TypeError("visitor must be a function");function d(p){if(p===null)return"";if(C.isDate(p))return p.toISOString();if(C.isBoolean(p))return p.toString();if(!m&&C.isBlob(p))throw new O("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(p)||C.isTypedArray(p)?m&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function h(p,f,g){let x=p;if(p&&!g&&typeof p=="object"){if(C.endsWith(f,"{}"))f=o?f:f.slice(0,-2),p=JSON.stringify(p);else if(C.isArray(p)&&ks(p)||(C.isFileList(p)||C.endsWith(f,"[]"))&&(x=C.toArray(p)))return f=Ho(f),x.forEach(function(j,w){!(C.isUndefined(j)||j===null)&&r.append(l===!0?mn([f],w,i):l===null?f:f+"[]",d(j))}),!1}return _r(p)?!0:(r.append(mn(g,f,i),d(p)),!1)}const b=[],v=Object.assign(Ts,{defaultVisitor:h,convertValue:d,isVisitable:_r});function u(p,f){if(!C.isUndefined(p)){if(b.indexOf(p)!==-1)throw Error("Circular reference detected in "+f.join("."));b.push(p),C.forEach(p,function(x,y){(!(C.isUndefined(x)||x===null)&&s.call(r,x,C.isString(y)?y.trim():y,f,v))===!0&&u(x,f?f.concat(y):[y])}),b.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return u(e),r}function pn(e){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function Xr(e,r){this._pairs=[],e&&Kt(e,this,r)}const Wo=Xr.prototype;Wo.append=function(r,n){this._pairs.push([r,n])};Wo.toString=function(r){const n=r?function(o){return r.call(this,o,pn)}:pn;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function As(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ko(e,r,n){if(!r)return e;const o=n&&n.encode||As;C.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(r,n):i=C.isURLSearchParams(r)?r.toString():new Xr(r,n).toString(o),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class hn{constructor(){this.handlers=[]}use(r,n,o){return this.handlers.push({fulfilled:r,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){C.forEach(this.handlers,function(o){o!==null&&r(o)})}}const Vo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Es=typeof URLSearchParams<"u"?URLSearchParams:Xr,Fs=typeof FormData<"u"?FormData:null,Ls=typeof Blob<"u"?Blob:null,Ds={isBrowser:!0,classes:{URLSearchParams:Es,FormData:Fs,Blob:Ls},protocols:["http","https","file","blob","url","data"]},en=typeof window<"u"&&typeof document<"u",Qr=typeof navigator=="object"&&navigator||void 0,zs=en&&(!Qr||["ReactNative","NativeScript","NS"].indexOf(Qr.product)<0),Ms=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Is=en&&window.location.href||"http://localhost",Rs=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:en,hasStandardBrowserEnv:zs,hasStandardBrowserWebWorkerEnv:Ms,navigator:Qr,origin:Is},Symbol.toStringTag,{value:"Module"})),re={...Rs,...Ds};function Ns(e,r){return Kt(e,new re.classes.URLSearchParams,{visitor:function(n,o,s,i){return re.isNode&&C.isBuffer(n)?(this.append(o,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...r})}function Ps(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Bs(e){const r={},n=Object.keys(e);let o;const s=n.length;let i;for(o=0;o<s;o++)i=n[o],r[i]=e[i];return r}function Go(e){function r(n,o,s,i){let l=n[i++];if(l==="__proto__")return!0;const c=Number.isFinite(+l),m=i>=n.length;return l=!l&&C.isArray(s)?s.length:l,m?(C.hasOwnProp(s,l)?s[l]=[s[l],o]:s[l]=o,!c):((!s[l]||!C.isObject(s[l]))&&(s[l]=[]),r(n,o,s[l],i)&&C.isArray(s[l])&&(s[l]=Bs(s[l])),!c)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(o,s)=>{r(Ps(o),s,n,0)}),n}return null}function Os(e,r,n){if(C.isString(e))try{return(r||JSON.parse)(e),C.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const vt={transitional:Vo,adapter:["xhr","http","fetch"],transformRequest:[function(r,n){const o=n.getContentType()||"",s=o.indexOf("application/json")>-1,i=C.isObject(r);if(i&&C.isHTMLForm(r)&&(r=new FormData(r)),C.isFormData(r))return s?JSON.stringify(Go(r)):r;if(C.isArrayBuffer(r)||C.isBuffer(r)||C.isStream(r)||C.isFile(r)||C.isBlob(r)||C.isReadableStream(r))return r;if(C.isArrayBufferView(r))return r.buffer;if(C.isURLSearchParams(r))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let c;if(i){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Ns(r,this.formSerializer).toString();if((c=C.isFileList(r))||o.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Kt(c?{"files[]":r}:r,m&&new m,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Os(r)):r}],transformResponse:[function(r){const n=this.transitional||vt.transitional,o=n&&n.forcedJSONParsing,s=this.responseType==="json";if(C.isResponse(r)||C.isReadableStream(r))return r;if(r&&C.isString(r)&&(o&&!this.responseType||s)){const l=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(r,this.parseReviver)}catch(c){if(l)throw c.name==="SyntaxError"?O.from(c,O.ERR_BAD_RESPONSE,this,null,this.response):c}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:re.classes.FormData,Blob:re.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{vt.headers[e]={}});const Us=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qs=e=>{const r={};let n,o,s;return e&&e.split(`
`).forEach(function(l){s=l.indexOf(":"),n=l.substring(0,s).trim().toLowerCase(),o=l.substring(s+1).trim(),!(!n||r[n]&&Us[n])&&(n==="set-cookie"?r[n]?r[n].push(o):r[n]=[o]:r[n]=r[n]?r[n]+", "+o:o)}),r},un=Symbol("internals");function ht(e){return e&&String(e).trim().toLowerCase()}function Pt(e){return e===!1||e==null?e:C.isArray(e)?e.map(Pt):String(e)}function Hs(e){const r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)r[o[1]]=o[2];return r}const Ws=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Zt(e,r,n,o,s){if(C.isFunction(o))return o.call(this,r,n);if(s&&(r=n),!!C.isString(r)){if(C.isString(o))return r.indexOf(o)!==-1;if(C.isRegExp(o))return o.test(r)}}function Ks(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,n,o)=>n.toUpperCase()+o)}function Vs(e,r){const n=C.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(s,i,l){return this[o].call(this,r,s,i,l)},configurable:!0})})}let ce=class{constructor(r){r&&this.set(r)}set(r,n,o){const s=this;function i(c,m,d){const h=ht(m);if(!h)throw new Error("header name must be a non-empty string");const b=C.findKey(s,h);(!b||s[b]===void 0||d===!0||d===void 0&&s[b]!==!1)&&(s[b||m]=Pt(c))}const l=(c,m)=>C.forEach(c,(d,h)=>i(d,h,m));if(C.isPlainObject(r)||r instanceof this.constructor)l(r,n);else if(C.isString(r)&&(r=r.trim())&&!Ws(r))l(qs(r),n);else if(C.isObject(r)&&C.isIterable(r)){let c={},m,d;for(const h of r){if(!C.isArray(h))throw TypeError("Object iterator must return a key-value pair");c[d=h[0]]=(m=c[d])?C.isArray(m)?[...m,h[1]]:[m,h[1]]:h[1]}l(c,n)}else r!=null&&i(n,r,o);return this}get(r,n){if(r=ht(r),r){const o=C.findKey(this,r);if(o){const s=this[o];if(!n)return s;if(n===!0)return Hs(s);if(C.isFunction(n))return n.call(this,s,o);if(C.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,n){if(r=ht(r),r){const o=C.findKey(this,r);return!!(o&&this[o]!==void 0&&(!n||Zt(this,this[o],o,n)))}return!1}delete(r,n){const o=this;let s=!1;function i(l){if(l=ht(l),l){const c=C.findKey(o,l);c&&(!n||Zt(o,o[c],c,n))&&(delete o[c],s=!0)}}return C.isArray(r)?r.forEach(i):i(r),s}clear(r){const n=Object.keys(this);let o=n.length,s=!1;for(;o--;){const i=n[o];(!r||Zt(this,this[i],i,r,!0))&&(delete this[i],s=!0)}return s}normalize(r){const n=this,o={};return C.forEach(this,(s,i)=>{const l=C.findKey(o,i);if(l){n[l]=Pt(s),delete n[i];return}const c=r?Ks(i):String(i).trim();c!==i&&delete n[i],n[c]=Pt(s),o[c]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const n=Object.create(null);return C.forEach(this,(o,s)=>{o!=null&&o!==!1&&(n[s]=r&&C.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,n])=>r+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...n){const o=new this(r);return n.forEach(s=>o.set(s)),o}static accessor(r){const o=(this[un]=this[un]={accessors:{}}).accessors,s=this.prototype;function i(l){const c=ht(l);o[c]||(Vs(s,l),o[c]=!0)}return C.isArray(r)?r.forEach(i):i(r),this}};ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(ce.prototype,({value:e},r)=>{let n=r[0].toUpperCase()+r.slice(1);return{get:()=>e,set(o){this[n]=o}}});C.freezeMethods(ce);function Yt(e,r){const n=this||vt,o=r||n,s=ce.from(o.headers);let i=o.data;return C.forEach(e,function(c){i=c.call(n,i,s.normalize(),r?r.status:void 0)}),s.normalize(),i}function _o(e){return!!(e&&e.__CANCEL__)}function pt(e,r,n){O.call(this,e??"canceled",O.ERR_CANCELED,r,n),this.name="CanceledError"}C.inherits(pt,O,{__CANCEL__:!0});function Qo(e,r,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):r(new O("Request failed with status code "+n.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Gs(e){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}function _s(e,r){e=e||10;const n=new Array(e),o=new Array(e);let s=0,i=0,l;return r=r!==void 0?r:1e3,function(m){const d=Date.now(),h=o[i];l||(l=d),n[s]=m,o[s]=d;let b=i,v=0;for(;b!==s;)v+=n[b++],b=b%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),d-l<r)return;const u=h&&d-h;return u?Math.round(v*1e3/u):void 0}}function Qs(e,r){let n=0,o=1e3/r,s,i;const l=(d,h=Date.now())=>{n=h,s=null,i&&(clearTimeout(i),i=null),e(...d)};return[(...d)=>{const h=Date.now(),b=h-n;b>=o?l(d,h):(s=d,i||(i=setTimeout(()=>{i=null,l(s)},o-b)))},()=>s&&l(s)]}const Ot=(e,r,n=3)=>{let o=0;const s=_s(50,250);return Qs(i=>{const l=i.loaded,c=i.lengthComputable?i.total:void 0,m=l-o,d=s(m),h=l<=c;o=l;const b={loaded:l,total:c,progress:c?l/c:void 0,bytes:m,rate:d||void 0,estimated:d&&c&&h?(c-l)/d:void 0,event:i,lengthComputable:c!=null,[r?"download":"upload"]:!0};e(b)},n)},gn=(e,r)=>{const n=e!=null;return[o=>r[0]({lengthComputable:n,total:e,loaded:o}),r[1]]},xn=e=>(...r)=>C.asap(()=>e(...r)),Js=re.hasStandardBrowserEnv?((e,r)=>n=>(n=new URL(n,re.origin),e.protocol===n.protocol&&e.host===n.host&&(r||e.port===n.port)))(new URL(re.origin),re.navigator&&/(msie|trident)/i.test(re.navigator.userAgent)):()=>!0,Zs=re.hasStandardBrowserEnv?{write(e,r,n,o,s,i,l){if(typeof document>"u")return;const c=[`${e}=${encodeURIComponent(r)}`];C.isNumber(n)&&c.push(`expires=${new Date(n).toUTCString()}`),C.isString(o)&&c.push(`path=${o}`),C.isString(s)&&c.push(`domain=${s}`),i===!0&&c.push("secure"),C.isString(l)&&c.push(`SameSite=${l}`),document.cookie=c.join("; ")},read(e){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Ys(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Xs(e,r){return r?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e}function Jo(e,r,n){let o=!Ys(r);return e&&(o||n==!1)?Xs(e,r):r}const fn=e=>e instanceof ce?{...e}:e;function Ye(e,r){r=r||{};const n={};function o(d,h,b,v){return C.isPlainObject(d)&&C.isPlainObject(h)?C.merge.call({caseless:v},d,h):C.isPlainObject(h)?C.merge({},h):C.isArray(h)?h.slice():h}function s(d,h,b,v){if(C.isUndefined(h)){if(!C.isUndefined(d))return o(void 0,d,b,v)}else return o(d,h,b,v)}function i(d,h){if(!C.isUndefined(h))return o(void 0,h)}function l(d,h){if(C.isUndefined(h)){if(!C.isUndefined(d))return o(void 0,d)}else return o(void 0,h)}function c(d,h,b){if(b in r)return o(d,h);if(b in e)return o(void 0,d)}const m={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c,headers:(d,h,b)=>s(fn(d),fn(h),b,!0)};return C.forEach(Object.keys({...e,...r}),function(h){const b=m[h]||s,v=b(e[h],r[h],h);C.isUndefined(v)&&b!==c||(n[h]=v)}),n}const Zo=e=>{const r=Ye({},e);let{data:n,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:l,auth:c}=r;if(r.headers=l=ce.from(l),r.url=Ko(Jo(r.baseURL,r.url,r.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&l.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),C.isFormData(n)){if(re.hasStandardBrowserEnv||re.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(C.isFunction(n.getHeaders)){const m=n.getHeaders(),d=["content-type","content-length"];Object.entries(m).forEach(([h,b])=>{d.includes(h.toLowerCase())&&l.set(h,b)})}}if(re.hasStandardBrowserEnv&&(o&&C.isFunction(o)&&(o=o(r)),o||o!==!1&&Js(r.url))){const m=s&&i&&Zs.read(i);m&&l.set(s,m)}return r},ei=typeof XMLHttpRequest<"u",ti=ei&&function(e){return new Promise(function(n,o){const s=Zo(e);let i=s.data;const l=ce.from(s.headers).normalize();let{responseType:c,onUploadProgress:m,onDownloadProgress:d}=s,h,b,v,u,p;function f(){u&&u(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(h),s.signal&&s.signal.removeEventListener("abort",h)}let g=new XMLHttpRequest;g.open(s.method.toUpperCase(),s.url,!0),g.timeout=s.timeout;function x(){if(!g)return;const j=ce.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),F={data:!c||c==="text"||c==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:j,config:e,request:g};Qo(function(I){n(I),f()},function(I){o(I),f()},F),g=null}"onloadend"in g?g.onloadend=x:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(x)},g.onabort=function(){g&&(o(new O("Request aborted",O.ECONNABORTED,e,g)),g=null)},g.onerror=function(w){const F=w&&w.message?w.message:"Network Error",k=new O(F,O.ERR_NETWORK,e,g);k.event=w||null,o(k),g=null},g.ontimeout=function(){let w=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||Vo;s.timeoutErrorMessage&&(w=s.timeoutErrorMessage),o(new O(w,F.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,e,g)),g=null},i===void 0&&l.setContentType(null),"setRequestHeader"in g&&C.forEach(l.toJSON(),function(w,F){g.setRequestHeader(F,w)}),C.isUndefined(s.withCredentials)||(g.withCredentials=!!s.withCredentials),c&&c!=="json"&&(g.responseType=s.responseType),d&&([v,p]=Ot(d,!0),g.addEventListener("progress",v)),m&&g.upload&&([b,u]=Ot(m),g.upload.addEventListener("progress",b),g.upload.addEventListener("loadend",u)),(s.cancelToken||s.signal)&&(h=j=>{g&&(o(!j||j.type?new pt(null,e,g):j),g.abort(),g=null)},s.cancelToken&&s.cancelToken.subscribe(h),s.signal&&(s.signal.aborted?h():s.signal.addEventListener("abort",h)));const y=Gs(s.url);if(y&&re.protocols.indexOf(y)===-1){o(new O("Unsupported protocol "+y+":",O.ERR_BAD_REQUEST,e));return}g.send(i||null)})},ri=(e,r)=>{const{length:n}=e=e?e.filter(Boolean):[];if(r||n){let o=new AbortController,s;const i=function(d){if(!s){s=!0,c();const h=d instanceof Error?d:this.reason;o.abort(h instanceof O?h:new pt(h instanceof Error?h.message:h))}};let l=r&&setTimeout(()=>{l=null,i(new O(`timeout ${r} of ms exceeded`,O.ETIMEDOUT))},r);const c=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(i):d.removeEventListener("abort",i)}),e=null)};e.forEach(d=>d.addEventListener("abort",i));const{signal:m}=o;return m.unsubscribe=()=>C.asap(c),m}},ni=function*(e,r){let n=e.byteLength;if(n<r){yield e;return}let o=0,s;for(;o<n;)s=o+r,yield e.slice(o,s),o=s},oi=async function*(e,r){for await(const n of ai(e))yield*ni(n,r)},ai=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const r=e.getReader();try{for(;;){const{done:n,value:o}=await r.read();if(n)break;yield o}}finally{await r.cancel()}},yn=(e,r,n,o)=>{const s=oi(e,r);let i=0,l,c=m=>{l||(l=!0,o&&o(m))};return new ReadableStream({async pull(m){try{const{done:d,value:h}=await s.next();if(d){c(),m.close();return}let b=h.byteLength;if(n){let v=i+=b;n(v)}m.enqueue(new Uint8Array(h))}catch(d){throw c(d),d}},cancel(m){return c(m),s.return()}},{highWaterMark:2})},bn=64*1024,{isFunction:wt}=C,si=(({Request:e,Response:r})=>({Request:e,Response:r}))(C.global),{ReadableStream:$n,TextEncoder:jn}=C.global,vn=(e,...r)=>{try{return!!e(...r)}catch{return!1}},ii=e=>{e=C.merge.call({skipUndefined:!0},si,e);const{fetch:r,Request:n,Response:o}=e,s=r?wt(r):typeof fetch=="function",i=wt(n),l=wt(o);if(!s)return!1;const c=s&&wt($n),m=s&&(typeof jn=="function"?(p=>f=>p.encode(f))(new jn):async p=>new Uint8Array(await new n(p).arrayBuffer())),d=i&&c&&vn(()=>{let p=!1;const f=new n(re.origin,{body:new $n,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!f}),h=l&&c&&vn(()=>C.isReadableStream(new o("").body)),b={stream:h&&(p=>p.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!b[p]&&(b[p]=(f,g)=>{let x=f&&f[p];if(x)return x.call(f);throw new O(`Response type '${p}' is not supported`,O.ERR_NOT_SUPPORT,g)})});const v=async p=>{if(p==null)return 0;if(C.isBlob(p))return p.size;if(C.isSpecCompliantForm(p))return(await new n(re.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(C.isArrayBufferView(p)||C.isArrayBuffer(p))return p.byteLength;if(C.isURLSearchParams(p)&&(p=p+""),C.isString(p))return(await m(p)).byteLength},u=async(p,f)=>{const g=C.toFiniteNumber(p.getContentLength());return g??v(f)};return async p=>{let{url:f,method:g,data:x,signal:y,cancelToken:j,timeout:w,onDownloadProgress:F,onUploadProgress:k,responseType:I,headers:P,withCredentials:K="same-origin",fetchOptions:E}=Zo(p),M=r||fetch;I=I?(I+"").toLowerCase():"text";let U=ri([y,j&&j.toAbortSignal()],w),H=null;const V=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let R;try{if(k&&d&&g!=="get"&&g!=="head"&&(R=await u(P,x))!==0){let G=new n(f,{method:"POST",body:x,duplex:"half"}),oe;if(C.isFormData(x)&&(oe=G.headers.get("content-type"))&&P.setContentType(oe),G.body){const[ae,ye]=gn(R,Ot(xn(k)));x=yn(G.body,bn,ae,ye)}}C.isString(K)||(K=K?"include":"omit");const Y=i&&"credentials"in n.prototype,Fe={...E,signal:U,method:g.toUpperCase(),headers:P.normalize().toJSON(),body:x,duplex:"half",credentials:Y?K:void 0};H=i&&new n(f,Fe);let ne=await(i?M(H,E):M(f,Fe));const S=h&&(I==="stream"||I==="response");if(h&&(F||S&&V)){const G={};["status","statusText","headers"].forEach(Re=>{G[Re]=ne[Re]});const oe=C.toFiniteNumber(ne.headers.get("content-length")),[ae,ye]=F&&gn(oe,Ot(xn(F),!0))||[];ne=new o(yn(ne.body,bn,ae,()=>{ye&&ye(),V&&V()}),G)}I=I||"text";let W=await b[C.findKey(b,I)||"text"](ne,p);return!S&&V&&V(),await new Promise((G,oe)=>{Qo(G,oe,{data:W,headers:ce.from(ne.headers),status:ne.status,statusText:ne.statusText,config:p,request:H})})}catch(Y){throw V&&V(),Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)?Object.assign(new O("Network Error",O.ERR_NETWORK,p,H),{cause:Y.cause||Y}):O.from(Y,Y&&Y.code,p,H)}}},li=new Map,Yo=e=>{let r=e&&e.env||{};const{fetch:n,Request:o,Response:s}=r,i=[o,s,n];let l=i.length,c=l,m,d,h=li;for(;c--;)m=i[c],d=h.get(m),d===void 0&&h.set(m,d=c?new Map:ii(r)),h=d;return d};Yo();const tn={http:Ss,xhr:ti,fetch:{get:Yo}};C.forEach(tn,(e,r)=>{if(e){try{Object.defineProperty(e,"name",{value:r})}catch{}Object.defineProperty(e,"adapterName",{value:r})}});const wn=e=>`- ${e}`,ci=e=>C.isFunction(e)||e===null||e===!1;function di(e,r){e=C.isArray(e)?e:[e];const{length:n}=e;let o,s;const i={};for(let l=0;l<n;l++){o=e[l];let c;if(s=o,!ci(o)&&(s=tn[(c=String(o)).toLowerCase()],s===void 0))throw new O(`Unknown adapter '${c}'`);if(s&&(C.isFunction(s)||(s=s.get(r))))break;i[c||"#"+l]=s}if(!s){const l=Object.entries(i).map(([m,d])=>`adapter ${m} `+(d===!1?"is not supported by the environment":"is not available in the build"));let c=n?l.length>1?`since :
`+l.map(wn).join(`
`):" "+wn(l[0]):"as no adapter specified";throw new O("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s}const Xo={getAdapter:di,adapters:tn};function Xt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pt(null,e)}function Cn(e){return Xt(e),e.headers=ce.from(e.headers),e.data=Yt.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xo.getAdapter(e.adapter||vt.adapter,e)(e).then(function(o){return Xt(e),o.data=Yt.call(e,e.transformResponse,o),o.headers=ce.from(o.headers),o},function(o){return _o(o)||(Xt(e),o&&o.response&&(o.response.data=Yt.call(e,e.transformResponse,o.response),o.response.headers=ce.from(o.response.headers))),Promise.reject(o)})}const ea="1.13.2",Vt={};["object","boolean","number","function","string","symbol"].forEach((e,r)=>{Vt[e]=function(o){return typeof o===e||"a"+(r<1?"n ":" ")+e}});const Sn={};Vt.transitional=function(r,n,o){function s(i,l){return"[Axios v"+ea+"] Transitional option '"+i+"'"+l+(o?". "+o:"")}return(i,l,c)=>{if(r===!1)throw new O(s(l," has been removed"+(n?" in "+n:"")),O.ERR_DEPRECATED);return n&&!Sn[l]&&(Sn[l]=!0,console.warn(s(l," has been deprecated since v"+n+" and will be removed in the near future"))),r?r(i,l,c):!0}};Vt.spelling=function(r){return(n,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function mi(e,r,n){if(typeof e!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let s=o.length;for(;s-- >0;){const i=o[s],l=r[i];if(l){const c=e[i],m=c===void 0||l(c,i,e);if(m!==!0)throw new O("option "+i+" must be "+m,O.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new O("Unknown option "+i,O.ERR_BAD_OPTION)}}const Bt={assertOptions:mi,validators:Vt},$e=Bt.validators;let Je=class{constructor(r){this.defaults=r||{},this.interceptors={request:new hn,response:new hn}}async request(r,n){try{return await this._request(r,n)}catch(o){if(o instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{o.stack?i&&!String(o.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+i):o.stack=i}catch{}}throw o}}_request(r,n){typeof r=="string"?(n=n||{},n.url=r):n=r||{},n=Ye(this.defaults,n);const{transitional:o,paramsSerializer:s,headers:i}=n;o!==void 0&&Bt.assertOptions(o,{silentJSONParsing:$e.transitional($e.boolean),forcedJSONParsing:$e.transitional($e.boolean),clarifyTimeoutError:$e.transitional($e.boolean)},!1),s!=null&&(C.isFunction(s)?n.paramsSerializer={serialize:s}:Bt.assertOptions(s,{encode:$e.function,serialize:$e.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Bt.assertOptions(n,{baseUrl:$e.spelling("baseURL"),withXsrfToken:$e.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&C.merge(i.common,i[n.method]);i&&C.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=ce.concat(l,i);const c=[];let m=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(m=m&&f.synchronous,c.unshift(f.fulfilled,f.rejected))});const d=[];this.interceptors.response.forEach(function(f){d.push(f.fulfilled,f.rejected)});let h,b=0,v;if(!m){const p=[Cn.bind(this),void 0];for(p.unshift(...c),p.push(...d),v=p.length,h=Promise.resolve(n);b<v;)h=h.then(p[b++],p[b++]);return h}v=c.length;let u=n;for(;b<v;){const p=c[b++],f=c[b++];try{u=p(u)}catch(g){f.call(this,g);break}}try{h=Cn.call(this,u)}catch(p){return Promise.reject(p)}for(b=0,v=d.length;b<v;)h=h.then(d[b++],d[b++]);return h}getUri(r){r=Ye(this.defaults,r);const n=Jo(r.baseURL,r.url,r.allowAbsoluteUrls);return Ko(n,r.params,r.paramsSerializer)}};C.forEach(["delete","get","head","options"],function(r){Je.prototype[r]=function(n,o){return this.request(Ye(o||{},{method:r,url:n,data:(o||{}).data}))}});C.forEach(["post","put","patch"],function(r){function n(o){return function(i,l,c){return this.request(Ye(c||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}Je.prototype[r]=n(),Je.prototype[r+"Form"]=n(!0)});let pi=class ta{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const o=this;this.promise.then(s=>{if(!o._listeners)return;let i=o._listeners.length;for(;i-- >0;)o._listeners[i](s);o._listeners=null}),this.promise.then=s=>{let i;const l=new Promise(c=>{o.subscribe(c),i=c}).then(s);return l.cancel=function(){o.unsubscribe(i)},l},r(function(i,l,c){o.reason||(o.reason=new pt(i,l,c),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const n=this._listeners.indexOf(r);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const r=new AbortController,n=o=>{r.abort(o)};return this.subscribe(n),r.signal.unsubscribe=()=>this.unsubscribe(n),r.signal}static source(){let r;return{token:new ta(function(s){r=s}),cancel:r}}};function hi(e){return function(n){return e.apply(null,n)}}function ui(e){return C.isObject(e)&&e.isAxiosError===!0}const Jr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Jr).forEach(([e,r])=>{Jr[r]=e});function ra(e){const r=new Je(e),n=zo(Je.prototype.request,r);return C.extend(n,Je.prototype,r,{allOwnKeys:!0}),C.extend(n,r,null,{allOwnKeys:!0}),n.create=function(s){return ra(Ye(e,s))},n}const J=ra(vt);J.Axios=Je;J.CanceledError=pt;J.CancelToken=pi;J.isCancel=_o;J.VERSION=ea;J.toFormData=Kt;J.AxiosError=O;J.Cancel=J.CanceledError;J.all=function(r){return Promise.all(r)};J.spread=hi;J.isAxiosError=ui;J.mergeConfig=Ye;J.AxiosHeaders=ce;J.formToJSON=e=>Go(C.isHTMLForm(e)?new FormData(e):e);J.getAdapter=Xo.getAdapter;J.HttpStatusCode=Jr;J.default=J;const{Axios:px,AxiosError:hx,CanceledError:ux,isCancel:gx,CancelToken:xx,VERSION:fx,all:yx,Cancel:bx,isAxiosError:$x,spread:jx,toFormData:vx,AxiosHeaders:wx,HttpStatusCode:Cx,formToJSON:Sx,getAdapter:kx,mergeConfig:Tx}=J;class gi{client;constructor(){const r="/api/v1";localStorage.removeItem("api_base_url"),this.client=J.create({baseURL:r,timeout:1e4,headers:{"Content-Type":"application/json"}}),this.client.interceptors.request.use(n=>{const o=this.getAuthToken();return o&&(n.headers.Authorization=`Bearer ${o}`),n},n=>Promise.reject(n)),this.client.interceptors.response.use(n=>n,n=>{var s,i,l,c,m,d;if(!n.response){const h={message:n.code==="ECONNABORTED"?"Request timeout. Please try again.":"Network error. Please check your internet connection.",code:"NETWORK_ERROR",details:{originalError:n.message}};return Promise.reject(h)}const o={message:this.getErrorMessage(n),code:n.response.status.toString(),details:n.response.data};switch(n.response.status){case 401:this.clearAuthToken(),o.message="Your session has expired. Please log in again.";break;case 403:o.message="You don't have permission to perform this action.";break;case 404:o.message="The requested resource was not found.";break;case 409:o.message=((i=(s=n.response.data)==null?void 0:s.error)==null?void 0:i.message)||"A conflict occurred. The resource may have been modified.";break;case 422:o.message=((c=(l=n.response.data)==null?void 0:l.error)==null?void 0:c.message)||"Invalid data provided.";break;case 429:o.message="Too many requests. Please wait a moment and try again.";break;case 500:o.message="Server error. Please try again later.";break;case 503:o.message="Service temporarily unavailable. Please try again later.";break}return console.error("API Error:",{status:n.response.status,message:o.message,url:(m=n.config)==null?void 0:m.url,method:(d=n.config)==null?void 0:d.method}),Promise.reject(o)})}getAuthToken(){return localStorage.getItem("auth_token")}setAuthToken(r){localStorage.setItem("auth_token",r)}clearAuthToken(){localStorage.removeItem("auth_token")}getErrorMessage(r){var n,o,s,i,l;return(s=(o=(n=r.response)==null?void 0:n.data)==null?void 0:o.error)!=null&&s.message?r.response.data.error.message:(l=(i=r.response)==null?void 0:i.data)!=null&&l.message?r.response.data.message:r.message?r.message:"An unexpected error occurred"}async retryRequest(r,n=3,o=1e3){let s;for(let i=1;i<=n;i++)try{return await r()}catch(l){if(s=l,l.code&&l.code.startsWith("4")&&l.code!=="408"&&l.code!=="429")throw l;i<n&&await new Promise(c=>setTimeout(c,o*i))}throw s}updateBaseUrl(r){let n;try{const o=new URL(r).origin,s=window.location.origin;o===s||window.location.hostname==="localhost"&&new URL(r).hostname==="localhost"?n="/api/v1":(n=r.replace(/\/$/,""),n.endsWith("/api/v1")||(n+="/api/v1"))}catch{n=r.replace(/\/$/,""),n.endsWith("/api/v1")||(n+="/api/v1")}this.client.defaults.baseURL=n,console.log("API base URL updated to:",n)}async checkConnectivity(){try{return await this.healthCheck(),!0}catch{return!1}}async get(r,n){return(await this.client.get(r,{params:n})).data.data}async post(r,n){return(await this.client.post(r,n)).data.data}async put(r,n){return(await this.client.put(r,n)).data.data}async patch(r,n){return(await this.client.patch(r,n)).data.data}async delete(r){return(await this.client.delete(r)).data.data}async login(r,n){const s=(await this.client.post("/auth/login",{username:r,password:n})).data;return this.setAuthToken(s.token),s}async logout(){try{await this.post("/auth/logout")}finally{this.clearAuthToken()}}async changePassword(r,n){await this.post("/auth/change-password",{currentPassword:r,newPassword:n}),this.clearAuthToken()}async healthCheck(){return(await J.get("/health")).data}async getBoats(){return this.get("/boats")}async getBoat(r){return this.get(`/boats/${r}`)}async createBoat(r){return this.post("/boats",r)}async updateBoat(r,n){return this.put(`/boats/${r}`,n)}async toggleBoatStatus(r,n){return this.patch(`/boats/${r}/status`,{enabled:n})}async setActiveBoat(r){return this.patch(`/boats/${r}/active`)}async getTrips(r){return this.get("/trips",r)}async getTrip(r){return this.get(`/trips/${r}`)}async createTrip(r){return this.post("/trips",r)}async updateTrip(r,n){return this.put(`/trips/${r}`,n)}async addManualData(r,n){return this.patch(`/trips/${r}/manual-data`,n)}async getLicenseProgress(){return this.get("/captain-log/progress")}async getNotes(r){return this.get("/notes",r)}async getNote(r){return this.get(`/notes/${r}`)}async createNote(r){return this.post("/notes",r)}async updateNote(r,n){return this.put(`/notes/${r}`,n)}async deleteNote(r){return this.delete(`/notes/${r}`)}async getTodoLists(r){return this.get("/todos",r?{boatId:r}:void 0)}async getTodoList(r){return this.get(`/todos/${r}`)}async createTodoList(r){return this.post("/todos",r)}async updateTodoList(r,n){return this.put(`/todos/${r}`,n)}async deleteTodoList(r){return this.delete(`/todos/${r}`)}async addTodoItem(r,n){return this.post(`/todos/${r}/items`,{content:n})}async toggleTodoItem(r){return this.patch(`/todos/items/${r}/complete`)}async updateTodoItem(r,n){return this.put(`/todos/items/${r}`,n)}async deleteTodoItem(r){return this.delete(`/todos/items/${r}`)}async getMaintenanceTemplates(r){return this.get("/maintenance/templates",r?{boatId:r}:void 0)}async getMaintenanceTemplate(r){return this.get(`/maintenance/templates/${r}`)}async createMaintenanceTemplate(r){return this.post("/maintenance/templates",r)}async updateMaintenanceTemplate(r,n){return this.put(`/maintenance/templates/${r}`,n)}async deleteMaintenanceTemplate(r){return this.delete(`/maintenance/templates/${r}`)}async getUpcomingMaintenanceEvents(r){return this.get("/maintenance/events/upcoming",r?{boatId:r}:void 0)}async getCompletedMaintenanceEvents(r){return this.get("/maintenance/events/completed",r?{boatId:r}:void 0)}async getMaintenanceEvent(r){return this.get(`/maintenance/events/${r}`)}async completeMaintenanceEvent(r,n){return this.post(`/maintenance/events/${r}/complete`,n)}async getMarkedLocations(r){return this.get("/locations",r)}async getMarkedLocation(r){return this.get(`/locations/${r}`)}async createMarkedLocation(r){return this.post("/locations",r)}async updateMarkedLocation(r,n){return this.put(`/locations/${r}`,n)}async deleteMarkedLocation(r){return this.delete(`/locations/${r}`)}async getNearbyLocations(r,n,o){return this.get("/locations/nearby",{latitude:r,longitude:n,radiusMeters:o})}async uploadPhoto(r,n,o){const s=new FormData;return s.append("photo",r),s.append("entityType",n),s.append("entityId",o),(await this.client.post("/photos",s,{headers:{"Content-Type":"multipart/form-data"}})).data.data}async getPhotos(r,n){return this.get("/photos",{entityType:r,entityId:n})}async deletePhoto(r){return this.delete(`/photos/${r}`)}async getNotifications(){const r=await this.get("/notifications");return Array.isArray(r)?r:(r==null?void 0:r.notifications)||[]}async markNotificationAsRead(r){return this.patch(`/notifications/${r}/read`)}async createBackup(){return this.post("/backups")}async getBackups(){return this.get("/backups")}async downloadBackup(r){return(await this.client.get(`/backups/${r}/download`,{responseType:"blob"})).data}}const N=new gi,xi=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  transform: translateY(${e=>e.$show?"0":"-100%"});
  transition: transform 0.3s ease-in-out;
`,fi=a.div`
  background: ${e=>e.theme.colors.status.warning};
  color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.md};
`,yi=a.button`
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
`,bi=a.div`
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
`,$i=({showConnectionStatus:e=!0})=>{const[r,n]=$.useState(navigator.onLine),[o,s]=$.useState(!1),[i,l]=$.useState(!1);$.useEffect(()=>{const m=()=>{n(!0),s(!1),h()},d=()=>{n(!1),s(!0)},h=async()=>{try{!await N.checkConnectivity()&&navigator.onLine&&(n(!1),s(!0))}catch{navigator.onLine&&(n(!1),s(!0))}};window.addEventListener("online",m),window.addEventListener("offline",d),navigator.onLine?h():s(!0);const b=setInterval(()=>{r||h()},3e4);return()=>{window.removeEventListener("online",m),window.removeEventListener("offline",d),clearInterval(b)}},[r]);const c=async()=>{l(!0);try{await N.checkConnectivity()&&(n(!0),s(!1))}catch{}finally{l(!1)}};return t.jsxs(t.Fragment,{children:[t.jsx(xi,{$show:o,children:t.jsxs(fi,{children:[t.jsx("span",{children:"⚠ You are currently offline"}),t.jsx(yi,{onClick:c,disabled:i,children:i?"Checking...":"Retry"})]})}),e&&t.jsx(bi,{$isOnline:r,children:r?"Online":"Offline"})]})},ji={primary:L`
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
  `},vi={none:L`
    padding: 0;
  `,sm:L`
    padding: ${e=>e.theme.spacing.sm};
  `,md:L`
    padding: ${e=>e.theme.spacing.md};
  `,lg:L`
    padding: ${e=>e.theme.spacing.lg};
  `},wi=a.div`
  display: flex;
  flex-direction: column;

  ${e=>ji[e.variant]}
`,Ci=a.div`
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
`,Si=a.div`
  background-color: ${e=>e.theme.colors.background};
  border: 1px solid;
  border-top: none;
  flex: 1;

  ${e=>vi[e.padding]}
`,D=({children:e,title:r,variant:n="primary",padding:o="md",className:s})=>t.jsxs(wi,{variant:n,className:s,children:[r&&t.jsx(Ci,{className:"panel-header",children:r}),t.jsx(Si,{padding:o,className:"panel-content",children:e})]}),ki={primary:L`
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
  `},Ti={sm:L`
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
  `},Ai=a.button`
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

  ${e=>ki[e.variant]}
  ${e=>Ti[e.size]}

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
`,T=({children:e,variant:r="primary",size:n="md",disabled:o=!1,onClick:s,className:i,type:l="button"})=>t.jsx(Ai,{variant:r,size:n,disabled:o,onClick:s,className:i,type:l,children:e}),Ei={1:L`
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
  `},Fi={neonCarrot:L`
    color: ${e=>e.theme.colors.primary.neonCarrot};
  `,tanoi:L`
    color: ${e=>e.theme.colors.primary.tanoi};
  `,lilac:L`
    color: ${e=>e.theme.colors.primary.lilac};
  `,anakiwa:L`
    color: ${e=>e.theme.colors.primary.anakiwa};
  `,mariner:L`
    color: ${e=>e.theme.colors.primary.mariner};
  `},Li={left:L`
    text-align: left;
  `,center:L`
    text-align: center;
  `,right:L`
    text-align: right;
  `},Di={neonCarrot:"#FF9933",tanoi:"#FFCC99",lilac:"#CC99CC",anakiwa:"#99CCFF"},zi=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Mi=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin: 0;

  ${e=>Ei[e.level]}
  ${e=>Fi[e.color]}
  ${e=>Li[e.align]}
`,Ii=a.div`
  width: 100%;
  height: 4px;
  background-color: ${e=>e.color};
  border-radius: 0;
`,B=({children:e,level:r=1,color:n="neonCarrot",align:o="left",withBar:s=!1,barColor:i="neonCarrot",className:l})=>{const c=`h${r}`,m=t.jsx(Mi,{as:c,level:r,color:n,align:o,className:l,children:e});return s?t.jsxs(zi,{children:[m,t.jsx(Ii,{color:Di[i]})]}):m},na=te`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,Ri=te`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,Ni=a.div`
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
  width: 100%;
  animation: ${e=>e.show?na:Ri} 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    top: 60px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`,Pi=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,Bi=a.div`
  padding: 16px;
  border-left: 4px solid ${e=>{switch(e.type){case"maintenance":return e.theme.colors.primary.neonCarrot;case"warning":return e.theme.colors.status.warning;case"error":return e.theme.colors.status.error;default:return e.theme.colors.primary.anakiwa}}};
  background: ${e=>e.isRead?e.theme.colors.surface.dark:e.theme.colors.background};
  opacity: ${e=>e.isRead?.7:1};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.surface.medium};
  }
`,Oi=a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`,Ui=a.div`
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
`,qi=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.light};
  white-space: nowrap;
  margin-left: 8px;
`,Hi=a.div`
  color: ${e=>e.theme.colors.text.light};
  font-size: 13px;
  line-height: 1.4;
`,Wi=a.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`,Ki=a.div`
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
`,Vi=a.button`
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
`,Gi=a.div`
  text-align: center;
  padding: 32px 16px;
  color: ${e=>e.theme.colors.text.light};
`,_i=({className:e})=>{const[r,n]=$.useState([]),[o,s]=$.useState(!1),[i,l]=$.useState(!1),c=(r||[]).filter(p=>!p.read).length;$.useEffect(()=>{m();const p=setInterval(m,3e4);return()=>clearInterval(p)},[]);const m=async()=>{try{l(!0);const p=await N.getNotifications();n(p)}catch(p){console.error("Failed to load notifications:",p)}finally{l(!1)}},d=()=>{s(!o)},h=async p=>{if(!p.read)try{await N.markNotificationAsRead(p.id),n(f=>f.map(g=>g.id===p.id?{...g,read:!0}:g))}catch(f){console.error("Failed to mark notification as read:",f)}},b=async()=>{const p=(r||[]).filter(f=>!f.read);try{await Promise.all(p.map(f=>N.markNotificationAsRead(f.id))),n(f=>f.map(g=>({...g,read:!0})))}catch(f){console.error("Failed to mark all notifications as read:",f)}},v=p=>{const f=new Date(p),x=new Date().getTime()-f.getTime(),y=Math.floor(x/6e4),j=Math.floor(y/60),w=Math.floor(j/24);return y<1?"Just now":y<60?`${y}m ago`:j<24?`${j}h ago`:w<7?`${w}d ago`:f.toLocaleDateString()},u=p=>{switch(p){case"maintenance_due":return"🔧";case"system":return"ℹ️";case"warning":return"⚠️";case"error":return"❌";default:return"📢"}};return t.jsxs("div",{className:e,children:[t.jsxs(Vi,{onClick:d,$hasUnread:c>0,children:["Alerts",c>0&&t.jsx(Ki,{count:c,children:c>99?"99+":c})]}),o&&t.jsx(Ni,{show:o,children:t.jsx(D,{children:t.jsxs("div",{style:{padding:"16px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsx(B,{level:3,children:"System Alerts"}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[c>0&&t.jsx(T,{size:"sm",variant:"secondary",onClick:b,children:"Mark All Read"}),t.jsx(T,{size:"sm",variant:"secondary",onClick:d,children:"Close"})]})]}),i?t.jsx("div",{style:{textAlign:"center",padding:"20px"},children:"Loading notifications..."}):r.length===0?t.jsxs(Gi,{children:[t.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📭"}),t.jsx("div",{children:"No notifications"})]}):t.jsx(Pi,{children:r.map(p=>t.jsxs(Bi,{type:p.type,isRead:p.read,onClick:()=>h(p),children:[t.jsxs(Oi,{children:[t.jsxs(Ui,{children:[u(p.type)," ",p.title]}),t.jsx(qi,{children:v(p.createdAt)})]}),t.jsx(Hi,{children:p.message}),p.entityType&&p.entityId&&t.jsx(Wi,{children:t.jsx(T,{size:"sm",variant:"primary",onClick:()=>{const f=p.entityType==="maintenance"?`/maintenance/events/${p.entityId}`:`/${p.entityType}/${p.entityId}`;window.location.href=f},children:"View Details"})})]},p.id))})]})})})]})};a.div`
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
  animation: ${na} 0.3s ease-in-out;
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
`;const rn="200px",Qi="60px",kn="60px",Zr="40px",Ji="3px",Zi="44px",Ee="768px",oa=te`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Yi=a.div`
  min-height: 100vh;
  display: grid;
  background: ${e=>e.theme.colors.background};
  grid-template-columns: ${rn} 1fr;
  grid-template-rows: ${kn} 1fr ${Zr};
  grid-template-areas:
    "sidebar header"
    "sidebar content"
    "sidebar footer";
  gap: 0;
  animation: ${oa} 0.6s ease;

  @media (max-width: ${Ee}) {
    grid-template-columns: 1fr;
    grid-template-rows: ${kn} 1fr ${Zr};
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
`,Xi=a.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: ${Ji};
  overflow-y: auto;
  overflow-x: hidden;
  animation: ${oa} 0.4s ease;

  @media (max-width: ${Ee}) {
    display: none;
  }
`,el=a.div`
  width: ${rn};
  height: ${Qi};
  background: ${e=>e.theme.colors.primary.tanoi};
  position: relative;
  flex-shrink: 0;
  border-radius: 32px 0 0 0;
`,tl=a.div`
  width: ${rn};
  height: ${Zr};
  background: ${e=>e.theme.colors.primary.lilac};
  position: relative;
  flex-shrink: 0;
  border-radius: 0 0 0 32px;
  margin-top: auto;
`,Ct=["tanoi","anakiwa","lilac","goldenTanoi","neonCarrot","mariner","anakiwa","lilac","tanoi","neonCarrot","goldenTanoi","mariner"],rl=a.button`
  width: 100%;
  height: ${Zi};
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
`,nl=a.div`
  width: 60%;
  height: 3px;
  background: ${e=>e.$color};
  border-radius: 0 2px 2px 0;
  flex-shrink: 0;
  opacity: 0.6;
`,ol=a.header`
  grid-area: header;
  background: ${e=>e.theme.colors.primary.tanoi};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  @media (max-width: ${Ee}) {
    border-radius: 0;
    justify-content: center;
  }
`,al=a.h1`
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

  @media (max-width: ${Ee}) {
    font-size: ${e=>e.theme.typography.fontSize.lg};
    letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  }
`,sl=a.img`
  height: 40px;
  width: auto;
  cursor: pointer;
  margin-right: 12px;
  filter: drop-shadow(0 0 6px rgba(255, 153, 51, 0.4));
  transition: filter 0.2s;

  &:hover {
    filter: drop-shadow(0 0 10px rgba(255, 153, 51, 0.7));
  }

  @media (max-width: ${Ee}) {
    height: 32px;
  }
`,il=a.span`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  margin-right: auto;
  padding-left: 40px;
  opacity: 0.75;

  @media (max-width: ${Ee}) {
    display: none;
  }
`,ll=a.main`
  grid-area: content;
  background: ${e=>e.theme.colors.background};
  overflow-y: auto;
  padding: ${e=>e.theme.spacing.lg};

  @media (max-width: ${Ee}) {
    padding: ${e=>e.theme.spacing.md};
  }
`,cl=a.footer`
  grid-area: footer;
  background: ${e=>e.theme.colors.primary.lilac};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  @media (max-width: ${Ee}) {
    border-radius: 0;
    justify-content: center;
  }
`,dl=a.span`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  opacity: 0.8;
`,ml=a.div`
  display: none;

  @media (max-width: ${Ee}) {
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
`,pl=a.button`
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
`,hl=a.button`
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
`,ul=a.button`
  display: none;
  @media (max-width: ${Ee}) {
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
`,Tn=[{label:"Dashboard",path:"/dashboard"},{label:"Vessels",path:"/boats"},{label:"Trip Log",path:"/trips"},{label:"Notes",path:"/notes"},{label:"To-Do Lists",path:"/todos"},{label:"Maintenance",path:"/maintenance"},{label:"Navigation",path:"/map"},{label:"Reports",path:"/reports"},{label:"Calendar",path:"/calendar"},{label:"Photos",path:"/photos"},{label:"Settings",path:"/settings"}];function gl(){const e=new Date,r=e.getFullYear(),n=new Date(r,0,1).getTime(),o=new Date(r+1,0,1).getTime(),s=(e.getTime()-n)/(o-n);return((r-2323)*1e3+s*1e3).toFixed(1)}const xl=({children:e})=>{const r=de(),n=Ma(),[o,s]=$.useState(!1),i=d=>d==="/"?n.pathname==="/":d==="/dashboard"?n.pathname==="/dashboard":n.pathname.startsWith(d),l=d=>{r(d),s(!1)},c=gl(),m=["#664466","#3366CC","#006699","#CC99CC","#FFCC66"];return t.jsxs(Yi,{children:[t.jsxs(Xi,{children:[t.jsx(el,{}),Tn.map((d,h)=>{const b=Ct[h%Ct.length],u={tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99",eggplant:"#664466",bahamBlue:"#006699"}[b]||"#FFCC99";return t.jsxs(Ze.Fragment,{children:[h>0&&t.jsx(nl,{$color:m[h%m.length]}),t.jsx(rl,{$color:u,$isActive:i(d.path),onClick:()=>l(d.path),"aria-current":i(d.path)?"page":void 0,children:d.label})]},d.path)}),t.jsx(tl,{})]}),t.jsxs(ol,{children:[t.jsx(ul,{onClick:()=>s(!0),children:"Menu"}),t.jsxs(il,{children:["Stardate ",c," (",new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),")"]}),t.jsx(sl,{src:"/assets/captains-log-logo.png",alt:"Captain's Log",onClick:()=>l("/")}),t.jsx(al,{onClick:()=>l("/"),children:"Captain's Log"}),t.jsx("div",{style:{marginLeft:"16px"},children:t.jsx(_i,{})})]}),t.jsx(ll,{children:e}),t.jsxs(cl,{children:[t.jsx($i,{}),t.jsx(dl,{style:{marginLeft:"auto"},children:"LCARS v47.3 — Library Computer Access/Retrieval System"})]}),t.jsxs(ml,{$open:o,children:[t.jsx(hl,{onClick:()=>s(!1),children:"Close"}),Tn.map((d,h)=>{const v={tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99",eggplant:"#664466",bahamBlue:"#006699"}[Ct[h%Ct.length]]||"#FFCC99";return t.jsx(pl,{$color:v,$isActive:i(d.path),onClick:()=>l(d.path),children:d.label},d.path)})]})]})},fl=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: ${e=>e.theme.spacing.xl};
  text-align: center;
`,yl=a.div`
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
`;const bl=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.xl};
`;class $l extends $.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,n){console.error("Error caught by boundary:",r,n),this.setState({error:r,errorInfo:n}),console.error("Production error:",{error:r.message,stack:r.stack,componentStack:n.componentStack})}handleReload=()=>{window.location.reload()};handleGoHome=()=>{window.location.href="/"};handleRetry=()=>{this.setState({hasError:!1,error:void 0,errorInfo:void 0})};render(){return this.state.hasError?this.props.fallback?this.props.fallback:t.jsx(fl,{children:t.jsxs(D,{children:[t.jsx(B,{level:1,children:"System Error"}),t.jsx(yl,{children:"An unexpected error has occurred in the application."}),t.jsx("p",{children:"The error has been logged and will be investigated. You can try reloading the page or returning to the dashboard."}),t.jsxs(bl,{children:[t.jsx(T,{onClick:this.handleRetry,variant:"primary",children:"Try Again"}),t.jsx(T,{onClick:this.handleReload,variant:"secondary",children:"Reload Page"}),t.jsx(T,{onClick:this.handleGoHome,variant:"secondary",children:"Go to Dashboard"})]}),!1]})}):this.props.children}}const jl={neonCarrot:L`
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

  ${e=>jl[e.color]}

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
`;const vl=a.div`
  display: flex;
  flex-direction: column;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  gap: ${e=>e.gap};
  min-height: 100%;

  > * {
    width: 100%;
    flex-shrink: 0;
  }
`,Te=({children:e,width:r="200px",gap:n="3px",className:o})=>t.jsx(vl,{width:r,gap:n,className:o,children:e}),wl={sm:L`
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
  `},Cl={neonCarrot:L`
    color: ${e=>e.theme.colors.primary.neonCarrot};
  `,lilac:L`
    color: ${e=>e.theme.colors.primary.lilac};
  `,anakiwa:L`
    color: ${e=>e.theme.colors.primary.anakiwa};
  `,mariner:L`
    color: ${e=>e.theme.colors.primary.mariner};
  `,success:L`
    color: ${e=>e.theme.colors.status.success};
  `},Sl={neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",success:"#55FF55",error:"#FF5555"},kl=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.xs};
  background-color: transparent;

  ${e=>wl[e.size]}
`,Tl=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.normal};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  color: ${e=>e.theme.colors.primary.lilac};
  opacity: 0.8;
`,Al=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,El=a.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  box-shadow: 0 0 8px ${e=>e.color};
  flex-shrink: 0;
`,Fl=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};

  ${e=>Cl[e.valueColor]}
`,Ll=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.normal};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
`,A=({label:e,value:r,unit:n,size:o="md",valueColor:s="neonCarrot",showIndicator:i=!1,indicatorColor:l="neonCarrot",className:c})=>t.jsxs(kl,{size:o,className:c,children:[t.jsx(Tl,{className:"data-label",children:e}),t.jsxs(Al,{children:[i&&t.jsx(El,{color:Sl[l]}),t.jsx(Fl,{className:"data-value",valueColor:s,children:r}),n&&t.jsx(Ll,{className:"data-unit",children:n})]})]}),Dl={info:L`
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
  `},zl=a.div.withConfig({shouldForwardProp:e=>!["type","blink"].includes(e)})`
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

  ${e=>Dl[e.type]}

  ${e=>e.blink&&L`
    animation: lcars-blink 1s infinite;
  `}
`,Ml=a.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,Il=a.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Rl=a.div`
  flex: 1;
`,Nl=a.button`
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
`,Pl=e=>{switch(e){case"info":return"ℹ";case"success":return"✓";case"warning":return"⚠";case"error":return"✗";default:return"ℹ"}},Ae=({children:e,type:r="info",blink:n=!1,dismissible:o=!1,onDismiss:s,className:i})=>t.jsxs(zl,{type:r,blink:n,className:i,children:[t.jsxs(Ml,{children:[t.jsx(Il,{children:Pl(r)}),t.jsx(Rl,{children:e})]}),o&&s&&t.jsx(Nl,{onClick:s,"aria-label":"Dismiss alert",children:"×"})]}),Bl={neonCarrot:L`
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
  `},Ol={sm:L`
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
  `},Ul=a.div`
  ${e=>Bl[e.color]}
  ${e=>Ol[e.size]}
`,ql=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.primary};
`,Hl=a.div`
  background-color: ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  position: relative;
  border: 1px solid ${e=>e.theme.colors.surface.light};
`,Wl=a.div`
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
`,Kl=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,An=a.span`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Ut=({title:e,current:r,target:n,unit:o="",color:s="neonCarrot",size:i="md",showPercentage:l=!0,className:c})=>{const m=n>0?r/n*100:0,d=Math.round(m),h=r>=n;return t.jsxs(Ul,{color:s,size:i,className:c,children:[t.jsx(ql,{className:"chart-title",children:e}),t.jsx(Hl,{children:t.jsx(Wl,{className:"progress-fill",progress:m})}),t.jsxs(Kl,{className:"progress-stats",children:[t.jsxs("div",{children:[t.jsx(An,{className:"progress-text",children:r}),o&&` ${o}`," / ",n,o&&` ${o}`]}),l&&t.jsxs("div",{className:"progress-text",children:[t.jsxs(An,{children:[d,"%"]}),h&&" ✓"]})]})]})},Vl={neonCarrot:L`
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
  `},Gl={sm:L`
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
  `},_l=a.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid;
  border-radius: ${e=>e.theme.borderRadius.lg};
  text-align: center;
  position: relative;

  ${e=>Vl[e.color]}
  ${e=>Gl[e.size]}

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
`,Ql=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,er=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,tr=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,rr=({title:e,estimatedDate:r,daysRemaining:n,isComplete:o=!1,color:s="neonCarrot",size:i="md",className:l})=>{const c=d=>{try{return new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"Unknown"}},m=d=>{if(d<=0)return"Goal Achieved";if(d===1)return"1 Day";if(d<30)return`${d} Days`;if(d<365){const b=Math.round(d/30);return b===1?"1 Month":`${b} Months`}const h=Math.round(d/365);return h===1?"1 Year":`${h} Years`};return t.jsxs(_l,{color:s,size:i,isComplete:o,className:`estimate-border ${l||""}`,children:[t.jsx(Ql,{className:"estimate-title",children:e}),o?t.jsxs(t.Fragment,{children:[t.jsx(er,{className:"estimate-value",children:"ACHIEVED"}),t.jsx(tr,{className:"estimate-subtitle",children:"Goal Complete"})]}):t.jsxs(t.Fragment,{children:[r&&t.jsxs(t.Fragment,{children:[t.jsx(er,{className:"estimate-value",children:c(r)}),t.jsx(tr,{className:"estimate-subtitle",children:"Estimated Completion"})]}),n!==void 0&&t.jsxs(t.Fragment,{children:[t.jsx(er,{className:"estimate-value",children:m(n)}),t.jsx(tr,{className:"estimate-subtitle",children:"Remaining"})]})]})]})},pe={all:["boats"],lists:()=>[...pe.all,"list"],list:e=>[...pe.lists(),{filters:e}],details:()=>[...pe.all,"detail"],detail:e=>[...pe.details(),e]},he=()=>se({queryKey:pe.lists(),queryFn:()=>N.getBoats()}),Jl=e=>se({queryKey:pe.detail(e),queryFn:()=>N.getBoat(e),enabled:!!e}),Zl=()=>{const e=_();return Z({mutationFn:r=>N.createBoat(r),onSuccess:()=>{e.invalidateQueries({queryKey:pe.lists()})}})},Yl=()=>{const e=_();return Z({mutationFn:({id:r,data:n})=>N.updateBoat(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:pe.detail(n)}),e.invalidateQueries({queryKey:pe.lists()})}})},aa=()=>{const e=_();return Z({mutationFn:({id:r,enabled:n})=>N.toggleBoatStatus(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:pe.detail(n)}),e.invalidateQueries({queryKey:pe.lists()})}})},sa=()=>{const e=_();return Z({mutationFn:r=>N.setActiveBoat(r),onSuccess:()=>{e.invalidateQueries({queryKey:pe.lists()})}})},ke={all:["trips"],lists:()=>[...ke.all,"list"],list:e=>[...ke.lists(),{filters:e}],details:()=>[...ke.all,"detail"],detail:e=>[...ke.details(),e]},Ue=e=>se({queryKey:ke.list(e||{}),queryFn:()=>N.getTrips(e)}),ia=e=>se({queryKey:ke.detail(e),queryFn:()=>N.getTrip(e),enabled:!!e}),Xl=()=>{const e=_();return Z({mutationFn:({id:r,data:n})=>N.updateTrip(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:ke.detail(n)}),e.invalidateQueries({queryKey:ke.lists()})}})},ec=()=>{const e=_();return Z({mutationFn:({tripId:r,data:n})=>N.addManualData(r,n),onSuccess:(r,{tripId:n})=>{e.invalidateQueries({queryKey:ke.detail(n)}),e.invalidateQueries({queryKey:ke.lists()})}})},la={all:["license"],progress:()=>[...la.all,"progress"]},ca=()=>se({queryKey:la.progress(),queryFn:()=>N.getLicenseProgress(),staleTime:5*60*1e3}),tc=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,rc=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,nc=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,oc=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing.sm};
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,ac=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,sc=a.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,ic=a.span`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,lc=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,cc=a.div`
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
`,dc=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,mc=()=>{const{data:e,isLoading:r,error:n}=he(),{data:o,isLoading:s,error:i}=Ue(),{data:l,isLoading:c,error:m}=ca(),d=(e==null?void 0:e.filter(f=>f.enabled))||[],h=(o==null?void 0:o.slice(0,5))||[],b=(o==null?void 0:o.length)||0,v=f=>new Date(f).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),u=f=>{const g=Math.floor(f/3600),x=Math.floor(f%3600/60);return`${g}h ${x}m`},p=(f,g)=>Math.min(f/g*100,100);return t.jsxs(tc,{children:[t.jsx(B,{level:1,children:"Command Center"}),(n||i||m)&&t.jsx(Ae,{type:"error",children:"Unable to load dashboard data. Check your connection and try again."}),t.jsxs(rc,{children:[t.jsx(D,{title:"Fleet Status",variant:"accent",children:r?t.jsx(A,{label:"Loading",value:"...",valueColor:"anakiwa"}):t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"Total Vessels",value:(e==null?void 0:e.length)||0,valueColor:"anakiwa"}),t.jsx(A,{label:"Active Vessels",value:d.length,valueColor:"success"}),t.jsx(A,{label:"Inactive Vessels",value:((e==null?void 0:e.length)||0)-d.length,valueColor:"neonCarrot"})]})}),t.jsx(D,{title:"License Progress",variant:"secondary",children:c?t.jsx(A,{label:"Loading",value:"...",valueColor:"lilac"}):l?t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"Sea Time Days",value:l.totalDays,valueColor:"lilac"}),t.jsx(A,{label:"Days (3 Years)",value:l.daysInLast3Years,valueColor:"lilac"}),t.jsxs("div",{children:[t.jsx(cc,{progress:p(l.totalDays,360)}),t.jsxs(dc,{children:[t.jsx("span",{children:"360 Day Goal"}),t.jsxs("span",{children:[Math.round(p(l.totalDays,360)),"%"]})]})]})]}):t.jsx(A,{label:"Status",value:"Disabled",valueColor:"neonCarrot"})}),t.jsxs(D,{title:"System Status",variant:"primary",children:[t.jsx(A,{label:"Interface Status",value:"ONLINE",valueColor:"success",size:"sm"}),t.jsx(A,{label:"Active Boats",value:r?"...":d.length.toString(),valueColor:"neonCarrot",size:"sm"}),t.jsx(A,{label:"Total Trips",value:s?"...":b.toString(),valueColor:"anakiwa",size:"sm"})]})]}),t.jsxs(lc,{children:[t.jsx(T,{size:"sm",variant:"primary",children:"New Trip"}),t.jsx(T,{size:"sm",variant:"secondary",children:"Add Boat"})]}),t.jsxs(nc,{children:[t.jsx(D,{title:"Recent Trips",variant:"primary",children:s?t.jsx(A,{label:"Loading",value:"...",valueColor:"neonCarrot"}):h.length>0?h.map(f=>{var g,x;return t.jsxs(oc,{children:[t.jsxs(ac,{children:[t.jsx(sc,{children:v(f.startTime)}),t.jsxs(ic,{children:[u(((g=f.statistics)==null?void 0:g.durationSeconds)||0)," • ",f.waterType]})]}),t.jsx(A,{label:"Distance",value:Math.round((((x=f.statistics)==null?void 0:x.distanceMeters)||0)/1852),unit:"nm",size:"sm",valueColor:"neonCarrot"})]},f.id)}):t.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No trips recorded yet"})}),t.jsx(D,{title:"Upcoming Tasks",variant:"accent",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No maintenance tasks due"})})]})]})},pc=te`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,hc=te`
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(255, 153, 51, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 40px rgba(255, 153, 51, 0.9)) drop-shadow(0 0 60px rgba(255, 153, 51, 0.4));
  }
`,uc=te`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,da=te`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`,qe=te`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,gc=te`
  from { transform: translateX(-200px); opacity: 0; }
  to { transform: translateX(0); opacity: 0.7; }
`,xc=a.div`
  min-height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 2rem;
`,fc=a.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.4;
`,yc=a.img`
  width: 400px;
  max-width: 80vw;
  height: auto;
  margin-bottom: 3rem;
  animation: ${hc} 3s ease-in-out infinite, ${qe} 1s ease;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 300px;
    margin-bottom: 2rem;
  }
`,bc=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  margin: 2rem 0;
  z-index: 1;
  animation: ${qe} 1s ease 0.3s backwards;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,$c=a.div`
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
`,jc=a.div`
  color: #99CCFF;
  font-family: 'Antonio', sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`,vc=a.div`
  color: ${e=>e.$color};
  font-family: 'Antonio', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
`,wc=a.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0.5rem;
`,Cc=a.div`
  height: 100%;
  background: ${e=>e.$color};
  width: ${e=>e.$percentage}%;
  transition: width 0.3s ease;
  box-shadow: 0 0 8px ${e=>e.$color};
`,Sc=a.div`
  position: absolute;
  left: -100px;
  top: ${e=>e.$top};
  width: 80px;
  height: 4px;
  background: ${e=>e.$color};
  border-radius: 2px;
  opacity: 0;
  animation: ${gc} 1.5s ease-in-out ${e=>e.$delay}s forwards;
  z-index: 0;
`,kc=a.div`
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
  animation: ${qe} 1s ease 0.5s backwards;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: 60px;
    left: 20px;
    border-width: 8px;
  }
`,Tc=a.div`
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
  animation: ${qe} 1s ease 0.7s backwards;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    bottom: 60px;
    right: 20px;
    border-width: 8px;
  }
`,Ac=a.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  z-index: 1;
  animation: ${qe} 1s ease 0.5s backwards;
`,Ec=a.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$color};
  box-shadow: 0 0 10px ${e=>e.$color};
  animation: ${pc} 2s ease-in-out ${e=>e.$delay} infinite;
`,Fc=a.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  z-index: 1;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${qe} 1s ease 0.7s backwards;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`,nr=a.button`
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
`,Lc=a.div`
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
`,Dc=a.div`
  display: flex;
  white-space: nowrap;
  animation: ${uc} 40s linear infinite;
  gap: 3rem;
`,zc=a.span`
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
    animation: ${da} 1.5s ease-in-out infinite;
  }
`,Mc=a.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #99CCFF;
  border-radius: 0 16px 16px 0;
  padding: 0.75rem 1.5rem;
  z-index: 1;
  animation: ${qe} 1s ease 0.9s backwards;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
  }
`,Ic=a.div`
  color: #99CCFF;
  font-family: 'Antonio', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
`,Rc=a.div`
  color: #FFCC66;
  font-family: 'Antonio', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.05em;
`,Nc=a.div`
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
  animation: ${qe} 1s ease 0.9s backwards;

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.4rem 0.8rem;
  }
`,Pc=a.span`
  color: #FF9933;
  font-family: 'Antonio', sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`,Bc=a.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #FF9933;
  box-shadow: 0 0 10px #FF9933;
  animation: ${da} 1s ease-in-out infinite;
`;function En(){const e=new Date,r=e.getFullYear(),n=new Date(r,0,1).getTime(),o=new Date(r+1,0,1).getTime(),s=(e.getTime()-n)/(o-n);return((r-2323)*1e3+s*1e3).toFixed(5)}function me(e,r){return e+Math.random()*(r-e)}const Oc=()=>{const e=$.useRef(null),r=$.useRef([]),n=$.useRef();return $.useEffect(()=>{const o=e.current;if(!o)return;const s=o.getContext("2d");if(!s)return;const i=()=>{o.width=window.innerWidth,o.height=window.innerHeight};i(),window.addEventListener("resize",i);const l=200,c=[];for(let d=0;d<l;d++)c.push({x:me(-o.width,o.width),y:me(-o.height,o.height),z:me(0,o.width)});r.current=c;const m=()=>{const d=o.width,h=o.height,b=d/2,v=h/2;s.fillStyle="rgba(0, 0, 0, 0.1)",s.fillRect(0,0,d,h),c.forEach(u=>{u.z-=2,u.z<=0&&(u.x=me(-d,d),u.y=me(-h,h),u.z=d,u.prevX=void 0,u.prevY=void 0);const p=128/u.z,f=u.x*p+b,g=u.y*p+v;if(f>=0&&f<=d&&g>=0&&g<=h){const x=(1-u.z/d)*2,y=Math.floor((1-u.z/d)*255),j=.5+(1-u.z/d)*.5;u.prevX!==void 0&&u.prevY!==void 0&&(s.strokeStyle=`rgba(${y}, ${y}, 255, ${j*.5})`,s.lineWidth=x*.5,s.beginPath(),s.moveTo(u.prevX,u.prevY),s.lineTo(f,g),s.stroke()),s.fillStyle=`rgba(${y}, ${y}, 255, ${j})`,s.beginPath(),s.arc(f,g,x,0,Math.PI*2),s.fill(),u.prevX=f,u.prevY=g}}),n.current=requestAnimationFrame(m)};return m(),()=>{window.removeEventListener("resize",i),n.current&&cancelAnimationFrame(n.current)}},[]),t.jsx(fc,{ref:e})},Fn=()=>{const e=de(),[r,n]=$.useState(En()),[o,s]=$.useState(257.4),[i,l]=$.useState(1.247),[c,m]=$.useState(97.3),[d,h]=$.useState(1547.2),[b,v]=$.useState(.0042),[u,p]=$.useState(99.7),[f,g]=$.useState([]);$.useEffect(()=>{const w=setInterval(()=>{n(En())},3e3);return()=>clearInterval(w)},[]),$.useEffect(()=>{const w=setInterval(()=>{s(me(250,280))},500);return()=>clearInterval(w)},[]),$.useEffect(()=>{const w=setInterval(()=>{l(me(1.1,1.4))},300);return()=>clearInterval(w)},[]),$.useEffect(()=>{const w=setInterval(()=>{m(me(94,100))},600);return()=>clearInterval(w)},[]),$.useEffect(()=>{const w=setInterval(()=>{h(me(1500,1600))},400);return()=>clearInterval(w)},[]),$.useEffect(()=>{const w=setInterval(()=>{v(me(.003,.006))},700);return()=>clearInterval(w)},[]),$.useEffect(()=>{const w=setInterval(()=>{p(me(98.5,100))},550);return()=>clearInterval(w)},[]),$.useEffect(()=>{const w=["#FFCC99","#99CCFF","#CC99CC","#FFCC66","#FF9933"],k=setInterval(()=>{const I={color:w[Math.floor(Math.random()*w.length)],top:`${me(20,80)}%`,delay:0};g(P=>[...P,I].slice(-6))},me(3e3,6e3));return()=>clearInterval(k)},[]);const x=["All systems nominal","Warp core stable","Navigation array calibrated","Subspace communications active","Deflector shields online","Sensors operating at peak efficiency","Life support systems optimal","Transporter standing by","Quantum slipstream drive ready","Temporal sensors synchronized"],y=[{label:"Shield Harmonic Frequency",value:`${o.toFixed(1)} MHz`,color:"#99CCFF",percentage:(o-250)/30*100},{label:"Anti-Matter Injection Flow",value:`${i.toFixed(3)} cm³/s`,color:"#FFCC66",percentage:(i-1.1)/(1.4-1.1)*100},{label:"Communications Uplink Signal",value:`${c.toFixed(1)}%`,color:"#99CCFF",percentage:(c-94)/6*100},{label:"Warp Core Output",value:`${d.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1})} TW`,color:"#FFCC99",percentage:(d-1500)/100*100},{label:"Sensor Array Resolution",value:`${b.toFixed(4)} arc-sec`,color:"#99CCFF",percentage:(b-.003)/(.006-.003)*100},{label:"Life Support Efficiency",value:`${u.toFixed(1)}%`,color:"#CC99CC",percentage:(u-98.5)/(100-98.5)*100}],j=[{color:"#FF9933",delay:"0s"},{color:"#99CCFF",delay:"0.3s"},{color:"#CC99CC",delay:"0.6s"},{color:"#FFCC66",delay:"0.9s"},{color:"#99CCFF",delay:"1.2s"}];return t.jsxs(xc,{children:[t.jsx(Oc,{}),t.jsxs(Mc,{children:[t.jsx(Ic,{children:"Stardate"}),t.jsx(Rc,{children:r})]}),t.jsxs(Nc,{children:[t.jsx(Pc,{children:"LCARS"}),t.jsx(Bc,{})]}),t.jsx(kc,{}),t.jsx(Tc,{}),t.jsx(yc,{src:"/assets/captains-log-logo.png",alt:"Captain's Log",onClick:()=>e("/dashboard")}),t.jsx(Ac,{children:j.map((w,F)=>t.jsx(Ec,{$color:w.color,$delay:w.delay},F))}),t.jsxs(bc,{children:[f.map((w,F)=>t.jsx(Sc,{$color:w.color,$top:w.top,$delay:w.delay},F)),y.map((w,F)=>t.jsxs($c,{$color:w.color,children:[t.jsx(jc,{children:w.label}),t.jsx(vc,{$color:w.color,children:w.value}),t.jsx(wc,{children:t.jsx(Cc,{$color:w.color,$percentage:w.percentage})})]},F))]}),t.jsxs(Fc,{children:[t.jsx(nr,{$color:"#FFCC99",onClick:()=>e("/dashboard"),children:"Dashboard"}),t.jsx(nr,{$color:"#99CCFF",onClick:()=>e("/trips"),children:"Trip Log"}),t.jsx(nr,{$color:"#CC99CC",onClick:()=>e("/boats"),children:"Vessels"})]}),t.jsx(Lc,{children:t.jsx(Dc,{children:x.concat(x).map((w,F)=>t.jsx(zc,{children:w},F))})})]})};let ct=null;const Uc={boats:["boats"],trips:["trips"],notes:["notes"],todos:["todos"],maintenance_templates:["maintenanceTemplates"],maintenance_events:["maintenanceEvents"],locations:["locations"],photos:["photos"],sensors:["sensors"]};function Ln(e){ma();const r=localStorage.getItem("auth_token");if(!r)return;const o=`${localStorage.getItem("api_base_url")||"/api/v1"}/sync/events?token=${encodeURIComponent(r)}`;ct=new EventSource(o),ct.onmessage=s=>{try{const i=JSON.parse(s.data);if(i.type==="connected")return;const l=Uc[i.type];l&&e.invalidateQueries({queryKey:l})}catch{}},ct.onerror=()=>{}}function ma(){ct&&(ct.close(),ct=null)}const pa=$.createContext(null),qc=({children:e})=>{const r=_(),[n,o]=$.useState({isAuthenticated:!1,isLoading:!0,needsSetup:!1,user:null}),s=$.useCallback(async()=>{try{if(!localStorage.getItem("auth_token")){o({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null});return}await N.getBoats(),o({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:{id:"current",username:"user",createdAt:"",updatedAt:""}}),Ln(r)}catch{localStorage.removeItem("auth_token"),o({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null})}},[]);$.useEffect(()=>{s()},[s]);const i=$.useCallback(async(m,d)=>{try{const h=await N.login(m,d);return o({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:h.user}),Ln(r),{success:!0}}catch(h){return o(b=>({...b,isAuthenticated:!1})),{success:!1,error:h.message||"Login failed"}}},[]),l=$.useCallback(async()=>{try{await N.logout()}catch(m){console.warn("Logout request failed:",m)}finally{ma(),o({isAuthenticated:!1,isLoading:!1,needsSetup:!1,user:null})}},[]),c={...n,login:i,logout:l,checkAuthStatus:s};return Ze.createElement(pa.Provider,{value:c},e)},nn=()=>{const e=$.useContext(pa);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},Hc=a.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.lg};
`,Wc=a.div`
  max-width: 600px;
  width: 100%;
`,Kc=a.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${e=>e.theme.spacing.xl};
`,Vc=a.img`
  max-width: 200px;
  height: auto;
  filter: drop-shadow(0 0 10px ${e=>e.theme.colors.primary.neonCarrot}40);
`,Gc=a.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,or=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,ar=a.label`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,sr=a.input`
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
`,_c=a.div`
  display: flex;
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.lg};
`,ir=()=>{const e=de(),{login:r,isAuthenticated:n}=nn();$.useEffect(()=>{n&&e("/")},[n,e]);const[o,s]=$.useState({username:"",password:"",serverUrl:""}),[i,l]=$.useState(!1),[c,m]=$.useState(null),[d,h]=$.useState(!1),b=u=>{const{name:p,value:f}=u.target;s(g=>({...g,[p]:f}))},v=async u=>{u.preventDefault(),l(!0),m(null);try{o.serverUrl.trim()?(N.updateBaseUrl(o.serverUrl),console.log("Server URL configured:",o.serverUrl)):console.log("Using default server URL (proxy)"),console.log("Attempting login with:",{username:o.username});const p=await r(o.username,o.password);console.log("Login result:",p),p.success?(m({type:"success",text:"LCARS Interface Initialized Successfully! Redirecting..."}),console.log("Login successful, setting timeout for redirect"),setTimeout(()=>{console.log("Redirecting to dashboard"),e("/")},1500)):(console.log("Login failed:",p.error),m({type:"error",text:p.error||"Authentication failed. Please check your credentials."}))}catch(p){console.error("Login error:",p),m({type:"error",text:p.message||"Setup failed. Please check your connection and try again."})}finally{l(!1)}};return t.jsx(Hc,{children:t.jsxs(Wc,{children:[t.jsx(Kc,{children:t.jsx(Vc,{src:"/assets/captains-log-logo.png",alt:"Captain's Log"})}),t.jsxs(D,{title:"System Initialization",padding:"lg",children:[t.jsx(B,{level:2,align:"center",children:"LCARS Setup Wizard"}),t.jsxs(Gc,{onSubmit:v,children:[t.jsxs(or,{children:[t.jsx(ar,{htmlFor:"username",children:"Username"}),t.jsx(sr,{type:"text",id:"username",name:"username",value:o.username,onChange:b,placeholder:"Enter your username",required:!0,disabled:i})]}),t.jsxs(or,{children:[t.jsx(ar,{htmlFor:"password",children:"Password"}),t.jsx(sr,{type:"password",id:"password",name:"password",value:o.password,onChange:b,placeholder:"Enter your password",required:!0,disabled:i})]}),t.jsx("div",{style:{textAlign:"right"},children:t.jsx("button",{type:"button",onClick:()=>h(!d),style:{background:"none",border:"none",color:"#99CCFF",cursor:"pointer",fontSize:"12px",textTransform:"uppercase",letterSpacing:"1px"},children:d?"Hide Advanced":"Advanced Options"})}),d&&t.jsxs(or,{children:[t.jsx(ar,{htmlFor:"serverUrl",children:"Server URL (Optional)"}),t.jsx(sr,{type:"url",id:"serverUrl",name:"serverUrl",value:o.serverUrl,onChange:b,placeholder:"Leave empty for default",disabled:i})]}),c&&t.jsx(Ae,{type:c.type==="success"?"success":c.type==="error"?"error":"info",children:c.text}),t.jsx(_c,{children:t.jsx(T,{type:"submit",disabled:i,size:"lg",children:i?"Initializing...":"Initialize LCARS"})})]})]})]})})},Qc=te`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Jc=te`
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
  animation: ${Qc} 1s linear infinite;
`;a.div`
  margin-left: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>{switch(e.size){case"sm":return e.theme.typography.fontSize.sm;case"lg":return e.theme.typography.fontSize.lg;default:return e.theme.typography.fontSize.md}}};
  animation: ${Jc} 2s ease-in-out infinite;
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
    animation: ${te`
      0% { left: -100%; }
      100% { left: 100%; }
    `} 2s ease-in-out infinite;
  }
`;const ha=a.div`
  background: linear-gradient(
    90deg,
    ${e=>e.theme.colors.surface.dark} 25%,
    ${e=>e.theme.colors.surface.medium} 50%,
    ${e=>e.theme.colors.surface.dark} 75%
  );
  background-size: 200% 100%;
  animation: ${te`
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  `} 2s ease-in-out infinite;
  border-radius: 4px;
`,Dn=a(ha)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"1em"};
  margin: 4px 0;
`,Zc=a(ha)`
  width: 100%;
  height: 120px;
  margin: 8px 0;
`,St=({variant:e="text",width:r,height:n,lines:o=1})=>e==="card"?t.jsx(Zc,{}):o===1?t.jsx(Dn,{width:r,height:n}):t.jsx("div",{children:Array.from({length:o},(s,i)=>t.jsx(Dn,{width:i===o-1?"60%":r,height:n},i))}),Yc=a.div`
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
`,Xc=a.div`
  font-size: 1.2em;
  margin-right: ${e=>e.theme.spacing.sm};
  color: ${e=>e.theme.colors.status.error};
`,ed=a.div`
  font-weight: bold;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.status.error};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,td=a.div`
  color: ${e=>e.theme.colors.text.light};
  margin-bottom: ${e=>e.theme.spacing.md};
  line-height: 1.5;
`,rd=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.md};
`,nd=a.code`
  background: ${e=>e.theme.colors.surface.dark};
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
  color: ${e=>e.theme.colors.status.error};
`,od=({title:e="Error",message:r,code:n,variant:o="card",showIcon:s=!0,onRetry:i,onDismiss:l,retryText:c="Try Again",dismissText:m="Dismiss"})=>{const d=t.jsxs(Yc,{variant:o,children:[s&&o==="inline"&&t.jsx(Xc,{children:"⚠"}),o!=="inline"&&t.jsxs(ed,{children:[s&&"⚠ ",e]}),t.jsxs(td,{children:[r,n&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("small",{children:["Error code: ",t.jsx(nd,{children:n})]})]})]}),(i||l)&&t.jsxs(rd,{children:[i&&t.jsx(T,{onClick:i,variant:"primary",size:"sm",children:c}),l&&t.jsx(T,{onClick:l,variant:"secondary",size:"sm",children:m})]})]});return o==="card"?t.jsx(D,{children:d}):d};function ad(e){const r=_(),[n,o]=$.useState(!1);return{optimisticUpdate:$.useCallback(async(i,l,c,m)=>{o(!0);const d=r.getQueryData(e);r.setQueryData(e,h=>h===void 0?h:i(h));try{const h=await l();return await r.invalidateQueries({queryKey:e}),c==null||c(h),h}catch(h){throw d!==void 0&&r.setQueryData(e,d),m==null||m(h),h}finally{o(!1)}},[r,e]),isOptimistic:n}}function sd(e){const{optimisticUpdate:r,isOptimistic:n}=ad(e),o=$.useCallback((l,c)=>r((m=[])=>[...m,l],c),[r]),s=$.useCallback((l,c)=>r((m=[])=>m.filter(d=>d.id!==l),c),[r]),i=$.useCallback((l,c,m)=>r((d=[])=>d.map(h=>h.id===l?c(h):h),m),[r]);return{optimisticAdd:o,optimisticRemove:s,optimisticUpdate:i,isOptimistic:n}}const lr=a.div`
  padding: 20px;
`,zn=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,id=a.div`
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
`,ld=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  text-transform: uppercase;
`,cd=a.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`,Mn=a.span`
  padding: 4px 12px;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background: ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.neonCarrot;case"enabled":return e.theme.colors.primary.anakiwa;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  color: ${e=>e.theme.colors.background};
`,dd=a.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,In=a(T)`
  flex: 1;
  min-width: 120px;
`,Rn=a.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,md=a.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.colors.text.secondary};
`,pd=a.div`
  font-size: 4rem;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.primary.anakiwa};
`,Nn=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Pn=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,hd=()=>{const e=de(),{data:r,isLoading:n,error:o}=he(),s=aa(),i=sa(),[l,c]=$.useState(null),{optimisticUpdate:m}=sd(["boats"]),d=g=>{e(`/boats/${g.id}`)},h=async g=>{c(`toggle-${g.id}`);try{await m(g.id,x=>({...x,enabled:!x.enabled}),()=>s.mutateAsync({id:g.id,enabled:!g.enabled}))}catch(x){console.error("Failed to toggle boat status:",x)}finally{c(null)}},b=async g=>{if(!g.isActive){c(`active-${g.id}`);try{await i.mutateAsync(g.id)}catch(x){console.error("Failed to set active boat:",x)}finally{c(null)}}},v=()=>{e("/boats/new")};if(n)return t.jsxs(lr,{children:[t.jsxs(Nn,{children:[t.jsxs(Pn,{children:[t.jsx(B,{children:"BOAT MANAGEMENT"}),t.jsx(St,{width:"200px",height:"20px"})]}),t.jsxs(Rn,{children:[t.jsx(St,{width:"150px",height:"40px"}),t.jsx(St,{width:"180px",height:"40px"})]})]}),t.jsx(zn,{children:Array.from({length:3},(g,x)=>t.jsx(D,{children:t.jsx(St,{variant:"card"})},x))})]});if(o)return t.jsxs(lr,{children:[t.jsx(B,{children:"BOAT MANAGEMENT"}),t.jsx(od,{title:"Failed to Load Boats",message:o.message,onRetry:()=>window.location.reload()})]});const u=r==null?void 0:r.find(g=>g.isActive),p=(r==null?void 0:r.filter(g=>g.enabled))||[],f=(r==null?void 0:r.filter(g=>!g.enabled))||[];return t.jsxs(lr,{children:[t.jsxs(Nn,{children:[t.jsxs(Pn,{children:[t.jsx(B,{children:"BOAT MANAGEMENT"}),t.jsx(A,{label:"VESSELS REGISTERED",value:(r==null?void 0:r.length)||0,valueColor:"anakiwa",size:"sm"})]}),t.jsxs(Rn,{children:[t.jsx(A,{label:"ACTIVE VESSEL",value:(u==null?void 0:u.name)||"NONE SELECTED",valueColor:u?"neonCarrot":"anakiwa"}),t.jsx(T,{variant:"primary",onClick:v,children:"ADD NEW VESSEL"})]})]}),!r||r.length===0?t.jsx(D,{children:t.jsxs(md,{children:[t.jsx(pd,{children:"🚤"}),t.jsx("h3",{children:"NO VESSELS REGISTERED"}),t.jsx("p",{children:"Add your first vessel to begin tracking trips and maintenance."}),t.jsx(T,{variant:"primary",onClick:v,children:"ADD FIRST VESSEL"})]})}):t.jsx(zn,{children:r.map(g=>t.jsxs(id,{$isActive:g.isActive,$isEnabled:g.enabled,onClick:()=>d(g),children:[t.jsx(ld,{children:g.name}),t.jsxs(cd,{children:[g.isActive&&t.jsx(Mn,{$type:"active",children:"ACTIVE"}),t.jsx(Mn,{$type:g.enabled?"enabled":"disabled",children:g.enabled?"ENABLED":"DISABLED"})]}),t.jsx(A,{label:"VESSEL ID",value:g.id.slice(0,8).toUpperCase(),valueColor:"anakiwa",size:"sm"}),t.jsx(A,{label:"REGISTERED",value:new Date(g.createdAt).toLocaleDateString(),valueColor:"anakiwa",size:"sm"}),t.jsxs(dd,{children:[!g.isActive&&g.enabled&&t.jsx(In,{variant:"secondary",onClick:()=>b(g),disabled:l===`active-${g.id}`,children:l===`active-${g.id}`?"SETTING...":"SET ACTIVE"}),t.jsx(In,{variant:g.enabled?"danger":"accent",onClick:()=>h(g),disabled:l===`toggle-${g.id}`,children:l===`toggle-${g.id}`?"UPDATING...":g.enabled?"DISABLE":"ENABLE"})]})]},g.id))}),r&&r.length>0&&t.jsxs("div",{style:{marginTop:"30px",display:"flex",gap:"20px"},children:[t.jsx(A,{label:"ENABLED VESSELS",value:p.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"DISABLED VESSELS",value:f.length.toString(),valueColor:"lilac"})]})]})},cr=a.div`
  padding: 20px;
`,ud=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Bn=a(D)`
  padding: 25px;
`,dr=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.2rem;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  border-bottom: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding-bottom: 10px;
`,gd=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
`,On=a.div`
  padding: 15px;
  text-align: center;
  border: 2px solid ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.neonCarrot;case"enabled":return e.theme.colors.primary.anakiwa;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  background: ${e=>{switch(e.$type){case"active":return`${e.theme.colors.primary.neonCarrot}20`;case"enabled":return`${e.theme.colors.primary.anakiwa}15`;case"disabled":return`${e.theme.colors.interactive.disabled}15`;default:return`${e.theme.colors.interactive.disabled}15`}}};
`,Un=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 5px;
  text-transform: uppercase;
`,qn=a.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
`,xd=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
`,Hn=a(T)`
  margin-right: 15px;
`,fd=a.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,yd=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,bd=a.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
`,$d=a.input`
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
`,jd=a.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 20px;
`,vd=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`,wd=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Cd=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Sd=a(D)`
  padding: 25px;
  margin-top: 30px;
`,kd=()=>{const{id:e}=Oe(),r=de(),{data:n,isLoading:o,error:s}=Jl(e),{data:i}=Ue({boatId:e}),l=Yl(),c=aa(),m=sa(),[d,h]=$.useState(!1),[b,v]=$.useState({name:""}),[u,p]=$.useState(null);Ze.useEffect(()=>{n&&v({name:n.name})},[n]);const f=()=>{r("/boats")},g=()=>{h(!0)},x=()=>{h(!1),n&&v({name:n.name})},y=async P=>{if(P.preventDefault(),!(!n||!b.name.trim())){p("save");try{await l.mutateAsync({id:n.id,data:{name:b.name.trim()}}),h(!1)}catch(K){console.error("Failed to update boat:",K)}finally{p(null)}}},j=async()=>{if(n){p("toggle");try{await c.mutateAsync({id:n.id,enabled:!n.enabled})}catch(P){console.error("Failed to toggle boat status:",P)}finally{p(null)}}},w=async()=>{if(!(!n||n.isActive)){p("active");try{await m.mutateAsync(n.id)}catch(P){console.error("Failed to set active boat:",P)}finally{p(null)}}};if(o)return t.jsxs(cr,{children:[t.jsx(B,{children:"VESSEL DETAILS"}),t.jsx(A,{label:"STATUS",value:"LOADING VESSEL DATA...",valueColor:"anakiwa"})]});if(s||!n)return t.jsxs(cr,{children:[t.jsx(B,{children:"VESSEL DETAILS"}),t.jsx(Ae,{type:"error",children:(s==null?void 0:s.message)||"Vessel not found"}),t.jsx(Hn,{variant:"secondary",onClick:f,children:"BACK TO VESSELS"})]});const F=(i==null?void 0:i.length)||0,k=(i==null?void 0:i.reduce((P,K)=>{var E;return P+(((E=K.statistics)==null?void 0:E.durationSeconds)||0)},0))||0,I=(i==null?void 0:i.reduce((P,K)=>{var E;return P+(((E=K.statistics)==null?void 0:E.distanceMeters)||0)},0))||0;return t.jsx(t.Fragment,{children:t.jsxs(cr,{children:[t.jsxs(wd,{children:[t.jsxs(Cd,{children:[t.jsx(B,{children:"VESSEL DETAILS"}),t.jsx(A,{label:"VESSEL NAME",value:n.name,valueColor:"neonCarrot",size:"sm"})]}),t.jsxs("div",{children:[t.jsx(Hn,{variant:"secondary",onClick:f,children:"BACK TO VESSELS"}),!d&&t.jsx(T,{variant:"primary",onClick:g,children:"EDIT VESSEL"})]})]}),t.jsxs(ud,{children:[t.jsxs(Bn,{children:[t.jsx(dr,{children:"Vessel Information"}),d?t.jsxs(fd,{onSubmit:y,children:[t.jsxs(yd,{children:[t.jsx(bd,{children:"Vessel Name"}),t.jsx($d,{type:"text",value:b.name,onChange:P=>v({...b,name:P.target.value}),placeholder:"Enter vessel name",required:!0,disabled:u==="save"})]}),t.jsxs(jd,{children:[t.jsx(T,{type:"button",variant:"secondary",onClick:x,disabled:u==="save",children:"CANCEL"}),t.jsx(T,{type:"submit",variant:"primary",disabled:u==="save"||!b.name.trim(),children:u==="save"?"SAVING...":"SAVE CHANGES"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"VESSEL NAME",value:n.name,valueColor:"neonCarrot"}),t.jsx(A,{label:"VESSEL ID",value:n.id,valueColor:"anakiwa"}),t.jsx(A,{label:"REGISTERED",value:new Date(n.createdAt).toLocaleString(),valueColor:"anakiwa"}),t.jsx(A,{label:"LAST UPDATED",value:new Date(n.updatedAt).toLocaleString(),valueColor:"anakiwa"})]})]}),t.jsxs(Bn,{children:[t.jsx(dr,{children:"Status & Actions"}),t.jsxs(gd,{children:[t.jsxs(On,{$type:n.isActive?"active":"disabled",children:[t.jsx(Un,{children:"Active Status"}),t.jsx(qn,{children:n.isActive?"ACTIVE":"INACTIVE"})]}),t.jsxs(On,{$type:n.enabled?"enabled":"disabled",children:[t.jsx(Un,{children:"Operational Status"}),t.jsx(qn,{children:n.enabled?"ENABLED":"DISABLED"})]})]}),!d&&t.jsxs(xd,{children:[!n.isActive&&n.enabled&&t.jsx(T,{variant:"primary",onClick:w,disabled:u==="active",children:u==="active"?"SETTING...":"SET AS ACTIVE"}),t.jsx(T,{variant:n.enabled?"danger":"accent",onClick:j,disabled:u==="toggle",children:u==="toggle"?"UPDATING...":n.enabled?"DISABLE VESSEL":"ENABLE VESSEL"})]})]})]}),t.jsxs(Sd,{children:[t.jsx(dr,{children:"Usage Statistics"}),t.jsxs(vd,{children:[t.jsx(A,{label:"TOTAL TRIPS",value:F.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"TOTAL HOURS",value:`${(k/3600).toFixed(1)}`,unit:"hrs",valueColor:"anakiwa"}),t.jsx(A,{label:"TOTAL DISTANCE",value:`${(I*539957e-9).toFixed(1)}`,unit:"nm",valueColor:"anakiwa"}),t.jsx(A,{label:"LAST TRIP",value:i&&i.length>0?new Date(i[0].startTime).toLocaleDateString():"NO TRIPS",valueColor:"anakiwa"})]})]})]})})},Td=a.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`,Ad=a(D)`
  padding: 30px;
  margin-top: 20px;
`,Ed=a.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,He=a.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,We=a.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
`,et=a.input`
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
`,Fd=a.textarea`
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
`,Ne=a.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
`,Ld=a.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid ${e=>e.theme.colors.primary.anakiwa};
`,Dd=a(T)`
  margin-right: 15px;
`,zd=a.span`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin-left: 5px;
`,Ke=a.div`
  color: ${e=>e.theme.colors.status.error};
  font-size: 0.9rem;
  margin-top: 5px;
`,Md=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Id=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Rd=()=>{const e=de(),r=Zl(),[n,o]=$.useState({name:"",description:"",hullNumber:"",manufacturer:"",model:"",year:"",length:""}),[s,i]=$.useState({}),[l,c]=$.useState(!1),m=()=>{e("/boats")},d=(v,u)=>{o(p=>({...p,[v]:u})),s[v]&&i(p=>({...p,[v]:void 0}))},h=()=>{const v={};return n.name.trim()?n.name.trim().length<2?v.name="Vessel name must be at least 2 characters":n.name.trim().length>100&&(v.name="Vessel name must be less than 100 characters"):v.name="Vessel name is required",n.description&&n.description.length>500&&(v.description="Description must be less than 500 characters"),n.hullNumber&&n.hullNumber.length>50&&(v.hullNumber="Hull number must be less than 50 characters"),n.manufacturer&&n.manufacturer.length>100&&(v.manufacturer="Manufacturer must be less than 100 characters"),n.model&&n.model.length>100&&(v.model="Model must be less than 100 characters"),n.year&&(!/^\d{4}$/.test(n.year)||parseInt(n.year)<1900||parseInt(n.year)>new Date().getFullYear()+1)&&(v.year="Year must be a valid 4-digit year"),n.length&&(!/^\d+(\.\d+)?$/.test(n.length)||parseFloat(n.length)<=0||parseFloat(n.length)>1e3)&&(v.length="Length must be a positive number (in feet)"),i(v),Object.keys(v).length===0},b=async v=>{if(v.preventDefault(),!!h()){c(!0);try{const u={};n.description.trim()&&(u.description=n.description.trim()),n.hullNumber.trim()&&(u.hullNumber=n.hullNumber.trim()),n.manufacturer.trim()&&(u.manufacturer=n.manufacturer.trim()),n.model.trim()&&(u.model=n.model.trim()),n.year.trim()&&(u.year=parseInt(n.year.trim())),n.length.trim()&&(u.lengthFeet=parseFloat(n.length.trim()));const p=await r.mutateAsync({name:n.name.trim(),metadata:Object.keys(u).length>0?u:void 0});e(`/boats/${p.id}`)}catch(u){console.error("Failed to create boat:",u)}finally{c(!1)}}};return t.jsxs(Td,{children:[t.jsxs(Md,{children:[t.jsxs(Id,{children:[t.jsx(B,{children:"ADD NEW VESSEL"}),t.jsx(Ne,{children:"Register a new vessel for tracking"})]}),t.jsx(Dd,{variant:"secondary",onClick:m,children:"BACK TO VESSELS"})]}),r.error&&t.jsxs(Ae,{type:"error",children:["Failed to create vessel: ",r.error.message]}),t.jsx(Ad,{children:t.jsxs(Ed,{onSubmit:b,children:[t.jsxs(He,{children:[t.jsxs(We,{children:["Vessel Name",t.jsx(zd,{children:"*"})]}),t.jsx(et,{type:"text",value:n.name,onChange:v=>d("name",v.target.value),placeholder:"Enter vessel name (e.g., 'Sea Explorer', 'Fishing Buddy')",disabled:l,maxLength:100}),t.jsx(Ne,{children:"The primary name used to identify this vessel throughout the system."}),s.name&&t.jsx(Ke,{children:s.name})]}),t.jsxs(He,{children:[t.jsx(We,{children:"Description"}),t.jsx(Fd,{value:n.description,onChange:v=>d("description",v.target.value),placeholder:"Optional description of the vessel (e.g., 'Center console fishing boat', '24ft cabin cruiser')",disabled:l,maxLength:500}),t.jsx(Ne,{children:"Optional description to help identify and categorize this vessel."}),s.description&&t.jsx(Ke,{children:s.description})]}),t.jsxs(He,{children:[t.jsx(We,{children:"Hull Identification Number (HIN)"}),t.jsx(et,{type:"text",value:n.hullNumber,onChange:v=>d("hullNumber",v.target.value),placeholder:"Enter HIN if available",disabled:l,maxLength:50}),t.jsx(Ne,{children:"The unique hull identification number assigned by the manufacturer."}),s.hullNumber&&t.jsx(Ke,{children:s.hullNumber})]}),t.jsxs(He,{children:[t.jsx(We,{children:"Manufacturer"}),t.jsx(et,{type:"text",value:n.manufacturer,onChange:v=>d("manufacturer",v.target.value),placeholder:"Enter manufacturer name",disabled:l,maxLength:100}),t.jsx(Ne,{children:"The company that built this vessel."}),s.manufacturer&&t.jsx(Ke,{children:s.manufacturer})]}),t.jsxs(He,{children:[t.jsx(We,{children:"Model"}),t.jsx(et,{type:"text",value:n.model,onChange:v=>d("model",v.target.value),placeholder:"Enter model name",disabled:l,maxLength:100}),t.jsx(Ne,{children:"The specific model designation of this vessel."}),s.model&&t.jsx(Ke,{children:s.model})]}),t.jsxs(He,{children:[t.jsx(We,{children:"Year Built"}),t.jsx(et,{type:"text",value:n.year,onChange:v=>d("year",v.target.value),placeholder:"Enter year (e.g., 2020)",disabled:l,maxLength:4}),t.jsx(Ne,{children:"The year this vessel was manufactured."}),s.year&&t.jsx(Ke,{children:s.year})]}),t.jsxs(He,{children:[t.jsx(We,{children:"Length (feet)"}),t.jsx(et,{type:"text",value:n.length,onChange:v=>d("length",v.target.value),placeholder:"Enter length in feet (e.g., 24.5)",disabled:l}),t.jsx(Ne,{children:"The overall length of the vessel in feet."}),s.length&&t.jsx(Ke,{children:s.length})]}),t.jsxs(Ld,{children:[t.jsx(T,{type:"button",variant:"secondary",onClick:m,disabled:l,children:"CANCEL"}),t.jsx(T,{type:"submit",variant:"primary",disabled:l||!n.name.trim(),children:l?"CREATING VESSEL...":"CREATE VESSEL"})]})]})})]})},mr=a.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,Nd=a(D)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Pd=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  align-items: end;
`,kt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,pr=a.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Bd=a.select`
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
`,Wn=a.input`
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
`,Od=a.div`
  display: grid;
  gap: ${e=>e.theme.spacing.md};
`,Ud=a(D)`
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.lg};
  }
`,qd=a.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${e=>e.theme.spacing.md};
  align-items: start;
`,Hd=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Wd=a.h3`
  margin: 0;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Kd=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${e=>e.theme.spacing.sm};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,Vd=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
  text-align: right;
`,hr=a.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,ur=a.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Gd=a.div`
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
`,_d=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,Qd=()=>{const[e,r]=$.useState({}),{data:n,isLoading:o,error:s}=Ue(e),{data:i}=he(),l=(u,p)=>{r(f=>({...f,[u]:p||void 0}))},c=()=>{r({})},m=u=>{const p=Math.floor(u/3600),f=Math.floor(u%3600/60);return`${p}h ${f}m`},d=u=>`${(u*539957e-9).toFixed(1)} nm`,h=u=>`${u.toFixed(1)} kts`,b=u=>new Date(u).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),v=u=>{const p=i==null?void 0:i.find(f=>f.id===u);return(p==null?void 0:p.name)||"Unknown Boat"};return o?t.jsx(mr,{children:t.jsx(_d,{children:"Loading Trip Data..."})}):s?t.jsx(mr,{children:t.jsx(D,{variant:"accent",title:"System Error",children:t.jsxs("div",{style:{color:"red",textAlign:"center",padding:"2rem"},children:["Error loading trips: ",s.message]})})}):t.jsxs(mr,{children:[t.jsx(B,{children:"Trip Log Database"}),t.jsx(Nd,{title:"Search Parameters",variant:"secondary",children:t.jsxs(Pd,{children:[t.jsxs(kt,{children:[t.jsx(pr,{children:"Vessel"}),t.jsxs(Bd,{value:e.boatId||"",onChange:u=>l("boatId",u.target.value),children:[t.jsx("option",{value:"",children:"All Vessels"}),i==null?void 0:i.map(u=>t.jsx("option",{value:u.id,children:u.name},u.id))]})]}),t.jsxs(kt,{children:[t.jsx(pr,{children:"Start Date"}),t.jsx(Wn,{type:"date",value:e.startDate||"",onChange:u=>l("startDate",u.target.value)})]}),t.jsxs(kt,{children:[t.jsx(pr,{children:"End Date"}),t.jsx(Wn,{type:"date",value:e.endDate||"",onChange:u=>l("endDate",u.target.value)})]}),t.jsx(kt,{children:t.jsx(T,{variant:"secondary",size:"sm",onClick:c,children:"Clear Filters"})})]})}),!n||n.length===0?t.jsxs(Gd,{children:[t.jsx("div",{className:"empty-title",children:"No Trip Records Found"}),t.jsx("div",{className:"empty-message",children:Object.keys(e).length>0?"No trips match the current search parameters.":"No trips have been recorded yet."})]}):t.jsx(Od,{children:n.map(u=>{var p,f,g,x,y,j;return t.jsx(ee,{to:`/trips/${u.id}`,style:{textDecoration:"none"},children:t.jsx(Ud,{variant:"primary",children:t.jsxs(qd,{children:[t.jsxs(Hd,{children:[t.jsxs(Wd,{children:[v(u.boatId)," - ",b(u.startTime)]}),t.jsxs(Kd,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Water Type:"})," ",u.waterType.toUpperCase()]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Role:"})," ",u.role.toUpperCase()]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Duration:"})," ",m(((p=u.statistics)==null?void 0:p.durationSeconds)||0)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Distance:"})," ",d(((f=u.statistics)==null?void 0:f.distanceMeters)||0)]})]})]}),t.jsxs(Vd,{children:[t.jsxs("div",{children:[t.jsx(hr,{children:h(((g=u.statistics)==null?void 0:g.averageSpeedKnots)||0)}),t.jsx(ur,{children:"Avg Speed"})]}),t.jsxs("div",{children:[t.jsx(hr,{children:h(((x=u.statistics)==null?void 0:x.maxSpeedKnots)||0)}),t.jsx(ur,{children:"Max Speed"})]}),t.jsxs("div",{children:[t.jsx(hr,{children:((j=(y=u.statistics)==null?void 0:y.stopPoints)==null?void 0:j.length)||0}),t.jsx(ur,{children:"Stop Points"})]})]})]})})},u.id)})})]})},gr=a.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Jd=a(T)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Zd=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,Yd=a(D)`
  grid-column: 1 / -1;
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Xd=a(Lo)`
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
`,em=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,tt=a.div`
  text-align: center;
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,rt=a.div`
  font-size: ${e=>e.theme.typography.fontSize.xxl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,nt=a.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,tm=a.div`
  display: grid;
  gap: ${e=>e.theme.spacing.sm};
`,Ve=a.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.sm} 0;
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,Ge=a.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,_e=a.div`
  font-size: ${e=>e.theme.typography.fontSize.md};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,rm=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,ut=a.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
  text-align: center;
`,gt=a.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.lilac};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,xt=a.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,nm=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,om=a.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,am=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,sm=a.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  text-transform: uppercase;
  letter-spacing: 1px;
`,im=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,lm=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.muted};
`,cm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,dm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,mm=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.lg};
`,pm=a(D)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,hm=a(D)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,um=new Se.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiM2NkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),gm=new Se.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRjY2NjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),xm=new Se.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[20,20],iconAnchor:[10,10]}),fm=()=>{var x,y,j,w,F,k,I,P,K;const{id:e}=Oe(),{data:r,isLoading:n,error:o}=ia(e),{data:s}=he(),i=E=>{const M=Math.floor(E/3600),U=Math.floor(E%3600/60);return`${M}h ${U}m`},l=E=>`${(E*539957e-9).toFixed(1)} nm`,c=E=>`${E.toFixed(1)} kts`,m=E=>new Date(E).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),d=(E,M)=>{const U=E>=0?"N":"S",H=M>=0?"E":"W";return`${Math.abs(E).toFixed(6)}°${U}, ${Math.abs(M).toFixed(6)}°${H}`},h=E=>{const M=s==null?void 0:s.find(U=>U.id===E);return(M==null?void 0:M.name)||"Unknown Boat"},b=E=>E.map(M=>[M.latitude,M.longitude]),v=E=>{if(E.length===0)return[0,0];const M=E.reduce((H,V)=>H+V.latitude,0)/E.length,U=E.reduce((H,V)=>H+V.longitude,0)/E.length;return[M,U]};if(n)return t.jsx(gr,{children:t.jsx(cm,{children:"Loading Trip Data..."})});if(o||!r)return t.jsx(gr,{children:t.jsx(dm,{children:o?`Error loading trip: ${o.message}`:"Trip not found"})});const u=b(r.gpsPoints),p=v(r.gpsPoints),f=r.gpsPoints[0],g=r.gpsPoints[r.gpsPoints.length-1];return t.jsxs(gr,{children:[t.jsx(Jd,{as:ee,to:"/trips",variant:"secondary",size:"sm",children:"← Back to Trip Log"}),t.jsxs(B,{children:["Trip Analysis - ",h(r.boatId)," - ",m(r.startTime)]}),u.length>0&&t.jsx(Yd,{title:"Navigation Route",variant:"accent",children:t.jsxs(Xd,{center:p,zoom:13,scrollWheelZoom:!0,children:[t.jsx(Kr,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(Fo,{positions:u,color:"#FF9966",weight:3,opacity:.8}),f&&t.jsx(ge,{position:[f.latitude,f.longitude],icon:um,children:t.jsxs(xe,{children:[t.jsx("strong",{children:"Trip Start"}),t.jsx("br",{}),m(r.startTime),t.jsx("br",{}),d(f.latitude,f.longitude)]})}),g&&t.jsx(ge,{position:[g.latitude,g.longitude],icon:gm,children:t.jsxs(xe,{children:[t.jsx("strong",{children:"Trip End"}),t.jsx("br",{}),m(r.endTime),t.jsx("br",{}),d(g.latitude,g.longitude)]})}),(((x=r.statistics)==null?void 0:x.stopPoints)||[]).map((E,M)=>t.jsx(ge,{position:[E.latitude,E.longitude],icon:xm,children:t.jsxs(xe,{children:[t.jsxs("strong",{children:["Stop Point ",M+1]}),t.jsx("br",{}),"Duration: ",i(E.durationSeconds),t.jsx("br",{}),d(E.latitude,E.longitude)]})},M))]})}),t.jsxs(Zd,{children:[t.jsx(D,{title:"Trip Statistics",variant:"primary",children:t.jsxs(em,{children:[t.jsxs(tt,{children:[t.jsx(rt,{children:i(((y=r.statistics)==null?void 0:y.durationSeconds)||0)}),t.jsx(nt,{children:"Duration"})]}),t.jsxs(tt,{children:[t.jsx(rt,{children:l(((j=r.statistics)==null?void 0:j.distanceMeters)||0)}),t.jsx(nt,{children:"Distance"})]}),t.jsxs(tt,{children:[t.jsx(rt,{children:c(((w=r.statistics)==null?void 0:w.averageSpeedKnots)||0)}),t.jsx(nt,{children:"Avg Speed"})]}),t.jsxs(tt,{children:[t.jsx(rt,{children:c(((F=r.statistics)==null?void 0:F.maxSpeedKnots)||0)}),t.jsx(nt,{children:"Max Speed"})]}),t.jsxs(tt,{children:[t.jsx(rt,{children:((I=(k=r.statistics)==null?void 0:k.stopPoints)==null?void 0:I.length)||0}),t.jsx(nt,{children:"Stop Points"})]}),t.jsxs(tt,{children:[t.jsx(rt,{children:r.gpsPoints.length}),t.jsx(nt,{children:"GPS Points"})]})]})}),t.jsx(D,{title:"Trip Information",variant:"secondary",children:t.jsxs(tm,{children:[t.jsxs(Ve,{children:[t.jsx(Ge,{children:"Vessel"}),t.jsx(_e,{children:h(r.boatId)})]}),t.jsxs(Ve,{children:[t.jsx(Ge,{children:"Start Time"}),t.jsx(_e,{children:m(r.startTime)})]}),t.jsxs(Ve,{children:[t.jsx(Ge,{children:"End Time"}),t.jsx(_e,{children:m(r.endTime)})]}),t.jsxs(Ve,{children:[t.jsx(Ge,{children:"Water Type"}),t.jsx(_e,{children:r.waterType.toUpperCase()})]}),t.jsxs(Ve,{children:[t.jsx(Ge,{children:"Role"}),t.jsx(_e,{children:r.role.toUpperCase()})]}),f&&t.jsxs(Ve,{children:[t.jsx(Ge,{children:"Start Position"}),t.jsx(_e,{children:d(f.latitude,f.longitude)})]}),g&&t.jsxs(Ve,{children:[t.jsx(Ge,{children:"End Position"}),t.jsx(_e,{children:d(g.latitude,g.longitude)})]})]})})]}),r.manualData&&t.jsx(pm,{title:"Manual Data Entry",variant:"accent",children:t.jsxs(rm,{children:[r.manualData.engineHours!==void 0&&t.jsxs(ut,{children:[t.jsx(gt,{children:r.manualData.engineHours}),t.jsx(xt,{children:"Engine Hours"})]}),r.manualData.fuelConsumed!==void 0&&t.jsxs(ut,{children:[t.jsx(gt,{children:r.manualData.fuelConsumed}),t.jsx(xt,{children:"Fuel Consumed"})]}),r.manualData.numberOfPassengers!==void 0&&t.jsxs(ut,{children:[t.jsx(gt,{children:r.manualData.numberOfPassengers}),t.jsx(xt,{children:"Passengers"})]}),r.manualData.weatherConditions&&t.jsxs(ut,{children:[t.jsx(gt,{children:r.manualData.weatherConditions}),t.jsx(xt,{children:"Weather"})]}),r.manualData.destination&&t.jsxs(ut,{children:[t.jsx(gt,{children:r.manualData.destination}),t.jsx(xt,{children:"Destination"})]})]})}),(((P=r.statistics)==null?void 0:P.stopPoints)||[]).length>0&&t.jsx(hm,{title:"Stop Points Analysis",variant:"primary",children:t.jsx(nm,{children:(((K=r.statistics)==null?void 0:K.stopPoints)||[]).map((E,M)=>t.jsxs(om,{children:[t.jsxs(am,{children:[t.jsxs(sm,{children:["Stop Point ",M+1]}),t.jsx(im,{children:i(E.durationSeconds)})]}),t.jsx(lm,{children:d(E.latitude,E.longitude)}),t.jsxs("div",{style:{fontSize:"0.8rem",color:"#999",marginTop:"0.5rem"},children:[m(E.startTime)," - ",m(E.endTime)]})]},M))})}),t.jsxs(mm,{children:[t.jsx(ee,{to:`/trips/${r.id}/edit`,style:{textDecoration:"none"},children:t.jsx(T,{variant:"primary",children:"Edit Trip Data"})}),t.jsx(T,{variant:"secondary",children:"Export Data"})]})]})},xr=a.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;
`,ym=a(T)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,bm=a.div`
  display: grid;
  gap: ${e=>e.theme.spacing.lg};
`,Kn=a(D)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,ft=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`,je=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,ve=a.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,ot=a.input`
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
`,fr=a.select`
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
`,$m=a.textarea`
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
`,yr=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,jm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,vm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,wm=a.div`
  background-color: rgba(102, 255, 102, 0.1);
  border: 1px solid ${e=>e.theme.colors.status.success};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.status.success};
  padding: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Cm=()=>{const{id:e}=Oe(),{data:r,isLoading:n,error:o}=ia(e),{data:s}=he(),i=Xl(),l=ec(),[c,m]=$.useState({waterType:"inland",role:"captain",boatId:""}),[d,h]=$.useState({}),[b,v]=$.useState("");$.useEffect(()=>{r&&(m({waterType:r.waterType,role:r.role,boatId:r.boatId}),r.manualData&&h({engineHours:r.manualData.engineHours,fuelConsumed:r.manualData.fuelConsumed,weatherConditions:r.manualData.weatherConditions,numberOfPassengers:r.manualData.numberOfPassengers,destination:r.manualData.destination}))},[r]);const u=(j,w)=>{m(F=>({...F,[j]:w}))},p=(j,w)=>{h(F=>({...F,[j]:w===""?void 0:w}))},f=async()=>{if(r)try{await i.mutateAsync({id:r.id,data:c}),v("Trip information updated successfully!"),setTimeout(()=>v(""),3e3)}catch(j){console.error("Error updating trip:",j)}},g=async()=>{if(!r)return;const j={};Object.entries(d).forEach(([w,F])=>{F!==void 0&&F!==""&&(j[w]=F)});try{await l.mutateAsync({tripId:r.id,data:j}),v("Manual data updated successfully!"),setTimeout(()=>v(""),3e3)}catch(w){console.error("Error updating manual data:",w)}},x=j=>new Date(j).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),y=j=>{const w=s==null?void 0:s.find(F=>F.id===j);return(w==null?void 0:w.name)||"Unknown Boat"};return n?t.jsx(xr,{children:t.jsx(jm,{children:"Loading Trip Data..."})}):o||!r?t.jsx(xr,{children:t.jsx(vm,{children:o?`Error loading trip: ${o.message}`:"Trip not found"})}):t.jsxs(xr,{children:[t.jsx(ym,{as:ee,to:`/trips/${r.id}`,variant:"secondary",size:"sm",children:"← Back to Trip Details"}),t.jsxs(B,{children:["Edit Trip Data - ",y(r.boatId)," - ",x(r.startTime)]}),b&&t.jsx(wm,{children:b}),t.jsxs(bm,{children:[t.jsxs(Kn,{title:"Trip Information",variant:"primary",children:[t.jsxs(ft,{children:[t.jsxs(je,{children:[t.jsx(ve,{children:"Vessel"}),t.jsx(fr,{value:c.boatId,onChange:j=>u("boatId",j.target.value),children:s==null?void 0:s.map(j=>t.jsx("option",{value:j.id,children:j.name},j.id))})]}),t.jsxs(je,{children:[t.jsx(ve,{children:"Water Type"}),t.jsxs(fr,{value:c.waterType,onChange:j=>u("waterType",j.target.value),children:[t.jsx("option",{value:"inland",children:"Inland"}),t.jsx("option",{value:"coastal",children:"Coastal/Nearshore"}),t.jsx("option",{value:"offshore",children:"Offshore"})]})]}),t.jsxs(je,{children:[t.jsx(ve,{children:"Role"}),t.jsxs(fr,{value:c.role,onChange:j=>u("role",j.target.value),children:[t.jsx("option",{value:"captain",children:"Captain"}),t.jsx("option",{value:"crew",children:"Crew"}),t.jsx("option",{value:"observer",children:"Observer"})]})]})]}),t.jsxs(ft,{children:[t.jsxs(je,{children:[t.jsx(ve,{children:"Start Time"}),t.jsx(ot,{type:"text",value:x(r.startTime),disabled:!0})]}),t.jsxs(je,{children:[t.jsx(ve,{children:"End Time"}),t.jsx(ot,{type:"text",value:x(r.endTime),disabled:!0})]})]}),t.jsx(yr,{children:t.jsx(T,{variant:"primary",onClick:f,disabled:i.isPending,children:i.isPending?"Saving...":"Save Trip Information"})})]}),t.jsxs(Kn,{title:"Manual Data Entry",variant:"secondary",children:[t.jsxs(ft,{children:[t.jsxs(je,{children:[t.jsx(ve,{children:"Engine Hours"}),t.jsx(ot,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:d.engineHours||"",onChange:j=>p("engineHours",parseFloat(j.target.value))})]}),t.jsxs(je,{children:[t.jsx(ve,{children:"Fuel Consumed (gallons)"}),t.jsx(ot,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:d.fuelConsumed||"",onChange:j=>p("fuelConsumed",parseFloat(j.target.value))})]}),t.jsxs(je,{children:[t.jsx(ve,{children:"Number of Passengers"}),t.jsx(ot,{type:"number",min:"0",placeholder:"0",value:d.numberOfPassengers||"",onChange:j=>p("numberOfPassengers",parseInt(j.target.value))})]})]}),t.jsx(ft,{children:t.jsxs(je,{children:[t.jsx(ve,{children:"Destination"}),t.jsx(ot,{type:"text",placeholder:"Enter destination",value:d.destination||"",onChange:j=>p("destination",j.target.value)})]})}),t.jsx(ft,{children:t.jsxs(je,{children:[t.jsx(ve,{children:"Weather Conditions"}),t.jsx($m,{placeholder:"Describe weather conditions, sea state, visibility, etc.",value:d.weatherConditions||"",onChange:j=>p("weatherConditions",j.target.value)})]})}),t.jsx(yr,{children:t.jsx(T,{variant:"secondary",onClick:g,disabled:l.isPending,children:l.isPending?"Saving...":"Save Manual Data"})})]})]}),t.jsxs(yr,{children:[t.jsx(ee,{to:`/trips/${r.id}`,style:{textDecoration:"none"},children:t.jsx(T,{variant:"accent",children:"View Trip Details"})}),t.jsx(ee,{to:"/trips",style:{textDecoration:"none"},children:t.jsx(T,{variant:"secondary",children:"Back to Trip Log"})})]})]})},ua=e=>se({queryKey:["notes",e],queryFn:()=>N.getNotes(e)}),ga=e=>se({queryKey:["notes",e],queryFn:()=>N.getNote(e),enabled:!!e}),Sm=()=>{const e=_();return Z({mutationFn:r=>N.createNote(r),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},km=()=>{const e=_();return Z({mutationFn:({id:r,data:n})=>N.updateNote(r,n),onSuccess:r=>{e.invalidateQueries({queryKey:["notes"]}),e.setQueryData(["notes",r.id],r)}})},xa=()=>{const e=_();return Z({mutationFn:r=>N.deleteNote(r),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},fa=()=>{const{data:e}=ua();return((e==null?void 0:e.reduce((n,o)=>(o.tags.forEach(s=>{n.includes(s)||n.push(s)}),n),[]))||[]).sort()},Vn=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Tm=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Am=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Tt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,At=a.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,br=a.select`
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
`,Em=a.input`
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
`,Fm=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,Lm=a.div`
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
`,Dm=a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,zm=a.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;case"trip":return e.theme.colors.primary.lilac;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Mm=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
`,Gn=a.button`
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
`,Im=a.div`
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin-bottom: ${e=>e.theme.spacing.sm};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Rm=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Nm=a.span`
  background-color: ${e=>e.theme.colors.surface.medium};
  color: ${e=>e.theme.colors.text.secondary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
`,Pm=a.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
`,Bm=a.div`
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
`,Om=()=>{const e=de(),[r,n]=$.useState(""),[o,s]=$.useState(""),[i,l]=$.useState(""),[c,m]=$.useState(""),{data:d}=he(),h=fa(),b=$.useMemo(()=>{const k={};return r&&(k.type=r),o&&(k.boatId=o),i&&(k.tags=[i]),k},[r,o,i]),{data:v,isLoading:u}=ua(b),p=xa(),f=$.useMemo(()=>v?v.filter(k=>{if(c){const I=c.toLowerCase();return k.content.toLowerCase().includes(I)||k.tags.some(P=>P.toLowerCase().includes(I))}return!0}):[],[v,c]),g=()=>{e("/notes/new")},x=(k,I)=>{I.stopPropagation(),e(`/notes/${k}/edit`)},y=async(k,I)=>{if(I.stopPropagation(),window.confirm("Are you sure you want to delete this note?"))try{await p.mutateAsync(k)}catch(P){console.error("Failed to delete note:",P)}},j=k=>{e(`/notes/${k}`)},w=k=>new Date(k).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),F=k=>{if(!k||!d)return null;const I=d.find(P=>P.id===k);return I==null?void 0:I.name};return u?t.jsxs(Vn,{children:[t.jsx(B,{level:1,children:"Notes Database"}),t.jsx(D,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading notes..."})})]}):t.jsxs(Vn,{children:[t.jsxs(Tm,{children:[t.jsx(B,{level:1,children:"Notes Database"}),t.jsx(T,{onClick:g,children:"Create New Note"})]}),t.jsx(D,{title:"Filters",variant:"secondary",children:t.jsxs(Am,{children:[t.jsxs(Tt,{children:[t.jsx(At,{children:"Note Type"}),t.jsxs(br,{value:r,onChange:k=>n(k.target.value),children:[t.jsx("option",{value:"",children:"All Types"}),t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat-Specific"}),t.jsx("option",{value:"trip",children:"Trip"})]})]}),t.jsxs(Tt,{children:[t.jsx(At,{children:"Boat"}),t.jsxs(br,{value:o,onChange:k=>s(k.target.value),disabled:r==="general"||r==="trip",children:[t.jsx("option",{value:"",children:"All Boats"}),d==null?void 0:d.map(k=>t.jsx("option",{value:k.id,children:k.name},k.id))]})]}),t.jsxs(Tt,{children:[t.jsx(At,{children:"Tag"}),t.jsxs(br,{value:i,onChange:k=>l(k.target.value),children:[t.jsx("option",{value:"",children:"All Tags"}),h.map(k=>t.jsx("option",{value:k,children:k},k))]})]}),t.jsxs(Tt,{children:[t.jsx(At,{children:"Search"}),t.jsx(Em,{type:"text",placeholder:"Search notes content...",value:c,onChange:k=>m(k.target.value)})]})]})}),f.length===0?t.jsx(D,{children:t.jsxs(Bm,{children:[t.jsx("div",{className:"empty-icon",children:"📝"}),t.jsx("div",{className:"empty-title",children:"No Notes Found"}),t.jsx("div",{children:(v==null?void 0:v.length)===0?"Create your first note to get started.":"Try adjusting your filters to find notes."})]})}):t.jsx(Fm,{children:f.map(k=>t.jsxs(Lm,{onClick:()=>j(k.id),children:[t.jsxs(Dm,{children:[t.jsxs(zm,{type:k.type,children:[k.type,k.type==="boat"&&F(k.boatId)&&` - ${F(k.boatId)}`]}),t.jsxs(Mm,{children:[t.jsx(Gn,{onClick:I=>x(k.id,I),children:"Edit"}),t.jsx(Gn,{className:"danger",onClick:I=>y(k.id,I),children:"Delete"})]})]}),t.jsx(Im,{children:k.content}),k.tags.length>0&&t.jsx(Rm,{children:k.tags.map(I=>t.jsx(Nm,{children:I},I))}),t.jsxs(Pm,{children:[w(k.createdAt),k.updatedAt!==k.createdAt&&" (edited)"]})]},k.id))})]})},$r=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Um=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,qm=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,Hm=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,at=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,st=a.span`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,it=a.span`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
`,Wm=a.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;case"trip":return e.theme.colors.primary.lilac;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
`,Km=a.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.lg};
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  white-space: pre-wrap;
  font-size: ${e=>e.theme.typography.fontSize.md};
`,Vm=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,Gm=a.span`
  background-color: ${e=>e.theme.colors.primary.lilac};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,_m=a.span`
  color: ${e=>e.theme.colors.text.muted};
  font-style: italic;
`,Qm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
`,Jm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
`,Zm=()=>{const e=de(),{id:r}=Oe(),{data:n,isLoading:o,error:s}=ga(r||""),{data:i}=he(),{data:l}=Ue(),c=xa(),m=()=>{e(`/notes/${r}/edit`)},d=async()=>{if(window.confirm("Are you sure you want to delete this note?"))try{await c.mutateAsync(r),e("/notes")}catch(p){console.error("Failed to delete note:",p)}},h=()=>{e("/notes")},b=p=>new Date(p).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),v=p=>{if(!p||!i)return"Unknown Boat";const f=i.find(g=>g.id===p);return(f==null?void 0:f.name)||"Unknown Boat"},u=p=>{if(!p||!l)return"Unknown Trip";const f=l.find(y=>y.id===p);if(!f)return"Unknown Trip";const g=v(f.boatId);return`${new Date(f.startTime).toLocaleDateString()} - ${g}`};return o?t.jsxs($r,{children:[t.jsx(B,{level:1,children:"Note Details"}),t.jsx(D,{children:t.jsx(Qm,{children:"Loading note..."})})]}):s||!n?t.jsxs($r,{children:[t.jsx(B,{level:1,children:"Note Details"}),t.jsx(D,{children:t.jsxs(Jm,{children:["Note not found or failed to load.",t.jsx("div",{style:{marginTop:"1rem"},children:t.jsx(T,{onClick:h,children:"Back to Notes"})})]})})]}):t.jsxs($r,{children:[t.jsxs(Um,{children:[t.jsx(B,{level:1,children:"Note Details"}),t.jsxs(qm,{children:[t.jsx(T,{variant:"secondary",onClick:h,children:"Back to Notes"}),t.jsx(T,{variant:"accent",onClick:m,children:"Edit Note"}),t.jsx(T,{variant:"danger",onClick:d,disabled:c.isPending,children:c.isPending?"Deleting...":"Delete"})]})]}),t.jsx(D,{title:"Note Information",children:t.jsxs(Hm,{children:[t.jsxs(at,{children:[t.jsx(st,{children:"Type"}),t.jsx(it,{children:t.jsx(Wm,{type:n.type,children:n.type})})]}),n.type==="boat"&&n.boatId&&t.jsxs(at,{children:[t.jsx(st,{children:"Boat"}),t.jsx(it,{children:v(n.boatId)})]}),n.type==="trip"&&n.tripId&&t.jsxs(at,{children:[t.jsx(st,{children:"Trip"}),t.jsx(it,{children:u(n.tripId)})]}),t.jsxs(at,{children:[t.jsx(st,{children:"Created"}),t.jsx(it,{children:b(n.createdAt)})]}),n.updatedAt!==n.createdAt&&t.jsxs(at,{children:[t.jsx(st,{children:"Last Modified"}),t.jsx(it,{children:b(n.updatedAt)})]}),t.jsxs(at,{children:[t.jsx(st,{children:"Tags"}),t.jsx(it,{children:n.tags.length>0?t.jsx(Vm,{children:n.tags.map(p=>t.jsx(Gm,{children:p},p))}):t.jsx(_m,{children:"No tags"})})]})]})}),t.jsx(D,{title:"Content",children:t.jsx(Km,{children:n.content})})]})},_n=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Ym=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Xm=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Et=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,lt=a.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,jr=a.select`
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
`,ep=a.textarea`
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
`,tp=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,rp=a.input`
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
`,np=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,op=a.span`
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
`,ap=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-top: ${e=>e.theme.spacing.sm};
`,sp=a.button`
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
`,ip=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,lp=a.div`
  color: ${e=>e.theme.colors.status.error};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.status.error};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Qn=()=>{const e=de(),{id:r}=Oe(),n=!!r&&r!=="new",[o,s]=$.useState("general"),[i,l]=$.useState(""),[c,m]=$.useState(""),[d,h]=$.useState(""),[b,v]=$.useState([]),[u,p]=$.useState(""),[f,g]=$.useState(""),{data:x,isLoading:y}=ga(r||""),{data:j}=he(),{data:w}=Ue(),F=fa(),k=Sm(),I=km();$.useEffect(()=>{x&&n&&(s(x.type),l(x.boatId||""),m(x.tripId||""),h(x.content),v(x.tags))},[x,n]);const P=()=>{const R=u.trim();R&&!b.includes(R)&&(v([...b,R]),p(""))},K=R=>{v(b.filter(Y=>Y!==R))},E=R=>{b.includes(R)||v([...b,R])},M=R=>{R.key==="Enter"&&(R.preventDefault(),P())},U=async()=>{if(g(""),!d.trim()){g("Note content is required");return}if(o==="boat"&&!i){g("Please select a boat for boat-specific notes");return}if(o==="trip"&&!c){g("Please select a trip for trip notes");return}try{const R={content:d.trim(),type:o,boatId:o==="boat"?i:void 0,tripId:o==="trip"?c:void 0,tags:b};n?await I.mutateAsync({id:r,data:R}):await k.mutateAsync(R),e("/notes")}catch(R){console.error("Failed to save note:",R),g("Failed to save note. Please try again.")}},H=()=>{e("/notes")},V=F.filter(R=>!b.includes(R));return y&&n?t.jsxs(_n,{children:[t.jsx(B,{level:1,children:"Loading Note"}),t.jsx(D,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading note data..."})})]}):t.jsxs(_n,{children:[t.jsx(Ym,{children:t.jsx(B,{level:1,children:n?"Edit Note":"Create New Note"})}),t.jsx(D,{title:"Note Details",children:t.jsxs(Xm,{children:[f&&t.jsx(lp,{children:f}),t.jsxs(Et,{children:[t.jsx(lt,{children:"Note Type"}),t.jsxs(jr,{value:o,onChange:R=>{s(R.target.value),l(""),m("")},children:[t.jsx("option",{value:"general",children:"General Note"}),t.jsx("option",{value:"boat",children:"Boat-Specific Note"}),t.jsx("option",{value:"trip",children:"Trip Note"})]})]}),o==="boat"&&t.jsxs(Et,{children:[t.jsx(lt,{children:"Boat"}),t.jsxs(jr,{value:i,onChange:R=>l(R.target.value),children:[t.jsx("option",{value:"",children:"Select a boat"}),j==null?void 0:j.map(R=>t.jsx("option",{value:R.id,children:R.name},R.id))]})]}),o==="trip"&&t.jsxs(Et,{children:[t.jsx(lt,{children:"Trip"}),t.jsxs(jr,{value:c,onChange:R=>m(R.target.value),children:[t.jsx("option",{value:"",children:"Select a trip"}),w==null?void 0:w.map(R=>{var Y;return t.jsxs("option",{value:R.id,children:[new Date(R.startTime).toLocaleDateString()," - ",((Y=j==null?void 0:j.find(Fe=>Fe.id===R.boatId))==null?void 0:Y.name)||"Unknown Boat"]},R.id)})]})]}),t.jsxs(Et,{children:[t.jsx(lt,{children:"Content"}),t.jsx(ep,{value:d,onChange:R=>h(R.target.value),placeholder:"Enter your note content here..."})]}),t.jsxs(tp,{children:[t.jsx(lt,{children:"Tags"}),t.jsx(rp,{type:"text",value:u,onChange:R=>p(R.target.value),onKeyPress:M,placeholder:"Add a tag and press Enter"}),b.length>0&&t.jsx(np,{children:b.map(R=>t.jsxs(op,{children:[R,t.jsx("button",{className:"remove-tag",onClick:()=>K(R),type:"button",children:"×"})]},R))}),V.length>0&&t.jsxs("div",{children:[t.jsx(lt,{style:{fontSize:"12px",marginBottom:"8px"},children:"Suggested Tags"}),t.jsx(ap,{children:V.slice(0,10).map(R=>t.jsx(sp,{onClick:()=>E(R),type:"button",children:R},R))})]})]}),t.jsxs(ip,{children:[t.jsx(T,{variant:"secondary",onClick:H,children:"Cancel"}),t.jsx(T,{onClick:U,disabled:k.isPending||I.isPending,children:k.isPending||I.isPending?"Saving...":"Save Note"})]})]})})]})},Q={todoLists:e=>["todoLists",e],todoList:e=>["todoList",e]},cp=e=>se({queryKey:Q.todoLists(e),queryFn:()=>N.getTodoLists(e)}),dp=e=>se({queryKey:Q.todoList(e),queryFn:()=>N.getTodoList(e),enabled:!!e}),mp=()=>{const e=_();return Z({mutationFn:r=>N.createTodoList(r),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},pp=()=>{const e=_();return Z({mutationFn:({id:r,data:n})=>N.updateTodoList(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:Q.todoList(n)}),e.invalidateQueries({queryKey:["todoLists"]})}})},hp=()=>{const e=_();return Z({mutationFn:r=>N.deleteTodoList(r),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},up=()=>{const e=_();return Z({mutationFn:({listId:r,content:n})=>N.addTodoItem(r,n),onMutate:async({listId:r,content:n})=>{await e.cancelQueries({queryKey:Q.todoList(r)});const o=e.getQueryData(Q.todoList(r));if(o){const s={id:`temp-${Date.now()}`,listId:r,content:n,completed:!1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};e.setQueryData(Q.todoList(r),{...o,items:[...o.items,s]})}return{previous:o}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(Q.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:Q.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},gp=()=>{const e=_();return Z({mutationFn:({itemId:r})=>N.toggleTodoItem(r),onMutate:async({itemId:r,listId:n})=>{await e.cancelQueries({queryKey:Q.todoList(n)});const o=e.getQueryData(Q.todoList(n));return o&&e.setQueryData(Q.todoList(n),{...o,items:o.items.map(s=>s.id===r?{...s,completed:!s.completed,completedAt:s.completed?void 0:new Date().toISOString()}:s)}),{previous:o}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(Q.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:Q.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},xp=()=>{const e=_();return Z({mutationFn:({itemId:r,data:n})=>N.updateTodoItem(r,n),onMutate:async({itemId:r,listId:n,data:o})=>{await e.cancelQueries({queryKey:Q.todoList(n)});const s=e.getQueryData(Q.todoList(n));return s&&e.setQueryData(Q.todoList(n),{...s,items:s.items.map(i=>i.id===r?{...i,...o}:i)}),{previous:s}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(Q.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:Q.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},fp=()=>{const e=_();return Z({mutationFn:({itemId:r})=>N.deleteTodoItem(r),onMutate:async({itemId:r,listId:n})=>{await e.cancelQueries({queryKey:Q.todoList(n)});const o=e.getQueryData(Q.todoList(n));return o&&e.setQueryData(Q.todoList(n),{...o,items:o.items.filter(s=>s.id!==r)}),{previous:o}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(Q.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:Q.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},yp=a.div`
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
`,bp=a.button`
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
`,$p=a.div`
  flex: 1;
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 14px;
  color: ${e=>e.$completed?e.theme.colors.text.muted:e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  text-decoration: ${e=>e.$completed?"line-through":"none"};
  user-select: none;
`,jp=a.input`
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
`,vp=a.button`
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
`,wp=({item:e,onToggle:r,onUpdate:n,onDelete:o})=>{const[s,i]=$.useState(!1),[l,c]=$.useState(e.content),[m,d]=$.useState(!1),h=$.useRef(null);$.useEffect(()=>{s&&h.current&&(h.current.focus(),h.current.select())},[s]);const b=x=>{x.stopPropagation(),e.completed||i(!0)},v=()=>{const x=l.trim();x&&x!==e.content&&n(e.id,x),i(!1)},u=()=>{c(e.content),i(!1)},p=x=>{x.key==="Enter"?v():x.key==="Escape"&&u()},f=x=>{x.stopPropagation(),r(e.id)},g=x=>{x.stopPropagation(),o(e.id)};return t.jsxs(yp,{$completed:e.completed,$isEditing:s,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[t.jsx(bp,{$completed:e.completed,onClick:f,role:"checkbox","aria-label":e.completed?"Mark incomplete":"Mark complete","aria-checked":e.completed,children:e.completed&&"✓"}),s?t.jsx(jp,{ref:h,value:l,onChange:x=>c(x.target.value),onKeyDown:p,onBlur:v}):t.jsx($p,{$completed:e.completed,onClick:b,children:e.content}),t.jsx(vp,{$visible:m,onClick:g,"aria-label":"Delete task",children:"×"})]})},Cp=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`,Sp=a.div`
  flex: 1;
  height: 10px;
  background: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  position: relative;
`,kp=a.div`
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.pill};
  transition: width ${e=>e.theme.animation.normal} ease;
  box-shadow: 0 0 8px ${e=>e.theme.colors.primary.neonCarrot}40;
`,Tp=a.span`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 12px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  min-width: 42px;
  text-align: right;
`,Ap=({percentage:e})=>{const r=Math.min(100,Math.max(0,e));return t.jsxs(Cp,{children:[t.jsx(Sp,{children:t.jsx(kp,{$percentage:r})}),t.jsxs(Tp,{children:[Math.round(r),"%"]})]})},Ep=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  gap: 16px;
`,Fp=a.div`
  font-size: 48px;
  line-height: 1;
  opacity: 0.6;
  filter: grayscale(0.3);
`,Lp=a.h3`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 20px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  margin: 0;
`,Dp=a.p`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  margin: 0;
  max-width: 320px;
`,Jn=({title:e,message:r,icon:n="📋"})=>t.jsxs(Ep,{children:[t.jsx(Fp,{children:n}),t.jsx(Lp,{children:e}),t.jsx(Dp,{children:r})]}),zp=te`
  from { opacity: 0; }
  to { opacity: 1; }
`,Mp=te`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,Ip=a.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: ${e=>e.theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${zp} 150ms ease;
`,Rp=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.lg};
  width: ${e=>e.width||"480px"};
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${Mp} 200ms ease;
`,Zn={primary:"#FF9933",secondary:"#CC99CC",accent:"#99CCFF",danger:"#FF5555"},Np=a.div`
  background: ${e=>Zn[e.variant]||Zn.primary};
  padding: 0 ${e=>e.theme.spacing.md};
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${e=>e.theme.lcars.buttonRadius};
  margin: ${e=>e.theme.spacing.sm};
  margin-bottom: 0;
`,Pp=a.span`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.inverse};
`,Bp=a.button`
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
`,Op=a.div`
  padding: ${e=>e.theme.spacing.lg};
  overflow-y: auto;
  flex: 1;
`,ya=({isOpen:e,onClose:r,title:n,variant:o="primary",children:s,width:i})=>{const l=$.useRef(null),c=$.useCallback(m=>{m.key==="Escape"&&r()},[r]);return $.useEffect(()=>{if(e)return document.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",c),document.body.style.overflow=""}},[e,c]),e?Eo.createPortal(t.jsx(Ip,{onClick:m=>{m.target===m.currentTarget&&r()},children:t.jsxs(Rp,{ref:l,width:i,role:"dialog","aria-modal":"true",children:[n&&t.jsxs(Np,{variant:o,children:[t.jsx(Pp,{children:n}),t.jsx(Bp,{onClick:r,"aria-label":"Close",children:"×"})]}),t.jsx(Op,{children:s})]})}),document.body):null},Up=a.p`
  color: ${e=>e.theme.colors.text.light};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin: 0 0 ${e=>e.theme.spacing.lg} 0;
`,qp=a.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing.md};
`,Hp=({isOpen:e,onClose:r,onConfirm:n,title:o,message:s,confirmLabel:i="Confirm",cancelLabel:l="Cancel",variant:c="primary",isLoading:m=!1})=>t.jsxs(ya,{isOpen:e,onClose:r,title:o,variant:c==="danger"?"danger":"primary",children:[t.jsx(Up,{children:s}),t.jsxs(qp,{children:[t.jsx(T,{variant:"secondary",onClick:r,disabled:m,children:l}),t.jsx(T,{variant:c==="danger"?"danger":"primary",onClick:n,disabled:m,children:m?"Processing...":i})]})]}),Wp=te`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,Kp=te`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
`,Vp=te`
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
`,Gt="768px",Yn="300px",Gp="3px",Xn=a.div`
  display: flex;
  min-height: calc(100vh - 140px);
  gap: ${Gp};

  @media (max-width: ${Gt}) {
    flex-direction: column;
    gap: 0;
  }
`,_p=a.aside`
  width: ${Yn};
  min-width: ${Yn};
  background: ${e=>e.theme.colors.surface.dark};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: ${Gt}) {
    width: 100%;
    min-width: 100%;
    display: ${e=>e.$hidden?"none":"flex"};
  }
`,Qp=a.section`
  flex: 1;
  background: ${e=>e.theme.colors.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${Kp} 300ms ease;

  @media (max-width: ${Gt}) {
    display: ${e=>e.$hidden?"none":"flex"};
  }
`,Jp=a.div`
  padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  flex-shrink: 0;
`,Zp=a.h2`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.extraWide};
  margin: 0;
`,Yp=a.select`
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
`,Xp=a.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,eh=a.button`
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
  animation: ${Vp} 300ms ease both;

  ${e=>e.$active&&L`
    box-shadow: 0 0 10px ${e.theme.colors.primary.neonCarrot}30;
  `}

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    background: ${e=>e.theme.colors.surface.medium};
  }
`,th=a.span`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
`,vr=a.span`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 11px;
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
`,eo=a.span`
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
`,rh=a.div`
  padding: ${e=>e.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  flex-shrink: 0;
  border-bottom: 2px solid ${e=>e.theme.colors.surface.medium};
`,nh=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,oh=a.h2`
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
`,ah=a.input`
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
`,sh=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 12px;
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
`,ih=a.button`
  display: none;

  @media (max-width: ${Gt}) {
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
`,lh=a.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,ch=a.form`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.md};
  flex-shrink: 0;
`,dh=a.input`
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
`,mh=a.div`
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  border-top: 2px solid ${e=>e.theme.colors.surface.medium};
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
`,to=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.extraWide};
  text-align: center;
  padding: 80px 24px;
  animation: ${Wp} 1.5s ease infinite;
`,wr=a.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Cr=a.label`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 11px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
`,ph=a.input`
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
`,ro=a.select`
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
`,hh=a.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.md};
`,uh=()=>{const[e,r]=Ia(),n=e.get("list")||"",{data:o,isLoading:s}=cp(),{data:i,isLoading:l}=dp(n),{data:c}=he(),m=mp(),d=pp(),h=hp(),b=up(),v=gp(),u=xp(),p=fp(),[f,g]=$.useState("all"),[x,y]=$.useState(!1),[j,w]=$.useState(!1),[F,k]=$.useState(!1),[I,P]=$.useState(""),[K,E]=$.useState(""),[M,U]=$.useState(""),[H,V]=$.useState("general"),[R,Y]=$.useState(""),Fe=!!n,ne=$.useRef(null),S=$.useRef(null);$.useEffect(()=>{!n&&o&&o.length>0&&r({list:o[0].id},{replace:!0})},[o,n,r]),$.useEffect(()=>{F&&ne.current&&(ne.current.focus(),ne.current.select())},[F]);const W=$.useMemo(()=>o?f==="all"?o:o.filter(z=>z.type===f):[],[o,f]),G=$.useMemo(()=>i!=null&&i.items?[...i.items].sort((z,ie)=>z.completed===ie.completed?0:z.completed?1:-1):[],[i]),oe=(i==null?void 0:i.items.filter(z=>z.completed).length)??0,ae=(i==null?void 0:i.items.length)??0,ye=ae>0?oe/ae*100:0,Re=z=>{if(!z||!c)return"";const ie=c.find(Xe=>Xe.id===z);return(ie==null?void 0:ie.name)??""},be=z=>{r({list:z})},Jt=()=>{i&&(P(i.title),k(!0))},an=()=>{const z=I.trim();z&&z!==(i==null?void 0:i.title)&&d.mutate({id:n,data:{title:z}}),k(!1)},wa=z=>{z.key==="Enter"?an():z.key==="Escape"&&k(!1)},Ca=z=>{var Xe;z.preventDefault();const ie=K.trim();!ie||!n||(b.mutate({listId:n,content:ie}),E(""),(Xe=S.current)==null||Xe.focus())},Sa=z=>{v.mutate({itemId:z,listId:n})},ka=(z,ie)=>{u.mutate({itemId:z,listId:n,data:{content:ie}})},Ta=z=>{p.mutate({itemId:z,listId:n})},Aa=()=>{h.mutate(n,{onSuccess:()=>{w(!1),r({},{replace:!0})}})},sn=()=>{const z=M.trim();z&&m.mutate({title:z,type:H,boatId:H==="boat"&&R||void 0},{onSuccess:ie=>{y(!1),U(""),V("general"),Y(""),r({list:ie.id})}})},Ea=()=>{r({},{replace:!0})};return s?t.jsx(Xn,{children:t.jsx(to,{children:"Accessing Database..."})}):t.jsxs(Xn,{children:[t.jsxs(_p,{$hidden:Fe,children:[t.jsxs(Jp,{children:[t.jsx(Zp,{children:"Task Lists"}),t.jsx(T,{variant:"secondary",size:"sm",onClick:()=>y(!0),children:"New List"}),t.jsxs(Yp,{value:f,onChange:z=>g(z.target.value),"aria-label":"Filter by type",children:[t.jsx("option",{value:"all",children:"All Types"}),t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat"})]})]}),t.jsx(Xp,{children:W.length===0?t.jsx(vr,{style:{textAlign:"center",padding:"24px 0"},children:o&&o.length>0?"No matching lists":"No lists yet"}):W.map((z,ie)=>{const Xe=z.items.filter(La=>La.completed).length,Fa=z.items.length;return t.jsxs(eh,{$active:z.id===n,onClick:()=>be(z.id),style:{animationDelay:`${ie*40}ms`},"aria-current":z.id===n?"true":void 0,children:[t.jsx(th,{children:z.title}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(eo,{$type:z.type,children:z.type==="boat"?`Boat - ${Re(z.boatId)}`:"General"}),t.jsxs(vr,{children:[Xe,"/",Fa," done"]})]})]},z.id)})})]}),t.jsx(Qp,{$hidden:!Fe&&!n&&!1,children:n?l?t.jsx(to,{children:"Loading List Data..."}):i?t.jsxs(t.Fragment,{children:[t.jsxs(rh,{children:[t.jsx(ih,{onClick:Ea,children:"← Back to Lists"}),t.jsxs(nh,{children:[F?t.jsx(ah,{ref:ne,value:I,onChange:z=>P(z.target.value),onKeyDown:wa,onBlur:an}):t.jsx(oh,{onClick:Jt,children:i.title}),t.jsx(eo,{$type:i.type,children:i.type==="boat"?`Boat - ${Re(i.boatId)}`:"General"})]}),t.jsxs(sh,{children:[oe," of ",ae," completed",ae>0&&` — ${Math.round(ye)}%`]}),t.jsx(Ap,{percentage:ye})]}),t.jsxs(lh,{children:[t.jsxs(ch,{onSubmit:Ca,children:[t.jsx(dh,{ref:S,value:K,onChange:z=>E(z.target.value),placeholder:"Add new task...","aria-label":"New task content"}),t.jsx(T,{variant:"primary",size:"sm",type:"submit",onClick:()=>{},children:"Add"})]}),G.length===0?t.jsx(vr,{style:{textAlign:"center",padding:"24px 0"},children:"No items yet. Add your first task above."}):G.map(z=>t.jsx(wp,{item:z,onToggle:Sa,onUpdate:ka,onDelete:Ta},z.id))]}),t.jsx(mh,{children:t.jsx(T,{variant:"danger",size:"sm",onClick:()=>w(!0),children:"Delete List"})})]}):t.jsx(Jn,{title:"List Not Found",message:"The selected list could not be loaded. It may have been deleted."}):t.jsx(Jn,{title:o&&o.length>0?"Select a List":"Create Your First List",message:o&&o.length>0?"Choose a task list from the sidebar to view its items":"Get started by creating a new task list using the button on the left"})}),t.jsxs(ya,{isOpen:x,onClose:()=>y(!1),title:"Create Task List",children:[t.jsxs(wr,{children:[t.jsx(Cr,{htmlFor:"create-title",children:"Title"}),t.jsx(ph,{id:"create-title",value:M,onChange:z=>U(z.target.value),placeholder:"Enter list title...",autoFocus:!0,onKeyDown:z=>{z.key==="Enter"&&sn()}})]}),t.jsxs(wr,{children:[t.jsx(Cr,{htmlFor:"create-type",children:"Type"}),t.jsxs(ro,{id:"create-type",value:H,onChange:z=>V(z.target.value),children:[t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat"})]})]}),H==="boat"&&t.jsxs(wr,{children:[t.jsx(Cr,{htmlFor:"create-boat",children:"Vessel"}),t.jsxs(ro,{id:"create-boat",value:R,onChange:z=>Y(z.target.value),children:[t.jsx("option",{value:"",children:"Select a vessel..."}),c==null?void 0:c.map(z=>t.jsx("option",{value:z.id,children:z.name},z.id))]})]}),t.jsxs(hh,{children:[t.jsx(T,{variant:"secondary",size:"sm",onClick:()=>y(!1),children:"Cancel"}),t.jsx(T,{variant:"primary",size:"sm",onClick:sn,disabled:!M.trim()||H==="boat"&&!R,children:"Create"})]})]}),t.jsx(Hp,{isOpen:j,onClose:()=>w(!1),onConfirm:Aa,title:"Delete Task List",message:`Permanently delete "${(i==null?void 0:i.title)??""}" and all its items? This action cannot be undone.`,confirmLabel:"Delete",cancelLabel:"Cancel",variant:"danger",isLoading:h.isPending})]})};function ba(e){return se({queryKey:["maintenance-templates",e],queryFn:()=>N.getMaintenanceTemplates(e)})}function $a(e,r){return se({queryKey:["maintenance-template",e],queryFn:()=>N.getMaintenanceTemplate(e),enabled:(r==null?void 0:r.enabled)!==void 0?r.enabled:!!e})}function gh(){const e=_();return Z({mutationFn:r=>N.createMaintenanceTemplate(r),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function xh(){const e=_();return Z({mutationFn:({id:r,data:n})=>N.updateMaintenanceTemplate(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:["maintenance-template",n]}),e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function fh(){const e=_();return Z({mutationFn:r=>N.deleteMaintenanceTemplate(r),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]}),e.invalidateQueries({queryKey:["maintenance-events"]})}})}function on(e){return se({queryKey:["maintenance-events","upcoming",e],queryFn:()=>N.getUpcomingMaintenanceEvents(e)})}function ja(e){return se({queryKey:["maintenance-events","completed",e],queryFn:()=>N.getCompletedMaintenanceEvents(e)})}function yh(e){return se({queryKey:["maintenance-event",e],queryFn:()=>N.getMaintenanceEvent(e),enabled:!!e})}function bh(){const e=_();return Z({mutationFn:({id:r,data:n})=>N.completeMaintenanceEvent(r,n),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-events"]})}})}const $h=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,jh=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,vh=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Sr=a(T)`
  background-color: ${e=>e.active?e.theme.colors.primary.neonCarrot:e.theme.colors.primary.lilac};
  opacity: ${e=>e.active?1:.7};
`,wh=a(D)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,no=a.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`,oo=a(D)`
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.primary.lilac}20;
  }
`,ao=a.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 10px;
`,so=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0;
  font-size: 18px;
  flex: 1;
`,io=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,lo=a.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"active":return e.theme.colors.primary.anakiwa;case"inactive":return e.theme.colors.text.secondary;case"due":return e.theme.colors.primary.neonCarrot;case"overdue":return"#ff4444";case"completed":return"#44ff44";default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,Ch=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`,Sh=a.select`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
`;function kh(){const[e,r]=$.useState("templates"),[n,o]=$.useState(""),{data:s=[]}=he(),{data:i=[],isLoading:l}=ba(n||void 0),{data:c=[],isLoading:m}=on(n||void 0),{data:d=[],isLoading:h}=ja(n||void 0),b=y=>{if(!y)return"One-time";const{type:j,interval:w}=y,F=w===1?j.slice(0,-1):j;return`Every ${w} ${F}`},v=y=>y?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(y):"N/A",u=y=>{if(!y)return"N/A";const j=Math.floor(y/60),w=y%60;return j>0?`${j}h ${w}m`:`${w}m`},p=y=>{if(y.completedAt)return"completed";const j=new Date(y.dueDate),w=new Date,F=Math.ceil((j.getTime()-w.getTime())/(1e3*60*60*24));return F<0?"overdue":F<=7?"due":"active"},f=()=>t.jsx(no,{children:i.map(y=>{var j;return t.jsx(ee,{to:`/maintenance/templates/${y.id}`,style:{textDecoration:"none"},children:t.jsxs(oo,{children:[t.jsxs(ao,{children:[t.jsx(so,{children:y.title}),t.jsx(lo,{status:y.isActive?"active":"inactive",children:y.isActive?"Active":"Inactive"})]}),t.jsxs(io,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Boat:"})," ",((j=y.boat)==null?void 0:j.name)||"Unknown"]}),y.component&&t.jsxs("div",{children:[t.jsx("strong",{children:"Component:"})," ",y.component]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Recurrence:"})," ",b(y.recurrence)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Est. Cost:"})," ",v(y.estimatedCost)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Est. Time:"})," ",u(y.estimatedTime)]})]}),y.description&&t.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:y.description})]})},y.id)})}),g=(y,j=!1)=>t.jsx(no,{children:y.map(w=>{var F,k,I,P;return t.jsx(ee,{to:`/maintenance/events/${w.id}`,style:{textDecoration:"none"},children:t.jsxs(oo,{children:[t.jsxs(ao,{children:[t.jsx(so,{children:((F=w.template)==null?void 0:F.title)||"Unknown Task"}),t.jsx(lo,{status:p(w),children:p(w)})]}),t.jsxs(io,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Boat:"})," ",((I=(k=w.template)==null?void 0:k.boat)==null?void 0:I.name)||"Unknown"]}),((P=w.template)==null?void 0:P.component)&&t.jsxs("div",{children:[t.jsx("strong",{children:"Component:"})," ",w.template.component]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Due Date:"})," ",new Date(w.dueDate).toLocaleDateString()]}),j&&w.completedAt&&t.jsxs("div",{children:[t.jsx("strong",{children:"Completed:"})," ",new Date(w.completedAt).toLocaleDateString()]}),w.actualCost&&t.jsxs("div",{children:[t.jsx("strong",{children:"Actual Cost:"})," ",v(w.actualCost)]}),w.actualTime&&t.jsxs("div",{children:[t.jsx("strong",{children:"Actual Time:"})," ",u(w.actualTime)]})]}),w.notes&&t.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:w.notes})]})},w.id)})}),x=l||m||h;return t.jsxs($h,{children:[t.jsxs(Te,{children:[t.jsx(A,{label:"System Status",value:"OPERATIONAL"}),t.jsx(A,{label:"Active Templates",value:i.filter(y=>y.isActive).length.toString()}),t.jsx(A,{label:"Upcoming Events",value:c.length.toString()}),t.jsx(A,{label:"Overdue Events",value:c.filter(y=>p(y)==="overdue").length.toString()})]}),t.jsxs(jh,{children:[t.jsx(B,{children:"Maintenance Management"}),t.jsxs(Ch,{children:[t.jsxs(Sh,{value:n,onChange:y=>o(y.target.value),children:[t.jsx("option",{value:"",children:"All Boats"}),s.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))]}),t.jsx(ee,{to:"/maintenance/templates/new",children:t.jsx(T,{children:"New Template"})})]}),t.jsxs(vh,{children:[t.jsxs(Sr,{active:e==="templates",onClick:()=>r("templates"),children:["Templates (",i.length,")"]}),t.jsxs(Sr,{active:e==="upcoming",onClick:()=>r("upcoming"),children:["Upcoming (",c.length,")"]}),t.jsxs(Sr,{active:e==="completed",onClick:()=>r("completed"),children:["Completed (",d.length,")"]})]}),t.jsx(wh,{children:x?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#ff9966",fontSize:"18px"},children:"Loading maintenance data..."})}):t.jsxs(t.Fragment,{children:[e==="templates"&&f(),e==="upcoming"&&g(c),e==="completed"&&g(d,!0)]})})]})]})}const kr=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Tr=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Ar=a(D)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Th=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Ah=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Er=a(D)`
  padding: 15px;
`,Ft=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,Le=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,De=a.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,ze=a.span`
  color: ${e=>e.theme.colors.text.primary};
`,Eh=a.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>e.active?e.theme.colors.primary.anakiwa:e.theme.colors.text.secondary};
  color: ${e=>e.theme.colors.background};
`,Fh=a.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
  margin-bottom: 20px;
  line-height: 1.5;
`,Lh=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,Dh=a.div`
  padding: 20px;
  text-align: center;
`;function zh(){var h,b;const{id:e}=Oe(),r=de(),{data:n,isLoading:o,error:s}=$a(e),i=fh(),l=async()=>{if(!n)return;if(window.confirm(`Are you sure you want to delete the template "${n.title}"? This will also delete all future maintenance events for this template.`))try{await i.mutateAsync(n.id),r("/maintenance")}catch(u){console.error("Failed to delete template:",u),alert("Failed to delete template. Please try again.")}},c=v=>{if(!v)return"One-time";const{type:u,interval:p}=v,f=p===1?u.slice(0,-1):u;return`Every ${p} ${f}`},m=v=>v?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(v):"Not specified",d=v=>{if(!v)return"Not specified";const u=Math.floor(v/60),p=v%60;return u>0?`${u}h ${p}m`:`${p}m`};return o?t.jsxs(kr,{children:[t.jsx(Te,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(Tr,{children:[t.jsx(B,{children:"Maintenance Template"}),t.jsx(Ar,{children:t.jsx(Lh,{children:"Loading template details..."})})]})]}):s||!n?t.jsxs(kr,{children:[t.jsx(Te,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(Tr,{children:[t.jsx(B,{children:"Maintenance Template"}),t.jsx(Ar,{children:t.jsxs(Dh,{children:[t.jsx(Ae,{type:"error",children:"Template not found or failed to load."}),t.jsx(ee,{to:"/maintenance",children:t.jsx(T,{children:"Back to Maintenance"})})]})})]})]}):t.jsxs(kr,{children:[t.jsxs(Te,{children:[t.jsx(A,{label:"Template Status",value:n.isActive?"ACTIVE":"INACTIVE"}),t.jsx(A,{label:"Boat",value:((h=n.boat)==null?void 0:h.name)||"Unknown"}),t.jsx(A,{label:"Component",value:n.component||"General"}),t.jsx(A,{label:"Recurrence",value:c(n.recurrence)})]}),t.jsxs(Tr,{children:[t.jsx(B,{children:n.title}),t.jsxs(Th,{children:[t.jsx(ee,{to:"/maintenance",children:t.jsx(T,{children:"Back to List"})}),t.jsx(ee,{to:`/maintenance/templates/${n.id}/edit`,children:t.jsx(T,{children:"Edit Template"})}),t.jsx(T,{onClick:l,disabled:i.isPending,variant:"danger",children:i.isPending?"Deleting...":"Delete Template"})]}),t.jsxs(Ar,{children:[n.description&&t.jsxs(Fh,{children:[t.jsx("strong",{children:"Description:"}),t.jsx("br",{}),n.description]}),t.jsxs(Ah,{children:[t.jsxs(Er,{children:[t.jsx(Ft,{children:"Basic Information"}),t.jsxs(Le,{children:[t.jsx(De,{children:"Title:"}),t.jsx(ze,{children:n.title})]}),t.jsxs(Le,{children:[t.jsx(De,{children:"Boat:"}),t.jsx(ze,{children:((b=n.boat)==null?void 0:b.name)||"Unknown"})]}),t.jsxs(Le,{children:[t.jsx(De,{children:"Component:"}),t.jsx(ze,{children:n.component||"General"})]}),t.jsxs(Le,{children:[t.jsx(De,{children:"Status:"}),t.jsx(ze,{children:t.jsx(Eh,{active:n.isActive,children:n.isActive?"Active":"Inactive"})})]})]}),t.jsxs(Er,{children:[t.jsx(Ft,{children:"Schedule & Estimates"}),t.jsxs(Le,{children:[t.jsx(De,{children:"Recurrence:"}),t.jsx(ze,{children:c(n.recurrence)})]}),t.jsxs(Le,{children:[t.jsx(De,{children:"Estimated Cost:"}),t.jsx(ze,{children:m(n.estimatedCost)})]}),t.jsxs(Le,{children:[t.jsx(De,{children:"Estimated Time:"}),t.jsx(ze,{children:d(n.estimatedTime)})]})]}),t.jsxs(Er,{children:[t.jsx(Ft,{children:"Timestamps"}),t.jsxs(Le,{children:[t.jsx(De,{children:"Created:"}),t.jsx(ze,{children:new Date(n.createdAt).toLocaleString()})]}),t.jsxs(Le,{children:[t.jsx(De,{children:"Updated:"}),t.jsx(ze,{children:new Date(n.updatedAt).toLocaleString()})]})]})]}),t.jsxs("div",{style:{marginTop:"30px"},children:[t.jsx(Ft,{children:"Related Events"}),t.jsx("p",{style:{color:"#ccc",marginBottom:"20px"},children:"View upcoming and completed maintenance events generated from this template."}),t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(ee,{to:`/maintenance?tab=upcoming&template=${n.id}`,children:t.jsx(T,{children:"View Upcoming Events"})}),t.jsx(ee,{to:`/maintenance?tab=completed&template=${n.id}`,children:t.jsx(T,{children:"View Completed Events"})})]})]})]})]})]})}const Fr=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Lr=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Dr=a(D)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Mh=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Ih=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,zr=a(D)`
  padding: 15px;
`,Lt=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,we=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ue=a.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,Ce=a.span`
  color: ${e=>e.theme.colors.text.primary};
`,Rh=a.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"completed":return"#44ff44";case"overdue":return"#ff4444";case"due":return e.theme.colors.primary.neonCarrot;case"upcoming":return e.theme.colors.primary.anakiwa;default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,Nh=a.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${e=>e.theme.colors.background}40;
  padding: 20px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
`,Mr=a.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,Ir=a.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 120px;
`,co=a.input`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;
`,Ph=a.textarea`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  flex: 1;
`,Bh=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,Oh=a.div`
  padding: 20px;
  text-align: center;
`,Uh=a.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.lilac};
  margin-bottom: 20px;
  line-height: 1.5;
`;function qh(){var g,x,y,j,w,F,k,I,P,K,E;const{id:e}=Oe(),[r,n]=$.useState(!1),[o,s]=$.useState({actualCost:"",actualTime:"",notes:""}),{data:i,isLoading:l,error:c}=yh(e),m=bh(),d=M=>{if(M.completedAt)return"completed";const U=new Date(M.dueDate),H=new Date,V=Math.ceil((U.getTime()-H.getTime())/(1e3*60*60*24));return V<0?"overdue":V<=7?"due":"upcoming"},h=M=>M?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(M):"Not specified",b=M=>{if(!M)return"Not specified";const U=Math.floor(M/60),H=M%60;return U>0?`${U}h ${H}m`:`${H}m`},v=M=>{if(!M)return"One-time";const{type:U,interval:H}=M,V=H===1?U.slice(0,-1):U;return`Every ${H} ${V}`},u=async M=>{if(M.preventDefault(),!!i)try{const U={};o.actualCost&&(U.actualCost=parseFloat(o.actualCost)),o.actualTime&&(U.actualTime=parseInt(o.actualTime)),o.notes&&(U.notes=o.notes),await m.mutateAsync({id:i.id,data:U}),n(!1)}catch(U){console.error("Failed to complete event:",U),alert("Failed to complete maintenance event. Please try again.")}};if(l)return t.jsxs(Fr,{children:[t.jsx(Te,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(Lr,{children:[t.jsx(B,{children:"Maintenance Event"}),t.jsx(Dr,{children:t.jsx(Bh,{children:"Loading event details..."})})]})]});if(c||!i)return t.jsxs(Fr,{children:[t.jsx(Te,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(Lr,{children:[t.jsx(B,{children:"Maintenance Event"}),t.jsx(Dr,{children:t.jsxs(Oh,{children:[t.jsx(Ae,{type:"error",children:"Event not found or failed to load."}),t.jsx(ee,{to:"/maintenance",children:t.jsx(T,{children:"Back to Maintenance"})})]})})]})]});const p=d(i),f=!!i.completedAt;return t.jsxs(Fr,{children:[t.jsxs(Te,{children:[t.jsx(A,{label:"Event Status",value:p.toUpperCase()}),t.jsx(A,{label:"Boat",value:((x=(g=i.template)==null?void 0:g.boat)==null?void 0:x.name)||"Unknown"}),t.jsx(A,{label:"Due Date",value:new Date(i.dueDate).toLocaleDateString()}),f&&t.jsx(A,{label:"Completed",value:new Date(i.completedAt).toLocaleDateString()})]}),t.jsxs(Lr,{children:[t.jsx(B,{children:((y=i.template)==null?void 0:y.title)||"Maintenance Event"}),t.jsxs(Mh,{children:[t.jsx(ee,{to:"/maintenance",children:t.jsx(T,{children:"Back to List"})}),i.template&&t.jsx(ee,{to:`/maintenance/templates/${i.template.id}`,children:t.jsx(T,{children:"View Template"})}),!f&&t.jsx(T,{onClick:()=>n(!r),variant:"accent",children:r?"Cancel Completion":"Complete Event"})]}),t.jsxs(Dr,{children:[t.jsx("div",{style:{marginBottom:"20px"},children:t.jsx(Rh,{status:p,children:p.toUpperCase()})}),((j=i.template)==null?void 0:j.description)&&t.jsxs(Uh,{children:[t.jsx("strong",{children:"Template Description:"}),t.jsx("br",{}),i.template.description]}),r&&!f&&t.jsxs(Nh,{onSubmit:u,children:[t.jsx(Lt,{children:"Complete Maintenance Event"}),t.jsxs(Mr,{children:[t.jsx(Ir,{children:"Actual Cost ($):"}),t.jsx(co,{type:"number",step:"0.01",value:o.actualCost,onChange:M=>s(U=>({...U,actualCost:M.target.value})),placeholder:"Enter actual cost"})]}),t.jsxs(Mr,{children:[t.jsx(Ir,{children:"Actual Time (minutes):"}),t.jsx(co,{type:"number",value:o.actualTime,onChange:M=>s(U=>({...U,actualTime:M.target.value})),placeholder:"Enter time in minutes"})]}),t.jsxs(Mr,{children:[t.jsx(Ir,{children:"Notes:"}),t.jsx(Ph,{value:o.notes,onChange:M=>s(U=>({...U,notes:M.target.value})),placeholder:"Enter completion notes, observations, or issues encountered"})]}),t.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[t.jsx(T,{type:"button",onClick:()=>n(!1),children:"Cancel"}),t.jsx(T,{type:"submit",disabled:m.isPending,variant:"accent",children:m.isPending?"Completing...":"Complete Event"})]})]}),t.jsxs(Ih,{children:[t.jsxs(zr,{children:[t.jsx(Lt,{children:"Event Information"}),t.jsxs(we,{children:[t.jsx(ue,{children:"Title:"}),t.jsx(Ce,{children:((w=i.template)==null?void 0:w.title)||"Unknown"})]}),t.jsxs(we,{children:[t.jsx(ue,{children:"Boat:"}),t.jsx(Ce,{children:((k=(F=i.template)==null?void 0:F.boat)==null?void 0:k.name)||"Unknown"})]}),t.jsxs(we,{children:[t.jsx(ue,{children:"Component:"}),t.jsx(Ce,{children:((I=i.template)==null?void 0:I.component)||"General"})]}),t.jsxs(we,{children:[t.jsx(ue,{children:"Due Date:"}),t.jsx(Ce,{children:new Date(i.dueDate).toLocaleDateString()})]}),f&&t.jsxs(we,{children:[t.jsx(ue,{children:"Completed:"}),t.jsx(Ce,{children:new Date(i.completedAt).toLocaleDateString()})]})]}),t.jsxs(zr,{children:[t.jsx(Lt,{children:"Template Information"}),t.jsxs(we,{children:[t.jsx(ue,{children:"Recurrence:"}),t.jsx(Ce,{children:v((P=i.template)==null?void 0:P.recurrence)})]}),t.jsxs(we,{children:[t.jsx(ue,{children:"Est. Cost:"}),t.jsx(Ce,{children:h((K=i.template)==null?void 0:K.estimatedCost)})]}),t.jsxs(we,{children:[t.jsx(ue,{children:"Est. Time:"}),t.jsx(Ce,{children:b((E=i.template)==null?void 0:E.estimatedTime)})]})]}),f&&t.jsxs(zr,{children:[t.jsx(Lt,{children:"Completion Details"}),t.jsxs(we,{children:[t.jsx(ue,{children:"Actual Cost:"}),t.jsx(Ce,{children:h(i.actualCost)})]}),t.jsxs(we,{children:[t.jsx(ue,{children:"Actual Time:"}),t.jsx(Ce,{children:b(i.actualTime)})]}),i.notes&&t.jsxs("div",{style:{marginTop:"15px"},children:[t.jsx(ue,{style:{display:"block",marginBottom:"5px"},children:"Notes:"}),t.jsx("div",{style:{backgroundColor:"#333",padding:"10px",borderRadius:"4px",whiteSpace:"pre-wrap"},children:i.notes})]})]})]})]})]})]})}const Rr=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Nr=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Pr=a(D)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Hh=a.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Dt=a.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: ${e=>e.theme.colors.background}40;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
`,zt=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 10px 0;
  font-size: 16px;
  text-transform: uppercase;
`,Me=a.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`,Ie=a.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 150px;
  padding-top: 8px;
`,yt=a.input`
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
`,mo=a.select`
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
`,Wh=a.textarea`
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
`,po=a.input`
  margin-right: 8px;
`,Kh=a.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
`,Vh=a.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.colors.primary.neonCarrot}40;
`,Gh=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,_h=a.div`
  padding: 20px;
  text-align: center;
`;function ho(){const{id:e}=Oe(),r=de(),n=!!e,[o,s]=$.useState({boatId:"",title:"",description:"",component:"",hasRecurrence:!1,recurrenceType:"days",recurrenceInterval:"30",estimatedCost:"",estimatedTime:"",isActive:!0}),{data:i=[]}=he(),{data:l,isLoading:c}=$a(e,{enabled:n}),m=gh(),d=xh();$.useEffect(()=>{var u,p,f,g,x;l&&n&&s({boatId:l.boatId,title:l.title,description:l.description||"",component:l.component||"",hasRecurrence:!!l.recurrence,recurrenceType:((u=l.recurrence)==null?void 0:u.type)||"days",recurrenceInterval:((f=(p=l.recurrence)==null?void 0:p.interval)==null?void 0:f.toString())||"30",estimatedCost:((g=l.estimatedCost)==null?void 0:g.toString())||"",estimatedTime:((x=l.estimatedTime)==null?void 0:x.toString())||"",isActive:l.isActive})},[l,n]);const h=async u=>{if(u.preventDefault(),!o.boatId||!o.title){alert("Please fill in all required fields (Boat and Title)");return}try{const p={boatId:o.boatId,title:o.title,description:o.description||void 0,component:o.component||void 0,estimatedCost:o.estimatedCost?parseFloat(o.estimatedCost):void 0,estimatedTime:o.estimatedTime?parseInt(o.estimatedTime):void 0};o.hasRecurrence&&(p.recurrence={type:o.recurrenceType,interval:parseInt(o.recurrenceInterval)}),n?(p.isActive=o.isActive,await d.mutateAsync({id:e,data:p})):await m.mutateAsync(p),r("/maintenance")}catch(p){console.error("Failed to save template:",p),alert("Failed to save maintenance template. Please try again.")}},b=(u,p)=>{s(f=>({...f,[u]:p}))};if(n&&c)return t.jsxs(Rr,{children:[t.jsx(Te,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(Nr,{children:[t.jsx(B,{children:"Edit Maintenance Template"}),t.jsx(Pr,{children:t.jsx(Gh,{children:"Loading template..."})})]})]});if(n&&!l)return t.jsxs(Rr,{children:[t.jsx(Te,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(Nr,{children:[t.jsx(B,{children:"Edit Maintenance Template"}),t.jsx(Pr,{children:t.jsxs(_h,{children:[t.jsx(Ae,{type:"error",children:"Template not found."}),t.jsx(ee,{to:"/maintenance",children:t.jsx(T,{children:"Back to Maintenance"})})]})})]})]});const v=m.isPending||d.isPending;return t.jsxs(Rr,{children:[t.jsxs(Te,{children:[t.jsx(A,{label:"Mode",value:n?"EDIT":"CREATE"}),t.jsx(A,{label:"Boats Available",value:i.length.toString()}),n&&l&&t.jsx(A,{label:"Template Status",value:l.isActive?"ACTIVE":"INACTIVE"})]}),t.jsxs(Nr,{children:[t.jsx(B,{children:n?"Edit Maintenance Template":"Create Maintenance Template"}),t.jsx(Pr,{children:t.jsxs(Hh,{onSubmit:h,children:[t.jsxs(Dt,{children:[t.jsx(zt,{children:"Basic Information"}),t.jsxs(Me,{children:[t.jsx(Ie,{children:"Boat *"}),t.jsxs(mo,{value:o.boatId,onChange:u=>b("boatId",u.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Select a boat"}),i.map(u=>t.jsx("option",{value:u.id,children:u.name},u.id))]})]}),t.jsxs(Me,{children:[t.jsx(Ie,{children:"Title *"}),t.jsx(yt,{type:"text",value:o.title,onChange:u=>b("title",u.target.value),placeholder:"e.g., Oil Change, Hull Cleaning, Engine Service",required:!0})]}),t.jsxs(Me,{children:[t.jsx(Ie,{children:"Component"}),t.jsx(yt,{type:"text",value:o.component,onChange:u=>b("component",u.target.value),placeholder:"e.g., Engine, Hull, Electrical, Plumbing"})]}),t.jsxs(Me,{children:[t.jsx(Ie,{children:"Description"}),t.jsx(Wh,{value:o.description,onChange:u=>b("description",u.target.value),placeholder:"Detailed description of the maintenance task, including any special instructions or requirements"})]})]}),t.jsxs(Dt,{children:[t.jsx(zt,{children:"Schedule"}),t.jsxs(Me,{children:[t.jsx(Ie,{children:"Recurring Task"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(po,{type:"checkbox",checked:o.hasRecurrence,onChange:u=>b("hasRecurrence",u.target.checked)}),t.jsx("span",{children:"This is a recurring maintenance task"})]})]}),o.hasRecurrence&&t.jsxs(Me,{children:[t.jsx(Ie,{children:"Recurrence"}),t.jsxs(Kh,{children:[t.jsx("span",{children:"Every"}),t.jsx(yt,{type:"number",min:"1",value:o.recurrenceInterval,onChange:u=>b("recurrenceInterval",u.target.value),style:{width:"80px",flex:"none"}}),t.jsxs(mo,{value:o.recurrenceType,onChange:u=>b("recurrenceType",u.target.value),style:{flex:"none",minWidth:"120px"},children:[t.jsx("option",{value:"days",children:"Days"}),t.jsx("option",{value:"weeks",children:"Weeks"}),t.jsx("option",{value:"months",children:"Months"}),t.jsx("option",{value:"years",children:"Years"}),t.jsx("option",{value:"engine_hours",children:"Engine Hours"})]})]})]})]}),t.jsxs(Dt,{children:[t.jsx(zt,{children:"Estimates"}),t.jsxs(Me,{children:[t.jsx(Ie,{children:"Estimated Cost ($)"}),t.jsx(yt,{type:"number",step:"0.01",min:"0",value:o.estimatedCost,onChange:u=>b("estimatedCost",u.target.value),placeholder:"0.00"})]}),t.jsxs(Me,{children:[t.jsx(Ie,{children:"Estimated Time (minutes)"}),t.jsx(yt,{type:"number",min:"0",value:o.estimatedTime,onChange:u=>b("estimatedTime",u.target.value),placeholder:"60"})]})]}),n&&t.jsxs(Dt,{children:[t.jsx(zt,{children:"Status"}),t.jsxs(Me,{children:[t.jsx(Ie,{children:"Template Status"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(po,{type:"checkbox",checked:o.isActive,onChange:u=>b("isActive",u.target.checked)}),t.jsx("span",{children:"Template is active (generates future events)"})]})]})]}),t.jsxs(Vh,{children:[t.jsx(ee,{to:"/maintenance",children:t.jsx(T,{type:"button",children:"Cancel"})}),t.jsx(T,{type:"submit",disabled:v,variant:"accent",children:v?"Saving...":n?"Update Template":"Create Template"})]})]})})]})]})}const va="nautical_settings",Qh=()=>{try{const e=localStorage.getItem(va);return e?JSON.parse(e):{}}catch{return{}}},Jh=e=>{localStorage.setItem(va,JSON.stringify(e))},_t=()=>{const[e,r]=$.useState(Qh);$.useEffect(()=>{Jh(e)},[e]);const n=$.useCallback(c=>e[c]||{enabled:!1},[e]),o=$.useCallback(c=>{var m;return((m=e[c])==null?void 0:m.enabled)??!1},[e]),s=$.useCallback(c=>{r(m=>{const d=m[c]||{enabled:!1};return{...m,[c]:{...d,enabled:!d.enabled}}})},[]),i=$.useCallback((c,m)=>{r(d=>{const h=d[c]||{enabled:!1};return{...d,[c]:{...h,apiKey:m}}})},[]),l=$.useCallback((c,m,d)=>{r(h=>{const b=h[c]||{enabled:!1};return{...h,[c]:{...b,options:{...b.options,[m]:d}}}})},[]);return{settings:e,getProviderConfig:n,isEnabled:o,toggleProvider:s,setApiKey:i,setProviderOption:l}},Zh={openseamap:{id:"openseamap",url:"https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openseamap.org">OpenSeaMap</a> contributors',opacity:.7,maxZoom:18,type:"xyz"},"noaa-charts":{id:"noaa-charts",url:"https://tileservice.charts.noaa.gov/tiles/50000_1/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://charts.noaa.gov">NOAA</a>',opacity:.8,maxZoom:16,type:"xyz"},gebco:{id:"gebco",url:"https://wms.gebco.net/mapserv?",attribution:'&copy; <a href="https://www.gebco.net">GEBCO</a>',opacity:.5,maxZoom:12,type:"wms",wmsLayers:"GEBCO_LATEST",wmsFormat:"image/png"},windy:{id:"windy",url:"https://tiles.windy.com/tiles/v10.0/wind/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://windy.com">Windy</a>',opacity:.6,maxZoom:18,type:"xyz"},navionics:{id:"navionics",url:"https://backend.navionics.com/tile/{z}/{x}/{y}",attribution:'&copy; <a href="https://www.navionics.com">Navionics/Garmin</a>',opacity:.8,maxZoom:18,type:"xyz"}},Qt=[{id:"openseamap",name:"OpenSeaMap",tier:"free",type:"tile",description:"Nautical marks, buoys, lights, and other seamark overlays on OpenStreetMap.",website:"https://openseamap.org",pros:["Completely free","Community maintained","Global coverage"],cons:["Limited detail in some regions","Community-dependent updates"],requiresApiKey:!1},{id:"noaa-charts",name:"NOAA Charts",tier:"free",type:"tile",description:"Official US nautical charts from NOAA via WMTS tile service.",website:"https://charts.noaa.gov",pros:["Official government data","High accuracy for US waters","Free to use"],cons:["US waters only","Can be slow to update"],requiresApiKey:!1},{id:"gebco",name:"GEBCO Bathymetry",tier:"free",type:"tile",description:"Global bathymetry and ocean depth visualization via WMS.",website:"https://www.gebco.net",pros:["Global ocean depth data","Free to use","Scientific quality"],cons:["Lower resolution in some areas","WMS can be slower than tile sources"],requiresApiKey:!1},{id:"noaa-coops",name:"NOAA CO-OPS",tier:"free",type:"data",description:"Real-time and predicted tide and current data from US stations.",website:"https://tidesandcurrents.noaa.gov",pros:["Official NOAA data","Real-time observations","Tide predictions"],cons:["US stations only","Rate limited"],requiresApiKey:!1},{id:"aisstream",name:"AISstream.io",tier:"free",type:"data",description:"Real-time coastal AIS vessel tracking via WebSocket.",website:"https://aisstream.io",pros:["Real-time vessel positions","WebSocket streaming","Free tier available"],cons:["Requires free API key","Coastal coverage only"],requiresApiKey:!0,apiKeySignupUrl:"https://aisstream.io/authenticate"},{id:"open-meteo",name:"Open-Meteo Marine",tier:"free",type:"data",description:"Marine weather forecasts including wave height, swell, and wind.",website:"https://open-meteo.com",pros:["Completely free","No API key needed","Global coverage"],cons:["Forecast only, no observations","Less detail than paid alternatives"],requiresApiKey:!1},{id:"worldtides",name:"WorldTides",tier:"paid",type:"data",description:"Global tide predictions and observations with high accuracy.",website:"https://www.worldtides.info",pros:["Global coverage","High accuracy","Detailed predictions"],cons:["Paid per request","Credits expire"],requiresApiKey:!0,apiKeySignupUrl:"https://www.worldtides.info/developer",pricingNote:"$10 for 5,000 predictions"},{id:"stormglass",name:"Stormglass",tier:"paid",type:"data",description:"Premium marine weather data from multiple sources.",website:"https://stormglass.io",pros:["Multiple weather models","High accuracy","Free tier (10 req/day)"],cons:["Limited free tier","Can be expensive at scale"],requiresApiKey:!0,apiKeySignupUrl:"https://stormglass.io/register",pricingNote:"Free tier: 10 requests/day. Paid plans from $19/month."},{id:"windy",name:"Windy",tier:"paid",type:"tile",description:"Animated wind, wave, and weather tile overlays.",website:"https://api.windy.com",pros:["Beautiful visualizations","Animated overlays","Multiple data layers"],cons:["Expensive","API key required"],requiresApiKey:!0,apiKeySignupUrl:"https://api.windy.com/signup",pricingNote:"~$720/year"},{id:"navionics",name:"Navionics/Garmin",tier:"paid",type:"tile",description:"Premium nautical charts with detailed depth contours and marina info.",website:"https://www.navionics.com",pros:["Industry-leading charts","Detailed depth data","Marina information"],cons:["Expensive","Contact for pricing","Complex integration"],requiresApiKey:!0,apiKeySignupUrl:"https://developer.navionics.com",pricingNote:"Contact Garmin/Navionics for pricing"},{id:"marinetraffic",name:"MarineTraffic",tier:"paid",type:"data",description:"Global vessel tracking with satellite AIS coverage.",website:"https://www.marinetraffic.com",pros:["Global coverage","Satellite + terrestrial AIS","Historical data"],cons:["Credit-based pricing","Can be expensive"],requiresApiKey:!0,apiKeySignupUrl:"https://www.marinetraffic.com/en/ais-api-services",pricingNote:"Credit-based pricing, varies by endpoint"}],Yh=Qt.filter(e=>e.tier==="free"),Xh=Qt.filter(e=>e.tier==="paid"),eu=()=>{const{isEnabled:e,getProviderConfig:r}=_t();return{enabledTileLayers:$.useMemo(()=>Qt.filter(o=>o.type==="tile"&&e(o.id)).filter(o=>o.requiresApiKey?!!r(o.id).apiKey:!0).map(o=>Zh[o.id]).filter(o=>!!o),[e,r])}},tu="https://api.tidesandcurrents.noaa.gov/api/prod/datagetter",ru=async(e,r,n,o)=>{try{const s=await fetch("https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json?type=tidepredictions");return s.ok?((await s.json()).stations||[]).filter(c=>c.lat>=e&&c.lat<=n&&c.lng>=r&&c.lng<=o).map(c=>({id:c.id,name:c.name,latitude:c.lat,longitude:c.lng})):[]}catch{return[]}},nu=async e=>{try{const r=new Date,n=new Date(r);n.setDate(n.getDate()+1);const o=r.toISOString().slice(0,10).replace(/-/g,""),s=n.toISOString().slice(0,10).replace(/-/g,""),i=new URLSearchParams({begin_date:o,end_date:s,station:e,product:"predictions",datum:"MLLW",time_zone:"lst_ldt",units:"english",format:"json",interval:"hilo"}),l=await fetch(`${tu}?${i}`);return l.ok?((await l.json()).predictions||[]).map(m=>({time:m.t,value:parseFloat(m.v),type:m.type})):[]}catch{return[]}};class ou{ws=null;vessels=new Map;callback=null;connect(r,n,o){this.callback=o,this.disconnect(),this.ws=new WebSocket("wss://stream.aisstream.io/v0/stream"),this.ws.onopen=()=>{var s;(s=this.ws)==null||s.send(JSON.stringify({APIKey:r,BoundingBoxes:[n]}))},this.ws.onmessage=s=>{var i,l,c;try{const m=JSON.parse(s.data);if((i=m.Message)!=null&&i.PositionReport){const d=m.Message.PositionReport,h=m.MetaData,b={mmsi:h.MMSI,name:((l=h.ShipName)==null?void 0:l.trim())||`MMSI ${h.MMSI}`,latitude:d.Latitude,longitude:d.Longitude,heading:d.TrueHeading??d.Cog??0,speed:d.Sog??0,shipType:h.ShipType??0,timestamp:Date.now()};this.vessels.set(b.mmsi,b);const v=Date.now()-6e5;for(const[u,p]of this.vessels)p.timestamp<v&&this.vessels.delete(u);(c=this.callback)==null||c.call(this,Array.from(this.vessels.values()))}}catch{}},this.ws.onerror=()=>{setTimeout(()=>{this.callback&&this.connect(r,n,this.callback)},5e3)},this.ws.onclose=()=>{}}disconnect(){var r;(r=this.ws)==null||r.close(),this.ws=null,this.vessels.clear()}getVessels(){return Array.from(this.vessels.values())}}const au=async(e,r)=>{var n,o,s;try{const i=new URLSearchParams({latitude:e.toString(),longitude:r.toString(),current:["wave_height","wave_period","wave_direction","wind_wave_height","wind_wave_period","swell_wave_height","swell_wave_period"].join(","),hourly:"temperature_2m,wind_speed_10m,wind_direction_10m",forecast_days:"1",timezone:"auto"}),l=await fetch(`https://marine-api.open-meteo.com/v1/marine?${i}`);if(!l.ok)return null;const c=await l.json(),m=c.current||{},d=c.hourly||{};return{latitude:c.latitude,longitude:c.longitude,waveHeight:m.wave_height??null,wavePeriod:m.wave_period??null,waveDirection:m.wave_direction??null,windSpeed:((n=d.wind_speed_10m)==null?void 0:n[0])??null,windDirection:((o=d.wind_direction_10m)==null?void 0:o[0])??null,swellHeight:m.swell_wave_height??null,swellPeriod:m.swell_wave_period??null,temperature:((s=d.temperature_2m)==null?void 0:s[0])??null,timestamp:m.time||new Date().toISOString()}}catch{return null}},su=async(e,r,n)=>{try{const o=await fetch(`https://www.worldtides.info/api/v3?extremes&lat=${e}&lon=${r}&key=${n}`);return o.ok?((await o.json()).extremes||[]).map(i=>({date:i.date,height:i.height,type:i.type==="High"?"High":"Low"})):[]}catch{return[]}},iu=async(e,r,n)=>{var o;try{const s=["waveHeight","wavePeriod","waveDirection","windSpeed","windDirection","waterTemperature","airTemperature","visibility"].join(","),i=await fetch(`https://api.stormglass.io/v2/weather/point?lat=${e}&lng=${r}&params=${s}`,{headers:{Authorization:n}});if(!i.ok)return null;const c=(o=(await i.json()).hours)==null?void 0:o[0];if(!c)return null;const m=d=>{var h,b;return((h=c[d])==null?void 0:h.sg)??((b=c[d])==null?void 0:b.noaa)??null};return{waveHeight:m("waveHeight"),wavePeriod:m("wavePeriod"),waveDirection:m("waveDirection"),windSpeed:m("windSpeed"),windDirection:m("windDirection"),waterTemperature:m("waterTemperature"),airTemperature:m("airTemperature"),visibility:m("visibility"),timestamp:c.time}}catch{return null}},lu=async(e,r,n,o,s)=>{try{const i=await fetch(`https://services.marinetraffic.com/api/exportvessels/v:8/${s}/MINLAT:${e}/MAXLAT:${n}/MINLON:${r}/MAXLON:${o}/protocol:jsono`);if(!i.ok)return[];const l=await i.json();return(Array.isArray(l)?l:[]).map(c=>({mmsi:parseInt(c.MMSI),name:c.SHIPNAME||`MMSI ${c.MMSI}`,latitude:parseFloat(c.LAT),longitude:parseFloat(c.LON),speed:parseFloat(c.SPEED)/10,heading:parseInt(c.HEADING),shipType:c.SHIPTYPE||"",destination:c.DESTINATION||"",timestamp:c.TIMESTAMP||""}))}catch{return[]}},cu=e=>{const{isEnabled:r,getProviderConfig:n}=_t(),[o,s]=$.useState([]),[i,l]=$.useState([]),[c,m]=$.useState([]),[d,h]=$.useState([]),[b,v]=$.useState(null),[u,p]=$.useState(null),[f]=$.useState(!1),g=$.useRef(null);return $.useEffect(()=>{if(!e||!r("noaa-coops")){m([]);return}const x=async()=>{const j=await ru(e.minLat,e.minLng,e.maxLat,e.maxLng),w=await Promise.all(j.slice(0,20).map(async F=>{const k=await nu(F.id);return{...F,predictions:k}}));m(w)};x();const y=setInterval(x,30*60*1e3);return()=>clearInterval(y)},[e==null?void 0:e.minLat,e==null?void 0:e.maxLat,e==null?void 0:e.minLng,e==null?void 0:e.maxLng,r]),$.useEffect(()=>{var j;const x=n("aisstream");if(!e||!r("aisstream")||!x.apiKey){(j=g.current)==null||j.disconnect(),g.current=null,s([]);return}const y=new ou;return g.current=y,y.connect(x.apiKey,[[e.minLat,e.minLng],[e.maxLat,e.maxLng]],w=>s(w)),()=>{y.disconnect(),g.current=null}},[e==null?void 0:e.minLat,e==null?void 0:e.maxLat,r,n]),$.useEffect(()=>{if(!e||!r("open-meteo")){v(null);return}const x=async()=>{const j=await au(e.centerLat,e.centerLng);v(j)};x();const y=setInterval(x,15*60*1e3);return()=>clearInterval(y)},[e==null?void 0:e.centerLat,e==null?void 0:e.centerLng,r]),$.useEffect(()=>{const x=n("worldtides");if(!e||!r("worldtides")||!x.apiKey){h([]);return}const y=async()=>{const w=await su(e.centerLat,e.centerLng,x.apiKey);h(w)};y();const j=setInterval(y,30*60*1e3);return()=>clearInterval(j)},[e==null?void 0:e.centerLat,e==null?void 0:e.centerLng,r,n]),$.useEffect(()=>{const x=n("stormglass");if(!e||!r("stormglass")||!x.apiKey){p(null);return}const y=async()=>{const w=await iu(e.centerLat,e.centerLng,x.apiKey);p(w)};y();const j=setInterval(y,15*60*1e3);return()=>clearInterval(j)},[e==null?void 0:e.centerLat,e==null?void 0:e.centerLng,r,n]),$.useEffect(()=>{const x=n("marinetraffic");if(!e||!r("marinetraffic")||!x.apiKey){l([]);return}const y=async()=>{const w=await lu(e.minLat,e.minLng,e.maxLat,e.maxLng,x.apiKey);l(w)};y();const j=setInterval(y,5*60*1e3);return()=>clearInterval(j)},[e==null?void 0:e.minLat,e==null?void 0:e.maxLat,r,n]),{vessels:o,marineTrafficVessels:i,tideStations:c,worldTides:d,weather:b,stormglassWeather:u,isLoading:f}},Be={all:["locations"],lists:()=>[...Be.all,"list"],list:e=>[...Be.lists(),{filters:e}],details:()=>[...Be.all,"detail"],detail:e=>[...Be.details(),e],nearby:(e,r,n)=>[...Be.all,"nearby",{lat:e,lng:r,radius:n}]},du=e=>se({queryKey:Be.list(e||{}),queryFn:()=>N.getMarkedLocations(e)}),mu=()=>{const e=_();return Z({mutationFn:r=>N.createMarkedLocation(r),onSuccess:()=>{e.invalidateQueries({queryKey:Be.lists()})}})},pu=()=>{const e=_();return Z({mutationFn:r=>N.deleteMarkedLocation(r),onSuccess:()=>{e.invalidateQueries({queryKey:Be.lists()})}})},hu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",uu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",gu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete Se.Icon.Default.prototype._getIconUrl;Se.Icon.Default.mergeOptions({iconRetinaUrl:uu,iconUrl:hu,shadowUrl:gu});const xu=a.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px); // Account for header and footer
  gap: ${e=>e.theme.spacing.md};
`,fu=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,yu=a.div`
  position: relative;
  flex: 1;
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  min-height: 600px;
`,bu=a(D)`
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
`,$u=a(D)`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,ju=a.div`
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,vu=a.div`
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
`,wu=a.div`
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
`,Cu=a.div`
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
`,Su=e=>{const r={fishing:"#66FF66",marina:"#6688CC",anchorage:"#FFFF66",hazard:"#FF6666",other:"#CC99CC"};return new Se.DivIcon({html:`<div style="
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
    ">${e.charAt(0).toUpperCase()}</div>`,className:"custom-marker",iconSize:[20,20],iconAnchor:[10,10]})},ku=({onMapClick:e})=>(Do({click:r=>{e(r.latlng.lat,r.latlng.lng)}}),null),Tu=({onBoundsChange:e})=>{const r=Do({moveend:()=>{const n=r.getBounds(),o=r.getCenter();e({minLat:n.getSouth(),minLng:n.getWest(),maxLat:n.getNorth(),maxLng:n.getEast(),centerLat:o.lat,centerLng:o.lng})},zoomend:()=>{const n=r.getBounds(),o=r.getCenter();e({minLat:n.getSouth(),minLng:n.getWest(),maxLat:n.getNorth(),maxLng:n.getEast(),centerLat:o.lat,centerLng:o.lng})}});return null},Au=()=>{const[e,r]=$.useState(!0),[n,o]=$.useState(!0),[s,i]=$.useState(""),[l,c]=$.useState(!1),[m,d]=$.useState({name:"",category:"other",notes:"",latitude:0,longitude:0}),[h,b]=$.useState(null),v=$.useRef(null),{enabledTileLayers:u}=eu(),[p,f]=$.useState(null),g=cu(p),{isEnabled:x}=_t(),[y,j]=$.useState(new Set),w=$.useCallback(S=>{j(W=>{const G=new Set(W);return G.has(S)?G.delete(S):G.add(S),G})},[]),F=$.useCallback(S=>x(S)&&!y.has(S),[x,y]),k=Qt.filter(S=>x(S.id)),{data:I=[],isLoading:P}=Ue(),{data:K=[],isLoading:E}=du(s?{category:s}:void 0),M=mu(),U=pu(),H=Ze.useMemo(()=>{if(I.length>0){const S=I.flatMap(W=>W.gpsPoints);if(S.length>0){const W=S.reduce((oe,ae)=>oe+ae.latitude,0)/S.length,G=S.reduce((oe,ae)=>oe+ae.longitude,0)/S.length;return[W,G]}}return[37.7749,-122.4194]},[I]),V=$.useCallback((S,W)=>{l&&d(G=>({...G,latitude:S,longitude:W}))},[l]),R=async()=>{if(!(!m.name||!m.latitude||!m.longitude))try{await M.mutateAsync({name:m.name,latitude:m.latitude,longitude:m.longitude,category:m.category,notes:m.notes||void 0}),d({name:"",category:"other",notes:"",latitude:0,longitude:0}),c(!1)}catch(S){console.error("Failed to create location:",S)}},Y=async S=>{if(window.confirm("Are you sure you want to delete this location?"))try{await U.mutateAsync(S),b(null)}catch(W){console.error("Failed to delete location:",W)}},Fe=()=>e?I.map(S=>{var ae,ye,Re;if(S.gpsPoints.length<2)return null;const W=S.gpsPoints.map(be=>[be.latitude,be.longitude]),G=W[0],oe=W[W.length-1];return t.jsxs(Ze.Fragment,{children:[t.jsx(Fo,{positions:W,color:"#FF9966",weight:3,opacity:.7}),t.jsx(ge,{position:G,children:t.jsx(xe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Trip Start"}),t.jsx("br",{}),new Date(S.startTime).toLocaleString(),t.jsx("br",{}),"Boat: ",S.boatId]})})}),t.jsx(ge,{position:oe,children:t.jsx(xe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Trip End"}),t.jsx("br",{}),new Date(S.endTime).toLocaleString(),t.jsx("br",{}),"Duration: ",Math.round((((ae=S.statistics)==null?void 0:ae.durationSeconds)||0)/60)," minutes",t.jsx("br",{}),"Distance: ",((((ye=S.statistics)==null?void 0:ye.distanceMeters)||0)/1e3).toFixed(2)," km"]})})}),(((Re=S.statistics)==null?void 0:Re.stopPoints)||[]).map((be,Jt)=>t.jsx(ge,{position:[be.latitude,be.longitude],icon:new Se.DivIcon({html:`<div style="
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
                ">S</div>`,className:"stop-marker",iconSize:[16,16],iconAnchor:[8,8]}),children:t.jsx(xe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Stop Point"}),t.jsx("br",{}),"Duration: ",Math.round(be.durationSeconds/60)," minutes",t.jsx("br",{}),"From: ",new Date(be.startTime).toLocaleString(),t.jsx("br",{}),"To: ",new Date(be.endTime).toLocaleString()]})})},`${S.id}-stop-${Jt}`))]},S.id)}):null,ne=()=>n?K.map(S=>t.jsx(ge,{position:[S.latitude,S.longitude],icon:Su(S.category),eventHandlers:{click:()=>b(S)},children:t.jsx(xe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:S.name}),t.jsx("br",{}),"Category: ",S.category,t.jsx("br",{}),S.notes&&t.jsxs(t.Fragment,{children:["Notes: ",S.notes,t.jsx("br",{})]}),S.tags.length>0&&t.jsxs(t.Fragment,{children:["Tags: ",S.tags.join(", "),t.jsx("br",{})]}),t.jsxs("small",{children:["Created: ",new Date(S.createdAt).toLocaleDateString()]})]})})},S.id)):null;return t.jsxs(xu,{children:[t.jsx(B,{children:"Navigation Chart"}),t.jsx(fu,{children:t.jsxs(Cu,{children:[t.jsx("label",{children:"Display:"}),t.jsx(T,{variant:e?"primary":"secondary",size:"sm",onClick:()=>r(!e),children:"Trip Routes"}),t.jsx(T,{variant:n?"primary":"secondary",size:"sm",onClick:()=>o(!n),children:"Locations"}),k.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("label",{children:"Overlays:"}),k.map(S=>t.jsx(T,{variant:y.has(S.id)?"secondary":"primary",size:"sm",onClick:()=>w(S.id),children:S.name},S.id))]}),t.jsx("label",{children:"Category:"}),t.jsxs("select",{value:s,onChange:S=>i(S.target.value),children:[t.jsx("option",{value:"",children:"All Categories"}),t.jsx("option",{value:"fishing",children:"Fishing"}),t.jsx("option",{value:"marina",children:"Marina"}),t.jsx("option",{value:"anchorage",children:"Anchorage"}),t.jsx("option",{value:"hazard",children:"Hazard"}),t.jsx("option",{value:"other",children:"Other"})]})]})}),t.jsxs(yu,{children:[t.jsxs(bu,{title:"Chart Display",padding:"none",children:[t.jsxs(Lo,{center:H,zoom:10,style:{height:"100%",width:"100%"},ref:v,children:[t.jsx(Kr,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),u.filter(S=>!y.has(S.id)).map(S=>S.type==="wms"?t.jsx(Ba,{url:S.url,layers:S.wmsLayers||"",format:S.wmsFormat||"image/png",transparent:!0,opacity:S.opacity,attribution:S.attribution},S.id):t.jsx(Kr,{url:S.url,opacity:S.opacity,maxZoom:S.maxZoom,attribution:S.attribution},S.id)),t.jsx(Tu,{onBoundsChange:f}),t.jsx(ku,{onMapClick:V}),Fe(),ne(),F("aisstream")&&g.vessels.map(S=>t.jsx(ge,{position:[S.latitude,S.longitude],icon:new Se.DivIcon({html:`<div style="
                    width: 0; height: 0;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-bottom: 14px solid #00FFFF;
                    transform: rotate(${S.heading}deg);
                  "></div>`,className:"vessel-marker",iconSize:[12,14],iconAnchor:[6,7]}),children:t.jsx(xe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:S.name}),t.jsx("br",{}),"MMSI: ",S.mmsi,t.jsx("br",{}),"Speed: ",S.speed.toFixed(1)," kts",t.jsx("br",{}),"Heading: ",S.heading,"°"]})})},`ais-${S.mmsi}`)),F("marinetraffic")&&g.marineTrafficVessels.map(S=>t.jsx(ge,{position:[S.latitude,S.longitude],icon:new Se.DivIcon({html:`<div style="
                    width: 0; height: 0;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-bottom: 14px solid #FF00FF;
                    transform: rotate(${S.heading}deg);
                  "></div>`,className:"vessel-marker",iconSize:[12,14],iconAnchor:[6,7]}),children:t.jsx(xe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:S.name}),t.jsx("br",{}),"MMSI: ",S.mmsi,t.jsx("br",{}),"Speed: ",S.speed.toFixed(1)," kts",t.jsx("br",{}),"Destination: ",S.destination]})})},`mt-${S.mmsi}`)),F("noaa-coops")&&g.tideStations.map(S=>t.jsx(ge,{position:[S.latitude,S.longitude],icon:new Se.DivIcon({html:`<div style="
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
                  ">T</div>`,className:"tide-marker",iconSize:[22,22],iconAnchor:[11,11]}),children:t.jsx(xe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:S.name}),t.jsx("br",{}),"Station: ",S.id,t.jsx("br",{}),S.predictions.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("strong",{children:"Predictions:"}),t.jsx("br",{}),S.predictions.slice(0,6).map((W,G)=>t.jsxs("span",{children:[W.type==="H"?"▲ High":"▼ Low",": ",W.value.toFixed(1)," ft at ",W.time,t.jsx("br",{})]},G))]})]})})},`tide-${S.id}`)),l&&m.latitude&&m.longitude&&t.jsx(ge,{position:[m.latitude,m.longitude],children:t.jsx(xe,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"New Location"}),t.jsx("br",{}),'Click "Save Location" to confirm']})})})]}),(F("open-meteo")||F("stormglass"))&&g.weather&&t.jsxs("div",{style:{position:"absolute",bottom:"10px",left:"10px",background:"rgba(0,0,0,0.85)",color:"#99CCFF",padding:"8px 12px",borderRadius:"4px",border:"1px solid #336699",fontSize:"12px",fontFamily:"monospace",zIndex:1e3,lineHeight:"1.5"},children:[t.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px",color:"#FFCC99"},children:"MARINE WEATHER"}),g.weather.waveHeight!=null&&t.jsxs("div",{children:["Waves: ",g.weather.waveHeight,"m"]}),g.weather.windSpeed!=null&&t.jsxs("div",{children:["Wind: ",g.weather.windSpeed," km/h"]}),g.weather.swellHeight!=null&&t.jsxs("div",{children:["Swell: ",g.weather.swellHeight,"m"]}),g.weather.temperature!=null&&t.jsxs("div",{children:["Temp: ",g.weather.temperature,"°C"]}),F("stormglass")&&g.stormglassWeather&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{fontWeight:"bold",marginTop:"4px",color:"#CC99CC"},children:"STORMGLASS"}),g.stormglassWeather.waveHeight!=null&&t.jsxs("div",{children:["Waves: ",g.stormglassWeather.waveHeight,"m"]}),g.stormglassWeather.visibility!=null&&t.jsxs("div",{children:["Vis: ",g.stormglassWeather.visibility,"km"]}),g.stormglassWeather.waterTemperature!=null&&t.jsxs("div",{children:["Water: ",g.stormglassWeather.waterTemperature,"°C"]})]})]})]}),t.jsx($u,{title:"Location Manager",variant:"secondary",children:l?t.jsxs(wu,{children:[t.jsx("h3",{children:"Add New Location"}),t.jsx("p",{children:"Click on the map to set coordinates, then fill in the details below."}),t.jsx("input",{type:"text",placeholder:"Location Name",value:m.name,onChange:S=>d(W=>({...W,name:S.target.value}))}),t.jsxs("select",{value:m.category,onChange:S=>d(W=>({...W,category:S.target.value})),children:[t.jsx("option",{value:"fishing",children:"Fishing Spot"}),t.jsx("option",{value:"marina",children:"Marina"}),t.jsx("option",{value:"anchorage",children:"Anchorage"}),t.jsx("option",{value:"hazard",children:"Hazard"}),t.jsx("option",{value:"other",children:"Other"})]}),t.jsx("textarea",{placeholder:"Notes (optional)",value:m.notes,onChange:S=>d(W=>({...W,notes:S.target.value}))}),m.latitude&&m.longitude&&t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Coordinates"}),t.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333",fontFamily:"monospace"},children:["Lat: ",m.latitude.toFixed(6),t.jsx("br",{}),"Lng: ",m.longitude.toFixed(6)]})]}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(T,{onClick:R,disabled:!m.name||!m.latitude||!m.longitude||M.isPending,children:"Save Location"}),t.jsx(T,{variant:"secondary",onClick:()=>{c(!1),d({name:"",category:"other",notes:"",latitude:0,longitude:0})},children:"Cancel"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(T,{onClick:()=>c(!0),disabled:M.isPending,children:"Add New Location"}),h&&t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Selected Location"}),t.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333"},children:[t.jsx("strong",{children:h.name}),t.jsx("br",{}),"Category: ",h.category,t.jsx("br",{}),"Coordinates: ",h.latitude.toFixed(6),", ",h.longitude.toFixed(6),t.jsx("br",{}),h.notes&&t.jsxs(t.Fragment,{children:["Notes: ",h.notes,t.jsx("br",{})]}),h.tags.length>0&&t.jsxs(t.Fragment,{children:["Tags: ",h.tags.join(", "),t.jsx("br",{})]}),t.jsx("div",{style:{marginTop:"8px"},children:t.jsx(T,{size:"sm",variant:"accent",onClick:()=>Y(h.id),disabled:U.isPending,children:"Delete"})})]})]}),t.jsx(ju,{children:K.map(S=>t.jsxs(vu,{children:[t.jsx("div",{className:"location-name",children:S.name}),t.jsx("div",{className:"location-category",children:S.category}),S.notes&&t.jsx("div",{className:"location-notes",children:S.notes}),t.jsx("div",{className:"location-actions",children:t.jsx(T,{size:"sm",onClick:()=>{b(S),v.current&&v.current.setView([S.latitude,S.longitude],15)},children:"View"})})]},S.id))})]})})]}),(P||E)&&t.jsx(A,{label:"System Status",value:"Loading chart data...",valueColor:"anakiwa"})]})},Mt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,uo=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Eu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Fu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,Lu=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,Du=a.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,zu=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,Mu=()=>{const{data:e,isLoading:r,error:n}=ca();if(r)return t.jsxs(Mt,{children:[t.jsx(B,{children:"Captain's License Progress"}),t.jsx(Lu,{children:t.jsx(A,{label:"System Status",value:"Loading Progress Data...",valueColor:"neonCarrot",size:"lg"})})]});if(n)return t.jsxs(Mt,{children:[t.jsx(B,{children:"Captain's License Progress"}),t.jsx(Du,{children:t.jsx(Ae,{type:"error",children:"Error loading license progress data. Please check your connection and try again."})})]});if(!e)return t.jsxs(Mt,{children:[t.jsx(B,{children:"Captain's License Progress"}),t.jsx(D,{title:"No Data",variant:"secondary",children:t.jsx(zu,{children:"No license progress data available yet. Log some trips to start tracking."})})]});const{totalDays:o,daysInLast3Years:s,totalHours:i,daysRemaining360:l,daysRemaining90In3Years:c,estimatedCompletion360:m}=e,d=o>=360,h=s>=90,b=d&&h;return t.jsxs(Mt,{children:[t.jsx(B,{children:"Captain's License Progress"}),b&&t.jsx(Ae,{type:"success",children:"Congratulations! You have met all requirements for OUPV (6-pack) Captain's License eligibility."}),t.jsx(D,{title:"Current Sea Time Statistics",variant:"primary",children:t.jsxs(uo,{children:[t.jsx(A,{label:"Total Sea Time Days",value:o,valueColor:"neonCarrot",size:"lg"}),t.jsx(A,{label:"Days (Last 3 Years)",value:s,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Total Hours",value:i.toFixed(1),unit:"hrs",valueColor:"anakiwa",size:"lg"}),t.jsx(A,{label:"Average Hours/Day",value:o>0?(i/o).toFixed(1):"0.0",unit:"hrs",valueColor:"success",size:"lg"})]})}),t.jsxs(Eu,{children:[t.jsx(D,{title:"360-Day Total Requirement",variant:"primary",children:t.jsx(Ut,{title:"Total Sea Time Days",current:o,target:360,unit:"days",color:"neonCarrot",size:"lg",showPercentage:!0})}),t.jsx(D,{title:"90-Day Recent Requirement",variant:"secondary",children:t.jsx(Ut,{title:"Days in Last 3 Years",current:s,target:90,unit:"days",color:"lilac",size:"lg",showPercentage:!0})})]}),t.jsx(D,{title:"Completion Estimates",variant:"accent",children:t.jsxs(Fu,{children:[t.jsx(rr,{title:"360-Day Goal",estimatedDate:d?void 0:m??void 0,daysRemaining:d?void 0:l,isComplete:d,color:"neonCarrot",size:"md"}),t.jsx(rr,{title:"90-Day (3 Years) Goal",daysRemaining:h?void 0:c,isComplete:h,color:"lilac",size:"md"}),!b&&t.jsx(rr,{title:"License Eligibility",estimatedDate:m??void 0,isComplete:b,color:"anakiwa",size:"md"})]})}),t.jsx(D,{title:"OUPV (6-Pack) License Requirements",variant:"secondary",children:t.jsxs(uo,{children:[t.jsx(A,{label:"Total Sea Time",value:"360 Days",valueColor:"neonCarrot",size:"md"}),t.jsx(A,{label:"Recent Experience",value:"90 Days in 3 Years",valueColor:"lilac",size:"md"}),t.jsx(A,{label:"Minimum Per Day",value:"4 Hours",valueColor:"anakiwa",size:"md"}),t.jsx(A,{label:"Additional Requirements",value:"Medical, Drug Test, Course",valueColor:"success",size:"md"})]})})]})},Br=a.div`
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
`,Iu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Ru=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  flex-wrap: wrap;
`,Nu=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,Pu=a.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,xo=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,It=a.div`
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
`,X=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  
  &.text {
    font-family: ${e=>e.theme.typography.fontFamily.primary};
  }
  
  &.status {
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
  }
`,Bu=()=>{const[e,r]=Ze.useState(""),{data:n,isLoading:o}=he(),{data:s,isLoading:i,error:l}=ba(e||void 0),{data:c,isLoading:m,error:d}=on(e||void 0),{data:h,isLoading:b,error:v}=ja(e||void 0),u=o||i||m||b,p=l||d||v,f=$.useMemo(()=>{if(!s||!c||!h)return{totalTemplates:0,activeTemplates:0,upcomingCount:0,overdueCount:0,completedThisMonth:0,totalCostThisMonth:0,averageCost:0,completionRate:0};const x=new Date,y=new Date(x.getFullYear(),x.getMonth(),1),j=c.filter(E=>new Date(E.dueDate)<x).length,w=h.filter(E=>E.completedAt&&new Date(E.completedAt)>=y),F=w.reduce((E,M)=>E+(M.actualCost||0),0),k=h.filter(E=>E.actualCost&&E.actualCost>0),I=k.length>0?k.reduce((E,M)=>E+(M.actualCost||0),0)/k.length:0,P=c.length+h.length,K=P>0?h.length/P*100:0;return{totalTemplates:s.length,activeTemplates:s.filter(E=>E.isActive).length,upcomingCount:c.length,overdueCount:j,completedThisMonth:w.length,totalCostThisMonth:F,averageCost:I,completionRate:K}},[s,c,h]),g=$.useMemo(()=>{if(!c)return[];const x=new Date,y=new Date(x.getTime()+7*24*60*60*1e3);return c.map(j=>{const w=new Date(j.dueDate);let F="upcoming",k="Upcoming";return w<x?(F="overdue",k="Overdue"):w<=y&&(F="due-soon",k="Due Soon"),{...j,status:F,statusText:k,daysUntilDue:Math.ceil((w.getTime()-x.getTime())/(1e3*60*60*24))}}).sort((j,w)=>new Date(j.dueDate).getTime()-new Date(w.dueDate).getTime())},[c]);return u?t.jsxs(Br,{children:[t.jsx(B,{children:"Maintenance Reports"}),t.jsx(Nu,{children:t.jsx(A,{label:"System Status",value:"Loading Maintenance Data...",valueColor:"neonCarrot",size:"lg"})})]}):p?t.jsxs(Br,{children:[t.jsx(B,{children:"Maintenance Reports"}),t.jsx(Pu,{children:t.jsx(Ae,{type:"error",children:"Error loading maintenance data. Please check your connection and try again."})})]}):t.jsxs(Br,{children:[t.jsx(B,{children:"Maintenance Reports"}),t.jsxs(Ru,{children:[t.jsx(T,{variant:e===""?"primary":"secondary",onClick:()=>r(""),children:"All Boats"}),n==null?void 0:n.map(x=>t.jsx(T,{variant:e===x.id?"primary":"secondary",onClick:()=>r(x.id),children:x.name},x.id))]}),t.jsx(D,{title:"Maintenance Overview",variant:"primary",children:t.jsxs(go,{children:[t.jsx(A,{label:"Active Templates",value:f.activeTemplates,valueColor:"neonCarrot",size:"lg"}),t.jsx(A,{label:"Upcoming Tasks",value:f.upcomingCount,valueColor:"anakiwa",size:"lg"}),t.jsx(A,{label:"Overdue Tasks",value:f.overdueCount,valueColor:f.overdueCount>0?"neonCarrot":"success",size:"lg"}),t.jsx(A,{label:"Completed This Month",value:f.completedThisMonth,valueColor:"success",size:"lg"})]})}),t.jsx(D,{title:"Cost Analysis",variant:"secondary",children:t.jsxs(go,{children:[t.jsx(A,{label:"Cost This Month",value:`$${f.totalCostThisMonth.toFixed(2)}`,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Average Cost Per Task",value:`$${f.averageCost.toFixed(2)}`,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Completion Rate",value:`${f.completionRate.toFixed(1)}%`,valueColor:"anakiwa",size:"lg"})]})}),t.jsxs(Iu,{children:[t.jsx(D,{title:"Template Status",variant:"primary",children:t.jsx(Ut,{title:"Active Templates",current:f.activeTemplates,target:f.totalTemplates,unit:"templates",color:"neonCarrot",size:"md",showPercentage:!0})}),t.jsx(D,{title:"Task Completion",variant:"secondary",children:t.jsx(Ut,{title:"Completion Rate",current:f.completionRate,target:100,unit:"%",color:"lilac",size:"md",showPercentage:!1})})]}),g.length>0&&t.jsx(D,{title:"Upcoming Maintenance Tasks",variant:"accent",children:t.jsxs(xo,{children:[t.jsxs(It,{className:"header",children:[t.jsx(X,{children:"Task"}),t.jsx(X,{children:"Boat"}),t.jsx(X,{children:"Due Date"}),t.jsx(X,{children:"Days Until Due"}),t.jsx(X,{children:"Status"})]}),g.map(x=>{var y,j,w,F;return t.jsxs(It,{className:x.status,children:[t.jsxs(X,{className:"text",children:[((y=x.template)==null?void 0:y.title)||"Unknown Task",((j=x.template)==null?void 0:j.component)&&t.jsx("div",{style:{fontSize:"0.8em",color:"#999"},children:x.template.component})]}),t.jsx(X,{className:"text",children:((F=(w=x.template)==null?void 0:w.boat)==null?void 0:F.name)||"Unknown"}),t.jsx(X,{children:new Date(x.dueDate).toLocaleDateString()}),t.jsx(X,{children:x.daysUntilDue>0?`${x.daysUntilDue} days`:`${Math.abs(x.daysUntilDue)} days ago`}),t.jsx(X,{className:"status",children:x.statusText})]},x.id)})]})}),h&&h.length>0&&t.jsx(D,{title:"Recent Completions",variant:"secondary",children:t.jsxs(xo,{children:[t.jsxs(It,{className:"header",children:[t.jsx(X,{children:"Task"}),t.jsx(X,{children:"Boat"}),t.jsx(X,{children:"Completed"}),t.jsx(X,{children:"Cost"}),t.jsx(X,{children:"Time"})]}),h.slice(0,10).map(x=>{var y,j,w;return t.jsxs(It,{children:[t.jsx(X,{className:"text",children:((y=x.template)==null?void 0:y.title)||"Unknown Task"}),t.jsx(X,{className:"text",children:((w=(j=x.template)==null?void 0:j.boat)==null?void 0:w.name)||"Unknown"}),t.jsx(X,{children:x.completedAt?new Date(x.completedAt).toLocaleDateString():"N/A"}),t.jsx(X,{children:x.actualCost?`$${x.actualCost.toFixed(2)}`:"N/A"}),t.jsx(X,{children:x.actualTime?`${x.actualTime}h`:"N/A"})]},x.id)})]})})]})},Ou=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Uu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
`,fo=a.div`
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
`,yo=a.h2`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  .secondary & {
    color: ${e=>e.theme.colors.primary.lilac};
  }
`,bo=a.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin: 0;
`,$o=a.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Pe=a.li`
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
`,qu=()=>{const e=de();return t.jsxs(Ou,{children:[t.jsx(B,{children:"System Reports"}),t.jsx(D,{title:"Available Reports",variant:"primary",children:t.jsxs(Uu,{children:[t.jsxs(fo,{onClick:()=>e("/reports/license"),children:[t.jsx(yo,{children:"Captain's License Progress"}),t.jsx(bo,{children:"Track your progress toward OUPV (6-pack) Captain's License requirements"}),t.jsxs($o,{children:[t.jsx(Pe,{children:"360-day total sea time tracking"}),t.jsx(Pe,{children:"90-day recent experience monitoring"}),t.jsx(Pe,{children:"Progress charts and completion estimates"}),t.jsx(Pe,{children:"Detailed statistics and requirements"})]})]}),t.jsxs(fo,{className:"secondary",onClick:()=>e("/reports/maintenance"),children:[t.jsx(yo,{children:"Maintenance Reports"}),t.jsx(bo,{children:"Comprehensive maintenance tracking and cost analysis for all vessels"}),t.jsxs($o,{children:[t.jsx(Pe,{children:"Upcoming and overdue task tracking"}),t.jsx(Pe,{children:"Cost analysis and completion rates"}),t.jsx(Pe,{children:"Template status and activity monitoring"}),t.jsx(Pe,{children:"Recent completion history"})]})]})]})}),t.jsx(D,{title:"Quick Access",variant:"accent",children:t.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[t.jsx(T,{variant:"primary",onClick:()=>e("/reports/license"),children:"License Progress"}),t.jsx(T,{variant:"secondary",onClick:()=>e("/reports/maintenance"),children:"Maintenance Reports"})]})})]})},Hu=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,Wu=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Or=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Ur=a.label`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,qr=a.input`
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
`,Ku=a.div`
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
`,Vu=a.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
`,Hr=a.div`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Wr=a.div`
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,Gu=()=>{const{user:e,logout:r}=nn(),n=de(),[o,s]=$.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[i,l]=$.useState(!1),[c,m]=$.useState(null),d=v=>u=>{s(p=>({...p,[v]:u.target.value})),c&&m(null)},h=async v=>{if(v.preventDefault(),!o.currentPassword||!o.newPassword||!o.confirmPassword){m({type:"error",text:"All password fields are required"});return}if(o.newPassword!==o.confirmPassword){m({type:"error",text:"New passwords do not match"});return}if(o.newPassword.length<8){m({type:"error",text:"New password must be at least 8 characters"});return}l(!0),m({type:"info",text:"Changing password..."});try{await N.changePassword(o.currentPassword,o.newPassword),m({type:"success",text:"Password changed successfully. You will be logged out."}),s({currentPassword:"",newPassword:"",confirmPassword:""}),setTimeout(()=>{r()},2e3)}catch(u){m({type:"error",text:u.message||"Failed to change password"})}finally{l(!1)}},b=async()=>{window.confirm("Are you sure you want to log out?")&&await r()};return t.jsxs(Hu,{children:[t.jsx(B,{children:"System Settings"}),t.jsxs(Wu,{children:[t.jsxs(D,{title:"User Account",children:[t.jsxs(Vu,{children:[t.jsx(Hr,{children:"Username:"}),t.jsx(Wr,{children:(e==null?void 0:e.username)||"Unknown"}),t.jsx(Hr,{children:"Account Created:"}),t.jsx(Wr,{children:e!=null&&e.createdAt?new Date(e.createdAt).toLocaleDateString():"Unknown"}),t.jsx(Hr,{children:"Last Updated:"}),t.jsx(Wr,{children:e!=null&&e.updatedAt?new Date(e.updatedAt).toLocaleDateString():"Unknown"})]}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(T,{onClick:b,variant:"secondary",children:"Logout"})})]}),t.jsx(D,{title:"Change Password",children:t.jsxs("form",{onSubmit:h,children:[t.jsxs(Or,{children:[t.jsx(Ur,{htmlFor:"currentPassword",children:"Current Password"}),t.jsx(qr,{id:"currentPassword",type:"password",value:o.currentPassword,onChange:d("currentPassword"),disabled:i,autoComplete:"current-password"})]}),t.jsxs(Or,{children:[t.jsx(Ur,{htmlFor:"newPassword",children:"New Password"}),t.jsx(qr,{id:"newPassword",type:"password",value:o.newPassword,onChange:d("newPassword"),disabled:i,autoComplete:"new-password",minLength:8})]}),t.jsxs(Or,{children:[t.jsx(Ur,{htmlFor:"confirmPassword",children:"Confirm New Password"}),t.jsx(qr,{id:"confirmPassword",type:"password",value:o.confirmPassword,onChange:d("confirmPassword"),disabled:i,autoComplete:"new-password",minLength:8})]}),c&&t.jsx(Ku,{$type:c.type,children:c.text}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(T,{type:"submit",disabled:i,children:i?"Changing Password...":"Change Password"})})]})})]}),t.jsxs(D,{title:"System Management",children:[t.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:[t.jsx(T,{onClick:()=>n("/settings/backup"),variant:"secondary",children:"Backup Manager"}),t.jsx(T,{onClick:()=>n("/settings/nautical"),variant:"secondary",children:"Nautical Data"})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[t.jsx(A,{label:"Interface Version",value:"LCARS v1.0",valueColor:"anakiwa"}),t.jsx(A,{label:"System Status",value:"Operational",valueColor:"success"}),t.jsx(A,{label:"API Endpoint",value:"/api/v1",valueColor:"anakiwa"}),t.jsx(A,{label:"Authentication",value:"JWT Token-based",valueColor:"lilac"})]})]})]})},_u=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,Qu=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,jo=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,Ju=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.sm};
  overflow: hidden;
`,Zu=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing.md};
  cursor: pointer;

  &:hover {
    background: ${e=>e.theme.colors.surface.medium};
  }
`,Yu=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  flex: 1;
`,Xu=a.span`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,eg=a.span`
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: ${e=>e.$tier==="free"?e.theme.colors.status.success+"30":e.theme.colors.primary.neonCarrot+"30"};
  color: ${e=>e.$tier==="free"?e.theme.colors.status.success:e.theme.colors.primary.neonCarrot};
  border: 1px solid ${e=>e.$tier==="free"?e.theme.colors.status.success:e.theme.colors.primary.neonCarrot};
`,tg=a.span`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,rg=a.div`
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
`,ng=a.div`
  padding: 0 ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.md};
  border-top: 1px solid ${e=>e.theme.colors.surface.medium};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,og=a.p`
  color: ${e=>e.theme.colors.text.secondary};
  margin: ${e=>e.theme.spacing.sm} 0 0;
  line-height: 1.5;
`,ag=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.md};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,vo=a.div``,wo=a.div`
  color: ${e=>e.$type==="pro"?e.theme.colors.status.success:e.theme.colors.primary.neonCarrot};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Co=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  padding: 2px 0;

  &::before {
    content: '${e=>e.$type==="pro"?"+":"-"}';
    color: ${e=>e.$type==="pro"?e.theme.colors.status.success:e.theme.colors.primary.neonCarrot};
    margin-right: ${e=>e.theme.spacing.xs};
    font-weight: bold;
  }
`,sg=a.input`
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
`,ig=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,lg=a.label`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,cg=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
`,So=a.a`
  color: ${e=>e.theme.colors.primary.anakiwa};
  text-decoration: none;
  font-size: ${e=>e.theme.typography.fontSize.sm};

  &:hover {
    color: ${e=>e.theme.colors.primary.tanoi};
    text-decoration: underline;
  }
`,dg=a.div`
  color: ${e=>e.theme.colors.primary.lilac};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-style: italic;
`,ko=({provider:e,enabled:r,apiKey:n,onToggle:o,onApiKeyChange:s})=>{const[i,l]=$.useState(!1);return t.jsxs(Ju,{$expanded:i,children:[t.jsxs(Zu,{onClick:()=>l(!i),children:[t.jsxs(Yu,{children:[t.jsx(Xu,{children:e.name}),t.jsx(eg,{$tier:e.tier,children:e.tier}),!i&&t.jsx(tg,{children:e.description.split(".")[0]})]}),t.jsx(rg,{$active:r,onClick:c=>{c.stopPropagation(),o()}})]}),i&&t.jsxs(ng,{children:[t.jsx(og,{children:e.description}),t.jsxs(ag,{children:[t.jsxs(vo,{children:[t.jsx(wo,{$type:"pro",children:"Advantages"}),e.pros.map((c,m)=>t.jsx(Co,{$type:"pro",children:c},m))]}),t.jsxs(vo,{children:[t.jsx(wo,{$type:"con",children:"Limitations"}),e.cons.map((c,m)=>t.jsx(Co,{$type:"con",children:c},m))]})]}),e.requiresApiKey&&t.jsxs(ig,{children:[t.jsx(lg,{children:"API Key"}),t.jsx(sg,{type:"password",placeholder:"Enter API key...",value:n||"",onChange:c=>s(c.target.value),onClick:c=>c.stopPropagation()}),e.apiKeySignupUrl&&t.jsx(So,{href:e.apiKeySignupUrl,target:"_blank",rel:"noopener noreferrer",children:"Get an API key →"})]}),t.jsxs(cg,{children:[t.jsx(So,{href:e.website,target:"_blank",rel:"noopener noreferrer",children:"Visit website →"}),e.pricingNote&&t.jsx(dg,{children:e.pricingNote})]})]})]})},mg=()=>{const e=de(),{isEnabled:r,getProviderConfig:n,toggleProvider:o,setApiKey:s}=_t();return t.jsxs(_u,{children:[t.jsx(Qu,{children:t.jsx(T,{variant:"secondary",size:"sm",onClick:()=>e("/settings"),children:"← Settings"})}),t.jsx(B,{children:"Nautical Data Providers"}),t.jsx(D,{title:"Free Providers",variant:"primary",children:t.jsx(jo,{children:Yh.map(i=>t.jsx(ko,{provider:i,enabled:r(i.id),apiKey:n(i.id).apiKey,onToggle:()=>o(i.id),onApiKeyChange:l=>s(i.id,l)},i.id))})}),t.jsx(D,{title:"Paid Providers",variant:"secondary",children:t.jsx(jo,{children:Xh.map(i=>t.jsx(ko,{provider:i,enabled:r(i.id),apiKey:n(i.id).apiKey,onToggle:()=>o(i.id),onApiKeyChange:l=>s(i.id,l)},i.id))})})]})},pg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,hg=a.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ug=a.div`
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
`,gg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,xg=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,fg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,yg=a.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,bg=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,$g=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
`,jg=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,vg=()=>{const[e,r]=$.useState([]),[n,o]=$.useState(!0),[s,i]=$.useState(!1),[l,c]=$.useState(null);$.useEffect(()=>{m()},[]);const m=async()=>{try{o(!0);const u=await N.getBackups();r(u)}catch(u){c({type:"error",text:u.message||"Failed to load backups"})}finally{o(!1)}},d=async()=>{if(!s){i(!0),c({type:"info",text:"Creating backup... This may take a few minutes."});try{const u=await N.createBackup();c({type:"success",text:`Backup created successfully: ${u.filename}`}),await m()}catch(u){c({type:"error",text:u.message||"Failed to create backup"})}finally{i(!1)}}},h=async u=>{try{c({type:"info",text:`Downloading ${u.filename}...`});const p=await N.downloadBackup(u.id),f=window.URL.createObjectURL(p),g=document.createElement("a");g.href=f,g.download=u.filename,document.body.appendChild(g),g.click(),document.body.removeChild(g),window.URL.revokeObjectURL(f),c({type:"success",text:`Download started: ${u.filename}`})}catch(p){c({type:"error",text:p.message||"Failed to download backup"})}},b=u=>{if(u===0)return"0 Bytes";const p=1024,f=["Bytes","KB","MB","GB"],g=Math.floor(Math.log(u)/Math.log(p));return parseFloat((u/Math.pow(p,g)).toFixed(2))+" "+f[g]},v=u=>new Date(u).toLocaleString();return t.jsxs(pg,{children:[t.jsx(B,{children:"Database Backup Manager"}),l&&t.jsx(ug,{$type:l.type,children:l.text}),t.jsxs(hg,{children:[t.jsxs(D,{title:"Backup Operations",children:[t.jsxs("div",{style:{marginBottom:"20px"},children:[t.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:t.jsx(T,{onClick:d,disabled:s,children:s?"Creating Backup...":"Create Manual Backup"})}),t.jsx("div",{style:{width:"100%"},children:t.jsx(T,{onClick:m,disabled:n,variant:"secondary",children:n?"Refreshing...":"Refresh List"})})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[t.jsx(A,{label:"Total Backups",value:e.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Total Size",value:b(e.reduce((u,p)=>u+p.size,0)),valueColor:"lilac"}),t.jsx(A,{label:"Latest Backup",value:e.length>0?v(e[0].createdAt):"None",valueColor:"neonCarrot"})]}),t.jsxs("div",{style:{marginTop:"20px",padding:"10px",background:"rgba(255, 153, 102, 0.1)",border:"1px solid #FF9966"},children:[t.jsx("strong",{style:{color:"#FF9966"},children:"Important:"}),t.jsxs("ul",{style:{margin:"10px 0",paddingLeft:"20px",color:"#CCCCCC"},children:[t.jsx("li",{children:"Backups include both database records and uploaded photos"}),t.jsx("li",{children:"Large backups may take several minutes to create"}),t.jsx("li",{children:"Store backups in a secure location outside the system"}),t.jsx("li",{children:"Test backup restoration procedures regularly"})]})]})]}),t.jsx(D,{title:"Available Backups",children:n?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#6688CC"},children:"Loading backups..."})}):e.length===0?t.jsx(jg,{children:"No backups available. Create your first backup to get started."}):t.jsx(gg,{children:e.map(u=>t.jsxs(xg,{children:[t.jsxs(fg,{children:[t.jsx(yg,{children:u.filename}),t.jsxs(bg,{children:[t.jsxs("span",{children:["Created: ",v(u.createdAt)]}),t.jsxs("span",{children:["Size: ",b(u.size)]})]})]}),t.jsx($g,{children:t.jsx(T,{onClick:()=>h(u),variant:"secondary",size:"sm",children:"Download"})})]},u.id))})})]})]})},wg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Cg=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Sg=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,kg=a.h2`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  min-width: 200px;
  text-align: center;
`,Tg=a.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${e=>e.theme.colors.primary.anakiwa};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
`,Ag=a.div`
  background-color: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Eg=a.div`
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
`,Fg=a.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.$isToday?e.theme.colors.primary.neonCarrot:e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Lg=a.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,To=a.div`
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
`,Dg=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,zg=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Ao=a.div`
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
`,Mg=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Ig=["January","February","March","April","May","June","July","August","September","October","November","December"],Rg=()=>{const[e,r]=$.useState(new Date),[n,o]=$.useState([]),{data:s,isLoading:i}=Ue(),{data:l,isLoading:c}=on();$.useEffect(()=>{const x=[];s&&s.forEach(y=>{var j;x.push({id:`trip-${y.id}`,title:`Trip: ${((j=y.boat)==null?void 0:j.name)||"Unknown Boat"}`,date:new Date(y.startTime),type:"trip",data:y})}),l&&l.forEach(y=>{var j;x.push({id:`maintenance-${y.id}`,title:`Maintenance: ${((j=y.template)==null?void 0:j.title)||"Unknown Task"}`,date:new Date(y.dueDate),type:"maintenance",data:y})}),o(x)},[s,l]);const m=x=>{r(y=>{const j=new Date(y);return x==="prev"?j.setMonth(y.getMonth()-1):j.setMonth(y.getMonth()+1),j})},d=()=>{r(new Date)},h=x=>{const y=x.getFullYear(),j=x.getMonth(),w=new Date(y,j,1),k=new Date(y,j+1,0).getDate(),I=w.getDay(),P=[];for(let E=I-1;E>=0;E--){const M=new Date(y,j,-E);P.push(M)}for(let E=1;E<=k;E++)P.push(new Date(y,j,E));const K=42-P.length;for(let E=1;E<=K;E++)P.push(new Date(y,j+1,E));return P},b=x=>n.filter(y=>new Date(y.date).toDateString()===x.toDateString()),v=x=>{const y=new Date;return x.toDateString()===y.toDateString()},u=x=>x.getMonth()===e.getMonth(),p=h(e),f=(s==null?void 0:s.filter(x=>{const y=new Date(x.startTime);return y.getMonth()===e.getMonth()&&y.getFullYear()===e.getFullYear()}))||[],g=(l==null?void 0:l.filter(x=>{const y=new Date(x.dueDate);return y.getMonth()===e.getMonth()&&y.getFullYear()===e.getFullYear()}))||[];return t.jsxs(wg,{children:[t.jsx(B,{children:"Mission Calendar"}),t.jsxs(Dg,{children:[t.jsx(A,{label:"Current Month Trips",value:f.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Upcoming Maintenance",value:g.length.toString(),valueColor:"lilac"}),t.jsx(A,{label:"Total Events",value:(f.length+g.length).toString(),valueColor:"neonCarrot"})]}),t.jsxs(D,{title:"Calendar View",children:[t.jsxs(Cg,{children:[t.jsxs(Sg,{children:[t.jsx(T,{onClick:()=>m("prev"),variant:"secondary",size:"sm",children:"← Previous"}),t.jsxs(kg,{children:[Ig[e.getMonth()]," ",e.getFullYear()]}),t.jsx(T,{onClick:()=>m("next"),variant:"secondary",size:"sm",children:"Next →"})]}),t.jsx(T,{onClick:d,size:"sm",children:"Today"})]}),t.jsxs(zg,{children:[t.jsx(Ao,{$color:"#6688CC",children:"Trips"}),t.jsx(Ao,{$color:"#CC99CC",children:"Maintenance"})]}),t.jsxs(Tg,{children:[Mg.map(x=>t.jsx(Ag,{children:x},x)),p.map((x,y)=>{const j=b(x);return t.jsxs(Eg,{$isCurrentMonth:u(x),$isToday:v(x),$hasEvents:j.length>0,children:[t.jsx(Fg,{$isToday:v(x),children:x.getDate()}),t.jsxs(Lg,{children:[j.slice(0,3).map(w=>t.jsx(To,{$type:w.type,title:w.title,children:w.title},w.id)),j.length>3&&t.jsxs(To,{$type:"trip",children:["+",j.length-3," more"]})]})]},y)})]}),(i||c)&&t.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#6688CC"},children:"Loading calendar data..."})]})]})},Ng=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Pg=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,Bg=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.md};
`,Og=a.div`
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
`,Ug=a.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`,qg=a.div`
  padding: ${e=>e.theme.spacing.sm};
`,Hg=a.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  margin-bottom: ${e=>e.theme.spacing.xs};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,Wg=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Kg=a.span`
  background: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
`,Vg=a.div`
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
`,Gg=a.div`
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,_g=a.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
`,Qg=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  text-align: center;
  max-width: 500px;
`,Jg=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,Zg=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,Yg=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Xg=()=>{const[e,r]=$.useState([]),[n,o]=$.useState([]),[s,i]=$.useState("all"),[l,c]=$.useState(null),[m,d]=$.useState(!0),{data:h,isLoading:b}=Ue();$.useEffect(()=>{const x=[];h&&h.forEach(y=>{y.photos&&y.photos.forEach(j=>{var w;x.push({...j,contextType:"trip",contextTitle:`Trip: ${((w=y.boat)==null?void 0:w.name)||"Unknown Boat"}`,contextDate:new Date(y.startTime).toLocaleDateString()})})}),x.sort((y,j)=>new Date(j.createdAt).getTime()-new Date(y.createdAt).getTime()),r(x),d(b)},[h,b]),$.useEffect(()=>{let x=e;s==="trips"&&(x=e.filter(y=>y.contextType==="trip")),o(x)},[e,s]);const v=x=>{c(x)},u=()=>{c(null)},p=x=>{if(!l)return;const y=n.findIndex(w=>w.id===l.id);let j=y;x==="prev"?j=y>0?y-1:n.length-1:j=y<n.length-1?y+1:0,c(n[j])},f=x=>{if(x===0)return"0 Bytes";const y=1024,j=["Bytes","KB","MB","GB"],w=Math.floor(Math.log(x)/Math.log(y));return parseFloat((x/Math.pow(y,w)).toFixed(2))+" "+j[w]},g=e.filter(x=>x.contextType==="trip");return t.jsxs(Ng,{children:[t.jsx(B,{children:"Photo Gallery"}),t.jsxs(Yg,{children:[t.jsx(A,{label:"Total Photos",value:e.length.toString(),valueColor:"neonCarrot"}),t.jsx(A,{label:"Trip Photos",value:g.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Maintenance Photos",value:"0",valueColor:"lilac"}),t.jsx(A,{label:"Total Size",value:f(e.reduce((x,y)=>x+(y.sizeBytes||0),0)),valueColor:"anakiwa"})]}),t.jsxs(D,{title:"Photo Collection",children:[t.jsxs(Pg,{children:[t.jsxs(T,{onClick:()=>i("all"),variant:s==="all"?"primary":"secondary",size:"sm",children:["All Photos (",e.length,")"]}),t.jsxs(T,{onClick:()=>i("trips"),variant:s==="trips"?"primary":"secondary",size:"sm",children:["Trip Photos (",g.length,")"]}),t.jsx(T,{onClick:()=>i("trips"),variant:s==="trips"?"primary":"secondary",size:"sm",disabled:!0,children:"Maintenance Photos (Coming Soon)"})]}),m?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#6688CC"},children:"Loading photos..."})}):n.length===0?t.jsx(Zg,{children:"No photos found. Photos will appear here when you attach them to trips."}):t.jsx(Bg,{children:n.map(x=>t.jsxs(Og,{onClick:()=>v(x),children:[t.jsx(Ug,{src:x.webOptimizedPath||x.originalPath,alt:x.contextTitle,loading:"lazy"}),t.jsxs(qg,{children:[t.jsx(Hg,{children:x.contextTitle}),t.jsxs(Wg,{children:[t.jsx(Kg,{$type:x.contextType,children:x.contextType}),t.jsx("span",{children:x.contextDate})]})]})]},x.id))})]}),t.jsx(Vg,{$isOpen:!!l,onClick:u,children:l&&t.jsxs(Gg,{onClick:x=>x.stopPropagation(),children:[t.jsx(_g,{src:l.webOptimizedPath||l.originalPath,alt:l.contextTitle}),t.jsxs(Qg,{children:[t.jsx("div",{style:{marginBottom:"10px"},children:t.jsx("strong",{children:l.contextTitle})}),t.jsxs("div",{style:{fontSize:"14px",color:"#CCCCCC"},children:[t.jsxs("div",{children:["Date: ",l.contextDate]}),t.jsxs("div",{children:["Size: ",f(l.sizeBytes||0)]}),t.jsxs("div",{children:["Type: ",l.mimeType]}),l.metadata&&t.jsxs("div",{children:["Dimensions: ",l.metadata.width," × ",l.metadata.height]})]})]}),t.jsxs(Jg,{children:[t.jsx(T,{onClick:()=>p("prev"),variant:"secondary",size:"sm",children:"← Previous"}),t.jsx(T,{onClick:u,size:"sm",children:"Close"}),t.jsx(T,{onClick:()=>p("next"),variant:"secondary",size:"sm",children:"Next →"})]})]})})]})},Rt=a.div`
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
`,ex=a.div`
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
`;function tx(){const{isAuthenticated:e,isLoading:r,needsSetup:n}=nn();return r?t.jsx(Rt,{children:t.jsx(ex,{children:t.jsx("div",{className:"loading-text",children:"Initializing LCARS Interface"})})}):n?t.jsx(Rt,{children:t.jsx(ir,{})}):e?t.jsx(Rt,{children:t.jsx($l,{children:t.jsx(xl,{children:t.jsxs(ln,{children:[t.jsx(q,{path:"/",element:t.jsx(Fn,{})}),t.jsx(q,{path:"/dashboard",element:t.jsx(mc,{})}),t.jsx(q,{path:"/boats",element:t.jsx(hd,{})}),t.jsx(q,{path:"/boats/new",element:t.jsx(Rd,{})}),t.jsx(q,{path:"/boats/:id",element:t.jsx(kd,{})}),t.jsx(q,{path:"/trips",element:t.jsx(Qd,{})}),t.jsx(q,{path:"/trips/:id",element:t.jsx(fm,{})}),t.jsx(q,{path:"/trips/:id/edit",element:t.jsx(Cm,{})}),t.jsx(q,{path:"/notes",element:t.jsx(Om,{})}),t.jsx(q,{path:"/notes/new",element:t.jsx(Qn,{})}),t.jsx(q,{path:"/notes/:id",element:t.jsx(Zm,{})}),t.jsx(q,{path:"/notes/:id/edit",element:t.jsx(Qn,{})}),t.jsx(q,{path:"/todos",element:t.jsx(uh,{})}),t.jsx(q,{path:"/maintenance",element:t.jsx(kh,{})}),t.jsx(q,{path:"/maintenance/templates/new",element:t.jsx(ho,{})}),t.jsx(q,{path:"/maintenance/templates/:id",element:t.jsx(zh,{})}),t.jsx(q,{path:"/maintenance/templates/:id/edit",element:t.jsx(ho,{})}),t.jsx(q,{path:"/maintenance/events/:id",element:t.jsx(qh,{})}),t.jsx(q,{path:"/map",element:t.jsx(Au,{})}),t.jsx(q,{path:"/reports",element:t.jsx(qu,{})}),t.jsx(q,{path:"/reports/license",element:t.jsx(Mu,{})}),t.jsx(q,{path:"/reports/maintenance",element:t.jsx(Bu,{})}),t.jsx(q,{path:"/settings",element:t.jsx(Gu,{})}),t.jsx(q,{path:"/settings/backup",element:t.jsx(vg,{})}),t.jsx(q,{path:"/settings/nautical",element:t.jsx(mg,{})}),t.jsx(q,{path:"/calendar",element:t.jsx(Rg,{})}),t.jsx(q,{path:"/photos",element:t.jsx(Xg,{})}),t.jsx(q,{path:"*",element:t.jsx(Fn,{})})]})})})}):t.jsx(Rt,{children:t.jsxs(ln,{children:[t.jsx(q,{path:"/setup",element:t.jsx(ir,{})}),t.jsx(q,{path:"*",element:t.jsx(ir,{})})]})})}const rx=Na`
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
`,nx={colors:{primary:{paleCanary:"#FFFF99",tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",eggplant:"#664466",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",bahamBlue:"#006699"},background:"#000000",surface:{dark:"#0A0A0A",medium:"#1A1119",light:"#2A2233"},text:{primary:"#FF9933",secondary:"#CC99CC",muted:"#664466",inverse:"#000000",light:"#FFCC99"},status:{success:"#55FF55",warning:"#FFFF99",error:"#FF5555",info:"#99CCFF"},interactive:{hover:"#FFCC66",active:"#FFCC99",disabled:"#664466"}},typography:{fontFamily:{primary:"'Antonio', 'Helvetica Neue', Arial, sans-serif",monospace:"'Courier New', monospace"},fontSize:{xs:"11px",sm:"13px",md:"15px",lg:"18px",xl:"24px",xxl:"32px",xxxl:"48px"},fontWeight:{normal:400,bold:700},lineHeight:{tight:1.1,normal:1.4,loose:1.7},letterSpacing:{tight:"-0.02em",normal:"0.04em",wide:"0.1em",extraWide:"0.2em"}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px"},borderRadius:{none:"0",sm:"4px",md:"8px",lg:"16px",xl:"24px",pill:"9999px"},shadows:{sm:"0 1px 3px rgba(255, 153, 51, 0.12)",md:"0 4px 8px rgba(255, 153, 51, 0.15)",lg:"0 10px 20px rgba(255, 153, 51, 0.18)",glow:"0 0 20px rgba(255, 153, 51, 0.35)",glowStrong:"0 0 40px rgba(255, 153, 51, 0.5)",glowSubtle:"0 0 10px rgba(255, 153, 51, 0.15)"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modal:1040,popover:1050,tooltip:1060},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},animation:{fast:"150ms",normal:"300ms",slow:"500ms"},lcars:{sidebarWidth:"200px",headerHeight:"60px",footerHeight:"40px",elbowSize:"60px",barThickness:"30px",buttonHeight:"40px",gap:"3px",buttonRadius:"9999px"}},ox=new Da({defaultOptions:{queries:{retry:3,staleTime:5*60*1e3,refetchOnWindowFocus:!1}}});Vr.createRoot(document.getElementById("root")).render(t.jsx(Ze.StrictMode,{children:t.jsx(za,{client:ox,children:t.jsx(Ra,{children:t.jsxs(Pa,{theme:nx,children:[t.jsx(rx,{}),t.jsx(qc,{children:t.jsx(tx,{})})]})})})}));
//# sourceMappingURL=index-Rz-JA65-.js.map
